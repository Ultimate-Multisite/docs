---
title: Menu Pangalayanan Tamu
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Ménu Hospitality

Fitur **Hospitality Menus** ngamungkinkeun Theme Builder ngahasilkeun jeung nyelapkeun kaca ménu kadaharan jeung inuman anu terstruktur langsung kana situs WordPress anjeun.

## Ringkesan

Theme Builder ayeuna bisa nyieun kaca ménu profésional jeung terstruktur pikeun usaha hospitality kaasup réstoran, kafe, bar, jeung jasa katering. Ménu ieu sapinuhna ngahiji kana desain situs anjeun sarta bisa gampang diropéa jeung dikokolakeun.

## Jinis Hospitality anu Dirojong

- **Réstoran** — ménu tuang layanan lengkep
- **Kafe** — ménu kopi jeung kadaharan hampang
- **Bar jeung Lounge** — ménu inuman jeung appetizer
- **Bakery** — ménu pastry jeung roti
- **Jasa Katering** — pilihan ménu acara
- **Food Truck** — ménu layanan kadaharan mobil
- **Brewery jeung Winery** — ménu inuman kalayan pedaran

## Struktur Ménu

### Kategori Ménu

Ménu diatur kana kategori:

- **Appetizer** — panganteur jeung piring leutik
- **Entree** — hidangan utama
- **Sampingan** — panglengkep jeung sayuran
- **Dessert** — olahan amis
- **Inuman** — inuman (ngandung alkohol jeung henteu ngandung alkohol)
- **Spésial** — spésial sapopoé atawa musiman

### Format Item Ménu

Unggal item ménu ngawengku:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Widang Item

| Widang | Tipe | Pedaran |
|-------|------|-------------|
| `name` | string | Ngaran hidangan atawa inuman |
| `description` | string | Pedaran rinci ngeunaan item |
| `price` | string | Harga (diformat kalayan mata uang) |
| `dietary_info` | array | Atribut dietary (Vegan, Gluten-Free, jsb.) |
| `allergens` | array | Allergén umum (kacang, kerang, jsb.) |
| `availability` | string | Iraha sayaga (sapopoé, musiman, jsb.) |

## Nyieun Ménu Hospitality

### Léngkah 1: Nyayagikeun Inpormasi Ménu

Béjaan Theme Builder ngeunaan ménu anjeun:

```
Jieun ménu réstoran pikeun réstoran Italia kuring kalayan appetizer,
hidangan pasta, hidangan utama, jeung dessert. Lebetkeun harga jeung pedaran.
```

### Léngkah 2: Theme Builder Ngahasilkeun Ménu

Theme Builder:

1. Nyieun kaca ménu terstruktur
2. Ngadesain sangkan cocog jeung theme situs anjeun
3. Ngatur item kana kategori
4. Mormat harga jeung pedaran
5. Nambihan inpormasi dietary jeung allergén

### Léngkah 3: Tinjau jeung Saluyukeun

Anjeun bisa:

1. Ngédit item ménu jeung harga
2. Nambihan atawa mupus kategori
3. Nyusun deui item dina kategori
4. Ngapdet pedaran jeung info dietary
5. Nyaluyukeun gaya jeung tata perenah

## Pilihan Tampilan Ménu

### Kaca Ménu Lengkep

Kaca husus anu nembongkeun ménu lengkep anjeun:

- Diatur dumasar kategori
- Bisa dipaluruh jeung disaring
- Tata perenah ramah-citak
- Desain responsif-mobile

### Widget Ménu

Selapkeun bagian ménu dina kaca séjén:

- Item unggulan dina homepage
- Spésial sapopoé dina sidebar
- Ménu inuman dina kaca bar
- Pintonan dessert dina footer

### PDF Ménu

Hasilkeun ménu PDF anu bisa diundeur:

- Format profésional
- Kualitas siap citak
- Ngawengku gambar jeung pedaran
- Gampang dibagikeun jeung dikirim ku surel

## Inpormasi Dietary jeung Allergén

### Atribut Dietary

Tandaan item kalayan inpormasi dietary:

- **Vegan** — henteu aya produk sato
- **Vegetarian** — henteu aya daging
- **Gluten-Free** — aman pikeun panyakit celiac
- **Dairy-Free** — henteu aya produk susu
- **Nut-Free** — henteu aya kacang tangkal atawa kacang taneuh
- **Low-Carb** — karbohidrat dikurangan
- **High-Protein** — beunghar protéin

### Perhatosan Allergén

Lebetkeun allergén umum:

- **Kacang** — kacang tangkal jeung kacang taneuh
- **Kerang** — crustacea jeung molluska
- **Lauk** — sadaya spésiés lauk
- **Susu** — susu jeung produk susu
- **Endog** — endog hayam
- **Kécap** — produk kécap
- **Gluten** — gandum jeung séréal anu ngandung gluten
- **Wijen** — siki jeung minyak wijen

## Pangokolaan Ménu

### Ngapdet Harga

Gampang ngapdet harga ménu:

1. Buka kaca ménu
2. Klik "Édit Ménu"
3. Apdet harga pikeun item
4. Simpen parobahan
5. Parobahan langsung némbongan dina situs anjeun

### Nambihan Item Musiman

Jieun variasi ménu musiman:

1. Jieun vérsi ménu anyar
2. Tambahkeun item musiman
3. Tandaan item salaku "Musiman"
4. Jadwalkeun tanggal kasadiaan
5. Sacara otomatis tampilkeun salila usum

### Ngatur Spésial

Tampilkeun spésial sapopoé atawa mingguan:

1. Jieun kategori "Spésial"
2. Tambahkeun item kalayan tanggal kasadiaan
3. Sorot spésial dina homepage
4. Apdet sapopoé atawa mingguan
5. Arsipkeun spésial lami

## Integrasi jeung Theme Builder

Nalika ngagunakeun Theme Builder pikeun situs hospitality:

1. **Deteksi ménu otomatis** — ngaidentipikasi lamun anjeun usaha kadaharan/inuman
2. **Nyieun kaca ménu** — ngahasilkeun kaca ménu profésional
3. **Panyaluyuan desain** — ménu cocog jeung theme situs anjeun
4. **Optimasi mobile** — ménu tampil éndah dina telepon
5. **Optimasi SEO** — ménu ramah mesin paluruh

## Prakték Pangsaéna

### Desain Ménu

- **Organisasi écés** — struktur kategori anu logis
- **Pedaran gampang dibaca** — ngahudang napsu jeung informatif
- **Harga konsisten** — mata uang jeung format écés
- **Poto profésional** — gambar kadaharan kualitas luhur
- **Rohangan kosong** — ulah ngajadikeun kaca teuing pinuh

### Eusi

- **Pedaran akurat** — jelaskeun item sacara akurat
- **Sorot spésial** — jadikeun spésial katingali menonjol
- **Lebetkeun allergén** — sok daptarkeun allergén
- **Apdet rutin** — jaga harga jeung item tetep panganyarna
- **Paké basa ngahudang napsu** — jieun item kadéngé ngeunah

### Aksesibilitas

- **Font gampang dibaca** — paké typeface anu écés jeung kabaca
- **Kontras cukup** — pastikeun téks kabaca
- **Label dietary** — tandaan pilihan dietary sacara écés
- **Perhatosan allergén** — tampilkeun allergén sacara nonjol
- **Ramah-mobile** — uji dina sadaya alat

## Conto

### Struktur Ménu Réstoran

```
Sangu Bubuka
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salad Caprese

Kadaharan Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Kadaharan Utama
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Pangamis
├── Tiramisu
├── Panna Cotta
└── Pilihan Gelato
```

### Struktur Menu Kafé

```
Kopi
├── Espresso
├── Cappuccino
└── Latte

Pastry
├── Croissant
├── Muffin
└── Scone

Sandwich
├── Panini Caprese
├── Club Kalkun Haseup
└── Wrap Vegetarian
```

## Fitur Patali

- [Jieun Menu](../abilities/create-menu.md) — jieun menu navigasi
- [Arah Desain](./design-direction.md) — saluyukeun desain situs anjeun
- [Wawancara Panalungtikan](./discovery-interview.md) — rencanakeun struktur situs anjeun
