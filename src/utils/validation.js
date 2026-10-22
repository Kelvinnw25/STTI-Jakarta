// Validasi sisi klien untuk formulir demo. Tidak ada data yang dikirim atau disimpan.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const required = (value, message) => (String(value ?? '').trim() ? '' : message)

export function validateEmail(value) {
  if (!value.trim()) return 'Email wajib diisi.'
  return EMAIL_RE.test(value.trim()) ? '' : 'Format email belum benar, contoh: nama@contoh.com.'
}

export function validatePhone(value) {
  if (!value.trim()) return 'Nomor WhatsApp wajib diisi.'
  const digits = value.replace(/[\s-]/g, '')
  return /^\+?\d{9,15}$/.test(digits) ? '' : 'Gunakan 9–15 digit angka, boleh diawali +.'
}

export function validateBirthDate(value) {
  if (!value) return 'Tanggal lahir wajib diisi.'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return 'Tanggal lahir tidak valid.'
  if (d > new Date()) return 'Tanggal lahir tidak boleh di masa depan.'
  if (d.getFullYear() < 1920) return 'Tanggal lahir tidak valid.'
  return ''
}

export const MAX_FILE_BYTES = 5 * 1024 * 1024
const FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png']

export function validateFile(file) {
  if (!file) return 'Pilih setidaknya satu berkas.'
  if (!FILE_TYPES.includes(file.type)) return 'Format berkas harus PDF, JPG, atau PNG.'
  if (file.size > MAX_FILE_BYTES) return 'Ukuran berkas maksimal 5 MB.'
  return ''
}
