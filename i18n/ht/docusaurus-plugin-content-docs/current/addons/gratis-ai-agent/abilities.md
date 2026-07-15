---
title: Referans Kapasite yo
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referans Kapasite yo

Kapasite yo se aksyon atomik Gratis AI Agent ka envoke sou enstalasyon WordPress ou a. Chak kapasite se yon klas PHP ki anrejistre epi ki ekspoze yon chema JSON — ajan an li chema sa a pandan ekzekisyon pou konprann ki paramèt ki obligatwa ak sa kapasite a retounen.

Paj sa a dokimante tout kapasite ki vini ak Gratis AI Agent v1.9.0.

---

## Kalite Pòs Pèsonalize {#custom-post-types}

Kapasite sa yo jere kalite pòs pèsonalize (CPTs) ki anrejistre atravè ajan an. Anrejistreman yo konsève nan tablo opsyon WordPress la pou yo kontinye egziste apre dezaktivasyon ak reyaktivasyon plugin lan.

### `register_post_type` {#registerposttype}

Anrejistre yon nouvo kalite pòs pèsonalize.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kle kalite pòs la (maksimòm 20 karaktè, pa gen majiskil, pa gen espas) |
| `singular_label` | string | Yes | Non sengilye moun ka li, pa egzanp `Portfolio Item` |
| `plural_label` | string | Yes | Non pliryèl moun ka li, pa egzanp `Portfolio Items` |
| `public` | boolean | No | Si kalite pòs la aksesib piblikman. Default `true` |
| `supports` | array | No | Fonksyonalite pou sipòte: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Si yon paj achiv pou kalite pòs la aktive. Default `false` |
| `menu_icon` | string | No | Klas Dashicons oswa URL pou ikòn meni admin nan. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug pou kalite pòs la. Pa default li pran `slug` |

**Egzanp**

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

**Retounen** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Retounen tout kalite pòs pèsonalize ajan an anrejistre.

**Paramèt** — okenn

**Retounen**

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

Dezanrejistre yon kalite pòs pèsonalize ajan an te anrejistre anvan. Pòs ki deja egziste nan kalite sa a rete nan baz done a men yo pa aksesib ankò atravè kalite pòs la.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kle kalite pòs la pou retire |

**Retounen** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomi Pèsonalize {#custom-taxonomies}

Kapasite sa yo jere taksonomi pèsonalize. Menm jan ak CPTs, anrejistreman taksonomi yo konsève.

### `register_taxonomy` {#registertaxonomy}

Anrejistre yon nouvo taksonomi pèsonalize.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kle taksonomi a (maksimòm 32 karaktè) |
| `singular_label` | string | Yes | Non sengilye moun ka li, pa egzanp `Project Category` |
| `plural_label` | string | Yes | Non pliryèl moun ka li, pa egzanp `Project Categories` |
| `post_types` | array | Yes | Slug kalite pòs taksonomi sa a dwe atache ak yo |
| `hierarchical` | boolean | No | `true` pou estil kategori, `false` pou estil tag. Default `true` |
| `public` | boolean | No | Si tèm yo aksesib piblikman. Default `true` |
| `rewrite_slug` | string | No | URL slug pou taksonomi a. Pa default li pran `slug` |

**Egzanp**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Retounen** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Retounen tout taksonomi pèsonalize ajan an anrejistre.

**Paramèt** — okenn

**Retounen**

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

Dezanrejistre yon taksonomi pèsonalize ajan an te anrejistre anvan.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kle taksonomi a pou retire |

**Retounen** `{ "success": true, "slug": "project-category" }`

---

## Sistèm Konsepsyon {#design-system}

Kapasite sistèm konsepsyon yo modifye prezantasyon vizyèl sit WordPress la — soti nan CSS pèsonalize rive nan modèl blòk ak logo sit la.

### `inject_custom_css` {#injectcustomcss}

Ajoute CSS nan `<head>` sit la atravè `wp_add_inline_style`. CSS la estoke nan opsyon `gratis_ai_agent_custom_css` epi yo retire li pwòpman nan keu lè kapasite a reset.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS valid pou enjekte |
| `label` | string | No | Etikèt moun ka li pou blòk CSS sa a, yo itilize nan jounal debogaj. Default `"agent-injected"` |
| `replace` | boolean | No | Si `true`, ranplase tout CSS ki te deja enjekte. Default `false` (ajoute nan fen) |

**Egzanp**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Retounen** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Anrejistre yon modèl blòk ki ka reyitilize nan bibliyotèk modèl WordPress la.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Idantifyan modèl, pa egzanp `gratis/hero-dark` |
| `title` | string | Yes | Non modèl moun ka li ki parèt nan editè a |
| `content` | string | Yes | Makè blòk serialize (HTML) pou modèl la |
| `categories` | array | No | Slug kategori modèl, pa egzanp `["featured", "hero"]` |
| `description` | string | No | Deskripsyon kout ki parèt nan selektè modèl la |
| `keywords` | array | No | Mo kle rechèch |

**Retounen** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Fè lis tout modèl blòk ajan an anrejistre.

**Paramèt** — okenn

**Retounen**

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

Mete logo sit WordPress la sou yon ID atachman yo bay oswa yon URL imaj aleka. Lè yo bay yon URL, yo telechaje imaj la epi yo enpòte li nan Bibliyotèk Medya a.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `attachment_id` | integer | Non | ID yon atachman Bibliyotèk Medya ki deja egziste |
| `url` | string | Non | URL imaj aleka pou enpòte epi mete kòm logo a |

Youn nan `attachment_id` oswa `url` dwe bay.

**Retounen** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aplike yon preset koulè/tipografi ki gen non sou `theme.json` tèm aktif la (oswa `global-styles`). Preset yo se pake byen chwazi ekip Gratis AI Agent la kenbe.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `preset` | string | Wi | Non preset, pa egzanp `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Non | Si `true`, fizyone ak valè ki deja egziste olye pou ranplase yo. Defo `false` |

**Preset ki disponib**

| Preset | Deskripsyon |
|---|---|
| `minimal-dark` | Fon prèske nwa, tèks blan, yon sèl koulè aksan |
| `warm-editorial` | Fon blan kase cho, tit serif, koulè aksan tè |
| `corporate-blue` | Palèt ble maren ak blan ak tipografi pwofesyonèl |
| `vibrant-startup` | Gradyan klere, kwen awondi, tip sans-serif modèn |
| `classic-blog` | Gri net, wotè liy konfòtab, espasman layout tradisyonèl |

**Retounen** `{ "success": true, "preset": "minimal-dark" }`

---

## Estil Global {#global-styles}

Kapasite Estil Global yo li epi ekri valè theme.json atravè WordPress Global Styles API a, sa ki afekte tout blòk ak modèl sou tout sit la.

### `get_global_styles` {#getglobalstyles}

Retounen konfigirasyon estil global aktyèl la.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `path` | string | Non | Pwentè JSON pou yon valè espesifik, pa egzanp `/color/palette` oswa `/typography/fontSizes`. Retounen tout objè a si li omèt. |

**Retounen** objè estil global konplè a oswa valè ki nan `path`.

---

### `set_global_styles` {#setglobalstyles}

Mete ajou youn oswa plis valè nan konfigirasyon estil global la.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `path` | string | Wi | Pwentè JSON pou valè pou mete a, pa egzanp `/color/palette` |
| `value` | any | Wi | Nouvo valè a |

**Egzanp** — ajoute yon koulè nan palèt la

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Retounen** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Reyinisyalize tout chanjman estil global ajan an te aplike yo, epi retabli defo tèm nan.

**Paramèt** — okenn

**Retounen** `{ "success": true }`

---

## Meni Navigasyon {#navigation-menus}

Kapasite Meni Navigasyon yo kreye epi jere meni navigasyon WordPress ak atik yo.

### `create_menu` {#createmenu}

Kreye yon nouvo meni navigasyon WordPress.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `name` | string | Wi | Non meni, pa egzanp `Primary Navigation` |
| `location` | string | Non | Kote tèm nan pou asiyen meni sa a, pa egzanp `primary` |

**Retounen** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Chanje non yon meni oswa reasiyen li nan yon kote tèm.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `menu_id` | integer | Wi | ID meni pou mete ajou a |
| `name` | string | Non | Nouvo non meni |
| `location` | string | Non | Kote tèm nan pou asiyen oswa reasiyen |

**Retounen** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Ajoute yon atik nan yon meni navigasyon ki deja egziste.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `menu_id` | integer | Wi | ID meni sib la |
| `type` | string | Wi | Tip atik: `custom`, `post_type`, oswa `taxonomy` |
| `title` | string | Non | Etikèt pou atik meni an (obligatwa pou tip `custom`) |
| `url` | string | Non | URL pou atik `custom` yo |
| `object_id` | integer | Non | ID pòs oswa ID tèm pou atik `post_type`/`taxonomy` yo |
| `parent_id` | integer | Non | ID atik meni pou mete atik sa a anba li |
| `position` | integer | Non | Pozisyon ki baze sou zewo nan meni an |

**Retounen** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Retire yon atik nan yon meni navigasyon.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `item_id` | integer | Wi | ID atik meni pou retire |

**Retounen** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Lis tout meni navigasyon WordPress, ansanm ak kote tèm yo asiyen yo.

**Paramèt** — okenn

**Retounen**

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

## Jesyon Opsyon {#options-management}

Kapasite opsyon yo li epi ekri opsyon WordPress atravè `get_option` / `update_option`. Yon blocklist sekirite entegre anpeche modifikasyon aksidantèl paramèt kritik yo.

### `get_option` {#getoption}

Li yon opsyon WordPress.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `option_name` | string | Wi | Kle opsyon an, pa egzanp `blogname` |

**Retounen** `{ "option_name": "blogname", "value": "My Site" }`

Retounen yon erè si `option_name` sou blocklist sekirite a.

---

### `set_option` {#setoption}

Ekri yon opsyon WordPress.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `option_name` | string | Wi | Kle opsyon an |
| `value` | any | Wi | Nouvo valè a (serialize otomatikman pou array/objè) |
| `autoload` | string | Non | `"yes"` oswa `"no"`. Defo a konsève paramèt autoload ki deja egziste a |

Retounen yon erè si `option_name` sou lis blòk sekirite a.

**Retounen** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Efase yon opsyon WordPress.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `option_name` | string | Wi | Kle opsyon pou efase a |

Retounen yon erè si `option_name` sou lis blòk sekirite a.

**Retounen** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lis opsyon WordPress ki matche ak yon modèl.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `pattern` | string | Non | Modèl SQL LIKE pou filtre non opsyon yo, pa egzanp `gratis_%`. Retounen tout opsyon si li pa mete (itilize ak prekosyon sou gwo bazdone). |
| `limit` | integer | Non | Kantite maksimòm rezilta. Defo `50`, maksimòm `500` |

**Retounen**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Jesyon Kontni {#content-management}

Kapasite Jesyon Kontni yo kreye epi modifye pòs ak paj WordPress. Yo retounen ID pòs yo pou etap ki vin apre nan plan milti-kapasite yo ka refere ak kontni ki te kreye a.

### `create_post` {#createpost}

Kreye yon nouvo pòs WordPress, paj, oswa antre kalite pòs pèsonalize.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `title` | string | Wi | Tit pòs |
| `content` | string | Non | Kò pòs la — aksepte tèks senp, HTML, oswa markup blòk ki serialised |
| `status` | string | Non | `draft`, `publish`, `pending`, `private`. Defo `draft` |
| `post_type` | string | Non | Slug kalite pòs, pa egzanp `post`, `page`, oswa nenpòt CPT ki anrejistre. Defo `post` |
| `excerpt` | string | Non | Rezime kout ki parèt nan achiv ak rezilta rechèch |
| `categories` | array | Non | Array non kategori oswa ID pou asiyen |
| `tags` | array | Non | Array non tag oswa ID pou asiyen |
| `author` | integer | Non | ID itilizatè WordPress pou mete kòm otè pòs la. Defo se itilizatè aktyèl la |
| `date` | string | Non | Dat piblikasyon nan fòma ISO 8601, pa egzanp `2026-05-01T09:00:00` |
| `page_template` | string | Non | Fichye modèl pou asiyen ak pòs oswa paj sa a, pa egzanp `page-full-width.php`. Sa gen sans sèlman lè `post_type` se `page` oswa yon CPT ki sipòte modèl paj. |

**Egzanp**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Retounen** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Mete ajou yon pòs oswa paj WordPress ki deja egziste.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `post_id` | integer | Wi | ID pòs pou mete ajou a |
| `title` | string | Non | Nouvo tit pòs |
| `content` | string | Non | Nouvo kò pòs |
| `status` | string | Non | Nouvo estati: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Non | Nouvo ekstrè |
| `categories` | array | Non | Ranplase lis kategori konplè a ak array non oswa ID sa a |
| `tags` | array | Non | Ranplase lis tag konplè a ak array non oswa ID sa a |
| `page_template` | string | Non | Nouvo fichye modèl pou asiyen ak pòs oswa paj sa a, pa egzanp `page-full-width.php`. Pase yon chèn vid pou retire asiyasyon modèl la epi retounen sou defo theme nan. |

**Egzanp** — chanje modèl apre kreyasyon

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Retounen** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Kreye plizyè pòs nan yon sèl apèl kapasite, sa ki diminye ale-vini pandan konstriksyon sit oswa enpòtasyon kontni an gwo. Pòs yo kreye youn apre lòt; si youn echwe, lòt yo kontinye epi echèk la rapòte nan array rezilta a.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `posts` | array | Wi | Array objè pòs, chak aksepte menm paramèt ak `create_post` |
| `stop_on_error` | boolean | Non | Si `true`, sispann tretman apre premye echèk la. Defo `false` |

**Egzanp**

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

**Retounen**

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

Asiyen yon imaj vedèt (miniati pòs) ak yon pòs oswa paj ki deja egziste. Aksepte yon ID atachman Media Library ki deja egziste oswa yon URL imaj aleka; lè yo bay yon URL, imaj la telechaje epi enpòte otomatikman.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `post_id` | integer | Wi | ID pòs oswa paj pou mete ajou a |
| `attachment_id` | integer | Non | ID yon atachman Media Library ki deja egziste |
| `url` | string | Non | URL imaj aleka pou enpòte epi mete kòm imaj vedèt la |
| `alt_text` | string | Non | Tèks alt pou aplike sou atachman an si li enpòte soti nan yon URL |

Youn nan `attachment_id` oswa `url` dwe bay.

**Retounen** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Kreye yon fòm kontak lè l sèvi ak plugin fòm aktif la (Contact Form 7, WPForms, Fluent Forms, oswa Gravity Forms, selon sa ki enstale). Retounen yon shortcode ki ka entegre nan nenpòt pòs oswa paj.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `title` | string | Wi | Non fòm ki parèt nan admin plugin fòm nan |
| `fields` | array | Wi | Lis òdone chan fòm yo (gade objè Chan ki anba a) |
| `recipient` | string | Non | Adrès imèl pou resevwa soumisyon yo. Pa defo, se imèl admin WordPress la |
| `subject` | string | Non | Liy sijè imèl la. Sipòte ranplasman `[your-name]` ak `[your-subject]` lè w ap itilize Contact Form 7 |
| `confirmation_message` | string | Non | Mesaj ki parèt apre yon soumisyon reyisi. Pa defo: `"Thank you for your message. We'll be in touch soon."` |

**Objè chan**

| Kle | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `name` | string | Wi | Non chan entèn / kle machin |
| `label` | string | Wi | Etikèt moun ka li ki parèt sou fòm nan |
| `type` | string | Wi | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Non | Si chan an dwe ranpli anvan soumisyon. Pa defo `false` |
| `options` | array | Non | Opsyon pou chan `select`, `checkbox`, ak `radio` |
| `placeholder` | string | Non | Tèks placeholder pou antre tip tèks yo |

**Egzanp**

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

**Retounen**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revizyon Vizyèl {#visual-review}

Kapasite Revizyon Vizyèl yo pèmèt agent lan pran ekran paj an dirèk epi analize yo, sa ki rann posib revizyon konsepsyon otonòm, konparezon anvan/apre, ak verifikasyon regresyon vizyèl san mande okenn ekstansyon navigatè.

### `capture_screenshot` {#capturescreenshot}

Pran yon ekran yon paj WordPress nan yon URL yo bay avèk yon navigatè headless bò sèvè. Imaj la sove nan Media Library epi yo retounen yon URL CDN.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `url` | string | Wi | URL konplè paj pou pran ekran an, pa egzanp `https://example.com/about/` |
| `width` | integer | Non | Lajè viewport an piksèl. Pa defo `1280` |
| `height` | integer | Non | Wotè viewport an piksèl. Pa defo `800` |
| `full_page` | boolean | Non | Pran tout paj ki ka defile a olye de sèlman viewport la. Pa defo `false` |
| `delay_ms` | integer | Non | Milisgond pou tann apre paj la fin chaje anvan kaptire, itil pou kontni anime. Pa defo `500` |
| `label` | string | Non | Etikèt moun ka li ki estoke ak atachman an nan Media Library |

**Retounen**

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

Pran de ekran epi retounen yon nòt diferans vizyèl ansanm ak yon imaj diferans ki mete aksan sou zòn ki chanje yo. Itil pou konfime yon chanjman konsepsyon bay rezilta yo te espere a oswa pou detekte regresyon ki pa t entansyonèl.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `before_url` | string | Wi | URL paj pou kaptire kòm eta "anvan" an |
| `after_url` | string | Wi | URL paj pou kaptire kòm eta "apre" a. Li ka menm URL la si w ap konpare atravè tan |
| `width` | integer | Non | Lajè viewport pou toude kaptir yo. Pa defo `1280` |
| `threshold` | float | Non | Papòt diferans piksèl (0.0–1.0). Piksèl ki nan tolerans sa a konsidere kòm pa chanje. Pa defo `0.1` |

**Retounen**

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

Yon `diff_score` ki se `0.0` vle di pa gen okenn chanjman vizib; `1.0` vle di chak piksèl chanje.

---

### `review_page_design` {#reviewpagedesign}

Pran yon ekran yon paj epi voye li bay modèl lang lan pou analiz vizyèl. Retounen yon evalyasyon estriktire ki kouvri aranjman, tipografi, itilizasyon koulè, ak enkyetid aksesibilite.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `url` | string | Wi | URL konplè paj pou revize a |
| `focus` | string | Non | Lis zòn revizyon separe ak vigil pou mete aksan sou yo: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Pa defo: tout zòn |
| `width` | integer | Non | Lajè viewport. Pa defo `1280` |

**Retounen**

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

## Kapasite ki ka Enstale {#installable-abilities}

Rejis Kapasite ki ka Enstale a pèmèt ou elaji agent lan ak pake kapasite adisyonèl ki distribye kòm plugin WordPress. Chak pake anrejistre youn oswa plizyè kapasite lè l sèvi ak API kapasite estanda a.

### `list_available_abilities` {#listavailableabilities}

Retounen katalòg pake kapasite ki disponib pou enstalasyon nan rejis la.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `category` | string | Non | Filtre pa kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Retounen**

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

Telechaje epi aktive yon pake kapasite depi rejis la.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `slug` | string | Wi | Slug plugin pake kapasite a |

**Retounen** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Fè rechèch nan rejis kapasite a pou jwenn pi bon plugin pou yon ka itilizasyon ki dekri epi, si ou vle, enstale li.

**Paramèt**

| Paramèt | Tip | Obligatwa | Deskripsyon |
|---|---|---|---|
| `description` | string | Wi | Deskripsyon an lang natirèl sou fonksyonalite ou vle a |
| `install` | boolean | Non | Si `true`, enstale plugin yo rekòmande a touswit. Defo `false` |

**Egzanp**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Retounen**

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
