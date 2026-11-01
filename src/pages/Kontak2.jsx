import Button from '../components/ui/Button'
import FormField from '../components/ui/FormField'
import Icon from '../components/ui/Icon'
import Img from '../components/ui/Img'
import { Dashes, PopCTA, PopHeading, PopHero, Spark } from '../components/ui/Pop'
import { images } from '../data/images'
import { contact, externalLink, mapEmbedUrl, mapOpenUrl, whatsappChatUrl } from '../data/site'
import useDemoForm from '../utils/useDemoForm'
import { required, validateEmail } from '../utils/validation'

// Gaya kolase sesuai references/Kontak2.png. Isi dan data kontak sama dengan Kontak.jsx.
const initial = { nama: '', email: '', subjek: '', pesan: '' }

const validate = (v) => ({
  nama: required(v.nama, 'Nama wajib diisi.'),
  email: validateEmail(v.email),
  subjek: required(v.subjek, 'Subjek wajib diisi.'),
  pesan: v.pesan.trim().length >= 10 ? '' : 'Pesan minimal 10 karakter.',
})

const cards = [
  { icon: 'pin', tone: 'lime', title: 'Alamat', lines: [<strong key="b">{contact.building}</strong>, contact.address] },
  {
    icon: 'whatsapp',
    tone: 'pink',
    title: 'WhatsApp',
    lines: [
      <a key="w" href={contact.whatsappUrl} {...externalLink}>
        {contact.whatsapp}
      </a>,
    ],
  },
  {
    icon: 'mail',
    tone: 'orange',
    title: 'Email',
    lines: [
      <a key="e" href={contact.emailUrl}>
        {contact.email}
      </a>,
    ],
  },
  { icon: 'clock', tone: 'blue', title: 'Jam Layanan', lines: [contact.hours] },
]

export default function Kontak2() {
  const { errors, submitted, onChange, onBlur, handleSubmit } = useDemoForm(initial, validate)
  const fieldProps = (id) => ({ id, error: errors[id], onChange, onBlur })

  return (
    <div className="pop">
      <PopHero top="Hubungi" bottom="Kami" art={images.cutBuildingContact} sparkAt="left">
        Ada pertanyaan seputar program studi atau pendaftaran? Tim STTI Jakarta siap membantu.
      </PopHero>

      {/* ---------- Kartu kontak ---------- */}
      <section className="pop-wave" aria-labelledby="channels-title">
        <div className="container">
          <h2 id="channels-title" className="visually-hidden">
            Informasi kontak
          </h2>
          <ul role="list" className="pop-contact-grid">
            {cards.map((c) => (
              <li key={c.title} className="pop-contact">
                <span className={`pop-icon pop-tone--${c.tone}`}>
                  <Icon name={c.icon} size={28} />
                </span>
                <h3>{c.title}</h3>
                {c.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Lokasi ---------- */}
      <section className="pop-section" aria-labelledby="map-title">
        <div className="container">
          <PopHeading id="map-title" title="Lokasi Kampus" intro={`${contact.building}, ${contact.address}`} />
          <div className="pop-location">
            <div className="pop-location__map">
              <div className="map">
                <iframe
                  title="Peta lokasi kampus STTI Jakarta di Ebenezer Building"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <Button href={mapOpenUrl} {...externalLink} variant="line">
                <Icon name="pin" size={18} /> Buka di Google Maps
              </Button>
            </div>
            <div className="pop-location__photo">
              <Dashes tone="orange" className="pop-location__dashes" />
              <Img image={images.cutPhoto} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pesan ---------- */}
      <section className="pop-section pop-section--flush" aria-labelledby="message-title">
        <div className="container pop-message">
          <div className="pop-message__intro">
            <PopHeading
              id="message-title"
              align="left"
              title="Kirim Pesan"
              intro="Tulis pertanyaanmu. Formulir ini hanya demonstrasi dan tidak mengirim data."
            />
            <div className="pop-message__art">
              <Spark className="pop-message__spark" />
              <Img image={images.cutBooksForm} alt="" />
            </div>
          </div>
          <form className="form-card" onSubmit={handleSubmit} noValidate aria-labelledby="message-title">
            {submitted && (
              <div className="alert alert--success" role="status">
                <Icon name="check" size={20} />
                <p>
                  <strong>Demo berhasil.</strong> Pesan lolos validasi, tetapi tidak dikirim ke mana pun.
                </p>
              </div>
            )}
            <div className="form-grid">
              <FormField label="Nama" required autoComplete="name" {...fieldProps('nama')} />
              <FormField label="Email" type="email" required autoComplete="email" {...fieldProps('email')} />
              <FormField label="Subjek" required className="field--wide" {...fieldProps('subjek')} />
              <FormField label="Pesan" as="textarea" required className="field--wide" {...fieldProps('pesan')} />
            </div>
            <Button type="submit" variant="navy" size="lg" block>
              Kirim Pesan <Icon name="chevron" size={18} />
            </Button>
          </form>
        </div>
      </section>

      <PopCTA
        art={images.cutBibleCta}
        title="Lebih Cepat Lewat WhatsApp"
        text="Tanyakan seputar program studi dan pendaftaran langsung kepada tim kami."
        note={`Respon cepat untuk pertanyaan program studi & pendaftaran. Nomor: ${contact.whatsapp}`}
        action={
          <Button href={whatsappChatUrl} {...externalLink} variant="white">
            <Icon name="whatsapp" size={20} /> Chat via WhatsApp
          </Button>
        }
      />
    </div>
  )
}
