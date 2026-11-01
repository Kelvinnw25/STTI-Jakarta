import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import CheckList from '../components/ui/CheckList'
import FormField from '../components/ui/FormField'
import Icon from '../components/ui/Icon'
import Img from '../components/ui/Img'
import { PopCTA, PopHeading, PopHero } from '../components/ui/Pop'
import { images } from '../data/images'
import {
  academicYear,
  bankAccounts,
  jenjang,
  programs,
  recommendationTemplateUrl,
  rupiah,
  transfer,
} from '../data/programs'
import { contact, externalLink, whatsappChatUrl } from '../data/site'
import useDemoForm from '../utils/useDemoForm'
import { required, validateBirthDate, validateEmail, validateFile, validatePhone } from '../utils/validation'

// Gaya kolase sesuai references/Pendaftaran2.png. Isi dan data sama dengan Pendaftaran.jsx.
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
  { icon: 'laptop', tone: 'lime', title: 'Isi Formulir Online', text: 'Lengkapi data diri dan pilih program studi.' },
  { icon: 'upload', tone: 'pink', title: 'Unggah Berkas', text: 'Siapkan dokumen pendukung, misalnya ijazah dan KTP.' },
  { icon: 'megaphone', tone: 'orange', title: 'Pengumuman', text: 'Pantau informasi hasil seleksi.' },
]

const requirements = [
  'Ijazah dan nilai pendidikan terakhir sesuai jenjang yang dipilih',
  'KTP, Kartu Keluarga, dan pas foto 3×4 cm berlatar merah',
  'Surat baptisan dewasa atau sidi (program S-1)',
  'Surat rekomendasi, surat keterangan sehat, dan dokumen tambahan sesuai program studi',
]

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

export default function Pendaftaran2() {
  const { errors, submitted, setField, onChange, onBlur, handleSubmit } = useDemoForm(initial, validate)
  const fieldProps = (id) => ({ id, error: errors[id], onChange, onBlur })

  return (
    <div className="pop">
      <PopHero top="Pendaftaran" bottom="Mahasiswa Baru" art={images.cutBuildingReg} sparkAt="right" compact>
        Langkah mudah bergabung dengan STTI Jakarta: daftar online, tanpa perlu datang langsung untuk isi formulir awal.
      </PopHero>

      {/* ---------- Alur ---------- */}
      <section className="pop-band" aria-labelledby="steps-title">
        <div className="container">
          <PopHeading
            id="steps-title"
            tone="light"
            dashes={false}
            title="Alur Pendaftaran"
            intro="Tiga langkah awal untuk menjadi calon mahasiswa."
          />
          <ol role="list" className="pop-flow">
            {steps.map((s, i) => (
              <li key={s.title} className="pop-flow__step">
                <span className={`pop-flow__icon pop-tone--${s.tone}`}>
                  <Icon name={s.icon} size={36} />
                </span>
                <h3>
                  {i + 1}. {s.title}
                </h3>
                <p>{s.text}</p>
                {i < steps.length - 1 && <Icon name="chevron" size={28} className="pop-flow__next" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Informasi & persyaratan ---------- */}
      <section className="pop-section" aria-labelledby="req-title">
        <div className="container pop-req">
          <aside className="pop-info" aria-labelledby="info-title">
            <h2 id="info-title">Informasi Penting</h2>
            <div className="pop-info__body">
              <div className="pop-info__row">
                <span className="pop-info__icon">
                  <Icon name="calendar" size={24} />
                </span>
                <div>
                  <h3>Periode Pendaftaran</h3>
                  <p>Tahun Akademik {academicYear}</p>
                </div>
              </div>
              <div className="pop-info__row">
                <span className="pop-info__icon">
                  <Icon name="users" size={24} />
                </span>
                <div>
                  <h3>Untuk Siapa?</h3>
                  <p>SMA/SMK sederajat, mahasiswa, dan profesional.</p>
                </div>
              </div>
              <div className="pop-info__row pop-info__row--list">
                <span className="pop-info__icon">
                  <Icon name="file" size={24} />
                </span>
                <div>
                  <h3>Kelengkapan Umum</h3>
                  <p>Kelengkapan pendaftaran mahasiswa baru STT Indonesia Jakarta.</p>
                </div>
                <CheckList items={requirements} className="pop-info__list" />
              </div>
              <hr />
              <div className="pop-info__row">
                <span className="pop-info__icon">
                  <Icon name="headset" size={24} />
                </span>
                <div>
                  <h3>Butuh Bantuan?</h3>
                  <p>
                    Hubungi tim penerimaan mahasiswa baru lewat WhatsApp{' '}
                    <a href={whatsappChatUrl} {...externalLink}>
                      {contact.whatsapp}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="pop-req__main">
            <PopHeading
              id="req-title"
              align="left"
              title="Persyaratan Pendaftaran"
              intro="Pilih jenjang studi untuk melihat persyaratan lengkap."
            />
            <div className="pop-acc">
              {jenjang.map((j, i) => (
                <details key={j.id} open={i === 0}>
                  <summary>
                    <Icon name={j.icon} size={26} />
                    <span>
                      {j.name} ({j.code})
                      <small>{j.programs.map((p) => p.name).join(' · ')}</small>
                    </span>
                    <Icon name="chevron" size={20} className="pop-acc__chevron" />
                  </summary>
                  <div className="pop-acc__body">
                    <div>
                      <CheckList items={fullRequirements(j)} />
                      <div className="info-main__links">
                        <Button href={recommendationTemplateUrl} {...externalLink} variant="line" size="sm">
                          <Icon name="file" size={18} /> Templat surat rekomendasi
                        </Button>
                        <Button to={`/program-studi?jenjang=${j.id}#detail`} variant="line" size="sm">
                          Lihat rincian biaya
                        </Button>
                      </div>
                    </div>
                    <Img image={images.cutBooksReq} alt="" className="pop-acc__art" />
                  </div>
                </details>
              ))}
              <details>
                <summary>
                  <Icon name="users" size={26} />
                  <span>
                    Mahasiswa Pindahan / Alih Jenjang
                    <small>Semua program studi</small>
                  </span>
                  <Icon name="chevron" size={20} className="pop-acc__chevron" />
                </summary>
                <div className="pop-acc__body">
                  <CheckList items={transfer.documents} />
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* ---------- Pembayaran & unduhan ---------- */}
        <div className="container">
          <div className="pop-pay">
            <PopHeading
              as="h3"
              align="left"
              title="Pembayaran Biaya Pendaftaran"
              intro={
                <>
                  Transfer ke {bankAccounts.registration.bank} No. <strong>{bankAccounts.registration.number}</strong>{' '}
                  a.n. {bankAccounts.registration.holder}, lalu lampirkan scan bukti pembayaran pada formulir
                  pendaftaran.
                </>
              }
            />
            <table className="pop-mini-table">
              <caption className="visually-hidden">Biaya pendaftaran per jenjang</caption>
              <thead>
                <tr>
                  <th scope="col">Program Studi</th>
                  <th scope="col">Biaya Pendaftaran</th>
                </tr>
              </thead>
              <tbody>
                {jenjang.map((j) => (
                  <tr key={j.id}>
                    <th scope="row">
                      {j.code} {j.name}
                    </th>
                    <td>{rupiah(j.programs[0].registrationFee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pop-strip">
            <span className="pop-strip__icon">
              <Icon name="download" size={40} />
            </span>
            <div>
              <h3>Formulir Pendaftaran</h3>
              <p>Unduh formulir pendaftaran untuk melengkapi berkas yang diperlukan.</p>
            </div>
            <Button placeholder variant="line">
              <Icon name="download" size={20} /> Unduh Formulir
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Formulir demo ---------- */}
      <section className="pop-band" id="formulir" aria-labelledby="form-title">
        <div className="container">
          <PopHeading
            id="form-title"
            tone="light"
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

              <Button type="submit" variant="navy" size="lg" block>
                Daftar sekarang <Icon name="chevron" size={18} />
              </Button>
            </form>

            <aside className="side-card side-card--light" aria-labelledby="official-title">
              <span className="pop-brush pop-brush--sm pop-tone--lime">
                <Icon name="file" size={28} />
              </span>
              <h3 id="official-title" className="pop-h3">
                Daftar Sesuai Program Studi
              </h3>
              <p>Pilih program studi yang Anda tuju.</p>
              <ul role="list" className="official-forms">
                {jenjang.flatMap((j) =>
                  j.programs.map((p) => (
                    <li key={p.id}>
                      <Button placeholder variant="navy" size="sm" block>
                        {j.code} {p.name}
                      </Button>
                    </li>
                  )),
                )}
              </ul>
              <p className="side-card__note">Butuh bantuan? WhatsApp {contact.whatsapp}</p>
              <Button href={whatsappChatUrl} {...externalLink} variant="line" size="sm" block>
                <Icon name="whatsapp" size={18} /> Hubungi via WhatsApp
              </Button>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- Pertanyaan umum ---------- */}
      <section className="pop-section" aria-labelledby="faq-title">
        <div className="container">
          <PopHeading id="faq-title" title="Pertanyaan Umum" />
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
        </div>
      </section>

      <PopCTA
        art={images.cutBibleCta}
        title="Siap Memulai Perjalanan Pelayananmu?"
        action={
          <Button href="#formulir" variant="white">
            Daftar Sekarang <Icon name="chevron" size={18} />
          </Button>
        }
      />
    </div>
  )
}
