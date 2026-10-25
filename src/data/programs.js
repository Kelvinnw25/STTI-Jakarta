import { images } from './images'

// Sumber data: SK Ketua STT Indonesia Jakarta No. 181/BK/KEU/STTI/VII/2025 (7 Juli 2025) dan
// halaman "Persyaratan Pendaftaran" (references/info). Ubah angka/teks di sini, bukan di komponen.

export const rupiah = (n) => 'Rp ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export const academicYear = '2025/2026'

export const feeDecree = {
  number: '181/BK/KEU/STTI/VII/2025',
  date: '7 Juli 2025',
}

export const bankAccounts = {
  registration: { bank: 'Bank Panin', number: '1272025673', holder: 'Yayasan Pendidikan Indonesia Jakarta' },
  tuition: { bank: 'Bank Mandiri', number: '1150000992299', holder: 'Yayasan Bethel Bina Nusantara' },
}

export const recommendationTemplateUrl = 'https://bit.ly/3WhQAC2'
export const s1FormDocUrl = 'https://bit.ly/46hQVsZ'

const COMMON_DOCS = [
  'Scan warna PDF KTP.',
  'Scan warna PDF KK.',
  'Scan warna foto PDF 3×4 cm, background merah (pakaian resmi).',
]
const FORM_STEP = 'Mengisi formulir pendaftaran dan melengkapi persyaratan administrasi lainnya.'
const POSTGRAD_DOCS = [
  'Scan warna PDF TOEFL bahasa Inggris (skor minimal setara ITP TOEFL 400; iBT 30).',
  'Surat keterangan rekomendasi dari pimpinan/dosen/pendeta (unduh templat pada tautan di bawah).',
]

export const jenjang = [
  {
    id: 's1',
    code: 'S1',
    name: 'Sarjana',
    icon: 'book',
    image: images.study1,
    developmentFee: 1000000,
    programs: [
      {
        id: 's1-teologi',
        name: 'Teologi',
        degree: 'S.Th.',
        registrationFee: 500000,
        tuition: 20000000,
        formUrl: 'https://forms.gle/ui83qTHbF6szbC627',
      },
      {
        id: 's1-pak',
        name: 'Pendidikan Agama Kristen',
        degree: 'S.Pd.',
        registrationFee: 500000,
        tuition: 20000000,
        formUrl: 'https://forms.gle/m4Ag7U7VnKegRWhw8',
      },
    ],
    documents: [
      'Scan warna PDF ijazah dan nilai sekolah menengah atas atau yang sederajat.',
      'Scan warna PDF akta baptisan dewasa atau sidi.',
      ...COMMON_DOCS,
      'Scan warna PDF surat keterangan rekomendasi dari gereja lokal atau sinode (unduh templat pada tautan di bawah).',
      'Scan warna PDF surat keterangan sehat dari dokter.',
    ],
    steps: [FORM_STEP],
    selection: ['Lulus ujian saringan masuk (pengetahuan Alkitab, bahasa Inggris, dan psikotes) dan wawancara.'],
  },
  {
    id: 's2',
    code: 'S2',
    name: 'Magister',
    icon: 'cap',
    image: images.study5,
    developmentFee: 2000000,
    programs: [
      {
        id: 's2-teologi',
        name: 'Teologi',
        registrationFee: 750000,
        tuition: 23000000,
        formUrl: 'https://forms.gle/XvRGup8Rso3uNnS7A',
      },
      {
        id: 's2-pak',
        name: 'Pendidikan Agama Kristen',
        registrationFee: 750000,
        tuition: 23000000,
        formUrl: 'https://forms.gle/1T4qQyAo7c24NdYs9',
      },
    ],
    documents: [
      'Scan warna PDF ijazah S1 dan transkrip nilai dari tempat pendidikan sebelumnya dengan IPK minimal 2,6.',
      ...COMMON_DOCS,
      ...POSTGRAD_DOCS,
    ],
    steps: [FORM_STEP, 'Menyerahkan proposal penelitian tesis.'],
    selection: [],
  },
  {
    id: 's3',
    code: 'S3',
    name: 'Doktor',
    icon: 'users',
    image: images.study6,
    developmentFee: 3000000,
    programs: [
      {
        id: 's3-teologi',
        name: 'Teologi',
        registrationFee: 1500000,
        tuition: 57000000,
        formUrl: 'https://forms.gle/61KCqtKHhNH4N26UA',
      },
    ],
    documents: [
      'Scan warna PDF ijazah S2 dan transkrip nilai dari tempat pendidikan sebelumnya dengan IPK minimal 3,00.',
      ...COMMON_DOCS,
      ...POSTGRAD_DOCS,
    ],
    steps: [FORM_STEP, 'Menyerahkan proposal penelitian disertasi.'],
    selection: [],
  },
]

// Pendaftaran mahasiswa pindahan / alih jenjang (semua program studi).
export const transfer = {
  documents: [
    'Scan warna PDF transkrip nilai asli.',
    'Scan warna PDF ijazah asli.',
    'Scan warna PDF surat pindah asli dari perguruan tinggi asal (bagi mahasiswa pindahan yang belum lulus).',
    'Scan warna PDF surat pernyataan telah berhenti di atas meterai dari perguruan tinggi asal.',
    'Scan warna PDF bukti pembayaran formulir pendaftaran untuk program studi yang diambil.',
    'Scan warna foto PDF 3×4 cm, background merah (pakaian resmi).',
  ],
}

export const feeNotes = {
  included: [
    'Biaya pendaftaran sudah termasuk biaya ujian saringan masuk dan biaya jas almamater.',
    'Biaya kuliah sudah termasuk biaya SKS, biaya seminar, dan biaya ujian akhir.',
    'Biaya yang tercantum belum termasuk biaya wisuda.',
  ],
  scholarships: [
    'Beasiswa pendidikan dan asrama untuk program studi S.Th. atau S.Pd. reguler diperuntukkan bagi mahasiswa reguler yang lolos seleksi beasiswa studi dan asrama.',
    'Untuk beasiswa bagi mahasiswa Magister dan Doktoral, silakan bertemu dengan Wakil Ketua II STT Indonesia Jakarta untuk program beasiswa.',
    'Mahasiswa juga dapat mengajukan beasiswa dari Direktorat Bimas Kristen dan/atau institusi lainnya secara pribadi.',
  ],
  disclaimer: 'STTIJ berhak melakukan perubahan atas hal-hal di atas apabila diperlukan tanpa pemberitahuan terlebih dahulu.',
}

export const totalFee = (p) => p.registrationFee + p.tuition

// Daftar datar semua program studi (untuk pilihan di formulir).
export const programs = jenjang.flatMap((j) =>
  j.programs.map((p) => ({
    ...p,
    jenjangId: j.id,
    jenjangCode: j.code,
    label: `${j.code} ${p.name}`,
  })),
)

export const getJenjang = (id) => jenjang.find((j) => j.id === id) ?? jenjang[0]
