import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import CheckList from '../components/ui/CheckList'
import FormField from '../components/ui/FormField'
import Icon from '../components/ui/Icon'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import StepCard from '../components/ui/StepCard'
import {
  bankAccounts,
  jenjang,
  programs,
  recommendationTemplateUrl,
  rupiah,
  transfer,
} from '../data/programs'
import { images } from '../data/images'
import { contact, externalLink, whatsappChatUrl } from '../data/site'
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

// Ringkasan umum persyaratan (sesuai tampilan yang dipilih untuk panel ini).
const requirements = [
  'Ijazah dan nilai pendidikan terakhir sesuai jenjang yang dipilih',
  'KTP, Kartu Keluarga, dan pas foto 3×4 cm berlatar merah',
  'Surat baptisan dewasa atau sidi (program S-1)',
  'Surat rekomendasi, surat keterangan sehat, dan dokumen tambahan sesuai program studi',
]

// Daftar lengkap per jenjang, disusun dari data program (satu sumber kebenaran).
const fullRequirements = (j) => {
  const fee = j.programs[0].registrationFee
  return [
    ...j.documents,
    ...j.steps,
    `Membayar biaya formulir pendaftaran sebesar ${rupiah(fee)} dan melampirkan scan bukti pembayaran.`,
    ...j.selection,
    `Setelah dinyatakan lulus, membayar biaya pengembangan STTIJ sebesar ${rupiah(j.developmentFee)}.`,
  ]
}

// Pertanyaan umum beserta penanya (nama contoh untuk tampilan UI). Jawaban disusun oleh tim STTI Jakarta.
const faqs = [
  {
    q: 'Kapan jadwal pendaftaran dibuka?',
    asker: 'Grace Natalia Simanjuntak',
    a: (
      <p>
        Pendaftaran mahasiswa baru dibuka sesuai periode penerimaan setiap tahun akademik. Untuk mengetahui jadwal
        pendaftaran terbaru, silakan kunjungi halaman resmi penerimaan mahasiswa baru atau hubungi admin STT Indonesia
        Jakarta.
      </p>
    ),
  },
  {
    q: 'Berapa biaya pendaftaran dan kuliah?',
    asker: 'Samuel Prasetyo',
    a: (
      <>
        <p>
          Biaya pendaftaran dan kuliah berbeda sesuai jenjang serta program studi yang dipilih. STT Indonesia Jakarta
          juga memiliki biaya pengembangan setelah calon mahasiswa dinyatakan lulus seleksi. Silakan lihat rincian
          biaya resmi atau hubungi admin kampus untuk informasi terbaru.
        </p>
        <p>
          <Link to="/program-studi#detail">Lihat rincian biaya per program studi →</Link>
        </p>
      </>
    ),
  },
  {
    q: 'Apakah tersedia beasiswa?',
    asker: 'Rina Wulandari',
    a: (
      <p>
        Ya, STT Indonesia Jakarta menyediakan program beasiswa bagi mahasiswa yang memenuhi persyaratan, termasuk
        beasiswa prestasi akademik dan nonakademik, beasiswa bagi mahasiswa dengan orang tua yang melayani sebagai
        pendeta atau guru agama Kristen, serta bantuan bagi mahasiswa yang membutuhkan. Informasi beasiswa S-2 dan S-3
        dapat ditanyakan langsung kepada pihak kampus.
      </p>
    ),
  },
]

const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

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
        <div className="req-panel">
          <h2 id="req-title">Persyaratan & Informasi</h2>
          <p>Kelengkapan pendaftaran mahasiswa baru STT Indonesia Jakarta.</p>
          <ul role="list" className="req-panel__list">
            {requirements.map((r) => (
              <li key={r}>
                <span className="check-list__icon">
                  <Icon name="check" size={16} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="req-detail">
          <h3>Persyaratan Lengkap per Jenjang</h3>
          <div className="faq">
            {jenjang.map((j, i) => (
              <details key={j.id} open={i === 0}>
                <summary>
                  {j.name} ({j.code}) <span className="faq__sub">{j.programs.map((p) => p.name).join(' · ')}</span>
                </summary>
                <CheckList items={fullRequirements(j)} />
                <div className="info-main__links">
                  <Button href={recommendationTemplateUrl} {...externalLink} variant="outline" size="sm">
                    <Icon name="file" size={18} /> Templat surat rekomendasi
                  </Button>
                  <Button to={`/program-studi?jenjang=${j.id}#detail`} variant="outline" size="sm">
                    Lihat rincian biaya
                  </Button>
                </div>
              </details>
            ))}
            <details>
              <summary>
                Mahasiswa Pindahan / Alih Jenjang <span className="faq__sub">Semua program studi</span>
              </summary>
              <CheckList items={transfer.documents} />
            </details>
          </div>
        </div>

        <div className="pay-card">
          <div>
            <h3>Pembayaran Biaya Pendaftaran</h3>
            <p>
              Transfer ke {bankAccounts.registration.bank} No. <strong>{bankAccounts.registration.number}</strong> a.n.{' '}
              {bankAccounts.registration.holder}, lalu lampirkan scan bukti pembayaran pada formulir pendaftaran.
            </p>
          </div>
          <ul role="list" className="pay-card__fees">
            {jenjang.map((j) => (
              <li key={j.id}>
                <span>
                  {j.code} {j.name}
                </span>
                <strong>{rupiah(j.programs[0].registrationFee)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="navy" id="formulir" labelledBy="form-title">
        <SectionHeading
          id="form-title"
          title="Formulir Pendaftaran"
          intro="Isi data berikut untuk mencoba alur pendaftaran."
        />
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
                options={programs.map((p) => ({ value: p.id, label: p.label }))}
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

          <aside className="side-card side-card--light" aria-labelledby="official-title">
            <span className="icon-tile icon-tile--square icon-tile--navy">
              <Icon name="file" size={30} />
            </span>
            <h3 id="official-title">Daftar Sesuai Program Studi</h3>
            <p>Pilih program studi yang Anda tuju.</p>
            <ul role="list" className="official-forms">
              {jenjang.flatMap((j) =>
                j.programs.map((p) => (
                  <li key={p.id}>
                    <Button placeholder size="sm" block>
                      {j.code} {p.name}
                    </Button>
                  </li>
                )),
              )}
            </ul>
            <p className="side-card__note">Butuh bantuan? WhatsApp {contact.whatsapp}</p>
            <Button href={whatsappChatUrl} {...externalLink} variant="outline" size="sm" block>
              <Icon name="whatsapp" size={18} /> Hubungi via WhatsApp
            </Button>
          </aside>
        </div>
      </Section>

      <Section labelledBy="faq-title">
        <SectionHeading id="faq-title" title="Pertanyaan Umum" />
        <div className="faq faq--rich">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                <span className="faq-avatar" aria-hidden="true">
                  {initials(f.asker)}
                </span>
                <span className="faq-question">
                  {f.q}
                  <small>Ditanyakan oleh {f.asker}</small>
                </span>
              </summary>
              <div className="faq__answer">
                <p className="faq__from">
                  <img src={images.logoSm.src} width="22" height="22" alt="" />
                  Dijawab oleh Admin STTI Jakarta
                </p>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </Section>
    </>
  )
}
