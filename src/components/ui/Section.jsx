/** Pembungkus section berpita warna: tone = white | navy | soft.
 * `art` (opsional): gambar banner dari data/images.js sebagai latar section. */
export default function Section({ tone = 'white', id, labelledBy, className = '', art, children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`section section--${tone} ${art ? 'section--art' : ''} ${className}`}
      style={art ? { backgroundImage: `url("${art.src}")` } : undefined}
    >
      <div className="container">{children}</div>
    </section>
  )
}
