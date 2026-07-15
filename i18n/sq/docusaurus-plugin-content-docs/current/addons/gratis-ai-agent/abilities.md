---
title: Referenca e aftësive
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenca e Aftësive

Aftësitë janë veprimet atomike që Gratis AI Agent mund të thërrasë në instalimin tuaj WordPress. Çdo aftësi është një klasë PHP e regjistruar që ekspozon një skemë JSON — agjenti e lexon këtë skemë gjatë ekzekutimit për të kuptuar cilët parametra kërkohen dhe çfarë kthen aftësia.

Kjo faqe dokumenton të gjitha aftësitë që vijnë me Gratis AI Agent v1.9.0.

---

## Llojet e Personalizuara të Postimeve {#custom-post-types}

Këto aftësi menaxhojnë llojet e personalizuara të postimeve (CPT) të regjistruara përmes agjentit. Regjistrimet ruhen në tabelën e opsioneve të WordPress, në mënyrë që të mbijetojnë çaktivizimin dhe riaktivizimin e plugin-it.

### `register_post_type` {#registerposttype}

Regjistron një lloj të ri të personalizuar postimi.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Çelësi i llojit të postimit (maksimumi 20 karaktere, pa shkronja të mëdha, pa hapësira) |
| `singular_label` | string | Yes | Emër njëjës i lexueshëm nga njeriu, p.sh. `Portfolio Item` |
| `plural_label` | string | Yes | Emër shumës i lexueshëm nga njeriu, p.sh. `Portfolio Items` |
| `public` | boolean | No | Nëse lloji i postimit është i aksesueshëm publikisht. Parazgjedhja `true` |
| `supports` | array | No | Veçori për t'u mbështetur: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Parazgjedhja `["title","editor"]` |
| `has_archive` | boolean | No | Nëse është aktivizuar një faqe arkivi për llojin e postimit. Parazgjedhja `false` |
| `menu_icon` | string | No | Klasë Dashicons ose URL për ikonën e menusë së administrimit. Parazgjedhja `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug për llojin e postimit. Parazgjedhet si `slug` |

**Shembull**

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

**Kthen** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Kthen të gjitha llojet e personalizuara të postimeve të regjistruara nga agjenti.

**Parametrat** — asnjë

**Kthen**

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

Çregjistron një lloj të personalizuar postimi të regjistruar më parë nga agjenti. Postimet ekzistuese të atij lloji mbeten në bazën e të dhënave, por nuk janë më të aksesueshme përmes llojit të postimit.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Çelësi i llojit të postimit për t'u hequr |

**Kthen** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomitë e Personalizuara {#custom-taxonomies}

Këto aftësi menaxhojnë taksonomitë e personalizuara. Ashtu si CPT-të, regjistrimet e taksonomive ruhen.

### `register_taxonomy` {#registertaxonomy}

Regjistron një taksonomi të re të personalizuar.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Çelësi i taksonomisë (maksimumi 32 karaktere) |
| `singular_label` | string | Yes | Emër njëjës i lexueshëm nga njeriu, p.sh. `Project Category` |
| `plural_label` | string | Yes | Emër shumës i lexueshëm nga njeriu, p.sh. `Project Categories` |
| `post_types` | array | Yes | Slug-et e llojit të postimit ku duhet të bashkëngjitet kjo taksonomi |
| `hierarchical` | boolean | No | `true` për stil kategorish, `false` për stil etiketash. Parazgjedhja `true` |
| `public` | boolean | No | Nëse termat janë të aksesueshëm publikisht. Parazgjedhja `true` |
| `rewrite_slug` | string | No | URL slug për taksonominë. Parazgjedhet si `slug` |

**Shembull**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Kthen** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Kthen të gjitha taksonomitë e personalizuara të regjistruara nga agjenti.

**Parametrat** — asnjë

**Kthen**

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

Çregjistron një taksonomi të personalizuar të regjistruar më parë nga agjenti.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Çelësi i taksonomisë për t'u hequr |

**Kthen** `{ "success": true, "slug": "project-category" }`

---

## Sistemi i Dizajnit {#design-system}

Aftësitë e sistemit të dizajnit modifikojnë paraqitjen vizuale të faqes WordPress — nga CSS e personalizuar te modelet e blloqeve dhe logoja e faqes.

### `inject_custom_css` {#injectcustomcss}

Shton CSS në `<head>` të faqes përmes `wp_add_inline_style`. CSS ruhet në opsionin `gratis_ai_agent_custom_css` dhe hiqet nga radha pastër kur aftësia rivendoset.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS e vlefshme për t'u injektuar |
| `label` | string | No | Etiketë e lexueshme nga njeriu për këtë bllok CSS, e përdorur në regjistrat e debug. Parazgjedhja `"agent-injected"` |
| `replace` | boolean | No | Nëse `true`, zëvendëson të gjithë CSS-in e injektuar më parë. Parazgjedhja `false` (shtohet në fund) |

**Shembull**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Kthen** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Regjistron një model blloku të ripërdorshëm në bibliotekën e modeleve të WordPress.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Identifikues modeli, p.sh. `gratis/hero-dark` |
| `title` | string | Yes | Emër modeli i lexueshëm nga njeriu që shfaqet në editor |
| `content` | string | Yes | Markup blloku i serializuar (HTML) për modelin |
| `categories` | array | No | Slug-e kategorish modeli, p.sh. `["featured", "hero"]` |
| `description` | string | No | Përshkrim i shkurtër që shfaqet në zgjedhësin e modeleve |
| `keywords` | array | No | Fjalë kyçe kërkimi |

**Kthen** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Liston të gjitha modelet e blloqeve të regjistruara nga agjenti.

**Parametrat** — asnjë

**Kthen**

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

Vendos logon e faqes WordPress në një ID bashkëngjitjeje të dhënë ose në një URL imazhi në distancë. Kur jepet një URL, imazhi shkarkohet dhe importohet në Media Library.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `attachment_id` | integer | Jo | ID e një bashkëngjitjeje ekzistuese në Media Library |
| `url` | string | Jo | URL imazhi në distancë për ta importuar dhe vendosur si logo |

Duhet të jepet një nga `attachment_id` ose `url`.

**Kthen** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Zbaton një preset të emërtuar ngjyrash/tipografie në `theme.json` të temës aktive (ose `global-styles`). Preset-et janë paketa të kuruara që mirëmbahen nga ekipi i Gratis AI Agent.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `preset` | string | Po | Emri i preset-it, p.sh. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Jo | Nëse `true`, bashkoje me vlerat ekzistuese në vend që t’i zëvendësosh. Parazgjedhja `false` |

**Preset-et e disponueshme**

| Preset | Përshkrimi |
|---|---|
| `minimal-dark` | Sfond pothuajse i zi, tekst i bardhë, një ngjyrë e vetme theksuese |
| `warm-editorial` | Sfond i ngrohtë jo krejt i bardhë, tituj me serif, ngjyra theksuese tokësore |
| `corporate-blue` | Paletë blu e errët dhe e bardhë me tipografi profesionale |
| `vibrant-startup` | Gradiente të ndritshme, cepa të rrumbullakosur, lloj modern sans-serif |
| `classic-blog` | Gri neutrale, lartësi rreshti e rehatshme, hapësira tradicionale të paraqitjes |

**Kthen** `{ "success": true, "preset": "minimal-dark" }`

---

## Stilet globale {#global-styles}

Aftësitë e Stileve globale lexojnë dhe shkruajnë vlera theme.json përmes WordPress Global Styles API, duke ndikuar në të gjitha blloqet dhe shabllonet në të gjithë faqen.

### `get_global_styles` {#getglobalstyles}

Kthen konfigurimin aktual të stileve globale.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `path` | string | Jo | Tregues JSON për një vlerë specifike, p.sh. `/color/palette` ose `/typography/fontSizes`. Kthen të gjithë objektin nëse lihet jashtë. |

**Kthen** objektin e plotë të stileve globale ose vlerën te `path`.

---

### `set_global_styles` {#setglobalstyles}

Përditëson një ose më shumë vlera në konfigurimin e stileve globale.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `path` | string | Po | Tregues JSON për vlerën që do të vendoset, p.sh. `/color/palette` |
| `value` | any | Po | Vlera e re |

**Shembull** — shto një ngjyrë në paletë

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Kthen** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Rivendos të gjitha ndryshimet e stileve globale të zbatuara nga agenti, duke rikthyer parazgjedhjet e temës.

**Parametrat** — asnjë

**Kthen** `{ "success": true }`

---

## Menutë e navigimit {#navigation-menus}

Aftësitë e Menuve të navigimit krijojnë dhe menaxhojnë menutë nav të WordPress dhe elementët e tyre.

### `create_menu` {#createmenu}

Krijon një menu të re navigimi WordPress.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `name` | string | Po | Emri i menusë, p.sh. `Primary Navigation` |
| `location` | string | Jo | Vendndodhja e temës ku do t’i caktohet kjo menu, p.sh. `primary` |

**Kthen** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Riemërton një menu ose e ricakton në një vendndodhje teme.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `menu_id` | integer | Po | ID e menusë që do të përditësohet |
| `name` | string | Jo | Emri i ri i menusë |
| `location` | string | Jo | Vendndodhja e temës ku do të caktohet ose ricaktohet |

**Kthen** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Shton një element në një menu ekzistuese navigimi.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `menu_id` | integer | Po | ID e menusë së synuar |
| `type` | string | Po | Lloji i elementit: `custom`, `post_type`, ose `taxonomy` |
| `title` | string | Jo | Etiketa për elementin e menusë (e detyrueshme për llojin `custom`) |
| `url` | string | Jo | URL për elementët `custom` |
| `object_id` | integer | Jo | ID postimi ose ID termi për elementët `post_type`/`taxonomy` |
| `parent_id` | integer | Jo | ID e elementit të menusë nën të cilin do të vendoset ky element |
| `position` | integer | Jo | Pozicioni në menu me bazë zero |

**Kthen** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Heq një element nga një menu navigimi.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `item_id` | integer | Po | ID e elementit të menusë që do të hiqet |

**Kthen** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Liston të gjitha menutë e navigimit WordPress, përfshirë vendndodhjet e temës që u janë caktuar.

**Parametrat** — asnjë

**Kthen**

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

## Menaxhimi i opsioneve {#options-management}

Aftësitë e opsioneve lexojnë dhe shkruajnë opsione WordPress përmes `get_option` / `update_option`. Një listë bllokimi e integruar për siguri parandalon modifikimin aksidental të cilësimeve kritike.

### `get_option` {#getoption}

Lexon një opsion WordPress.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `option_name` | string | Po | Çelësi i opsionit, p.sh. `blogname` |

**Kthen** `{ "option_name": "blogname", "value": "My Site" }`

Kthen një gabim nëse `option_name` është në listën e bllokimit të sigurisë.

---

### `set_option` {#setoption}

Shkruan një opsion WordPress.

**Parametrat**

| Parametri | Lloji | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `option_name` | string | Po | Çelësi i opsionit |
| `value` | any | Po | Vlera e re (serializohet automatikisht për vargje/objekte) |
| `autoload` | string | Jo | `"yes"` ose `"no"`. Parazgjedhja ruan cilësimin ekzistues të autoload |

Kthen një gabim nëse `option_name` është në listën bllokuese të sigurisë.

**Kthen** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Fshin një opsion WordPress.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `option_name` | string | Po | Çelësi i opsionit për t’u fshirë |

Kthen një gabim nëse `option_name` është në listën bllokuese të sigurisë.

**Kthen** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Liston opsionet WordPress që përputhen me një model.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `pattern` | string | Jo | Model SQL LIKE për të filtruar emrat e opsioneve, p.sh. `gratis_%`. Kthen të gjitha opsionet nëse lihet bosh (përdoreni me kujdes në baza të mëdha të dhënash). |
| `limit` | integer | Jo | Numri maksimal i rezultateve. Parazgjedhja `50`, maksimumi `500` |

**Kthen**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Menaxhimi i përmbajtjes {#content-management}

Aftësitë e Menaxhimit të përmbajtjes krijojnë dhe redaktojnë postime dhe faqe WordPress. ID-të e postimeve kthehen që hapat pasues në plane me shumë aftësi të mund t’i referohen përmbajtjes së krijuar.

### `create_post` {#createpost}

Krijon një postim, faqe ose hyrje të tipit të personalizuar të postimit në WordPress.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `title` | string | Po | Titulli i postimit |
| `content` | string | Jo | Trupi i postimit — pranon tekst të thjeshtë, HTML, ose markup blloku të serializuar |
| `status` | string | Jo | `draft`, `publish`, `pending`, `private`. Parazgjedhja `draft` |
| `post_type` | string | Jo | Slug i tipit të postimit, p.sh. `post`, `page`, ose çdo CPT i regjistruar. Parazgjedhja `post` |
| `excerpt` | string | Jo | Përmbledhje e shkurtër e shfaqur në arkiva dhe rezultatet e kërkimit |
| `categories` | array | Jo | Varg emrash ose ID-sh kategorish për t’u caktuar |
| `tags` | array | Jo | Varg emrash ose ID-sh etiketash për t’u caktuar |
| `author` | integer | Jo | ID e përdoruesit WordPress për ta vendosur si autor të postimit. Parazgjedhja është përdoruesi aktual |
| `date` | string | Jo | Data e publikimit në format ISO 8601, p.sh. `2026-05-01T09:00:00` |
| `page_template` | string | Jo | Skedari i shabllonit për t’ia caktuar këtij postimi ose kësaj faqeje, p.sh. `page-full-width.php`. Ka kuptim vetëm kur `post_type` është `page` ose një CPT që mbështet shabllone faqesh. |

**Shembull**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Kthen** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Përditëson një postim ose faqe ekzistuese WordPress.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `post_id` | integer | Po | ID e postimit që do të përditësohet |
| `title` | string | Jo | Titulli i ri i postimit |
| `content` | string | Jo | Trupi i ri i postimit |
| `status` | string | Jo | Statusi i ri: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Jo | Përmbledhje e re |
| `categories` | array | Jo | Zëvendësoni listën e plotë të kategorive me këtë varg emrash ose ID-sh |
| `tags` | array | Jo | Zëvendësoni listën e plotë të etiketave me këtë varg emrash ose ID-sh |
| `page_template` | string | Jo | Skedari i ri i shabllonit për t’ia caktuar këtij postimi ose kësaj faqeje, p.sh. `page-full-width.php`. Kaloni një varg bosh për të hequr caktimin e shabllonit dhe për t’u kthyer te parazgjedhja e theme. |

**Shembull** — ndryshoni shabllonin pas krijimit

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Kthen** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Krijon shumë postime në një thirrje të vetme aftësie, duke reduktuar vajtje-ardhjet gjatë ndërtimit të site ose importimit masiv të përmbajtjes. Postimet krijohen me radhë; nëse njëri dështon, të tjerët vazhdojnë dhe dështimi raportohet në vargun e rezultateve.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `posts` | array | Po | Varg objektesh postimi, ku secili pranon të njëjtët parametra si `create_post` |
| `stop_on_error` | boolean | Jo | Nëse `true`, ndaloni përpunimin pas dështimit të parë. Parazgjedhja `false` |

**Shembull**

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

**Kthen**

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

Cakton një imazh të veçuar (miniaturë postimi) për një postim ose faqe ekzistuese. Pranon një ID bashkëngjitjeje ekzistuese të Media Library ose një URL imazhi të largët; kur jepet një URL, imazhi shkarkohet dhe importohet automatikisht.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `post_id` | integer | Po | ID e postimit ose faqes që do të përditësohet |
| `attachment_id` | integer | Jo | ID e një bashkëngjitjeje ekzistuese të Media Library |
| `url` | string | Jo | URL imazhi i largët për t’u importuar dhe vendosur si imazh i veçuar |
| `alt_text` | string | Jo | Tekst alt për t’iu aplikuar bashkëngjitjes nëse importohet nga një URL |

Duhet të jepet një nga `attachment_id` ose `url`.

**Kthen** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Krijon një formular kontakti duke përdorur plugin-in aktiv të formularëve (Contact Form 7, WPForms, Fluent Forms, ose Gravity Forms, në varësi të atij që është instaluar). Kthen një shortcode që mund të futet në çdo postim ose faqe.

**Parametrat**

| Parametër | Lloji | I detyrueshëm | Përshkrim |
|---|---|---|---|
| `title` | string | Po | Emri i formularit i shfaqur në admin-in e plugin-it të formularit |
| `fields` | array | Po | Listë e renditur e fushave të formularit (shih objektin Field më poshtë) |
| `recipient` | string | Jo | Adresa e email-it për të marrë dërgesat. Si parazgjedhje përdor email-in e admin-it të WordPress |
| `subject` | string | Jo | Rreshti i subjektit të email-it. Mbështet placeholder-at `[your-name]` dhe `[your-subject]` kur përdoret Contact Form 7 |
| `confirmation_message` | string | Jo | Mesazhi i shfaqur pas një dërgese të suksesshme. Parazgjedhje: `"Thank you for your message. We'll be in touch soon."` |

**Objekti Field**

| Kyç | Lloji | I detyrueshëm | Përshkrim |
|---|---|---|---|
| `name` | string | Po | Emri i brendshëm i fushës / kyçi i makinës |
| `label` | string | Po | Etiketa e lexueshme për njerëzit që shfaqet në formular |
| `type` | string | Po | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Jo | Nëse fusha duhet të plotësohet para dërgimit. Parazgjedhje `false` |
| `options` | array | Jo | Opsione për fushat `select`, `checkbox` dhe `radio` |
| `placeholder` | string | Jo | Teksti placeholder për input-et e tipit tekst |

**Shembull**

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

**Kthen**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Rishikim Vizual {#visual-review}

Aftësitë e Rishikimit Vizual i lejojnë agjentit të kapë pamje ekrani të faqeve live dhe t’i analizojë ato, duke mundësuar rishikim autonom të dizajnit, krahasime para/pas dhe kontrolle të regresionit vizual pa kërkuar ndonjë zgjerim të shfletuesit.

### `capture_screenshot` {#capturescreenshot}

Kap një pamje ekrani të një faqeje WordPress në një URL të caktuar duke përdorur një shfletues headless në anën e serverit. Imazhi ruhet në Media Library dhe kthehet një URL CDN.

**Parametrat**

| Parametër | Lloji | I detyrueshëm | Përshkrim |
|---|---|---|---|
| `url` | string | Po | URL e plotë e faqes për t’i bërë pamje ekrani, p.sh. `https://example.com/about/` |
| `width` | integer | Jo | Gjerësia e viewport-it në pikselë. Parazgjedhje `1280` |
| `height` | integer | Jo | Lartësia e viewport-it në pikselë. Parazgjedhje `800` |
| `full_page` | boolean | Jo | Kap faqen e plotë të lëvizshme në vend të vetëm viewport-it. Parazgjedhje `false` |
| `delay_ms` | integer | Jo | Milisekonda për të pritur pas ngarkimit të faqes para kapjes, e dobishme për përmbajtje të animuar. Parazgjedhje `500` |
| `label` | string | Jo | Etiketë e lexueshme për njerëzit e ruajtur me bashkëngjitjen në Media Library |

**Kthen**

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

Merr dy pamje ekrani dhe kthen një rezultat dallimi vizual plus një imazh dallimi që thekson zonat e ndryshuara. E dobishme për të konfirmuar se një ndryshim dizajni prodhoi rezultatin e pritur ose për të zbuluar regresione të paqëllimshme.

**Parametrat**

| Parametër | Lloji | I detyrueshëm | Përshkrim |
|---|---|---|---|
| `before_url` | string | Po | URL e faqes për t’u kapur si gjendja "para" |
| `after_url` | string | Po | URL e faqes për t’u kapur si gjendja "pas". Mund të jetë e njëjta URL nëse krahasohet përgjatë kohës |
| `width` | integer | Jo | Gjerësia e viewport-it për të dy kapjet. Parazgjedhje `1280` |
| `threshold` | float | Jo | Pragu i dallimit të pikselëve (0.0–1.0). Pikselët brenda kësaj tolerance konsiderohen të pandryshuar. Parazgjedhje `0.1` |

**Kthen**

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

Një `diff_score` prej `0.0` do të thotë pa ndryshim të dukshëm; `1.0` do të thotë se çdo piksel ka ndryshuar.

---

### `review_page_design` {#reviewpagedesign}

Kap një pamje ekrani të një faqeje dhe ia dërgon modelit gjuhësor për analizë vizuale. Kthen një vlerësim të strukturuar që mbulon strukturën, tipografinë, përdorimin e ngjyrave dhe shqetësimet e aksesueshmërisë.

**Parametrat**

| Parametër | Lloji | I detyrueshëm | Përshkrim |
|---|---|---|---|
| `url` | string | Po | URL e plotë e faqes për t’u rishikuar |
| `focus` | string | Jo | Listë e ndarë me presje e zonave të rishikimit për t’u theksuar: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Parazgjedhje: të gjitha zonat |
| `width` | integer | Jo | Gjerësia e viewport-it. Parazgjedhje `1280` |

**Kthen**

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

## Aftësi të Instalueshme {#installable-abilities}

Regjistri i Aftësive të Instalueshme ju lejon ta zgjeroni agjentin me paketa shtesë aftësish të shpërndara si plugin-e WordPress. Çdo paketë regjistron një ose më shumë aftësi duke përdorur API-në standarde të aftësive.

### `list_available_abilities` {#listavailableabilities}

Kthen katalogun e paketave të aftësive të disponueshme për instalim nga regjistri.

**Parametrat**

| Parametri | Lloji | I detyrueshëm | Përshkrimi |
|---|---|---|---|
| `category` | string | Jo | Filtro sipas kategorisë: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Kthen**

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

Shkarkon dhe aktivizon një paketë aftësish nga regjistri.

**Parametrat**

| Parametri | Lloji | I detyrueshëm | Përshkrimi |
|---|---|---|---|
| `slug` | string | Po | Slug i plugin-it të paketës së aftësive |

**Kthen** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Pyet regjistrin e aftësive për të gjetur plugin-in më të mirë për një rast përdorimi të përshkruar dhe, sipas dëshirës, e instalon atë.

**Parametrat**

| Parametri | Lloji | I detyrueshëm | Përshkrimi |
|---|---|---|---|
| `description` | string | Po | Përshkrim në gjuhë natyrore i funksionalitetit të dëshiruar |
| `install` | boolean | Jo | Nëse `true`, instalon menjëherë plugin-in e rekomanduar. Parazgjedhja `false` |

**Shembull**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Kthen**

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
