export default function PageHeader({ title, children }) {
  return (
    <header className="page-header">
      <div className="container">
        <h1>{title}</h1>
        <span className="page-header__rule" aria-hidden="true" />
        <p>{children}</p>
      </div>
    </header>
  )
}
