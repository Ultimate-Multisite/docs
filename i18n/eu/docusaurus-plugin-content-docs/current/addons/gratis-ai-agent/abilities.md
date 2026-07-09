---
title: Gaitasunen erreferentzia
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Gaitasunen erreferentzia {#abilities-reference}

Gaitasunak Gratis AI Agent-ek zure WordPress instalazioan deitu ditzakeen ekintza atomikoak dira. Gaitasun bakoitza erregistratutako PHP klase bat da, JSON eskema bat azaltzen duena — agent-ek eskema hori exekuzioan irakurtzen du, zer parametro behar diren eta gaitasunak zer itzultzen duen ulertzeko.

Orrialde honek Gratis AI Agent v1.9.0-rekin datozen gaitasun guztiak dokumentatzen ditu.

---

## Mezu mota pertsonalizatuak {#custom-post-types}

Gaitasun hauek agent-en bidez erregistratutako mezu mota pertsonalizatuak (CPTak) kudeatzen dituzte. Erregistroak WordPress aukeren taulan gordetzen dira, plugin desaktibatu eta berraktibatu ondoren ere iraun dezaten.

### `register_post_type` {#registerposttype}

Mezu mota pertsonalizatu berri bat erregistratzen du.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bai | Mezu motaren gakoa (gehienez 20 karaktere, maiuskularik gabe, zuriunerik gabe) |
| `singular_label` | string | Bai | Gizakiek irakurtzeko moduko izen singularra, adib. `Portfolio Item` |
| `plural_label` | string | Bai | Gizakiek irakurtzeko moduko izen plurala, adib. `Portfolio Items` |
| `public` | boolean | Ez | Mezu mota publikoki eskuragarri dagoen ala ez. Lehenetsia: `true` |
| `supports` | array | Ez | Onartu beharreko ezaugarriak: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Lehenetsia: `["title","editor"]` |
| `has_archive` | boolean | Ez | Mezu motaren artxibo-orria gaituta dagoen ala ez. Lehenetsia: `false` |
| `menu_icon` | string | Ez | Administrazio-menuko ikonorako Dashicons klasea edo URLa. Lehenetsia: `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ez | Mezu motarako URL sluga. Lehenespenez `slug` erabiltzen du |

**Adibidea**

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

**Itzultzen du** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Agent-ek erregistratutako mezu mota pertsonalizatu guztiak itzultzen ditu.

**Parametroak** — bat ere ez

**Itzultzen du**

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

Agent-ek aurrez erregistratutako mezu mota pertsonalizatu bat deserrregistratzen du. Mota horretako lehendik dauden mezuak datu-basean geratzen dira, baina ez dira gehiago eskuragarri egongo mezu motaren bidez.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bai | Kendu beharreko mezu motaren gakoa |

**Itzultzen du** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomia pertsonalizatuak {#custom-taxonomies}

Gaitasun hauek taxonomia pertsonalizatuak kudeatzen dituzte. CPTekin bezala, taxonomia-erregistroak gordeta mantentzen dira.

### `register_taxonomy` {#registertaxonomy}

Taxonomia pertsonalizatu berri bat erregistratzen du.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bai | Taxonomiaren gakoa (gehienez 32 karaktere) |
| `singular_label` | string | Bai | Gizakiek irakurtzeko moduko izen singularra, adib. `Project Category` |
| `plural_label` | string | Bai | Gizakiek irakurtzeko moduko izen plurala, adib. `Project Categories` |
| `post_types` | array | Bai | Taxonomia hau erantsi behar zaien mezu moten slugak |
| `hierarchical` | boolean | Ez | `true` kategoria-estilorako, `false` etiketa-estilorako. Lehenetsia: `true` |
| `public` | boolean | Ez | Terminoak publikoki eskuragarri dauden ala ez. Lehenetsia: `true` |
| `rewrite_slug` | string | Ez | Taxonomiarako URL sluga. Lehenespenez `slug` erabiltzen du |

**Adibidea**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Itzultzen du** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Agent-ek erregistratutako taxonomia pertsonalizatu guztiak itzultzen ditu.

**Parametroak** — bat ere ez

**Itzultzen du**

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

Agent-ek aurrez erregistratutako taxonomia pertsonalizatu bat deserrregistratzen du.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bai | Kendu beharreko taxonomiaren gakoa |

**Itzultzen du** `{ "success": true, "slug": "project-category" }`

---

## Diseinu-sistema {#design-system}

Diseinu-sistemaren gaitasunek WordPress gunearen aurkezpen bisuala aldatzen dute — CSS pertsonalizatutik bloke-ereduetara eta gunearen logotipora.

### `inject_custom_css` {#injectcustomcss}

CSS eransten dio gunearen `<head>` atalari `wp_add_inline_style` bidez. CSS `gratis_ai_agent_custom_css` aukeran gordetzen da, eta gaitasuna berrezartzen denean garbi kentzen da ilaratik.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Bai | Txertatu beharreko baliozko CSSa |
| `label` | string | Ez | CSS bloke honetarako gizakiek irakurtzeko moduko etiketa, arazketa-erregistroetan erabilia. Lehenetsia: `"agent-injected"` |
| `replace` | boolean | Ez | `true` bada, aurrez txertatutako CSS guztia ordezten du. Lehenetsia: `false` (eransten du) |

**Adibidea**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Itzultzen du** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress ereduen liburutegian berrerabil daitekeen bloke-eredu bat erregistratzen du.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bai | Ereduaren identifikatzailea, adib. `gratis/hero-dark` |
| `title` | string | Bai | Editorean erakusten den gizakiek irakurtzeko moduko ereduaren izena |
| `content` | string | Bai | Ereduarentzako serializatutako bloke-markaketa (HTML) |
| `categories` | array | Ez | Eredu-kategorien slugak, adib. `["featured", "hero"]` |
| `description` | string | Ez | Eredu-hautatzailean erakusten den deskribapen laburra |
| `keywords` | array | Ez | Bilaketa-gako-hitzak |

**Itzultzen du** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Agent-ek erregistratutako bloke-eredu guztiak zerrendatzen ditu.

**Parametroak** — bat ere ez

**Itzultzen du**

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

WordPress gunearen logotipoa emandako eranskin-ID batera edo urruneko irudi-URL batera ezartzen du. URL bat ematen denean, irudia deskargatu eta Media Library-ra inportatzen da.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `attachment_id` | integer | Ez | Lehendik dagoen Media Library eranskin baten IDa |
| `url` | string | Ez | Inportatu eta logotipo gisa ezartzeko urruneko irudi-URLa |

`attachment_id` edo `url` bat eman behar da.

**Itzultzen du** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Izendatutako kolore/tipografia aurrezarpen bat aplikatzen dio aktibo dagoen themearen `theme.json`-i (edo `global-styles`-i). Aurrezarpenak Gratis AI Agent taldeak mantentzen dituen multzo zainduak dira.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `preset` | string | Bai | Aurrezarpenaren izena, adib. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ez | `true` bada, lehendik dauden balioekin bateratu ordezkatu beharrean. Lehenetsia: `false` |

**Aurrezarpen erabilgarriak**

| Aurrezarpena | Deskribapena |
|---|---|
| `minimal-dark` | Ia beltza den atzeko planoa, testu zuria, azentu-kolore bakarra |
| `warm-editorial` | Zuri epel apur bat duen atzeko planoa, serif goiburuak, lur-tonuko azentu-koloreak |
| `corporate-blue` | Itsas urdinaren eta zuriaren paleta, tipografia profesionalarekin |
| `vibrant-startup` | Gradiente biziak, ertz biribilduak, sans-serif letra mota modernoa |
| `classic-blog` | Gris neutroak, lerro-altuera erosoa, diseinu-tartekatze tradizionala |

**Itzultzen du** `{ "success": true, "preset": "minimal-dark" }`

---

## Estilo globalak {#global-styles}

Estilo globalen gaitasunek theme.json balioak irakurri eta idazten dituzte WordPress Global Styles API-ren bidez, gune osoko bloke eta txantiloi guztiei eraginez.

### `get_global_styles` {#getglobalstyles}

Uneko estilo globalen konfigurazioa itzultzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `path` | string | Ez | Balio zehatz baterako JSON erakuslea, adib. `/color/palette` edo `/typography/fontSizes`. Utziz gero, objektu osoa itzultzen du. |

**Itzultzen du** estilo globalen objektu osoa edo `path`-eko balioa.

---

### `set_global_styles` {#setglobalstyles}

Estilo globalen konfigurazioko balio bat edo gehiago eguneratzen ditu.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `path` | string | Bai | Ezarri beharreko baliorako JSON erakuslea, adib. `/color/palette` |
| `value` | any | Bai | Balio berria |

**Adibidea** — gehitu kolore bat paletara

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Itzultzen du** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Agenteak aplikatutako estilo globalen aldaketa guztiak berrezartzen ditu, themearen balio lehenetsiak leheneratuz.

**Parametroak** — bat ere ez

**Itzultzen du** `{ "success": true }`

---

## Nabigazio-menuak {#navigation-menus}

Nabigazio-menuen gaitasunek WordPress nabigazio-menuak eta haien elementuak sortu eta kudeatzen dituzte.

### `create_menu` {#createmenu}

WordPress nabigazio-menu berri bat sortzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `name` | string | Bai | Menuaren izena, adib. `Primary Navigation` |
| `location` | string | Ez | Menu hau esleitzeko themearen kokalekua, adib. `primary` |

**Itzultzen du** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Menu bati izena aldatzen dio edo theme kokaleku batera berriro esleitzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `menu_id` | integer | Bai | Eguneratu beharreko menuaren IDa |
| `name` | string | Ez | Menuaren izen berria |
| `location` | string | Ez | Esleitzeko edo berriro esleitzeko themearen kokalekua |

**Itzultzen du** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Elementu bat gehitzen dio lehendik dagoen nabigazio-menu bati.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `menu_id` | integer | Bai | Helburuko menuaren IDa |
| `type` | string | Bai | Elementu mota: `custom`, `post_type` edo `taxonomy` |
| `title` | string | Ez | Menu-elementuaren etiketa (`custom` motarako beharrezkoa) |
| `url` | string | Ez | `custom` elementuentzako URLa |
| `object_id` | integer | Ez | Bidalketaren IDa edo terminoaren IDa `post_type`/`taxonomy` elementuentzat |
| `parent_id` | integer | Ez | Elementu hau haren azpian habiaratzeko menu-elementuaren IDa |
| `position` | integer | Ez | Menuan zerotik hasitako posizioa |

**Itzultzen du** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Elementu bat kentzen du nabigazio-menu batetik.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `item_id` | integer | Bai | Kendu beharreko menu-elementuaren IDa |

**Itzultzen du** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

WordPress nabigazio-menu guztiak zerrendatzen ditu, esleituta dituzten theme kokalekuak barne.

**Parametroak** — bat ere ez

**Itzultzen du**

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

## Aukeren kudeaketa {#options-management}

Aukeren gaitasunek WordPress aukerak irakurri eta idazten dituzte `get_option` / `update_option` bidez. Segurtasunerako blokeatze-zerrenda integratu batek ezarpen kritikoak ustekabean aldatzea eragozten du.

### `get_option` {#getoption}

WordPress aukera bat irakurtzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `option_name` | string | Bai | Aukeraren gakoa, adib. `blogname` |

**Itzultzen du** `{ "option_name": "blogname", "value": "My Site" }`

Errore bat itzultzen du `option_name` segurtasuneko blokeatze-zerrendan badago.

---

### `set_option` {#setoption}

WordPress aukera bat idazten du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `option_name` | string | Bai | Aukeraren gakoa |
| `value` | any | Bai | Balio berria (automatikoki serializatua array/objektuentzat) |
| `autoload` | string | Ez | `"yes"` edo `"no"`. Lehenetsiak lehendik dagoen autoload ezarpena mantentzen du |

Errore bat itzultzen du `option_name` segurtasun-blokeo zerrendan badago.

**Itzultzen du** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress aukera bat ezabatzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `option_name` | string | Bai | Ezabatu beharreko aukeraren gakoa |

Errore bat itzultzen du `option_name` segurtasun-blokeo zerrendan badago.

**Itzultzen du** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Eredu batekin bat datozen WordPress aukerak zerrendatzen ditu.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `pattern` | string | Ez | Aukeren izenak iragazteko SQL LIKE eredua, adib. `gratis_%`. Baztertzen bada, aukera guztiak itzultzen ditu (kontuz erabili datu-base handietan). |
| `limit` | integer | Ez | Emaitzen gehieneko kopurua. Lehenetsia `50`, gehienez `500` |

**Itzultzen du**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Edukiaren kudeaketa {#content-management}

Edukiaren kudeaketa gaitasunek WordPress sarrerak eta orriak sortu eta editatzen dituzte. Sarreren IDak itzultzen dira, gaitasun anitzeko planen hurrengo urratsek sortutako edukia erreferentzia dezaten.

### `create_post` {#createpost}

WordPress sarrera, orri edo pertsonalizatutako sarrera mota berri bat sortzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `title` | string | Bai | Sarreraren izenburua |
| `content` | string | Ez | Sarreraren gorputza — testu arrunta, HTML edo serializatutako bloke-markaketa onartzen du |
| `status` | string | Ez | `draft`, `publish`, `pending`, `private`. Lehenetsia `draft` |
| `post_type` | string | Ez | Sarrera motaren slug-a, adib. `post`, `page`, edo erregistratutako edozein CPT. Lehenetsia `post` |
| `excerpt` | string | Ez | Artxiboetan eta bilaketa-emaitzetan erakusten den laburpen laburra |
| `categories` | array | Ez | Esleitu beharreko kategorien izenen edo IDen array-a |
| `tags` | array | Ez | Esleitu beharreko etiketen izenen edo IDen array-a |
| `author` | integer | Ez | Sarreraren egile gisa ezarri beharreko WordPress erabiltzailearen IDa. Uneko erabiltzailea lehenesten du |
| `date` | string | Ez | Argitaratze-data ISO 8601 formatuan, adib. `2026-05-01T09:00:00` |
| `page_template` | string | Ez | Sarrera edo orri honi esleitu beharreko txantiloi-fitxategia, adib. `page-full-width.php`. Esanguratsua da soilik `post_type` `page` denean edo orri-txantiloiak onartzen dituen CPT bat denean. |

**Adibidea**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Itzultzen du** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Lehendik dagoen WordPress sarrera edo orri bat eguneratzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `post_id` | integer | Bai | Eguneratu beharreko sarreraren IDa |
| `title` | string | Ez | Sarreraren izenburu berria |
| `content` | string | Ez | Sarreraren gorputz berria |
| `status` | string | Ez | Egoera berria: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ez | Laburpen berria |
| `categories` | array | Ez | Ordeztu kategoria-zerrenda osoa izenen edo IDen array honekin |
| `tags` | array | Ez | Ordeztu etiketa-zerrenda osoa izenen edo IDen array honekin |
| `page_template` | string | Ez | Sarrera edo orri honi esleitu beharreko txantiloi-fitxategi berria, adib. `page-full-width.php`. Pasatu kate huts bat txantiloi-esleipena kentzeko eta theme lehenetsira itzultzeko. |

**Adibidea** — aldatu txantiloia sortu ondoren

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Itzultzen du** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Sarrera anitz sortzen ditu gaitasun-dei bakar batean, joan-etorriak murriztuz guneen eraikuntzetan edo eduki-inportazio masiboan. Sarrerak sekuentzian sortzen dira; batek huts egiten badu, besteek jarraitzen dute eta hutsegitea emaitzen array-an jakinarazten da.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `posts` | array | Bai | Sarrera-objektuen array-a, bakoitzak `create_post`-en parametro berak onartzen ditu |
| `stop_on_error` | boolean | Ez | `true` bada, lehen hutsegitearen ondoren prozesatzeari utzi. Lehenetsia `false` |

**Adibidea**

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

**Itzultzen du**

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

Nabarmendutako irudi bat (sarreraren miniatura) esleitzen dio lehendik dagoen sarrera edo orri bati. Lehendik dagoen Media Library eranskin-ID bat edo urruneko irudi-URL bat onartzen du; URL bat ematen denean, irudia automatikoki deskargatu eta inportatzen da.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `post_id` | integer | Bai | Eguneratu beharreko sarreraren edo orriaren IDa |
| `attachment_id` | integer | Ez | Lehendik dagoen Media Library eranskin baten IDa |
| `url` | string | Ez | Inportatu eta nabarmendutako irudi gisa ezarri beharreko urruneko irudi-URLa |
| `alt_text` | string | Ez | URL batetik inportatzen bada eranskinari aplikatu beharreko alt testua |

`attachment_id` edo `url` eman behar da.

**Itzultzen du** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Kontaktu-inprimaki bat sortzen du aktibo dagoen inprimaki-plugin-a erabiliz (Contact Form 7, WPForms, Fluent Forms edo Gravity Forms, instalatuta dagoenaren arabera). Edozein sarreratan edo orritan txerta daitekeen shortcode bat itzultzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `title` | string | Bai | Formularioaren pluginaren administrazioan erakusten den formulario-izena |
| `fields` | array | Bai | Formulario-eremuen zerrenda ordenatua (ikus beheko eremu-objektua) |
| `recipient` | string | Ez | Bidalketak jasotzeko email helbidea. Lehenetsia WordPress administratzailearen emaila da |
| `subject` | string | Ez | Emailaren gai-lerroa. Contact Form 7 erabiltzean `[your-name]` eta `[your-subject]` leku-markak onartzen ditu |
| `confirmation_message` | string | Ez | Bidalketa arrakastatsu baten ondoren bistaratzen den mezua. Lehenetsia: `"Thank you for your message. We'll be in touch soon."` |

**Eremu-objektua**

| Gakoa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `name` | string | Bai | Barneko eremu-izena / makina-gakoa |
| `label` | string | Bai | Formularioan erakusten den gizakientzako irakurgarria den etiketa |
| `type` | string | Bai | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ez | Bidali aurretik eremua bete behar den ala ez. Lehenetsia `false` |
| `options` | array | Ez | `select`, `checkbox` eta `radio` eremuetarako aukerak |
| `placeholder` | string | Ez | Testu motako sarreretarako leku-marka testua |

**Adibidea**

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

**Itzultzen du**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Ikusizko berrikuspena {#visual-review}

Ikusizko berrikuspenaren gaitasunek agenteari zuzeneko orrien pantaila-argazkiak ateratzeko eta aztertzeko aukera ematen diote; horri esker, diseinuaren berrikuspen autonomoa, aurretik/ondoren konparazioak eta ikusizko erregresio-egiaztapenak egin daitezke, nabigatzaile-luzapenik behar izan gabe.

### `capture_screenshot` {#capturescreenshot}

WordPress orri baten pantaila-argazkia ateratzen du emandako URL batean zerbitzari aldeko headless nabigatzaile bat erabiliz. Irudia Media Library-n gordetzen da eta CDN URL bat itzultzen da.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `url` | string | Bai | Pantaila-argazkia egiteko orriaren URL osoa, adib. `https://example.com/about/` |
| `width` | integer | Ez | Viewport zabalera pixeletan. Lehenetsia `1280` |
| `height` | integer | Ez | Viewport altuera pixeletan. Lehenetsia `800` |
| `full_page` | boolean | Ez | Viewport-a bakarrik hartu ordez, korritu daitekeen orri osoa atzeman. Lehenetsia `false` |
| `delay_ms` | integer | Ez | Orria kargatu ondoren atzeman aurretik itxaron beharreko milisegundoak, eduki animaturako erabilgarria. Lehenetsia `500` |
| `label` | string | Ez | Media Library-ko eranskinean gordetako gizakientzako irakurgarria den etiketa |

**Itzultzen du**

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

Bi pantaila-argazki hartzen ditu eta ikusizko diferentzia-puntuazioa gehi aldatutako eskualdeak nabarmentzen dituen diferentzia-irudi bat itzultzen ditu. Erabilgarria da diseinu-aldaketa batek espero zen emaitza sortu duela baieztatzeko edo nahi gabeko erregresioak detektatzeko.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `before_url` | string | Bai | "aurretik" egoera gisa atzemateko orriaren URL-a |
| `after_url` | string | Bai | "ondoren" egoera gisa atzemateko orriaren URL-a. URL bera izan daiteke denboran zehar alderatzen bada |
| `width` | integer | Ez | Bi atzemateetarako Viewport zabalera. Lehenetsia `1280` |
| `threshold` | float | Ez | Pixel-diferentziaren atalasea (0.0–1.0). Tolerantzia honen barruko pixelak aldatu gabetzat hartzen dira. Lehenetsia `0.1` |

**Itzultzen du**

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

`diff_score` `0.0` bada, ez dago aldaketa ikusgarririk; `1.0` bada, pixel guztiak aldatu dira.

---

### `review_page_design` {#reviewpagedesign}

Orri baten pantaila-argazkia ateratzen du eta hizkuntza-eredura bidaltzen du ikusizko analisirako. Ebaluazio egituratu bat itzultzen du, diseinua, tipografia, koloreen erabilera eta irisgarritasun-kezkak barne hartuta.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `url` | string | Bai | Berrikusteko orriaren URL osoa |
| `focus` | string | Ez | Azpimarratu beharreko berrikuspen-eremuen komaz bereizitako zerrenda: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Lehenetsia: eremu guztiak |
| `width` | integer | Ez | Viewport zabalera. Lehenetsia `1280` |

**Itzultzen du**

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

## Instalatzeko gaitasunak {#installable-abilities}

Instalatzeko gaitasunen erregistroak agenteari WordPress plugin gisa banatutako gaitasun-pakete gehigarriekin hedatzeko aukera ematen dio. Pakete bakoitzak gaitasun bat edo gehiago erregistratzen ditu gaitasunen API estandarra erabiliz.

### `list_available_abilities` {#listavailableabilities}

Erregistrotik instalatzeko eskuragarri dauden gaitasun-paketeen katalogoa itzultzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `category` | string | Ez | Iragazi kategoriaren arabera: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Itzulera-balioa**

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

Gaitasun-pakete bat erregistrotik deskargatu eta aktibatzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `slug` | string | Bai | Gaitasun-paketearen pluginaren slug-a |

**Itzulera-balioa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Gaitasunen erregistroa kontsultatzen du deskribatutako erabilera-kasu baterako plugin onena aurkitzeko eta, aukeran, instalatzeko.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `description` | string | Bai | Nahi den funtzionalitatearen hizkuntza naturaleko deskribapena |
| `install` | boolean | Ez | `true` bada, gomendatutako plugina berehala instalatzen du. Lehenetsia: `false` |

**Adibidea**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Itzulera-balioa**

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
