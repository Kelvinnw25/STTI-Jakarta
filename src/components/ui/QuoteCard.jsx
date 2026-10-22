import Card from './Card'
import Img from './Img'
import Badge from './Badge'
import Ph from './Ph'

/**
 * Kartu contoh tampilan testimoni. Tidak ada kutipan asli: isi sepenuhnya placeholder
 * dan diberi tanda "Contoh tampilan" agar tidak dibaca sebagai pernyataan nyata.
 */
export default function QuoteCard({ avatar, role }) {
  return (
    <Card variant="soft" className="quote-card">
      <div className="quote-card__head">
        <Img image={avatar} alt="" className="avatar" />
        <div>
          <p className="quote-card__name">
            <Ph>[Nama]</Ph>
          </p>
          <p className="quote-card__role">{role}</p>
        </div>
      </div>
      <p className="quote-card__text">
        <Ph>[Kutipan testimoni akan ditampilkan di sini setelah tersedia dan disetujui.]</Ph>
      </p>
      <Badge tone="muted">Contoh tampilan</Badge>
    </Card>
  )
}
