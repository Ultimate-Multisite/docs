---
title: Cyfeirnod Galluoedd
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Cyfeirnod Galluoedd

Galluoedd yw’r gweithredoedd atomig y gall Gratis AI Agent eu galw ar eich gosodiad WordPress. Mae pob gallu yn ddosbarth PHP cofrestredig sy’n datgelu schema JSON — mae’r agent yn darllen y schema hwn adeg rhedeg i ddeall pa baramedrau sy’n ofynnol a beth mae’r gallu’n ei ddychwelyd.

Mae’r dudalen hon yn dogfennu’r holl alluoedd sy’n cael eu cludo gyda Gratis AI Agent v1.9.0.

---

## Mathau Postiadau Personol {#custom-post-types}

Mae’r galluoedd hyn yn rheoli mathau postiadau personol (CPTs) sydd wedi’u cofrestru drwy’r agent. Mae cofrestriadau’n cael eu cadw yn nhabl opsiynau WordPress fel eu bod yn goroesi dadactifadu ac ailactifadu’r plugin.

### `register_post_type` {#registerposttype}

Yn cofrestru math postiad personol newydd.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Allwedd y math postiad (uchafswm 20 nod, dim priflythrennau, dim bylchau) |
| `singular_label` | string | Yes | Enw unigol darllenadwy i bobl, e.e. `Portfolio Item` |
| `plural_label` | string | Yes | Enw lluosog darllenadwy i bobl, e.e. `Portfolio Items` |
| `public` | boolean | No | A yw’r math postiad yn hygyrch yn gyhoeddus. Rhagosodiad `true` |
| `supports` | array | No | Nodweddion i’w cefnogi: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Rhagosodiad `["title","editor"]` |
| `has_archive` | boolean | No | A yw tudalen archif math postiad wedi’i galluogi. Rhagosodiad `false` |
| `menu_icon` | string | No | Dosbarth Dashicons neu URL ar gyfer eicon dewislen y gweinyddwr. Rhagosodiad `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug ar gyfer y math postiad. Yn rhagosod i `slug` |

**Enghraifft**

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

**Yn dychwelyd** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Yn dychwelyd yr holl fathau postiadau personol a gofrestrwyd gan yr agent.

**Paramedrau** — dim

**Yn dychwelyd**

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

Yn dadgofrestru math postiad personol a gofrestrwyd yn flaenorol gan yr agent. Mae postiadau presennol o’r math hwnnw’n aros yn y gronfa ddata ond nid ydynt bellach yn hygyrch drwy’r math postiad.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Allwedd y math postiad i’w dileu |

**Yn dychwelyd** `{ "success": true, "slug": "portfolio" }`

---

## Tacsonomegau Personol {#custom-taxonomies}

Mae’r galluoedd hyn yn rheoli tacsonomegau personol. Fel CPTs, mae cofrestriadau tacsonomeg yn cael eu cadw.

### `register_taxonomy` {#registertaxonomy}

Yn cofrestru tacsonomeg bersonol newydd.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Allwedd y dacsonomeg (uchafswm 32 nod) |
| `singular_label` | string | Yes | Enw unigol darllenadwy i bobl, e.e. `Project Category` |
| `plural_label` | string | Yes | Enw lluosog darllenadwy i bobl, e.e. `Project Categories` |
| `post_types` | array | Yes | Slugs mathau postiadau y dylai’r dacsonomeg hon gael ei hatodi iddynt |
| `hierarchical` | boolean | No | `true` ar gyfer arddull categori, `false` ar gyfer arddull tag. Rhagosodiad `true` |
| `public` | boolean | No | A yw termau’n hygyrch yn gyhoeddus. Rhagosodiad `true` |
| `rewrite_slug` | string | No | URL slug ar gyfer y dacsonomeg. Yn rhagosod i `slug` |

**Enghraifft**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Yn dychwelyd** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Yn dychwelyd yr holl dacsonomegau personol a gofrestrwyd gan yr agent.

**Paramedrau** — dim

**Yn dychwelyd**

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

Yn dadgofrestru tacsonomeg bersonol a gofrestrwyd yn flaenorol gan yr agent.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Allwedd y dacsonomeg i’w dileu |

**Yn dychwelyd** `{ "success": true, "slug": "project-category" }`

---

## System Ddylunio {#design-system}

Mae galluoedd y system ddylunio yn addasu cyflwyniad gweledol y safle WordPress — o CSS personol i batrymau bloc a logo’r safle.

### `inject_custom_css` {#injectcustomcss}

Yn atodi CSS i `<head>` y safle drwy `wp_add_inline_style`. Mae CSS yn cael ei storio yn yr opsiwn `gratis_ai_agent_custom_css` ac yn cael ei dynnu o’r ciw yn lân pan gaiff y gallu ei ailosod.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS dilys i’w chwistrellu |
| `label` | string | No | Label darllenadwy i bobl ar gyfer y bloc CSS hwn, a ddefnyddir mewn logiau dadfygio. Rhagosodiad `"agent-injected"` |
| `replace` | boolean | No | Os yw `true`, mae’n disodli’r holl CSS a chwistrellwyd yn flaenorol. Rhagosodiad `false` (yn atodi) |

**Enghraifft**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Yn dychwelyd** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Yn cofrestru patrwm bloc ailddefnyddiadwy yn llyfrgell batrymau WordPress.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Dynodydd patrwm, e.e. `gratis/hero-dark` |
| `title` | string | Yes | Enw patrwm darllenadwy i bobl a ddangosir yn y golygydd |
| `content` | string | Yes | Marcio bloc wedi’i gyfresoli (HTML) ar gyfer y patrwm |
| `categories` | array | No | Slugs categorïau patrwm, e.e. `["featured", "hero"]` |
| `description` | string | No | Disgrifiad byr a ddangosir yn y dewisydd patrwm |
| `keywords` | array | No | Allweddeiriau chwilio |

**Yn dychwelyd** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Yn rhestru’r holl batrymau bloc a gofrestrwyd gan yr agent.

**Paramedrau** — dim

**Yn dychwelyd**

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

Yn gosod logo safle WordPress i ID atodiad penodol neu URL delwedd bell. Pan ddarperir URL, caiff y ddelwedd ei lawrlwytho a'i mewnforio i'r Media Library.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `attachment_id` | integer | Na | ID atodiad Media Library presennol |
| `url` | string | Na | URL delwedd bell i'w mewnforio a'i gosod fel y logo |

Rhaid darparu un o `attachment_id` neu `url`.

**Yn dychwelyd** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Yn cymhwyso rhagosodiad lliw/teipograffeg ag enw i `theme.json` (neu `global-styles`) y thema gweithredol. Mae rhagosodiadau yn fwndeli wedi'u curadu a gynhelir gan dîm Gratis AI Agent.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `preset` | string | Ie | Enw rhagosodiad, e.e. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Na | Os yw'n `true`, uno â gwerthoedd presennol yn hytrach na'u disodli. Rhagosodiad `false` |

**Rhagosodiadau sydd ar gael**

| Rhagosodiad | Disgrifiad |
|---|---|
| `minimal-dark` | Cefndir bron yn ddu, testun gwyn, un lliw acen |
| `warm-editorial` | Cefndir gwyn cynnes, penawdau serif, lliwiau acen priddlyd |
| `corporate-blue` | Palet glas tywyll a gwyn gyda theipograffeg broffesiynol |
| `vibrant-startup` | Graddiantau llachar, corneli crwn, teip sans-serif modern |
| `classic-blog` | Llwydion niwtral, uchder llinell cyfforddus, bylchu cynllun traddodiadol |

**Yn dychwelyd** `{ "success": true, "preset": "minimal-dark" }`

---

## Arddulliau Byd-eang {#global-styles}

Mae galluoedd Arddulliau Byd-eang yn darllen ac yn ysgrifennu gwerthoedd theme.json drwy WordPress Global Styles API, gan effeithio ar bob bloc a thempled ar draws y safle.

### `get_global_styles` {#getglobalstyles}

Yn dychwelyd y ffurfweddiad arddulliau byd-eang cyfredol.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `path` | string | Na | Pwyntydd JSON at werth penodol, e.e. `/color/palette` neu `/typography/fontSizes`. Yn dychwelyd y gwrthrych cyfan os caiff ei hepgor. |

**Yn dychwelyd** y gwrthrych arddulliau byd-eang llawn neu'r gwerth yn `path`.

---

### `set_global_styles` {#setglobalstyles}

Yn diweddaru un neu fwy o werthoedd yn y ffurfweddiad arddulliau byd-eang.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `path` | string | Ie | Pwyntydd JSON at y gwerth i'w osod, e.e. `/color/palette` |
| `value` | any | Ie | Y gwerth newydd |

**Enghraifft** — ychwanegu lliw at y palet

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Yn dychwelyd** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Yn ailosod pob newid arddull byd-eang a gymhwyswyd gan yr asiant, gan adfer rhagosodiadau'r thema.

**Paramedrau** — dim

**Yn dychwelyd** `{ "success": true }`

---

## Dewislenni Llywio {#navigation-menus}

Mae galluoedd Dewislen Llywio yn creu ac yn rheoli dewislenni llywio WordPress a'u heitemau.

### `create_menu` {#createmenu}

Yn creu dewislen lywio WordPress newydd.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `name` | string | Ie | Enw dewislen, e.e. `Primary Navigation` |
| `location` | string | Na | Lleoliad thema i aseinio'r ddewislen hon iddo, e.e. `primary` |

**Yn dychwelyd** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Yn ailenwi dewislen neu'n ei hailaseinio i leoliad thema.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `menu_id` | integer | Ie | ID y ddewislen i'w diweddaru |
| `name` | string | Na | Enw dewislen newydd |
| `location` | string | Na | Lleoliad thema i'w aseinio neu ei ailaseinio |

**Yn dychwelyd** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Yn ychwanegu eitem at ddewislen lywio bresennol.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `menu_id` | integer | Ie | ID y ddewislen darged |
| `type` | string | Ie | Math o eitem: `custom`, `post_type`, neu `taxonomy` |
| `title` | string | Na | Label ar gyfer eitem y ddewislen (gofynnol ar gyfer math `custom`) |
| `url` | string | Na | URL ar gyfer eitemau `custom` |
| `object_id` | integer | Na | ID postiad neu ID term ar gyfer eitemau `post_type`/`taxonomy` |
| `parent_id` | integer | Na | ID eitem dewislen i nythu'r eitem hon oddi tani |
| `position` | integer | Na | Safle seiliedig ar sero yn y ddewislen |

**Yn dychwelyd** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Yn tynnu eitem o ddewislen lywio.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `item_id` | integer | Ie | ID eitem dewislen i'w thynnu |

**Yn dychwelyd** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Yn rhestru pob dewislen lywio WordPress, gan gynnwys eu lleoliadau thema aseinedig.

**Paramedrau** — dim

**Yn dychwelyd**

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

## Rheoli Opsiynau {#options-management}

Mae galluoedd opsiynau yn darllen ac yn ysgrifennu opsiynau WordPress drwy `get_option` / `update_option`. Mae rhestr flocio diogelwch fewnol yn atal addasu gosodiadau critigol yn ddamweiniol.

### `get_option` {#getoption}

Yn darllen opsiwn WordPress.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `option_name` | string | Ie | Allwedd yr opsiwn, e.e. `blogname` |

**Yn dychwelyd** `{ "option_name": "blogname", "value": "My Site" }`

Yn dychwelyd gwall os yw `option_name` ar y rhestr flocio diogelwch.

---

### `set_option` {#setoption}

Yn ysgrifennu opsiwn WordPress.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `option_name` | string | Ie | Allwedd yr opsiwn |
| `value` | any | Ie | Y gwerth newydd (wedi'i gyfresioli'n awtomatig ar gyfer araeau/gwrthrychau) |
| `autoload` | string | Na | `"yes"` neu `"no"`. Mae'r rhagosodiad yn cadw'r gosodiad autoload presennol |

Yn dychwelyd gwall os yw `option_name` ar y rhestr flocio diogelwch.

**Yn dychwelyd** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Yn dileu opsiwn WordPress.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `option_name` | string | Ie | Yr allwedd opsiwn i'w dileu |

Yn dychwelyd gwall os yw `option_name` ar y rhestr flocio diogelwch.

**Yn dychwelyd** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Yn rhestru opsiynau WordPress sy'n cyfateb i batrwm.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `pattern` | string | Na | Patrwm SQL LIKE i hidlo enwau opsiynau, e.e. `gratis_%`. Yn dychwelyd pob opsiwn os caiff ei hepgor (defnyddiwch yn ofalus ar gronfeydd data mawr). |
| `limit` | integer | Na | Uchafswm nifer y canlyniadau. Rhagosodiad `50`, uchafswm `500` |

**Yn dychwelyd**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Rheoli Cynnwys {#content-management}

Mae galluoedd Rheoli Cynnwys yn creu ac yn golygu postiadau a thudalennau WordPress. Dychwelir IDau postiadau fel y gall camau dilynol mewn cynlluniau aml-allu gyfeirio at y cynnwys a grëwyd.

### `create_post` {#createpost}

Yn creu cofnod postiad, tudalen, neu fath postiad personol WordPress newydd.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `title` | string | Ie | Teitl postiad |
| `content` | string | Na | Corff postiad — yn derbyn testun plaen, HTML, neu farcio bloc wedi'i gyfresoli |
| `status` | string | Na | `draft`, `publish`, `pending`, `private`. Rhagosodiad `draft` |
| `post_type` | string | Na | Slug math postiad, e.e. `post`, `page`, neu unrhyw CPT cofrestredig. Rhagosodiad `post` |
| `excerpt` | string | Na | Crynodeb byr a ddangosir mewn archifau a chanlyniadau chwilio |
| `categories` | array | Na | Arae o enwau neu IDau categorïau i'w neilltuo |
| `tags` | array | Na | Arae o enwau neu IDau tagiau i'w neilltuo |
| `author` | integer | Na | ID defnyddiwr WordPress i'w osod fel awdur y postiad. Yn rhagosod i'r defnyddiwr presennol |
| `date` | string | Na | Dyddiad cyhoeddi mewn fformat ISO 8601, e.e. `2026-05-01T09:00:00` |
| `page_template` | string | Na | Ffeil templed i'w neilltuo i'r postiad neu'r dudalen hon, e.e. `page-full-width.php`. Dim ond pan fo `post_type` yn `page` neu'n CPT sy'n cefnogi templedi tudalen y mae hyn yn ystyrlon. |

**Enghraifft**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Yn dychwelyd** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Yn diweddaru postiad neu dudalen WordPress bresennol.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `post_id` | integer | Ie | ID y postiad i'w ddiweddaru |
| `title` | string | Na | Teitl postiad newydd |
| `content` | string | Na | Corff postiad newydd |
| `status` | string | Na | Statws newydd: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Na | Dyfyniad newydd |
| `categories` | array | Na | Disodli'r rhestr gategorïau lawn â'r arae hon o enwau neu IDau |
| `tags` | array | Na | Disodli'r rhestr dagiau lawn â'r arae hon o enwau neu IDau |
| `page_template` | string | Na | Ffeil templed newydd i'w neilltuo i'r postiad neu'r dudalen hon, e.e. `page-full-width.php`. Pasiwch linyn gwag i ddileu'r aseiniad templed ac adfer rhagosodiad y theme. |

**Enghraifft** — newid templed ar ôl creu

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Yn dychwelyd** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Yn creu sawl postiad mewn un galwad gallu, gan leihau teithiau yn ôl ac ymlaen yn ystod adeiladau safle neu fewnforio cynnwys swmp. Crëir postiadau mewn trefn; os bydd un yn methu, bydd y lleill yn parhau a chaiff y methiant ei adrodd yn yr arae canlyniadau.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `posts` | array | Ie | Arae o wrthrychau postiad, pob un yn derbyn yr un paramedrau â `create_post` |
| `stop_on_error` | boolean | Na | Os yw `true`, stopiwch brosesu ar ôl y methiant cyntaf. Rhagosodiad `false` |

**Enghraifft**

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

**Yn dychwelyd**

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

Yn neilltuo delwedd dan sylw (mân-lun postiad) i bostiad neu dudalen bresennol. Yn derbyn ID atodiad Media Library presennol neu URL delwedd o bell; pan ddarperir URL, caiff y ddelwedd ei lawrlwytho a'i mewnforio'n awtomatig.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `post_id` | integer | Ie | ID y postiad neu'r dudalen i'w diweddaru |
| `attachment_id` | integer | Na | ID atodiad Media Library presennol |
| `url` | string | Na | URL delwedd o bell i'w mewnforio a'i osod fel y ddelwedd dan sylw |
| `alt_text` | string | Na | Testun amgen i'w gymhwyso i'r atodiad os caiff ei fewnforio o URL |

Rhaid darparu un o `attachment_id` neu `url`.

**Yn dychwelyd** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Yn creu ffurflen gyswllt gan ddefnyddio'r plugin ffurflen gweithredol (Contact Form 7, WPForms, Fluent Forms, neu Gravity Forms, yn dibynnu ar ba un sydd wedi'i osod). Yn dychwelyd shortcode y gellir ei ymgorffori mewn unrhyw bostiad neu dudalen.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `title` | string | Ie | Enw’r ffurflen a ddangosir yng ngweinyddiaeth y plugin ffurflenni |
| `fields` | array | Ie | Rhestr drefnedig o feysydd ffurflen (gweler gwrthrych Field isod) |
| `recipient` | string | Na | Cyfeiriad e-bost i dderbyn cyflwyniadau. Yn ddiofyn i e-bost gweinyddol WordPress |
| `subject` | string | Na | Llinell pwnc e-bost. Yn cefnogi dalfannau `[your-name]` a `[your-subject]` wrth ddefnyddio Contact Form 7 |
| `confirmation_message` | string | Na | Neges a ddangosir ar ôl cyflwyniad llwyddiannus. Diofyn: `"Thank you for your message. We'll be in touch soon."` |

**Gwrthrych maes**

| Allwedd | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `name` | string | Ie | Enw maes mewnol / allwedd peiriant |
| `label` | string | Ie | Label darllenadwy i bobl a ddangosir ar y ffurflen |
| `type` | string | Ie | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Na | A oes rhaid llenwi’r maes cyn cyflwyno. Diofyn `false` |
| `options` | array | Na | Opsiynau ar gyfer meysydd `select`, `checkbox`, a `radio` |
| `placeholder` | string | Na | Testun dalfan ar gyfer mewnbynnau math testun |

**Enghraifft**

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

**Yn dychwelyd**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Adolygiad Gweledol {#visual-review}

Mae galluoedd Adolygiad Gweledol yn caniatáu i’r agent gipio sgrinluniau o dudalennau byw a’u dadansoddi, gan alluogi adolygiad dylunio ymreolaethol, cymariaethau cyn/ar ôl, a gwiriadau atchweliad gweledol heb fod angen unrhyw estyniad porwr.

### `capture_screenshot` {#capturescreenshot}

Yn cipio sgrinlun o dudalen WordPress ar URL penodol gan ddefnyddio porwr di-ben ochr gweinydd. Caiff y ddelwedd ei chadw i’r Media Library a dychwelir URL CDN.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `url` | string | Ie | URL llawn y dudalen i’w sgrinlunio, e.e. `https://example.com/about/` |
| `width` | integer | Na | Lled y porth gwylio mewn picseli. Diofyn `1280` |
| `height` | integer | Na | Uchder y porth gwylio mewn picseli. Diofyn `800` |
| `full_page` | boolean | Na | Cipio’r dudalen sgroladwy lawn yn hytrach na dim ond y porth gwylio. Diofyn `false` |
| `delay_ms` | integer | Na | Milieiliadau i aros ar ôl llwytho’r dudalen cyn cipio, yn ddefnyddiol ar gyfer cynnwys animeiddiedig. Diofyn `500` |
| `label` | string | Na | Label darllenadwy i bobl a storir gyda’r atodiad yn y Media Library |

**Yn dychwelyd**

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

Yn cymryd dau sgrinlun ac yn dychwelyd sgôr gwahaniaeth gweledol ynghyd â delwedd wahaniaeth sy’n amlygu rhanbarthau sydd wedi newid. Yn ddefnyddiol ar gyfer cadarnhau bod newid dylunio wedi cynhyrchu’r canlyniad disgwyliedig neu ar gyfer canfod atchweliadau anfwriadol.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `before_url` | string | Ie | URL y dudalen i’w chipio fel y cyflwr "cyn" |
| `after_url` | string | Ie | URL y dudalen i’w chipio fel y cyflwr "ar ôl". Gall fod yr un URL os yn cymharu dros amser |
| `width` | integer | Na | Lled y porth gwylio ar gyfer y ddau gipiad. Diofyn `1280` |
| `threshold` | float | Na | Trothwy gwahaniaeth picseli (0.0–1.0). Ystyrir picseli o fewn y goddefiant hwn yn ddigyfnewid. Diofyn `0.1` |

**Yn dychwelyd**

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

Mae `diff_score` o `0.0` yn golygu dim newid gweladwy; mae `1.0` yn golygu bod pob picsel wedi newid.

---

### `review_page_design` {#reviewpagedesign}

Yn cipio sgrinlun o dudalen ac yn ei anfon at y model iaith ar gyfer dadansoddiad gweledol. Yn dychwelyd asesiad strwythuredig sy’n cwmpasu cynllun, teipograffeg, defnydd lliw, a phryderon hygyrchedd.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `url` | string | Ie | URL llawn y dudalen i’w hadolygu |
| `focus` | string | Na | Rhestr wedi’i gwahanu â chomas o feysydd adolygu i’w pwysleisio: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Diofyn: pob maes |
| `width` | integer | Na | Lled y porth gwylio. Diofyn `1280` |

**Yn dychwelyd**

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

## Galluoedd Gosodadwy {#installable-abilities}

Mae’r Gofrestrfa Galluoedd Gosodadwy yn caniatáu i chi estyn yr agent gyda phecynnau gallu ychwanegol a ddosberthir fel plugins WordPress. Mae pob pecyn yn cofrestru un neu fwy o alluoedd gan ddefnyddio’r API gallu safonol.

### `list_available_abilities` {#listavailableabilities}

Yn dychwelyd catalog y pecynnau gallu sydd ar gael i’w gosod o’r gofrestrfa.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `category` | string | Na | Hidlo yn ôl categori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Yn dychwelyd**

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

Yn lawrlwytho ac yn actifadu pecyn gallu o’r gofrestrfa.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `slug` | string | Ie | Slug plugin pecyn gallu |

**Yn dychwelyd** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Yn ymholi’r gofrestrfa galluoedd i ddod o hyd i’r plugin gorau ar gyfer achos defnydd a ddisgrifir ac, yn ddewisol, yn ei osod.

**Paramedrau**

| Paramedr | Math | Gofynnol | Disgrifiad |
|---|---|---|---|
| `description` | string | Ie | Disgrifiad iaith naturiol o’r swyddogaeth a ddymunir |
| `install` | boolean | Na | Os yw `true`, yn gosod y plugin a argymhellir ar unwaith. Rhagosodiad `false` |

**Enghraifft**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Yn dychwelyd**

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
