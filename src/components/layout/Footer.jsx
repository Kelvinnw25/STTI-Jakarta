import { Link } from 'react-router-dom'
import { navLinks, contact, institution } from '../../data/site'
import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>{institution.description}</p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="site-footer__title">Navigasi</h2>
          <ul role="list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__title">Kontak</h2>
          <ul role="list" className="site-footer__contact">
            <li>
              <strong>{contact.building}</strong>
              <br />
              {contact.address}
            </li>
            <li>
              <a href={contact.emailUrl}>{contact.email}</a>
            </li>
            <li>
              WhatsApp:{' '}
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {contact.whatsapp}
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="container">
          <p>© 2026 STTI Jakarta</p>
        </div>
      </div>
    </footer>
  )
}
