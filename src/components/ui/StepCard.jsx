import Icon from './Icon'

export default function StepCard({ step, icon, title, children }) {
  return (
    <li className="step-card">
      <span className="step-card__icon">
        <Icon name={icon} size={30} />
        <span className="step-card__num" aria-hidden="true">
          {step}
        </span>
      </span>
      <h3>
        <span className="visually-hidden">Langkah {step}: </span>
        {title}
      </h3>
      {children && <p>{children}</p>}
    </li>
  )
}
