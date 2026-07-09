---
title: Iomradh air Comasan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Iomradh air Comasan

Is e comasan na gnìomhan atamach as urrainn do Gratis AI Agent a ghairm air an stàladh WordPress agad. Tha gach comas na chlas PHP clàraichte a tha a’ foillseachadh sgeama JSON — leughaidh an t-àidseant an sgeama seo aig àm-ruith gus tuigsinn dè na paramadairean a tha riatanach agus dè a thilleas an comas.

Tha an duilleag seo a’ clàradh nan comasan uile a thig le Gratis AI Agent v1.9.0.

---

## Seòrsaichean Puist Gnàthaichte

Bidh na comasan seo a’ riaghladh seòrsaichean puist gnàthaichte (CPTs) a tha clàraichte tron àidseant. Tha clàraidhean air an gleidheadh ann an clàr roghainnean WordPress gus am mair iad tro dhì-ghnìomhachadh agus ath-ghnìomhachadh a’ plugin.

### `register_post_type`

Clàraichidh e seòrsa puist gnàthaichte ùr.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `slug` | string | Tha | Iuchair an t-seòrsa puist (20 caractar aig a’ char as motha, gun litrichean mòra, gun bheàrnan) |
| `singular_label` | string | Tha | Ainm singilte a ghabhas leughadh le daoine, m.e. `Portfolio Item` |
| `plural_label` | string | Tha | Ainm iolra a ghabhas leughadh le daoine, m.e. `Portfolio Items` |
| `public` | boolean | Chan eil | A bheil an seòrsa puist ruigsinneach gu poblach. Bun-roghainn `true` |
| `supports` | array | Chan eil | Feartan ri thaic: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Bun-roghainn `["title","editor"]` |
| `has_archive` | boolean | Chan eil | A bheil duilleag tasglainn airson an t-seòrsa puist an comas. Bun-roghainn `false` |
| `menu_icon` | string | Chan eil | Clas Dashicons no URL airson ìomhaigheag clàr-taice an rianaire. Bun-roghainn `"dashicons-admin-post"` |
| `rewrite_slug` | string | Chan eil | URL slug airson an t-seòrsa puist. Bun-roghainn gu `slug` |

**Eisimpleir**

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

**Tillidh e** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Tillidh e a h-uile seòrsa puist gnàthaichte a chaidh a chlàradh leis an àidseant.

**Paramadairean** — chan eil gin

**Tillidh e**

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

Dì-chlàraichidh e seòrsa puist gnàthaichte a chaidh a chlàradh roimhe leis an àidseant. Fanaidh puist a tha ann mu thràth den t-seòrsa sin san stòr-dàta ach cha bhi iad ruigsinneach tuilleadh tron t-seòrsa puist.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `slug` | string | Tha | Iuchair an t-seòrsa puist ri toirt air falbh |

**Tillidh e** `{ "success": true, "slug": "portfolio" }`

---

## Tacsonamaidhean Gnàthaichte

Bidh na comasan seo a’ riaghladh tacsonamaidhean gnàthaichte. Mar CPTs, tha clàraidhean tacsonamaidh air an gleidheadh.

### `register_taxonomy`

Clàraichidh e tacsonamaidh ghnàthaichte ùr.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `slug` | string | Tha | Iuchair na tacsonamaidh (32 caractar aig a’ char as motha) |
| `singular_label` | string | Tha | Ainm singilte a ghabhas leughadh le daoine, m.e. `Project Category` |
| `plural_label` | string | Tha | Ainm iolra a ghabhas leughadh le daoine, m.e. `Project Categories` |
| `post_types` | array | Tha | Slugaichean seòrsa puist ris am bu chòir an tacsonamaidh seo a bhith ceangailte |
| `hierarchical` | boolean | Chan eil | `true` airson stoidhle-roinne, `false` airson stoidhle-taga. Bun-roghainn `true` |
| `public` | boolean | Chan eil | A bheil teirmean ruigsinneach gu poblach. Bun-roghainn `true` |
| `rewrite_slug` | string | Chan eil | URL slug airson na tacsonamaidh. Bun-roghainn gu `slug` |

**Eisimpleir**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Tillidh e** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Tillidh e a h-uile tacsonamaidh ghnàthaichte a chaidh a chlàradh leis an àidseant.

**Paramadairean** — chan eil gin

**Tillidh e**

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

Dì-chlàraichidh e tacsonamaidh ghnàthaichte a chaidh a chlàradh roimhe leis an àidseant.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `slug` | string | Tha | Iuchair na tacsonamaidh ri toirt air falbh |

**Tillidh e** `{ "success": true, "slug": "project-category" }`

---

## Siostam Dealbhaidh

Bidh comasan siostam dealbhaidh ag atharrachadh taisbeanadh lèirsinneach na làraich WordPress — bho CSS gnàthaichte gu pàtrain bhlocaichean agus suaicheantas na làraich.

### `inject_custom_css`

Cuiridh e CSS ri `<head>` na làraich tro `wp_add_inline_style`. Tha CSS air a stòradh san roghainn `gratis_ai_agent_custom_css` agus air a thoirt às a’ chiudha gu glan nuair a thèid an comas ath-shuidheachadh.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `css` | string | Tha | CSS dligheach ri chur a-steach |
| `label` | string | Chan eil | Leubail a ghabhas leughadh le daoine airson a’ bhloca CSS seo, ga chleachdadh ann an logaichean dì-bhugachaidh. Bun-roghainn `"agent-injected"` |
| `replace` | boolean | Chan eil | Ma tha `true`, cuiridh e an àite a h-uile CSS a chaidh a chur a-steach roimhe. Bun-roghainn `false` (cuiridh e ris) |

**Eisimpleir**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Tillidh e** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Clàraichidh e pàtran bhlocaichean ath-chleachdte ann an leabharlann phàtranan WordPress.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `slug` | string | Tha | Aithnichear pàtrain, m.e. `gratis/hero-dark` |
| `title` | string | Tha | Ainm pàtrain a ghabhas leughadh le daoine a chithear san deasaiche |
| `content` | string | Tha | Markup bhlocaichean sreathachaidh (HTML) airson a’ phàtrain |
| `categories` | array | Chan eil | Slugaichean roinne pàtrain, m.e. `["featured", "hero"]` |
| `description` | string | Chan eil | Tuairisgeul goirid a chithear ann an taghadair nam pàtran |
| `keywords` | array | Chan eil | Faclan-luirg rannsachaidh |

**Tillidh e** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Liostaichidh e a h-uile pàtran bhlocaichean a chaidh a chlàradh leis an àidseant.

**Paramadairean** — chan eil gin

**Tillidh**

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

Suidhichidh e suaicheantas làrach WordPress gu ID ceanglachain sònraichte no URL ìomhaigh iomallaich. Nuair a thèid URL a thoirt seachad, thèid an ìomhaigh a luchdadh a-nuas agus a thoirt a-steach don Media Library.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `attachment_id` | integer | Chan eil | ID de cheanglachan Media Library a tha ann mar-thà |
| `url` | string | Chan eil | URL ìomhaigh iomallach ri thoirt a-steach agus ri shuidheachadh mar an suaicheantas |

Feumar aon de `attachment_id` no `url` a thoirt seachad.

**Tillidh** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Cuiridh e preset dath/typography ainmichte an sàs air `theme.json` (no `global-styles`) a’ chuspair ghnìomhach. Tha presets nam pasganan taghte air an cumail suas le sgioba Gratis AI Agent.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `preset` | string | Tha | Ainm preset, m.e. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Chan eil | Ma tha `true`, co-aonaich le luachan a tha ann mar-thà seach an cur an àite. Bunaiteach `false` |

**Presets ri fhaighinn**

| Preset | Tuairisgeul |
|---|---|
| `minimal-dark` | Cùl-raon faisg air dubh, teacsa geal, aon dath stràc |
| `warm-editorial` | Cùl-raon blàth far-gheal, cinn serif, dathan stràc talmhaidh |
| `corporate-blue` | Pailead dubh-ghorm is geal le typography phroifeiseanta |
| `vibrant-startup` | Caiseadan soilleir, oiseanan cruinn, seòrsa sans-serif ùr-nodha |
| `classic-blog` | Liathan neodrach, àirde loidhne chofhurtail, beàrnadh cruth traidiseanta |

**Tillidh** `{ "success": true, "preset": "minimal-dark" }`

---

## Stoidhlichean Cruinneil

Leughaidh agus sgrìobhaidh comasan Stoidhlichean Cruinneil luachan theme.json tro WordPress Global Styles API, a’ toirt buaidh air a h-uile bloc agus teamplaid air feadh na làraich.

### `get_global_styles`

Tillidh e rèiteachadh làithreach nan stoidhlichean cruinneil.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `path` | string | Chan eil | JSON pointer gu luach sònraichte, m.e. `/color/palette` no `/typography/fontSizes`. Tillidh e an t-oibseact gu lèir ma thèid fhàgail às. |

**Tillidh** an t-oibseact stoidhlichean cruinneil slàn no an luach aig `path`.

---

### `set_global_styles`

Ùraichidh e aon luach no barrachd ann an rèiteachadh nan stoidhlichean cruinneil.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `path` | string | Tha | JSON pointer don luach ri shuidheachadh, m.e. `/color/palette` |
| `value` | any | Tha | An luach ùr |

**Eisimpleir** — cuir dath ris a’ phailead

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Tillidh** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Ath-shuidhichidh e gach atharrachadh stoidhlichean cruinneil a chuir an t-agent an sàs, ag ath-bheothachadh bunaitean a’ chuspair.

**Paramadairean** — gin

**Tillidh** `{ "success": true }`

---

## Clàran-taice Seòlaidh

Cruthaichidh agus stiùiridh comasan Clàr-taice Seòlaidh clàran-taice seòlaidh WordPress agus na nithean aca.

### `create_menu`

Cruthaichidh e clàr-taice seòlaidh WordPress ùr.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `name` | string | Tha | Ainm clàir-thaice, m.e. `Primary Navigation` |
| `location` | string | Chan eil | Ionad cuspair ri shònrachadh don chlàr-taice seo, m.e. `primary` |

**Tillidh** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Ath-ainmichidh e clàr-taice no sònraichidh e a-rithist e do dh’ionad cuspair.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `menu_id` | integer | Tha | ID a’ chlàir-thaice ri ùrachadh |
| `name` | string | Chan eil | Ainm ùr a’ chlàir-thaice |
| `location` | string | Chan eil | Ionad cuspair ri shònrachadh no ath-shònrachadh |

**Tillidh** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Cuiridh e nì ri clàr-taice seòlaidh a tha ann mar-thà.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `menu_id` | integer | Tha | ID a’ chlàir-thaice targaid |
| `type` | string | Tha | Seòrsa nì: `custom`, `post_type`, no `taxonomy` |
| `title` | string | Chan eil | Leubail airson nì a’ chlàir-thaice (riatanach airson seòrsa `custom`) |
| `url` | string | Chan eil | URL airson nithean `custom` |
| `object_id` | integer | Chan eil | ID post no ID teirm airson nithean `post_type`/`taxonomy` |
| `parent_id` | integer | Chan eil | ID nì clàir-thaice fon dèid an nì seo a neadachadh |
| `position` | integer | Chan eil | Suidheachadh stèidhichte air neoni sa chlàr-taice |

**Tillidh** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Bheir e nì air falbh bho chlàr-taice seòlaidh.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `item_id` | integer | Tha | ID nì clàir-thaice ri thoirt air falbh |

**Tillidh** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Liostaichidh e a h-uile clàr-taice seòlaidh WordPress, a’ gabhail a-steach nan ionadan cuspair a chaidh a shònrachadh dhaibh.

**Paramadairean** — gin

**Tillidh**

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

## Stiùireadh Roghainnean

Leughaidh agus sgrìobhaidh comasan roghainnean roghainnean WordPress tro `get_option` / `update_option`. Cuiridh liosta-bacaidh sàbhailteachd thogte casg air atharrachadh tubaisteach air roghainnean riatanach.

### `get_option`

Leughaidh e roghainn WordPress.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `option_name` | string | Tha | Iuchair na roghainne, m.e. `blogname` |

**Tillidh** `{ "option_name": "blogname", "value": "My Site" }`

Tillidh e mearachd ma tha `option_name` air an liosta-bacaidh sàbhailteachd.

---

### `set_option`

Sgrìobhaidh e roghainn WordPress.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `option_name` | string | Tha | Iuchair na roghainne |
| `value` | any | Tha | An luach ùr (air a shreathachadh gu fèin-obrachail airson arrays/objects) |
| `autoload` | string | Chan eil | `"yes"` no `"no"`. Cumaidh am bunaiteach an suidheachadh autoload a tha ann mar-thà |

Tillidh e mearachd ma tha `option_name` air liosta-bacaidh sàbhailteachd.

**Tillidh** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Sguabaidh e às roghainn WordPress.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `option_name` | string | Tha | An iuchair roghainn ri sguabadh às |

Tillidh e mearachd ma tha `option_name` air liosta-bacaidh sàbhailteachd.

**Tillidh** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Liostaichidh e roghainnean WordPress a tha a’ maidseadh pàtrain.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `pattern` | string | Chan eil | Pàtran SQL LIKE gus ainmean roghainnean a shìoladh, m.e. `gratis_%`. Tillidh e a h-uile roghainn ma thèid fhàgail às (cleachd le cùram air stòran-dàta mòra). |
| `limit` | integer | Chan eil | An àireamh as motha de thoraidhean. Bun-roghainn `50`, as motha `500` |

**Tillidh**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Stiùireadh Susbaint

Cruthaichidh is deasaichidh comasan Stiùireadh Susbaint puist is duilleagan WordPress. Thèid IDan phuist a thilleadh gus an urrainn do cheuman às dèidh sin ann am planaichean ioma-chomais iomradh a thoirt air an t-susbaint a chaidh a chruthachadh.

### `create_post`

Cruthaichidh e post WordPress ùr, duilleag, no inntrigeadh de sheòrsa puist gnàthaichte.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `title` | string | Tha | Tiotal a’ phuist |
| `content` | string | Chan eil | Corp a’ phuist — gabhaidh e ri teacsa lom, HTML, no markup bloca sreathichte |
| `status` | string | Chan eil | `draft`, `publish`, `pending`, `private`. Bun-roghainn `draft` |
| `post_type` | string | Chan eil | Slug seòrsa puist, m.e. `post`, `page`, no CPT clàraichte sam bith. Bun-roghainn `post` |
| `excerpt` | string | Chan eil | Geàrr-chunntas goirid a chithear ann an tasglannan agus toraidhean-luirg |
| `categories` | array | Chan eil | Array de dh’ainmean roinnean no IDan ri shònrachadh |
| `tags` | array | Chan eil | Array de dh’ainmean tagaichean no IDan ri shònrachadh |
| `author` | integer | Chan eil | ID cleachdaiche WordPress ri shuidheachadh mar ùghdar a’ phuist. Bun-roghainn dhan chleachdaiche làithreach |
| `date` | string | Chan eil | Ceann-latha foillseachaidh ann an cruth ISO 8601, m.e. `2026-05-01T09:00:00` |
| `page_template` | string | Chan eil | Faidhle teamplaid ri shònrachadh dhan phost no dhan duilleag seo, m.e. `page-full-width.php`. Chan eil brìgh aige ach nuair a tha `post_type` na `page` no CPT a bheir taic do theamplaidean dhuilleagan. |

**Eisimpleir**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Tillidh** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Ùraichidh e post no duilleag WordPress a tha ann mu thràth.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `post_id` | integer | Tha | ID a’ phuist ri ùrachadh |
| `title` | string | Chan eil | Tiotal ùr a’ phuist |
| `content` | string | Chan eil | Corp ùr a’ phuist |
| `status` | string | Chan eil | Inbhe ùr: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Chan eil | Earrann ùr |
| `categories` | array | Chan eil | Cuir an array seo de dh’ainmean no IDan an àite liosta iomlan nan roinnean |
| `tags` | array | Chan eil | Cuir an array seo de dh’ainmean no IDan an àite liosta iomlan nan tagaichean |
| `page_template` | string | Chan eil | Faidhle teamplaid ùr ri shònrachadh dhan phost no dhan duilleag seo, m.e. `page-full-width.php`. Cuir seachad sreang fhalamh gus sònrachadh na teamplaid a thoirt air falbh agus tilleadh gu bun-roghainn an theme. |

**Eisimpleir** — atharraich teamplaid às dèidh cruthachaidh

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Tillidh** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Cruthaichidh e iomadh post ann an aon ghairm comais, a’ lùghdachadh chuairtean air ais is air adhart rè togail làraichean no ion-phortadh susbaint mhòr. Thèid puist a chruthachadh ann an òrdugh; ma dh’fhàilligeas aon dhiubh, leanaidh an fheadhainn eile orra agus thèid an fhàilligeadh aithris ann an array nan toraidhean.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `posts` | array | Tha | Array de nithean puist, gach fear a’ gabhail ris na h-aon pharamadairean ri `create_post` |
| `stop_on_error` | boolean | Chan eil | Ma tha `true`, stad giullachd às dèidh a’ chiad fhàilligeadh. Bun-roghainn `false` |

**Eisimpleir**

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

**Tillidh**

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

Sònraichidh e ìomhaigh nochdte (dealbhag puist) do phost no duilleag a tha ann mu thràth. Gabhaidh e ri ID ceanglachain Media Library a tha ann mu thràth no URL ìomhaigh iomallach; nuair a thèid URL a sholar, thèid an ìomhaigh a luchdachadh a-nuas agus ion-phortadh gu fèin-obrachail.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `post_id` | integer | Tha | ID a’ phuist no na duilleige ri ùrachadh |
| `attachment_id` | integer | Chan eil | ID ceanglachain Media Library a tha ann mu thràth |
| `url` | string | Chan eil | URL ìomhaigh iomallach ri ion-phortadh agus ri shuidheachadh mar an ìomhaigh nochdte |
| `alt_text` | string | Chan eil | Teacsa alt ri chur an sàs air a’ cheanglachan ma thèid ion-phortadh bho URL |

Feumar aon de `attachment_id` no `url` a thoirt seachad.

**Tillidh** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Cruthaichidh e foirm-conaltraidh a’ cleachdadh a’ plugin fhoirm ghnìomhach (Contact Form 7, WPForms, Fluent Forms, no Gravity Forms, a rèir dè tha stàlaichte). Tillidh e shortcode a ghabhas neadachadh ann am post no duilleag sam bith.

**Paramadairean**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Ainm an fhoirm a chithear ann an rianachd plugin nam foirmean |
| `fields` | array | Yes | Liosta òrdaichte de raointean na foirme (faic oibseact Field gu h-ìosal) |
| `recipient` | string | No | Seòladh post-d gus tagraidhean fhaighinn. Bunaiteach: post-d rianaire WordPress |
| `subject` | string | No | Loidhne cuspair a’ phuist-d. A’ cur taic ri placeholders `[your-name]` agus `[your-subject]` nuair a thathar a’ cleachdadh Contact Form 7 |
| `confirmation_message` | string | No | Teachdaireachd a thèid a shealltainn às dèidh tagradh soirbheachail. Bunaiteach: `"Thank you for your message. We'll be in touch soon."` |

**Oibseact Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Ainm raoin a-staigh / iuchair inneil |
| `label` | string | Yes | Leubail a ghabhas leughadh le daoine, air a shealltainn air an fhoirm |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Co-dhiù am feum an raon a bhith air a lìonadh mus tèid a chur a-steach. Bunaiteach `false` |
| `options` | array | No | Roghainnean airson raointean `select`, `checkbox`, agus `radio` |
| `placeholder` | string | No | Teacsa placeholder airson ion-chuir den t-seòrsa teacsa |

**Eisimpleir**

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

**A’ tilleadh**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Lèirmheas Lèirsinneach

Leigidh comasan Lèirmheas Lèirsinneach leis an agent glacaidhean-sgrìn de dhuilleagan beò a ghlacadh agus an sgrùdadh, a’ comasachadh lèirmheas dealbhaidh fèin-riaghailteach, coimeasan ro/às dèidh, agus sgrùdaidhean regression lèirsinneach gun leudachan brabhsair sam bith iarraidh.

### `capture_screenshot`

Glacaidh e glacadh-sgrìn de dhuilleag WordPress aig URL sònraichte a’ cleachdadh brabhsair headless taobh an fhrithealaiche. Thèid an ìomhaigh a shàbhaladh dhan Media Library agus thèid URL CDN a thilleadh.

**Paramadairean**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL slàn na duilleige ri glacadh-sgrìn, m.e. `https://example.com/about/` |
| `width` | integer | No | Leud a’ viewport ann am piogsail. Bunaiteach `1280` |
| `height` | integer | No | Àirde a’ viewport ann am piogsail. Bunaiteach `800` |
| `full_page` | boolean | No | Glac an duilleag shlàn a ghabhas sgroladh an àite dìreach a’ viewport. Bunaiteach `false` |
| `delay_ms` | integer | No | Mille-dhiogan ri feitheamh às dèidh luchdachadh na duilleige mus tèid a ghlacadh, feumail airson susbaint bheòthaichte. Bunaiteach `500` |
| `label` | string | No | Leubail a ghabhas leughadh le daoine, air a stòradh leis a’ cheanglachan anns a’ Media Library |

**A’ tilleadh**

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

Gabhaidh e dà ghlacadh-sgrìn agus tillidh e sgòr diff lèirsinneach còmhla ri ìomhaigh diff a’ soilleireachadh roinnean a dh’atharraich. Feumail airson dearbhadh gun tug atharrachadh dealbhaidh an toradh ris an robh dùil, no airson regressions gun iarraidh a lorg.

**Paramadairean**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL na duilleige ri ghlacadh mar an staid "roimhe" |
| `after_url` | string | Yes | URL na duilleige ri ghlacadh mar an staid "às dèidh". Faodaidh e a bhith na aon URL ma thathar a’ dèanamh coimeas thar ùine |
| `width` | integer | No | Leud a’ viewport airson an dà ghlacadh. Bunaiteach `1280` |
| `threshold` | float | No | Stairsneach eadar-dhealachadh piogsail (0.0–1.0). Thathar a’ meas piogsail taobh a-staigh na fulangais seo gun atharrachadh. Bunaiteach `0.1` |

**A’ tilleadh**

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

Tha `diff_score` de `0.0` a’ ciallachadh nach eil atharrachadh follaiseach ann; tha `1.0` a’ ciallachadh gun do dh’atharraich gach piogsail.

---

### `review_page_design`

Glacaidh e glacadh-sgrìn de dhuilleag agus cuiridh e dhan mhodail cànain e airson sgrùdadh lèirsinneach. Tillidh e measadh structaraichte a’ còmhdach co-dhealbhachd, clò-ghnàth, cleachdadh dhathan, agus cùisean ruigsinneachd.

**Paramadairean**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL slàn na duilleige ri lèirmheas |
| `focus` | string | No | Liosta air a sgaradh le cromagan de raointean lèirmheis ri chur cuideam orra: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Bunaiteach: gach raon |
| `width` | integer | No | Leud a’ viewport. Bunaiteach `1280` |

**A’ tilleadh**

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

## Comasan a Ghabhas Stàladh

Leigidh Clàr nan Comasan a Ghabhas Stàladh leat an agent a leudachadh le pacaidean comais a bharrachd air an sgaoileadh mar plugins WordPress. Clàraichidh gach pacaid aon chomas no barrachd a’ cleachdadh an API comais àbhaisteach.

### `list_available_abilities`

Tillidh e catalog nam pacaidean comais a tha rim faighinn airson stàladh bhon chlàr.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `category` | string | Chan eil | Criathraich a rèir roinne: `ecommerce`, `seo`, `media`, `social`, `developer` |

**A’ tilleadh**

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

Luchdaich a-nuas agus cuir an gnìomh pasgan comais bhon chlàr.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `slug` | string | Tha | Slug plugin a’ phasgain comais |

**A’ tilleadh** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ceasnaich clàr nan comasan gus am plugin as fheàrr a lorg airson cùis-cleachdaidh a chaidh a mhìneachadh agus, ma thogras tu, stàlaich e.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `description` | string | Tha | Tuairisgeul ann an cànan nàdarra air a’ ghnìomhachd a thathar ag iarraidh |
| `install` | boolean | Chan eil | Ma tha `true`, stàlaichidh e am plugin a thathar a’ moladh sa bhad. Bun-roghainn `false` |

**Eisimpleir**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**A’ tilleadh**

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
