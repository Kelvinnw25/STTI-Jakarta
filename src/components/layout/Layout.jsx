import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const titles = {
  '/': 'Beranda',
  '/profil': 'Profil',
  '/program-studi': 'Program Studi',
  '/kehidupan-kampus': 'Kehidupan Kampus',
  '/pendaftaran': 'Pendaftaran',
  '/kontak': 'Kontak',
}

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Pindah halaman: kembali ke atas, kecuali menuju anchor (#...).
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
    const page = titles[pathname]
    document.title = page && pathname !== '/' ? `${page} | STTI Jakarta` : 'STTI Jakarta'
  }, [pathname, hash])

  return (
    <>
      <a href="#main" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
