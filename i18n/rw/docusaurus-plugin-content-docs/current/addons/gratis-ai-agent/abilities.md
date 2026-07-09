---
title: Igitabo cyifashishwa cy’Ubushobozi
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Igitabo cy'Ubushobozi

Ubushobozi ni ibikorwa fatizo Gratis AI Agent ishobora gukoresha ku ishyirwaho ryawe rya WordPress. Buri bushobozi ni PHP class yanditswe igaragaza JSON schema — agent isoma iyi schema mu gihe cyo gukora kugira ngo yumve parameter zisabwa n'ibyo ubushobozi bugarura.

Uru rupapuro rusobanura ubushobozi bwose buzanwa na Gratis AI Agent v1.9.0.

---

## Ubwoko bw'Inyandiko Bwihariye

Ubu bushobozi bucunga ubwoko bw'inyandiko bwihariye (CPTs) bwanditswe binyuze muri agent. Iyandikwa ribikwa muri table ya options ya WordPress kugira ngo rikomeze kubaho n'iyo plugin ihagaritswe ikongera igakoreshwa.

### `register_post_type`

Yandika ubwoko bushya bw'inyandiko bwihariye.

**Parameter**

| Parameter | Ubwoko | Bisabwa | Ibisobanuro |
|---|---|---|---|
| `slug` | string | Yego | Urufunguzo rw'ubwoko bw'inyandiko (inyuguti ntarengwa 20, nta nyuguti nkuru, nta myanya) |
| `singular_label` | string | Yego | Izina rimwe risomeka n'umuntu, urugero `Portfolio Item` |
| `plural_label` | string | Yego | Izina ry'ubwinshi risomeka n'umuntu, urugero `Portfolio Items` |
| `public` | boolean | Oya | Niba ubwoko bw'inyandiko bushobora kugerwaho na rubanda. Mburabuzi `true` |
| `supports` | array | Oya | Ibiranga byo gushyigikira: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Mburabuzi `["title","editor"]` |
| `has_archive` | boolean | Oya | Niba paji y'ububiko bw'ubwoko bw'inyandiko ikora. Mburabuzi `false` |
| `menu_icon` | string | Oya | Dashicons class cyangwa URL y'agashushondanga ka menu y'ubuyobozi. Mburabuzi `"dashicons-admin-post"` |
| `rewrite_slug` | string | Oya | URL slug y'ubwoko bw'inyandiko. Mburabuzi ni `slug` |

**Urugero**

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

**Igarura** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Igarura ubwoko bwose bw'inyandiko bwihariye bwanditswe na agent.

**Parameter** — nta zo

**Igarura**

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

Ihanagura iyandikwa ry'ubwoko bw'inyandiko bwihariye bwari bwaranditswe na agent. Inyandiko zisanzwe z'ubwo bwoko ziguma muri database ariko ntiziba zikigerwaho binyuze muri ubwo bwoko bw'inyandiko.

**Parameter**

| Parameter | Ubwoko | Bisabwa | Ibisobanuro |
|---|---|---|---|
| `slug` | string | Yego | Urufunguzo rw'ubwoko bw'inyandiko rwo gukuraho |

**Igarura** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomy Zihariye

Ubu bushobozi bucunga taxonomy zihariye. Kimwe na CPTs, iyandikwa rya taxonomy rirabikwa.

### `register_taxonomy`

Yandika taxonomy nshya yihariye.

**Parameter**

| Parameter | Ubwoko | Bisabwa | Ibisobanuro |
|---|---|---|---|
| `slug` | string | Yego | Urufunguzo rwa taxonomy (inyuguti ntarengwa 32) |
| `singular_label` | string | Yego | Izina rimwe risomeka n'umuntu, urugero `Project Category` |
| `plural_label` | string | Yego | Izina ry'ubwinshi risomeka n'umuntu, urugero `Project Categories` |
| `post_types` | array | Yego | Post type slugs iyi taxonomy igomba komekwaho |
| `hierarchical` | boolean | Oya | `true` ku buryo bumeze nk'icyiciro, `false` ku buryo bumeze nka tag. Mburabuzi `true` |
| `public` | boolean | Oya | Niba terms zishobora kugerwaho na rubanda. Mburabuzi `true` |
| `rewrite_slug` | string | Oya | URL slug ya taxonomy. Mburabuzi ni `slug` |

**Urugero**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Igarura** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Igarura taxonomy zose zihariye zanditswe na agent.

**Parameter** — nta zo

**Igarura**

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

Ihanagura iyandikwa rya taxonomy yihariye yari yaranditswe na agent.

**Parameter**

| Parameter | Ubwoko | Bisabwa | Ibisobanuro |
|---|---|---|---|
| `slug` | string | Yego | Urufunguzo rwa taxonomy rwo gukuraho |

**Igarura** `{ "success": true, "slug": "project-category" }`

---

## Sisitemu y'Igishushanyo

Ubushobozi bwa sisitemu y'igishushanyo buhindura uko site ya WordPress igaragara — kuva kuri CSS yihariye kugeza kuri block patterns na logo ya site.

### `inject_custom_css`

Yongeraho CSS muri `<head>` ya site binyuze muri `wp_add_inline_style`. CSS ibikwa muri option ya `gratis_ai_agent_custom_css` kandi ikavanwaho neza igihe ubushobozi busubijwe ku ntangiriro.

**Parameter**

| Parameter | Ubwoko | Bisabwa | Ibisobanuro |
|---|---|---|---|
| `css` | string | Yego | CSS yemewe yo kwinjiza |
| `label` | string | Oya | Label isomeka n'umuntu y'iyi block ya CSS, ikoreshwa muri debug logs. Mburabuzi `"agent-injected"` |
| `replace` | boolean | Oya | Niba ari `true`, isimbura CSS yose yari yarinjijwe mbere. Mburabuzi `false` (yongeraho) |

**Urugero**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Igarura** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Yandika block pattern ishobora kongera gukoreshwa muri pattern library ya WordPress.

**Parameter**

| Parameter | Ubwoko | Bisabwa | Ibisobanuro |
|---|---|---|---|
| `slug` | string | Yego | Ikiranga pattern, urugero `gratis/hero-dark` |
| `title` | string | Yego | Izina rya pattern risomeka n'umuntu rigaragara muri editor |
| `content` | string | Yego | Markup ya block yashyizwe mu buryo bwa serialised (HTML) ya pattern |
| `categories` | array | Oya | Pattern category slugs, urugero `["featured", "hero"]` |
| `description` | string | Oya | Ibisobanuro bigufi bigaragara muri pattern picker |
| `keywords` | array | Oya | Amagambo y'ingenzi yo gushakisha |

**Igarura** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Itondeka block patterns zose zanditswe na agent.

**Parameter** — nta zo

**Ibisubizwa**

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

Ishyiraho logo y’urubuga rwa WordPress ikoresheje ID y’umugereka watanzwe cyangwa URL y’ishusho iri kure. Iyo URL itanzwe, ishusho irakururwa ikinjizwa muri Media Library.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `attachment_id` | integer | Oya | ID y’umugereka usanzwe uri muri Media Library |
| `url` | string | Oya | URL y’ishusho iri kure yo kwinjiza no gushyiraho nka logo |

Kimwe muri `attachment_id` cyangwa `url` kigomba gutangwa.

**Ibisubizwa** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Ikoresha preset y’amabara/imyandikire ifite izina kuri `theme.json` ya theme iri gukoreshwa (cyangwa `global-styles`). Presets ni amapaki yatoranyijwe kandi acungwa n’itsinda rya Gratis AI Agent.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `preset` | string | Yego | Izina rya preset, urugero `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Oya | Niba ari `true`, bihuze n’indangagaciro zisanzwe aho kuzisimbuza. Mburabuzi ni `false` |

**Presets ziboneka**

| Preset | Ibisobanuro |
|---|---|
| `minimal-dark` | Imbuganyuma yenda kuba umukara, inyandiko yera, ibara rimwe rishimangira |
| `warm-editorial` | Imbuganyuma yera ivanze n’ubushyuhe, imitwe ya serif, amabara ashimangira asa n’ay’ubutaka |
| `corporate-blue` | Urusobe rw’amabara ya navy n’umweru rufite imyandikire y’umwuga |
| `vibrant-startup` | Gradients zigaragara cyane, inguni zizunguruka, ubwoko bw’inyuguti bwa sans-serif bugezweho |
| `classic-blog` | Imvi ziciriritse, uburebure bw’imirongo bunogeye gusoma, intera y’imiterere gakondo |

**Ibisubizwa** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Ubushobozi bwa Global Styles busoma kandi bukandika indangagaciro za theme.json binyuze muri WordPress Global Styles API, bikagira ingaruka kuri blocks na templates byose ku rubuga rwose.

### `get_global_styles`

Isubiza igenamiterere rya global styles ririho ubu.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `path` | string | Oya | JSON pointer igana ku ndangagaciro runaka, urugero `/color/palette` cyangwa `/typography/fontSizes`. Isubiza object yose iyo itatanzwe. |

**Ibisubizwa** object yuzuye ya global styles cyangwa indangagaciro iri kuri `path`.

---

### `set_global_styles`

Ivugurura indangagaciro imwe cyangwa nyinshi mu igenamiterere rya global styles.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `path` | string | Yego | JSON pointer igana ku ndangagaciro yo gushyiraho, urugero `/color/palette` |
| `value` | any | Yego | Indangagaciro nshya |

**Urugero** — ongera ibara muri palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Ibisubizwa** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Isubizaho impinduka zose za global styles zashyizweho na agent, igasubiza defaults za theme.

**Ibipimo** — nta na kimwe

**Ibisubizwa** `{ "success": true }`

---

## Menus z’Inzira z’Urubuga

Ubushobozi bwa Navigation Menu burema kandi bugacunga menus za nav za WordPress n’ibintu byazo.

### `create_menu`

Irema menu nshya y’inzira z’urubuga ya WordPress.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `name` | string | Yego | Izina rya menu, urugero `Primary Navigation` |
| `location` | string | Oya | Ahantu muri theme ho guha iyi menu, urugero `primary` |

**Ibisubizwa** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Ihindura izina rya menu cyangwa ikongera kuyohereza ku hantu muri theme.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `menu_id` | integer | Yego | ID ya menu yo kuvugurura |
| `name` | string | Oya | Izina rishya rya menu |
| `location` | string | Oya | Ahantu muri theme ho guha cyangwa kongera guha menu |

**Ibisubizwa** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Yongeramo ikintu muri menu y’inzira z’urubuga isanzwe ihari.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `menu_id` | integer | Yego | ID ya menu igamijwe |
| `type` | string | Yego | Ubwoko bw’ikintu: `custom`, `post_type`, cyangwa `taxonomy` |
| `title` | string | Oya | Akarango k’ikintu cya menu (gakenewe ku bwoko bwa `custom`) |
| `url` | string | Oya | URL y’ibintu bya `custom` |
| `object_id` | integer | Oya | ID ya post cyangwa ID ya term ku bintu bya `post_type`/`taxonomy` |
| `parent_id` | integer | Oya | ID y’ikintu cya menu cyo gushyira iki kintu munsi yacyo |
| `position` | integer | Oya | Umwanya muri menu ubarwa uhereye kuri zeru |

**Ibisubizwa** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Ikuraho ikintu muri menu y’inzira z’urubuga.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `item_id` | integer | Yego | ID y’ikintu cya menu cyo gukuraho |

**Ibisubizwa** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Itondeka menus zose z’inzira z’urubuga za WordPress, harimo n’aho zahawe muri theme.

**Ibipimo** — nta na kimwe

**Ibisubizwa**

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

## Gucunga Options

Ubushobozi bwa Options busoma kandi bukandika options za WordPress binyuze muri `get_option` / `update_option`. Blocklist y’umutekano yubatswemo ibuza guhindura igenamiterere rikomeye ku bw’impanuka.

### `get_option`

Isoma option ya WordPress.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `option_name` | string | Yego | Urufunguzo rwa option, urugero `blogname` |

**Ibisubizwa** `{ "option_name": "blogname", "value": "My Site" }`

Isubiza ikosa niba `option_name` iri kuri blocklist y’umutekano.

---

### `set_option`

Yandika option ya WordPress.

**Ibipimo**

| Ikipimo | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `option_name` | string | Yego | Urufunguzo rwa option |
| `value` | any | Yego | Indangagaciro nshya (ihindurwa serialised mu buryo bwikora ku arrays/objects) |
| `autoload` | string | Oya | `"yes"` cyangwa `"no"`. Mburabuzi igumana igenamiterere rya autoload risanzwe |

Isubiza ikosa niba `option_name` iri kuri safety blocklist.

**Isubiza** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Isiba option ya WordPress.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Urufunguzo rwa option rwo gusiba |

Isubiza ikosa niba `option_name` iri kuri safety blocklist.

**Isubiza** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Itondeka options za WordPress zihura n'icyitegererezo.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Icyitegererezo cya SQL LIKE cyo kuyungurura amazina ya option, urugero `gratis_%`. Isubiza options zose niba kitashyizwemo (koresha witonze kuri databases nini). |
| `limit` | integer | No | Umubare ntarengwa w'ibisubizo. Mburabuzi `50`, ntarengwa `500` |

**Isubiza**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gucunga Ibirimo

Ubushobozi bwo Gucunga Ibirimo bukora kandi bugahindura posts na pages za WordPress. Post IDs zisubizwa kugira ngo intambwe zikurikiraho muri plans z'ubushobozi bwinshi zishobore kwifashisha ibirimo byakozwe.

### `create_post`

Ikora post nshya ya WordPress, page, cyangwa inyandiko ya custom post type.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Umutwe wa post |
| `content` | string | No | Umubiri wa post — yemera inyandiko isanzwe, HTML, cyangwa block markup yashyizwe muri serialised |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Mburabuzi `draft` |
| `post_type` | string | No | Slug ya post type, urugero `post`, `page`, cyangwa CPT iyo ari yo yose yanditswe. Mburabuzi `post` |
| `excerpt` | string | No | Incamake ngufi igaragara muri archives no mu bisubizo by'ishakisha |
| `categories` | array | No | Array y'amazina ya categories cyangwa IDs zo kugenera |
| `tags` | array | No | Array y'amazina ya tags cyangwa IDs zo kugenera |
| `author` | integer | No | WordPress user ID yo gushyiraho nk'umwanditsi wa post. Mburabuzi ni user uriho ubu |
| `date` | string | No | Itariki yo gutangaza mu miterere ya ISO 8601, urugero `2026-05-01T09:00:00` |
| `page_template` | string | No | Dosiye ya template yo kugenera iyi post cyangwa page, urugero `page-full-width.php`. Bigira umumaro gusa iyo `post_type` ari `page` cyangwa CPT ishyigikira page templates. |

**Urugero**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Isubiza** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Ivugurura post cyangwa page ya WordPress isanzweho.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ya post yo kuvugurura |
| `title` | string | No | Umutwe mushya wa post |
| `content` | string | No | Umubiri mushya wa post |
| `status` | string | No | Status nshya: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Excerpt nshya |
| `categories` | array | No | Simbuza urutonde rwose rwa categories iyi array y'amazina cyangwa IDs |
| `tags` | array | No | Simbuza urutonde rwose rwa tags iyi array y'amazina cyangwa IDs |
| `page_template` | string | No | Dosiye nshya ya template yo kugenera iyi post cyangwa page, urugero `page-full-width.php`. Tanga string irimo ubusa kugira ngo ukureho igenerwa rya template maze usubire kuri mburabuzi ya theme. |

**Urugero** — hindura template nyuma yo gukora

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Isubiza** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Ikora posts nyinshi mu guhamagara ubushobozi rimwe, bikagabanya ingendo zo gusubira no kugaruka mu gihe cyo kubaka site cyangwa kwinjiza ibirimo byinshi. Posts zikorwa zikurikiranye; niba imwe inaniwe izindi zirakomeza kandi kunanirwa bikamenyeshwa muri array y'ibisubizo.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array y'ibintu bya post, buri kimwe cyemera ibipimo bimwe na `create_post` |
| `stop_on_error` | boolean | No | Niba ari `true`, hagarika gutunganya nyuma yo kunanirwa kwa mbere. Mburabuzi `false` |

**Urugero**

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

**Isubiza**

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

Igenera featured image (post thumbnail) post cyangwa page isanzweho. Yemera attachment ID isanzweho muri Media Library cyangwa URL y'ishusho iri kure; iyo URL itanzwe, ishusho irakururwa ikinjizwa mu buryo bwikora.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ya post cyangwa page yo kuvugurura |
| `attachment_id` | integer | No | ID ya attachment isanzweho muri Media Library |
| `url` | string | No | URL y'ishusho iri kure yo kwinjiza no kuyishyiraho nka featured image |
| `alt_text` | string | No | Alt text yo gushyira kuri attachment niba yinjiwe ivuye kuri URL |

Kimwe muri `attachment_id` cyangwa `url` kigomba gutangwa.

**Isubiza** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Ikora contact form ikoresheje plugin ya form ikora (Contact Form 7, WPForms, Fluent Forms, cyangwa Gravity Forms, bitewe n'iyashyizwemo). Isubiza shortcode ishobora gushyirwa muri post cyangwa page iyo ari yo yose.

**Ibipimo**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Izina rya form rigaragara muri admin ya plugin ya form |
| `fields` | array | Yes | Urutonde rutondetse rwa fields za form (reba ikintu cya Field hepfo) |
| `recipient` | string | No | Aderesi ya email izakira ibyoherejwe. Mburabuzi ni email ya admin wa WordPress |
| `subject` | string | No | Umurongo w’insanganyamatsiko ya email. Ishyigikira placeholders `[your-name]` na `[your-subject]` iyo ukoresha Contact Form 7 |
| `confirmation_message` | string | No | Ubutumwa bugaragara nyuma yo kohereza byagenze neza. Mburabuzi: `"Thank you for your message. We'll be in touch soon."` |

**Ikintu cya Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Izina ry’imbere rya field / urufunguzo rwa mashini |
| `label` | string | Yes | Ikimenyetso gisomwa n’abantu kigaragara kuri form |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Niba field igomba kuzuzwa mbere yo kohereza. Mburabuzi `false` |
| `options` | array | No | Amahitamo ya fields za `select`, `checkbox`, na `radio` |
| `placeholder` | string | No | Inyandiko ya placeholder ku byinjizwa byo mu bwoko bw’inyandiko |

**Urugero**

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

**Ibisubizwa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Isuzuma ry’Amashusho

Ubushobozi bwa Isuzuma ry’Amashusho butuma agent ifata amashusho ya paji ziri live ikanayasesengura, bigafasha isuzuma ry’igishushanyo ryikora, kugereranya mbere/nyuma, n’igenzura ry’isubira inyuma rishingiye ku mashusho nta kwaka browser extension iyo ari yo yose.

### `capture_screenshot`

Ifata screenshot ya paji ya WordPress kuri URL yatanzwe ikoresheje browser idafite umutwe ku ruhande rwa server. Ishusho ibikwa muri Media Library hanyuma URL ya CDN igasubizwa.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL yuzuye ya paji yo gufatirwa screenshot, urugero `https://example.com/about/` |
| `width` | integer | No | Ubugari bwa viewport muri pixels. Mburabuzi `1280` |
| `height` | integer | No | Uburebure bwa viewport muri pixels. Mburabuzi `800` |
| `full_page` | boolean | No | Fata paji yose ishobora kumanurwa aho gufata viewport gusa. Mburabuzi `false` |
| `delay_ms` | integer | No | Milliseconds zo gutegereza nyuma y’uko paji imaze kwikorera mbere yo gufata, bifasha ku bikubiyemo bifite animations. Mburabuzi `500` |
| `label` | string | No | Ikimenyetso gisomwa n’abantu kibikwa hamwe n’umugereka muri Media Library |

**Ibisubizwa**

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

Ifata screenshots ebyiri igasubiza igipimo cya visual diff hamwe n’ishusho ya diff igaragaza ahahindutse. Bifasha kwemeza ko ihinduka ry’igishushanyo ryatanze igisubizo cyari gitegerejwe cyangwa gutahura regressions zitateganyijwe.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL ya paji yo gufata nk’imimerere ya "mbere" |
| `after_url` | string | Yes | URL ya paji yo gufata nk’imimerere ya "nyuma". Ishobora kuba URL imwe niba ugereranya mu bihe bitandukanye |
| `width` | integer | No | Ubugari bwa viewport ku mafaturo yombi. Mburabuzi `1280` |
| `threshold` | float | No | Urwego ntarengwa rw’itandukaniro rya pixel (0.0–1.0). Pixels ziri muri uku kwihanganira zifatwa nk’izitahindutse. Mburabuzi `0.1` |

**Ibisubizwa**

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

`diff_score` ya `0.0` bisobanura nta mpinduka igaragara; `1.0` bisobanura buri pixel yahindutse.

---

### `review_page_design`

Ifata screenshot ya paji ikayohereza kuri language model kugira ngo isesengurwe mu buryo bw’amashusho. Isubiza isuzuma rifite imiterere rikubiyemo layout, typography, ikoreshwa ry’amabara, n’ibibazo by’accessibility.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL yuzuye ya paji yo gusuzuma |
| `focus` | string | No | Urutonde rutandukanijwe na koma rw’ibice by’isuzuma byo gushimangira: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Mburabuzi: ibice byose |
| `width` | integer | No | Ubugari bwa viewport. Mburabuzi `1280` |

**Ibisubizwa**

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

## Ubushobozi Bushyirwamo

Installable Abilities Registry igufasha kwagura agent ukoresheje amapaki y’ubushobozi y’inyongera akwirakwizwa nka WordPress plugins. Buri paki yandikisha ubushobozi bumwe cyangwa bwinshi ikoresheje ability API isanzwe.

### `list_available_abilities`

Isubiza katalogu y’amapaki y’ubushobozi aboneka yo gushyirwamo avuye muri registry.

**Parameters**

| Ikigenderwaho | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `category` | string | Oya | Yungurura ukurikije category: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ibisubizwa**

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

Ikurura kandi igakora paketi y'ubushobozi ivuye mu bubiko.

**Ibipimo**

| Ikigenderwaho | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `slug` | string | Yego | slug y'umugereka wa paketi y'ubushobozi |

**Ibisubizwa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ibaza ububiko bw'ubushobozi kugira ngo ibone umugereka mwiza cyane ku buryo bwo gukoresha bwasobanuwe, kandi, ku bushake, ikawushyiraho.

**Ibipimo**

| Ikigenderwaho | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `description` | string | Yego | Ibisobanuro mu mvugo isanzwe by'imikorere yifuzwa |
| `install` | boolean | Oya | Niba ari `true`, ishyiraho umugereka wasabwe ako kanya. Mburabuzi ni `false` |

**Urugero**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Ibisubizwa**

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
