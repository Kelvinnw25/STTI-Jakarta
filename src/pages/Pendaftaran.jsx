import Button from '../components/ui/Button'
import FormField from '../components/ui/FormField'
import Icon from '../components/ui/Icon'
import PageHeader from '../components/ui/PageHeader'
import Ph from '../components/ui/Ph'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import StepCard from '../components/ui/StepCard'
import { programs } from '../data/programs'
import { contact } from '../data/site'
import useDemoForm from '../utils/useDemoForm'
import { required, validateBirthDate, validateEmail, validateFile, validatePhone } from '../utils/validation'

const initial = { nama: '', lahir: '', email: '', wa: '', prodi: '', gereja: '', berkas: null }

const validate = (v) => ({
  nama: required(v.nama, 'Nama lengkap wajib diisi.'),
  lahir: validateBirthDate(v.lahir),
  email: validateEmail(v.email),
  wa: validatePhone(v.wa),
  prodi: required(v.prodi, 'Pilih program studi.'),
  gereja: required(v.gereja, 'Asal gereja / jemaat wajib diisi.'),
  berkas: validateFile(v.berkas),
})

const steps = [
  { icon: 'edit', title: 'Isi formulir online', text: 'Lengkapi data diri dan pilih program studi.' },
  { icon: 'upload', title: 'Unggah berkas', text: 'Siapkan dokumen pendukung, misalnya ijazah dan KTP.' },
  { icon: 'bell', title: 'Pengumuman', text: 'Pantau informasi hasil seleksi.' },
]

const requirements = [
  'Persyaratan dokumen 1',
  'Persyaratan dokumen 2',
  'Persyaratan administrasi 3',
  'Persyaratan administrasi 4',
]

const faqs = [
  { q: 'Kapan jadwal pendaftaran dibuka?', a: '[Jadwal pendaftaran]' },
  { q: 'Berapa biaya pendaftaran dan studi?', a: '[Informasi biaya]' },
  { q: 'Apakah tersedia beasiswa?', a: '[Informasi beasiswa]' },
]

export default function Pendaftaran() {
  const { errors, submitted, setField, onChange, onBlur, handleSubmit } = useDemoForm(initial, validate)
  const fieldProps = (id) => ({ id, error: errors[id], onChange, onBlur })

  return (
    <>
      <PageHeader title="Pendaftaran Mahasiswa Baru">
        Langkah mudah bergabung dengan STTI Jakarta: daftar online, tanpa perlu datang langsung untuk isi formulir awal.
      </PageHeader>

      <Section tone="navy" labelledBy="steps-title">
        <SectionHeading id="steps-title" title="Alur Pendaftaran" intro="Tiga langkah awal untuk menjadi calon mahasiswa." />
        <ol role="list" className="steps">
          {steps.map((s, i) => (
            <StepCard key={s.title} step={i + 1} icon={s.icon} title={s.title}>
              {s.text}
            </StepCard>
          ))}
        </ol>
      </Section>

      <Section labelledBy="req-title">
        <SectionHeading id="req-title" title="Persyaratan & Informasi" intro="Daftar resmi persyaratan menunggu konfirmasi dari STTI Jakarta." />
        <ul role="list" className="req-panel">
          {requirements.map((r) => (
            <li key={r}>
              <span className="check-list__icon">
                <Icon name="check" size={16} />
              </span>
              <Ph>{`[${r}]`}</Ph>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" id="formulir" labelledBy="form-title">
        <SectionHeading id="form-title" title="Formulir Pendaftaran" intro="Isi data berikut untuk mencoba alur pendaftaran." />
        <div className="form-layout">
          <form className="form-card" onSubmit={handleSubmit} noValidate aria-labelledby="form-title">
            <p className="demo-note" role="note">
              <strong>Prototipe:</strong> formulir ini hanya demonstrasi. Data dan berkas tidak dikirim, diunggah, atau
              disimpan.
            </p>

            {submitted && (
              <div className="alert alert--success" role="status">
                <Icon name="check" size={20} />
                <p>
                  <strong>Demo berhasil.</strong> Semua isian lolos validasi, tetapi tidak ada pendaftaran nyata yang
                  dikirim.
                </p>
              </div>
            )}

            <div className="form-grid">
              <FormField label="Nama Lengkap" required autoComplete="name" {...fieldProps('nama')} />
              <FormField label="Tanggal Lahir" type="date" required autoComplete="bday" {...fieldProps('lahir')} />
              <FormField label="Email" type="email" required autoComplete="email" {...fieldProps('email')} />
              <FormField
                label="Nomor WhatsApp"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                {...fieldProps('wa')}
              />
              <FormField
                label="Program Studi yang Dipilih"
                as="select"
                required
                className="field--wide"
                options={programs.map((p) => ({ value: p.id, label: p.name }))}
                {...fieldProps('prodi')}
              />
              <FormField label="Asal Gereja / Jemaat" required className="field--wide" {...fieldProps('gereja')} />
              <FormField
                label="Unggah Berkas (ijazah, KTP, dll)"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                required
                className="field--wide"
                hint="PDF, JPG, atau PNG, maksimal 5 MB. Berkas hanya diperiksa di perangkat Anda."
                id="berkas"
                error={errors.berkas}
                onChange={(e) => setField('berkas', e.target.files[0] ?? null)}
              />
            </div>

            <Button type="submit" size="lg" block>
              Daftar sekarang
            </Button>
          </form>

          <aside className="side-card side-card--light" aria-labelledby="wa-title">
            <span className="icon-tile icon-tile--square icon-tile--navy">
              <Icon name="whatsapp" size={30} />
            </span>
            <h3 id="wa-title">Butuh bantuan mendaftar?</h3>
            <p>Hubungi tim pendaftaran melalui WhatsApp untuk pertanyaan seputar proses dan berkas.</p>
            <p className="side-card__note">
              WhatsApp: <Ph>{contact.whatsapp}</Ph>
            </p>
            <Button placeholder block>
              Daftar sekarang via WhatsApp
            </Button>
          </aside>
        </div>
      </Section>

      <Section labelledBy="faq-title">
        <SectionHeading id="faq-title" title="Pertanyaan Umum" />
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>
                <Ph>{f.a}</Ph>
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  )
}
