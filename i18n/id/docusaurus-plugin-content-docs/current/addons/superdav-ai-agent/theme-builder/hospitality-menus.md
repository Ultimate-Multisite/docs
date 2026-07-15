---
title: Menu Perhotelan
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Hospitality

Fitur **Hospitality Menus** memungkinkan Theme Builder untuk membuat dan menyematkan halaman menu makanan dan minuman yang terstruktur langsung ke situs WordPress Anda.

## Gambaran Umum {#overview}

Theme Builder kini dapat membuat halaman menu profesional dan terstruktur untuk bisnis perhotelan, termasuk restoran, kafe, bar, dan layanan katering. Menu-menu ini terintegrasi sepenuhnya dengan desain situs Anda dan mudah diperbarui serta dikelola.

## Jenis Hospitality yang Didukung {#supported-hospitality-types}

- **Restoran** — menu makan lengkap
- **Kafe** — menu kopi dan makanan ringan
- **Bar dan Lounge** — menu minuman dan makanan pembuka
- **Toko Roti (Bakeries)** — menu kue dan roti
- **Layanan Katering** — pilihan menu acara
- **Food Truck** — menu layanan makanan keliling
- **Pabrik Bir dan Kebun Anggur (Breweries and Wineries)** — menu minuman dengan deskripsi

## Struktur Menu {#menu-structure}

### Kategori Menu {#menu-categories}

Menu diorganisasi ke dalam kategori:

- **Makanan Pembuka (Appetizers)** — hidangan pembuka dan piring kecil
- **Hidangan Utama (Entrees)** — menu utama
- **Pendamping (Sides)** — pelengkap dan sayuran
- **Makanan Penutup (Desserts)** — hidangan manis
- **Minuman (Beverages)** — minuman (beralkohol dan non-alkohol)
- **Spesial (Specials)** — menu spesial harian atau musiman

### Format Item Menu {#menu-item-format}

Setiap item menu mencakup:

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

#### Bidang Item {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nama hidangan atau minuman |
| `description` | string | Deskripsi detail item |
| `price` | string | Harga (diformat dengan mata uang) |
| `dietary_info` | array | Atribut diet (Vegan, Gluten-Free, dll.) |
| `allergens` | array | Alergen umum (Kacang, Kerang, dll.) |
| `availability` | string | Ketersediaan (Harian, Musiman, dll.) |

## Membuat Menu Hospitality {#creating-hospitality-menus}

### Langkah 1: Berikan Informasi Menu {#step-1-provide-menu-information}

Beritahu Theme Builder tentang menu Anda:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Langkah 2: Theme Builder Membuat Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Membuat halaman menu yang terstruktur
2. Mendesainnya agar sesuai dengan tema situs Anda
3. Mengorganisasi item ke dalam kategori
4. Memformat harga dan deskripsi
5. Menambahkan informasi diet dan alergen

### Langkah 3: Tinjau dan Kustomisasi {#step-3-review-and-customize}

Anda dapat:

1. Mengedit item menu dan harga
2. Menambah atau menghapus kategori
3. Mengatur ulang urutan item dalam kategori
4. Memperbarui deskripsi dan info diet
5. Menyesuaikan gaya dan tata letak

## Opsi Tampilan Menu {#menu-display-options}

### Halaman Menu Lengkap {#full-menu-page}

Halaman khusus yang menampilkan seluruh menu Anda:

- Diorganisasi berdasarkan kategori
- Dapat dicari dan difilter
- Tata letak yang ramah cetak
- Desain responsif untuk perangkat seluler

### Widget Menu {#menu-widget}

Sematkan bagian menu di halaman lain:

- Item unggulan di beranda
- Spesial harian di sidebar
- Menu minuman di halaman bar
- Pameran makanan penutup di footer

### Menu PDF {#menu-pdf}

Hasilkan menu PDF yang dapat diunduh:

- Pemformatan profesional
- Kualitas siap cetak
- Termasuk gambar dan deskripsi
- Mudah dibagikan dan dikirim melalui email

## Informasi Diet dan Alergen {#dietary-and-allergen-information}

### Atribut Diet {#dietary-attributes}

Tandai item dengan informasi diet:

- **Vegan** — tanpa produk hewani
- **Vegetarian** — tanpa daging
- **Gluten-Free** — aman untuk penyakit celiac
- **Dairy-Free** — tanpa produk susu
- **Nut-Free** — tanpa kacang pohon atau kacang tanah
- **Low-Carb** — karbohidrat berkurang
- **High-Protein** — kaya protein

### Peringatan Alergen {#allergen-warnings}

Sertakan alergen umum:

- **Kacang (Nuts)** — kacang pohon dan kacang tanah
- **Kerang (Shellfish)** — krustasea dan moluska
- **Ikan (Fish)** — semua jenis ikan
- **Susu (Dairy)** — susu dan produk susu
- **Telur (Eggs)** — telur ayam
- **Kedelai (Soy)** — produk kedelai
- **Gluten** — gandum dan biji-bijian yang mengandung gluten
- **Wijen (Sesame)** — biji wijen dan minyak

## Manajemen Menu {#menu-management}

### Memperbarui Harga {#updating-prices}

Perbarui harga menu dengan mudah:

1. Navigasi ke halaman menu
2. Klik "Edit Menu"
3. Perbarui harga untuk item
4. Simpan perubahan
5. Perubahan akan muncul segera di situs Anda

### Menambah Item Musiman {#adding-seasonal-items}

Buat variasi menu musiman:

1. Buat versi menu baru
2. Tambahkan item musiman
3. Tandai item sebagai "Musiman"
4. Jadwalkan tanggal ketersediaan
5. Otomatis ditampilkan selama musim

### Mengelola Spesial {#managing-specials}

Tampilkan spesial harian atau mingguan:

1. Buat kategori "Spesial"
2. Tambahkan item dengan tanggal ketersediaan
3. Sorot spesial di beranda
4. Perbarui harian atau mingguan
5. Arsipkan spesial lama

## Integrasi dengan Theme Builder {#integration-with-theme-builder}

Saat menggunakan Theme Builder untuk situs hospitality:

1. **Deteksi menu otomatis** — mendeteksi apakah Anda bisnis makanan/minuman
2. **Pembuatan halaman menu** — menghasilkan halaman menu profesional
3. **Pencocokan desain** — menu sesuai dengan tema situs Anda
4. **Optimasi seluler** — menu ditampilkan dengan indah di ponsel
5. **Optimasi SEO** — menu ramah mesin pencari

## Praktik Terbaik {#best-practices}

### Desain Menu {#menu-design}

- **Organisasi yang jelas** — struktur kategori yang logis
- **Deskripsi yang mudah dibaca** — menggugah selera dan informatif
- **Harga yang konsisten** — mata uang dan pemformatan yang jelas
- **Foto profesional** — gambar makanan berkualitas tinggi
- **Ruang kosong (Whitespace)** — jangan terlalu padat di halaman

### Konten {#content}

- **Deskripsi akurat** — jelaskan item secara akurat
- **Sorot spesial** — buat spesial menonjol
- **Sertakan alergen** — selalu cantumkan alergen
- **Perbarui secara teratur** — jaga harga dan item tetap terkini
- **Gunakan bahasa yang menggugah selera** — buat item terdengar lezat

### Aksesibilitas {#accessibility}

- **Font yang mudah dibaca** — gunakan jenis huruf yang jelas dan mudah dibaca
- **Kontras yang cukup** — pastikan teks mudah dibaca
- **Label diet** — tandai opsi diet dengan jelas
- **Peringatan alergen** — tampilkan alergen secara menonjol
- **Ramah seluler** — uji di semua perangkat

## Contoh {#examples}

### Struktur Menu Restoran {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Struktur Menu Kafe {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Fitur Terkait {#related-features}

- [Create Menu](../abilities/create-menu.md) — membuat menu navigasi
- [Design Direction](./design-direction.md) — menyesuaikan desain situs Anda
- [Discovery Interview](./discovery-interview.md) — merencanakan struktur situs Anda
