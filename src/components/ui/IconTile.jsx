import Icon from './Icon'

/** Kotak / lingkaran ikon pengganti placeholder "Ikon" pada wireframe. */
export default function IconTile({ name, shape = 'square', tone = 'navy', size = 28 }) {
  return (
    <span className={`icon-tile icon-tile--${shape} icon-tile--${tone}`}>
      <Icon name={name} size={size} />
    </span>
  )
}
