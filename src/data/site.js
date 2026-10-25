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

// Email, WhatsApp, dan Instagram sudah dikonfirmasi. Nilai bertanda [ ... ] masih placeholder.
export const contact = {
  location: 'Ebenezer Building, Jl. H.R. Rasuna Said, Jakarta',
  addressDetail: '[Alamat lengkap]',
  phone: '[Nomor Telepon]',
  hours: '[Jam Layanan]',

  email: 'indonesiastt@gmail.com',
  emailUrl: 'mailto:indonesiastt@gmail.com',

  whatsapp: '+62 813-2412-4391',
  whatsappUrl: 'https://wa.me/6281324124391',

  instagram: '@sttijakarta',
  instagramUrl: 'https://www.instagram.com/sttijakarta/',
}

// Tautan WhatsApp dengan pesan pembuka agar penanya langsung punya konteks.
export const whatsappChatUrl = `${contact.whatsappUrl}?text=${encodeURIComponent(
  'Halo STTI Jakarta, saya ingin bertanya tentang program studi dan pendaftaran mahasiswa baru.',
)}`

export const externalLink = { target: '_blank', rel: 'noopener noreferrer' }
