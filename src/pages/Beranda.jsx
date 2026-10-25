import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Img from '../components/ui/Img'
import Ph from '../components/ui/Ph'
import QuoteCard from '../components/ui/QuoteCard'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import StepCard from '../components/ui/StepCard'
import { images } from '../data/images'
import { jenjang } from '../data/programs'
import { institution } from '../data/site'

const mosaic = [
  { image: images.k6, cls: 'mosaic__item--big', pos: '40% 50%' },
  { image: images.k4, pos: '35% 50%' },
  { image: images.k2, pos: '50% 40%' },
  { image: images.k7, pos: '50% 30%' },
  { image: images.discussion3, pos: '50% 50%' },
]

const testimonials = [
  { avatar: images.avatarWoman, role: <Ph>[Mahasiswa / Alumni]</Ph> },
  { avatar: images.avatarMan1, role: <Ph>[Mahasiswa / Alumni]</Ph> },
  { avatar: images.avatarMan2, role: <Ph>[Mahasiswa / Alumni]</Ph> },
]

export default function Beranda() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">{institution.shortName}</p>
            <h1 id="hero-title">Temukan Panggilanmu</h1>
            <p className="hero__lead">
              Belajar teologi secara akademik sekaligus dibentuk dalam spiritualitas dan karakter, untuk melayani
              sebagai tenaga pelayanan, pendidik, dan pemimpin Kristen.
            </p>
            <div className="hero__actions">
              <Button to="/pendaftaran" size="lg">
                Daftar sekarang
              </Button>
              <Button to="/program-studi" variant="outline" size="lg">
                Pelajari Program Studi
              </Button>
            </div>
          </div>
          <div className="hero__media">
            <Img image={images.discussion2} eager alt="Mahasiswa STTI Jakarta berdiskusi dengan wajah ceria di ruang kuliah" />
          </div>
        </div>
      </section>

      <Section tone="navy" labelledBy="intro-title">
        <div className="split">
          <div className="split__media split__media--portrait">
            <Img image={images.building} alt="Gedung kampus berkaca biru dengan salib di bagian atas" />
          </div>
          <div className="split__body">
            <SectionHeading id="intro-title" align="left" eyebrow="Tentang Kami" title="Mengenal STTI Jakarta" />
            <p>{institution.description}</p>
            <Button to="/profil" variant="accent" size="lg">
              Kenali STT
            </Button>
          </div>
        </div>
      </Section>

      <Section labelledBy="programs-title">
        <SectionHeading
          id="programs-title"
          title="Program Studi"
          intro="Pilihan program studi bagi calon mahasiswa yang ingin mempersiapkan diri menjadi tenaga pelayanan, pendidik, dan pemimpin Kristen."
        />
        <ul role="list" className="grid-3">
          {jenjang.map((j) => (
            <li key={j.id}>
              <Card variant="navy" className="program-card">
                <div className="program-card__media">
                  <Img image={j.image} />
                </div>
                <div className="program-card__body">
                  <Badge tone="light">Jenjang {j.code}</Badge>
                  <h3>
                    {j.name} ({j.code})
                  </h3>
                  <p>{j.programs.map((p) => p.name).join(' · ')}</p>
                  <Button to={`/program-studi?jenjang=${j.id}#detail`} variant="light" size="sm" block>
                    Pelajari Program Studi
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="gallery-title">
        <SectionHeading
          id="gallery-title"
          title="Momen di STTI Jakarta"
          intro="Sekilas suasana belajar, ibadah, dan kebersamaan mahasiswa."
        />
        <div className="mosaic">
          {mosaic.map(({ image, cls = '', pos }) => (
            <figure key={image.src} className={`mosaic__item ${cls}`}>
              <Img image={image} style={{ objectPosition: pos }} />
            </figure>
          ))}
        </div>
      </Section>

      <Section labelledBy="voices-title">
        <SectionHeading
          id="voices-title"
          title="Suara Komunitas"
          intro="Bagian ini disiapkan untuk testimoni mahasiswa dan alumni. Kutipan asli belum tersedia."
        />
        <ul role="list" className="grid-3">
          {testimonials.map((t, i) => (
            <li key={i}>
              <QuoteCard {...t} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="steps-title">
        <SectionHeading
          id="steps-title"
          title="Mulai Bergabung dalam 3 Langkah"
          intro="Proses pendaftaran awal dilakukan secara online."
        />
        <ol role="list" className="steps">
          <StepCard step={1} icon="edit" title="Isi formulir online" />
          <StepCard step={2} icon="upload" title="Unggah berkas" />
          <StepCard step={3} icon="bell" title="Pengumuman" />
        </ol>
        <div className="section__action">
          <Button to="/pendaftaran" variant="accent" size="lg">
            Daftar sekarang
          </Button>
        </div>
      </Section>
    </>
  )
}
