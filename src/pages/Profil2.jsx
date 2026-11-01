import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Img from '../components/ui/Img'
import OrgChart from '../components/ui/OrgChart'
import { Dashes, PopCTA, PopHeading, PopTag, Scribble, Spark } from '../components/ui/Pop'
import { images } from '../data/images'
import { leaderTiers } from '../data/leaders'
import { institution } from '../data/site'

// Gaya kolase sesuai references/Profil2.png. Isi sama dengan Profil.jsx.
const values = [
  { icon: 'cross', tone: 'lime', title: 'Spiritualitas', text: 'Pembentukan spiritualitas dan karakter menjadi dasar seluruh proses belajar.' },
  { icon: 'search', tone: 'pink', title: 'Penelitian Teologi Kontekstual', text: 'Kajian teologi yang bertolak dari konteks nyata masyarakat.' },
  { icon: 'heart', tone: 'orange', title: 'Pelayanan Sosial Masyarakat', text: 'Mahasiswa diperlengkapi untuk melayani dan berdampak bagi masyarakat.' },
]

const missionImages = [
  { image: images.k5, pos: '60% 50%' },
  { image: images.study6, pos: '50% 50%' },
  { image: images.k12, pos: '50% 40%' },
]

export default function Profil2() {
  return (
    <div className="pop">
      {/* ---------- Judul & banner ---------- */}
      <section className="pop-profile-top" aria-labelledby="pop-hero-title">
        <div className="container">
          <div className="pop-profile-top__head">
            <h1 id="pop-hero-title" className="pop-h1">
              Profil STTI Jakarta
              <Dashes className="pop-head__dashes" />
            </h1>
            <Scribble className="pop-profile-top__scribble" />
            <p>Mengenal lembaga yang mempersiapkan tenaga pelayanan, pendidik, dan pemimpin Kristen.</p>
          </div>
          <div className="pop-banner">
            <div className="pop-banner__mark" aria-hidden="true">
              <span>STTI</span>
              <small>Jakarta</small>
              <Scribble />
            </div>
            <div className="pop-banner__photo">
              <Img image={images.chapel} eager alt="Ruang ibadah kampus dengan salib, mimbar, dan piano" />
            </div>
            <Spark className="pop-banner__spark" />
          </div>
        </div>
      </section>

      {/* ---------- Deskripsi ---------- */}
      <section className="pop-band pop-band--corners" aria-labelledby="about-title">
        <div className="container pop-about">
          <div className="pop-about__logo">
            <Img image={images.logo} alt="Logo STTI Jakarta" />
            <Dashes className="pop-about__dashes" />
          </div>
          <div className="pop-about__body">
            <p className="pop-eyebrow">Tentang Kami</p>
            <h2 id="about-title" className="pop-h2">
              Deskripsi Institusi
            </h2>
            <p>{institution.description}</p>
          </div>
        </div>
      </section>

      {/* ---------- Visi & nilai ---------- */}
      <section className="pop-section" aria-labelledby="vision-title">
        <div className="container">
          <div className="pop-vision">
            <Spark tone="lime" className="pop-vision__spark" />
            <PopTag>Visi</PopTag>
            <h2 id="vision-title" className="pop-h2">
              Visi STTI Jakarta
            </h2>
            <p>{institution.vision}</p>
            <Dashes tone="blue" className="pop-vision__dashes" />
          </div>
          <PopHeading as="h3" title="Nilai yang Dikembangkan" />
          <ul role="list" className="pop-grid-3 pop-values">
            {values.map((v) => (
              <li key={v.title} className="pop-note">
                <span className={`pop-brush pop-tone--${v.tone}`}>
                  <Icon name={v.icon} size={34} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Misi ---------- */}
      <section className="pop-band pop-band--corners-alt" aria-labelledby="mission-title">
        <div className="container">
          <PopHeading
            id="mission-title"
            tag="Misi"
            tagTone="lime"
            tone="light"
            title="Misi STTI Jakarta"
            intro="Tiga misi yang menjadi arah kerja STTI Jakarta."
          />
          <ol role="list" className="pop-grid-3">
            {institution.missions.map((m, i) => (
              <li key={i} className="pop-mission">
                <Img image={missionImages[i].image} style={{ objectPosition: missionImages[i].pos }} alt="" />
                <PopTag as="h3">Misi {i + 1}</PopTag>
                <p>{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Struktur kepemimpinan ---------- */}
      <section className="pop-section pop-leaders" aria-labelledby="leaders-title">
        <Spark tone="orange" className="pop-leaders__spark" />
        <Spark tone="lime" className="pop-leaders__spark pop-leaders__spark--2" />
        <div className="container">
          <PopHeading
            id="leaders-title"
            tag="Kepemimpinan"
            title="Struktur Kepemimpinan"
            intro="Susunan pimpinan yayasan, institusi, dan program studi STT Indonesia Jakarta."
          />
          <OrgChart tiers={leaderTiers} />
        </div>
      </section>

      {/* ---------- Fasilitas ---------- */}
      <section className="pop-section pop-section--tint" aria-labelledby="facilities-title">
        <div className="container pop-facility">
          <div className="pop-facility__collage">
            <Img image={images.classRoom} className="pop-facility__main" />
            <Img image={images.commonRoom} />
            <Img image={images.classroomComputer} />
          </div>
          <div className="pop-facility__body">
            <PopHeading
              id="facilities-title"
              align="left"
              tag="Fasilitas"
              tagTone="lime"
              title="Ruang Belajar dan Bersama"
            />
            <p>
              Ruang kelas, ruang komputer, dan ruang bersama mendukung proses belajar, diskusi, serta kehidupan
              komunitas mahasiswa.
            </p>
            <Button to="/kehidupan-kampus" variant="navy" size="lg">
              Lihat Kehidupan Kampus <Icon name="chevron" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <PopCTA
        title="Siap Bergabung Bersama Kami?"
        text="Mulai langkah awal studimu dengan mengisi formulir pendaftaran online."
      />
    </div>
  )
}
