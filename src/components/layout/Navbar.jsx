import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/site'
import { images } from '../../data/images'
import Icon from '../ui/Icon'

export function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" aria-label="STTI Jakarta, ke Beranda" onClick={onClick}>
      <img className="logo__img" src={images.logoSm.src} width="44" height="44" alt="" />
      <span className="logo__text">STTI Jakarta</span>
    </Link>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  // Beranda memakai navbar oranye, halaman lain navy (sesuai referensi).
  const variant = pathname === '/' ? 'accent' : 'navy'

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header site-header--${variant}`}>
      <div className="container site-header__bar">
        <Logo />
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
          <span className="visually-hidden">{open ? 'Tutup menu' : 'Buka menu'}</span>
        </button>
        <nav id="primary-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          <ul role="list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
