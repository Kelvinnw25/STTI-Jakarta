import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTABand from '../components/ui/CTABand'
import Icon from '../components/ui/Icon'
import IconTile from '../components/ui/IconTile'
import Img from '../components/ui/Img'
import PageHeader from '../components/ui/PageHeader'
import QuoteCard from '../components/ui/QuoteCard'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { contact, externalLink } from '../data/site'

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
  {
    avatar: images.avatarWoman,
    name: 'Maria Angelina Tampubolon',
    role: 'Mahasiswa S1 Pendidikan Agama Kristen',
    text: '“Di kelas, dosen tidak hanya menjelaskan teori. Kami diajak berdiskusi dan bertanya, sehingga belajar teologi terasa dekat dengan kehidupan sehari-hari dan pelayanan di gereja.”',
  },
  {
    avatar: images.avatarMan1,
    name: 'Daniel Kurniawan',
    role: 'Mahasiswa S1 Teologi',
    text: '“Suasana perpustakaan dan ruang diskusi membuat saya betah belajar. Belajar kelompok bersama teman-teman membantu saya memahami materi dengan lebih baik.”',
  },
  {
    avatar: images.avatarMan2,
    name: 'Yosua Hutapea',
    role: 'Mahasiswa S2 Teologi',
    text: '“Ibadah dan pujian bersama menjadi bagian dari keseharian di kampus. Kami saling mendoakan dan belajar melayani sebagai satu komunitas.”',
  },
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
          intro="Cerita singkat mahasiswa tentang belajar, bertumbuh, dan melayani bersama di STTI Jakarta."
        />
        <ul role="list" className="grid-3">
          {stories.map((s) => (
            <li key={s.name}>
              <QuoteCard {...s} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="social-title">
        <SectionHeading
          id="social-title"
          title="Ikuti Keseharian Kami"
          intro="Cuplikan suasana kampus bergaya media sosial. Untuk unggahan terbaru, kunjungi akun Instagram kami."
        />
        <div className="social-panel">
          <div className="social-panel__head">
            <div className="social-panel__id">
              <img className="social-panel__avatar" src={images.logoSm.src} width="52" height="52" alt="" />
              <div>
                <p className="social-panel__name">STTI Jakarta</p>
                <p className="social-panel__handle">{contact.instagram}</p>
              </div>
            </div>
            <Button href={contact.instagramUrl} {...externalLink} size="sm">
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
