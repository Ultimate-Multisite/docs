---
title: Menu Perhotelan
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Hospitality

Fitur **Menu Hospitality** ngidini Theme Builder nggawe lan masang kaca menu panganan lan ombenan sing terstruktur langsung menyang situs WordPress sampeyan.

## Ringkesan {#overview}

Theme Builder saiki bisa nggawe kaca menu profesional lan terstruktur kanggo bisnis hospitality kalebu restoran, kafe, bar, lan layanan katering. Menu iki wis kagabung kanthi lengkap menyang desain situs sampeyan lan bisa gampang dianyari lan dikelola.

## Jinis Hospitality sing Didhukung {#supported-hospitality-types}

- **Restoran** — menu dhahar layanan lengkap
- **Kafe** — menu kopi lan panganan entheng
- **Bar lan Lounge** — menu ombenan lan panganan pambuka
- **Toko Roti** — menu pastry lan roti
- **Layanan Katering** — pilihan menu acara
- **Food Truck** — menu layanan panganan seluler
- **Pabrik Bir lan Winery** — menu ombenan nganggo katrangan

## Struktur Menu {#menu-structure}

### Kategori Menu {#menu-categories}

Menu diatur dadi kategori:

- **Panganan Pambuka** — pambuka lan piring cilik
- **Hidangan Utama** — dhaharan utama
- **Panganan Pendamping** — pelengkap lan sayuran
- **Panganan Panutup** — panganan manis
- **Ombenan** — ombenan (alkohol lan non-alkohol)
- **Spesial** — spesial saben dina utawa musiman

### Format Item Menu {#menu-item-format}

Saben item menu kalebu:

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

#### Field Item {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Jeneng hidangan utawa ombenan |
| `description` | string | Katrangan rinci babagan item kasebut |
| `price` | string | Rega (diformat nganggo mata uang) |
| `dietary_info` | array | Atribut diet (Vegan, Gluten-Free, lsp.) |
| `allergens` | array | Alergen umum (kacang, kerang, lsp.) |
| `availability` | string | Nalika kasedhiya (saben dina, musiman, lsp.) |

## Nggawe Menu Hospitality {#creating-hospitality-menus}

### Langkah 1: Wenehake Informasi Menu {#step-1-provide-menu-information}

Kandhani Theme Builder babagan menu sampeyan:

```
Gawe menu restoran kanggo restoran Italia kula nganggo panganan pambuka,
hidangan pasta, hidangan utama, lan panganan panutup. Lebokake rega lan katrangan.
```

### Langkah 2: Theme Builder Ngasilake Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Nggawe kaca menu terstruktur
2. Ngrancang supaya cocog karo tema situs sampeyan
3. Ngatur item dadi kategori
4. Mformat rega lan katrangan
5. Nambah informasi diet lan alergen

### Langkah 3: Tinjau lan Kustomisasi {#step-3-review-and-customize}

Sampeyan bisa:

1. Ngowahi item menu lan rega
2. Nambah utawa mbusak kategori
3. Ngatur maneh urutan item ing kategori
4. Nganyari katrangan lan informasi diet
5. Nyetel gaya lan tata letak

## Pilihan Tampilan Menu {#menu-display-options}

### Kaca Menu Lengkap {#full-menu-page}

Kaca khusus sing nampilake menu lengkap sampeyan:

- Diatur miturut kategori
- Bisa digoleki lan disaring
- Tata letak ramah-cetak
- Desain responsif seluler

### Widget Menu {#menu-widget}

Pasang bagean menu ing kaca liya:

- Item unggulan ing homepage
- Spesial saben dina ing sidebar
- Menu ombenan ing kaca bar
- Tampilan panganan panutup ing footer

### PDF Menu {#menu-pdf}

Gawe menu PDF sing bisa diundhuh:

- Format profesional
- Kualitas siap-cetak
- Kalebu gambar lan katrangan
- Gampang dienggo nuduhake lan email

## Informasi Diet lan Alergen {#dietary-and-allergen-information}

### Atribut Diet {#dietary-attributes}

Tandhani item nganggo informasi diet:

- **Vegan** — ora ana produk kewan
- **Vegetarian** — ora ana daging
- **Gluten-Free** — aman kanggo penyakit celiac
- **Dairy-Free** — ora ana produk susu
- **Nut-Free** — ora ana kacang wit utawa kacang tanah
- **Low-Carb** — karbohidrat dikurangi
- **High-Protein** — sugih protein

### Peringatan Alergen {#allergen-warnings}

Lebokake alergen umum:

- **Kacang** — kacang wit lan kacang tanah
- **Kerang** — krustasea lan moluska
- **Iwak** — kabeh spesies iwak
- **Susu** — susu lan produk susu
- **Endhog** — endhog pitik
- **Soy** — produk soy
- **Gluten** — gandum lan biji-bijian sing ngemot gluten
- **Wijen** — wiji wijen lan lenga

## Manajemen Menu {#menu-management}

### Nganyari Rega {#updating-prices}

Gampang nganyari rega menu:

1. Navigasi menyang kaca menu
2. Klik "Edit Menu"
3. Nganyari rega kanggo item
4. Simpen owah-owahan
5. Owah-owahan langsung katon ing situs sampeyan

### Nambah Item Musiman {#adding-seasonal-items}

Gawe variasi menu musiman:

1. Gawe versi menu anyar
2. Tambah item musiman
3. Tandhani item minangka "Musiman"
4. Jadwalake tanggal kasedhiyan
5. Tampilake otomatis sajrone mangsa

### Ngatur Spesial {#managing-specials}

Tampilake spesial saben dina utawa mingguan:

1. Gawe kategori "Spesial"
2. Tambah item nganggo tanggal kasedhiyan
3. Sorot spesial ing homepage
4. Anyari saben dina utawa saben minggu
5. Arsipake spesial lawas

## Integrasi karo Theme Builder {#integration-with-theme-builder}

Nalika nggunakake Theme Builder kanggo situs hospitality:

1. **Deteksi menu otomatis** — ngenali yen sampeyan bisnis panganan/ombenan
2. **Pembuatan kaca menu** — ngasilake kaca menu profesional
3. **Pencocokan desain** — menu cocog karo tema situs sampeyan
4. **Optimasi seluler** — menu katon apik ing telpon
5. **Optimasi SEO** — menu ramah mesin telusur

## Praktik Paling Apik {#best-practices}

### Desain Menu {#menu-design}

- **Organisasi cetha** — struktur kategori sing logis
- **Katrangan gampang diwaca** — nggugah selera lan informatif
- **Rega konsisten** — mata uang lan format sing cetha
- **Foto profesional** — gambar panganan kualitas dhuwur
- **Ruang kosong** — aja nganti kaca kakehan isi

### Konten {#content}

- **Katrangan akurat** — jelasake item kanthi akurat
- **Sorot spesial** — gawe spesial katon menonjol
- **Lebokake alergen** — tansah dhaptarake alergen
- **Anyari rutin** — jaga rega lan item tetep anyar
- **Gunakake basa sing nggugah selera** — gawe item katon énak

### Aksesibilitas {#accessibility}

- **Font gampang diwaca** — gunakake typeface sing cetha lan gampang diwaca
- **Kontras cukup** — pasthekake teks bisa diwaca
- **Label diet** — tandhani pilihan diet kanthi cetha
- **Peringatan alergen** — tampilake alergen kanthi menonjol
- **Ramah seluler** — uji ing kabeh piranti

## Conto {#examples}

### Struktur Menu Restoran {#restaurant-menu-structure}

```
Pambuka
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salad Caprese

Pasugatan Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Pasugatan Utama
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Panganan Panutup
├── Tiramisu
├── Panna Cotta
└── Pilihan Gelato
```

### Struktur Menu Kafe {#cafe-menu-structure}

```
Kopi
├── Espresso
├── Cappuccino
└── Latte

Kue-kue
├── Croissants
├── Muffins
└── Scones

Sandwich
├── Panini Caprese
├── Club Kalkun Asap
└── Wrap Vegetarian
```

## Fitur Gegandhengan {#related-features}

- [Gawe Menu](../abilities/create-menu.md) — gawe menu navigasi
- [Arah Desain](./design-direction.md) — ngatur desain situsmu
- [Wawancara Panemuan](./discovery-interview.md) — ngrancang struktur situsmu
