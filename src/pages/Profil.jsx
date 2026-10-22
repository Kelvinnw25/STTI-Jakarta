import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTABand from '../components/ui/CTABand'
import IconTile from '../components/ui/IconTile'
import Img from '../components/ui/Img'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { institution } from '../data/site'

// Tiga nilai diturunkan langsung dari kalimat Visi pada referensi.
const values = [
  { icon: 'cross', title: 'Spiritualitas', text: 'Pembentukan spiritualitas dan karakter menjadi dasar seluruh proses belajar.' },
  { icon: 'search', title: 'Penelitian Teologi Kontekstual', text: 'Kajian teologi yang bertolak dari konteks nyata masyarakat.' },
  { icon: 'heart', title: 'Pelayanan Sosial Masyarakat', text: 'Mahasiswa diperlengkapi untuk melayani dan berdampak bagi masyarakat.' },
]

const missionImages = [
  { image: images.k5, pos: '60% 50%' },
  { image: images.study6, pos: '50% 50%' },
  { image: images.k12, pos: '50% 40%' },
]

export default function Profil() {
  return (
    <>
      <PageHeader title="Profil STTI Jakarta">
        Mengenal lembaga yang mempersiapkan tenaga pelayanan, pendidik, dan pemimpin Kristen.
      </PageHeader>

      <section className="banner" aria-label="Banner kampus">
        <div className="container">
          <div className="banner__frame">
            <div className="banner__mark" aria-hidden="true">
              <span>STTI</span>
              <small>Jakarta</small>
            </div>
            <Img image={images.chapel} eager alt="Ruang ibadah kampus dengan salib, mimbar, dan piano" />
          </div>
        </div>
      </section>

      <Section tone="navy" labelledBy="about-title">
        <div className="split split--logo">
          <div className="logo-panel" role="img" aria-label="Logo sementara STTI Jakarta">
            <span className="logo-panel__mark">STTI</span>
            <span className="logo-panel__sub">Jakarta</span>
          </div>
          <div className="split__body">
            <SectionHeading id="about-title" align="left" eyebrow="Tentang Kami" title="Deskripsi Institusi" />
            <p>{institution.description}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="vision-title">
        <div className="vision">
          <p className="eyebrow">Visi</p>
          <h2 id="vision-title">Visi STTI Jakarta</h2>
          <p className="vision__text">{institution.vision}</p>
        </div>
        <SectionHeading as="h3" title="Nilai yang Dikembangkan" />
        <ul role="list" className="grid-3">
          {values.map((v) => (
            <li key={v.title}>
              <Card variant="soft" className="value-card">
                <IconTile name={v.icon} shape="circle" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="mission-title">
        <SectionHeading id="mission-title" title="Misi" intro="Tiga misi yang menjadi arah kerja STTI Jakarta." />
        <ol role="list" className="grid-3">
          {institution.missions.map((m, i) => (
            <li key={i}>
              <Card variant="white" className="mission-card">
                <Img image={missionImages[i].image} className="round-photo" style={{ objectPosition: missionImages[i].pos }} alt="" />
                <h3>Misi {i + 1}</h3>
                <p>{m}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="facilities-title">
        <div className="split">
          <div className="facility-collage">
            <Img image={images.classRoom} className="facility-collage__main" />
            <Img image={images.commonRoom} />
            <Img image={images.classroomComputer} />
          </div>
          <div className="split__body split__body--dark">
            <SectionHeading id="facilities-title" align="left" eyebrow="Fasilitas" title="Ruang Belajar dan Bersama" />
            <p>
              Ruang kelas, ruang komputer, dan ruang bersama mendukung proses belajar, diskusi, serta kehidupan
              komunitas mahasiswa.
            </p>
            <Button to="/kehidupan-kampus" size="lg">
              Lihat Kehidupan Kampus
            </Button>
          </div>
        </div>
      </Section>

      <CTABand
        title="Siap Bergabung Bersama Kami?"
        text="Mulai langkah awal studimu dengan mengisi formulir pendaftaran online."
      />
    </>
  )
}
