import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Beranda from './pages/Beranda'
import Profil from './pages/Profil'
import ProgramStudi from './pages/ProgramStudi'
import KehidupanKampus from './pages/KehidupanKampus'
import Pendaftaran from './pages/Pendaftaran'
import Kontak from './pages/Kontak'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Beranda />} />
        <Route path="profil" element={<Profil />} />
        <Route path="program-studi" element={<ProgramStudi />} />
        <Route path="kehidupan-kampus" element={<KehidupanKampus />} />
        <Route path="pendaftaran" element={<Pendaftaran />} />
        <Route path="kontak" element={<Kontak />} />
        <Route
          path="*"
          element={
            <div className="container not-found">
              <h1>Halaman tidak ditemukan</h1>
              <p>Alamat yang Anda buka tidak tersedia pada prototipe ini.</p>
            </div>
          }
        />
      </Route>
    </Routes>
  )
}
