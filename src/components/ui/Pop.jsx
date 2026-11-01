import Button from './Button'
import Icon from './Icon'
import Img from './Img'
import { images } from '../../data/images'
import '../../styles/pop.css'

// Potongan bersama untuk halaman versi 2 (gaya kolase pada references/*2.png).

/** Bintang runcing pemanis. */
export const Spark = ({ tone = 'orange', className = '' }) => (
  <span className={`pop-spark pop-spark--${tone} ${className}`} aria-hidden="true" />
)

/** Tiga goresan pendek di sudut judul. */
export const Dashes = ({ tone = 'pink', className = '' }) => (
  <svg className={`pop-dashes pop-dashes--${tone} ${className}`} viewBox="0 0 44 36" aria-hidden="true" focusable="false">
    <path d="M6 30 14 13M20 32 28 7M33 29 40 17" />
  </svg>
)

/** Coretan kuas di bawah teks. */
export const Scribble = ({ tone = 'lime', className = '' }) => (
  <svg
    className={`pop-scribble pop-scribble--${tone} ${className}`}
    viewBox="0 0 200 16"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3 6C60 2 140 2 197 5M18 12C70 8 130 8 176 11" />
  </svg>
)

/** Label kertas sobek, mis. "Visi". */
export const PopTag = ({ tone = 'pink', as: Tag = 'p', className = '', children }) => (
  <Tag className={`pop-tag pop-tag--${tone} ${className}`}>{children}</Tag>
)

/** Hero halaman: judul dua baris bergaya kolase, ilustrasi di kanan. */
export function PopHero({ top, bottom, art, artAlt, sparkAt = 'left', compact = false, children }) {
  return (
    <section className="pop-hero" aria-labelledby="pop-hero-title">
      <span className="pop-corner pop-corner--tl" aria-hidden="true" />
      <span className="pop-corner pop-corner--ml" aria-hidden="true" />
      <span className="pop-corner pop-corner--tr" aria-hidden="true" />
      <div className="container pop-hero__inner">
        <div className="pop-hero__copy">
          <h1 id="pop-hero-title" className={`pop-title ${compact ? 'pop-title--compact' : ''}`}>
            <span className="pop-title__top">{top}</span> <span className="pop-title__bottom">{bottom}</span>
            <Dashes className="pop-title__dashes" />
          </h1>
          <p className="pop-hero__lead">{children}</p>
        </div>
        <div className="pop-hero__art">
          <Img image={art} eager alt={artAlt ?? art.alt} />
          <Spark className={`pop-hero__spark pop-hero__spark--${sparkAt}`} />
        </div>
      </div>
    </section>
  )
}

/** Judul section. `tone="light"` untuk latar navy. */
export function PopHeading({ id, tag, tagTone, title, intro, as: Heading = 'h2', align = 'center', tone = 'dark', dashes = 'pink' }) {
  return (
    <header className={`pop-head pop-head--${align} pop-head--${tone}`}>
      {tag && <PopTag tone={tagTone}>{tag}</PopTag>}
      <Heading id={id} className="pop-h2">
        {title}
        {dashes && <Dashes tone={dashes} className="pop-head__dashes" />}
      </Heading>
      {intro && <p className="pop-head__intro">{intro}</p>}
    </header>
  )
}

/** Pita ajakan di akhir halaman: ilustrasi menonjol di kiri, teks dan tombol di atas navy. */
export function PopCTA({ art = images.cutBooksCta, title, text, note, action }) {
  return (
    <section className="pop-cta-wrap" aria-label={title}>
      <span className="pop-corner pop-corner--bl" aria-hidden="true" />
      <span className="pop-corner pop-corner--br" aria-hidden="true" />
      <div className="container">
        <div className="pop-cta">
          <Img image={art} alt="" className="pop-cta__art" />
          <div className="pop-cta__title">
            <h2>{title}</h2>
            <Scribble />
          </div>
          {text && (
            <div className="pop-cta__text">
              <p>{text}</p>
              {note && <p className="pop-cta__note">{note}</p>}
            </div>
          )}
          <div className="pop-cta__action">
            {action ?? (
              <Button to="/pendaftaran" variant="white">
                Daftar Sekarang <Icon name="chevron" size={18} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
