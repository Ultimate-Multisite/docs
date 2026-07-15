---
title: Rujukan Kabisan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Rujukan Abilities

Abilities yaiku tumindak atomik sing bisa diundang dening Gratis AI Agent ing instalasi WordPress sampeyan. Saben ability iku kelas PHP sing kadhaftar lan mbabarake skema JSON — agent maca skema iki nalika runtime kanggo mangerteni parameter apa sing dibutuhake lan apa sing dibalekake dening ability kasebut.

Kaca iki ndokumentasikake kabeh abilities sing dikirim bareng Gratis AI Agent v1.9.0.

---

## Jinis Post Kustom {#custom-post-types}

Abilities iki ngatur jinis post kustom (CPT) sing didaftar liwat agent. Registrasi disimpen ing tabel opsi WordPress supaya tetep ana sanajan plugin dinonaktifake lan diaktifake maneh.

### `register_post_type` {#registerposttype}

Ndaftar jinis post kustom anyar.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ya | Kunci jinis post (maksimal 20 karakter, ora ana huruf gedhe, ora ana spasi) |
| `singular_label` | string | Ya | Jeneng tunggal sing gampang diwaca manungsa, contone `Portfolio Item` |
| `plural_label` | string | Ya | Jeneng jamak sing gampang diwaca manungsa, contone `Portfolio Items` |
| `public` | boolean | Ora | Apa jinis post bisa diakses umum. Gawané `true` |
| `supports` | array | Ora | Fitur sing didhukung: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Gawané `["title","editor"]` |
| `has_archive` | boolean | Ora | Apa kaca arsip jinis post diaktifake. Gawané `false` |
| `menu_icon` | string | Ora | Kelas Dashicons utawa URL kanggo ikon menu admin. Gawané `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ora | Slug URL kanggo jinis post. Gawané nganggo `slug` |

**Tuladha**

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

**Mbalekake** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Mbalekake kabeh jinis post kustom sing didaftar dening agent.

**Parameter** — ora ana

**Mbalekake**

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

Mbusak registrasi jinis post kustom sing sadurunge didaftar dening agent. Post sing wis ana saka jinis kasebut tetep ana ing database nanging ora bisa diakses maneh liwat jinis post kasebut.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ya | Kunci jinis post sing arep dibusak |

**Mbalekake** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomi Kustom {#custom-taxonomies}

Abilities iki ngatur taksonomi kustom. Kaya CPT, registrasi taksonomi disimpen kanthi tetep.

### `register_taxonomy` {#registertaxonomy}

Ndaftar taksonomi kustom anyar.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ya | Kunci taksonomi (maksimal 32 karakter) |
| `singular_label` | string | Ya | Jeneng tunggal sing gampang diwaca manungsa, contone `Project Category` |
| `plural_label` | string | Ya | Jeneng jamak sing gampang diwaca manungsa, contone `Project Categories` |
| `post_types` | array | Ya | Slug jinis post sing kudu dipasangake karo taksonomi iki |
| `hierarchical` | boolean | Ora | `true` kanggo gaya kategori, `false` kanggo gaya tag. Gawané `true` |
| `public` | boolean | Ora | Apa istilah bisa diakses umum. Gawané `true` |
| `rewrite_slug` | string | Ora | Slug URL kanggo taksonomi. Gawané nganggo `slug` |

**Tuladha**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Mbalekake** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Mbalekake kabeh taksonomi kustom sing didaftar dening agent.

**Parameter** — ora ana

**Mbalekake**

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

Mbusak registrasi taksonomi kustom sing sadurunge didaftar dening agent.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ya | Kunci taksonomi sing arep dibusak |

**Mbalekake** `{ "success": true, "slug": "project-category" }`

---

## Sistem Desain {#design-system}

Abilities sistem desain ngowahi tampilan visual situs WordPress — saka CSS kustom nganti pola blok lan logo situs.

### `inject_custom_css` {#injectcustomcss}

Nambahake CSS menyang `<head>` situs liwat `wp_add_inline_style`. CSS disimpen ing opsi `gratis_ai_agent_custom_css` lan dibuwang saka antrian kanthi resik nalika ability direset.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Ya | CSS valid sing arep disisipake |
| `label` | string | Ora | Label sing gampang diwaca manungsa kanggo blok CSS iki, digunakake ing log debug. Gawané `"agent-injected"` |
| `replace` | boolean | Ora | Yen `true`, ngganti kabeh CSS sing sadurunge wis disisipake. Gawané `false` (nambahake) |

**Tuladha**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Mbalekake** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Ndaftar pola blok sing bisa digunakake maneh ing pustaka pola WordPress.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ya | Pengenal pola, contone `gratis/hero-dark` |
| `title` | string | Ya | Jeneng pola sing gampang diwaca manungsa sing ditampilake ing editor |
| `content` | string | Ya | Markup blok sing diserialisasi (HTML) kanggo pola |
| `categories` | array | Ora | Slug kategori pola, contone `["featured", "hero"]` |
| `description` | string | Ora | Katrangan cekak sing ditampilake ing pamilih pola |
| `keywords` | array | Ora | Tembung kunci telusuran |

**Mbalekake** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Nampilake dhaptar kabeh pola blok sing didaftar dening agent.

**Parameter** — ora ana

**Mbalèkaké**

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

Nyetel logo situs WordPress dadi ID lampiran tartamtu utawa URL gambar remot. Nalika URL diwènèhaké, gambar bakal diundhuh lan diimpor menyang Media Library.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `attachment_id` | integer | Ora | ID saka lampiran Media Library sing wis ana |
| `url` | string | Ora | URL gambar remot kanggo diimpor lan disetel minangka logo |

Salah siji saka `attachment_id` utawa `url` kudu diwènèhaké.

**Mbalèkaké** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Ngetrapaké preset warna/tipografi sing dijenengi menyang `theme.json` (utawa `global-styles`) saka theme sing aktif. Preset iku bundel sing dikurasi lan dirumat déning tim Gratis AI Agent.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `preset` | string | Ya | Jeneng preset, contoné `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ora | Yen `true`, gabungaké karo nilai sing wis ana tinimbang ngganti. Gawané `false` |

**Preset sing kasedhiya**

| Preset | Katrangan |
|---|---|
| `minimal-dark` | Latar mburi meh ireng, teks putih, siji warna aksen |
| `warm-editorial` | Latar mburi putih anget, judhul serif, warna aksen alami |
| `corporate-blue` | Palet biru navy lan putih kanthi tipografi profesional |
| `vibrant-startup` | Gradien padhang, pojok mbunder, jinis huruf sans-serif modhèren |
| `classic-blog` | Werna abu-abu netral, line-height sing nyaman, spasi tata letak tradhisional |

**Mbalèkaké** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Kapabilitas Global Styles maca lan nulis nilai theme.json liwat WordPress Global Styles API, mengaruhi kabèh blok lan cithakan ing sakabehing situs.

### `get_global_styles` {#getglobalstyles}

Mbalèkaké konfigurasi gaya global saiki.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `path` | string | Ora | Pointer JSON menyang nilai tartamtu, contoné `/color/palette` utawa `/typography/fontSizes`. Mbalèkaké kabèh objek yen ora diwènèhaké. |

**Mbalèkaké** objek gaya global lengkap utawa nilai ing `path`.

---

### `set_global_styles` {#setglobalstyles}

Nganyari siji utawa luwih nilai ing konfigurasi gaya global.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `path` | string | Ya | Pointer JSON menyang nilai sing arep disetel, contoné `/color/palette` |
| `value` | any | Ya | Nilai anyar |

**Conto** — tambahaké warna menyang palet

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Mbalèkaké** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Ngreset kabèh owah-owahan gaya global sing ditrapaké agen, mulihaké gawané theme.

**Paramèter** — ora ana

**Mbalèkaké** `{ "success": true }`

---

## Menu Navigasi {#navigation-menus}

Kapabilitas Menu Navigasi nggawe lan ngatur menu nav WordPress lan item-itemé.

### `create_menu` {#createmenu}

Nggawe menu navigasi WordPress anyar.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `name` | string | Ya | Jeneng menu, contoné `Primary Navigation` |
| `location` | string | Ora | Lokasi theme kanggo masrahaké menu iki, contoné `primary` |

**Mbalèkaké** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Ngganti jeneng menu utawa masrahaké maneh menyang lokasi theme.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `menu_id` | integer | Ya | ID menu sing arep dianyari |
| `name` | string | Ora | Jeneng menu anyar |
| `location` | string | Ora | Lokasi theme kanggo masrahaké utawa masrahaké maneh |

**Mbalèkaké** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Nambahaké item menyang menu navigasi sing wis ana.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `menu_id` | integer | Ya | ID menu tujuan |
| `type` | string | Ya | Tipe item: `custom`, `post_type`, utawa `taxonomy` |
| `title` | string | Ora | Label kanggo item menu (dibutuhaké kanggo tipe `custom`) |
| `url` | string | Ora | URL kanggo item `custom` |
| `object_id` | integer | Ora | ID kiriman utawa ID istilah kanggo item `post_type`/`taxonomy` |
| `parent_id` | integer | Ora | ID item menu kanggo nyelehké item iki ing sangisoré |
| `position` | integer | Ora | Posisi adhedhasar nol ing menu |

**Mbalèkaké** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Mbusak item saka menu navigasi.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `item_id` | integer | Ya | ID item menu sing arep dibusak |

**Mbalèkaké** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Ndhaptar kabèh menu navigasi WordPress, kalebu lokasi theme sing wis dipasrahaké.

**Paramèter** — ora ana

**Mbalèkaké**

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

## Pangaturan Opsi {#options-management}

Kapabilitas opsi maca lan nulis opsi WordPress liwat `get_option` / `update_option`. Blocklist keamanan bawaan nyegah owah-owahan ora disengaja marang setelan kritis.

### `get_option` {#getoption}

Maca opsi WordPress.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `option_name` | string | Ya | Kunci opsi, contoné `blogname` |

**Mbalèkaké** `{ "option_name": "blogname", "value": "My Site" }`

Mbalèkaké kasalahan yen `option_name` ana ing blocklist keamanan.

---

### `set_option` {#setoption}

Nulis opsi WordPress.

**Paramèter**

| Paramèter | Tipe | Dibutuhaké | Katrangan |
|---|---|---|---|
| `option_name` | string | Ya | Kunci opsi |
| `value` | any | Ya | Nilai anyar (diserialisasi otomatis kanggo larik/objek) |
| `autoload` | string | Ora | `"yes"` utawa `"no"`. Gawané njaga setelan autoload sing wis ana |

Ngasilake kasalahan yen `option_name` ana ing safety blocklist.

**Ngasilake** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Mbusak opsi WordPress.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `option_name` | string | Ya | Kunci opsi sing arep dibusak |

Ngasilake kasalahan yen `option_name` ana ing safety blocklist.

**Ngasilake** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Nampilake dhaptar opsi WordPress sing cocog karo pola.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `pattern` | string | Ora | Pola SQL LIKE kanggo nyaring jeneng opsi, contoné `gratis_%`. Ngasilake kabèh opsi yen ora diwènèhaké (gunakna kanthi ngati-ati ing database gedhé). |
| `limit` | integer | Ora | Cacah asil maksimal. Gawané `50`, maksimal `500` |

**Ngasilake**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Pangaturan Kontèn {#content-management}

Kemampuan Pangaturan Kontèn nggawe lan nyunting kiriman lan kaca WordPress. ID kiriman dibalèkaké supaya langkah sabanjuré ing rencana multi-kemampuan bisa ngrujuk kontèn sing wis digawe.

### `create_post` {#createpost}

Nggawe kiriman WordPress anyar, kaca, utawa entri jinis kiriman kustom.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `title` | string | Ya | Judhul kiriman |
| `content` | string | Ora | Isi kiriman — nampa teks polos, HTML, utawa markup blok sing diserialisasi |
| `status` | string | Ora | `draft`, `publish`, `pending`, `private`. Gawané `draft` |
| `post_type` | string | Ora | Slug jinis kiriman, contoné `post`, `page`, utawa CPT kadhaptar apa wae. Gawané `post` |
| `excerpt` | string | Ora | Ringkesan cekak sing ditampilaké ing arsip lan asil panggolèkan |
| `categories` | array | Ora | Larik jeneng utawa ID kategori kanggo ditetepaké |
| `tags` | array | Ora | Larik jeneng utawa ID tag kanggo ditetepaké |
| `author` | integer | Ora | ID pangguna WordPress kanggo disetel minangka panulis kiriman. Gawané pangguna saiki |
| `date` | string | Ora | Tanggal publikasi nganggo format ISO 8601, contoné `2026-05-01T09:00:00` |
| `page_template` | string | Ora | Berkas template kanggo ditetepaké marang kiriman utawa kaca iki, contoné `page-full-width.php`. Mung ana tegesé nalika `post_type` yaiku `page` utawa CPT sing ndhukung template kaca. |

**Tuladha**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Ngasilake** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Nganyari kiriman utawa kaca WordPress sing wis ana.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `post_id` | integer | Ya | ID kiriman sing arep dianyari |
| `title` | string | Ora | Judhul kiriman anyar |
| `content` | string | Ora | Isi kiriman anyar |
| `status` | string | Ora | Status anyar: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ora | Petikan anyar |
| `categories` | array | Ora | Ganti dhaptar kategori lengkap nganggo larik jeneng utawa ID iki |
| `tags` | array | Ora | Ganti dhaptar tag lengkap nganggo larik jeneng utawa ID iki |
| `page_template` | string | Ora | Berkas template anyar kanggo ditetepaké marang kiriman utawa kaca iki, contoné `page-full-width.php`. Kirim string kosong kanggo mbusak penetapan template lan bali menyang gawan theme. |

**Tuladha** — ganti template sawisé digawe

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Ngasilake** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Nggawe pirang-pirang kiriman ing siji panggilan kemampuan, nyuda bolak-balik nalika pambangunan situs utawa impor kontèn massal. Kiriman digawe kanthi urutan; yen siji gagal, liyane tetep diterusaké lan kegagalané dilaporaké ing larik asil.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `posts` | array | Ya | Larik objek kiriman, sabené nampa paramèter sing padha karo `create_post` |
| `stop_on_error` | boolean | Ora | Yen `true`, mandheg ngolah sawisé kegagalan pisanan. Gawané `false` |

**Tuladha**

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

**Ngasilake**

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

Netepaké gambar unggulan (thumbnail kiriman) marang kiriman utawa kaca sing wis ana. Nampa ID lampiran Media Library sing wis ana utawa URL gambar adoh; nalika URL diwènèhaké, gambar diundhuh lan diimpor kanthi otomatis.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `post_id` | integer | Ya | ID kiriman utawa kaca sing arep dianyari |
| `attachment_id` | integer | Ora | ID lampiran Media Library sing wis ana |
| `url` | string | Ora | URL gambar adoh kanggo diimpor lan disetel minangka gambar unggulan |
| `alt_text` | string | Ora | Teks alt kanggo ditrapaké marang lampiran yen diimpor saka URL |

Salah siji saka `attachment_id` utawa `url` kudu diwènèhaké.

**Ngasilake** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Nggawe formulir kontak nganggo plugin formulir aktif (Contact Form 7, WPForms, Fluent Forms, utawa Gravity Forms, gumantung sing wis dipasang). Ngasilake shortcode sing bisa ditempelaké ing kiriman utawa kaca apa wae.

**Paramèter**

| Paramèter | Jinis | Wajib | Katrangan |
|---|---|---|---|
| `title` | string | Ya | Jeneng formulir sing ditampilaké ing admin plugin formulir |
| `fields` | array | Ya | Dhaptar kolom formulir kanthi urutan (delengen obyek Kolom ing ngisor iki) |
| `recipient` | string | Ora | Alamat email kanggo nampa kiriman. Gawané menyang email admin WordPress |
| `subject` | string | Ora | Baris subyek email. Ndhukung placeholder `[your-name]` lan `[your-subject]` nalika nganggo Contact Form 7 |
| `confirmation_message` | string | Ora | Pesen sing ditampilaké sawisé kiriman kasil. Gawan: `"Thank you for your message. We'll be in touch soon."` |

**Obyek kolom**

| Kunci | Jinis | Wajib | Katrangan |
|---|---|---|---|
| `name` | string | Ya | Jeneng kolom internal / kunci mesin |
| `label` | string | Ya | Label sing gampang diwaca manungsa sing ditampilaké ing formulir |
| `type` | string | Ya | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ora | Apa kolom iki kudu diisi sadurungé dikirim. Gawan `false` |
| `options` | array | Ora | Opsi kanggo kolom `select`, `checkbox`, lan `radio` |
| `placeholder` | string | Ora | Teks placeholder kanggo input jinis teks |

**Tuladha**

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

**Ngasilaké**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Tinjauan Visual {#visual-review}

Kabisan Tinjauan Visual ngidini agen njupuk screenshot saka kaca langsung lan nganalisis, supaya bisa nindakake tinjauan desain otonom, pambandhingan sadurungé/sawisé, lan pamriksa regresi visual tanpa mbutuhaké ekstensi browser apa wae.

### `capture_screenshot` {#capturescreenshot}

Njupuk screenshot saka kaca WordPress ing URL tartamtu nganggo browser headless sisih server. Gambar disimpen menyang Media Library lan URL CDN dibalèkaké.

**Paramèter**

| Paramèter | Jinis | Wajib | Katrangan |
|---|---|---|---|
| `url` | string | Ya | URL lengkap saka kaca sing arep dijupuk screenshot, contoné `https://example.com/about/` |
| `width` | integer | Ora | Ambané viewport ing piksel. Gawan `1280` |
| `height` | integer | Ora | Dhuwuré viewport ing piksel. Gawan `800` |
| `full_page` | boolean | Ora | Njupuk kabèh kaca sing bisa digulung tinimbang mung viewport. Gawan `false` |
| `delay_ms` | integer | Ora | Milidetik kanggo ngentèni sawisé kaca dimuat sadurungé njupuk, migunani kanggo kontèn animasi. Gawan `500` |
| `label` | string | Ora | Label sing gampang diwaca manungsa sing disimpen bareng lampiran ing Media Library |

**Ngasilaké**

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

Njupuk loro screenshot lan ngasilaké skor béda visual plus gambar béda sing nyorot wilayah sing owah. Migunani kanggo mesthèkaké yèn owah-owahan desain ngasilaké asil sing diarepaké utawa kanggo ndeteksi regresi sing ora disengaja.

**Paramèter**

| Paramèter | Jinis | Wajib | Katrangan |
|---|---|---|---|
| `before_url` | string | Ya | URL kaca sing dijupuk minangka kahanan "sadurungé" |
| `after_url` | string | Ya | URL kaca sing dijupuk minangka kahanan "sawisé". Bisa URL sing padha yèn mbandhingaké liwat wektu |
| `width` | integer | Ora | Ambané viewport kanggo loro-loroné tangkapan. Gawan `1280` |
| `threshold` | float | Ora | Ambang béda piksel (0.0–1.0). Piksel ing sajroning toleransi iki dianggep ora owah. Gawan `0.1` |

**Ngasilaké**

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

`diff_score` `0.0` tegesé ora ana owah-owahan sing katon; `1.0` tegesé saben piksel owah.

---

### `review_page_design` {#reviewpagedesign}

Njupuk screenshot saka kaca lan ngirimaké menyang model basa kanggo analisis visual. Ngasilaké pambiji terstruktur sing nyakup tata letak, tipografi, panggunaan werna, lan prakara aksesibilitas.

**Paramèter**

| Paramèter | Jinis | Wajib | Katrangan |
|---|---|---|---|
| `url` | string | Ya | URL lengkap saka kaca sing arep ditinjau |
| `focus` | string | Ora | Dhaptar area tinjauan sing dipisahaké nganggo koma kanggo ditekanaké: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Gawan: kabèh area |
| `width` | integer | Ora | Ambané viewport. Gawan `1280` |

**Ngasilaké**

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

## Kabisan Sing Bisa Diinstal {#installable-abilities}

Registry Kabisan Sing Bisa Diinstal ngidini sampeyan ngembangaké agen nganggo paket kabisan tambahan sing disebaraké minangka plugin WordPress. Saben paket ndhaptaraké siji utawa luwih kabisan nganggo API kabisan standar.

### `list_available_abilities` {#listavailableabilities}

Ngasilaké katalog paket kabisan sing kasedhiya kanggo diinstal saka registry.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `category` | string | Ora | Saring miturut kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ngasilake**

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

Ngundhuh lan ngaktifake paket kemampuan saka registri.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `slug` | string | Ya | Slug pangimbuh paket kemampuan |

**Ngasilake** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Nakokake registri kemampuan kanggo nemokake pangimbuh paling apik kanggo kasus panggunaan sing dijlentrehake lan, menawa dipilih, masang iku.

**Paramèter**

| Paramèter | Jinis | Dibutuhake | Katrangan |
|---|---|---|---|
| `description` | string | Ya | Katrangan basa alami bab fungsionalitas sing dikarepake |
| `install` | boolean | Ora | Yen `true`, masang pangimbuh sing disaranake langsung. Gawané `false` |

**Tuladha**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Ngasilake**

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
