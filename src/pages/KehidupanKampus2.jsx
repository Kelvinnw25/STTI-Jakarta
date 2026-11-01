import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Img from '../components/ui/Img'
import { PopCTA, PopHeading, PopHero, Scribble } from '../components/ui/Pop'
import { images } from '../data/images'
import { contact, externalLink } from '../data/site'

// Gaya kolase sesuai references/KehidupanKampus2.png. Isi sama dengan KehidupanKampus.jsx.
const tiles = [
  { label: 'Perkuliahan', icon: 'book', image: images.k5, area: 'a', pos: '55% 50%' },
  { label: 'Kebersamaan', icon: 'users', image: images.k9, area: 'b', pos: '40% 40%' },
  { label: 'Belajar Mandiri', icon: 'book', image: images.k10, area: 'c', pos: '50% 30%' },
  { label: 'Diskusi Kelompok', icon: 'users', image: images.k1, area: 'd', pos: '45% 50%' },
  { label: 'Kegiatan Kampus', icon: 'calendar', image: images.k3, area: 'e', pos: '50% 50%' },
  { label: 'Aktivitas Dosen', icon: 'cap', image: images.k8, area: 'f', pos: '30% 40%' },
  { label: 'Moment Komunitas', icon: 'cross', image: images.k11, area: 'g', pos: '35% 40%' },
  { label: 'Kegiatan Mahasiswa', icon: 'heart', image: images.k12, area: 'h', pos: '60% 40%' },
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

export default function KehidupanKampus2() {
  return (
    <div className="pop">
      <PopHero top="Kehidupan" bottom="Kampus" art={images.cutBuildingLife} sparkAt="left">
        Momen nyata mahasiswa, dosen, dan komunitas STTI Jakarta, dari ruang kelas, kebersamaan, hingga perjalanan
        spiritual sehari-hari.
      </PopHero>

      {/* ---------- Galeri ---------- */}
      <section className="pop-band" aria-labelledby="moments-title">
        <div className="container">
          <h2 id="moments-title" className="visually-hidden">
            Galeri momen kampus
          </h2>
          <div className="pop-gallery">
            {tiles.map((t) => (
              <figure key={t.label} className={`pop-gallery__tile pop-gallery__tile--${t.area}`}>
                <Img image={t.image} style={{ objectPosition: t.pos }} />
                <figcaption>
                  <Icon name={t.icon} size={18} /> {t.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cerita ---------- */}
      <section className="pop-section" aria-labelledby="stories-title">
        <div className="container">
          <PopHeading
            id="stories-title"
            title="Cerita dari Komunitas"
            intro="Cerita singkat mahasiswa tentang belajar, bertumbuh, dan melayani bersama di STTI Jakarta."
          />
          <ul role="list" className="pop-grid-3">
            {stories.map((s) => (
              <li key={s.name}>
                <figure className="pop-story">
                  <figcaption>
                    <Img image={s.avatar} alt="" />
                    <span>
                      <strong>{s.name}</strong>
                      <small>{s.role}</small>
                    </span>
                  </figcaption>
                  <blockquote>{s.text}</blockquote>
                  <Icon name="quote" size={38} className="pop-story__mark" />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Media sosial ---------- */}
      <section className="pop-band" aria-labelledby="social-title">
        <div className="container">
          <PopHeading
            id="social-title"
            tone="light"
            title="Ikuti Keseharian Kami"
            intro="Cuplikan suasana kampus bergaya media sosial. Untuk unggahan terbaru, kunjungi akun Instagram kami."
          />
          <div className="pop-social">
            <div className="pop-social__head">
              <div className="pop-social__id">
                <span className="pop-social__icon">
                  <Icon name="instagram" size={24} />
                </span>
                <span>
                  <strong>STTI Jakarta</strong>
                  <small>{contact.instagram}</small>
                </span>
              </div>
              <Button href={contact.instagramUrl} {...externalLink} variant="navy" size="sm">
                Kunjungi Instagram <Icon name="chevron" size={16} />
              </Button>
            </div>
            <ul role="list" className="pop-social__posts">
              {posts.map((p) => (
                <li key={p.image.src}>
                  <Img image={p.image} alt={p.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Pilar ---------- */}
      <section className="pop-section" aria-labelledby="pillars-title">
        <div className="container">
          <div className="pop-head pop-head--center pop-head--dark">
            <h2 id="pillars-title" className="pop-h2">
              Hidup, Belajar, dan Melayani
            </h2>
            <Scribble tone="pink" className="pop-head__scribble" />
          </div>
          <ul role="list" className="pop-grid-3">
            {pillars.map((p) => (
              <li key={p.title} className="pop-pillar">
                <span className="pop-pillar__icon">
                  <Icon name={p.icon} size={26} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PopCTA title="Jadilah Bagian dari Komunitas Kami" text="Mulai langkah pertamamu dengan mendaftar secara online." />
    </div>
  )
}
