---
title: Tilvísun um getu
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Tilvísun fyrir getu {#abilities-reference}

Geta er grunnaðgerðirnar sem Gratis AI Agent getur kallað fram í WordPress uppsetningunni þinni. Hver geta er skráður PHP klasi sem birtir JSON schema — agentinn les þetta schema við keyrslu til að skilja hvaða breytur eru nauðsynlegar og hverju getan skilar.

Þessi síða skjalfestir alla getu sem fylgir Gratis AI Agent v1.9.0.

---

## Sérsniðnar færslutegundir {#custom-post-types}

Þessar getur stjórna sérsniðnum færslutegundum (CPTs) sem eru skráðar í gegnum agentinn. Skráningar eru vistaðar í WordPress options töflunni svo þær haldist eftir afvirkjun og endurvirkjun plugins.

### `register_post_type` {#registerposttype}

Skráir nýja sérsniðna færslutegund.

**Breytur**

| Breyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `slug` | string | Já | Lykill færslutegundarinnar (hámark 20 stafir, engir hástafir, engin bil) |
| `singular_label` | string | Já | Lesanlegt nafn í eintölu, t.d. `Portfolio Item` |
| `plural_label` | string | Já | Lesanlegt nafn í fleirtölu, t.d. `Portfolio Items` |
| `public` | boolean | Nei | Hvort færslutegundin sé aðgengileg opinberlega. Sjálfgefið `true` |
| `supports` | array | Nei | Eiginleikar sem á að styðja: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Sjálfgefið `["title","editor"]` |
| `has_archive` | boolean | Nei | Hvort safnsíða færslutegundar sé virkjuð. Sjálfgefið `false` |
| `menu_icon` | string | Nei | Dashicons klasi eða URL fyrir tákn admin valmyndarinnar. Sjálfgefið `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nei | URL slug fyrir færslutegundina. Sjálfgefið er `slug` |

**Dæmi**

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

**Skilar** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Skilar öllum sérsniðnum færslutegundum sem agentinn hefur skráð.

**Breytur** — engar

**Skilar**

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

Afskráir sérsniðna færslutegund sem agentinn hafði áður skráð. Fyrirliggjandi færslur af þeirri tegund verða áfram í gagnagrunninum en eru ekki lengur aðgengilegar í gegnum færslutegundina.

**Breytur**

| Breyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `slug` | string | Já | Lykill færslutegundarinnar sem á að fjarlægja |

**Skilar** `{ "success": true, "slug": "portfolio" }`

---

## Sérsniðnar flokkunarfræði {#custom-taxonomies}

Þessar getur stjórna sérsniðnum flokkunarfræðum. Eins og CPTs eru skráningar flokkunarfræða vistaðar.

### `register_taxonomy` {#registertaxonomy}

Skráir nýja sérsniðna flokkunarfræði.

**Breytur**

| Breyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `slug` | string | Já | Lykill flokkunarfræðinnar (hámark 32 stafir) |
| `singular_label` | string | Já | Lesanlegt nafn í eintölu, t.d. `Project Category` |
| `plural_label` | string | Já | Lesanlegt nafn í fleirtölu, t.d. `Project Categories` |
| `post_types` | array | Já | Slug færslutegunda sem þessi flokkunarfræði á að tengjast við |
| `hierarchical` | boolean | Nei | `true` fyrir flokka-stíl, `false` fyrir merkja-stíl. Sjálfgefið `true` |
| `public` | boolean | Nei | Hvort hugtök séu aðgengileg opinberlega. Sjálfgefið `true` |
| `rewrite_slug` | string | Nei | URL slug fyrir flokkunarfræðina. Sjálfgefið er `slug` |

**Dæmi**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Skilar** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Skilar öllum sérsniðnum flokkunarfræðum sem agentinn hefur skráð.

**Breytur** — engar

**Skilar**

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

Afskráir sérsniðna flokkunarfræði sem agentinn hafði áður skráð.

**Breytur**

| Breyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `slug` | string | Já | Lykill flokkunarfræðinnar sem á að fjarlægja |

**Skilar** `{ "success": true, "slug": "project-category" }`

---

## Hönnunarkerfi {#design-system}

Getur hönnunarkerfis breyta sjónrænni framsetningu WordPress vefsins — frá sérsniðnu CSS til blokkamynstra og vefmerkis.

### `inject_custom_css` {#injectcustomcss}

Bætir CSS við `<head>` vefsins í gegnum `wp_add_inline_style`. CSS er vistað í `gratis_ai_agent_custom_css` option og tekið snyrtilega úr röð þegar getan er endurstillt.

**Breytur**

| Breyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `css` | string | Já | Gilt CSS sem á að setja inn |
| `label` | string | Nei | Lesanlegt merki fyrir þennan CSS blokk, notað í villuleitarskrám. Sjálfgefið `"agent-injected"` |
| `replace` | boolean | Nei | Ef `true`, skiptir út öllu CSS sem áður var sett inn. Sjálfgefið `false` (bætir við) |

**Dæmi**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Skilar** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Skráir endurnýtanlegt blokkamynstur í WordPress mynstursafninu.

**Breytur**

| Breyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `slug` | string | Já | Auðkenni mynsturs, t.d. `gratis/hero-dark` |
| `title` | string | Já | Lesanlegt nafn mynsturs sem birtist í ritlinum |
| `content` | string | Já | Raðgert blokkamerki (HTML) fyrir mynstrið |
| `categories` | array | Nei | Slug mynsturflokka, t.d. `["featured", "hero"]` |
| `description` | string | Nei | Stutt lýsing sem birtist í mynsturvalinu |
| `keywords` | array | Nei | Leitarorð |

**Skilar** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Listar öll blokkamynstur sem agentinn hefur skráð.

**Breytur** — engar

**Skilar**

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

Stillir WordPress merki vefsins á tiltekið viðhengis-ID eða fjarlæga myndarslóð. Þegar URL er gefin upp er myndinni hlaðið niður og hún flutt inn í Media Library.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `attachment_id` | integer | Nei | ID fyrir fyrirliggjandi viðhengi í Media Library |
| `url` | string | Nei | Fjarlæg myndar-URL til að flytja inn og stilla sem merki |

Annaðhvort `attachment_id` eða `url` verður að vera gefið upp.

**Skilar** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Beitir nefndri forstillingu fyrir liti/leturfræði á `theme.json` virka þemans (eða `global-styles`). Forstillingar eru yfirfarin knippi sem Gratis AI Agent-teymið viðheldur.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `preset` | string | Já | Heiti forstillingar, t.d. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nei | Ef `true`, sameina við fyrirliggjandi gildi í stað þess að skipta þeim út. Sjálfgefið `false` |

**Tiltækar forstillingar**

| Forstilling | Lýsing |
|---|---|
| `minimal-dark` | Næstum svartur bakgrunnur, hvítur texti, einn áherslulitur |
| `warm-editorial` | Hlýr beinhvítur bakgrunnur, fyrirsagnir með serif-letri, jarðlitir sem áherslulitir |
| `corporate-blue` | Dökkblá og hvít litaspjald með faglegri leturfræði |
| `vibrant-startup` | Bjartir litstiglar, ávöl horn, nútímalegt sans-serif letur |
| `classic-blog` | Hlutlausir gráir tónar, þægileg línuhæð, hefðbundið bil í umbrotinu |

**Skilar** `{ "success": true, "preset": "minimal-dark" }`

---

## Altækir stílar {#global-styles}

Eiginleikar fyrir Altæka stíla lesa og skrifa theme.json-gildi í gegnum WordPress Global Styles API og hafa áhrif á alla kubba og sniðmát á öllum vefnum.

### `get_global_styles` {#getglobalstyles}

Skilar núverandi uppsetningu altækra stíla.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `path` | string | Nei | JSON-bendill á tiltekið gildi, t.d. `/color/palette` eða `/typography/fontSizes`. Skilar öllum hlutnum ef þessu er sleppt. |

**Skilar** öllum hlut altækra stíla eða gildinu á `path`.

---

### `set_global_styles` {#setglobalstyles}

Uppfærir eitt eða fleiri gildi í uppsetningu altækra stíla.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `path` | string | Já | JSON-bendill á gildið sem á að stilla, t.d. `/color/palette` |
| `value` | any | Já | Nýja gildið |

**Dæmi** — bæta lit við litaspjaldið

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Skilar** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Endurstillir allar breytingar á altækum stílum sem agent hefur beitt og endurheimtir sjálfgefin gildi þemans.

**Færibreytur** — engar

**Skilar** `{ "success": true }`

---

## Leiðsagnarvalmyndir {#navigation-menus}

Eiginleikar leiðsagnarvalmynda búa til og stjórna WordPress leiðsagnarvalmyndum og atriðum þeirra.

### `create_menu` {#createmenu}

Býr til nýja WordPress leiðsagnarvalmynd.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `name` | string | Já | Heiti valmyndar, t.d. `Primary Navigation` |
| `location` | string | Nei | Staðsetning í þema sem á að úthluta þessari valmynd á, t.d. `primary` |

**Skilar** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Endurnefnir valmynd eða úthlutar henni aftur á staðsetningu í þema.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `menu_id` | integer | Já | ID valmyndarinnar sem á að uppfæra |
| `name` | string | Nei | Nýtt heiti valmyndar |
| `location` | string | Nei | Staðsetning í þema sem á að úthluta eða endurúthluta |

**Skilar** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Bætir atriði við fyrirliggjandi leiðsagnarvalmynd.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `menu_id` | integer | Já | ID markvalmyndarinnar |
| `type` | string | Já | Tegund atriðis: `custom`, `post_type` eða `taxonomy` |
| `title` | string | Nei | Merking fyrir valmyndaratriðið (nauðsynlegt fyrir `custom`-tegund) |
| `url` | string | Nei | URL fyrir `custom`-atriði |
| `object_id` | integer | Nei | Færslu-ID eða hugtaks-ID fyrir `post_type`/`taxonomy`-atriði |
| `parent_id` | integer | Nei | ID valmyndaratriðis sem þetta atriði á að vera undir |
| `position` | integer | Nei | Núllmiðuð staðsetning í valmyndinni |

**Skilar** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Fjarlægir atriði úr leiðsagnarvalmynd.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `item_id` | integer | Já | ID valmyndaratriðis sem á að fjarlægja |

**Skilar** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Sýnir lista yfir allar WordPress leiðsagnarvalmyndir, þar á meðal úthlutaðar staðsetningar þeirra í þema.

**Færibreytur** — engar

**Skilar**

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

## Stjórnun valkosta {#options-management}

Eiginleikar valkosta lesa og skrifa WordPress valkosti í gegnum `get_option` / `update_option`. Innbyggður öryggisblokkunarlisti kemur í veg fyrir óviljandi breytingar á mikilvægum stillingum.

### `get_option` {#getoption}

Les WordPress valkost.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `option_name` | string | Já | Valkostalykillinn, t.d. `blogname` |

**Skilar** `{ "option_name": "blogname", "value": "My Site" }`

Skilar villu ef `option_name` er á öryggisblokkunarlistanum.

---

### `set_option` {#setoption}

Skrifar WordPress valkost.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `option_name` | string | Já | Valkostalykillinn |
| `value` | any | Já | Nýja gildið (raðað sjálfkrafa fyrir fylki/hluti) |
| `autoload` | string | Nei | `"yes"` eða `"no"`. Sjálfgefið varðveitir fyrirliggjandi autoload-stillingu |

Skilar villu ef `option_name` er á öryggisblokkunarlistanum.

**Skilar** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Eyðir WordPress valkosti.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Valkostalykillinn sem á að eyða |

Skilar villu ef `option_name` er á öryggisblokkunarlistanum.

**Skilar** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Sýnir lista yfir WordPress valkosti sem passa við mynstur.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | SQL LIKE mynstur til að sía valkostanöfn, t.d. `gratis_%`. Skilar öllum valkostum ef þessu er sleppt (notið með varúð á stórum gagnagrunnum). |
| `limit` | integer | No | Hámarksfjöldi niðurstaðna. Sjálfgefið `50`, hámark `500` |

**Skilar**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Efnisumsjón {#content-management}

Efnisumsjónarhæfni býr til og breytir WordPress færslum og síðum. Færslu-ID er skilað svo síðari skref í fjölhæfnisáætlunum geti vísað í efnið sem búið var til.

### `create_post` {#createpost}

Býr til nýja WordPress færslu, síðu eða færslu af sérsniðinni færslugerð.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Titill færslu |
| `content` | string | No | Meginmál færslu — tekur við venjulegum texta, HTML eða raðgerðu blokkamerkingamáli |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Sjálfgefið `draft` |
| `post_type` | string | No | Slóðarheiti færslugerðar, t.d. `post`, `page` eða hvaða skráða CPT sem er. Sjálfgefið `post` |
| `excerpt` | string | No | Stutt samantekt sem birtist í söfnum og leitarniðurstöðum |
| `categories` | array | No | Fylki með flokkaheitum eða ID-um sem á að úthluta |
| `tags` | array | No | Fylki með merkjaheitum eða ID-um sem á að úthluta |
| `author` | integer | No | WordPress notanda-ID sem á að setja sem höfund færslunnar. Sjálfgefið er núverandi notandi |
| `date` | string | No | Birtingardagsetning á ISO 8601 sniði, t.d. `2026-05-01T09:00:00` |
| `page_template` | string | No | Sniðmátsskrá sem á að úthluta þessari færslu eða síðu, t.d. `page-full-width.php`. Hefur aðeins merkingu þegar `post_type` er `page` eða CPT sem styður síðusniðmát. |

**Dæmi**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Skilar** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Uppfærir fyrirliggjandi WordPress færslu eða síðu.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID færslunnar sem á að uppfæra |
| `title` | string | No | Nýr færslutitill |
| `content` | string | No | Nýtt meginmál færslu |
| `status` | string | No | Ný staða: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nýr útdráttur |
| `categories` | array | No | Skipta út öllum flokkalistanum fyrir þetta fylki af nöfnum eða ID-um |
| `tags` | array | No | Skipta út öllum merkjalistanum fyrir þetta fylki af nöfnum eða ID-um |
| `page_template` | string | No | Ný sniðmátsskrá sem á að úthluta þessari færslu eða síðu, t.d. `page-full-width.php`. Sendu tóman streng til að fjarlægja sniðmátsúthlutunina og fara aftur í sjálfgefið gildi themesins. |

**Dæmi** — breyta sniðmáti eftir stofnun

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Skilar** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Býr til margar færslur í einu hæfnikalli og fækkar þannig ferðum fram og til baka við uppsetningu vefja eða magninnflutning efnis. Færslur eru búnar til í röð; ef ein mistekst halda hinar áfram og tilkynnt er um bilunina í niðurstöðufylkinu.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Fylki af færsluhlutum, þar sem hver tekur við sömu færibreytum og `create_post` |
| `stop_on_error` | boolean | No | Ef `true`, stöðva vinnslu eftir fyrstu bilun. Sjálfgefið `false` |

**Dæmi**

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

**Skilar**

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

Úthlutar aðalmynd (smámynd færslu) á fyrirliggjandi færslu eða síðu. Tekur við ID-i fyrirliggjandi viðhengis í Media Library eða fjarlægri myndaslóð; þegar slóð er gefin er myndinni hlaðið niður og hún flutt inn sjálfkrafa.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID færslunnar eða síðunnar sem á að uppfæra |
| `attachment_id` | integer | No | ID fyrirliggjandi viðhengis í Media Library |
| `url` | string | No | Fjarlæg myndaslóð sem á að flytja inn og setja sem aðalmynd |
| `alt_text` | string | No | Alt-texti sem á að setja á viðhengið ef það er flutt inn af slóð |

Annaðhvort `attachment_id` eða `url` verður að vera gefið upp.

**Skilar** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Býr til samskiptaform með virka form-plugininu (Contact Form 7, WPForms, Fluent Forms eða Gravity Forms, eftir því hvað er uppsett). Skilar shortcode sem hægt er að fella inn í hvaða færslu eða síðu sem er.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `title` | string | Já | Heiti formsins sem birtist í stjórnborði formviðbótarinnar |
| `fields` | array | Já | Röðuð listi yfir formreiti (sjá reitahlut hér að neðan) |
| `recipient` | string | Nei | Netfang sem tekur við innsendingum. Sjálfgefið er admin-netfang WordPress |
| `subject` | string | Nei | Efnislína tölvupósts. Styður staðgengla `[your-name]` og `[your-subject]` þegar Contact Form 7 er notað |
| `confirmation_message` | string | Nei | Skilaboð sem birtast eftir vel heppnaða innsendingu. Sjálfgefið: `"Thank you for your message. We'll be in touch soon."` |

**Reitahlutur**

| Lykill | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `name` | string | Já | Innra reitanafn / vélarlykill |
| `label` | string | Já | Mannlæsilegt merki sem birtist á forminu |
| `type` | string | Já | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nei | Hvort fylla þurfi út reitinn fyrir innsendingu. Sjálfgefið `false` |
| `options` | array | Nei | Valkostir fyrir reitina `select`, `checkbox` og `radio` |
| `placeholder` | string | Nei | Staðgengilstexti fyrir innsláttarreiti af textagerð |

**Dæmi**

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

**Skilar**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Sjónræn yfirferð {#visual-review}

Sjónrænir yfirferðareiginleikar gera agentinum kleift að taka skjáskot af lifandi síðum og greina þau, sem gerir sjálfstæða hönnunaryfirferð, samanburð fyrir/eftir og sjónrænar afturhvarfsprófanir mögulegar án þess að krefjast nokkurrar vafraviðbótar.

### `capture_screenshot` {#capturescreenshot}

Tekur skjáskot af WordPress-síðu á tiltekinni URL með hauslausum vafra á þjóni. Myndin er vistuð í Media Library og CDN URL er skilað.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `url` | string | Já | Full URL síðunnar sem á að taka skjáskot af, t.d. `https://example.com/about/` |
| `width` | integer | Nei | Breidd viewport í pixlum. Sjálfgefið `1280` |
| `height` | integer | Nei | Hæð viewport í pixlum. Sjálfgefið `800` |
| `full_page` | boolean | Nei | Taka alla skrunanlegu síðuna í stað aðeins viewport. Sjálfgefið `false` |
| `delay_ms` | integer | Nei | Millisekúndur sem beðið er eftir að síða hleðst áður en tekið er skjáskot, gagnlegt fyrir hreyft efni. Sjálfgefið `500` |
| `label` | string | Nei | Mannlæsilegt merki sem er geymt með viðhenginu í Media Library |

**Skilar**

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

Tekur tvö skjáskot og skilar sjónrænu diff-stigi ásamt diff-mynd sem undirstrikar breytt svæði. Gagnlegt til að staðfesta að hönnunarbreyting hafi skilað væntanlegri niðurstöðu eða til að greina óviljandi afturhvarf.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `before_url` | string | Já | URL síðunnar sem á að taka sem „fyrir“-stöðu |
| `after_url` | string | Já | URL síðunnar sem á að taka sem „eftir“-stöðu. Getur verið sama URL ef borið er saman yfir tíma |
| `width` | integer | Nei | Breidd viewport fyrir bæði skjáskot. Sjálfgefið `1280` |
| `threshold` | float | Nei | Þröskuldur fyrir pixlamismun (0.0–1.0). Pixlar innan þessa vikmarks teljast óbreyttir. Sjálfgefið `0.1` |

**Skilar**

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

`diff_score` upp á `0.0` þýðir engin sýnileg breyting; `1.0` þýðir að hver einasti pixill breyttist.

---

### `review_page_design` {#reviewpagedesign}

Tekur skjáskot af síðu og sendir það til tungumálalíkansins til sjónrænnar greiningar. Skilar skipulögðu mati sem nær yfir umbrot, leturfræði, litanotkun og aðgengisatriði.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `url` | string | Já | Full URL síðunnar sem á að yfirfara |
| `focus` | string | Nei | Kommuaðskilinn listi yfir yfirferðarsvið sem á að leggja áherslu á: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Sjálfgefið: öll svið |
| `width` | integer | Nei | Breidd viewport. Sjálfgefið `1280` |

**Skilar**

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

## Uppsetjanlegir eiginleikar {#installable-abilities}

Skrá yfir uppsetjanlega eiginleika gerir þér kleift að útvíkka agentinn með viðbótareiginleikapökkum sem dreift er sem WordPress-viðbótum. Hver pakki skráir einn eða fleiri eiginleika með staðlaða eiginleika-API-inu.

### `list_available_abilities` {#listavailableabilities}

Skilar yfirliti yfir eiginleikapakka sem eru tiltækir til uppsetningar úr skránni.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `category` | string | Nei | Sía eftir flokki: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Skilar**

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

Sækir og virkjar getu-pakka úr skránni.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `slug` | string | Já | Slug fyrir plugin getu-pakka |

**Skilar** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Leitar í getu-skránni til að finna besta plugin fyrir lýst notkunartilvik og setur það upp valkvætt.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `description` | string | Já | Lýsing á æskilegri virkni á náttúrulegu máli |
| `install` | boolean | Nei | Ef `true`, setur það upp ráðlagða plugin strax. Sjálfgefið `false` |

**Dæmi**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Skilar**

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
