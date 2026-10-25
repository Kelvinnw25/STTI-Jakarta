import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CheckList from '../components/ui/CheckList'
import CTABand from '../components/ui/CTABand'
import FeeTable from '../components/ui/FeeTable'
import Icon from '../components/ui/Icon'
import IconTile from '../components/ui/IconTile'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
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
import { externalLink, whatsappChatUrl, contact } from '../data/site'

// Tiga kartu keunggulan diturunkan dari deskripsi institusi pada referensi.
const strengths = [
  { icon: 'cross', title: 'Pembentukan Spiritualitas & Karakter', text: 'Studi tidak hanya akademik, tetapi juga membentuk pribadi dan kehidupan rohani.' },
  { icon: 'book', title: 'Pembelajaran Akademik', text: 'Pembelajaran teologi yang terintegrasi dengan pembentukan spiritualitas.' },
  { icon: 'users', title: 'Pelayanan & Kepemimpinan', text: 'Mempersiapkan tenaga pelayanan, pendidik, dan pemimpin Kristen.' },
]

const programNames = (j) => j.programs.map((p) => p.name).join(' · ')

export default function ProgramStudi() {
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

  const hasSelection = selected.selection.length > 0

  return (
    <>
      <PageHeader title="Program Studi">
        Pilihan program studi STTI Jakarta bagi calon mahasiswa yang ingin mempersiapkan diri menjadi tenaga
        pelayanan, pendidik, dan pemimpin Kristen.
      </PageHeader>

      <Section tone="navy" labelledBy="list-title">
        <SectionHeading
          id="list-title"
          title="Pilihan Program Studi"
          intro={`Lima program studi pada tiga jenjang. Biaya mengacu pada ketetapan tahun akademik ${academicYear}.`}
        />
        <ul role="list" className="grid-3">
          {jenjang.map((j) => (
            <li key={j.id}>
              <Card variant="white" className="prodi-card">
                <IconTile name={j.icon} />
                <Badge>Jenjang {j.code}</Badge>
                <h3>
                  {j.name} ({j.code})
                </h3>
                <ul role="list" className="prodi-card__programs">
                  {j.programs.map((p) => (
                    <li key={p.id}>
                      {p.name}
                      {p.degree && <span> ({p.degree})</span>}
                    </li>
                  ))}
                </ul>
                <p className="prodi-card__fee">
                  Total pembayaran mulai <strong>{rupiah(Math.min(...j.programs.map(totalFee)))}</strong>
                </p>
                <Button size="sm" onClick={() => choose(j.id, true)} aria-pressed={j.id === selectedId}>
                  Lihat Detail
                </Button>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="strength-title">
        <SectionHeading id="strength-title" title="Yang Membentuk Studi di STTI Jakarta" />
        <ul role="list" className="grid-3">
          {strengths.map((s) => (
            <li key={s.title}>
              <Card variant="navy" className="feature-card">
                <IconTile name={s.icon} tone="light" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" id="detail" labelledBy="detail-title" className="detail-band">
        <div className="detail-hero" aria-live="polite">
          <IconTile name={selected.icon} tone="light" size={40} />
          <div>
            <Badge tone="light">Jenjang {selected.code}</Badge>
            <h2 id="detail-title">
              {selected.name} ({selected.code})
            </h2>
            <p>
              Program studi: {programNames(selected)}. Berikut biaya, persyaratan, dan formulir pendaftaran untuk
              jenjang ini.
            </p>
          </div>
        </div>
        <div className="tabs" role="group" aria-label="Pilih jenjang">
          {jenjang.map((j) => (
            <button
              key={j.id}
              type="button"
              className="tabs__btn"
              aria-pressed={j.id === selectedId}
              onClick={() => choose(j.id)}
            >
              {j.code} · {j.name}
            </button>
          ))}
        </div>
      </Section>

      <Section labelledBy="info-title">
        <div className="info-layout">
          <div className="info-main">
            <h2 id="info-title" className="visually-hidden">
              Rincian jenjang {selected.name}
            </h2>

            <section aria-labelledby="fee-title">
              <h3 id="fee-title" className="info-main__title">
                Rincian Biaya
              </h3>
              <FeeTable
                programs={selected.programs.map((p) => ({ ...p, label: `${selected.code} ${p.name}` }))}
                caption={`Biaya mahasiswa baru ${selected.name} (${selected.code}), tahun akademik ${academicYear}`}
              />
              <p className="info-main__note">
                Setelah dinyatakan lulus, calon mahasiswa membayar <strong>biaya pengembangan STTIJ sebesar{' '}
                {rupiah(selected.developmentFee)}</strong>.
              </p>
            </section>

            <section aria-labelledby="req-doc-title">
              <h3 id="req-doc-title" className="info-main__title">
                Persyaratan Pendaftaran
              </h3>
              <CheckList items={[...selected.documents, ...selected.steps]} />
              <div className="info-main__links">
                <Button href={recommendationTemplateUrl} {...externalLink} variant="outline" size="sm">
                  <Icon name="file" size={18} /> Templat surat rekomendasi
                </Button>
              </div>
            </section>

            {hasSelection && (
              <section aria-labelledby="sel-title">
                <h3 id="sel-title" className="info-main__title">
                  Seleksi Masuk
                </h3>
                <CheckList items={selected.selection} />
              </section>
            )}

            <section aria-labelledby="form-links-title">
              <h3 id="form-links-title" className="info-main__title">
                Daftar Program Studi
              </h3>
              <p className="info-main__note">
                Pilih program studi yang ingin Anda daftar, lalu lengkapi dokumen persyaratan.
              </p>
              <div className="info-main__links">
                {selected.programs.map((p) => (
                  <Button key={p.id} placeholder size="sm">
                    Daftar {selected.code} {p.name}
                  </Button>
                ))}
              </div>
            </section>
          </div>

          <aside className="side-card" aria-labelledby="side-title">
            <h3 id="side-title">Tertarik dengan jenjang ini?</h3>
            <p>Lihat alur pendaftaran lengkap atau tanyakan langsung kepada tim kami.</p>
            <Button to="/pendaftaran" variant="accent" block>
              Daftar Sekarang
            </Button>
            <Button href={whatsappChatUrl} {...externalLink} variant="outline-light" block>
              <Icon name="whatsapp" size={18} /> Tanya via WhatsApp
            </Button>
            <p className="side-card__note">WhatsApp: {contact.whatsapp}</p>
          </aside>
        </div>
      </Section>

      <Section tone="soft" labelledBy="notes-title">
        <SectionHeading
          id="notes-title"
          title="Keterangan Biaya & Beasiswa"
          intro={`Berdasarkan SK Ketua STT Indonesia Jakarta Nomor ${feeDecree.number}, ${feeDecree.date}, tentang penetapan biaya kuliah mahasiswa baru tahun akademik ${academicYear}.`}
        />
        <div className="notes-grid">
          <Card variant="plain">
            <h3>Rincian Biaya</h3>
            <CheckList items={feeNotes.included} />
          </Card>
          <Card variant="plain">
            <h3>Beasiswa</h3>
            <CheckList items={feeNotes.scholarships} />
          </Card>
          <Card variant="plain" className="notes-grid__wide">
            <h3>Pembayaran Biaya Kuliah</h3>
            <p>
              {bankAccounts.tuition.bank} No. <strong>{bankAccounts.tuition.number}</strong> a.n.{' '}
              {bankAccounts.tuition.holder}.
            </p>
            <p className="notes-grid__disclaimer">{feeNotes.disclaimer}</p>
          </Card>
        </div>
      </Section>

      <CTABand title="Temukan Program yang Sesuai Panggilanmu" text="Mulai dari formulir pendaftaran online." />
    </>
  )
}
