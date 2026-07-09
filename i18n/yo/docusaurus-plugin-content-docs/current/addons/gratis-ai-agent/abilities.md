---
title: Ìtọ́kasí Àwọn Agbára
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Itọ́kasí Abilities

Abilities ni àwọn ìṣe atomiki tí Gratis AI Agent lè pè lórí fifi sori WordPress rẹ. Ability kọọkan jẹ́ PHP class tí a ti forúkọsílẹ̀ tí ó ṣàfihàn JSON schema — agent máa ka schema yìí ní àsìkò ìṣiṣẹ́ láti lóye àwọn parameter tí a nílò àti ohun tí ability náà máa dá padà.

Ojúewé yìí ṣàkọsílẹ̀ gbogbo abilities tí ń bọ̀ pẹ̀lú Gratis AI Agent v1.9.0.

---

## Àwọn Custom Post Types

Àwọn abilities wọ̀nyí ń ṣàkóso custom post types (CPTs) tí a forúkọsílẹ̀ nípasẹ̀ agent. Àwọn ìforúkọsílẹ̀ ni a pa mọ́ sínú tábìlì WordPress options kí wọ́n lè yè lẹ́yìn dídá plugin dúró àti fífi í ṣiṣẹ́ padà.

### `register_post_type`

Forúkọsílẹ̀ custom post type tuntun.

**Àwọn Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bẹ́ẹ̀ni | Bọ́tìnì post type (ó pọ̀jù 20 characters, kò sí lẹ́tà ńlá, kò sí ààyè) |
| `singular_label` | string | Bẹ́ẹ̀ni | Orúkọ ẹyọ kan tí ènìyàn lè kà, fún àpẹẹrẹ `Portfolio Item` |
| `plural_label` | string | Bẹ́ẹ̀ni | Orúkọ ọ̀pọ̀ tí ènìyàn lè kà, fún àpẹẹrẹ `Portfolio Items` |
| `public` | boolean | Rárá | Bóyá post type náà ṣeé wọlé sí ní gbangba. Default `true` |
| `supports` | array | Rárá | Àwọn ànfààní láti ṣe àtìlẹ́yìn fún: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | Rárá | Bóyá ojúewé archive post type ti ṣiṣẹ́. Default `false` |
| `menu_icon` | string | Rárá | Dashicons class tàbí URL fún aami menu admin. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | Rárá | URL slug fún post type náà. Ó máa lo `slug` bí default |

**Àpẹẹrẹ**

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

**Ó dá padà** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Dá gbogbo custom post types tí agent forúkọsílẹ̀ padà.

**Àwọn Parameter** — kò sí

**Ó dá padà**

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

Yọ ìforúkọsílẹ̀ custom post type kan tí agent ti forúkọsílẹ̀ tẹ́lẹ̀. Àwọn posts tó wà tẹ́lẹ̀ ti irú yẹn máa wà nínú database ṣùgbọ́n wọn kì yóò ṣeé wọlé sí mọ́ nípasẹ̀ post type náà.

**Àwọn Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bẹ́ẹ̀ni | Bọ́tìnì post type láti yọ |

**Ó dá padà** `{ "success": true, "slug": "portfolio" }`

---

## Àwọn Custom Taxonomies

Àwọn abilities wọ̀nyí ń ṣàkóso custom taxonomies. Gẹ́gẹ́ bí CPTs, àwọn ìforúkọsílẹ̀ taxonomy ni a pa mọ́.

### `register_taxonomy`

Forúkọsílẹ̀ custom taxonomy tuntun.

**Àwọn Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bẹ́ẹ̀ni | Bọ́tìnì taxonomy (ó pọ̀jù 32 characters) |
| `singular_label` | string | Bẹ́ẹ̀ni | Orúkọ ẹyọ kan tí ènìyàn lè kà, fún àpẹẹrẹ `Project Category` |
| `plural_label` | string | Bẹ́ẹ̀ni | Orúkọ ọ̀pọ̀ tí ènìyàn lè kà, fún àpẹẹrẹ `Project Categories` |
| `post_types` | array | Bẹ́ẹ̀ni | Àwọn post type slugs tí taxonomy yìí yẹ kí a so mọ́ |
| `hierarchical` | boolean | Rárá | `true` fún ara category, `false` fún ara tag. Default `true` |
| `public` | boolean | Rárá | Bóyá terms ṣeé wọlé sí ní gbangba. Default `true` |
| `rewrite_slug` | string | Rárá | URL slug fún taxonomy náà. Ó máa lo `slug` bí default |

**Àpẹẹrẹ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Ó dá padà** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Dá gbogbo custom taxonomies tí agent forúkọsílẹ̀ padà.

**Àwọn Parameter** — kò sí

**Ó dá padà**

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

Yọ ìforúkọsílẹ̀ custom taxonomy kan tí agent ti forúkọsílẹ̀ tẹ́lẹ̀.

**Àwọn Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bẹ́ẹ̀ni | Bọ́tìnì taxonomy láti yọ |

**Ó dá padà** `{ "success": true, "slug": "project-category" }`

---

## Eto Design

Àwọn abilities eto design ń yí ìfihàn ojú ti site WordPress padà — láti custom CSS sí block patterns àti site logo.

### `inject_custom_css`

Fi CSS kun `<head>` ti site nípasẹ̀ `wp_add_inline_style`. A pa CSS mọ́ sínú option `gratis_ai_agent_custom_css` a sì yọ ọ́ kúrò ní mímọ́ nígbà tí ability náà bá jẹ́ reset.

**Àwọn Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Bẹ́ẹ̀ni | CSS tó péye láti fi sínú |
| `label` | string | Rárá | Label tí ènìyàn lè kà fún block CSS yìí, tí a lò nínú debug logs. Default `"agent-injected"` |
| `replace` | boolean | Rárá | Bí `true`, ó rọ́pò gbogbo CSS tí a ti fi sínú tẹ́lẹ̀. Default `false` (ó fi kun) |

**Àpẹẹrẹ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Ó dá padà** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Forúkọsílẹ̀ block pattern tí a lè tún lò nínú ilé-ìkànsí pattern WordPress.

**Àwọn Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Bẹ́ẹ̀ni | Àmìdámọ̀ pattern, fún àpẹẹrẹ `gratis/hero-dark` |
| `title` | string | Bẹ́ẹ̀ni | Orúkọ pattern tí ènìyàn lè kà tí a fi hàn nínú editor |
| `content` | string | Bẹ́ẹ̀ni | Serialised block markup (HTML) fún pattern náà |
| `categories` | array | Rárá | Àwọn category slugs ti pattern, fún àpẹẹrẹ `["featured", "hero"]` |
| `description` | string | Rárá | Àpèjúwe kúkúrú tí a fi hàn nínú pattern picker |
| `keywords` | array | Rárá | Àwọn ọ̀rọ̀ ìṣàwárí |

**Ó dá padà** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Ṣe àtòkọ gbogbo block patterns tí agent forúkọsílẹ̀.

**Àwọn Parameter** — kò sí

**Ó dá padà**

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

Ó ṣètò àmì àwòrán site WordPress sí attachment ID tí a fún un tàbí URL àwòrán jíjìn. Nígbà tí a bá pèsè URL, a máa gba àwòrán náà sílẹ̀, a ó sì gbé e wọ Media Library.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `attachment_id` | integer | Rárá | ID ti attachment Media Library tó ti wà |
| `url` | string | Rárá | URL àwòrán jíjìn láti gbé wọlé kí a sì ṣètò rẹ̀ gẹ́gẹ́ bí logo |

Ọ̀kan nínú `attachment_id` tàbí `url` gbọ́dọ̀ wà.

**Ó dá padà** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Ó lo preset àwọ̀/typography tí a dárúkọ sí `theme.json` ti theme tó ń ṣiṣẹ́ (tàbí `global-styles`). Presets jẹ́ àwọn ìdìpọ̀ tí a ti ṣètò tí ẹgbẹ́ Gratis AI Agent ń tọ́jú.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `preset` | string | Bẹ́ẹ̀ni | Orúkọ preset, bí àpẹẹrẹ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Rárá | Bí ó bá jẹ́ `true`, dapọ̀ mọ́ àwọn iye tó wà dípò rírọ́pò wọn. Àìyípadà jẹ́ `false` |

**Àwọn preset tó wà**

| Preset | Àpèjúwe |
|---|---|
| `minimal-dark` | Abẹ́lẹ̀ tó fẹ́rẹ̀ẹ́ dúdú, ọ̀rọ̀ funfun, àwọ̀ ìtẹnumọ́ kan ṣoṣo |
| `warm-editorial` | Abẹ́lẹ̀ off-white tó gbóná, àkọlé serif, àwọn àwọ̀ ìtẹnumọ́ ayé |
| `corporate-blue` | Palette navy àti funfun pẹ̀lú typography amọ̀ṣẹ́dunjú |
| `vibrant-startup` | Àwọn gradient tó tàn, igun yíyika, irú ọ̀rọ̀ sans-serif òde òní |
| `classic-blog` | Àwọn grẹ́ẹ̀yì neutral, gíga laini tó rọrùn, ààyè layout àtọwọ́dọ́wọ́ |

**Ó dá padà** `{ "success": true, "preset": "minimal-dark" }`

---

## Àwọn Global Styles

Àwọn agbára Global Styles ń ka, wọ́n sì ń kọ àwọn iye theme.json nípasẹ̀ WordPress Global Styles API, tó ń kan gbogbo blocks àti templates jákèjádò site.

### `get_global_styles`

Ó dá iṣètò global styles lọwọlọwọ padà.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `path` | string | Rárá | JSON pointer sí iye pàtó kan, bí àpẹẹrẹ `/color/palette` tàbí `/typography/fontSizes`. Ó dá gbogbo object padà bí a kò bá fi í sílẹ̀. |

**Ó dá padà** object global styles kíkún tàbí iye ní `path`.

---

### `set_global_styles`

Ó ṣe àfikún tàbí àtúnṣe sí iye kan tàbí púpọ̀ nínú iṣètò global styles.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `path` | string | Bẹ́ẹ̀ni | JSON pointer sí iye tí a fẹ́ ṣètò, bí àpẹẹrẹ `/color/palette` |
| `value` | any | Bẹ́ẹ̀ni | Iye tuntun náà |

**Àpẹẹrẹ** — ṣàfikún àwọ̀ sí palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Ó dá padà** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Ó tún gbogbo àwọn ayipada global styles tí agent lo ṣètò padà, ó sì mú àwọn àìyípadà theme padà bọ̀ sípò.

**Àwọn parâmità** — kò sí

**Ó dá padà** `{ "success": true }`

---

## Àwọn Menu Ìtòsọ́nà

Àwọn agbára Navigation Menu ń dá àwọn menu nav WordPress àti àwọn ohun inú wọn sílẹ̀, wọ́n sì ń ṣàkóso wọn.

### `create_menu`

Ó dá menu ìtòsọ́nà WordPress tuntun sílẹ̀.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `name` | string | Bẹ́ẹ̀ni | Orúkọ menu, bí àpẹẹrẹ `Primary Navigation` |
| `location` | string | Rárá | Ibi theme tí a ó fi menu yìí sí, bí àpẹẹrẹ `primary` |

**Ó dá padà** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Ó tún orúkọ menu ṣe tàbí ó tún fi sí ibi theme kan.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `menu_id` | integer | Bẹ́ẹ̀ni | ID ti menu tí a fẹ́ ṣe àtúnṣe sí |
| `name` | string | Rárá | Orúkọ menu tuntun |
| `location` | string | Rárá | Ibi theme láti fi sí tàbí láti tún fi sí |

**Ó dá padà** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Ó ṣàfikún ohun kan sí menu ìtòsọ́nà tó ti wà.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `menu_id` | integer | Bẹ́ẹ̀ni | ID ti menu afojúsùn |
| `type` | string | Bẹ́ẹ̀ni | Irú ohun: `custom`, `post_type`, tàbí `taxonomy` |
| `title` | string | Rárá | Àkọlé fún ohun menu náà (ó pọndandan fún irú `custom`) |
| `url` | string | Rárá | URL fún àwọn ohun `custom` |
| `object_id` | integer | Rárá | Post ID tàbí term ID fún àwọn ohun `post_type`/`taxonomy` |
| `parent_id` | integer | Rárá | ID ohun menu láti fi ohun yìí sábẹ́ rẹ̀ |
| `position` | integer | Rárá | Ipò tó bẹ̀rẹ̀ láti odo nínú menu |

**Ó dá padà** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Ó yọ ohun kan kúrò nínú menu ìtòsọ́nà.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `item_id` | integer | Bẹ́ẹ̀ni | ID ohun menu tí a fẹ́ yọ |

**Ó dá padà** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Ó ṣe àtòkọ gbogbo àwọn menu ìtòsọ́nà WordPress, pẹ̀lú àwọn ibi theme tí a yàn fún wọn.

**Àwọn parâmità** — kò sí

**Ó dá padà**

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

## Ìṣàkóso Àwọn Options

Àwọn agbára Options ń ka, wọ́n sì ń kọ àwọn options WordPress nípasẹ̀ `get_option` / `update_option`. Blocklist ààbò tí a kọ sínú rẹ̀ ń dènà ìyípadà àìròtẹ́lẹ̀ sí àwọn settings pàtàkì.

### `get_option`

Ó ka option WordPress kan.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `option_name` | string | Bẹ́ẹ̀ni | Kọ́kọ́rọ́ option náà, bí àpẹẹrẹ `blogname` |

**Ó dá padà** `{ "option_name": "blogname", "value": "My Site" }`

Ó dá aṣiṣe padà bí `option_name` bá wà lórí blocklist ààbò.

---

### `set_option`

Ó kọ option WordPress kan.

**Àwọn parâmità**

| Parâmità | Irú | Ṣe ó pọndandan | Àpèjúwe |
|---|---|---|---|
| `option_name` | string | Bẹ́ẹ̀ni | Kọ́kọ́rọ́ option náà |
| `value` | any | Bẹ́ẹ̀ni | Iye tuntun náà (a máa serialise rẹ̀ laifọwọ́yi fún arrays/objects) |
| `autoload` | string | Rárá | `"yes"` tàbí `"no"`. Àìyípadà ń pa iṣètò autoload tó wà mọ́ |

Dá aṣiṣe padà bí `option_name` bá wà lórí safety blocklist.

**Dá padà** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Pa aṣayan WordPress rẹ́.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `option_name` | string | Bẹẹni | Kọ́kọ́rọ́ aṣayan láti parẹ́ |

Dá aṣiṣe padà bí `option_name` bá wà lórí safety blocklist.

**Dá padà** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Ṣe àtòjọ àwọn aṣayan WordPress tó bá pattern kan mu.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `pattern` | string | Rara | SQL LIKE pattern láti ṣàyọ àwọn orúkọ aṣayan, f.a. `gratis_%`. Dá gbogbo àwọn aṣayan padà bí a kò bá fi sílẹ̀ (lò pẹ̀lú ìṣọ́ra lórí àwọn database ńlá). |
| `limit` | integer | Rara | Nọ́mbà tó pọ̀ jù fún àwọn èsì. Àìyípadà `50`, tó pọ̀ jù `500` |

**Dá padà**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Ìṣàkóso Àkóónú

Àwọn agbára Ìṣàkóso Àkóónú ń dá àti ṣàtúnṣe àwọn post àti page WordPress. Àwọn ID post ni a máa ń dá padà kí àwọn ìgbésẹ̀ tó tẹ̀lé nínú àwọn ètò agbára-púpọ̀ lè tọ́ka sí àkóónú tí a dá.

### `create_post`

Dá WordPress post, page, tàbí ìwọlé custom post type tuntun.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `title` | string | Bẹẹni | Àkọlé post |
| `content` | string | Rara | Ara post — gba plain text, HTML, tàbí serialised block markup |
| `status` | string | Rara | `draft`, `publish`, `pending`, `private`. Àìyípadà `draft` |
| `post_type` | string | Rara | Slug iru post, f.a. `post`, `page`, tàbí CPT èyíkéyìí tí a forúkọsílẹ̀. Àìyípadà `post` |
| `excerpt` | string | Rara | Àkótán kúkúrú tí a ń fi hàn nínú archives àti àwọn èsì ìṣàwárí |
| `categories` | array | Rara | Array àwọn orúkọ ẹ̀ka tàbí ID láti yàn |
| `tags` | array | Rara | Array àwọn orúkọ tag tàbí ID láti yàn |
| `author` | integer | Rara | ID oníṣe WordPress láti ṣètò gẹ́gẹ́ bí òǹkọ̀wé post. Àìyípadà sí oníṣe lọ́wọ́lọ́wọ́ |
| `date` | string | Rara | Ọjọ́ ìtẹ̀jáde ní fọ́ọ̀mù ISO 8601, f.a. `2026-05-01T09:00:00` |
| `page_template` | string | Rara | Fáìlì template láti yàn sí post tàbí page yìí, f.a. `page-full-width.php`. Ó ní ìtumọ̀ nìkan nígbà tí `post_type` jẹ́ `page` tàbí CPT tí ó ṣàtìlẹ́yìn fún àwọn template page. |

**Àpẹẹrẹ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Dá padà** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Ṣàtúnṣe WordPress post tàbí page tó wà tẹ́lẹ̀.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `post_id` | integer | Bẹẹni | ID post láti ṣàtúnṣe |
| `title` | string | Rara | Àkọlé post tuntun |
| `content` | string | Rara | Ara post tuntun |
| `status` | string | Rara | Ipo tuntun: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Rara | Excerpt tuntun |
| `categories` | array | Rara | Rọ́pò gbogbo àtòjọ ẹ̀ka pẹ̀lú array àwọn orúkọ tàbí ID yìí |
| `tags` | array | Rara | Rọ́pò gbogbo àtòjọ tag pẹ̀lú array àwọn orúkọ tàbí ID yìí |
| `page_template` | string | Rara | Fáìlì template tuntun láti yàn sí post tàbí page yìí, f.a. `page-full-width.php`. Fi string òfo ránṣẹ́ láti yọ ìyàn template kúrò kí o sì padà sí àìyípadà theme. |

**Àpẹẹrẹ** — yí template padà lẹ́yìn dídá

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Dá padà** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Dá ọ̀pọ̀ post nínú ìpè agbára kan ṣoṣo, dín round-trips kù nígbà ìkọ́ site tàbí gbígbé àkóónú wọlé lọ́pọ̀. A máa ń dá àwọn post ní tẹ̀lé-tẹ̀lé; bí ọ̀kan bá kùnà àwọn míì yóò tẹ̀síwájú, a ó sì jàbá ìkùnà náà nínú array àwọn èsì.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `posts` | array | Bẹẹni | Array àwọn object post, ọkọọkan ń gba àwọn paramita kan náà bí `create_post` |
| `stop_on_error` | boolean | Rara | Bí ó bá jẹ́ `true`, dá ṣíṣe dúró lẹ́yìn ìkùnà àkọ́kọ́. Àìyípadà `false` |

**Àpẹẹrẹ**

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

**Dá padà**

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

Yan àwòrán àfihàn (thumbnail post) sí post tàbí page tó wà tẹ́lẹ̀. Gba ID attachment Media Library tó wà tẹ́lẹ̀ tàbí URL àwòrán latọ̀nà; nígbà tí a bá pèsè URL, a ó ṣe download àwòrán náà, a ó sì gbe wọlé laifọwọyi.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `post_id` | integer | Bẹẹni | ID post tàbí page láti ṣàtúnṣe |
| `attachment_id` | integer | Rara | ID attachment Media Library tó wà tẹ́lẹ̀ |
| `url` | string | Rara | URL àwòrán latọ̀nà láti gbe wọlé kí a sì ṣètò gẹ́gẹ́ bí àwòrán àfihàn |
| `alt_text` | string | Rara | Ọ̀rọ̀ alt láti fi sí attachment bí a bá gbe e wọlé láti URL kan |

Ọ̀kan nínú `attachment_id` tàbí `url` gbọ́dọ̀ wà.

**Dá padà** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Dá form ìbánisọ̀rọ̀ ní lílo plugin form tó ń ṣiṣẹ́ (Contact Form 7, WPForms, Fluent Forms, tàbí Gravity Forms, dá lórí èyí tí a fi sílẹ̀). Dá shortcode padà tí a lè fi sínú post tàbí page èyíkéyìí.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `title` | string | Bẹẹni | Orúkọ fọ́ọ̀mù tí a fi hàn ní admin plugin fọ́ọ̀mù |
| `fields` | array | Bẹẹni | Àtòjọ àwọn aaye fọ́ọ̀mù tí a ṣètò (wo ohun Field ní ìsàlẹ̀) |
| `recipient` | string | Rárá | Àdírẹ́sì imeeli láti gba àwọn ìfiranṣẹ. Ó máa ń lo imeeli admin WordPress gẹ́gẹ́ bí aiyipada |
| `subject` | string | Rárá | Laini akọle imeeli. Ó ṣe atilẹyin àwọn placeholder `[your-name]` àti `[your-subject]` nígbà tí a bá ń lo Contact Form 7 |
| `confirmation_message` | string | Rárá | Ìfiranṣẹ tí a fi hàn lẹ́yìn fífiṣẹ́ tó ṣàṣeyọrí. Aiyipada: `"Thank you for your message. We'll be in touch soon."` |

**Ohun Field**

| Kókó | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `name` | string | Bẹẹni | Orúkọ aaye inú / kókó ẹ̀rọ |
| `label` | string | Bẹẹni | Àkọlé tí ènìyàn lè kà tí a fi hàn lórí fọ́ọ̀mù |
| `type` | string | Bẹẹni | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Rárá | Bóyá aaye náà gbọ́dọ̀ kún kí fífiṣẹ́ tó ṣẹlẹ̀. Aiyipada `false` |
| `options` | array | Rárá | Àwọn aṣàyàn fún àwọn aaye `select`, `checkbox`, àti `radio` |
| `placeholder` | string | Rárá | Ọ̀rọ̀ placeholder fún àwọn ìgbàwọlé iru-ọ̀rọ̀ |

**Àpẹẹrẹ**

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

**Ó dá padà**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Àyẹ̀wò Ojúṣe

Àwọn agbára Àyẹ̀wò Ojúṣe jẹ́ kí aṣojú lè ya àwọn àwòrán-iboju ti àwọn ojúewé alààyè kí ó sì ṣe ìtúpalẹ̀ wọn, ó ń jẹ́ kí àyẹ̀wò àpẹrẹ aládàáṣiṣẹ́, àwọn ìfiwéra ṣáájú/lẹ́yìn, àti àwọn àyẹ̀wò ìyípadà ojúṣe ṣeé ṣe láì nílò ìfikún browser kankan.

### `capture_screenshot`

Ó ya àwòrán-iboju ti ojúewé WordPress kan ní URL tí a fún un nípa lílo browser aláìní-orí ní ẹgbẹ́ server. A fi àwòrán náà pamọ́ sí Media Library, a sì dá URL CDN padà.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `url` | string | Bẹẹni | URL kíkún ti ojúewé láti ya àwòrán-iboju, bí àpẹẹrẹ `https://example.com/about/` |
| `width` | integer | Rárá | Ìfẹ̀ ibùdó-wíwo ní pixel. Aiyipada `1280` |
| `height` | integer | Rárá | Gíga ibùdó-wíwo ní pixel. Aiyipada `800` |
| `full_page` | boolean | Rárá | Ya gbogbo ojúewé tí a lè yí lọ dípò ibùdó-wíwo nìkan. Aiyipada `false` |
| `delay_ms` | integer | Rárá | Àwọn millisecond láti dúró lẹ́yìn tí ojúewé bá ti kojọpọ̀ kí a tó ya, ó wúlò fún àkóónú onímí. Aiyipada `500` |
| `label` | string | Rárá | Àkọlé tí ènìyàn lè kà tí a fi pamọ́ pẹ̀lú àfikún náà nínú Media Library |

**Ó dá padà**

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

Ó gba àwòrán-iboju méjì, ó sì dá àmì ìyàtọ̀ ojúṣe padà pẹ̀lú àwòrán ìyàtọ̀ tí ń ṣe àfihàn àwọn agbègbè tí ó yí padà. Ó wúlò fún fífi dájú pé ìyípadà àpẹrẹ kan mú àbájáde tí a retí wá tàbí fún ríri àwọn ìpadà-sẹ́yìn tí a kò fẹ́.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `before_url` | string | Bẹẹni | URL ti ojúewé láti ya gẹ́gẹ́ bí ipò "ṣáájú" |
| `after_url` | string | Bẹẹni | URL ti ojúewé láti ya gẹ́gẹ́ bí ipò "lẹ́yìn". Ó lè jẹ́ URL kan náà bí a bá ń fiwéra kọjá àkókò |
| `width` | integer | Rárá | Ìfẹ̀ ibùdó-wíwo fún àwọn ìyà méjèèjì. Aiyipada `1280` |
| `threshold` | float | Rárá | Ààlà ìyàtọ̀-pixel (0.0–1.0). Àwọn pixel nínú ìfaradà yìí ni a kà sí pé wọn kò yí padà. Aiyipada `0.1` |

**Ó dá padà**

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

`diff_score` ti `0.0` túmọ̀ sí pé kò sí ìyípadà tí ó hàn; `1.0` túmọ̀ sí pé gbogbo pixel yí padà.

---

### `review_page_design`

Ó ya àwòrán-iboju ti ojúewé kan, ó sì fi ránṣẹ́ sí language model fún ìtúpalẹ̀ ojúṣe. Ó dá ìṣàyẹ̀wò tí a ṣètò padà tí ó bo ìṣètò, typography, lílo àwọ̀, àti àwọn àníyàn ìráyè.

**Àwọn paramita**

| Paramita | Iru | Dandan | Àpèjúwe |
|---|---|---|---|
| `url` | string | Bẹẹni | URL kíkún ti ojúewé láti ṣe àyẹ̀wò |
| `focus` | string | Rárá | Àtòjọ àwọn agbègbè àyẹ̀wò tí a yà sọ́tọ̀ pẹ̀lú koma láti fi tẹnumọ́: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Aiyipada: gbogbo agbègbè |
| `width` | integer | Rárá | Ìfẹ̀ ibùdó-wíwo. Aiyipada `1280` |

**Ó dá padà**

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

## Àwọn Agbára Tí A Lè Fi Sórí Ẹ̀rọ

Registry Àwọn Agbára Tí A Lè Fi Sórí Ẹ̀rọ jẹ́ kí o lè faagun aṣojú pẹ̀lú àwọn àkójọpọ̀ agbára àfikún tí a pín gẹ́gẹ́ bí àwọn plugin WordPress. Àkójọpọ̀ kọ̀ọ̀kan ń forúkọsílẹ̀ agbára kan tàbí ju bẹ́ẹ̀ lọ ní lílo API agbára boṣewa.

### `list_available_abilities`

Ó dá katalọ́ọ̀gì àwọn àkójọpọ̀ agbára tí ó wà fún fífi sórí ẹ̀rọ láti registry padà.

**Àwọn paramita**

| Paramita | Iru | Dandan | Apejuwe |
|---|---|---|---|
| `category` | string | Rara | Ṣe àlẹmọ gẹgẹ bi ẹka: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Àwọn ohun tí ó dá padà**

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

Ṣe igbasilẹ o si mu akopọ agbara kan ṣiṣẹ lati inu iforukọsilẹ naa.

**Àwọn paramita**

| Paramita | Iru | Dandan | Apejuwe |
|---|---|---|---|
| `slug` | string | Bẹẹni | slug ti afikun akopọ agbara |

**Àwọn ohun tí ó dá padà** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ṣe ìbéèrè si iforukọsilẹ agbara lati wa afikun ti o dara julọ fun lilo ti a ṣalaye, ati, bi aṣayan, fi sii.

**Àwọn paramita**

| Paramita | Iru | Dandan | Apejuwe |
|---|---|---|---|
| `description` | string | Bẹẹni | Apejuwe ni ede adayeba ti iṣẹ ṣiṣe ti a fẹ |
| `install` | boolean | Rara | Ti `true`, yoo fi afikun ti a ṣeduro sii lẹsẹkẹsẹ. Aiyipada ni `false` |

**Àpẹẹrẹ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Àwọn ohun tí ó dá padà**

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
