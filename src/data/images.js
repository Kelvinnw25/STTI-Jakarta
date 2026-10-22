// Semua gambar merujuk ke berkas asli di public/assets (tidak dipindah / diubah).
// Dimensi (w, h) dari hasil audit aset; dipakai agar browser dapat memesan ruang sebelum gambar termuat.
const img = (file, w, h, alt) => ({ src: encodeURI(`/assets/${file}`), w, h, alt })

export const images = {
  building: img('building.png', 231, 307, 'Gedung kampus berkaca biru dengan salib di bagian atas'),
  map: img('Peta Kota di Sekitar Ebenezer Building.png', 1672, 941, 'Peta kawasan sekitar Ebenezer Building di Jl. H.R. Rasuna Said, Jakarta'),

  chillingRoom: img('ChillingRoom.png', 481, 319, 'Ruang konsultasi dengan sofa, meja kerja, dan rak buku'),
  classRoom: img('ClassRoom.png', 484, 312, 'Ruang kelas dengan proyektor, papan tulis, dan meja tersusun rapi'),
  classroomComputer: img('classroomWithComputer.png', 377, 330, 'Ruang kelas komputer dengan deretan meja dan monitor'),
  commonRoom: img('libraryOrChillingRoom.png', 465, 318, 'Ruang bersama dengan meja besar, alat musik, dan rak buku'),
  chapel: img('placeOfWorship.png', 476, 316, 'Ruang ibadah dengan salib, mimbar, dan piano'),

  discussion1: img('discussion1.png', 242, 238, 'Mahasiswa belajar bersama sambil membuka buku'),
  discussion2: img('discussion2.png', 486, 479, 'Mahasiswa berdiskusi dengan wajah ceria di ruang kuliah'),
  discussion3: img('discussion3.png', 318, 225, 'Sekelompok mahasiswa berdiskusi santai di ruang bersama'),
  discussion4: img('discussion4.png', 284, 238, 'Mahasiswa tersenyum sambil belajar kelompok'),

  bibleCross: img('inFrontOfCrossandAltar(1).png', 231, 231, 'Alkitab terbuka di depan salib'),

  k1: img('kehidupanMahasiswa1.png', 567, 285, 'Mahasiswa berdiskusi di perpustakaan dengan laptop'),
  k2: img('kehidupanMahasiswa2.png', 565, 289, 'Jemaat dan mahasiswa mengikuti ibadah di depan salib'),
  k3: img('kehidupanMahasiswa3.png', 542, 292, 'Tiga mahasiswa berjalan sambil tertawa di selasar kampus'),
  k4: img('kehidupanMahasiswa4.png', 847, 267, 'Mahasiswa bercengkerama di tangga kampus'),
  k5: img('kehidupanMahasiswa5.png', 850, 262, 'Dosen mengajar di depan kelas yang penuh mahasiswa'),
  k6: img('kehidupanMahasiswa6.png', 641, 321, 'Kelompok mahasiswa belajar bersama dengan laptop'),
  k7: img('kehidupanMahasiswa7.png', 288, 200, 'Mahasiswa mengangkat tangan dalam doa dan penyembahan'),
  k8: img('kehidupanMahasiswa8.png', 323, 199, 'Dosen mendampingi dua mahasiswa belajar'),
  k9: img('kehidupanMahasiswa9.png', 638, 275, 'Mahasiswa tertawa bersama di tangga kampus'),
  k10: img('kehidupanMahasiswa10.png', 296, 407, 'Mahasiswi membaca buku di depan rak perpustakaan'),
  k11: img('kehidupanMahasiswa11.png', 321, 162, 'Mahasiswa memimpin pujian dengan gitar dan mikrofon'),
  k12: img('kehidupanMahasiswa12.png', 324, 219, 'Mahasiswa berbincang di acara pameran buku'),

  study1: img('studyVibe1.png', 222, 196, 'Alkitab terbuka di meja dengan salib di latar belakang'),
  study2: img('studyVibe2.png', 237, 230, 'Kalender meja dan tanaman di samping tumpukan buku'),
  study3: img('studyVibe3.png', 241, 231, 'Ruang perpustakaan dengan jendela besar dan rak buku'),
  study5: img('studyVibe5.png', 229, 197, 'Toga wisuda di atas tumpukan buku dengan salib di belakang'),
  study6: img('studyVibe6.png', 222, 201, 'Laptop dan tumpukan buku di perpustakaan'),

  worship1: img('worship1.png', 284, 219, 'Mahasiswa memimpin pujian bersama band'),

  // Potret orang: dipakai sebagai avatar pada kartu contoh (placeholder), tanpa nama.
  avatarMan1: img('manModel1.png', 239, 241, 'Potret mahasiswa berkacamata (contoh tampilan)'),
  avatarMan2: img('manModel2.png', 241, 240, 'Potret mahasiswa (contoh tampilan)'),
  avatarWoman: img('womanModel.png', 241, 243, 'Potret mahasiswi (contoh tampilan)'),
}
