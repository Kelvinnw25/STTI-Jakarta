import Card from './Card'
import Img from './Img'
import Badge from './Badge'
import Ph from './Ph'

/**
 * Kartu cerita/testimoni. Bila `name` dan `text` diberikan, tampil sebagai cerita biasa.
 * Tanpa keduanya, kartu menjadi contoh tampilan: isi placeholder dan diberi tanda "Contoh tampilan".
 */
export default function QuoteCard({ avatar, role, name, text }) {
  const isDemo = !name || !text
  return (
    <Card variant="soft" className="quote-card">
      <div className="quote-card__head">
        <Img image={avatar} alt="" className="avatar" />
        <div>
          <p className="quote-card__name">{isDemo ? <Ph>[Nama]</Ph> : name}</p>
          <p className="quote-card__role">{role}</p>
        </div>
      </div>
      <blockquote className="quote-card__text">
        {isDemo ? <Ph>[Kutipan testimoni akan ditampilkan di sini setelah tersedia dan disetujui.]</Ph> : text}
      </blockquote>
      {isDemo && <Badge tone="muted">Contoh tampilan</Badge>}
    </Card>
  )
}
