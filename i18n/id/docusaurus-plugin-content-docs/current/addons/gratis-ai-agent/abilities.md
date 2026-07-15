---
title: Referensi Kemampuan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referensi Abilities

Abilities adalah aksi atomik yang dapat dipanggil oleh Gratis AI Agent pada instalasi WordPress Anda. Setiap ability adalah class PHP terdaftar yang mengekspos skema JSON — agent membaca skema ini saat runtime untuk memahami parameter apa yang diperlukan dan apa yang dikembalikan oleh ability tersebut.

Halaman ini mendokumentasikan semua abilities yang disertakan dengan Gratis AI Agent v1.9.0.

---

## Jenis Post Kustom {#custom-post-types}

Abilities ini mengelola jenis post kustom (CPT) yang didaftarkan melalui agent. Pendaftaran disimpan ke tabel opsi WordPress sehingga tetap bertahan setelah plugin dinonaktifkan dan diaktifkan kembali.

### `register_post_type` {#registerposttype}

Mendaftarkan jenis post kustom baru.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kunci jenis post (maks 20 karakter, tanpa huruf besar, tanpa spasi) |
| `singular_label` | string | Yes | Nama tunggal yang mudah dibaca manusia, mis. `Portfolio Item` |
| `plural_label` | string | Yes | Nama jamak yang mudah dibaca manusia, mis. `Portfolio Items` |
| `public` | boolean | No | Apakah jenis post dapat diakses publik. Default `true` |
| `supports` | array | No | Fitur yang didukung: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Apakah halaman arsip jenis post diaktifkan. Default `false` |
| `menu_icon` | string | No | Class Dashicons atau URL untuk ikon menu admin. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Slug URL untuk jenis post. Default ke `slug` |

**Contoh**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Mengembalikan** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Mengembalikan semua jenis post kustom yang didaftarkan oleh agent.

**Parameter** — tidak ada

**Mengembalikan**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

Membatalkan pendaftaran jenis post kustom yang sebelumnya didaftarkan oleh agent. Post yang sudah ada dari jenis tersebut tetap berada di database tetapi tidak lagi dapat diakses melalui jenis post tersebut.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kunci jenis post yang akan dihapus |

**Mengembalikan** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomi Kustom {#custom-taxonomies}

Abilities ini mengelola taksonomi kustom. Seperti CPT, pendaftaran taksonomi disimpan secara persisten.

### `register_taxonomy` {#registertaxonomy}

Mendaftarkan taksonomi kustom baru.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kunci taksonomi (maks 32 karakter) |
| `singular_label` | string | Yes | Nama tunggal yang mudah dibaca manusia, mis. `Project Category` |
| `plural_label` | string | Yes | Nama jamak yang mudah dibaca manusia, mis. `Project Categories` |
| `post_types` | array | Yes | Slug jenis post yang harus dilampiri taksonomi ini |
| `hierarchical` | boolean | No | `true` untuk gaya kategori, `false` untuk gaya tag. Default `true` |
| `public` | boolean | No | Apakah term dapat diakses publik. Default `true` |
| `rewrite_slug` | string | No | Slug URL untuk taksonomi. Default ke `slug` |

**Contoh**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Mengembalikan** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Mengembalikan semua taksonomi kustom yang didaftarkan oleh agent.

**Parameter** — tidak ada

**Mengembalikan**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

Membatalkan pendaftaran taksonomi kustom yang sebelumnya didaftarkan oleh agent.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kunci taksonomi yang akan dihapus |

**Mengembalikan** `{ "success": true, "slug": "project-category" }`

---

## Sistem Desain {#design-system}

Abilities sistem desain memodifikasi tampilan visual situs WordPress — dari CSS kustom hingga pola blok dan logo situs.

### `inject_custom_css` {#injectcustomcss}

Menambahkan CSS ke `<head>` situs melalui `wp_add_inline_style`. CSS disimpan dalam opsi `gratis_ai_agent_custom_css` dan di-dequeue dengan bersih saat ability direset.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS valid untuk disuntikkan |
| `label` | string | No | Label yang mudah dibaca manusia untuk blok CSS ini, digunakan dalam log debug. Default `"agent-injected"` |
| `replace` | boolean | No | Jika `true`, mengganti semua CSS yang sebelumnya disuntikkan. Default `false` (menambahkan) |

**Contoh**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Mengembalikan** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Mendaftarkan pola blok yang dapat digunakan kembali di pustaka pola WordPress.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pengidentifikasi pola, mis. `gratis/hero-dark` |
| `title` | string | Yes | Nama pola yang mudah dibaca manusia yang ditampilkan di editor |
| `content` | string | Yes | Markup blok terserialisasi (HTML) untuk pola |
| `categories` | array | No | Slug kategori pola, mis. `["featured", "hero"]` |
| `description` | string | No | Deskripsi singkat yang ditampilkan di pemilih pola |
| `keywords` | array | No | Kata kunci pencarian |

**Mengembalikan** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Mencantumkan semua pola blok yang didaftarkan oleh agent.

**Parameter** — tidak ada

**Mengembalikan**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

Mengatur logo situs WordPress ke ID lampiran tertentu atau URL gambar jarak jauh. Ketika URL diberikan, gambar diunduh dan diimpor ke Media Library.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `attachment_id` | integer | Tidak | ID dari lampiran Media Library yang sudah ada |
| `url` | string | Tidak | URL gambar jarak jauh untuk diimpor dan ditetapkan sebagai logo |

Salah satu dari `attachment_id` atau `url` harus diberikan.

**Mengembalikan** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Menerapkan preset warna/tipografi bernama ke `theme.json` (atau `global-styles`) milik tema aktif. Preset adalah paket terkurasi yang dikelola oleh tim Gratis AI Agent.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `preset` | string | Ya | Nama preset, mis. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Tidak | Jika `true`, gabungkan dengan nilai yang sudah ada alih-alih mengganti. Default `false` |

**Preset yang tersedia**

| Preset | Deskripsi |
|---|---|
| `minimal-dark` | Latar belakang hampir hitam, teks putih, satu warna aksen |
| `warm-editorial` | Latar belakang putih hangat, heading serif, warna aksen bernuansa bumi |
| `corporate-blue` | Palet biru navy dan putih dengan tipografi profesional |
| `vibrant-startup` | Gradasi cerah, sudut membulat, jenis huruf sans-serif modern |
| `classic-blog` | Abu-abu netral, tinggi baris nyaman, spasi tata letak tradisional |

**Mengembalikan** `{ "success": true, "preset": "minimal-dark" }`

---

## Gaya Global {#global-styles}

Kemampuan Gaya Global membaca dan menulis nilai theme.json melalui API Gaya Global WordPress, memengaruhi semua blok dan templat di seluruh situs.

### `get_global_styles` {#getglobalstyles}

Mengembalikan konfigurasi gaya global saat ini.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `path` | string | Tidak | Pointer JSON ke nilai tertentu, mis. `/color/palette` atau `/typography/fontSizes`. Mengembalikan seluruh objek jika dihilangkan. |

**Mengembalikan** objek gaya global lengkap atau nilai pada `path`.

---

### `set_global_styles` {#setglobalstyles}

Memperbarui satu atau lebih nilai dalam konfigurasi gaya global.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `path` | string | Ya | Pointer JSON ke nilai yang akan diatur, mis. `/color/palette` |
| `value` | any | Ya | Nilai baru |

**Contoh** — tambahkan warna ke palet

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Mengembalikan** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Mengatur ulang semua perubahan gaya global yang diterapkan agen, memulihkan default tema.

**Parameter** — tidak ada

**Mengembalikan** `{ "success": true }`

---

## Menu Navigasi {#navigation-menus}

Kemampuan Menu Navigasi membuat dan mengelola menu navigasi WordPress beserta itemnya.

### `create_menu` {#createmenu}

Membuat menu navigasi WordPress baru.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `name` | string | Ya | Nama menu, mis. `Primary Navigation` |
| `location` | string | Tidak | Lokasi tema untuk menetapkan menu ini, mis. `primary` |

**Mengembalikan** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Mengganti nama menu atau menetapkannya kembali ke lokasi tema.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `menu_id` | integer | Ya | ID menu yang akan diperbarui |
| `name` | string | Tidak | Nama menu baru |
| `location` | string | Tidak | Lokasi tema untuk ditetapkan atau ditetapkan ulang |

**Mengembalikan** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Menambahkan item ke menu navigasi yang sudah ada.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `menu_id` | integer | Ya | ID menu target |
| `type` | string | Ya | Tipe item: `custom`, `post_type`, atau `taxonomy` |
| `title` | string | Tidak | Label untuk item menu (wajib untuk tipe `custom`) |
| `url` | string | Tidak | URL untuk item `custom` |
| `object_id` | integer | Tidak | ID pos atau ID term untuk item `post_type`/`taxonomy` |
| `parent_id` | integer | Tidak | ID item menu untuk menempatkan item ini di bawahnya |
| `position` | integer | Tidak | Posisi berbasis nol dalam menu |

**Mengembalikan** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Menghapus item dari menu navigasi.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `item_id` | integer | Ya | ID item menu yang akan dihapus |

**Mengembalikan** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Mencantumkan semua menu navigasi WordPress, termasuk lokasi tema yang ditetapkan.

**Parameter** — tidak ada

**Mengembalikan**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Manajemen Opsi {#options-management}

Kemampuan Opsi membaca dan menulis opsi WordPress melalui `get_option` / `update_option`. Daftar blokir keamanan bawaan mencegah modifikasi tidak disengaja pada pengaturan kritis.

### `get_option` {#getoption}

Membaca opsi WordPress.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `option_name` | string | Ya | Kunci opsi, mis. `blogname` |

**Mengembalikan** `{ "option_name": "blogname", "value": "My Site" }`

Mengembalikan kesalahan jika `option_name` ada dalam daftar blokir keamanan.

---

### `set_option` {#setoption}

Menulis opsi WordPress.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `option_name` | string | Ya | Kunci opsi |
| `value` | any | Ya | Nilai baru (diserialisasi otomatis untuk array/objek) |
| `autoload` | string | Tidak | `"yes"` atau `"no"`. Default mempertahankan pengaturan autoload yang sudah ada |

Mengembalikan error jika `option_name` ada dalam safety blocklist.

**Mengembalikan** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Menghapus sebuah opsi WordPress.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `option_name` | string | Ya | Kunci opsi yang akan dihapus |

Mengembalikan error jika `option_name` ada dalam safety blocklist.

**Mengembalikan** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Mencantumkan opsi WordPress yang cocok dengan pola.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `pattern` | string | Tidak | Pola SQL LIKE untuk memfilter nama opsi, mis. `gratis_%`. Mengembalikan semua opsi jika dihilangkan (gunakan dengan hati-hati pada database besar). |
| `limit` | integer | Tidak | Jumlah maksimum hasil. Default `50`, maks `500` |

**Mengembalikan**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Manajemen Konten {#content-management}

Kemampuan Manajemen Konten membuat dan mengedit postingan serta halaman WordPress. ID postingan dikembalikan sehingga langkah berikutnya dalam rencana multi-kemampuan dapat merujuk konten yang dibuat.

### `create_post` {#createpost}

Membuat postingan WordPress baru, halaman, atau entri tipe postingan kustom.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `title` | string | Ya | Judul postingan |
| `content` | string | Tidak | Isi postingan — menerima teks biasa, HTML, atau markup blok terserialisasi |
| `status` | string | Tidak | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | Tidak | Slug tipe postingan, mis. `post`, `page`, atau CPT terdaftar apa pun. Default `post` |
| `excerpt` | string | Tidak | Ringkasan singkat yang ditampilkan di arsip dan hasil pencarian |
| `categories` | array | Tidak | Array nama atau ID kategori untuk ditetapkan |
| `tags` | array | Tidak | Array nama atau ID tag untuk ditetapkan |
| `author` | integer | Tidak | ID pengguna WordPress untuk ditetapkan sebagai penulis postingan. Default ke pengguna saat ini |
| `date` | string | Tidak | Tanggal publikasi dalam format ISO 8601, mis. `2026-05-01T09:00:00` |
| `page_template` | string | Tidak | File template untuk ditetapkan ke postingan atau halaman ini, mis. `page-full-width.php`. Hanya bermakna ketika `post_type` adalah `page` atau CPT yang mendukung template halaman. |

**Contoh**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Mengembalikan** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Memperbarui postingan atau halaman WordPress yang sudah ada.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `post_id` | integer | Ya | ID postingan yang akan diperbarui |
| `title` | string | Tidak | Judul postingan baru |
| `content` | string | Tidak | Isi postingan baru |
| `status` | string | Tidak | Status baru: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Tidak | Kutipan baru |
| `categories` | array | Tidak | Ganti seluruh daftar kategori dengan array nama atau ID ini |
| `tags` | array | Tidak | Ganti seluruh daftar tag dengan array nama atau ID ini |
| `page_template` | string | Tidak | File template baru untuk ditetapkan ke postingan atau halaman ini, mis. `page-full-width.php`. Berikan string kosong untuk menghapus penetapan template dan kembali ke default theme. |

**Contoh** — ubah template setelah pembuatan

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Mengembalikan** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Membuat beberapa postingan dalam satu pemanggilan kemampuan, mengurangi perjalanan bolak-balik selama pembuatan situs atau impor konten massal. Postingan dibuat secara berurutan; jika salah satu gagal, yang lain tetap dilanjutkan dan kegagalan dilaporkan dalam array hasil.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `posts` | array | Ya | Array objek postingan, masing-masing menerima parameter yang sama seperti `create_post` |
| `stop_on_error` | boolean | Tidak | Jika `true`, hentikan pemrosesan setelah kegagalan pertama. Default `false` |

**Contoh**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Mengembalikan**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

Menetapkan gambar unggulan (thumbnail postingan) ke postingan atau halaman yang sudah ada. Menerima ID lampiran Media Library yang sudah ada atau URL gambar jarak jauh; ketika URL diberikan, gambar diunduh dan diimpor secara otomatis.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `post_id` | integer | Ya | ID postingan atau halaman yang akan diperbarui |
| `attachment_id` | integer | Tidak | ID lampiran Media Library yang sudah ada |
| `url` | string | Tidak | URL gambar jarak jauh untuk diimpor dan ditetapkan sebagai gambar unggulan |
| `alt_text` | string | Tidak | Teks alt untuk diterapkan pada lampiran jika diimpor dari URL |

Salah satu dari `attachment_id` atau `url` harus disediakan.

**Mengembalikan** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Membuat formulir kontak menggunakan plugin formulir aktif (Contact Form 7, WPForms, Fluent Forms, atau Gravity Forms, tergantung yang terinstal). Mengembalikan shortcode yang dapat disematkan di postingan atau halaman apa pun.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `title` | string | Ya | Nama formulir yang ditampilkan di admin plugin formulir |
| `fields` | array | Ya | Daftar terurut field formulir (lihat objek Field di bawah) |
| `recipient` | string | Tidak | Alamat email untuk menerima pengiriman. Default ke email admin WordPress |
| `subject` | string | Tidak | Baris subjek email. Mendukung placeholder `[your-name]` dan `[your-subject]` saat menggunakan Contact Form 7 |
| `confirmation_message` | string | Tidak | Pesan yang ditampilkan setelah pengiriman berhasil. Default: `"Thank you for your message. We'll be in touch soon."` |

**Objek Field**

| Key | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `name` | string | Ya | Nama field internal / kunci mesin |
| `label` | string | Ya | Label yang mudah dibaca manusia yang ditampilkan pada formulir |
| `type` | string | Ya | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Tidak | Apakah field harus diisi sebelum pengiriman. Default `false` |
| `options` | array | Tidak | Opsi untuk field `select`, `checkbox`, dan `radio` |
| `placeholder` | string | Tidak | Teks placeholder untuk input tipe teks |

**Contoh**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Mengembalikan**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Tinjauan Visual {#visual-review}

Kemampuan Tinjauan Visual memungkinkan agen mengambil tangkapan layar halaman live dan menganalisisnya, memungkinkan tinjauan desain otonom, perbandingan sebelum/sesudah, dan pemeriksaan regresi visual tanpa memerlukan ekstensi browser apa pun.

### `capture_screenshot` {#capturescreenshot}

Mengambil tangkapan layar halaman WordPress pada URL tertentu menggunakan browser headless sisi server. Gambar disimpan ke Media Library dan URL CDN dikembalikan.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `url` | string | Ya | URL lengkap halaman yang akan ditangkap layarnya, mis. `https://example.com/about/` |
| `width` | integer | Tidak | Lebar viewport dalam piksel. Default `1280` |
| `height` | integer | Tidak | Tinggi viewport dalam piksel. Default `800` |
| `full_page` | boolean | Tidak | Tangkap seluruh halaman yang dapat di-scroll, bukan hanya viewport. Default `false` |
| `delay_ms` | integer | Tidak | Milidetik untuk menunggu setelah halaman dimuat sebelum menangkap, berguna untuk konten animasi. Default `500` |
| `label` | string | Tidak | Label yang mudah dibaca manusia yang disimpan bersama lampiran di Media Library |

**Mengembalikan**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

Mengambil dua tangkapan layar dan mengembalikan skor diff visual plus gambar diff yang menyorot area yang berubah. Berguna untuk mengonfirmasi bahwa perubahan desain menghasilkan hasil yang diharapkan atau untuk mendeteksi regresi yang tidak disengaja.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `before_url` | string | Ya | URL halaman untuk ditangkap sebagai status "sebelum" |
| `after_url` | string | Ya | URL halaman untuk ditangkap sebagai status "sesudah". Dapat berupa URL yang sama jika membandingkan lintas waktu |
| `width` | integer | Tidak | Lebar viewport untuk kedua tangkapan. Default `1280` |
| `threshold` | float | Tidak | Ambang perbedaan piksel (0.0–1.0). Piksel dalam toleransi ini dianggap tidak berubah. Default `0.1` |

**Mengembalikan**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` sebesar `0.0` berarti tidak ada perubahan yang terlihat; `1.0` berarti setiap piksel berubah.

---

### `review_page_design` {#reviewpagedesign}

Mengambil tangkapan layar halaman dan mengirimkannya ke model bahasa untuk analisis visual. Mengembalikan penilaian terstruktur yang mencakup tata letak, tipografi, penggunaan warna, dan masalah aksesibilitas.

**Parameter**

| Parameter | Tipe | Wajib | Deskripsi |
|---|---|---|---|
| `url` | string | Ya | URL lengkap halaman yang akan ditinjau |
| `focus` | string | Tidak | Daftar area tinjauan yang dipisahkan koma untuk ditekankan: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: semua area |
| `width` | integer | Tidak | Lebar viewport. Default `1280` |

**Mengembalikan**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Kemampuan yang Dapat Diinstal {#installable-abilities}

Registry Kemampuan yang Dapat Diinstal memungkinkan Anda memperluas agen dengan paket kemampuan tambahan yang didistribusikan sebagai plugin WordPress. Setiap paket mendaftarkan satu atau beberapa kemampuan menggunakan API kemampuan standar.

### `list_available_abilities` {#listavailableabilities}

Mengembalikan katalog paket kemampuan yang tersedia untuk instalasi dari registry.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | No | Filter berdasarkan kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Mengembalikan**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

Mengunduh dan mengaktifkan paket ability dari registry.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Slug plugin paket ability |

**Mengembalikan** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Mengkueri registry ability untuk menemukan plugin terbaik bagi kasus penggunaan yang dijelaskan dan, secara opsional, menginstalnya.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | Deskripsi bahasa alami dari fungsionalitas yang diinginkan |
| `install` | boolean | No | Jika `true`, menginstal plugin yang direkomendasikan segera. Default `false` |

**Contoh**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Mengembalikan**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
