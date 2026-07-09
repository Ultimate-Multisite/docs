---
title: Referenza tal-Abilitajiet
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenza tal-Abilitajiet

L-abilitajiet huma l-azzjonijiet atomiċi li Gratis AI Agent jista' jsejjaħ fuq l-installazzjoni WordPress tiegħek. Kull abilità hija klassi PHP irreġistrata li tesponi skema JSON — l-aġent jaqra din l-iskema waqt l-eżekuzzjoni biex jifhem liema parametri huma meħtieġa u x'tirritorna l-abilità.

Din il-paġna tiddokumenta l-abilitajiet kollha li jiġu ma' Gratis AI Agent v1.9.0.

---

## Tipi ta' Post Personalizzati

Dawn l-abilitajiet jimmaniġġjaw tipi ta' post personalizzati (CPTs) irreġistrati permezz tal-aġent. Ir-reġistrazzjonijiet jinżammu fit-tabella tal-għażliet ta' WordPress sabiex jibqgħu jeżistu wara d-diżattivazzjoni u r-riattivazzjoni tal-estensjoni.

### `register_post_type`

Tirreġistra tip ta' post personalizzat ġdid.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `slug` | string | Iva | Iċ-ċavetta tat-tip ta' post (massimu 20 karattru, l-ebda ittra kbira, l-ebda spazju) |
| `singular_label` | string | Iva | Isem singulari li jinqara mill-bniedem, eż. `Portfolio Item` |
| `plural_label` | string | Iva | Isem plurali li jinqara mill-bniedem, eż. `Portfolio Items` |
| `public` | boolean | Le | Jekk it-tip ta' post huwiex aċċessibbli pubblikament. Predefinit `true` |
| `supports` | array | Le | Karatteristiċi li għandhom jiġu appoġġjati: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predefinit `["title","editor"]` |
| `has_archive` | boolean | Le | Jekk paġna ta' arkivju għat-tip ta' post hijiex attivata. Predefinit `false` |
| `menu_icon` | string | Le | Klassi Dashicons jew URL għall-ikona tal-menu tal-amministratur. Predefinit `"dashicons-admin-post"` |
| `rewrite_slug` | string | Le | URL slug għat-tip ta' post. Jintuża `slug` b'mod predefinit |

**Eżempju**

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

**Jirritorna** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Jirritorna t-tipi ta' post personalizzati kollha rreġistrati mill-aġent.

**Parametri** — xejn

**Jirritorna**

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

### `delete_post_type`

Ineħħi r-reġistrazzjoni ta' tip ta' post personalizzat irreġistrat qabel mill-aġent. Il-postijiet eżistenti ta' dak it-tip jibqgħu fid-database iżda ma jibqgħux aċċessibbli permezz tat-tip ta' post.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `slug` | string | Iva | Iċ-ċavetta tat-tip ta' post li għandha titneħħa |

**Jirritorna** `{ "success": true, "slug": "portfolio" }`

---

## Tassonomiji Personalizzati

Dawn l-abilitajiet jimmaniġġjaw tassonomiji personalizzati. Bħal CPTs, ir-reġistrazzjonijiet tat-tassonomiji jinżammu.

### `register_taxonomy`

Tirreġistra tassonomija personalizzata ġdida.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `slug` | string | Iva | Iċ-ċavetta tat-tassonomija (massimu 32 karattru) |
| `singular_label` | string | Iva | Isem singulari li jinqara mill-bniedem, eż. `Project Category` |
| `plural_label` | string | Iva | Isem plurali li jinqara mill-bniedem, eż. `Project Categories` |
| `post_types` | array | Iva | Slugs tat-tipi ta' post li din it-tassonomija għandha tintrabat magħhom |
| `hierarchical` | boolean | Le | `true` għal stil ta' kategorija, `false` għal stil ta' tag. Predefinit `true` |
| `public` | boolean | Le | Jekk it-termini humiex aċċessibbli pubblikament. Predefinit `true` |
| `rewrite_slug` | string | Le | URL slug għat-tassonomija. Jintuża `slug` b'mod predefinit |

**Eżempju**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Jirritorna** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Jirritorna t-tassonomiji personalizzati kollha rreġistrati mill-aġent.

**Parametri** — xejn

**Jirritorna**

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

### `delete_taxonomy`

Ineħħi r-reġistrazzjoni ta' tassonomija personalizzata rreġistrata qabel mill-aġent.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `slug` | string | Iva | Iċ-ċavetta tat-tassonomija li għandha titneħħa |

**Jirritorna** `{ "success": true, "slug": "project-category" }`

---

## Sistema tad-Disinn

L-abilitajiet tas-sistema tad-disinn jimmodifikaw il-preżentazzjoni viżwali tas-sit WordPress — minn CSS personalizzat sa mudelli ta' blokki u l-logo tas-sit.

### `inject_custom_css`

Iżżid CSS mal-`<head>` tas-sit permezz ta' `wp_add_inline_style`. Is-CSS jinħażen fl-għażla `gratis_ai_agent_custom_css` u jitneħħa mill-kju b'mod nadif meta l-abilità tiġi ssettjata mill-ġdid.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `css` | string | Iva | CSS validu biex jiġi injettat |
| `label` | string | Le | Tikketta li tinqara mill-bniedem għal dan il-blokk CSS, użata fir-reġistri tad-debug. Predefinit `"agent-injected"` |
| `replace` | boolean | Le | Jekk `true`, tissostitwixxi s-CSS kollu injettat qabel. Predefinit `false` (iżżid mal-eżistenti) |

**Eżempju**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Jirritorna** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Tirreġistra mudell ta' blokki li jista' jerġa' jintuża fil-librerija tal-mudelli ta' WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `slug` | string | Iva | Identifikatur tal-mudell, eż. `gratis/hero-dark` |
| `title` | string | Iva | Isem tal-mudell li jinqara mill-bniedem muri fl-editur |
| `content` | string | Iva | Markup ta' blokki sserializzat (HTML) għall-mudell |
| `categories` | array | Le | Slugs tal-kategoriji tal-mudell, eż. `["featured", "hero"]` |
| `description` | string | Le | Deskrizzjoni qasira murija fil-picker tal-mudelli |
| `keywords` | array | Le | Kliem ewlieni għat-tiftix |

**Jirritorna** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Jelenka l-mudelli ta' blokki kollha rreġistrati mill-aġent.

**Parametri** — xejn

**Jirritorna**

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

### `set_site_logo`

Issettja l-logo tas-sit WordPress għal ID ta’ attachment mogħti jew URL ta’ immaġni remota. Meta jiġi pprovdut URL, l-immaġni titniżżel u tiġi importata fil-Media Library.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `attachment_id` | integer | Le | ID ta’ attachment eżistenti fil-Media Library |
| `url` | string | Le | URL ta’ immaġni remota biex tiġi importata u ssettjata bħala l-logo |

Wieħed minn `attachment_id` jew `url` irid jiġi pprovdut.

**Jirritorna** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Japplika preset imsemmi tal-kulur/tipografija għat-`theme.json` tat-tema attiva (jew `global-styles`). Il-presets huma pakketti kkurati miżmuma mit-tim ta’ Gratis AI Agent.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `preset` | string | Iva | Isem tal-preset, eż. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Le | Jekk `true`, għaqqad mal-valuri eżistenti minflok tissostitwixxi. Default `false` |

**Presets disponibbli**

| Preset | Deskrizzjoni |
|---|---|
| `minimal-dark` | Sfond kważi iswed, test abjad, kulur ta’ aċċent wieħed |
| `warm-editorial` | Sfond abjad sħun mitfi, headings serif, kuluri ta’ aċċent b’tonijiet naturali |
| `corporate-blue` | Paletta blu skur u bajda b’tipografija professjonali |
| `vibrant-startup` | Gradjenti jleqqu, kantunieri ttundjati, tip sans-serif moderna |
| `classic-blog` | Griżi newtrali, line-height komdu, spazjar tradizzjonali tat-tqassim |

**Jirritorna** `{ "success": true, "preset": "minimal-dark" }`

---

## Stili Globali

Il-kapaċitajiet tal-Istili Globali jaqraw u jiktbu valuri ta’ theme.json permezz tal-WordPress Global Styles API, u jaffettwaw il-blokki u t-templates kollha fis-sit kollu.

### `get_global_styles`

Jirritorna l-konfigurazzjoni attwali tal-istili globali.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `path` | string | Le | Pointer JSON għal valur speċifiku, eż. `/color/palette` jew `/typography/fontSizes`. Jirritorna l-oġġett kollu jekk jitħalla barra. |

**Jirritorna** l-oġġett sħiħ tal-istili globali jew il-valur f’`path`.

---

### `set_global_styles`

Jaġġorna valur wieħed jew aktar fil-konfigurazzjoni tal-istili globali.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `path` | string | Iva | Pointer JSON għall-valur li għandu jiġi ssettjat, eż. `/color/palette` |
| `value` | any | Iva | Il-valur il-ġdid |

**Eżempju** — żid kulur mal-paletta

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Jirritorna** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Jirrisettja l-bidliet kollha fl-istili globali applikati mill-agent, u jerġa’ jġib id-defaults tat-tema.

**Parametri** — ebda

**Jirritorna** `{ "success": true }`

---

## Menus tan-Navigazzjoni

Il-kapaċitajiet tal-Menu tan-Navigazzjoni joħolqu u jimmaniġġjaw menus tan-nav ta’ WordPress u l-oġġetti tagħhom.

### `create_menu`

Joħloq menu ġdid tan-navigazzjoni ta’ WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `name` | string | Iva | Isem tal-menu, eż. `Primary Navigation` |
| `location` | string | Le | Post fit-tema biex dan il-menu jiġi assenjat lilu, eż. `primary` |

**Jirritorna** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Ibiddel l-isem ta’ menu jew jerġa’ jassenjah għal post fit-tema.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `menu_id` | integer | Iva | ID tal-menu li għandu jiġi aġġornat |
| `name` | string | Le | Isem ġdid tal-menu |
| `location` | string | Le | Post fit-tema biex jiġi assenjat jew assenjat mill-ġdid |

**Jirritorna** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Iżid oġġett ma’ menu tan-navigazzjoni eżistenti.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `menu_id` | integer | Iva | ID tal-menu fil-mira |
| `type` | string | Iva | Tip ta’ oġġett: `custom`, `post_type`, jew `taxonomy` |
| `title` | string | Le | Tikketta għall-oġġett tal-menu (meħtieġa għat-tip `custom`) |
| `url` | string | Le | URL għall-oġġetti `custom` |
| `object_id` | integer | Le | Post ID jew term ID għall-oġġetti `post_type`/`taxonomy` |
| `parent_id` | integer | Le | ID tal-oġġett tal-menu biex dan l-oġġett jitqiegħed taħtu |
| `position` | integer | Le | Pożizzjoni bbażata fuq iż-żero fil-menu |

**Jirritorna** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Ineħħi oġġett minn menu tan-navigazzjoni.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `item_id` | integer | Iva | ID tal-oġġett tal-menu li għandu jitneħħa |

**Jirritorna** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Jelenka l-menus kollha tan-navigazzjoni ta’ WordPress, inklużi l-postijiet tat-tema assenjati tagħhom.

**Parametri** — ebda

**Jirritorna**

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

## Ġestjoni tal-Għażliet

Il-kapaċitajiet tal-għażliet jaqraw u jiktbu għażliet ta’ WordPress permezz ta’ `get_option` / `update_option`. Blocklist tas-sigurtà mibnija fiha tipprevjeni modifika aċċidentali ta’ settings kritiċi.

### `get_option`

Jaqra għażla ta’ WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `option_name` | string | Iva | Iċ-ċavetta tal-għażla, eż. `blogname` |

**Jirritorna** `{ "option_name": "blogname", "value": "My Site" }`

Jirritorna żball jekk `option_name` tkun fuq il-blocklist tas-sigurtà.

---

### `set_option`

Jikteb għażla ta’ WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `option_name` | string | Iva | Iċ-ċavetta tal-għażla |
| `value` | any | Iva | Il-valur il-ġdid (serialised awtomatikament għal arrays/oġġetti) |
| `autoload` | string | Le | `"yes"` jew `"no"`. Id-default iżomm is-setting eżistenti ta’ autoload |

Jirritorna żball jekk `option_name` ikun fuq il-lista ta' mblukkar tas-sigurtà.

**Jirritorna** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Iħassar opzjoni ta' WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `option_name` | string | Iva | Iċ-ċavetta tal-opzjoni li għandha titħassar |

Jirritorna żball jekk `option_name` ikun fuq il-lista ta' mblukkar tas-sigurtà.

**Jirritorna** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Jelenka opzjonijiet ta' WordPress li jaqblu ma' mudell.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `pattern` | string | Le | Mudell SQL LIKE biex jiffiltra ismijiet ta' opzjonijiet, eż. `gratis_%`. Jirritorna l-opzjonijiet kollha jekk jitħalla barra (uża b'kawtela fuq databases kbar). |
| `limit` | integer | Le | Numru massimu ta' riżultati. Default `50`, mass `500` |

**Jirritorna**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Ġestjoni tal-Kontenut

Il-kapaċitajiet tal-Ġestjoni tal-Kontenut joħolqu u jeditjaw posts u paġni ta' WordPress. L-IDs tal-posts jiġu rritornati sabiex passi sussegwenti fi pjanijiet b'diversi kapaċitajiet ikunu jistgħu jirreferu għall-kontenut maħluq.

### `create_post`

Joħloq post, paġna, jew entrata ta' tip ta' post personalizzat ġdida f'WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `title` | string | Iva | Titlu tal-post |
| `content` | string | Le | Kontenut tal-post — jaċċetta test sempliċi, HTML, jew markup ta' blokki sserializzat |
| `status` | string | Le | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | Le | Slug tat-tip ta' post, eż. `post`, `page`, jew kwalunkwe CPT reġistrat. Default `post` |
| `excerpt` | string | Le | Sommarju qasir muri fl-arkivji u fir-riżultati tat-tiftix |
| `categories` | array | Le | Array ta' ismijiet jew IDs ta' kategoriji li għandhom jiġu assenjati |
| `tags` | array | Le | Array ta' ismijiet jew IDs ta' tags li għandhom jiġu assenjati |
| `author` | integer | Le | ID tal-utent ta' WordPress li għandu jiġi ssettjat bħala l-awtur tal-post. Default għall-utent attwali |
| `date` | string | Le | Data tal-pubblikazzjoni fil-format ISO 8601, eż. `2026-05-01T09:00:00` |
| `page_template` | string | Le | Fajl tat-template li għandu jiġi assenjat lil dan il-post jew paġna, eż. `page-full-width.php`. Għandu tifsira biss meta `post_type` ikun `page` jew CPT li jappoġġja templates tal-paġni. |

**Eżempju**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Jirritorna** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Jaġġorna post jew paġna eżistenti ta' WordPress.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `post_id` | integer | Iva | ID tal-post li għandu jiġi aġġornat |
| `title` | string | Le | Titlu ġdid tal-post |
| `content` | string | Le | Kontenut ġdid tal-post |
| `status` | string | Le | Status ġdid: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Le | Silta ġdida |
| `categories` | array | Le | Ibdel il-lista sħiħa tal-kategoriji b'dan l-array ta' ismijiet jew IDs |
| `tags` | array | Le | Ibdel il-lista sħiħa tat-tags b'dan l-array ta' ismijiet jew IDs |
| `page_template` | string | Le | Fajl tat-template ġdid li għandu jiġi assenjat lil dan il-post jew paġna, eż. `page-full-width.php`. Għaddi string vojt biex tneħħi l-assenjazzjoni tat-template u terġa' lura għad-default tat-theme. |

**Eżempju** — ibdel it-template wara l-ħolqien

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Jirritorna** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Joħloq diversi posts f'sejħa waħda ta' kapaċità, u jnaqqas il-vjaġġi 'l hemm u lura waqt bini ta' site jew importazzjoni ta' kontenut bl-ingrossa. Il-posts jinħolqu f'sekwenza; jekk wieħed ifalli, l-oħrajn ikomplu u l-falliment jiġi rrappurtat fl-array tar-riżultati.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `posts` | array | Iva | Array ta' oġġetti ta' posts, kull wieħed jaċċetta l-istess parametri bħal `create_post` |
| `stop_on_error` | boolean | Le | Jekk `true`, waqqaf l-ipproċessar wara l-ewwel falliment. Default `false` |

**Eżempju**

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

**Jirritorna**

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

### `set_featured_image`

Jassenja immaġni enfasizzata (thumbnail tal-post) lil post jew paġna eżistenti. Jaċċetta ID ta' attachment eżistenti tal-Media Library jew URL ta' immaġni remota; meta jiġi pprovdut URL, l-immaġni titniżżel u tiġi importata awtomatikament.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `post_id` | integer | Iva | ID tal-post jew paġna li għandha tiġi aġġornata |
| `attachment_id` | integer | Le | ID ta' attachment eżistenti tal-Media Library |
| `url` | string | Le | URL ta' immaġni remota li għandha tiġi importata u ssettjata bħala l-immaġni enfasizzata |
| `alt_text` | string | Le | Test alternattiv li għandu jiġi applikat għall-attachment jekk jiġi importat minn URL |

Wieħed minn `attachment_id` jew `url` għandu jiġi pprovdut.

**Jirritorna** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Joħloq formola ta' kuntatt bl-użu tal-plugin tal-formoli attiv (Contact Form 7, WPForms, Fluent Forms, jew Gravity Forms, skont liema huwa installat). Jirritorna shortcode li jista' jiġi inkorporat fi kwalunkwe post jew paġna.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Isem tal-formola muri fl-admin tal-plugin tal-formola |
| `fields` | array | Yes | Lista ordnata ta' oqsma tal-formola (ara l-oġġett Field hawn taħt) |
| `recipient` | string | No | Indirizz tal-email biex jirċievi s-sottomissjonijiet. B'mod awtomatiku juża l-email tal-admin ta' WordPress |
| `subject` | string | No | Linja tas-suġġett tal-email. Tappoġġja placeholders `[your-name]` u `[your-subject]` meta tuża Contact Form 7 |
| `confirmation_message` | string | No | Messaġġ muri wara sottomissjoni b'suċċess. Default: `"Thank you for your message. We'll be in touch soon."` |

**Oġġett Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Isem intern tal-qasam / ċavetta tal-magna |
| `label` | string | Yes | Tikketta li tinftiehem mill-bniedem murija fuq il-formola |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Jekk il-qasam iridx jimtela qabel is-sottomissjoni. Default `false` |
| `options` | array | No | Għażliet għall-oqsma `select`, `checkbox`, u `radio` |
| `placeholder` | string | No | Test placeholder għal inputs tat-tip test |

**Eżempju**

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

**Jirritorna**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Reviżjoni Viżwali

Il-kapaċitajiet ta' Reviżjoni Viżwali jħallu lill-agent jaqbad screenshots ta' paġni live u janalizzahom, u b'hekk jippermettu reviżjoni tad-disinn awtonoma, paraguni qabel/wara, u kontrolli ta' rigressjoni viżwali mingħajr ma tkun meħtieġa xi browser extension.

### `capture_screenshot`

Jaqbad screenshot ta' paġna WordPress f'URL mogħti bl-użu ta' browser headless fuq in-naħa tas-server. L-immaġni tiġi ssejvjata fil-Media Library u jintbagħat lura URL tas-CDN.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL sħiħ tal-paġna li trid tieħu screenshot tagħha, eż. `https://example.com/about/` |
| `width` | integer | No | Wisa' tal-viewport f'pixels. Default `1280` |
| `height` | integer | No | Għoli tal-viewport f'pixels. Default `800` |
| `full_page` | boolean | No | Aqbad il-paġna sħiħa li tista' tiskrollja minflok biss il-viewport. Default `false` |
| `delay_ms` | integer | No | Millisekondi li tistenna wara li titgħabba l-paġna qabel taqbadha, utli għal kontenut animat. Default `500` |
| `label` | string | No | Tikketta li tinftiehem mill-bniedem maħżuna mal-attachment fil-Media Library |

**Jirritorna**

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

### `compare_screenshots`

Jieħu żewġ screenshots u jirritorna punteġġ ta' differenza viżwali flimkien ma' immaġni tad-differenza li tenfasizza r-reġjuni mibdula. Utli biex tikkonferma li bidla fid-disinn ipproduċiet ir-riżultat mistenni jew biex tiskopri regressjonijiet mhux intenzjonati.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL tal-paġna li għandha tinqabad bħala l-istat "qabel" |
| `after_url` | string | Yes | URL tal-paġna li għandha tinqabad bħala l-istat "wara". Jista' jkun l-istess URL jekk qed tqabbel maż-żmien |
| `width` | integer | No | Wisa' tal-viewport għaż-żewġ qabdiet. Default `1280` |
| `threshold` | float | No | Limitu tad-differenza fil-pixels (0.0–1.0). Pixels fi ħdan din it-tolleranza jitqiesu mhux mibdula. Default `0.1` |

**Jirritorna**

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

`diff_score` ta' `0.0` ifisser l-ebda bidla viżibbli; `1.0` ifisser li kull pixel inbidel.

---

### `review_page_design`

Jaqbad screenshot ta' paġna u jibgħatha lill-mudell tal-lingwa għal analiżi viżwali. Jirritorna valutazzjoni strutturata li tkopri t-tqassim, it-tipografija, l-użu tal-kulur, u tħassib dwar l-aċċessibbiltà.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL sħiħ tal-paġna li trid tirrevedi |
| `focus` | string | No | Lista separata b'virgoli ta' oqsma ta' reviżjoni li trid tenfasizza: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: l-oqsma kollha |
| `width` | integer | No | Wisa' tal-viewport. Default `1280` |

**Jirritorna**

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

## Kapaċitajiet Installabbli

Ir-Reġistru tal-Kapaċitajiet Installabbli jħallik testendi l-agent b'pakketti ta' kapaċitajiet addizzjonali mqassma bħala plugins ta' WordPress. Kull pakkett jirreġistra kapaċità waħda jew aktar bl-użu tal-API standard tal-kapaċitajiet.

### `list_available_abilities`

Jirritorna l-katalgu ta' pakketti ta' kapaċitajiet disponibbli għall-installazzjoni mir-reġistru.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `category` | string | Le | Iffiltra skont il-kategorija: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Jirritorna**

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

### `install_ability`

Iniżżel u jattiva pakkett ta’ abilità mir-reġistru.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `slug` | string | Iva | slug tal-plugin tal-pakkett ta’ abilità |

**Jirritorna** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Jistaqsi lir-reġistru tal-abilitajiet biex isib l-aħjar plugin għal każ ta’ użu deskritt u, b’mod fakultattiv, jinstallah.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `description` | string | Iva | Deskrizzjoni b’lingwa naturali tal-funzjonalità mixtieqa |
| `install` | boolean | Le | Jekk `true`, jinstalla l-plugin irrakkomandat immedjatament. Default `false` |

**Eżempju**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Jirritorna**

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
