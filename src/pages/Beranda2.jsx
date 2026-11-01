import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Img from '../components/ui/Img'
import { images } from '../data/images'
import { jenjang } from '../data/programs'
import { institution } from '../data/site'
import { testimonials } from '../data/testimonials'
import '../styles/beranda2.css'

// Gaya "kolase kertas sobek" sesuai references/beranda2.png.
// Warna blok per kartu bergantian: lime, pink, oranye.
const tones = ['lime', 'pink', 'orange']

// Foto kartu program: cukup mirip ilustrasi pada desain (toga, tumpukan buku, laptop).
const programPhotos = [images.study5, images.study2, images.study6]

const moments = [
  { image: images.k6, pos: '40% 50%' },
  { image: images.k7, pos: '50% 35%' },
  { image: images.k9, pos: '50% 45%' },
  { image: images.study3, pos: '50% 50%' },
]

const steps = [
  { icon: 'laptop', title: 'Isi formulir online', tone: 'lime' },
  { icon: 'upload', title: 'Unggah berkas', tone: 'pink' },
  { icon: 'megaphone', title: 'Pengumuman', tone: 'orange' },
]

const signs = ['Kuliah?', 'Kerja?', 'Tujuan?', 'Panggilan?']

/** Bintang empat sudut pemanis. */
const Star = ({ className = '' }) => <span className={`h2-star ${className}`} aria-hidden="true" />

/** Tiga goresan pendek pemanis di sudut judul. */
const Dashes = ({ className = '' }) => (
  <svg className={`h2-dashes ${className}`} viewBox="0 0 44 36" aria-hidden="true" focusable="false">
    <path d="M5 30 13 14M19 32 27 8M33 28 40 16" />
  </svg>
)

export default function Beranda2() {
  return (
    <div className="home2">
      {/* ---------- Hero ---------- */}
      <section className="h2-hero" aria-labelledby="h2-hero-title">
        <span className="h2-shape h2-shape--hero-tl" aria-hidden="true" />
        <span className="h2-shape h2-shape--hero-tr" aria-hidden="true" />
        <span className="h2-shape h2-shape--hero-bl" aria-hidden="true" />
        <Star className="h2-star--lime h2-hero__star" />

        <div className="container h2-hero__inner">
          <div className="h2-hero__copy">
            <h1 id="h2-hero-title" className="h2-title">
              <span className="h2-title__blue">Temukan</span>
              <span className="h2-title__pink">Panggilanmu</span>
            </h1>
            <p className="h2-tagline">Lebih dari sekadar pilihan, ini tentang panggilan!</p>
            <p className="h2-lead">
              Belajar teologi secara akademik sekaligus dibentuk dalam spiritualitas dan karakter, untuk melayani
              sebagai tenaga pelayanan, pendidik, dan pemimpin Kristen.
            </p>
            <div className="h2-actions">
              <Button to="/pendaftaran" variant="pop-blue" size="lg">
                Daftar Sekarang <Icon name="chevron" size={18} />
              </Button>
              <Button to="/program-studi" variant="pop-outline" size="lg">
                Pelajari Program Studi
              </Button>
            </div>
          </div>
        </div>

        <div className="h2-hero__art">
          <Img
            image={images.popStudents}
            eager
            alt="Tiga mahasiswa berdiskusi bersama menghadap laptop"
            className="h2-hero__photo"
          />
          <div className="h2-signs" aria-hidden="true">
            {signs.map((s, i) => (
              <span key={s} className={`h2-sign h2-sign--${i + 1}`}>
                {s}
              </span>
            ))}
          </div>
          <p className="h2-sticker">Sama-sama cari jawabannya di sini!</p>
        </div>
      </section>

      {/* ---------- Tentang Kami ---------- */}
      <section className="h2-about" aria-labelledby="h2-about-title">
        <div className="h2-about__art h2-about__art--left">
          <Img image={images.popBible} alt="Alkitab terbuka dengan salib kayu di atasnya" />
        </div>
        <div className="h2-about__text">
          <p className="h2-eyebrow">Tentang Kami</p>
          <h2 id="h2-about-title" className="h2-h2">
            Mengenal STTI Jakarta
          </h2>
          <p>{institution.description}</p>
          <Button to="/profil" variant="pop-outline">
            Kenali STT <Icon name="chevron" size={16} />
          </Button>
        </div>
        <div className="h2-about__art h2-about__art--right">
          <Img image={images.popBuilding} alt="Gedung kampus STTI Jakarta dengan salib besar di dindingnya" />
        </div>
      </section>

      {/* ---------- Program Studi ---------- */}
      <section className="h2-section h2-programs" aria-labelledby="h2-programs-title">
        <div className="container">
          <header className="h2-head h2-head--center">
            <p className="h2-eyebrow">Program Studi</p>
            <h2 id="h2-programs-title" className="h2-h2">
              Pilihan Program Studi
            </h2>
            <p className="h2-sub">
              Pilihan program studi bagi calon mahasiswa yang ingin mempersiapkan diri menjadi tenaga pelayanan,
              pendidik, dan pemimpin Kristen.
            </p>
          </header>
          <ul role="list" className="h2-programs__grid">
            {jenjang.map((j, i) => (
              <li key={j.id} className="h2-paper">
                <article className="h2-pcard">
                  <div className={`h2-pcard__media h2-tone--${tones[i % 3]}`}>
                    <Img image={programPhotos[i]} alt="" />
                  </div>
                  <div className="h2-pcard__body">
                    <span className="h2-badge">Jenjang {j.code}</span>
                    <h3>
                      {j.name} ({j.code})
                    </h3>
                    <p>{j.programs.map((p) => p.name).join(' · ')}</p>
                    <Button to={`/program-studi?jenjang=${j.id}#detail`} variant="pop-lime" size="sm">
                      Pelajari Program Studi <Icon name="chevron" size={16} />
                    </Button>
                  </div>
                  <Dashes className={`h2-dashes--${tones[i % 3]}`} />
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Momen ---------- */}
      <section className="h2-section h2-moments" aria-labelledby="h2-moments-title">
        <div className="container">
          <header className="h2-head h2-head--split">
            <div>
              <h2 id="h2-moments-title" className="h2-h2">
                Momen di STTI Jakarta
              </h2>
              <p className="h2-sub">Sekilas suasana belajar, ibadah, dan kebersamaan mahasiswa.</p>
            </div>
            <Button to="/kehidupan-kampus" variant="pop-outline" size="sm">
              Lihat Lebih Banyak <Icon name="chevron" size={16} />
            </Button>
          </header>
          <ul role="list" className="h2-moments__grid">
            {moments.map(({ image, pos }, i) => (
              <li key={image.src} className={`h2-photo h2-photo--${i + 1}`}>
                <Img image={image} style={{ objectPosition: pos }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Suara Komunitas ---------- */}
      <section className="h2-voices" aria-labelledby="h2-voices-title">
        <div className="container h2-voices__grid">
          <header className="h2-voices__intro">
            <h2 id="h2-voices-title" className="h2-h2">
              Suara Komunitas
            </h2>
            <Dashes className="h2-dashes--pink h2-voices__dashes" />
            <p className="h2-sub">Cerita singkat mahasiswa dan alumni tentang pengalaman mereka bersama STTI Jakarta.</p>
          </header>
          {testimonials.map((t, i) => (
            <figure key={t.name} className="h2-paper h2-voice">
              <div className="h2-voice__card">
                <div className={`h2-voice__photo h2-tone--${i === 1 ? 'lime' : 'pink'}`}>
                  <Img image={t.avatar} alt="" />
                </div>
                <blockquote>
                  <Icon name="quote" size={22} className="h2-voice__mark" />
                  <p>{t.text}</p>
                </blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- 3 Langkah ---------- */}
      <section className="h2-section h2-steps" aria-labelledby="h2-steps-title">
        <span className="h2-shape h2-shape--steps-bl" aria-hidden="true" />
        <span className="h2-shape h2-shape--steps-br" aria-hidden="true" />
        <div className="container">
          <header className="h2-head h2-head--center">
            <h2 id="h2-steps-title" className="h2-h2">
              Mulai Bergabung dalam 3 Langkah
              <Dashes className="h2-dashes--pink h2-steps__dashes" />
            </h2>
            <p className="h2-sub">Proses pendaftaran awal dilakukan secara online.</p>
          </header>
          <ol role="list" className="h2-steps__row">
            {steps.map((s, i) => (
              <li key={s.title} className="h2-step">
                <div className="h2-step__wrap">
                  <div className={`h2-step__card h2-tone--${s.tone}`}>
                    <Icon name={s.icon} size={44} className="h2-step__icon" />
                    <h3>
                      <span className="visually-hidden">Langkah {i + 1}: </span>
                      {s.title}
                    </h3>
                  </div>
                  <span className="h2-step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                </div>
                {i < steps.length - 1 && <Icon name="chevron" size={30} className="h2-step__next" />}
              </li>
            ))}
          </ol>
          <div className="h2-steps__cta">
            <Button to="/pendaftaran" variant="pop-blue" size="lg">
              Daftar Sekarang <Icon name="chevron" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
