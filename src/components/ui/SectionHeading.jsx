export default function SectionHeading({ id, eyebrow, title, intro, align = 'center', as: Tag = 'h2' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </header>
  )
}
