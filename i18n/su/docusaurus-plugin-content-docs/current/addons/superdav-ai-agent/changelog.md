---
title: Catetan parobahan
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Catetan Parobahan {#changelog}

## 1.18.0 — Dirilis dina 2026-06-29 {#1180--released-on-2026-06-29}

### Anyar {#new}

- **Pakakas Google Calendar** — maca kalénder jeung kajadian anu geus dikonpigurasikeun pikeun otomatisasi anu sadar jadwal
- **Pemetaan kontak jeung pangrojong pamilon** — nyocogkeun pamilon kalénder jeung pamaké situs sarta kontak
- **Gerbang persetujuan manusa jeung rékaman panginget** — ngeureunkeun heula otomatisasi pikeun ditinjau sarta nyingkahan béwara dobel
- **Panyadia SMS TextBee** — ngirim béwara talatah téks anu geus dikonpigurasikeun ngaliwatan TextBee
- **Pakét pendamping maju** — nambahkeun pakakas sistem berkas pamekar dipercaya, basis data, WP-CLI, dispatcher REST, pangwangun plugin, snapshot git, pangelolaan pamaké, jeung benchmark anu disebarkeun misah ti wangunan WordPress.org

### Ditingkatkeun {#improved}

- **Panyetelan layanan Superdav anu dikokolakeun** — nambahkeun titik tungtung layanan hosted jeung provisioning sambungan otomatis pikeun situs anu dirojong
- **Pakét rilis** — ngawangun ZIP inti jeung Advanced anu misah, medalkeun duanana di GitHub, sarta ngan ngirim pakét inti ka WordPress.org

### Dibereskeun {#fixed}

- **Kaandalan pamundut AI** — ningkatkeun pamilihan modél, wates waktu pamundut, modél panyetelan standar, pangolahan téks penalaran, jeung pituduh nyobian deui pikeun panggero pakakas anu teu sah
- **Panguatan kalénder jeung panginget** — nguatkeun token Google Calendar jeung deduplikasi panginget
- **Onboarding jeung neruskeun persetujuan** — ngalereskeun peluncuran onboarding frontend jeung neruskeun kamampuhan anu geus dikonfirmasi
- **Masalah tinjauan pakét WordPress.org** — ngaréngsékeun eupan balik tinjauan pakét pikeun rilis inti

## 1.16.0 — Dirilis dina 2026-05-20 {#1160--released-on-2026-05-20}

### Anyar {#new-1}

- **Kamampuhan ngahasilkeun Logo SVG** — Theme Builder ayeuna bisa ngahasilkeun jeung nyelapkeun SVG logo kustom kalayan sanitasi anu aman namespace
- **Unggah poto dina wawancara panalungtikan** — wawancara panalungtikan Theme Builder ayeuna ngawengku léngkah unggah poto pikeun kontéks desain anu leuwih beunghar
- **Kamampuhan validasi kontras palét** — mariksa pasangan warna pikeun kasaluyuan WCAG saméméh diterapkeun kana téma
- **Ménu hospitality** — Theme Builder ayeuna bisa ngahasilkeun kaca ménu kadaharan jeung inuman anu terstruktur pikeun usaha hospitality
- **Rendering pratinjau desktop jeung mobile** — pratinjau desain anjeun dina alat desktop jeung mobile salila milih arah desain
- **Paraméter labél navigasi** — kamampuhan Create Menu ayeuna ngarojong `navigation_label` anu béda jeung judul kaca
- **Kasadiaan pakakas Tier 1** — sd-ai-agent/site-scrape ayeuna jadi pakakas Tier 1 anu sadia sacara standar dina Theme Builder

### Dibereskeun {#fixed-1}

- **Cache AI Client** — ayeuna dirojong ku transients pikeun persistensi lintas-pamundut, nyegah leungitna data dina tugas agent anu jalan lila
- **Tumbu aksi baris plugin** — dibenerkeun jeung diganti ngaranna sangkan leuwih écés

## 1.10.0 — Dirilis dina 2026-05-05 {#1100--released-on-2026-05-05}

### Anyar {#new-2}

- **Pilarian internét Tavily** — nambahkeun Tavily salaku panyadia pilarian pikeun hasil pilarian internét anu leuwih beunghar bareng jeung Brave Search
- **Kaahlian bawaan anu sadar téma** — pituduh kaahlian Block Themes, Classic Themes, Kadence Blocks, jeung Kadence Theme ayeuna kaasup jeung plugin
- **Kamampuhan formulir kontak pangwangun situs** — nambahkeun formulir kontak ka kaca mana waé langsung tina antarmuka chat

### Ditingkatkeun {#improved-1}

- **Integrasi WooCommerce diréstrukturisasi** — ayeuna maké API WooCommerce asli pikeun kaandalan jeung kasaluyuan anu leuwih alus
- **Daptar panyadia nyegerkeun otomatis** — nalika plugin mana waé diaktipkeun atawa dinonaktipkeun

### Dibereskeun {#fixed-2}

- **Kamampuhan navigate-to** — ngalereskeun loop muat ulang tanpa wates dina sababaraha kaca admin
- **Kamampuhan list-posts** — ayeuna leres ngaréngsékeun ngaran kategori jeung tag kana slug
- **Paréntah WP-CLI** — mulangkeun alias namespace anu leungit sanggeus réstrukturisasi saméméhna
- **Otomatisasi kajadian** — nanganan kalawan mulus situs anu tabel otomatisasina can dijieun
- **Kamampuhan memory-save** — ayeuna maké awalan namespace anu bener dina pangwangun instruksi sistem
- **Hasil pakakas skalar** — ayeuna dibungkus kalayan bener saméméh dipulangkeun ka AI
- **Statistik pamakean** — ayeuna leres nanganan format konci kamampuhan warisan nalika ningkatkeun ti vérsi anu leuwih heubeul
