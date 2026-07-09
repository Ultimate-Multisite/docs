---
title: Pakakas jeung Konfigurasi
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Pakakas jeung Konfigurasi

Theme Builder ngagunakeun sakumpulan pakakas pikeun nganalisis, ngarancang, jeung ngawangun situs WordPress anjeun. Dina vérsi 1.16.0, **sd-ai-agent/site-scrape ayeuna jadi pakakas Tier 1**, ngajadikeun éta sadia sacara standar dina Theme Builder. Superdav AI Agent v1.18.0 ogé ngenalkeun pakét pendamping Advanced anu disebarkeun misah pikeun alur gawé pamekar anu dipercaya; pakakas éta lain bagian tina pakét inti WordPress.org jeung kudu dipasang sarta diotorisasi sacara misah.

## Pakakas anu Sadia

### Pakakas Tier 1 (Sok Sadia)

Pakakas Tier 1 sadia sacara standar dina Theme Builder tanpa konfigurasi tambahan naon waé.

#### sd-ai-agent/site-scrape

**Tujuan:** Nganalisis ramatloka anu geus aya pikeun nyokot inspirasi desain, struktur eusi, jeung fungsionalitas.

**Kamampuhan:**

- **Analisis ramatloka** — scrape jeung analisis ramatloka pesaing atawa inspirasi
- **Ékstraksi desain** — ngaidentipikasi warna, font, jeung pola tata letak
- **Struktur eusi** — ngartos organisasi kaca jeung hirarki
- **Deteksi fitur** — ngaidentipikasi plugin jeung fungsionalitas
- **Analisis kinerja** — mariksa kagancangan kaca jeung optimasi
- **Analisis SEO** — marios meta tag jeung data terstruktur

**Pamakéan:**

```
Analisis desain example.com jeung gunakeun éta salaku inspirasi pikeun situs abdi.
```

**Anu Diekstrak:**

- Palét warna jeung pamakéan warna
- Tipografi (font jeung ukuran)
- Struktur tata letak jeung jarak
- Pola navigasi
- Organisasi eusi
- Pamakéan gambar jeung média
- Élemén interaktif
- Responsivitas mobile

**Watesan:**

- Teu bisa scrape situs anu ditangtayungan ku kecap akses
- Nurut kana robots.txt jeung kawijakan situs
- Bisa waé henteu néwak eusi dinamis
- Situs anu beurat ku JavaScript bisa boga analisis anu kawates
- Situs gedé bisa merlukeun waktu leuwih lila pikeun dianalisis

### Pakakas Tier 2 (Opsional)

Pakakas Tier 2 sadia nalika sacara eksplisit diaktipkeun dina setélan Theme Builder.

#### Advanced Analytics

Nyadiakeun métrik kinerja anu rinci:

- Waktu muat kaca
- Core Web Vitals
- Skor SEO
- Skor aksésibilitas
- Skor prakték pangalusna

#### Content Optimizer

Nganalisis jeung nyarankeun paningkatan pikeun:

- Kabacaan
- Optimasi SEO
- Pamakéan kecap konci
- Struktur eusi
- Panempatan ajakan tindakan

### Pakakas Tier 3 (Premium)

Pakakas Tier 3 merlukeun konfigurasi tambahan atawa fitur premium.

#### AI Content Generator

Ngahasilkeun eusi pikeun:

- Déskripsi produk
- Kaca jasa
- Tulisan blog
- Meta déskripsi
- Téks ajakan tindakan

#### Advanced Design Tools

Nyadiakeun kamampuhan desain tingkat lanjut:

- Pembuatan CSS kustom
- Pembuatan animasi
- Desain élemén interaktif
- Téori warna tingkat lanjut
- Optimasi tipografi

### Pakakas Pendamping Advanced (Pakét Misah)

Pakét pendamping Advanced disebarkeun misah ti rilis inti Superdav AI Agent. Ieu dimaksudkeun pikeun lingkungan pamekar jeung pamilik situs anu dipercaya, dimana administrator sacara eksplisit ngidinan agent pikeun ngagunakeun pakakas anu pangaruhna gedé.

Kamampuhan pendamping Advanced bisa ngawengku:

- **Pakakas filesystem** — mariksa jeung ngarobah file anu disatujuan dina lingkungan anu dipercaya
- **Pakakas database** — ngalakukeun query atawa ngapdet data situs nalika sacara eksplisit diotorisasi
- **Pakakas WP-CLI** — ngajalankeun paréntah pangropéa jeung pamariksaan WordPress
- **Pakakas dispatcher REST** — nelepon endpoint REST anu kadaptar ngaliwatan alur dispatch anu dikontrol
- **Pakakas pangwangun plugin** — nyieun scaffold jeung ngiterasi kode plugin
- **Pakakas snapshot Git** — nyieun snapshot saméméh operasi pamekar anu picilakaeun
- **Pakakas manajemén pamaké** — mantuan marios atawa nyaluyukeun rékaman pamaké lamun diidinan
- **Pakakas benchmark** — ngajalankeun benchmark kinerja atawa kamampuhan pikeun tinjauan pamekaran

Ulah ngadokuméntasikeun ieu salaku pakakas Theme Builder anu sadia sacara umum pikeun unggal pamasangan. Éta ngan sadia nalika pakét pendamping Advanced dipasang, diaktipkeun, jeung diwatesan ka administrator anu dipercaya.

## Konfigurasi Pakakas

### Ngaktipkeun Pakakas

Pikeun ngaktipkeun pakakas tambahan dina Theme Builder:

1. Napigasi ka **Gratis AI Agent → Settings**
2. Buka **Theme Builder → Tools**
3. Hurungkeun/pareuman pakakas sakumaha diperlukeun
4. Simpen setélan

### Idin Pakakas

Sababaraha pakakas merlukeun idin:

- **Scraping situs** — merlukeun aksés internét
- **Analytics** — merlukeun integrasi Google Analytics
- **Pembuatan eusi** — merlukeun API keys
- **Fitur tingkat lanjut** — bisa merlukeun subscription premium
- **Pakakas pendamping Advanced** — merlukeun pakét Advanced anu disebarkeun misah jeung kapercayaan administrator sacara eksplisit

### API Keys jeung Kredénsial

Konpigurasikeun API keys pikeun pakakas anu merlukeunana:

1. Buka **Gratis AI Agent → Settings → API Keys**
2. Asupkeun kredénsial pikeun unggal pakakas
3. Uji sambungan
4. Simpen sacara aman

### Masang Pakét Pendamping Advanced

Pakét pendamping Advanced dirilis misah ti ZIP inti WordPress.org. Pasang éta ngan ti kanal distribusi proyék resmi pikeun rilisna, tuluy watesan aksés ka administrator anu dipercaya. Tinjau gerbang persetujuan manusa jeung paripolah snapshot git saméméh ngaktipkeun pakakas filesystem, database, WP-CLI, dispatcher REST, pangwangun plugin, manajemén pamaké, atawa benchmark dina situs produksi.

## Ngagunakeun sd-ai-agent/site-scrape

### Pamakéan Dasar

Ménta Theme Builder pikeun nganalisis ramatloka:

```
Analisis desain situs pesaing abdi di competitor.com
jeung sarankeun paningkatan desain pikeun situs abdi.
```

### Analisis Husus

Ménta rupa-rupa analisis husus:

```
Ékstrak palét warna ti example.com jeung gunakeun éta salaku inspirasi.
```

```
Analisis struktur navigasi example.com jeung terapkeun organisasi
anu sarupa ka situs abdi.
```

```
Pariksa responsivitas mobile example.com jeung pastikeun situs abdi
sarua responsifna.
```

### Analisis Babandingan

Bandingkeun sababaraha situs:

```
Bandingkeun desain site1.com jeung site2.com sarta jieun desain
anu ngahijikeun élemén pangalusna tina duanana.
```

## Watesan jeung Pertimbangan Pakakas

### Pangwatesan Laju

- Scraping diwatesan lajuna pikeun nyegah server kaleuleuwihi beban
- Sababaraha pamundut ka site anu sarua bisa diwatesan lajuna
- Site gedé bisa merlukeun waktu leuwih lila pikeun dianalisis

### Akurasi Eusi

- Eusi dinamis bisa waé henteu kacangkem sacara lengkep
- Eusi anu dirender ku JavaScript bisa henteu lengkep
- Data real-time bisa waé henteu katémbong
- Sababaraha eusi bisa aya di balik paywall

### Pertimbangan Hukum jeung Étika

- Hormati robots.txt jeung kawijakan site
- Ulah scrape eusi anu boga hak cipta pikeun diréproduksi
- Paké analisis pikeun inspirasi, lain pikeun nyalin
- Pastikeun anjeun boga hak pikeun ngagunakeun eusi anu diekstrak
- Turutan terms of service tina site anu dianalisis

### Dampak Kinerja

- Scraping site gedé bisa merlukeun waktu
- Sababaraha scrape sakaligus bisa leuwih lalaunan
- Konektipitas jaringan mangaruhan kagancangan
- Dataset gedé bisa merlukeun pamrosésan leuwih loba

## Prakték Pangalusna

### Ngagunakeun Analisis Site

1. **Analisis sababaraha site** — kumpulkeun inspirasi tina sababaraha sumber
2. **Fokus kana struktur** — diajar pola tata letak jeung organisasi
3. **Ekstrak warna** — paké palét warna minangka titik awal
4. **Talungtik tipografi** — idéntifikasi kombinasi font anu anjeun resep
5. **Tinjau navigasi** — pahami organisasi menu

### Scraping Étis

1. **Hormati robots.txt** — turutan pituduh site
2. **Ulah nyalin eusi** — paké analisis pikeun inspirasi wungkul
3. **Pastikeun hak** — pastikeun anjeun bisa ngagunakeun eusi anu diekstrak
4. **Sebatkeun sumber** — pasihan kredit ka sumber inspirasi
5. **Turutan terms** — patuh kana terms of service site

### Ngamaksimalkeun Éféktivitas Alat

1. **Jelaskeun sacara spésifik** — pénta jinis analisis anu spésifik
2. **Pasihan kontéks** — terangkeun tujuan site anjeun
3. **Tetepkeun harepan** — jelaskeun tujuan desain anjeun
4. **Iterasi** — sampurnakeun dumasar kana hasil
5. **Gabungkeun alat** — paké sababaraha alat pikeun analisis anu komprehensif

## Ngalereskeun Masalah

### Site Teu Bisa di-Scrape

- Pariksa naha site bisa diaksés sacara umum
- Pastikeun robots.txt ngidinan scraping
- Cobaan site anu béda
- Pariksa sambungan internét
- Hubungi dukungan lamun masalah tetep aya

### Analisis Teu Lengkep

- Site bisa boga eusi dinamis
- JavaScript bisa waé henteu dirender sacara lengkep
- Site gedé bisa timeout
- Cobaan analisis kaca anu spésifik gantina
- Pénta jinis analisis anu spésifik

### Kinerja Lalaunan

- Site gedé merlukeun waktu leuwih lila pikeun dianalisis
- Sababaraha scrape sakaligus leuwih lalaunan
- Konektipitas jaringan mangaruhan kagancangan
- Cobaan dina jam henteu rame
- Analisis bagian anu leuwih leutik heula

## Dokuméntasi Patali

- [Wawancara Discovery](./discovery-interview.md) — kumpulkeun inpormasi desain
- [Arah Desain](./design-direction.md) — sampurnakeun desain anjeun
- [Menu Hospitality](./hospitality-menus.md) — jieun kaca menu
