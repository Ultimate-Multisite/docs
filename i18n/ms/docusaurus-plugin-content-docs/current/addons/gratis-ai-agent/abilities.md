---
title: Rujukan Keupayaan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Rujukan Keupayaan {#abilities-reference}

Keupayaan ialah tindakan atomik yang boleh dipanggil oleh Gratis AI Agent pada pemasangan WordPress anda. Setiap keupayaan ialah kelas PHP berdaftar yang mendedahkan skema JSON — agent membaca skema ini pada masa jalanan untuk memahami parameter yang diperlukan dan apa yang dipulangkan oleh keupayaan tersebut.

Halaman ini mendokumenkan semua keupayaan yang disertakan dengan Gratis AI Agent v1.9.0.

---

## Jenis Siaran Tersuai {#custom-post-types}

Keupayaan ini mengurus jenis siaran tersuai (CPT) yang didaftarkan melalui agent. Pendaftaran disimpan dalam jadual pilihan WordPress supaya ia kekal selepas plugin dinyahaktifkan dan diaktifkan semula.

### `register_post_type` {#registerposttype}

Mendaftarkan jenis siaran tersuai baharu.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `slug` | string | Ya | Kunci jenis siaran (maksimum 20 aksara, tiada huruf besar, tiada ruang) |
| `singular_label` | string | Ya | Nama tunggal yang boleh dibaca manusia, cth. `Portfolio Item` |
| `plural_label` | string | Ya | Nama jamak yang boleh dibaca manusia, cth. `Portfolio Items` |
| `public` | boolean | Tidak | Sama ada jenis siaran boleh diakses secara awam. Lalai `true` |
| `supports` | array | Tidak | Ciri untuk disokong: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Lalai `["title","editor"]` |
| `has_archive` | boolean | Tidak | Sama ada halaman arkib jenis siaran didayakan. Lalai `false` |
| `menu_icon` | string | Tidak | Kelas Dashicons atau URL untuk ikon menu pentadbir. Lalai `"dashicons-admin-post"` |
| `rewrite_slug` | string | Tidak | Slug URL untuk jenis siaran. Lalai kepada `slug` |

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

**Memulangkan** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Memulangkan semua jenis siaran tersuai yang didaftarkan oleh agent.

**Parameter** — tiada

**Memulangkan**

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

Menyahdaftarkan jenis siaran tersuai yang sebelum ini didaftarkan oleh agent. Siaran sedia ada bagi jenis tersebut kekal dalam pangkalan data tetapi tidak lagi boleh diakses melalui jenis siaran itu.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `slug` | string | Ya | Kunci jenis siaran untuk dialih keluar |

**Memulangkan** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomi Tersuai {#custom-taxonomies}

Keupayaan ini mengurus taksonomi tersuai. Seperti CPT, pendaftaran taksonomi disimpan.

### `register_taxonomy` {#registertaxonomy}

Mendaftarkan taksonomi tersuai baharu.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `slug` | string | Ya | Kunci taksonomi (maksimum 32 aksara) |
| `singular_label` | string | Ya | Nama tunggal yang boleh dibaca manusia, cth. `Project Category` |
| `plural_label` | string | Ya | Nama jamak yang boleh dibaca manusia, cth. `Project Categories` |
| `post_types` | array | Ya | Slug jenis siaran yang taksonomi ini patut dilampirkan kepadanya |
| `hierarchical` | boolean | Tidak | `true` untuk gaya kategori, `false` untuk gaya tag. Lalai `true` |
| `public` | boolean | Tidak | Sama ada istilah boleh diakses secara awam. Lalai `true` |
| `rewrite_slug` | string | Tidak | Slug URL untuk taksonomi. Lalai kepada `slug` |

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

**Memulangkan** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Memulangkan semua taksonomi tersuai yang didaftarkan oleh agent.

**Parameter** — tiada

**Memulangkan**

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

Menyahdaftarkan taksonomi tersuai yang sebelum ini didaftarkan oleh agent.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `slug` | string | Ya | Kunci taksonomi untuk dialih keluar |

**Memulangkan** `{ "success": true, "slug": "project-category" }`

---

## Sistem Reka Bentuk {#design-system}

Keupayaan sistem reka bentuk mengubah persembahan visual laman WordPress — daripada CSS tersuai kepada corak blok dan logo laman.

### `inject_custom_css` {#injectcustomcss}

Menambahkan CSS pada `<head>` laman melalui `wp_add_inline_style`. CSS disimpan dalam pilihan `gratis_ai_agent_custom_css` dan dinyahbaris gilir dengan bersih apabila keupayaan ditetapkan semula.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `css` | string | Ya | CSS sah untuk disuntik |
| `label` | string | Tidak | Label yang boleh dibaca manusia untuk blok CSS ini, digunakan dalam log nyahpepijat. Lalai `"agent-injected"` |
| `replace` | boolean | Tidak | Jika `true`, menggantikan semua CSS yang disuntik sebelum ini. Lalai `false` (menambahkan) |

**Contoh**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Memulangkan** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Mendaftarkan corak blok boleh guna semula dalam pustaka corak WordPress.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `slug` | string | Ya | Pengecam corak, cth. `gratis/hero-dark` |
| `title` | string | Ya | Nama corak yang boleh dibaca manusia yang ditunjukkan dalam editor |
| `content` | string | Ya | Markup blok bersiri (HTML) untuk corak |
| `categories` | array | Tidak | Slug kategori corak, cth. `["featured", "hero"]` |
| `description` | string | Tidak | Penerangan ringkas yang ditunjukkan dalam pemilih corak |
| `keywords` | array | Tidak | Kata kunci carian |

**Memulangkan** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Menyenaraikan semua corak blok yang didaftarkan oleh agent.

**Parameter** — tiada

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

Menetapkan logo laman WordPress kepada ID lampiran yang diberikan atau URL imej jauh. Apabila URL diberikan, imej dimuat turun dan diimport ke dalam Media Library.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `attachment_id` | integer | Tidak | ID lampiran Media Library sedia ada |
| `url` | string | Tidak | URL imej jauh untuk diimport dan ditetapkan sebagai logo |

Salah satu daripada `attachment_id` atau `url` mesti diberikan.

**Mengembalikan** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Menggunakan pratetap warna/tipografi bernama pada `theme.json` (atau `global-styles`) bagi tema aktif. Pratetap ialah pakej tersusun yang diselenggara oleh pasukan Gratis AI Agent.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `preset` | string | Ya | Nama pratetap, cth. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Tidak | Jika `true`, gabungkan dengan nilai sedia ada dan bukannya menggantikan. Lalai `false` |

**Pratetap tersedia**

| Pratetap | Penerangan |
|---|---|
| `minimal-dark` | Latar belakang hampir hitam, teks putih, satu warna aksen |
| `warm-editorial` | Latar belakang putih hangat, tajuk serif, warna aksen bersifat tanah |
| `corporate-blue` | Palet biru laut dan putih dengan tipografi profesional |
| `vibrant-startup` | Gradien terang, bucu membulat, jenis sans-serif moden |
| `classic-blog` | Kelabu neutral, ketinggian baris yang selesa, jarak susun atur tradisional |

**Mengembalikan** `{ "success": true, "preset": "minimal-dark" }`

---

## Gaya Global {#global-styles}

Keupayaan Gaya Global membaca dan menulis nilai theme.json melalui WordPress Global Styles API, yang mempengaruhi semua blok dan templat di seluruh laman.

### `get_global_styles` {#getglobalstyles}

Mengembalikan konfigurasi gaya global semasa.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `path` | string | Tidak | Penunjuk JSON kepada nilai tertentu, cth. `/color/palette` atau `/typography/fontSizes`. Mengembalikan keseluruhan objek jika ditinggalkan. |

**Mengembalikan** objek gaya global penuh atau nilai pada `path`.

---

### `set_global_styles` {#setglobalstyles}

Mengemas kini satu atau lebih nilai dalam konfigurasi gaya global.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `path` | string | Ya | Penunjuk JSON kepada nilai yang hendak ditetapkan, cth. `/color/palette` |
| `value` | any | Ya | Nilai baharu |

**Contoh** — tambah warna pada palet

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

Menetapkan semula semua perubahan gaya global yang digunakan oleh ejen, memulihkan lalai tema.

**Parameter** — tiada

**Mengembalikan** `{ "success": true }`

---

## Menu Navigasi {#navigation-menus}

Keupayaan Menu Navigasi mencipta dan mengurus menu navigasi WordPress serta itemnya.

### `create_menu` {#createmenu}

Mencipta menu navigasi WordPress baharu.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `name` | string | Ya | Nama menu, cth. `Primary Navigation` |
| `location` | string | Tidak | Lokasi tema untuk menetapkan menu ini, cth. `primary` |

**Mengembalikan** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Menamakan semula menu atau menetapkannya semula kepada lokasi tema.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `menu_id` | integer | Ya | ID menu untuk dikemas kini |
| `name` | string | Tidak | Nama menu baharu |
| `location` | string | Tidak | Lokasi tema untuk ditetapkan atau ditetapkan semula |

**Mengembalikan** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Menambah item kepada menu navigasi sedia ada.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `menu_id` | integer | Ya | ID menu sasaran |
| `type` | string | Ya | Jenis item: `custom`, `post_type`, atau `taxonomy` |
| `title` | string | Tidak | Label untuk item menu (diperlukan untuk jenis `custom`) |
| `url` | string | Tidak | URL untuk item `custom` |
| `object_id` | integer | Tidak | ID siaran atau ID istilah untuk item `post_type`/`taxonomy` |
| `parent_id` | integer | Tidak | ID item menu untuk menyarangkan item ini di bawahnya |
| `position` | integer | Tidak | Kedudukan berasaskan sifar dalam menu |

**Mengembalikan** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Mengalih keluar item daripada menu navigasi.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `item_id` | integer | Ya | ID item menu untuk dialih keluar |

**Mengembalikan** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Menyenaraikan semua menu navigasi WordPress, termasuk lokasi tema yang ditetapkan kepada menu tersebut.

**Parameter** — tiada

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

## Pengurusan Pilihan {#options-management}

Keupayaan pilihan membaca dan menulis pilihan WordPress melalui `get_option` / `update_option`. Senarai sekatan keselamatan terbina dalam menghalang pengubahsuaian tidak sengaja pada tetapan kritikal.

### `get_option` {#getoption}

Membaca pilihan WordPress.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `option_name` | string | Ya | Kunci pilihan, cth. `blogname` |

**Mengembalikan** `{ "option_name": "blogname", "value": "My Site" }`

Mengembalikan ralat jika `option_name` berada dalam senarai sekatan keselamatan.

---

### `set_option` {#setoption}

Menulis pilihan WordPress.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `option_name` | string | Ya | Kunci pilihan |
| `value` | any | Ya | Nilai baharu (disirikan secara automatik untuk tatasusunan/objek) |
| `autoload` | string | Tidak | `"yes"` atau `"no"`. Lalai mengekalkan tetapan autoload sedia ada |

Mengembalikan ralat jika `option_name` berada dalam senarai sekatan keselamatan.

**Mengembalikan** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Memadamkan option WordPress.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Kekunci option untuk dipadamkan |

Mengembalikan ralat jika `option_name` berada dalam senarai sekatan keselamatan.

**Mengembalikan** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Menyenaraikan option WordPress yang sepadan dengan corak.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Corak SQL LIKE untuk menapis nama option, cth. `gratis_%`. Mengembalikan semua option jika ditinggalkan (gunakan dengan berhati-hati pada pangkalan data besar). |
| `limit` | integer | No | Bilangan maksimum hasil. Lalai `50`, maksimum `500` |

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

## Pengurusan Kandungan {#content-management}

Keupayaan Pengurusan Kandungan mencipta dan mengedit hantaran serta halaman WordPress. ID hantaran dikembalikan supaya langkah seterusnya dalam pelan berbilang keupayaan boleh merujuk kandungan yang dicipta.

### `create_post` {#createpost}

Mencipta hantaran WordPress baharu, halaman, atau entri jenis hantaran tersuai.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Tajuk hantaran |
| `content` | string | No | Badan hantaran — menerima teks biasa, HTML, atau markup blok bersiri |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Lalai `draft` |
| `post_type` | string | No | Slug jenis hantaran, cth. `post`, `page`, atau mana-mana CPT berdaftar. Lalai `post` |
| `excerpt` | string | No | Ringkasan pendek yang dipaparkan dalam arkib dan hasil carian |
| `categories` | array | No | Array nama atau ID kategori untuk ditetapkan |
| `tags` | array | No | Array nama atau ID tag untuk ditetapkan |
| `author` | integer | No | ID pengguna WordPress untuk ditetapkan sebagai pengarang hantaran. Lalai kepada pengguna semasa |
| `date` | string | No | Tarikh penerbitan dalam format ISO 8601, cth. `2026-05-01T09:00:00` |
| `page_template` | string | No | Fail templat untuk ditetapkan kepada hantaran atau halaman ini, cth. `page-full-width.php`. Hanya bermakna apabila `post_type` ialah `page` atau CPT yang menyokong templat halaman. |

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

Mengemas kini hantaran atau halaman WordPress sedia ada.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID hantaran untuk dikemas kini |
| `title` | string | No | Tajuk hantaran baharu |
| `content` | string | No | Badan hantaran baharu |
| `status` | string | No | Status baharu: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Petikan baharu |
| `categories` | array | No | Gantikan senarai kategori penuh dengan array nama atau ID ini |
| `tags` | array | No | Gantikan senarai tag penuh dengan array nama atau ID ini |
| `page_template` | string | No | Fail templat baharu untuk ditetapkan kepada hantaran atau halaman ini, cth. `page-full-width.php`. Berikan rentetan kosong untuk membuang penetapan templat dan kembali kepada lalai theme. |

**Contoh** — tukar templat selepas penciptaan

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Mengembalikan** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Mencipta berbilang hantaran dalam satu panggilan keupayaan, mengurangkan ulang-alik semasa pembinaan tapak atau import kandungan pukal. Hantaran dicipta mengikut urutan; jika satu gagal, yang lain diteruskan dan kegagalan dilaporkan dalam array hasil.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array objek hantaran, setiap satu menerima parameter yang sama seperti `create_post` |
| `stop_on_error` | boolean | No | Jika `true`, hentikan pemprosesan selepas kegagalan pertama. Lalai `false` |

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

Menetapkan imej pilihan (lakaran kecil hantaran) kepada hantaran atau halaman sedia ada. Menerima ID lampiran Media Library sedia ada atau URL imej jauh; apabila URL dibekalkan, imej dimuat turun dan diimport secara automatik.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID hantaran atau halaman untuk dikemas kini |
| `attachment_id` | integer | No | ID lampiran Media Library sedia ada |
| `url` | string | No | URL imej jauh untuk diimport dan ditetapkan sebagai imej pilihan |
| `alt_text` | string | No | Teks alt untuk digunakan pada lampiran jika ia diimport daripada URL |

Salah satu daripada `attachment_id` atau `url` mesti diberikan.

**Mengembalikan** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Mencipta borang hubungan menggunakan plugin borang aktif (Contact Form 7, WPForms, Fluent Forms, atau Gravity Forms, bergantung pada yang dipasang). Mengembalikan shortcode yang boleh dibenamkan dalam mana-mana hantaran atau halaman.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Nama borang yang ditunjukkan dalam admin plugin borang |
| `fields` | array | Yes | Senarai tersusun medan borang (lihat objek Field di bawah) |
| `recipient` | string | No | Alamat e-mel untuk menerima penghantaran. Lalai kepada e-mel admin WordPress |
| `subject` | string | No | Baris subjek e-mel. Menyokong placeholder `[your-name]` dan `[your-subject]` apabila menggunakan Contact Form 7 |
| `confirmation_message` | string | No | Mesej yang dipaparkan selepas penghantaran berjaya. Lalai: `"Thank you for your message. We'll be in touch soon."` |

**Objek Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Nama medan dalaman / kunci mesin |
| `label` | string | Yes | Label boleh dibaca manusia yang ditunjukkan pada borang |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Sama ada medan mesti diisi sebelum penghantaran. Lalai `false` |
| `options` | array | No | Pilihan untuk medan `select`, `checkbox`, dan `radio` |
| `placeholder` | string | No | Teks placeholder untuk input jenis teks |

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

## Semakan Visual {#visual-review}

Keupayaan Semakan Visual membolehkan agent menangkap tangkapan skrin halaman langsung dan menganalisisnya, membolehkan semakan reka bentuk autonomi, perbandingan sebelum/selepas, dan semakan regresi visual tanpa memerlukan sebarang sambungan pelayar.

### `capture_screenshot` {#capturescreenshot}

Menangkap tangkapan skrin halaman WordPress pada URL tertentu menggunakan pelayar headless sisi pelayan. Imej disimpan ke Media Library dan URL CDN dikembalikan.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL penuh halaman untuk ditangkap skrin, cth. `https://example.com/about/` |
| `width` | integer | No | Lebar viewport dalam piksel. Lalai `1280` |
| `height` | integer | No | Tinggi viewport dalam piksel. Lalai `800` |
| `full_page` | boolean | No | Tangkap halaman penuh yang boleh ditatal dan bukan hanya viewport. Lalai `false` |
| `delay_ms` | integer | No | Milisaat untuk menunggu selepas halaman dimuat sebelum menangkap, berguna untuk kandungan beranimasi. Lalai `500` |
| `label` | string | No | Label boleh dibaca manusia yang disimpan bersama lampiran dalam Media Library |

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

Mengambil dua tangkapan skrin dan mengembalikan skor perbezaan visual serta imej perbezaan yang menyerlahkan kawasan yang berubah. Berguna untuk mengesahkan bahawa perubahan reka bentuk menghasilkan keputusan yang dijangkakan atau untuk mengesan regresi yang tidak disengajakan.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL halaman untuk ditangkap sebagai keadaan "sebelum" |
| `after_url` | string | Yes | URL halaman untuk ditangkap sebagai keadaan "selepas". Boleh menjadi URL yang sama jika membandingkan merentas masa |
| `width` | integer | No | Lebar viewport untuk kedua-dua tangkapan. Lalai `1280` |
| `threshold` | float | No | Ambang perbezaan piksel (0.0–1.0). Piksel dalam toleransi ini dianggap tidak berubah. Lalai `0.1` |

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

`diff_score` bernilai `0.0` bermaksud tiada perubahan yang kelihatan; `1.0` bermaksud setiap piksel berubah.

---

### `review_page_design` {#reviewpagedesign}

Menangkap tangkapan skrin halaman dan menghantarnya kepada model bahasa untuk analisis visual. Mengembalikan penilaian berstruktur yang merangkumi susun atur, tipografi, penggunaan warna, dan kebimbangan kebolehcapaian.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL penuh halaman untuk disemak |
| `focus` | string | No | Senarai kawasan semakan yang dipisahkan koma untuk ditekankan: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Lalai: semua kawasan |
| `width` | integer | No | Lebar viewport. Lalai `1280` |

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

## Keupayaan Boleh Dipasang {#installable-abilities}

Installable Abilities Registry membolehkan anda memperluas agent dengan pek keupayaan tambahan yang diedarkan sebagai plugin WordPress. Setiap pek mendaftarkan satu atau lebih keupayaan menggunakan API keupayaan standard.

### `list_available_abilities` {#listavailableabilities}

Mengembalikan katalog pek keupayaan yang tersedia untuk pemasangan daripada registry.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `category` | string | Tidak | Tapis mengikut kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

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

Memuat turun dan mengaktifkan pek keupayaan daripada pendaftaran.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `slug` | string | Ya | Slug pemalam pek keupayaan |

**Mengembalikan** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Menanyakan pendaftaran keupayaan untuk mencari pemalam terbaik bagi kes penggunaan yang diterangkan dan, secara pilihan, memasangnya.

**Parameter**

| Parameter | Jenis | Diperlukan | Penerangan |
|---|---|---|---|
| `description` | string | Ya | Penerangan bahasa semula jadi tentang fungsi yang diingini |
| `install` | boolean | Tidak | Jika `true`, memasang pemalam yang disyorkan dengan segera. Lalai `false` |

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
