import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
// Desain versi 2 yang sedang dicoba
import Beranda2 from './pages/Beranda2'
import Profil2 from './pages/Profil2'
import ProgramStudi2 from './pages/ProgramStudi2'
import KehidupanKampus2 from './pages/KehidupanKampus2'
import Pendaftaran2 from './pages/Pendaftaran2'
import Kontak2 from './pages/Kontak2'
// Desain sebelumnya (tetap disimpan, dibuka lewat alamat "-lama")
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
        <Route index element={<Beranda2 />} />
        <Route path="beranda-lama" element={<Beranda />} />
        <Route path="profil" element={<Profil2 />} />
        <Route path="profil-lama" element={<Profil />} />
        <Route path="program-studi" element={<ProgramStudi2 />} />
        <Route path="program-studi-lama" element={<ProgramStudi />} />
        <Route path="kehidupan-kampus" element={<KehidupanKampus2 />} />
        <Route path="kehidupan-kampus-lama" element={<KehidupanKampus />} />
        <Route path="pendaftaran" element={<Pendaftaran2 />} />
        <Route path="pendaftaran-lama" element={<Pendaftaran />} />
        <Route path="kontak" element={<Kontak2 />} />
        <Route path="kontak-lama" element={<Kontak />} />
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
