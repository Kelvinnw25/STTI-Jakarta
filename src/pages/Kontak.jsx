import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTABand from '../components/ui/CTABand'
import FormField from '../components/ui/FormField'
import Icon from '../components/ui/Icon'
import IconTile from '../components/ui/IconTile'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import { contact, externalLink, mapEmbedUrl, mapOpenUrl, whatsappChatUrl } from '../data/site'
import useDemoForm from '../utils/useDemoForm'
import { required, validateEmail } from '../utils/validation'

const initial = { nama: '', email: '', subjek: '', pesan: '' }

const validate = (v) => ({
  nama: required(v.nama, 'Nama wajib diisi.'),
  email: validateEmail(v.email),
  subjek: required(v.subjek, 'Subjek wajib diisi.'),
  pesan: v.pesan.trim().length >= 10 ? '' : 'Pesan minimal 10 karakter.',
})

const cards = [
  { icon: 'pin', title: 'Alamat', lines: [<strong key="b">{contact.building}</strong>, contact.address] },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    lines: [
      <a key="w" href={contact.whatsappUrl} {...externalLink}>
        {contact.whatsapp}
      </a>,
    ],
  },
  {
    icon: 'mail',
    title: 'Email',
    lines: [
      <a key="e" href={contact.emailUrl}>
        {contact.email}
      </a>,
    ],
  },
  { icon: 'clock', title: 'Jam Layanan', lines: [contact.hours] },
]

export default function Kontak() {
  const { errors, submitted, onChange, onBlur, handleSubmit } = useDemoForm(initial, validate)
  const fieldProps = (id) => ({ id, error: errors[id], onChange, onBlur })

  return (
    <>
      <PageHeader title="Hubungi Kami">
        Ada pertanyaan seputar program studi atau pendaftaran? Tim STTI Jakarta siap membantu.
      </PageHeader>

      <Section tone="navy" labelledBy="channels-title">
        <h2 id="channels-title" className="visually-hidden">
          Informasi kontak
        </h2>
        <ul role="list" className="grid-4">
          {cards.map((c) => (
            <li key={c.title}>
              <Card variant="white" className="contact-card">
                <IconTile name={c.icon} shape="circle" />
                <h3>{c.title}</h3>
                {c.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="map-title">
        <SectionHeading id="map-title" title="Lokasi Kampus" intro={`${contact.building}, ${contact.address}`} />
        <div className="map">
          <iframe
            title="Peta lokasi kampus STTI Jakarta di Ebenezer Building"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="section__action">
          <Button href={mapOpenUrl} {...externalLink} variant="outline">
            <Icon name="pin" size={18} /> Buka di Google Maps
          </Button>
        </div>
      </Section>

      <Section tone="soft" labelledBy="message-title">
        <div className="message-layout">
          <SectionHeading id="message-title" title="Kirim Pesan" intro="Tulis pertanyaanmu. Formulir ini hanya demonstrasi dan tidak mengirim data." />
          <form className="form-card" onSubmit={handleSubmit} noValidate aria-labelledby="message-title">
            {submitted && (
              <div className="alert alert--success" role="status">
                <Icon name="check" size={20} />
                <p>
                  <strong>Demo berhasil.</strong> Pesan lolos validasi, tetapi tidak dikirim ke mana pun.
                </p>
              </div>
            )}
            <FormField label="Nama" required autoComplete="name" {...fieldProps('nama')} />
            <FormField label="Email" type="email" required autoComplete="email" {...fieldProps('email')} />
            <FormField label="Subjek" required {...fieldProps('subjek')} />
            <FormField label="Pesan" as="textarea" required {...fieldProps('pesan')} />
            <Button type="submit" size="lg" block>
              Kirim Pesan
            </Button>
          </form>
        </div>
      </Section>

      <CTABand
        title="Lebih Cepat Lewat WhatsApp"
        text="Tanyakan seputar program studi dan pendaftaran langsung kepada tim kami."
        action={
          <Button href={whatsappChatUrl} {...externalLink} variant="accent" size="lg">
            <Icon name="whatsapp" size={20} /> Chat via WhatsApp
          </Button>
        }
        note={`Respon cepat untuk pertanyaan program studi & pendaftaran. Nomor: ${contact.whatsapp}`}
      />
    </>
  )
}
