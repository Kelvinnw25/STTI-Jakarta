import Icon from './Icon'

/** Daftar bertanda centang. `items` berupa string atau elemen React. */
export default function CheckList({ items, className = '' }) {
  return (
    <ul role="list" className={`check-list ${className}`}>
      {items.map((item, i) => (
        <li key={i}>
          <span className="check-list__icon">
            <Icon name="check" size={16} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
