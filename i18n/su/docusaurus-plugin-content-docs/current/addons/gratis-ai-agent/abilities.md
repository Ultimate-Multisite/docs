---
title: Rujukan Kamampuhan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Rujukan Abilities {#abilities-reference}

Abilities nyaéta tindakan atomik anu bisa dipaké ku Gratis AI Agent dina instalasi WordPress anjeun. Unggal ability mangrupa kelas PHP anu kadaptar sarta nembongkeun skéma JSON — agent maca skéma ieu dina runtime pikeun ngartos parameter naon anu diperlukeun jeung naon anu dipulangkeun ku ability éta.

Kaca ieu ngadokuméntasikeun sakabéh abilities anu disertakeun jeung Gratis AI Agent v1.9.0.

---

## Custom Post Types {#custom-post-types}

Abilities ieu ngatur custom post types (CPTs) anu didaptarkeun ngaliwatan agent. Pendaptaran disimpen kana tabel options WordPress supaya tetep aya sanajan plugin dinonaktipkeun jeung diaktipkeun deui.

### `register_post_type` {#registerposttype}

Ngadaptarkeun custom post type anyar.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Konci post type (maks 20 karakter, teu meunang hurup gedé, teu meunang spasi) |
| `singular_label` | string | Yes | Ngaran tunggal anu gampang dibaca ku manusa, contona `Portfolio Item` |
| `plural_label` | string | Yes | Ngaran jamak anu gampang dibaca ku manusa, contona `Portfolio Items` |
| `public` | boolean | No | Naha post type bisa diaksés ku umum. Default `true` |
| `supports` | array | No | Fitur anu dirojong: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Naha kaca arsip post type diaktipkeun. Default `false` |
| `menu_icon` | string | No | Kelas Dashicons atawa URL pikeun ikon ménu admin. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug pikeun post type. Default kana `slug` |

**Conto**

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

**Mulangkeun** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Mulangkeun sakabéh custom post types anu didaptarkeun ku agent.

**Parameter** — euweuh

**Mulangkeun**

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

Ngabolaykeun pendaptaran custom post type anu saméméhna didaptarkeun ku agent. Post anu geus aya tina tipe éta tetep aya dina database tapi henteu deui bisa diaksés ngaliwatan post type éta.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Konci post type anu rék dipiceun |

**Mulangkeun** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies {#custom-taxonomies}

Abilities ieu ngatur custom taxonomies. Saperti CPTs, pendaptaran taxonomy disimpen tetep.

### `register_taxonomy` {#registertaxonomy}

Ngadaptarkeun custom taxonomy anyar.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Konci taxonomy (maks 32 karakter) |
| `singular_label` | string | Yes | Ngaran tunggal anu gampang dibaca ku manusa, contona `Project Category` |
| `plural_label` | string | Yes | Ngaran jamak anu gampang dibaca ku manusa, contona `Project Categories` |
| `post_types` | array | Yes | Slug post type anu kudu napel kana taxonomy ieu |
| `hierarchical` | boolean | No | `true` pikeun gaya category, `false` pikeun gaya tag. Default `true` |
| `public` | boolean | No | Naha terms bisa diaksés ku umum. Default `true` |
| `rewrite_slug` | string | No | URL slug pikeun taxonomy. Default kana `slug` |

**Conto**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Mulangkeun** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Mulangkeun sakabéh custom taxonomies anu didaptarkeun ku agent.

**Parameter** — euweuh

**Mulangkeun**

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

Ngabolaykeun pendaptaran custom taxonomy anu saméméhna didaptarkeun ku agent.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Konci taxonomy anu rék dipiceun |

**Mulangkeun** `{ "success": true, "slug": "project-category" }`

---

## Sistem Desain {#design-system}

Abilities sistem desain ngarobah tampilan visual situs WordPress — ti CSS custom nepi ka pola block jeung logo situs.

### `inject_custom_css` {#injectcustomcss}

Nambahkeun CSS kana `<head>` situs ngaliwatan `wp_add_inline_style`. CSS disimpen dina option `gratis_ai_agent_custom_css` sarta dipiceun tina antrian kalayan rapih nalika ability direset.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS valid pikeun diselapkeun |
| `label` | string | No | Label anu gampang dibaca ku manusa pikeun block CSS ieu, dipaké dina log debug. Default `"agent-injected"` |
| `replace` | boolean | No | Lamun `true`, ngaganti sakabéh CSS anu saméméhna diselapkeun. Default `false` (nambahkeun) |

**Conto**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Mulangkeun** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Ngadaptarkeun pola block anu bisa dipaké deui dina pustaka pola WordPress.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pangidéntifikasi pola, contona `gratis/hero-dark` |
| `title` | string | Yes | Ngaran pola anu gampang dibaca ku manusa anu ditembongkeun dina editor |
| `content` | string | Yes | Markup block anu diserialisasikeun (HTML) pikeun pola |
| `categories` | array | No | Slug kategori pola, contona `["featured", "hero"]` |
| `description` | string | No | Pedaran pondok anu ditembongkeun dina pamilih pola |
| `keywords` | array | No | Kecap konci pamilarian |

**Mulangkeun** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Némbongkeun daptar sakabéh pola block anu didaptarkeun ku agent.

**Parameter** — euweuh

**Mulangkeun**

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

Nyetél logo situs WordPress kana ID lampiran anu dibikeun atawa URL gambar jauh. Nalika URL disadiakeun, gambar diundeur sarta diimpor kana Media Library.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID tina lampiran Media Library anu geus aya |
| `url` | string | No | URL gambar jauh pikeun diimpor jeung disetél minangka logo |

Salah sahiji tina `attachment_id` atawa `url` kudu disadiakeun.

**Mulangkeun** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Nerapkeun preset warna/tipografi anu dingaranan kana `theme.json` theme aktip (atawa `global-styles`). Preset nyaéta buntelan anu dikurasi jeung diriksa ku tim Gratis AI Agent.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Ngaran preset, contona `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Lamun `true`, gabungkeun jeung nilai anu geus aya tibatan ngaganti. Default `false` |

**Preset anu sayaga**

| Preset | Description |
|---|---|
| `minimal-dark` | Latar ampir hideung, téks bodas, hiji warna aksén |
| `warm-editorial` | Latar bodas haneut rada pareum, judul serif, warna aksén alami |
| `corporate-blue` | Palét biru navy jeung bodas kalayan tipografi profésional |
| `vibrant-startup` | Gradién caang, juru buleud, jinis hurup sans-serif modéren |
| `classic-blog` | Abu-abu nétral, jangkung garis anu merenah, jarak tata perenah tradisional |

**Mulangkeun** `{ "success": true, "preset": "minimal-dark" }`

---

## Gaya Global {#global-styles}

Kamampuhan Global Styles maca jeung nulis nilai theme.json ngaliwatan WordPress Global Styles API, mangaruhan sakabéh blok jeung témplat di sakuliah situs.

### `get_global_styles` {#getglobalstyles}

Mulangkeun konfigurasi gaya global ayeuna.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | Pointer JSON kana nilai spésifik, contona `/color/palette` atawa `/typography/fontSizes`. Mulangkeun sakabéh obyék lamun dileungitkeun. |

**Mulangkeun** obyék gaya global lengkep atawa nilai dina `path`.

---

### `set_global_styles` {#setglobalstyles}

Ngapdet hiji atawa leuwih nilai dina konfigurasi gaya global.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | Pointer JSON kana nilai anu rék disetél, contona `/color/palette` |
| `value` | any | Yes | Nilai anyar |

**Conto** — tambahkeun warna kana palét

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Mulangkeun** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Ngareset sakabéh parobahan gaya global anu diterapkeun ku agén, mulangkeun default theme.

**Parameter** — euweuh

**Mulangkeun** `{ "success": true }`

---

## Menu Navigasi {#navigation-menus}

Kamampuhan Menu Navigasi nyieun jeung ngatur menu nav WordPress sarta item-itemna.

### `create_menu` {#createmenu}

Nyieun menu navigasi WordPress anyar.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Ngaran menu, contona `Primary Navigation` |
| `location` | string | No | Lokasi theme pikeun masangkeun menu ieu, contona `primary` |

**Mulangkeun** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Ngaganti ngaran menu atawa masangkeun deui kana lokasi theme.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID menu anu rék diapdet |
| `name` | string | No | Ngaran menu anyar |
| `location` | string | No | Lokasi theme pikeun masangkeun atawa masangkeun deui |

**Mulangkeun** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Nambahkeun item kana menu navigasi anu geus aya.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID menu tujuan |
| `type` | string | Yes | Jinis item: `custom`, `post_type`, atawa `taxonomy` |
| `title` | string | No | Labél pikeun item menu (dibutuhkeun pikeun jinis `custom`) |
| `url` | string | No | URL pikeun item `custom` |
| `object_id` | integer | No | ID tulisan atawa ID istilah pikeun item `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID item menu pikeun nempatkeun item ieu di handapeunna |
| `position` | integer | No | Posisi basis-enol dina menu |

**Mulangkeun** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Mupus item tina menu navigasi.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID item menu anu rék dipupus |

**Mulangkeun** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Daptar sakabéh menu navigasi WordPress, kaasup lokasi theme anu ditugaskeun.

**Parameter** — euweuh

**Mulangkeun**

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

## Pangaturan Options {#options-management}

Kamampuhan Options maca jeung nulis options WordPress via `get_option` / `update_option`. Blocklist kaamanan bawaan nyegah modifikasi teu kahaja kana setélan kritis.

### `get_option` {#getoption}

Maca option WordPress.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Konci option, contona `blogname` |

**Mulangkeun** `{ "option_name": "blogname", "value": "My Site" }`

Mulangkeun kasalahan lamun `option_name` aya dina blocklist kaamanan.

---

### `set_option` {#setoption}

Nulis option WordPress.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Konci option |
| `value` | any | Yes | Nilai anyar (diserialkeun sacara otomatis pikeun array/obyék) |
| `autoload` | string | No | `"yes"` atawa `"no"`. Default ngajaga setélan autoload anu geus aya |

Mulangkeun kasalahan lamun `option_name` aya dina safety blocklist.

**Mulangkeun** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Mupus hiji pilihan WordPress.

**Parameter**

| Parameter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `option_name` | string | Leres | Konci pilihan anu rék dipupus |

Mulangkeun kasalahan lamun `option_name` aya dina safety blocklist.

**Mulangkeun** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Mintonkeun daptar pilihan WordPress anu cocog jeung pola.

**Parameter**

| Parameter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `pattern` | string | Henteu | Pola SQL LIKE pikeun nyaring ngaran pilihan, contona `gratis_%`. Mulangkeun sakabéh pilihan lamun teu diasupkeun (anggo kalayan ati-ati dina database gedé). |
| `limit` | integer | Henteu | Jumlah hasil maksimum. Baku `50`, maksimum `500` |

**Mulangkeun**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Pangaturan Eusi {#content-management}

Kamampuh Pangaturan Eusi nyieun jeung ngédit tulisan jeung kaca WordPress. ID tulisan dipulangkeun sangkan léngkah salajengna dina rarancang multi-kamampuh bisa ngarujuk kana eusi anu dijieun.

### `create_post` {#createpost}

Nyieun tulisan WordPress anyar, kaca, atawa éntri tipe tulisan kustom.

**Parameter**

| Parameter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `title` | string | Leres | Judul tulisan |
| `content` | string | Henteu | Awak tulisan — narima téks polos, HTML, atawa markup blok anu disérialisasi |
| `status` | string | Henteu | `draft`, `publish`, `pending`, `private`. Baku `draft` |
| `post_type` | string | Henteu | Slug tipe tulisan, contona `post`, `page`, atawa CPT kadaptar naon waé. Baku `post` |
| `excerpt` | string | Henteu | Ringkesan pondok anu ditembongkeun dina arsip jeung hasil pilarian |
| `categories` | array | Henteu | Array ngaran kategori atawa ID pikeun dipasihkeun |
| `tags` | array | Henteu | Array ngaran tag atawa ID pikeun dipasihkeun |
| `author` | integer | Henteu | ID pamaké WordPress pikeun disetel salaku panulis tulisan. Baku kana pamaké ayeuna |
| `date` | string | Henteu | Tanggal publikasi dina format ISO 8601, contona `2026-05-01T09:00:00` |
| `page_template` | string | Henteu | Berkas témplat pikeun dipasihkeun ka tulisan atawa kaca ieu, contona `page-full-width.php`. Ngan boga harti lamun `post_type` nyaéta `page` atawa CPT anu ngarojong témplat kaca. |

**Conto**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Mulangkeun** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ngamutahirkeun tulisan atawa kaca WordPress anu geus aya.

**Parameter**

| Parameter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `post_id` | integer | Leres | ID tulisan anu rék diropéa |
| `title` | string | Henteu | Judul tulisan anyar |
| `content` | string | Henteu | Awak tulisan anyar |
| `status` | string | Henteu | Status anyar: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Henteu | Cutatan anyar |
| `categories` | array | Henteu | Ganti daptar kategori lengkep ku array ngaran atawa ID ieu |
| `tags` | array | Henteu | Ganti daptar tag lengkep ku array ngaran atawa ID ieu |
| `page_template` | string | Henteu | Berkas témplat anyar pikeun dipasihkeun ka tulisan atawa kaca ieu, contona `page-full-width.php`. Lebetkeun string kosong pikeun mupus panugasan témplat jeung balik deui ka baku theme. |

**Conto** — robah témplat sanggeus dijieun

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Mulangkeun** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Nyieun sababaraha tulisan dina hiji panggero kamampuh, ngurangan bolak-balik nalika ngawangun situs atawa ngimpor eusi sacara masal. Tulisan dijieun sacara runtuyan; lamun hiji gagal, anu séjén neruskeun jeung kagagalan dilaporkeun dina array hasil.

**Parameter**

| Parameter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `posts` | array | Leres | Array objék tulisan, masing-masing narima parameter anu sarua jeung `create_post` |
| `stop_on_error` | boolean | Henteu | Lamun `true`, eureun ngolah sanggeus kagagalan kahiji. Baku `false` |

**Conto**

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

**Mulangkeun**

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

Masang gambar unggulan (thumbnail tulisan) ka tulisan atawa kaca anu geus aya. Narima ID lampiran Media Library anu geus aya atawa URL gambar jauh; lamun URL disayagikeun, gambar diundeur jeung diimpor sacara otomatis.

**Parameter**

| Parameter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `post_id` | integer | Leres | ID tulisan atawa kaca anu rék diropéa |
| `attachment_id` | integer | Henteu | ID lampiran Media Library anu geus aya |
| `url` | string | Henteu | URL gambar jauh pikeun diimpor jeung disetel salaku gambar unggulan |
| `alt_text` | string | Henteu | Téks alt pikeun diterapkeun kana lampiran lamun éta diimpor tina URL |

Salah sahiji tina `attachment_id` atawa `url` kudu disayagikeun.

**Mulangkeun** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Nyieun formulir kontak maké plugin formulir anu aktip (Contact Form 7, WPForms, Fluent Forms, atawa Gravity Forms, gumantung kana anu dipasang). Mulangkeun shortcode anu bisa diasupkeun kana tulisan atawa kaca naon waé.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Ngaran formulir anu dipintonkeun dina admin plugin formulir |
| `fields` | array | Yes | Daptar runtuyan widang formulir (tingali obyék Widang di handap) |
| `recipient` | string | No | Alamat email pikeun nampa kiriman. Baku na ka email admin WordPress |
| `subject` | string | No | Baris jejer email. Ngarojong placeholder `[your-name]` jeung `[your-subject]` nalika maké Contact Form 7 |
| `confirmation_message` | string | No | Talatah anu dipintonkeun sanggeus kiriman hasil. Baku: `"Thank you for your message. We'll be in touch soon."` |

**Obyék widang**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Ngaran widang internal / konci mesin |
| `label` | string | Yes | Labél anu kabaca ku manusa dipintonkeun dina formulir |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Naha widang kudu dieusian saméméh dikirim. Baku `false` |
| `options` | array | No | Pilihan pikeun widang `select`, `checkbox`, jeung `radio` |
| `placeholder` | string | No | Téks placeholder pikeun input tipe téks |

**Conto**

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

**Mulangkeun**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Tinjauan Visual {#visual-review}

Kamampuh Tinjauan Visual ngamungkinkeun agent nyokot screenshot tina kaca live sarta nganalisisna, sangkan bisa tinjauan desain otonom, babandingan saméméh/sanggeus, jeung pamariksaan régrési visual tanpa merlukeun ekstensi browser naon waé.

### `capture_screenshot` {#capturescreenshot}

Nyokot screenshot tina hiji kaca WordPress dina URL anu ditangtukeun maké browser headless sisi-server. Gambar disimpen ka Media Library sarta URL CDN dipulangkeun.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL lengkep tina kaca pikeun dicokot screenshot, contona `https://example.com/about/` |
| `width` | integer | No | Rubak viewport dina piksel. Baku `1280` |
| `height` | integer | No | Jangkung viewport dina piksel. Baku `800` |
| `full_page` | boolean | No | Candak sakabéh kaca anu bisa digulung tibatan ukur viewport. Baku `false` |
| `delay_ms` | integer | No | Milidetik pikeun ngadagoan sanggeus kaca dimuat saméméh nyokot, mangpaat pikeun eusi animasi. Baku `500` |
| `label` | string | No | Labél anu kabaca ku manusa disimpen jeung attachment dina Media Library |

**Mulangkeun**

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

Nyokot dua screenshot sarta mulangkeun skor béda visual ditambah gambar béda anu nyorot wewengkon anu robah. Mangpaat pikeun mastikeun yén parobahan desain ngahasilkeun hasil anu diarepkeun atawa pikeun ngadeteksi régrési anu teu dihaja.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL tina kaca pikeun dicokot salaku kaayaan "saméméh" |
| `after_url` | string | Yes | URL tina kaca pikeun dicokot salaku kaayaan "sanggeus". Bisa URL anu sarua lamun ngabandingkeun dina waktu béda |
| `width` | integer | No | Rubak viewport pikeun duanana panangkepan. Baku `1280` |
| `threshold` | float | No | Ambang béda-piksel (0.0–1.0). Piksel dina toléransi ieu dianggap teu robah. Baku `0.1` |

**Mulangkeun**

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

`diff_score` tina `0.0` hartina teu aya parobahan anu katingali; `1.0` hartina unggal piksel robah.

---

### `review_page_design` {#reviewpagedesign}

Nyokot screenshot tina kaca sarta ngirimkeunana ka modél basa pikeun analisis visual. Mulangkeun panilaian terstruktur anu ngawengku tata perenah, tipografi, pamakéan warna, jeung kahariwang aksésibilitas.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL lengkep tina kaca pikeun ditinjau |
| `focus` | string | No | Daptar wewengkon tinjauan dipisahkeun ku koma pikeun ditekenkeun: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Baku: sakabéh wewengkon |
| `width` | integer | No | Rubak viewport. Baku `1280` |

**Mulangkeun**

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

## Kamampuh Anu Bisa Dipasang {#installable-abilities}

Registry Kamampuh Anu Bisa Dipasang ngamungkinkeun anjeun ngalegaan agent ku pakét kamampuh tambahan anu disebarkeun salaku plugin WordPress. Unggal pakét ngadaptarkeun hiji atawa leuwih kamampuh maké API kamampuh standar.

### `list_available_abilities` {#listavailableabilities}

Mulangkeun katalog pakét kamampuh anu sadia pikeun dipasang ti registry.

**Parameter**

| Paraméter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `category` | string | Henteu | Saring dumasar kana katégori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ngabalikeun**

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

Ngundeur jeung ngaktipkeun hiji pakét kamampuhan ti réjistri.

**Paraméter**

| Paraméter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `slug` | string | Leres | Slug panyambung pakét kamampuhan |

**Ngabalikeun** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Naroskeun ka réjistri kamampuhan pikeun manggihan panyambung anu panghadéna pikeun kasus pamakéan anu dijelaskeun sarta, upami dipikahoyong, masangna.

**Paraméter**

| Paraméter | Tipe | Diperyogikeun | Pedaran |
|---|---|---|---|
| `description` | string | Leres | Pedaran basa alami ngeunaan fungsionalitas anu dipikahayang |
| `install` | boolean | Henteu | Lamun `true`, masang panyambung anu disarankeun langsung. Bawaan `false` |

**Conto**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Ngabalikeun**

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
