export const navLinks = [
  { to: '/profil', label: 'Tentang' },
  { to: '/program-studi', label: 'Program Studi' },
  { to: '/kehidupan-kampus', label: 'Kehidupan Kampus' },
  { to: '/pendaftaran', label: 'Pendaftaran' },
  { to: '/kontak', label: 'Kontak' },
]

export const institution = {
  shortName: 'STTI Jakarta',
  description:
    'Perguruan tinggi teologi yang mengintegrasikan pembelajaran akademik dengan pembentukan spiritualitas & karakter, mencetak tenaga pelayanan, pendidik, dan pemimpin Kristen.',
  vision:
    'Menjadi Sekolah Tinggi Teologi yang mengembangkan spiritualitas, penelitian teologi kontekstual dan memperlengkapi untuk pelayanan sosial masyarakat di tingkat nasional pada tahun 2035.',
  missions: [
    'Menyelenggarakan pengajaran yang berkualitas unggul untuk menghasilkan sumber daya manusia yang berspiritualitas, berkarakter, dan berilmu.',
    'Menyelenggarakan penelitian yang kreatif, inovatif, dan kolaboratif untuk pengembangan dan penerapan keilmuan yang bermanfaat bagi masyarakat.',
    'Mewujudkan pelayanan pengabdian kepada masyarakat dalam pengembangan keilmuan teologi yang kontekstual dan transformatif.',
  ],
}

// Nilai bertanda [ ... ] masih placeholder.
export const contact = {
  building: 'Ebenezer Building',
  address:
    'Jl. Setiabudi Selatan No.1, RT.5/RW.5, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920.',
  hours: '24 Jam',

  email: 'indonesiastt@gmail.com',
  emailUrl: 'mailto:indonesiastt@gmail.com',

  whatsapp: '+62 896-0202-5878',
  whatsappUrl: 'https://wa.me/6289602025878',

  instagram: '@sttijakarta',
  instagramUrl: 'https://www.instagram.com/sttijakarta/',
}

// Peta Google Maps: embed tanpa API key (query teks) dan tautan untuk membuka di aplikasi/situs Maps.
const mapQuery = 'Ebenezer Building, Jl. Setiabudi Selatan No.1, Karet, Setiabudi, Jakarta Selatan 12920'
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
export const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

// Tautan WhatsApp dengan pesan pembuka agar penanya langsung punya konteks.
export const whatsappChatUrl = `${contact.whatsappUrl}?text=${encodeURIComponent(
  'Halo STTI Jakarta, saya ingin bertanya tentang program studi dan pendaftaran mahasiswa baru.',
)}`

export const externalLink = { target: '_blank', rel: 'noopener noreferrer' }
