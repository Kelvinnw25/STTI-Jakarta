import Button from './Button'

/** Pita ajakan navy di akhir halaman. `action` dapat diganti untuk CTA khusus (mis. WhatsApp). */
export default function CTABand({ title, text, action, note }) {
  return (
    <section className="section section--navy cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <h2 id="cta-title">{title}</h2>
        {text && <p>{text}</p>}
        {action ?? (
          <Button to="/pendaftaran" variant="accent" size="lg">
            Daftar sekarang
          </Button>
        )}
        {note && <p className="cta-band__note">{note}</p>}
      </div>
    </section>
  )
}
