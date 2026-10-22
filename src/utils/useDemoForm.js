import { useState } from 'react'

/**
 * Hook formulir demo: nilai terkontrol + validasi saat submit dan saat blur.
 * `validate(values)` mengembalikan objek { namaField: pesanGalat }.
 * Tidak ada permintaan jaringan; `submit` hanya menandai keberhasilan demo.
 */
export default function useDemoForm(initial, validate) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    // Hapus galat bidang tersebut saat pengguna mulai memperbaikinya.
    setErrors((e) => (e[name] ? { ...e, [name]: '' } : e))
    setSubmitted(false)
  }

  const onChange = (e) => setField(e.target.name, e.target.value)

  const onBlur = (e) => {
    const { name } = e.target
    const msg = validate(values)[name]
    if (msg) setErrors((er) => ({ ...er, [name]: msg }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    const invalid = Object.keys(found).filter((k) => found[k])
    setErrors(found)
    if (invalid.length) {
      setSubmitted(false)
      // Fokus ke bidang pertama yang bermasalah.
      document.getElementById(invalid[0])?.focus()
      return
    }
    const form = e.target
    setSubmitted(true)
    setValues(initial)
    setErrors({})
    form.reset()
    // Pastikan pesan sukses terlihat, terutama di layar kecil.
    requestAnimationFrame(() => form.querySelector('[role="status"]')?.scrollIntoView({ block: 'center' }))
  }

  return { values, errors, submitted, setField, onChange, onBlur, handleSubmit }
}
