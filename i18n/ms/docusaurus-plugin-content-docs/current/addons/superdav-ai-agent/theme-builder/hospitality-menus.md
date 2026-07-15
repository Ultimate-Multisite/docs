---
title: Menu Hospitaliti
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Hospitaliti

Ciri **Menu Hospitaliti** membolehkan Theme Builder menjana dan menyematkan halaman menu makanan dan minuman yang berstruktur terus ke laman web WordPress anda.

## Gambaran Keseluruhan {#overview}

Theme Builder kini boleh mencipta halaman menu yang profesional dan berstruktur untuk perniagaan hospitaliti, termasuk restoran, kafe, bar, dan perkhidmatan katering. Menu-menu ini bersepadu sepenuhnya dengan reka bentuk laman web anda dan boleh dikemas kini serta diuruskan dengan mudah.

## Jenis Hospitaliti yang Disokong {#supported-hospitality-types}

- **Restoran** — menu makan malam penuh perkhidmatan
- **Kafe** — menu kopi dan makanan ringan
- **Bar dan Lounge** — menu minuman dan pembuka selera
- **Kedai Roti** — menu pastri dan roti
- **Perkhidmatan Katering** — pilihan menu acara
- **Food Trucks** — menu perkhidmatan makanan mudah alih
- **Kedai Bir dan Ladang Wain** — menu minuman dengan penerangan

## Struktur Menu {#menu-structure}

### Kategori Menu {#menu-categories}

Menu disusun mengikut kategori:

- **Pembuka Selera** — hidangan pembuka dan hidangan kecil
- **Hidangan Utama** — hidangan utama
- **Sisi** — hidangan sampingan dan sayur-sayuran
- **Pencuci Mulut** — manisan
- **Minuman** — minuman (beralkohol dan tidak beralkohol)
- **Istimewa** — istimewa harian atau bermusim

### Format Item Menu {#menu-item-format}

Setiap item menu merangkumi:

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

#### Medan Item {#item-fields}

| Medan | Jenis | Penerangan |
|-------|------|-------------|
| `name` | string | Nama hidangan atau minuman |
| `description` | string | Penerangan terperinci item |
| `price` | string | Harga (diformatkan dengan mata wang) |
| `dietary_info` | array | Atribut diet (Vegan, Gluten-Free, dsb.) |
| `allergens` | array | Alergen biasa (Kacang, Shellfish, dsb.) |
| `availability` | string | Bila tersedia (Harian, Bermusim, dsb.) |

## Mencipta Menu Hospitaliti {#creating-hospitality-menus}

### Langkah 1: Berikan Maklumat Menu {#step-1-provide-menu-information}

Beritahu Theme Builder tentang menu anda:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Langkah 2: Theme Builder Menjana Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Mencipta halaman menu yang berstruktur
2. Mereka bentuknya agar sepadan dengan tema laman web anda
3. Menyusun item mengikut kategori
4. Memformatkan harga dan penerangan
5. Menambah maklumat diet dan alergen

### Langkah 3: Semak dan Sesuaikan {#step-3-review-and-customize}

Anda boleh:

1. Mengedit item menu dan harga
2. Menambah atau membuang kategori
3. Menyusun semula item dalam kategori
4. Mengemas kini penerangan dan maklumat diet
5. Melaraskan gaya dan susun atur

## Pilihan Paparan Menu {#menu-display-options}

### Halaman Menu Penuh {#full-menu-page}

Halaman khusus yang memaparkan menu lengkap anda:

- Disusun mengikut kategori
- Boleh dicari dan ditapis
- Susun atur mesra cetak
- Reka bentuk responsif mudah alih

### Widget Menu {#menu-widget}

Sematkan bahagian menu pada halaman lain:

- Item utama di laman utama
- Istimewa harian di sidebar
- Menu minuman di halaman bar
- Paparan pencuci mulut di footer

### Menu PDF {#menu-pdf}

Jana menu PDF yang boleh dimuat turun:

- Format profesional
- Kualiti sedia cetak
- Merangkumi imej dan penerangan
- Mudah dikongsi dan dihantar melalui e-mel

## Maklumat Diet dan Alergen {#dietary-and-allergen-information}

### Atribut Diet {#dietary-attributes}

Tandakan item dengan maklumat diet:

- **Vegan** — tiada produk haiwan
- **Vegetarian** — tiada daging
- **Gluten-Free** — selamat untuk penyakit celiak
- **Dairy-Free** — tiada produk tenusu
- **Nut-Free** — tiada kekacang pokok atau kacang tanah
- **Low-Carb** — karbohidrat yang dikurangkan
- **High-Protein** — kaya protein

### Amaran Alergen {#allergen-warnings}

Sertakan alergen biasa:

- **Kacang** — kekacang pokok dan kacang tanah
- **Shellfish** — krustasea dan moluska
- **Fish** — semua spesies ikan
- **Dairy** — susu dan produk tenusu
- **Eggs** — telur ayam
- **Soy** — produk soya
- **Gluten** — gandum dan bijirin mengandungi gluten
- **Sesame** — biji dan minyak biji sesam

## Pengurusan Menu {#menu-management}

### Mengemas Kini Harga {#updating-prices}

Kemas kini harga menu dengan mudah:

1. Navigasi ke halaman menu
2. Klik "Edit Menu"
3. Kemas kini harga untuk item
4. Simpan perubahan
5. Perubahan akan muncul serta-merta di laman web anda

### Menambah Item Bermusim {#adding-seasonal-items}

Cipta variasi menu bermusim:

1. Cipta versi menu baharu
2. Tambah item bermusim
3. Tandakan item sebagai "Seasonal"
4. Jadualkan tarikh ketersediaan
5. Dipaparkan secara automatik semasa musim

### Menguruskan Istimewa {#managing-specials}

Paparkan istimewa harian atau mingguan:

1. Cipta kategori "Specials"
2. Tambah item dengan tarikh ketersediaan
3. Sorot istimewa di laman utama
4. Kemas kini harian atau mingguan
5. Arkibkan istimewa lama

## Integrasi dengan Theme Builder {#integration-with-theme-builder}

Apabila menggunakan Theme Builder untuk laman hospitaliti:

1. **Pengesanan menu automatik** — mengenal pasti jika anda perniagaan makanan/minuman
2. **Penciptaan halaman menu** — menjana halaman menu profesional
3. **Pencocokan reka bentuk** — menu sepadan dengan tema laman web anda
4. **Pengoptimuman mudah alih** — menu dipaparkan dengan cantik pada telefon
5. **Pengoptimuman SEO** — menu mesra enjin carian

## Amalan Terbaik {#best-practices}

### Reka Bentuk Menu {#menu-design}

- **Organisasi yang jelas** — struktur kategori yang logik
- **Penerangan yang mudah dibaca** — menyelerakan dan informatif
- **Harga yang konsisten** — mata wang dan pemformatan yang jelas
- **Foto profesional** — imej makanan berkualiti tinggi
- **Ruang kosong** — jangan sesakkan halaman

### Kandungan {#content}

- **Penerangan yang tepat** — huraikan item dengan tepat
- **Sorot istimewa** — jadikan istimewa menonjol
- **Sertakan alergen** — sentiasa senaraikan alergen
- **Kemas kini secara berkala** — kekalkan harga dan item terkini
- **Gunakan bahasa yang menyelerakan** — buat item kedengaran lazat

### Kebolehcapaian {#accessibility}

- **Font yang mudah dibaca** — gunakan jenis fon yang jelas dan mudah dibaca
- **Kontras yang mencukupi** — pastikan teks mudah dibaca
- **Label diet** — tandakan pilihan diet dengan jelas
- **Amaran alergen** — paparkan alergen dengan jelas
- **Mesra mudah alih** — uji pada semua peranti

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

## Ciri Berkaitan {#related-features}

- [Create Menu](../abilities/create-menu.md) — cipta menu navigasi
- [Design Direction](./design-direction.md) — sesuaikan reka bentuk laman web anda
- [Discovery Interview](./discovery-interview.md) — rancang struktur laman web anda
