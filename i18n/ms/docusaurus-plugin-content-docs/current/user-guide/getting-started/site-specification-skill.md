---
title: Kemahiran Spesifikasi Tapak
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Kemahiran Spesifikasi Tapak

**Kemahiran Spesifikasi Tapak** adalah pendekatan berstruktur untuk merekodkan matlamat tapak, audiens, dan identiti jenama anda. Maklumat ini disimpan dalam memori **site_brief** anda, yang dirujuk oleh agen merentasi sesi untuk memberikan bantuan yang konsisten dan sedar konteks.

## Apakah Spesifikasi Tapak?

Spesifikasi Tapak adalah proses mendokumentasikan:

- **Tujuan tapak**: Apa yang dilakukan oleh tapak anda dan mengapa ia wujud
- **Audiens sasaran**: Siapa yang melayari tapak anda dan apa yang mereka perlukan
- **Identiti jenama**: Warna, nada, dan gaya visual anda
- **Matlamat perniagaan**: Bagaimana kejayaan kelihatan untuk tapak anda
- **Struktur kandungan**: Bagaimana tapak anda disusun

Spesifikasi ini menjadi **site_brief** anda, sebuah memori kekal yang digunakan oleh agen untuk memahami konteks tapak anda.

## Mengapa Menggunakan Spesifikasi Tapak?

### Konsistensi Merentasi Sesi

Tanpa site_brief, anda perlu menerangkan semula tujuan tapak anda setiap kali anda memulakan sesi baharu. Dengan adanya ia, agen serta-merta memahami:

- Matlamat dan audiens tapak anda
- Warna dan nada jenama anda
- Struktur kandungan anda
- Objektif perniagaan anda

### Cadangan yang Lebih Baik

Agen menggunakan site_brief anda untuk:

- Mencadangkan ciri-ciri yang selaras dengan tujuan tapak anda
- Mengesyorkan struktur kandungan yang sepadan dengan matlamat anda
- Mencadangkan reka bentuk yang konsisten dengan jenama anda
- Mengelakkan cadangan ciri yang tidak serasi

### Proses Orientasi yang Lebih Pantas

Agen baharu (atau agen dalam sesi baharu) boleh cepat memahami dengan membaca site_brief anda berbanding bertanya soalan penjelasan.

## Memulakan Spesifikasi Tapak

### Semasa Orientasi Theme Builder

Kemahiran Spesifikasi Tapak dimulakan secara automatik semasa aliran **Theme Builder onboarding**. Agen Setup Assistant akan mengajukan soalan dan membina site_brief anda.

### Permulaan Manual

Anda boleh memulakan Spesifikasi Tapak pada bila-bila masa:

```
"Mari kita definisikan spesifikasi tapak saya"
```

atau

```
"Bantu saya cipta site brief"
```

## Proses Spesifikasi Tapak

### Langkah 1: Tujuan Tapak

Agen akan bertanya:

```
Apakah tujuan utama tapak anda?
- Kedai e-dagang
- Blog atau tapak kandungan
- Portfolio atau pameran
- Aplikasi SaaS
- Komuniti atau forum
- Lain-lain: [huraikan]
```

Anda boleh memilih kategori atau menghuraikan tujuan anda sendiri.

### Langkah 2: Audiens Sasaran

```
Siapakah audiens utama anda?
- Pengguna / orang awam
- Profesional perniagaan
- Pembangun / pengguna teknikal
- Pelajar / pendidik
- Lain-lain: [huraikan]

Apakah keperluan utama mereka?
```

### Langkah 3: Identiti Jenama

```
Apakah warna jenama anda?
- Warna utama: [pemilih warna atau kod hex]
- Warna sekunder: [pemilih warna atau kod hex]
- Warna aksen: [pilihan]

Bagaimana anda akan huraikan nada jenama anda?
- Profesional / korporat
- Kreatif / artistik
- Riang / kasual
- Minimal / moden
- Hangat / mesra
```

### Langkah 4: Matlamat Perniagaan

```
Bagaimana rupa kejayaan untuk tapak anda?
- Menjana prospek
- Menjual produk
- Membina komuniti
- Berkongsi pengetahuan
- Menubuhkan autoriti
- Lain-lain: [huraikan]

Apakah metrik utama anda?
- Hasil jualan (Revenue)
- Penglibatan pengguna (User engagement)
- Jangkauan kandungan (Content reach)
- Penukaran (Conversions)
- Lain-lain
```

### Langkah 5: Struktur Kandungan

```
Bagaimana kandungan anda disusun?
- Rata (semua kandungan pada tahap yang sama)
- Berhierarki (kategori dan subkategori)
- Kronologi (gaya blog)
- Berasaskan produk (katalog)
- Lain-lain: [huraikan]

Apakah jenis kandungan yang anda gunakan?
- Pos blog
- Halaman produk
- Kajian kes
- Dokumentasi
- Video
- Lain-lain
```

## Memori site_brief Anda

Selepas melengkapkan Spesifikasi Tapak, maklumat anda disimpan sebagai **site_brief** dalam memori agen anda. Ini adalah rekod berstruktur yang mengandungi:

```json
{
  "site_purpose": "Kedai e-dagang untuk perhiasan buatan tangan",
  "target_audience": "Wanita berumur 25-45 tahun, berminat dalam fesyen lestari",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Hangat, artisanal, lestari",
  "business_goals": ["Menjana jualan", "Membina kesetiaan jenama"],
  "primary_metric": "Hasil jualan (Revenue)",
  "content_structure": "Katalog produk dengan blog",
  "content_types": ["Halaman produk", "Pos blog", "Kisah pelanggan"]
}
```

## Melihat dan Mengemas Kini site_brief Anda

### Lihat site_brief Anda

Tanya agen:

```
"Tunjukkan site brief saya"
```

atau

```
"Apa yang anda tahu tentang tapak saya?"
```

Agen akan memaparkan spesifikasi anda yang disimpan.

### Kemas Kini site_brief Anda

Jika tapak anda berkembang, anda boleh mengemas kininya:

```
"Kemas kini site brief saya: kami kini menyasarkan pelanggan B2B"
```

atau

```
"Segarkan spesifikasi tapak saya"
```

Ini akan menjalankan semula kemahiran Spesifikasi Tapak dengan maklumat sedia ada anda sebagai titik permulaan.

## Cara Agen Menggunakan site_brief

### Cadangan Reka Bentuk

Apabila anda meminta perubahan reka bentuk, agen merujuk site_brief anda:

```
Anda: "Reka bentuk semula halaman utama saya"
Agen: "Berdasarkan site brief anda, anda menyasarkan wanita berumur 25-45 tahun
dengan nada yang hangat dan artisanal. Saya akan mencipta reka bentuk yang menekankan
perhiasan buatan tangan dan nilai lestari anda."
```

### Cadangan Ciri-ciri

Agen mencadangkan ciri-ciri yang selaras dengan matlamat anda:

```
Anda: "Ciri-ciri apa yang patut saya tambah?"
Agen: "Untuk kedai e-dagang yang menumpukan pada kesetiaan pelanggan,
saya syorkan: program kesetiaan, ulasan pelanggan, surat berita e-mel,
dan cadangan produk."
```

### Struktur Kandungan

Agen mencadangkan organisasi kandungan berdasarkan struktur anda:

```
Anda: "Bagaimana saya patut susun atur blog saya?"
Agen: "Memandangkan anda menggunakan katalog produk dengan blog, saya cadangkan
menyusun pos mengikut kategori produk dan mencipta 'panduan gaya'
yang mempamerkan beberapa produk bersama-sama."
```

## Amalan Terbaik

### Bersikap Spesifik

Daripada "audiens umum," huraikan audiens sebenar anda:

- ✓ "Wanita berumur 25-45 tahun, berminat dalam fesyen lestari"
- ✗ "Semua orang"

### Kemas Kini Secara Berkala

Apabila tapak anda berkembang, kemas kini site_brief anda:

- Apabila anda beralih kepada audiens baharu
- Apabila anda menambah lini produk baharu
- Apabila identiti jenama anda berubah
- Apabila matlamat perniagaan anda berubah

### Gunakan Terminologi yang Konsisten

Gunakan istilah yang sama merentasi sesi:

- ✓ Sentiasa katakan "perhiasan lestari" (bukan "perhiasan mesra alam" dan "produk hijau")
- ✓ Rujuk audiens anda secara konsisten dengan cara yang sama

### Sertakan Konteks

Berikan latar belakang yang membantu agen memahami keputusan anda:

- "Kami menyasarkan profesional yang menghargai kualiti berbanding harga"
- "Audiens kami mahir teknologi dan mengharapkan reka bentuk moden"
- "Kami adalah syarikat permulaan yang menggunakan dana sendiri, jadi kami memerlukan penyelesaian yang kos efektif"

## Hubungan dengan Orientasi Theme Builder

Kemahiran Spesifikasi Tapak disepadukan ke dalam aliran **Theme Builder onboarding**. Apabila anda melengkapkan orientasi, site_brief anda akan dicipta secara automatik dengan maklumat yang anda berikan.

Anda juga boleh menjalankan Spesifikasi Tapak secara berasingan jika anda mahu:

- Menyempurnakan spesifikasi anda selepas persediaan awal
- Mengemas kini site brief anda apabila tapak anda berkembang
- Mencipta spesifikasi terperinci sebelum memulakan Theme Builder

## Penyelesaian Masalah

**site_brief saya tidak digunakan**
- Sahkan agen mempunyai akses kepada memori
- Minta agen untuk "ingat site brief saya"
- Semak bahawa memori diaktifkan dalam tetapan anda

**Saya mahu bermula semula dengan site_brief baharu**
- Minta agen: "Kosongkan site brief saya dan mulakan dari awal"
- Kemudian jalankan Spesifikasi Tapak sekali lagi

**Agen membuat cadangan yang tidak sepadan dengan site_brief saya**
- Minta agen untuk "semak site brief saya"
- Kemas kini site_brief anda jika ia lapuk
- Berikan konteks tambahan dalam permintaan anda

## Langkah Seterusnya

Selepas menentukan spesifikasi tapak anda:

1. **Gunakan Theme Builder**: Cipta tema tersuai berdasarkan site_brief anda
2. **Sempurnakan Reka Bentuk**: Gunakan kemahiran Design System Aesthetics untuk kerja reka bentuk terperinci
3. **Rancang Kandungan**: Minta agen untuk cadangan struktur kandungan
4. **Bina Ciri-ciri**: Minta ciri-ciri yang selaras dengan matlamat perniagaan anda
