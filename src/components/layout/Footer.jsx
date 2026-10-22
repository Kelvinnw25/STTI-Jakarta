import { Link } from 'react-router-dom'
import { navLinks, contact, institution } from '../../data/site'
import Ph from '../ui/Ph'
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
              {contact.location}
              <br />
              <Ph>{contact.addressDetail}</Ph>
            </li>
            <li>
              <Ph>{contact.phone}</Ph>
            </li>
            <li>
              <Ph>{contact.email}</Ph>
            </li>
            <li>
              WhatsApp: <Ph>{contact.whatsapp}</Ph>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="container">
          <p>© {new Date().getFullYear()} STTI Jakarta. Prototipe antarmuka untuk presentasi.</p>
          <p>Teks bertanda [ ... ] adalah placeholder; informasi resmi belum dikonfirmasi.</p>
        </div>
      </div>
    </footer>
  )
}
