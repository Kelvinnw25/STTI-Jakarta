/**
 * Bagan kepemimpinan bertingkat. `tiers` dari data/leaders.js.
 * Di layar lebar tiap tingkat berupa satu baris yang dihubungkan garis siku;
 * di layar sempit tingkat-tingkat tersusun ke bawah dengan garis lurus.
 * Struktur HTML-nya daftar bersarang (ol > li > ul > li) agar terbaca berurutan oleh pembaca layar.
 */
export default function OrgChart({ tiers }) {
  return (
    <ol className="org" aria-label="Bagan struktur kepemimpinan">
      {tiers.map((tier, i) => (
        <li key={tier.id} className={`org__tier org__tier--${tier.size}`} data-count={tier.people.length}>
          <ul role="list" className="org__row">
            {tier.people.map((p) => (
              <li key={p.id} className="org__node">
                <article className="org-card">
                  <img
                    className="org-card__photo"
                    src={p.photo.src}
                    width={p.photo.w}
                    height={p.photo.h}
                    alt={p.photo.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="org-card__body">
                    <h3>{p.name}</h3>
                    <p className="org-card__role">{p.role}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
