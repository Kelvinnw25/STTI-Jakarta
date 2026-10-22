/** Pembungkus section berpita warna: tone = white | navy | soft. */
export default function Section({ tone = 'white', id, labelledBy, className = '', children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`section section--${tone} ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}
