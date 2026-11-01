import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import CheckList from '../components/ui/CheckList'
import FeeTable from '../components/ui/FeeTable'
import Icon from '../components/ui/Icon'
import Img from '../components/ui/Img'
import { Dashes, PopCTA, PopHeading, PopHero, Scribble, Spark } from '../components/ui/Pop'
import { images } from '../data/images'
import {
  academicYear,
  bankAccounts,
  feeDecree,
  feeNotes,
  getJenjang,
  jenjang,
  recommendationTemplateUrl,
  rupiah,
  totalFee,
} from '../data/programs'
import { contact, externalLink, whatsappChatUrl } from '../data/site'

// Gaya kolase sesuai references/ProgramStudi2.png. Isi dan data biaya sama dengan ProgramStudi.jsx.
const tones = ['lime', 'pink', 'orange']

const strengths = [
  { icon: 'cross', tone: 'lime', title: 'Pembentukan Spiritualitas & Karakter', text: 'Studi tidak hanya akademik, tetapi juga membentuk pribadi dan kehidupan rohani.' },
  { icon: 'book', tone: 'pink', title: 'Pembelajaran Akademik', text: 'Pembelajaran teologi yang terintegrasi dengan pembentukan spiritualitas.' },
  { icon: 'users', tone: 'orange', title: 'Pelayanan & Kepemimpinan', text: 'Mempersiapkan tenaga pelayanan, pendidik, dan pemimpin Kristen.' },
]

const programNames = (j) => j.programs.map((p) => p.name).join(' · ')

export default function ProgramStudi2() {
  const [params] = useSearchParams()
  const { hash, key } = useLocation()
  const [selectedId, setSelectedId] = useState(getJenjang(params.get('jenjang')).id)
  const selected = getJenjang(selectedId)

  // Datang dari tautan "…?jenjang=s2#detail" (mis. dari Beranda): pilih jenjang lalu geser ke rincian.
  useEffect(() => {
    const fromUrl = params.get('jenjang')
    if (fromUrl) setSelectedId(getJenjang(fromUrl).id)
    if (hash === '#detail') {
      requestAnimationFrame(() => document.getElementById('detail')?.scrollIntoView({ block: 'start' }))
    }
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (id, scroll = false) => {
    setSelectedId(id)
    if (scroll) document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="pop">
      <PopHero top="Program" bottom="Studi" art={images.cutShelf} sparkAt="left">
        Pilihan program studi STTI Jakarta bagi calon mahasiswa yang ingin mempersiapkan diri menjadi tenaga pelayanan,
        pendidik, dan pemimpin Kristen.
      </PopHero>

      {/* ---------- Pilihan jenjang ---------- */}
      <section className="pop-section" aria-labelledby="list-title">
        <div className="container">
          <PopHeading
            id="list-title"
            title="Pilihan Program Studi"
            intro={`Lima program studi pada tiga jenjang. Biaya mengacu pada ketetapan tahun akademik ${academicYear}.`}
          />
          <ul role="list" className="pop-grid-3 pop-prodi-grid">
            {jenjang.map((j, i) => (
              <li key={j.id} className={`pop-prodi pop-prodi--${tones[i]}`}>
                <article>
                  {i === 0 && <Img image={images.cutBooksS1} alt="" className="pop-prodi__books" />}
                  <Dashes tone={tones[i]} className="pop-prodi__dashes" />
                  <div className="pop-prodi__top">
                    <span className={`pop-icon pop-tone--${tones[i]}`}>
                      <Icon name={j.icon} size={28} />
                    </span>
                    <span className="pop-chip">Jenjang {j.code}</span>
                  </div>
                  <h3>
                    {j.name} ({j.code})
                  </h3>
                  <ul role="list" className="pop-prodi__programs">
                    {j.programs.map((p) => (
                      <li key={p.id}>
                        {p.name}
                        {p.degree && <span> ({p.degree})</span>}
                      </li>
                    ))}
                  </ul>
                  <p className="pop-prodi__fee">
                    Total pembayaran mulai <strong>{rupiah(Math.min(...j.programs.map(totalFee)))}</strong>
                  </p>
                  <Button variant="line" size="sm" onClick={() => choose(j.id, true)} aria-pressed={j.id === selectedId}>
                    Lihat Detail <Icon name="chevron" size={16} />
                  </Button>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Yang membentuk studi ---------- */}
      <section className="pop-ribbon" aria-labelledby="strength-title">
        <div className="container pop-ribbon__grid">
          <div className="pop-ribbon__title">
            <h2 id="strength-title">Yang Membentuk Studi di STTI Jakarta</h2>
            <Scribble />
          </div>
          <ul role="list" className="pop-ribbon__items">
            {strengths.map((s) => (
              <li key={s.title}>
                <span className={`pop-brush pop-brush--sm pop-tone--${s.tone}`}>
                  <Icon name={s.icon} size={28} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Rincian jenjang terpilih ---------- */}
      <section id="detail" className="pop-section pop-detail" aria-labelledby="detail-title">
        <div className="container">
          <div className="pop-detail__head">
            <div aria-live="polite">
              <div className="pop-prodi__top">
                <span className="pop-icon pop-tone--lime">
                  <Icon name={selected.icon} size={30} />
                </span>
                <span className="pop-chip pop-chip--blue">Jenjang {selected.code}</span>
              </div>
              <h2 id="detail-title" className="pop-h2">
                {selected.name} ({selected.code})
                <Dashes className="pop-head__dashes" />
              </h2>
              <p>
                Program studi: {programNames(selected)}. Berikut biaya, persyaratan, dan formulir pendaftaran untuk
                jenjang ini.
              </p>
            </div>
            <div className="pop-pills" role="group" aria-label="Pilih jenjang">
              {jenjang.map((j) => (
                <button
                  key={j.id}
                  type="button"
                  className="pop-pill"
                  aria-pressed={j.id === selectedId}
                  onClick={() => choose(j.id)}
                >
                  {j.code} · {j.name}
                </button>
              ))}
            </div>
            <div className="pop-detail__art">
              <Img image={images.cutBible} alt="" />
              <Spark className="pop-detail__spark" />
            </div>
          </div>

          <div className="pop-panel pop-detail__panel">
            <section aria-labelledby="fee-title">
              <h3 id="fee-title" className="pop-h3">
                Rincian Biaya
              </h3>
              <FeeTable
                programs={selected.programs.map((p) => ({ ...p, label: `${selected.code} ${p.name}` }))}
                caption={`Biaya mahasiswa baru ${selected.name} (${selected.code}), tahun akademik ${academicYear}`}
              />
              <p className="info-main__note">
                Setelah dinyatakan lulus, calon mahasiswa membayar{' '}
                <strong>biaya pengembangan STTIJ sebesar {rupiah(selected.developmentFee)}</strong>.
              </p>
            </section>

            <section aria-labelledby="req-doc-title">
              <h3 id="req-doc-title" className="pop-h3">
                Persyaratan Pendaftaran
              </h3>
              <CheckList items={[...selected.documents, ...selected.steps]} />
              <div className="info-main__links">
                <Button href={recommendationTemplateUrl} {...externalLink} variant="line" size="sm">
                  <Icon name="file" size={18} /> Templat surat rekomendasi
                </Button>
              </div>
            </section>

            {selected.selection.length > 0 && (
              <section aria-labelledby="sel-title">
                <h3 id="sel-title" className="pop-h3">
                  Seleksi Masuk
                </h3>
                <CheckList items={selected.selection} />
              </section>
            )}

            <section aria-labelledby="form-links-title">
              <h3 id="form-links-title" className="pop-h3">
                Daftar Program Studi
              </h3>
              <p className="info-main__note">
                Pilih program studi yang ingin Anda daftar, lalu lengkapi dokumen persyaratan.
              </p>
              <div className="info-main__links">
                {selected.programs.map((p) => (
                  <Button key={p.id} placeholder variant="navy" size="sm">
                    Daftar {selected.code} {p.name}
                  </Button>
                ))}
              </div>
            </section>
          </div>

          <aside className="pop-consult" aria-labelledby="side-title">
            <span className="pop-consult__icon">
              <Icon name="phone" size={30} />
            </span>
            <div className="pop-consult__text">
              <h3 id="side-title">Tertarik dengan jenjang {selected.code}?</h3>
              <p>Lihat alur pendaftaran lengkap atau tanyakan langsung kepada tim kami.</p>
              <p className="pop-consult__note">WhatsApp: {contact.whatsapp}</p>
            </div>
            <div className="pop-consult__actions">
              <Button to="/pendaftaran" variant="navy" block>
                Daftar Sekarang <Icon name="chevron" size={18} />
              </Button>
              <Button href={whatsappChatUrl} {...externalLink} variant="line" block>
                <Icon name="whatsapp" size={18} /> Tanya via WhatsApp
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- Keterangan biaya ---------- */}
      <section className="pop-section pop-section--tint" aria-labelledby="notes-title">
        <div className="container">
          <PopHeading
            id="notes-title"
            title="Keterangan Biaya & Beasiswa"
            intro={`Berdasarkan SK Ketua STT Indonesia Jakarta Nomor ${feeDecree.number}, ${feeDecree.date}, tentang penetapan biaya kuliah mahasiswa baru tahun akademik ${academicYear}.`}
          />
          <div className="notes-grid">
            <div className="pop-panel">
              <h3 className="pop-h3">Rincian Biaya</h3>
              <CheckList items={feeNotes.included} />
            </div>
            <div className="pop-panel">
              <h3 className="pop-h3">Beasiswa</h3>
              <CheckList items={feeNotes.scholarships} />
            </div>
            <div className="pop-panel notes-grid__wide">
              <h3 className="pop-h3">Pembayaran Biaya Kuliah</h3>
              <p>
                {bankAccounts.tuition.bank} No. <strong>{bankAccounts.tuition.number}</strong> a.n.{' '}
                {bankAccounts.tuition.holder}.
              </p>
              <p className="notes-grid__disclaimer">{feeNotes.disclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      <PopCTA title="Temukan Program yang Sesuai Panggilanmu" text="Mulai dari formulir pendaftaran online." />
    </div>
  )
}
