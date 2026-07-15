---
title: Spēju atsauce
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Iespēju uzziņa

Iespējas ir atomāras darbības, ko Gratis AI Agent var izsaukt jūsu WordPress instalācijā. Katra iespēja ir reģistrēta PHP klase, kas atklāj JSON shēmu — aģents šo shēmu nolasa izpildlaikā, lai saprastu, kādi parametri ir nepieciešami un ko iespēja atgriež.

Šajā lapā ir dokumentētas visas iespējas, kas tiek piegādātas ar Gratis AI Agent v1.9.0.

---

## Pielāgoti ierakstu tipi {#custom-post-types}

Šīs iespējas pārvalda pielāgotus ierakstu tipus (CPT), kas reģistrēti caur aģentu. Reģistrācijas tiek saglabātas WordPress opciju tabulā, tāpēc tās saglabājas pēc plugin deaktivizēšanas un atkārtotas aktivizēšanas.

### `register_post_type` {#registerposttype}

Reģistrē jaunu pielāgotu ieraksta tipu.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ieraksta tipa atslēga (maks. 20 rakstzīmes, bez lielajiem burtiem, bez atstarpēm) |
| `singular_label` | string | Yes | Cilvēkam lasāms vienskaitļa nosaukums, piem., `Portfolio Item` |
| `plural_label` | string | Yes | Cilvēkam lasāms daudzskaitļa nosaukums, piem., `Portfolio Items` |
| `public` | boolean | No | Vai ieraksta tips ir publiski pieejams. Noklusējums `true` |
| `supports` | array | No | Atbalstāmās funkcijas: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Noklusējums `["title","editor"]` |
| `has_archive` | boolean | No | Vai ieraksta tipa arhīva lapa ir iespējota. Noklusējums `false` |
| `menu_icon` | string | No | Dashicons klase vai URL administratora izvēlnes ikonai. Noklusējums `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug ieraksta tipam. Pēc noklusējuma `slug` |

**Piemērs**

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

**Atgriež** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Atgriež visus pielāgotos ierakstu tipus, ko reģistrējis aģents.

**Parametri** — nav

**Atgriež**

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

Atreģistrē pielāgotu ieraksta tipu, ko iepriekš reģistrējis aģents. Esošie šī tipa ieraksti paliek datubāzē, taču vairs nav pieejami caur šo ieraksta tipu.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Noņemamā ieraksta tipa atslēga |

**Atgriež** `{ "success": true, "slug": "portfolio" }`

---

## Pielāgotas taksonomijas {#custom-taxonomies}

Šīs iespējas pārvalda pielāgotas taksonomijas. Tāpat kā CPT, taksonomiju reģistrācijas tiek saglabātas.

### `register_taxonomy` {#registertaxonomy}

Reģistrē jaunu pielāgotu taksonomiju.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Taksonomijas atslēga (maks. 32 rakstzīmes) |
| `singular_label` | string | Yes | Cilvēkam lasāms vienskaitļa nosaukums, piem., `Project Category` |
| `plural_label` | string | Yes | Cilvēkam lasāms daudzskaitļa nosaukums, piem., `Project Categories` |
| `post_types` | array | Yes | Ierakstu tipu slugs, kuriem šī taksonomija jāpiesaista |
| `hierarchical` | boolean | No | `true` kategoriju stilam, `false` birku stilam. Noklusējums `true` |
| `public` | boolean | No | Vai termini ir publiski pieejami. Noklusējums `true` |
| `rewrite_slug` | string | No | URL slug taksonomijai. Pēc noklusējuma `slug` |

**Piemērs**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Atgriež** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Atgriež visas pielāgotās taksonomijas, ko reģistrējis aģents.

**Parametri** — nav

**Atgriež**

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

Atreģistrē pielāgotu taksonomiju, ko iepriekš reģistrējis aģents.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Noņemamā taksonomijas atslēga |

**Atgriež** `{ "success": true, "slug": "project-category" }`

---

## Dizaina sistēma {#design-system}

Dizaina sistēmas iespējas maina WordPress vietnes vizuālo attēlojumu — no pielāgota CSS līdz bloku rakstiem un vietnes logotipam.

### `inject_custom_css` {#injectcustomcss}

Pievieno CSS vietnes `<head>`, izmantojot `wp_add_inline_style`. CSS tiek glabāts opcijā `gratis_ai_agent_custom_css` un tiek korekti izņemts no rindas, kad iespēja tiek atiestatīta.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Derīgs CSS injicēšanai |
| `label` | string | No | Cilvēkam lasāma etiķete šim CSS blokam, izmantota atkļūdošanas žurnālos. Noklusējums `"agent-injected"` |
| `replace` | boolean | No | Ja `true`, aizstāj visu iepriekš injicēto CSS. Noklusējums `false` (pievieno beigās) |

**Piemērs**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Atgriež** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Reģistrē atkārtoti izmantojamu bloka rakstu WordPress rakstu bibliotēkā.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Raksta identifikators, piem., `gratis/hero-dark` |
| `title` | string | Yes | Cilvēkam lasāms raksta nosaukums, kas redzams redaktorā |
| `content` | string | Yes | Serializēts bloku marķējums (HTML) rakstam |
| `categories` | array | No | Raksta kategoriju slugs, piem., `["featured", "hero"]` |
| `description` | string | No | Īss apraksts, kas redzams rakstu izvēlētājā |
| `keywords` | array | No | Meklēšanas atslēgvārdi |

**Atgriež** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Uzskaita visus bloku rakstus, ko reģistrējis aģents.

**Parametri** — nav

**Atgriež**

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

Iestata WordPress vietnes logotipu uz norādītu pielikuma ID vai attālināta attēla URL. Ja tiek norādīts URL, attēls tiek lejupielādēts un importēts Media Library.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `attachment_id` | integer | Nē | Esoša Media Library pielikuma ID |
| `url` | string | Nē | Attālināta attēla URL, ko importēt un iestatīt kā logotipu |

Jānorāda viens no `attachment_id` vai `url`.

**Atgriež** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Piemēro nosauktu krāsu/tipogrāfijas priekšiestatījumu aktīvās tēmas `theme.json` (vai `global-styles`). Priekšiestatījumi ir atlasītas pakotnes, ko uztur Gratis AI Agent komanda.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `preset` | string | Jā | Priekšiestatījuma nosaukums, piem., `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nē | Ja `true`, apvienot ar esošajām vērtībām, nevis aizstāt. Noklusējums `false` |

**Pieejamie priekšiestatījumi**

| Priekšiestatījums | Apraksts |
|---|---|
| `minimal-dark` | Gandrīz melns fons, balts teksts, viena akcenta krāsa |
| `warm-editorial` | Silts gandrīz balts fons, serif virsraksti, zemes toņu akcenta krāsas |
| `corporate-blue` | Tumši zila un balta palete ar profesionālu tipogrāfiju |
| `vibrant-startup` | Spilgti gradienti, noapaļoti stūri, moderns sans-serif fonts |
| `classic-blog` | Neitrāli pelēkie toņi, ērts rindiņu augstums, tradicionāls izkārtojuma atstarpju lietojums |

**Atgriež** `{ "success": true, "preset": "minimal-dark" }`

---

## Globālie stili {#global-styles}

Globālo stilu iespējas lasa un raksta theme.json vērtības, izmantojot WordPress Global Styles API, ietekmējot visus blokus un veidnes visā vietnē.

### `get_global_styles` {#getglobalstyles}

Atgriež pašreizējo globālo stilu konfigurāciju.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `path` | string | Nē | JSON norāde uz konkrētu vērtību, piem., `/color/palette` vai `/typography/fontSizes`. Ja izlaists, atgriež visu objektu. |

**Atgriež** pilnu globālo stilu objektu vai vērtību pie `path`.

---

### `set_global_styles` {#setglobalstyles}

Atjaunina vienu vai vairākas vērtības globālo stilu konfigurācijā.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `path` | string | Jā | JSON norāde uz iestatāmo vērtību, piem., `/color/palette` |
| `value` | any | Jā | Jaunā vērtība |

**Piemērs** — pievienot krāsu paletei

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Atgriež** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Atiestata visas aģenta piemērotās globālo stilu izmaiņas, atjaunojot tēmas noklusējuma vērtības.

**Parametri** — nav

**Atgriež** `{ "success": true }`

---

## Navigācijas izvēlnes {#navigation-menus}

Navigācijas izvēlņu iespējas izveido un pārvalda WordPress navigācijas izvēlnes un to vienumus.

### `create_menu` {#createmenu}

Izveido jaunu WordPress navigācijas izvēlni.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `name` | string | Jā | Izvēlnes nosaukums, piem., `Primary Navigation` |
| `location` | string | Nē | Tēmas atrašanās vieta, kam piešķirt šo izvēlni, piem., `primary` |

**Atgriež** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Pārdēvē izvēlni vai atkārtoti piešķir to tēmas atrašanās vietai.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `menu_id` | integer | Jā | Atjaunināmās izvēlnes ID |
| `name` | string | Nē | Jauns izvēlnes nosaukums |
| `location` | string | Nē | Tēmas atrašanās vieta, kam piešķirt vai atkārtoti piešķirt |

**Atgriež** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Pievieno vienumu esošai navigācijas izvēlnei.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `menu_id` | integer | Jā | Mērķa izvēlnes ID |
| `type` | string | Jā | Vienuma tips: `custom`, `post_type` vai `taxonomy` |
| `title` | string | Nē | Izvēlnes vienuma etiķete (obligāta `custom` tipam) |
| `url` | string | Nē | URL `custom` vienumiem |
| `object_id` | integer | Nē | Ieraksta ID vai termina ID `post_type`/`taxonomy` vienumiem |
| `parent_id` | integer | Nē | Izvēlnes vienuma ID, zem kura ligzdot šo vienumu |
| `position` | integer | Nē | Nulles bāzes pozīcija izvēlnē |

**Atgriež** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Noņem vienumu no navigācijas izvēlnes.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `item_id` | integer | Jā | Noņemamā izvēlnes vienuma ID |

**Atgriež** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Uzskaita visas WordPress navigācijas izvēlnes, tostarp tām piešķirtās tēmas atrašanās vietas.

**Parametri** — nav

**Atgriež**

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

## Opciju pārvaldība {#options-management}

Opciju iespējas lasa un raksta WordPress opcijas, izmantojot `get_option` / `update_option`. Iebūvēts drošības bloķēšanas saraksts novērš nejaušu kritisku iestatījumu modificēšanu.

### `get_option` {#getoption}

Nolasa WordPress opciju.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `option_name` | string | Jā | Opcijas atslēga, piem., `blogname` |

**Atgriež** `{ "option_name": "blogname", "value": "My Site" }`

Atgriež kļūdu, ja `option_name` ir drošības bloķēšanas sarakstā.

---

### `set_option` {#setoption}

Raksta WordPress opciju.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `option_name` | string | Jā | Opcijas atslēga |
| `value` | any | Jā | Jaunā vērtība (masīviem/objektiem automātiski serializēta) |
| `autoload` | string | Nē | `"yes"` vai `"no"`. Noklusējums saglabā esošo autoload iestatījumu |

Atgriež kļūdu, ja `option_name` ir drošības bloķēšanas sarakstā.

**Atgriež** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Dzēš WordPress opciju.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Opcijas atslēga, ko dzēst |

Atgriež kļūdu, ja `option_name` ir drošības bloķēšanas sarakstā.

**Atgriež** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Uzskaita WordPress opcijas, kas atbilst paraugam.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | SQL LIKE paraugs opciju nosaukumu filtrēšanai, piem., `gratis_%`. Atgriež visas opcijas, ja izlaists (lietojiet piesardzīgi lielās datubāzēs). |
| `limit` | integer | No | Maksimālais rezultātu skaits. Noklusējums `50`, maksimums `500` |

**Atgriež**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Satura pārvaldība {#content-management}

Satura pārvaldības iespējas izveido un rediģē WordPress ziņas un lapas. Ziņu ID tiek atgriezti, lai turpmākās darbības vairāku iespēju plānos varētu atsaukties uz izveidoto saturu.

### `create_post` {#createpost}

Izveido jaunu WordPress ziņu, lapu vai pielāgota ziņas tipa ierakstu.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Ziņas virsraksts |
| `content` | string | No | Ziņas saturs — pieņem vienkāršu tekstu, HTML vai serializētu bloku marķējumu |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Noklusējums `draft` |
| `post_type` | string | No | Ziņas tipa slug, piem., `post`, `page` vai jebkurš reģistrēts CPT. Noklusējums `post` |
| `excerpt` | string | No | Īss kopsavilkums, kas redzams arhīvos un meklēšanas rezultātos |
| `categories` | array | No | Kategoriju nosaukumu vai ID masīvs piešķiršanai |
| `tags` | array | No | Birku nosaukumu vai ID masīvs piešķiršanai |
| `author` | integer | No | WordPress lietotāja ID, ko iestatīt kā ziņas autoru. Pēc noklusējuma pašreizējais lietotājs |
| `date` | string | No | Publicēšanas datums ISO 8601 formātā, piem., `2026-05-01T09:00:00` |
| `page_template` | string | No | Veidnes fails, ko piešķirt šai ziņai vai lapai, piem., `page-full-width.php`. Nozīme ir tikai tad, ja `post_type` ir `page` vai CPT, kas atbalsta lapu veidnes. |

**Piemērs**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Atgriež** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Atjaunina esošu WordPress ziņu vai lapu.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | Atjaunināmās ziņas ID |
| `title` | string | No | Jauns ziņas virsraksts |
| `content` | string | No | Jauns ziņas saturs |
| `status` | string | No | Jauns statuss: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Jauns izvilkums |
| `categories` | array | No | Aizstāj pilnu kategoriju sarakstu ar šo nosaukumu vai ID masīvu |
| `tags` | array | No | Aizstāj pilnu birku sarakstu ar šo nosaukumu vai ID masīvu |
| `page_template` | string | No | Jauns veidnes fails, ko piešķirt šai ziņai vai lapai, piem., `page-full-width.php`. Nododiet tukšu virkni, lai noņemtu veidnes piešķīrumu un atgrieztos pie tēmas noklusējuma. |

**Piemērs** — mainīt veidni pēc izveides

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Atgriež** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Izveido vairākas ziņas vienā iespējas izsaukumā, samazinot turp-atpakaļ pieprasījumus vietņu izveides vai masveida satura importa laikā. Ziņas tiek izveidotas secīgi; ja viena neizdodas, pārējās turpinās, un kļūme tiek norādīta rezultātu masīvā.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Ziņu objektu masīvs, kur katrs pieņem tos pašus parametrus kā `create_post` |
| `stop_on_error` | boolean | No | Ja `true`, pārtrauc apstrādi pēc pirmās kļūmes. Noklusējums `false` |

**Piemērs**

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

**Atgriež**

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

Piešķir izcelto attēlu (ziņas sīktēlu) esošai ziņai vai lapai. Pieņem esoša Media Library pielikuma ID vai attāla attēla URL; ja tiek norādīts URL, attēls tiek automātiski lejupielādēts un importēts.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | Atjaunināmās ziņas vai lapas ID |
| `attachment_id` | integer | No | Esoša Media Library pielikuma ID |
| `url` | string | No | Attāla attēla URL, ko importēt un iestatīt kā izcelto attēlu |
| `alt_text` | string | No | Alternatīvais teksts, ko piemērot pielikumam, ja tas tiek importēts no URL |

Jānorāda viens no `attachment_id` vai `url`.

**Atgriež** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Izveido kontaktformu, izmantojot aktīvo formu plugin (Contact Form 7, WPForms, Fluent Forms vai Gravity Forms, atkarībā no tā, kurš ir instalēts). Atgriež shortcode, ko var iegult jebkurā ziņā vai lapā.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `title` | string | Jā | Formas nosaukums, kas tiek rādīts formu plugin administrācijas panelī |
| `fields` | array | Jā | Sakārtots formas lauku saraksts (skatiet Field objektu zemāk) |
| `recipient` | string | Nē | Email adrese iesniegumu saņemšanai. Pēc noklusējuma tiek izmantots WordPress administratora email |
| `subject` | string | Nē | Email temata rinda. Atbalsta `[your-name]` un `[your-subject]` vietturus, izmantojot Contact Form 7 |
| `confirmation_message` | string | Nē | Ziņojums, kas tiek parādīts pēc veiksmīgas iesniegšanas. Noklusējums: `"Thank you for your message. We'll be in touch soon."` |

**Field objekts**

| Atslēga | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `name` | string | Jā | Iekšējais lauka nosaukums / mašīnatslēga |
| `label` | string | Jā | Cilvēkam saprotama etiķete, kas tiek rādīta formā |
| `type` | string | Jā | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nē | Vai lauks jāaizpilda pirms iesniegšanas. Noklusējums `false` |
| `options` | array | Nē | Opcijas `select`, `checkbox` un `radio` laukiem |
| `placeholder` | string | Nē | Viettura teksts teksta tipa ievades laukiem |

**Piemērs**

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

**Atgriež**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizuālā pārskatīšana {#visual-review}

Vizuālās pārskatīšanas iespējas ļauj agent uzņemt aktīvu lapu ekrānuzņēmumus un analizēt tos, nodrošinot autonomu dizaina pārskatīšanu, pirms/pēc salīdzinājumus un vizuālās regresijas pārbaudes bez nepieciešamības izmantot pārlūka paplašinājumu.

### `capture_screenshot` {#capturescreenshot}

Uzņem WordPress lapas ekrānuzņēmumu norādītajā URL, izmantojot servera puses headless pārlūku. Attēls tiek saglabāts Media Library, un tiek atgriezts CDN URL.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `url` | string | Jā | Pilns lapas URL ekrānuzņēmuma uzņemšanai, piem., `https://example.com/about/` |
| `width` | integer | Nē | Viewport platums pikseļos. Noklusējums `1280` |
| `height` | integer | Nē | Viewport augstums pikseļos. Noklusējums `800` |
| `full_page` | boolean | Nē | Uzņemt visu ritināmo lapu, nevis tikai viewport. Noklusējums `false` |
| `delay_ms` | integer | Nē | Milisekundes, cik gaidīt pēc lapas ielādes pirms uzņemšanas; noder animētam saturam. Noklusējums `500` |
| `label` | string | Nē | Cilvēkam saprotama etiķete, kas tiek saglabāta kopā ar pielikumu Media Library |

**Atgriež**

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

Paņem divus ekrānuzņēmumus un atgriež vizuālās atšķirības vērtējumu, kā arī atšķirību attēlu, kurā izceltas mainītās zonas. Noder, lai apstiprinātu, ka dizaina izmaiņas radīja gaidīto rezultātu, vai lai noteiktu nevēlamas regresijas.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `before_url` | string | Jā | Lapas URL, ko uzņemt kā "pirms" stāvokli |
| `after_url` | string | Jā | Lapas URL, ko uzņemt kā "pēc" stāvokli. Var būt tas pats URL, ja salīdzina dažādos laikos |
| `width` | integer | Nē | Viewport platums abiem uzņēmumiem. Noklusējums `1280` |
| `threshold` | float | Nē | Pikseļu atšķirības slieksnis (0.0–1.0). Pikseļi šīs pielaides robežās tiek uzskatīti par nemainītiem. Noklusējums `0.1` |

**Atgriež**

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

`diff_score` vērtība `0.0` nozīmē, ka nav redzamu izmaiņu; `1.0` nozīmē, ka mainījies katrs pikselis.

---

### `review_page_design` {#reviewpagedesign}

Uzņem lapas ekrānuzņēmumu un nosūta to valodas modelim vizuālai analīzei. Atgriež strukturētu novērtējumu, kas aptver izkārtojumu, tipogrāfiju, krāsu lietojumu un pieejamības problēmas.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `url` | string | Jā | Pilns pārskatāmās lapas URL |
| `focus` | string | Nē | Ar komatiem atdalīts pārskatīšanas jomu saraksts, kurām pievērst īpašu uzmanību: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Noklusējums: visas jomas |
| `width` | integer | Nē | Viewport platums. Noklusējums `1280` |

**Atgriež**

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

## Instalējamās iespējas {#installable-abilities}

Installable Abilities Registry ļauj paplašināt agent ar papildu iespēju pakotnēm, kas tiek izplatītas kā WordPress plugins. Katra pakotne reģistrē vienu vai vairākas iespējas, izmantojot standarta iespēju API.

### `list_available_abilities` {#listavailableabilities}

Atgriež no Registry instalēšanai pieejamo iespēju pakotņu katalogu.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `category` | string | Nē | Filtrēt pēc kategorijas: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Atgriež**

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

Lejupielādē un aktivizē spēju pakotni no reģistra.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `slug` | string | Jā | Spēju pakotnes plugin slug |

**Atgriež** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Vaicā spēju reģistru, lai atrastu labāko plugin aprakstītajam lietošanas gadījumam un, pēc izvēles, to instalē.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `description` | string | Jā | Vēlamās funkcionalitātes apraksts dabiskā valodā |
| `install` | boolean | Nē | Ja `true`, nekavējoties instalē ieteikto plugin. Noklusējums `false` |

**Piemērs**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Atgriež**

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
