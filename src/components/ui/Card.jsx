/** Kartu generik. variant = plain | navy | soft. */
export default function Card({ variant = 'plain', as: Tag = 'article', className = '', children, ...rest }) {
  return (
    <Tag className={`card card--${variant} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
