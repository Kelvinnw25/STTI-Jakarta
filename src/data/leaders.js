// Susunan kepemimpinan sesuai references/urutan.png. Foto: salinan ringan (480×600) dari public/assets/Leader.
const photo = (slug, name) => ({
  src: `/assets/leader-web/${slug}.jpg`,
  w: 480,
  h: 600,
  alt: `Potret ${name}`,
})

const person = (slug, name, role) => ({ id: slug, name, role, photo: photo(slug, name) })

// Tiap tingkat digambar satu baris dari atas ke bawah. `size` mengatur ukuran kartu.
export const leaderTiers = [
  {
    id: 'yayasan',
    size: 'xl',
    people: [person('widaja-sugiri', 'Dr. Widaja Sugiri', 'Ketua Pembina Yayasan')],
  },
  {
    id: 'pimpinan',
    size: 'lg',
    people: [
      person('bobby-putrawan-kurnia', 'Dr. Bobby Putrawan Kurnia', 'Ketua STTIJ'),
      person('imron-widjaja', 'Prof. Dr. Imron Widjaja', 'Ketua Senat'),
    ],
  },
  {
    id: 'wakil',
    size: 'md',
    people: [
      person('pratiwi-eunike', 'Dr. Pratiwi Eunike', 'Wakil Ketua 1'),
      person('wahyu-bintoro', 'Dr. Wahyu Bintoro', 'Wakil Ketua 2'),
      person('liantoro', 'Dr. Liantoro', 'Wakil Ketua 3'),
    ],
  },
  {
    id: 'prodi',
    size: 'md',
    people: [
      person('yuni-batubara', 'Yuni Batubara, M.Th', 'Ka. Prodi S1 Teologi'),
      person('robby-robert-repi', 'Dr. Robby Robert Repi, M.Th', 'Ka. Prodi S2 Teologi'),
      person('oey-natanael-winanto', 'Dr. Oey Natanael Winanto, M.Th', 'Ka. Prodi S3 Teologi'),
    ],
  },
]
