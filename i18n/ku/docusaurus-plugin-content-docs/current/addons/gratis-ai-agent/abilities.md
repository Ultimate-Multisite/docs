---
title: Referansa Şiyanan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referansa Şiyanan {#abilities-reference}

Şiyan çalakiyên atomîk in ku Gratis AI Agent dikare li ser sazkirina te ya WordPress bixebitîne. Her şiyan klaseke PHP ya qeydkirî ye ku şemayek JSON derdixe — ajant vê şemayê di dema xebitandinê de dixwîne da ku bizane kîjan parametre pêwîst in û şiyan çi vedigerîne.

Ev rûpel hemû şiyanên ku bi Gratis AI Agent v1.9.0 re tên şandin belge dike.

---

## Cureyên Nivîsên Taybet {#custom-post-types}

Ev şiyan cureyên nivîsên taybet (CPT) yên bi rêya ajant hatine qeydkirin birêve dibin. Qeydkirin di tabloya vebijarkên WordPress de tên tomarkirin, ji ber vê yekê piştî neçalakirina plugin û çalakakirina wê jî dimînin.

### `register_post_type` {#registerposttype}

Cureyek nû ya nivîsa taybet qeyd dike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `slug` | string | Erê | Kilîda cureya nivîsê (herî zêde 20 tîp, bê tîpên mezin, bê valahî) |
| `singular_label` | string | Erê | Navek yekjimar a ku mirov dikare bixwîne, wek `Portfolio Item` |
| `plural_label` | string | Erê | Navek pirjimar a ku mirov dikare bixwîne, wek `Portfolio Items` |
| `public` | boolean | Na | Ma cureya nivîsê bi giştî tê gihîştin an na. Standard `true` |
| `supports` | array | Na | Taybetmendiyên ku werin piştgirîkirin: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standard `["title","editor"]` |
| `has_archive` | boolean | Na | Ma rûpela arşîva cureya nivîsê çalak e an na. Standard `false` |
| `menu_icon` | string | Na | Klasa Dashicons an URL ji bo îkona menuya rêveberiyê. Standard `"dashicons-admin-post"` |
| `rewrite_slug` | string | Na | URL slug ji bo cureya nivîsê. Wek standard dibe `slug` |

**Mînak**

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

**Vedigerîne** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Hemû cureyên nivîsên taybet ên ku ji aliyê ajant ve hatine qeydkirin vedigerîne.

**Parametre** — tune

**Vedigerîne**

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

Cureyek nivîsa taybet a berê ji aliyê ajant ve hatî qeydkirin ji qeydê derdixe. Nivîsên heyî yên wê cureyê di database de dimînin, lê êdî bi rêya cureya nivîsê nayên gihîştin.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `slug` | string | Erê | Kilîda cureya nivîsê ya ku were rakirin |

**Vedigerîne** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomiyên Taybet {#custom-taxonomies}

Ev şiyan taksonomiyên taybet birêve dibin. Wek CPT, qeydkirinên taksonomiyê jî tên tomarkirin.

### `register_taxonomy` {#registertaxonomy}

Taksonomiyeke taybet a nû qeyd dike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `slug` | string | Erê | Kilîda taksonomiyê (herî zêde 32 tîp) |
| `singular_label` | string | Erê | Navek yekjimar a ku mirov dikare bixwîne, wek `Project Category` |
| `plural_label` | string | Erê | Navek pirjimar a ku mirov dikare bixwîne, wek `Project Categories` |
| `post_types` | array | Erê | Slugên cureyên nivîsê ku divê ev taksonomî pê ve were girêdan |
| `hierarchical` | boolean | Na | `true` ji bo şêwaza kategoriyê, `false` ji bo şêwaza tagê. Standard `true` |
| `public` | boolean | Na | Ma term bi giştî tên gihîştin an na. Standard `true` |
| `rewrite_slug` | string | Na | URL slug ji bo taksonomiyê. Wek standard dibe `slug` |

**Mînak**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Vedigerîne** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Hemû taksonomiyên taybet ên ku ji aliyê ajant ve hatine qeydkirin vedigerîne.

**Parametre** — tune

**Vedigerîne**

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

Taksonomiyeke taybet a berê ji aliyê ajant ve hatî qeydkirin ji qeydê derdixe.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `slug` | string | Erê | Kilîda taksonomiyê ya ku were rakirin |

**Vedigerîne** `{ "success": true, "slug": "project-category" }`

---

## Pergala Dîzaynê {#design-system}

Şiyanên pergala dîzaynê pêşkêşiya dîtbarî ya malpera WordPress diguherînin — ji CSS ya taybet heta şêweyên blokan û logoya malperê.

### `inject_custom_css` {#injectcustomcss}

CSS bi rêya `wp_add_inline_style` li `<head>` ya malperê zêde dike. CSS di vebijarka `gratis_ai_agent_custom_css` de tê hilanîn û dema şiyan were resetkirin bi paqijî ji rêzê tê derxistin.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `css` | string | Erê | CSS ya derbasdar ji bo têxistinê |
| `label` | string | Na | Etîketeke ku mirov dikare bixwîne ji bo vî bloka CSS, di logên debug de tê bikaranîn. Standard `"agent-injected"` |
| `replace` | boolean | Na | Heke `true` be, hemû CSS ya berê hatî têxistin diguherîne. Standard `false` (zêde dike) |

**Mînak**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Vedigerîne** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Şêweyek bloka dubare-bikaranînê di pirtûkxaneya şêweyên WordPress de qeyd dike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `slug` | string | Erê | Nasnameya şêwê, wek `gratis/hero-dark` |
| `title` | string | Erê | Navê şêwê yê ku mirov dikare bixwîne û di editor de tê nîşandan |
| `content` | string | Erê | Nîşankirina bloka serialîzekirî (HTML) ji bo şêwê |
| `categories` | array | Na | Slugên kategoriyên şêwê, wek `["featured", "hero"]` |
| `description` | string | Na | Danasîneke kurt ku di hilbijêra şêweyê de tê nîşandan |
| `keywords` | array | Na | Peyvên lêgerînê |

**Vedigerîne** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Hemû şêweyên blokan ên ku ji aliyê ajant ve hatine qeydkirin navnîş dike.

**Parametre** — tune

**Vedigere**

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

Logoya malpera WordPress bi ID-ya pêveka heyî an URL-eke wêneyê dûr saz dike. Dema URL were dayîn, wêne tê daxistin û tê importkirin bo Media Library.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `attachment_id` | integer | Na | ID-ya pêveka heyî ya Media Library |
| `url` | string | Na | URL-ya wêneyê dûr ji bo importkirin û saz kirina wê wek logo |

Divê yek ji `attachment_id` an `url` were dayîn.

**Vedigere** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Preseteke bi nav ji bo reng/tîpografî li `theme.json`-a theme-a çalak (an `global-styles`) bi kar tîne. Preset pakêtên amade ne ku ji hêla tîma Gratis AI Agent ve tên parastin.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `preset` | string | Erê | Navê preset, mînak `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Na | Heke `true` be, li şûna guherandinê bi nirxên heyî re bike yek. Berdest `false` |

**Presetên berdest**

| Preset | Danasîn |
|---|---|
| `minimal-dark` | Paşxaneya nêzî reş, nivîsa spî, yek rengê girîng |
| `warm-editorial` | Paşxaneya germ a nêzî spî, sernavên serif, rengên girîng ên xakî |
| `corporate-blue` | Paleta şînê tarî û spî bi tîpografiya profesyonel |
| `vibrant-startup` | Gradientên geş, goşeyên girover, cureyê sans-serif ê nûjen |
| `classic-blog` | Gewrên bêalî, bilindahiya rêzê ya rehet, valahiya rêxistina kevneşopî |

**Vedigere** `{ "success": true, "preset": "minimal-dark" }`

---

## Şêwazên Giştî {#global-styles}

Şiyanên Şêwazên Giştî nirxên theme.json bi rêya WordPress Global Styles API dixwînin û dinivîsin, û li ser hemû block û şablonan li tevahiya malperê bandor dikin.

### `get_global_styles` {#getglobalstyles}

Veavakirina şêwazên giştî ya niha vedigerîne.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `path` | string | Na | Nîşanera JSON ji bo nirxekî taybet, mînak `/color/palette` an `/typography/fontSizes`. Heke nehate dayîn, hemû objektê vedigerîne. |

**Vedigere** objektê tevahî yê şêwazên giştî an nirxa li `path`.

---

### `set_global_styles` {#setglobalstyles}

Yek an zêdetir nirx di veavakirina şêwazên giştî de nû dike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `path` | string | Erê | Nîşanera JSON ji bo nirxa ku were saz kirin, mînak `/color/palette` |
| `value` | any | Erê | Nirxa nû |

**Mînak** — rengekî li paletê zêde bike

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Vedigere** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Hemû guherînên şêwazên giştî yên ji hêla agent ve hatine sepandin vedigerîne û berdestên theme vedigerîne.

**Parametre** — tune

**Vedigere** `{ "success": true }`

---

## Menûyên Navîgasyonê {#navigation-menus}

Şiyanên Menûya Navîgasyonê menûyên navîgasyona WordPress û hêmanên wan çêdikin û rêve dibin.

### `create_menu` {#createmenu}

Menûyeke nû ya navîgasyona WordPress çêdike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `name` | string | Erê | Navê menûyê, mînak `Primary Navigation` |
| `location` | string | Na | Cihê theme ku ev menû were pê ve girêdan, mînak `primary` |

**Vedigere** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Navê menûyekê diguherîne an wê ji nû ve li cihê theme pê ve digirêde.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `menu_id` | integer | Erê | ID-ya menûya ku were nûkirin |
| `name` | string | Na | Navê nû yê menûyê |
| `location` | string | Na | Cihê theme ji bo pêvekirin an ji nû ve pêvekirin |

**Vedigere** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Hêmanekê li menûyeke navîgasyonê ya heyî zêde dike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `menu_id` | integer | Erê | ID-ya menûya armanc |
| `type` | string | Erê | Cureya hêmanê: `custom`, `post_type`, an `taxonomy` |
| `title` | string | Na | Etîket ji bo hêmanê menûyê (ji bo cureya `custom` pêwîst e) |
| `url` | string | Na | URL ji bo hêmanên `custom` |
| `object_id` | integer | Na | Post ID an term ID ji bo hêmanên `post_type`/`taxonomy` |
| `parent_id` | integer | Na | ID-ya hêmanê menûyê ku ev hêman di bin wê de were bicihkirin |
| `position` | integer | Na | Cihê ji sifirê dest pê dike di menûyê de |

**Vedigere** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Hêmanekê ji menûyeke navîgasyonê radike.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `item_id` | integer | Erê | ID-ya hêmanê menûyê ku were rakirin |

**Vedigere** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Hemû menûyên navîgasyona WordPress, bi cihên theme yên wan ên pêvekirî re, rêz dike.

**Parametre** — tune

**Vedigere**

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

## Rêvebirina Vebijarkan {#options-management}

Şiyanên vebijarkan vebijarkên WordPress bi rêya `get_option` / `update_option` dixwînin û dinivîsin. Lîsteya astengkirinê ya ewlehiyê ya hundirîn rê li ber guherandina bêmebest a mîhengên girîng digire.

### `get_option` {#getoption}

Vebijarkeke WordPress dixwîne.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `option_name` | string | Erê | Kilîta vebijarkê, mînak `blogname` |

**Vedigere** `{ "option_name": "blogname", "value": "My Site" }`

Çewtiyekê vedigerîne heke `option_name` di lîsteya astengkirina ewlehiyê de be.

---

### `set_option` {#setoption}

Vebijarkeke WordPress dinivîse.

**Parametre**

| Parametre | Cure | Pêwîst | Danasîn |
|---|---|---|---|
| `option_name` | string | Erê | Kilîta vebijarkê |
| `value` | any | Erê | Nirxa nû (ji bo array/object-an bixweber tê serialîzekirin) |
| `autoload` | string | Na | `"yes"` an `"no"`. Berdest mîhenga autoload a heyî diparêze |

Ger `option_name` di lîsteya astengkirina ewlehiyê de be çewtiyek vedigerîne.

**Vedigerîne** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Vebijarkek WordPress jê dibe.

**Parametre**

| Parametre | Cure | Pêwîst | Rave |
|---|---|---|---|
| `option_name` | string | Erê | Kilîta vebijarkê ya ku were jêbirin |

Ger `option_name` di lîsteya astengkirina ewlehiyê de be çewtiyek vedigerîne.

**Vedigerîne** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Vebijarkên WordPress ên ku li gorî şêweyekê tên digere rêz dike.

**Parametre**

| Parametre | Cure | Pêwîst | Rave |
|---|---|---|---|
| `pattern` | string | Na | Şêweya SQL LIKE ji bo parzûnkirina navên vebijarkan, wek `gratis_%`. Ger were hiştin hemû vebijarkan vedigerîne (li ser databaseên mezin bi hişyarî bi kar bîne). |
| `limit` | integer | Na | Hejmara herî zêde ya encaman. Standard `50`, herî zêde `500` |

**Vedigerîne**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Rêvebirina Naverokê {#content-management}

Hêzên Rêvebirina Naverokê post û rûpelên WordPress çêdikin û sererast dikin. IDyên postan vedigerin da ku gavên paşîn di planên pir-hêz de bikarin naveroka çêkirî referans bikin.

### `create_post` {#createpost}

Postek nû ya WordPress, rûpelek, an têketinek ji cureya post a xweser çêdike.

**Parametre**

| Parametre | Cure | Pêwîst | Rave |
|---|---|---|---|
| `title` | string | Erê | Sernavê postê |
| `content` | string | Na | Laşê postê — nivîsa sade, HTML, an markup a blokên serialîzekirî qebûl dike |
| `status` | string | Na | `draft`, `publish`, `pending`, `private`. Standard `draft` |
| `post_type` | string | Na | Slug a cureya postê, wek `post`, `page`, an her CPT ya qeydkirî. Standard `post` |
| `excerpt` | string | Na | Kurteya ku di arşîvan û encamên lêgerînê de tê nîşandan |
| `categories` | array | Na | Rêzeka nav an IDyên kategoriyan ji bo veqetandinê |
| `tags` | array | Na | Rêzeka nav an IDyên etîketan ji bo veqetandinê |
| `author` | integer | Na | IDya bikarhênerê WordPress ku wek nivîskarê postê were danîn. Wek standard bikarhênerê heyî ye |
| `date` | string | Na | Dîroka weşandinê di formata ISO 8601 de, wek `2026-05-01T09:00:00` |
| `page_template` | string | Na | Pelê şablonê ku ji bo vê postê an rûpelê were veqetandin, wek `page-full-width.php`. Tenê watedar e dema `post_type` `page` be an CPTyek be ku şablonên rûpelan piştgirî dike. |

**Mînak**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Vedigerîne** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Postek an rûpelek heyî ya WordPress nû dike.

**Parametre**

| Parametre | Cure | Pêwîst | Rave |
|---|---|---|---|
| `post_id` | integer | Erê | IDya postê ku were nûkirin |
| `title` | string | Na | Sernavê nû yê postê |
| `content` | string | Na | Laşê nû yê postê |
| `status` | string | Na | Rewşa nû: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Na | Kurteya nû |
| `categories` | array | Na | Lîsteya tevahî ya kategoriyan bi vê rêzeka nav an IDyan biguherîne |
| `tags` | array | Na | Lîsteya tevahî ya etîketan bi vê rêzeka nav an IDyan biguherîne |
| `page_template` | string | Na | Pelê şablonê yê nû ku ji bo vê postê an rûpelê were veqetandin, wek `page-full-width.php`. Risteyek vala bişîne da ku veqetandina şablonê were rakirin û vegere standarda theme. |

**Mînak** — şablonê piştî çêkirinê biguherîne

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Vedigerîne** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Di yek bangkirina hêzê de gelek postan çêdike, di dema avakirina malperê an importkirina naveroka komî de çûnûhatinan kêm dike. Post bi rêzê tên çêkirin; ger yek bi ser nekeve yên din didomin û têkçûn di rêzeka encaman de tê ragihandin.

**Parametre**

| Parametre | Cure | Pêwîst | Rave |
|---|---|---|---|
| `posts` | array | Erê | Rêzeka tiştên postê, her yek heman parametreyên `create_post` qebûl dike |
| `stop_on_error` | boolean | Na | Ger `true` be, piştî têkçûna yekemîn pêvajoyê rawestîne. Standard `false` |

**Mînak**

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

**Vedigerîne**

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

Wêneyek taybet (thumbnail a postê) ji postek an rûpelek heyî re veqetîne. IDya attachmentek heyî ya Media Library an URLya wêneyek dûr qebûl dike; dema URL were dayîn, wêne bixweber tê daxistin û importkirin.

**Parametre**

| Parametre | Cure | Pêwîst | Rave |
|---|---|---|---|
| `post_id` | integer | Erê | IDya postê an rûpelê ku were nûkirin |
| `attachment_id` | integer | Na | IDya attachmentek heyî ya Media Library |
| `url` | string | Na | URLya wêneyek dûr ji bo importkirin û danîna wê wek wêneya taybet |
| `alt_text` | string | Na | Nivîsa alt ku li attachmentê were sepandin ger ew ji URLyekê were importkirin |

Divê yek ji `attachment_id` an `url` were peyda kirin.

**Vedigerîne** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Bi plugin a formê ya çalak formek têkilî çêdike (Contact Form 7, WPForms, Fluent Forms, an Gravity Forms, li gorî ya ku sazkirî ye). Shortcodeyek vedigerîne ku dikare di her post an rûpelekê de were bicihkirin.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Erê | Navê formê ku di rêveberiya plugin-a formê de tê nîşandan |
| `fields` | array | Erê | Lîsteya rêzkirî ya zeviyên formê (li jêr li heybera Field binêre) |
| `recipient` | string | Na | Navnîşana Emailê ji bo wergirtina şandinê. Wekî standard Email-a rêveberê WordPress tê bikaranîn |
| `subject` | string | Na | Rêzika mijara Emailê. Dema Contact Form 7 tê bikaranîn, piştgirî dide cihgirên `[your-name]` û `[your-subject]` |
| `confirmation_message` | string | Na | Peyama ku piştî şandineke serkeftî tê nîşandan. Standard: `"Thank you for your message. We'll be in touch soon."` |

**Heybera Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Erê | Navê hundirîn ê zeviyê / kilîta makîneyê |
| `label` | string | Erê | Etîketa ji hêla mirovan ve tê fêmkirin ku li ser formê tê nîşandan |
| `type` | string | Erê | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Na | Gelo divê zevî berî şandinê were tijîkirin an na. Standard `false` |
| `options` | array | Na | Vebijarkên ji bo zeviyên `select`, `checkbox` û `radio` |
| `placeholder` | string | Na | Nivîsa placeholder ji bo têketinên cureya text |

**Mînak**

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

**Vedigere**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Nirxandina Dîtbarî {#visual-review}

Şiyanên Nirxandina Dîtbarî dihêlin agent wêneyên ekranê yên rûpelên zindî bigire û wan analîz bike; ev nirxandina sêwiranê ya xweser, berhevkirinên berî/piştî, û kontrolên vegera dîtbarî bêyî hewcedariya ti browser extensionê gengaz dike.

### `capture_screenshot` {#capturescreenshot}

Wêneyekî ekranê ya rûpelek WordPress li URL-yekî diyar bi browser-ekî bê-ser ê aliyê serverê digire. Wêne di Media Library de tê tomarkirin û URL-yekî CDN tê vegerandin.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Erê | URL-ya temam a rûpela ku wêneyê ekranê jê bê girtin, mînak `https://example.com/about/` |
| `width` | integer | Na | Firehiya viewportê bi pixelan. Standard `1280` |
| `height` | integer | Na | Bilindahiya viewportê bi pixelan. Standard `800` |
| `full_page` | boolean | Na | Li şûna tenê viewportê, hemû rûpela ku dikare were scrollkirin bigire. Standard `false` |
| `delay_ms` | integer | Na | Hejmara milliseconds ji bo rawestanê piştî barkirina rûpelê berî girtinê; ji bo naveroka animated bi kêr tê. Standard `500` |
| `label` | string | Na | Etîketa ji hêla mirovan ve tê fêmkirin ku bi pêvekê re di Media Library de tê tomarkirin |

**Vedigere**

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

Du wêneyên ekranê digire û pileya cudahiya dîtbarî bi wêneyekî diffê re vedigerîne ku deverên guhertî destnîşan dike. Ji bo piştrastkirina ku guhertineke sêwiranê encama tê hêvîkirin daye an ji bo dîtina vegerên nexwestî bi kêr tê.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Erê | URL-ya rûpelê ku wekî rewşa "berî" bê girtin |
| `after_url` | string | Erê | URL-ya rûpelê ku wekî rewşa "piştî" bê girtin. Ger di nav demê de tê berhevkirin, dikare heman URL be |
| `width` | integer | Na | Firehiya viewportê ji bo her du girtinan. Standard `1280` |
| `threshold` | float | Na | Sînorê cudahiya pixelê (0.0–1.0). Pixelên di hundirê vê toleransê de wekî neguhertî tên hesibandin. Standard `0.1` |

**Vedigere**

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

`diff_score`-a `0.0` tê wateya ku ti guhertina xuya tune; `1.0` tê wateya ku her pixel guhertiye.

---

### `review_page_design` {#reviewpagedesign}

Wêneyekî ekranê ya rûpelekê digire û ji bo analîza dîtbarî dişîne modela zimanî. Nirxandineke avakirî vedigerîne ku layout, typography, bikaranîna rengan û xemên accessibility digire nav xwe.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Erê | URL-ya temam a rûpela ku were nirxandin |
| `focus` | string | Na | Lîsteya bi comma veqetandî ya qadên nirxandinê ku divê giranî li ser wan be: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standard: hemû qad |
| `width` | integer | Na | Firehiya viewportê. Standard `1280` |

**Vedigere**

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

## Şiyanên Dikarin Werin Sazkirin {#installable-abilities}

Registry-a Şiyanên Dikarin Werin Sazkirin dihêle tu agent bi pakêtên şiyanê yên din fireh bikî ku wekî pluginên WordPress tên belavkirin. Her pakêt bi karanîna ability API-ya standard yek an çend şiyan tomar dike.

### `list_available_abilities` {#listavailableabilities}

Katalogê pakêtên şiyanê yên ji bo sazkirinê ji registry vedigerîne.

**Parametre**

| Parametre | Cure | Pêwîst | Şirove |
|---|---|---|---|
| `category` | string | Na | Li gorî kategoriyê parzûn bike: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Vedigerîne**

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

Pakê qabiliyetê ji qeydgehê dadixe û çalak dike.

**Parametre**

| Parametre | Cure | Pêwîst | Şirove |
|---|---|---|---|
| `slug` | string | Erê | slug-a pêveka pakê qabiliyetê |

**Vedigerîne** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Qeydgeha qabiliyetan dipirse da ku ji bo rewşeke bikaranînê ya şirovekirî pêveka herî baş bibîne û, bi daxwazê, wê saz bike.

**Parametre**

| Parametre | Cure | Pêwîst | Şirove |
|---|---|---|---|
| `description` | string | Erê | Şiroveya bi zimanê xwezayî ya fonksiyona tê xwestin |
| `install` | boolean | Na | Ger `true` be, pêveka pêşniyarkirî yekser saz dike. Standard `false` |

**Mînak**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Vedigerîne**

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
