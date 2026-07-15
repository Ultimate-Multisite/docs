---
title: Tixraaca Awoodaha
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Tixraaca Awoodaha

Awooduhu waa falalka atomiga ah ee Gratis AI Agent ku fulin karo rakibiddaada WordPress. Awood kasta waa PHP class diiwaangashan oo soo bandhigta JSON schema — agent-ku wuxuu schema-kan akhriyaa waqtiga socodka si uu u fahmo parameters-ka loo baahan yahay iyo waxa awooddu soo celiso.

Boggan wuxuu diiwaangeliyaa dhammaan awoodaha la socda Gratis AI Agent v1.9.0.

---

## Noocyada Qoraallada La Habeeyay {#custom-post-types}

Awoodahani waxay maamulaan noocyada qoraallada la habeeyay (CPTs) ee lagu diiwaangeliyay agent-ka. Diiwaangelinnada waxaa lagu kaydiyaa WordPress options table si ay u sii jiraan xitaa marka plugin-ka la damiyo oo dib loo hawlgeliyo.

### `register_post_type` {#registerposttype}

Wuxuu diiwaangeliyaa nooc qoraal la habeeyay oo cusub.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Haa | Furaha nooca qoraalka (ugu badnaan 20 xaraf, xarfo waaweyn ma leh, meel bannaan ma leh) |
| `singular_label` | string | Haa | Magac keli ah oo bini'aadam akhrin karo, tusaale `Portfolio Item` |
| `plural_label` | string | Haa | Magac jamac ah oo bini'aadam akhrin karo, tusaale `Portfolio Items` |
| `public` | boolean | Maya | In nooca qoraalku si dadweyne loo heli karo iyo in kale. Default `true` |
| `supports` | array | Maya | Sifooyinka la taageerayo: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | Maya | In bogga kaydka nooca qoraalka la hawlgeliyay iyo in kale. Default `false` |
| `menu_icon` | string | Maya | Dashicons class ama URL loogu talagalay astaanta menu-ga admin-ka. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | Maya | URL slug loogu talagalay nooca qoraalka. Wuxuu Default u yahay `slug` |

**Tusaale**

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

**Wuxuu soo celiyaa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Wuxuu soo celiyaa dhammaan noocyada qoraallada la habeeyay ee uu agent-ku diiwaangeliyay.

**Parameters** — midna

**Wuxuu soo celiyaa**

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

Wuxuu ka saaraa diiwaangelinta nooc qoraal la habeeyay oo hore uu agent-ku u diiwaangeliyay. Qoraallada jira ee noocaas ah waxay ku sii jiraan database-ka balse mar dambe lagama heli karo iyada oo loo marayo nooca qoraalka.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Haa | Furaha nooca qoraalka ee la saarayo |

**Wuxuu soo celiyaa** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies La Habeeyay {#custom-taxonomies}

Awoodahani waxay maamulaan taxonomies la habeeyay. Sida CPTs oo kale, diiwaangelinnada taxonomy waa la kaydiyaa.

### `register_taxonomy` {#registertaxonomy}

Wuxuu diiwaangeliyaa taxonomy la habeeyay oo cusub.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Haa | Furaha taxonomy-ga (ugu badnaan 32 xaraf) |
| `singular_label` | string | Haa | Magac keli ah oo bini'aadam akhrin karo, tusaale `Project Category` |
| `plural_label` | string | Haa | Magac jamac ah oo bini'aadam akhrin karo, tusaale `Project Categories` |
| `post_types` | array | Haa | Slugs-ka noocyada qoraalka ee taxonomy-gan lagu xirayo |
| `hierarchical` | boolean | Maya | `true` loogu talagalay qaabka category, `false` loogu talagalay qaabka tag. Default `true` |
| `public` | boolean | Maya | In terms-ka si dadweyne loo heli karo iyo in kale. Default `true` |
| `rewrite_slug` | string | Maya | URL slug loogu talagalay taxonomy-ga. Wuxuu Default u yahay `slug` |

**Tusaale**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Wuxuu soo celiyaa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Wuxuu soo celiyaa dhammaan taxonomies la habeeyay ee uu agent-ku diiwaangeliyay.

**Parameters** — midna

**Wuxuu soo celiyaa**

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

Wuxuu ka saaraa diiwaangelinta taxonomy la habeeyay oo hore uu agent-ku u diiwaangeliyay.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Haa | Furaha taxonomy-ga ee la saarayo |

**Wuxuu soo celiyaa** `{ "success": true, "slug": "project-category" }`

---

## Nidaamka Naqshadda {#design-system}

Awoodaha nidaamka naqshaddu waxay beddelaan muuqaalka WordPress site-ka — laga bilaabo CSS la habeeyay ilaa block patterns iyo astaanta site-ka.

### `inject_custom_css` {#injectcustomcss}

Wuxuu CSS ku daraa `<head>`-ka site-ka iyada oo loo marayo `wp_add_inline_style`. CSS waxaa lagu kaydiyaa option-ka `gratis_ai_agent_custom_css` waxaana si nadiif ah looga saaraa safka marka awoodda dib loo dejiyo.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Haa | CSS sax ah oo la durayo |
| `label` | string | Maya | Calaamad bini'aadam akhrin karo oo loogu talagalay block-kan CSS, laguna isticmaalo debug logs. Default `"agent-injected"` |
| `replace` | boolean | Maya | Haddii `true`, wuxuu beddelaa dhammaan CSS-kii hore loo duray. Default `false` (wuu ku daraa) |

**Tusaale**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Wuxuu soo celiyaa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Wuxuu diiwaangeliyaa block pattern dib loo isticmaali karo gudaha WordPress pattern library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Haa | Aqoonsiga pattern-ka, tusaale `gratis/hero-dark` |
| `title` | string | Haa | Magaca pattern-ka ee bini'aadam akhrin karo ee ka muuqda editor-ka |
| `content` | string | Haa | Markup block la serialise-gareeyay (HTML) oo loogu talagalay pattern-ka |
| `categories` | array | Maya | Slugs-ka qaybaha pattern-ka, tusaale `["featured", "hero"]` |
| `description` | string | Maya | Sharaxaad gaaban oo ka muuqata pattern picker-ka |
| `keywords` | array | Maya | Erayo raadis |

**Wuxuu soo celiyaa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Wuxuu taxaa dhammaan block patterns uu agent-ku diiwaangeliyay.

**Parameters** — midna

**Waxay soo celisaa**

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

Waxay astaanta goobta WordPress u dejisaa attachment ID la bixiyay ama URL sawir fog. Marka URL la bixiyo, sawirka waa la soo dejinayaa waxaana lagu soo gelinayaa Media Library.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `attachment_id` | integer | Maya | ID-ga lifaaq jira oo ku jira Media Library |
| `url` | string | Maya | URL sawir fog oo la soo gelinayo lana dejinayo astaanta ahaan |

Mid ka mid ah `attachment_id` ama `url` waa in la bixiyaa.

**Waxay soo celisaa** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Waxay preset midab/qoraal-magaceed leh ku dabaqdaa theme-ka firfircoon `theme.json` (ama `global-styles`). Presets waa xirmooyin la habeeyay oo ay dayactirto kooxda Gratis AI Agent.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `preset` | string | Haa | Magaca preset-ka, tusaale `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Maya | Haddii `true`, ku dar qiimayaasha jira halkii aad ka beddeli lahayd. Default `false` |

**Presets la heli karo**

| Preset | Sharaxaad |
|---|---|
| `minimal-dark` | Asal ku dhow madow, qoraal cad, hal midab xoojin ah |
| `warm-editorial` | Asal diirran oo caddaan-jilic ah, cinwaanno serif ah, midabbo xoojin oo dhul-u-eg |
| `corporate-blue` | Palette navy iyo caddaan ah oo leh typography xirfadaysan |
| `vibrant-startup` | Gradients dhalaalaya, geeso wareegsan, nooc sans-serif casri ah |
| `classic-blog` | Cawl dhexdhexaad ah, line-height raaxo leh, kala-dheereyn qaab-dhismeed dhaqameed |

**Waxay soo celisaa** `{ "success": true, "preset": "minimal-dark" }`

---

## Qaababka Guud {#global-styles}

Awoodaha Qaababka Guud waxay akhriyaan oo qoraan qiimayaasha theme.json iyagoo maraya WordPress Global Styles API, waxayna saameeyaan dhammaan blocks iyo templates-ka goobta oo dhan.

### `get_global_styles` {#getglobalstyles}

Waxay soo celisaa habaynta qaababka guud ee hadda jira.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `path` | string | Maya | JSON pointer oo tilmaamaya qiime gaar ah, tusaale `/color/palette` ama `/typography/fontSizes`. Waxay soo celisaa object-ka oo dhan haddii laga tago. |

**Waxay soo celisaa** object-ka qaababka guud oo buuxa ama qiimaha ku jira `path`.

---

### `set_global_styles` {#setglobalstyles}

Waxay cusboonaysiisaa hal ama in ka badan oo qiimayaal ah oo ku jira habaynta qaababka guud.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `path` | string | Haa | JSON pointer oo tilmaamaya qiimaha la dejinayo, tusaale `/color/palette` |
| `value` | any | Haa | Qiimaha cusub |

**Tusaale** — ku dar midab palette-ka

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Waxay soo celisaa** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Waxay dib u dejisaa dhammaan isbeddellada qaababka guud ee agent-ku dabaqay, iyadoo soo celinaysa defaults-ka theme-ka.

**Halbeegyada** — ma jiro

**Waxay soo celisaa** `{ "success": true }`

---

## Menus-ka Hagidda {#navigation-menus}

Awoodaha Navigation Menu waxay abuuraan oo maareeyaan WordPress nav menus iyo items-kooda.

### `create_menu` {#createmenu}

Waxay abuurtaa menu cusub oo hagid WordPress ah.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `name` | string | Haa | Magaca menu-ga, tusaale `Primary Navigation` |
| `location` | string | Maya | Goobta theme-ka ee menu-gan loo qoondeynayo, tusaale `primary` |

**Waxay soo celisaa** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Waxay dib u magacawdaa menu ama waxay dib ugu qoondeysaa goob theme ah.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `menu_id` | integer | Haa | ID-ga menu-ga la cusboonaysiinayo |
| `name` | string | Maya | Magaca cusub ee menu-ga |
| `location` | string | Maya | Goobta theme-ka ee loo qoondeynayo ama dib loogu qoondeynayo |

**Waxay soo celisaa** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Waxay item ku dartaa menu hagid oo jira.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `menu_id` | integer | Haa | ID-ga menu-ga bartilmaameedka ah |
| `type` | string | Haa | Nooca item-ka: `custom`, `post_type`, ama `taxonomy` |
| `title` | string | Maya | Calaamad loogu talagalay item-ka menu-ga (waxaa looga baahan yahay nooca `custom`) |
| `url` | string | Maya | URL loogu talagalay items-ka `custom` |
| `object_id` | integer | Maya | Post ID ama term ID loogu talagalay items-ka `post_type`/`taxonomy` |
| `parent_id` | integer | Maya | Menu item ID oo item-kan hoostiisa lagu galinayo |
| `position` | integer | Maya | Booska menu-ga oo ka bilaabma eber |

**Waxay soo celisaa** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Waxay item ka saartaa menu hagid.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `item_id` | integer | Haa | Menu item ID-ga la saarayo |

**Waxay soo celisaa** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Waxay taxdaa dhammaan WordPress navigation menus, oo ay ku jiraan goobaha theme-ka ee loo qoondeeyay.

**Halbeegyada** — ma jiro

**Waxay soo celisaa**

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

## Maareynta Options {#options-management}

Awoodaha Options waxay akhriyaan oo qoraan options-ka WordPress iyagoo adeegsanaya `get_option` / `update_option`. Blocklist badbaado oo ku dhex dhisan ayaa ka hortaga wax ka beddel shil ah oo lagu sameeyo settings muhiim ah.

### `get_option` {#getoption}

Waxay akhridaa option WordPress ah.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `option_name` | string | Haa | Furaha option-ka, tusaale `blogname` |

**Waxay soo celisaa** `{ "option_name": "blogname", "value": "My Site" }`

Waxay soo celisaa qalad haddii `option_name` uu ku jiro blocklist-ka badbaadada.

---

### `set_option` {#setoption}

Waxay qortaa option WordPress ah.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `option_name` | string | Haa | Furaha option-ka |
| `value` | any | Haa | Qiimaha cusub (si otomaatig ah ayaa serialised loogu sameeyaa arrays/objects) |
| `autoload` | string | Maya | `"yes"` ama `"no"`. Default wuxuu ilaaliyaa dejinta autoload ee jirta |

Waxay soo celisaa khalad haddii `option_name` uu ku jiro safety blocklist.

**Waxay soo celisaa** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Waxay tirtirtaa ikhtiyaar WordPress ah.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `option_name` | string | Haa | Furaha ikhtiyaarka la tirtirayo |

Waxay soo celisaa khalad haddii `option_name` uu ku jiro safety blocklist.

**Waxay soo celisaa** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Waxay taxdaa ikhtiyaarrada WordPress ee u dhigma qaab.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `pattern` | string | Maya | Qaabka SQL LIKE ee lagu shaandhaynayo magacyada ikhtiyaarrada, tusaale `gratis_%`. Waxay soo celisaa dhammaan ikhtiyaarrada haddii la dhaafo (si taxaddar leh ugu isticmaal kaydadka xogta waaweyn). |
| `limit` | integer | Maya | Tirada ugu badan ee natiijooyinka. Asalka `50`, ugu badan `500` |

**Waxay soo celisaa**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Maareynta Mawduuca {#content-management}

Awoodaha Maareynta Mawduucu waxay abuuraan oo wax ka beddelaan qoraallada iyo bogagga WordPress. Aqoonsiyada qoraallada ayaa la soo celiyaa si tallaabooyinka xiga ee qorshayaasha awoodaha badan ay u tixraaci karaan mawduuca la abuuray.

### `create_post` {#createpost}

Waxay abuurtaa qoraal cusub oo WordPress ah, bog, ama gelin nooc qoraal gaar ah.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `title` | string | Haa | Cinwaanka qoraalka |
| `content` | string | Maya | Jirka qoraalka — wuxuu aqbalaa qoraal caadi ah, HTML, ama calaamadayn block oo la serialised gareeyay |
| `status` | string | Maya | `draft`, `publish`, `pending`, `private`. Asalka `draft` |
| `post_type` | string | Maya | Slug-ka nooca qoraalka, tusaale `post`, `page`, ama CPT kasta oo diiwaangashan. Asalka `post` |
| `excerpt` | string | Maya | Soo koobid gaaban oo lagu muujiyo kaydadka iyo natiijooyinka raadinta |
| `categories` | array | Maya | Array ka kooban magacyada ama aqoonsiyada qaybaha la qoondeynayo |
| `tags` | array | Maya | Array ka kooban magacyada ama aqoonsiyada tags-ka la qoondeynayo |
| `author` | integer | Maya | Aqoonsiga isticmaalaha WordPress ee loo dejinayo qoraaga qoraalka. Asalku waa isticmaalaha hadda |
| `date` | string | Maya | Taariikhda daabacaadda qaabka ISO 8601, tusaale `2026-05-01T09:00:00` |
| `page_template` | string | Maya | Faylka template-ka ee loo qoondeynayo qoraalkan ama boggan, tusaale `page-full-width.php`. Waxay macno leedahay oo keliya marka `post_type` uu yahay `page` ama CPT taageera page templates. |

**Tusaale**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Waxay soo celisaa** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Waxay cusboonaysiisaa qoraal ama bog WordPress oo jira.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `post_id` | integer | Haa | Aqoonsiga qoraalka la cusboonaysiinayo |
| `title` | string | Maya | Cinwaanka cusub ee qoraalka |
| `content` | string | Maya | Jirka cusub ee qoraalka |
| `status` | string | Maya | Xaalad cusub: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Maya | Soo koobid cusub |
| `categories` | array | Maya | Ku beddel liiska qaybaha oo dhan array-kan magacyo ama aqoonsiyo ah |
| `tags` | array | Maya | Ku beddel liiska tags-ka oo dhan array-kan magacyo ama aqoonsiyo ah |
| `page_template` | string | Maya | Faylka template-ka cusub ee loo qoondeynayo qoraalkan ama boggan, tusaale `page-full-width.php`. Gudbi string madhan si aad uga saarto qoondeynta template-ka oo aad ugu noqoto asalka theme-ka. |

**Tusaale** — beddel template-ka ka dib abuurista

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Waxay soo celisaa** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Waxay abuurtaa qoraallo badan hal wicitaan awood ah, iyadoo yareynaysa wareegyada safarka inta lagu jiro dhisidda site-ka ama soo dejinta mawduuc badan. Qoraallada waxaa loo abuuraa si isku xigta; haddii mid fashilmo kuwa kale way sii socdaan, fashilkana waxaa lagu soo sheegaa array-ga natiijooyinka.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `posts` | array | Haa | Array ka kooban walxo qoraal, mid kastaa aqbalayo isla halbeegyada `create_post` |
| `stop_on_error` | boolean | Maya | Haddii `true`, jooji habaynta ka dib fashilka koowaad. Asalka `false` |

**Tusaale**

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

**Waxay soo celisaa**

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

Waxay u qoondeysaa sawir muuqda (thumbnail-ka qoraalka) qoraal ama bog jira. Waxay aqbashaa aqoonsiga lifaaq Media Library oo jira ama URL sawir fog; marka URL la bixiyo, sawirka si otomaatig ah ayaa loo soo dejiyaa loona soo geliyaa.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `post_id` | integer | Haa | Aqoonsiga qoraalka ama bogga la cusboonaysiinayo |
| `attachment_id` | integer | Maya | Aqoonsiga lifaaq Media Library oo jira |
| `url` | string | Maya | URL sawir fog oo la soo dejinayo loona dejinayo sawirka muuqda |
| `alt_text` | string | Maya | Qoraalka alt ee lagu dabaqayo lifaaqa haddii laga soo geliyo URL |

Mid ka mid ah `attachment_id` ama `url` waa in la bixiyaa.

**Waxay soo celisaa** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Waxay abuurtaa foom xiriir iyadoo la adeegsanayo plugin-ka foomka ee firfircoon (Contact Form 7, WPForms, Fluent Forms, ama Gravity Forms, iyadoo ku xiran midka la rakibay). Waxay soo celisaa shortcode lagu dhex dari karo qoraal ama bog kasta.

**Halbeegyada**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Magaca foomka ee ka muuqda maamulka plugin-ka foomka |
| `fields` | array | Yes | Liis nidaamsan oo ah fields-ka foomka (eeg Field object hoos) |
| `recipient` | string | No | Cinwaanka email-ka ee lagu helo soo-gudbinnada. Default-ku waa email-ka maamulka WordPress |
| `subject` | string | No | Sadarka mawduuca email-ka. Waxay taageertaa placeholders-ka `[your-name]` iyo `[your-subject]` marka la isticmaalayo Contact Form 7 |
| `confirmation_message` | string | No | Fariinta la muujiyo ka dib soo-gudbin guulaysatay. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Magaca gudaha ee field-ka / furaha mashiinka |
| `label` | string | Yes | Calaamad qof akhrin karo oo lagu muujiyo foomka |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | In field-ka la buuxiyo ka hor soo-gudbinta. Default `false` |
| `options` | array | No | Xulashooyinka fields-ka `select`, `checkbox`, iyo `radio` |
| `placeholder` | string | No | Qoraalka placeholder-ka ee gelinnada nooca qoraalka |

**Tusaale**

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

**Soo celiya**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Dib-u-eegis Muuqaal {#visual-review}

Awoodaha Dib-u-eegista Muuqaalku waxay agent-ka u oggolaadaan inuu qaado screenshots bogag nool oo uu falanqeeyo, taas oo suurto gelinaysa dib-u-eegis naqshadeed oo iskeed ah, isbarbardhigyo ka hor/ka dib, iyo hubinno regression muuqaal ah iyada oo aan loo baahnayn browser extension.

### `capture_screenshot` {#capturescreenshot}

Waxay qaaddaa screenshot bog WordPress ah oo ku yaal URL la siiyay iyadoo adeegsanaysa browser headless ah oo server-side ah. Sawirka waxaa lagu kaydiyaa Media Library waxaana la soo celiyaa URL CDN ah.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL buuxa ee bogga laga qaadayo screenshot, tusaale `https://example.com/about/` |
| `width` | integer | No | Ballaca viewport-ka ee pixels. Default `1280` |
| `height` | integer | No | Dhererka viewport-ka ee pixels. Default `800` |
| `full_page` | boolean | No | Qaad bogga buuxa ee la rogrogmi karo halkii laga qaadi lahaa viewport-ka keliya. Default `false` |
| `delay_ms` | integer | No | Milliseconds la sugayo ka dib marka boggu rarmo ka hor qaadista, faa'iido u leh nuxurka animated-ka. Default `500` |
| `label` | string | No | Calaamad qof akhrin karo oo lagu kaydiyo lifaaqa gudaha Media Library |

**Soo celiya**

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

Waxay qaadataa laba screenshots waxayna soo celisaa dhibic diff muuqaal ah iyo sawir diff ah oo muujinaya gobollada isbeddelay. Waxay faa'iido u leedahay xaqiijinta in isbeddel naqshadeed uu keenay natiijadii la filayay ama ogaanshaha regressions aan loogu talagelin.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL-ka bogga loo qaadayo xaaladda "ka hor" |
| `after_url` | string | Yes | URL-ka bogga loo qaadayo xaaladda "ka dib". Wuxuu noqon karaa isla URL-ka haddii la isbarbardhigayo waqtiyo kala duwan |
| `width` | integer | No | Ballaca viewport-ka ee labada qaadis. Default `1280` |
| `threshold` | float | No | Xadka farqiga pixel-ka (0.0–1.0). Pixels-ka ku jira dulqaadkan waxaa loo tixgeliyaa kuwo aan isbeddelin. Default `0.1` |

**Soo celiya**

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

`diff_score` ah `0.0` waxay ka dhigan tahay isbeddel muuqda ma jiro; `1.0` waxay ka dhigan tahay pixel kasta wuu isbeddelay.

---

### `review_page_design` {#reviewpagedesign}

Waxay qaaddaa screenshot bog ah waxayna u dirtaa moodalka luqadda si loo sameeyo falanqayn muuqaal ah. Waxay soo celisaa qiimeyn qaabaysan oo daboolaysa habaynta, typography, isticmaalka midabka, iyo walaacyada helitaanka.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL buuxa ee bogga dib loo eegayo |
| `focus` | string | No | Liis meelaha dib-u-eegista lagu xoojinayo oo comma lagu kala saaray: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: dhammaan meelaha |
| `width` | integer | No | Ballaca viewport-ka. Default `1280` |

**Soo celiya**

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

## Awoodaha La Rakibi Karo {#installable-abilities}

Installable Abilities Registry wuxuu kuu oggolaanayaa inaad agent-ka ku ballaariso xirmooyin awood oo dheeraad ah oo loo qaybiyo sidii plugins WordPress ah. Xirmo kasta waxay diiwaangelisaa hal ama in ka badan oo awoodood iyadoo adeegsanaysa ability API-ga caadiga ah.

### `list_available_abilities` {#listavailableabilities}

Waxay soo celisaa catalogue-ka xirmooyinka awoodaha ee laga heli karo rakibidda registry-ga.

**Parameters**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `category` | string | Maya | Ku shaandhee qayb: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Soo celiya**

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

Soo dejiya oo hawlgeliya xirmo awood oo ka timaadda diiwaanka.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `slug` | string | Haa | Slug-ga kordhiyaha xirmada awoodda |

**Soo celiya** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Wuxuu weydiiyaa diiwaanka awoodaha si uu u helo kordhiyaha ugu fiican ee ku habboon xaalad adeegsi oo la sharraxay, haddii la rabo-na wuu rakibaa.

**Halbeegyada**

| Halbeeg | Nooc | Loo baahan yahay | Sharaxaad |
|---|---|---|---|
| `description` | string | Haa | Sharaxaad luqad dabiici ah oo ku saabsan shaqeynta la doonayo |
| `install` | boolean | Maya | Haddii `true`, wuxuu isla markiiba rakibaa kordhiyaha lagu taliyay. Qiimaha caadiga ah waa `false` |

**Tusaale**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Soo celiya**

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
