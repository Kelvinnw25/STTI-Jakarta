import { Link } from 'react-router-dom'

/**
 * Tombol / tautan bergaya tombol.
 * - `to`: rute internal (Link)
 * - `href`: tautan eksternal
 * - `placeholder`: tombol demonstrasi yang bisa ditekan tetapi tidak melakukan apa pun (tidak berpindah halaman)
 */
export default function Button({
  to,
  href,
  placeholder = false,
  variant = 'primary',
  size = 'md',
  block = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['btn', `btn--${variant}`, `btn--${size}`, block && 'btn--block', className]
    .filter(Boolean)
    .join(' ')

  if (placeholder) {
    return (
      <button type="button" className={cls} {...rest}>
        {children}
      </button>
    )
  }
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
