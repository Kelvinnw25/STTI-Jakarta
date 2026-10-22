/** Gambar dari data/images.js dengan dimensi bawaan dan lazy-loading (kecuali `eager`). */
export default function Img({ image, alt, eager = false, className = '', style, ...rest }) {
  return (
    <img
      src={image.src}
      width={image.w}
      height={image.h}
      alt={alt ?? image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
      {...rest}
    />
  )
}
