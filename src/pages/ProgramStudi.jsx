import { useState } from 'react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTABand from '../components/ui/CTABand'
import Icon from '../components/ui/Icon'
import IconTile from '../components/ui/IconTile'
import PageHeader from '../components/ui/PageHeader'
import Ph from '../components/ui/Ph'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import { programs } from '../data/programs'
import { contact } from '../data/site'

// Tiga kartu keunggulan diturunkan dari deskripsi institusi pada referensi.
const strengths = [
  { icon: 'cross', title: 'Pembentukan Spiritualitas & Karakter', text: 'Studi tidak hanya akademik, tetapi juga membentuk pribadi dan kehidupan rohani.' },
  { icon: 'book', title: 'Pembelajaran Akademik', text: 'Pembelajaran teologi yang terintegrasi dengan pembentukan spiritualitas.' },
  { icon: 'users', title: 'Pelayanan & Kepemimpinan', text: 'Mempersiapkan tenaga pelayanan, pendidik, dan pemimpin Kristen.' },
]

const infoPoints = [
  { label: 'Kurikulum', text: '[Gambaran kurikulum program]' },
  { label: 'Masa studi', text: '[Durasi studi]' },
  { label: 'Profil lulusan', text: '[Profil dan prospek pelayanan lulusan]' },
  { label: 'Biaya & beasiswa', text: '[Informasi biaya dan beasiswa]' },
]

export default function ProgramStudi() {
  const [selectedId, setSelectedId] = useState(programs[0].id)
  const selected = programs.find((p) => p.id === selectedId)

  const choose = (id) => {
    setSelectedId(id)
    document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageHeader title="Program Studi">
        Pilihan program studi STTI Jakarta bagi calon mahasiswa yang ingin mempersiapkan diri menjadi tenaga
        pelayanan, pendidik, dan pemimpin Kristen.
      </PageHeader>

      <Section tone="navy" labelledBy="list-title">
        <SectionHeading id="list-title" title="Pilihan Program Studi" intro="Daftar resmi program studi akan ditampilkan setelah dikonfirmasi." />
        <ul role="list" className="grid-3">
          {programs.map((p) => (
            <li key={p.id}>
              <Card variant="white" className="prodi-card">
                <IconTile name={p.icon} />
                <Badge>
                  Jenjang <Ph>{p.level}</Ph>
                </Badge>
                <h3>
                  <Ph>{p.name}</Ph>
                </h3>
                <p>
                  <Ph>{p.summary}</Ph>
                </p>
                <Button size="sm" onClick={() => choose(p.id)} aria-pressed={p.id === selectedId}>
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
            <Badge tone="light">
              Jenjang <Ph>{selected.level}</Ph>
            </Badge>
            <h2 id="detail-title">
              <Ph>{selected.name}</Ph>
            </h2>
            <p>
              <Ph>{selected.detail}</Ph>
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="info-title">
        <div className="info-layout">
          <div>
            <SectionHeading id="info-title" as="h2" align="left" title="Informasi Program" intro="Rincian di bawah ini menunggu data resmi dari STTI Jakarta." />
            <ul role="list" className="check-list">
              {infoPoints.map((i) => (
                <li key={i.label}>
                  <span className="check-list__icon">
                    <Icon name="check" size={16} />
                  </span>
                  <span>
                    <strong>{i.label}:</strong> <Ph>{i.text}</Ph>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="side-card" aria-labelledby="side-title">
            <h3 id="side-title">Tertarik dengan program ini?</h3>
            <p>Daftar secara online atau tanyakan langsung kepada tim kami.</p>
            <Button to="/pendaftaran" variant="accent" block>
              Daftar Sekarang
            </Button>
            <Button placeholder variant="outline-light" block>
              <Icon name="whatsapp" size={18} /> Tanya via WhatsApp
            </Button>
            <p className="side-card__note">
              WhatsApp: <Ph>{contact.whatsapp}</Ph>
            </p>
          </aside>
        </div>
      </Section>

      <CTABand title="Temukan Program yang Sesuai Panggilanmu" text="Mulai dari formulir pendaftaran online." />
    </>
  )
}
