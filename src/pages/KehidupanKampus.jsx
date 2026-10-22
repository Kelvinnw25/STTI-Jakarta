import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTABand from '../components/ui/CTABand'
import Icon from '../components/ui/Icon'
import IconTile from '../components/ui/IconTile'
import Img from '../components/ui/Img'
import PageHeader from '../components/ui/PageHeader'
import Ph from '../components/ui/Ph'
import QuoteCard from '../components/ui/QuoteCard'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { contact } from '../data/site'

// Delapan kategori mengikuti label pada wireframe. `area` menentukan posisi di grid (lihat pages.css).
const tiles = [
  { label: 'Perkuliahan', image: images.k5, area: 'a', pos: '55% 50%' },
  { label: 'Kebersamaan', image: images.k9, area: 'b', pos: '40% 40%' },
  { label: 'Belajar Mandiri', image: images.k10, area: 'c', pos: '50% 30%' },
  { label: 'Diskusi Kelompok', image: images.k1, area: 'd', pos: '45% 50%' },
  { label: 'Kegiatan Kampus', image: images.k3, area: 'e', pos: '50% 50%' },
  { label: 'Aktivitas Dosen', image: images.k8, area: 'f', pos: '30% 40%' },
  { label: 'Moment Komunitas', image: images.k11, area: 'g', pos: '35% 40%' },
  { label: 'Kegiatan Mahasiswa', image: images.k12, area: 'h', pos: '60% 40%' },
]

const stories = [
  { avatar: images.avatarWoman, role: 'Cerita mahasiswa' },
  { avatar: images.avatarMan1, role: 'Cerita dosen' },
  { avatar: images.avatarMan2, role: 'Cerita komunitas' },
]

// Tiga ikon diturunkan dari kalimat Visi pada referensi Profil.
const pillars = [
  { icon: 'cross', title: 'Spiritualitas', text: 'Ibadah dan pembinaan rohani menjadi bagian dari perjalanan sehari-hari.' },
  { icon: 'search', title: 'Belajar & Meneliti', text: 'Ruang kelas dan perpustakaan mendukung kajian teologi kontekstual.' },
  { icon: 'heart', title: 'Pelayanan', text: 'Mahasiswa diperlengkapi untuk melayani masyarakat.' },
]

const posts = [
  { image: images.discussion1, label: 'Mahasiswa belajar bersama' },
  { image: images.worship1, label: 'Pujian bersama' },
  { image: images.study3, label: 'Suasana perpustakaan' },
  { image: images.bibleCross, label: 'Alkitab di depan salib' },
  { image: images.discussion4, label: 'Diskusi kelompok' },
]

export default function KehidupanKampus() {
  return (
    <>
      <PageHeader title="Kehidupan Kampus">
        Momen nyata mahasiswa, dosen, dan komunitas STTI Jakarta, dari ruang kelas, kebersamaan, hingga perjalanan
        spiritual sehari-hari.
      </PageHeader>

      <Section tone="navy" labelledBy="moments-title">
        <h2 id="moments-title" className="visually-hidden">
          Galeri momen kampus
        </h2>
        <div className="life-grid">
          {tiles.map((t) => (
            <figure key={t.label} className={`life-tile life-tile--${t.area}`}>
              <Img image={t.image} style={{ objectPosition: t.pos }} />
              <figcaption>{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section labelledBy="stories-title">
        <SectionHeading
          id="stories-title"
          title="Cerita dari Komunitas"
          intro="Ruang untuk cerita mahasiswa, dosen, dan komunitas. Kutipan asli belum tersedia."
        />
        <ul role="list" className="grid-3">
          {stories.map((s) => (
            <li key={s.role}>
              <QuoteCard {...s} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="social-title">
        <SectionHeading
          id="social-title"
          title="Ikuti Keseharian Kami"
          intro="Contoh tampilan galeri bergaya media sosial. Ini bukan embed Instagram yang sebenarnya."
        />
        <div className="social-panel">
          <div className="social-panel__head">
            <div className="social-panel__id">
              <span className="social-panel__avatar" aria-hidden="true">
                STTI
              </span>
              <div>
                <p className="social-panel__name">STTI Jakarta</p>
                <p className="social-panel__handle">
                  <Ph>{contact.instagram}</Ph>
                </p>
              </div>
            </div>
            <Button placeholder size="sm">
              <Icon name="instagram" size={18} /> Kunjungi Instagram
            </Button>
          </div>
          <ul role="list" className="social-panel__posts">
            {posts.map((p) => (
              <li key={p.image.src}>
                <Img image={p.image} alt={p.label} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="pillars-title">
        <SectionHeading id="pillars-title" title="Hidup, Belajar, dan Melayani" />
        <ul role="list" className="grid-3">
          {pillars.map((p) => (
            <li key={p.title}>
              <Card variant="navy" className="feature-card">
                <IconTile name={p.icon} tone="light" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand title="Jadilah Bagian dari Komunitas Kami" text="Mulai langkah pertamamu dengan mendaftar secara online." />
    </>
  )
}
