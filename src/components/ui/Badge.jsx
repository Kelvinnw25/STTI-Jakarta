export default function Badge({ tone = 'outline', children }) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}
