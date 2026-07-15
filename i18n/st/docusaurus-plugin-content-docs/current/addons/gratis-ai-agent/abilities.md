---
title: Tšupiso ea Bokhoni
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Tshupiso ya Bokgoni

Bokgoni ke diketso tsa motheo tseo Gratis AI Agent e ka di bitsang ho kenyo ya hao ya WordPress. Bokgoni bo bong le bo bong ke class ya PHP e ngodisitsweng e hlahisang JSON schema — moemedi o bala schema ena ka nako ya tshebetso ho utlwisisa hore na ke diparamethara dife tse hlokahalang le hore na bokgoni bo kgutlisa eng.

Leqephe lena le ngola bokgoni bohle bo tlang le Gratis AI Agent v1.9.0.

---

## Mefuta ya Diposo e Ikgethileng {#custom-post-types}

Bokgoni bona bo laola mefuta ya diposo e ikgethileng (CPTs) e ngodisitsweng ka moemedi. Dingodiso di bolokwa tafoleng ya dikgetho tsa WordPress hore di kgone ho phela kamora ho tima le ho bulela plugin hape.

### `register_post_type` {#registerposttype}

E ngodisa mofuta o motjha wa poso e ikgethileng.

**Diparamethara**

| Paramethara | Mofuta | Ya hlokahala | Tlhaloso |
|---|---|---|---|
| `slug` | string | Ee | Senotlolo sa mofuta wa poso (bonyane ditlhaku tse 20, ha ho ditlhaku tse kgolo, ha ho dikgeo) |
| `singular_label` | string | Ee | Lebitso la bonngwe le balwang ke batho, mohl. `Portfolio Item` |
| `plural_label` | string | Ee | Lebitso la bongata le balwang ke batho, mohl. `Portfolio Items` |
| `public` | boolean | Tjhe | Hore na mofuta wa poso o fihlelleha phatlalatsa. Default `true` |
| `supports` | array | Tjhe | Dikarolo tse lokelang ho tshehetswa: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | Tjhe | Hore na leqephe la polokelo ya mofuta wa poso le dumelletswe. Default `false` |
| `menu_icon` | string | Tjhe | Class ya Dashicons kapa URL bakeng sa letshwao la menu ya admin. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | Tjhe | URL slug bakeng sa mofuta wa poso. E ba `slug` ka default |

**Mohlala**

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

**E kgutlisa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

E kgutlisa mefuta yohle ya diposo e ikgethileng e ngodisitsweng ke moemedi.

**Diparamethara** — ha ho letho

**E kgutlisa**

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

E hlakola ngodiso ya mofuta wa poso e ikgethileng o neng o ngodisitswe ke moemedi. Diposo tse teng tsa mofuta oo di sala database empa ha di sa fihlelleha ka mofuta wa poso.

**Diparamethara**

| Paramethara | Mofuta | Ya hlokahala | Tlhaloso |
|---|---|---|---|
| `slug` | string | Ee | Senotlolo sa mofuta wa poso se lokelang ho tloswa |

**E kgutlisa** `{ "success": true, "slug": "portfolio" }`

---

## Ditaxonomy tse Ikgethileng {#custom-taxonomies}

Bokgoni bona bo laola ditaxonomy tse ikgethileng. Jwalo ka CPTs, dingodiso tsa taxonomy di bolokwa.

### `register_taxonomy` {#registertaxonomy}

E ngodisa taxonomy e ntjha e ikgethileng.

**Diparamethara**

| Paramethara | Mofuta | Ya hlokahala | Tlhaloso |
|---|---|---|---|
| `slug` | string | Ee | Senotlolo sa taxonomy (bonyane ditlhaku tse 32) |
| `singular_label` | string | Ee | Lebitso la bonngwe le balwang ke batho, mohl. `Project Category` |
| `plural_label` | string | Ee | Lebitso la bongata le balwang ke batho, mohl. `Project Categories` |
| `post_types` | array | Ee | Di-slug tsa mefuta ya diposo tseo taxonomy ena e lokelang ho hokelwa ho tsona |
| `hierarchical` | boolean | Tjhe | `true` bakeng sa setaele sa category, `false` bakeng sa setaele sa tag. Default `true` |
| `public` | boolean | Tjhe | Hore na terms di fihlelleha phatlalatsa. Default `true` |
| `rewrite_slug` | string | Tjhe | URL slug bakeng sa taxonomy. E ba `slug` ka default |

**Mohlala**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**E kgutlisa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

E kgutlisa ditaxonomy tsohle tse ikgethileng tse ngodisitsweng ke moemedi.

**Diparamethara** — ha ho letho

**E kgutlisa**

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

E hlakola ngodiso ya taxonomy e ikgethileng e neng e ngodisitswe ke moemedi.

**Diparamethara**

| Paramethara | Mofuta | Ya hlokahala | Tlhaloso |
|---|---|---|---|
| `slug` | string | Ee | Senotlolo sa taxonomy se lokelang ho tloswa |

**E kgutlisa** `{ "success": true, "slug": "project-category" }`

---

## Sistimi ya Moralo {#design-system}

Bokgoni ba sistimi ya moralo bo fetola ponahalo ya sebaka sa WordPress — ho tloha ho CSS e ikgethileng ho ya ho dipaterone tsa block le logo ya sebaka.

### `inject_custom_css` {#injectcustomcss}

E kenya CSS qetellong ya `<head>` ya sebaka ka `wp_add_inline_style`. CSS e bolokwa kgethong ya `gratis_ai_agent_custom_css` mme e tloswa moleng ka hlweko ha bokgoni bo resetwa.

**Diparamethara**

| Paramethara | Mofuta | Ya hlokahala | Tlhaloso |
|---|---|---|---|
| `css` | string | Ee | CSS e nepahetseng e lokelang ho kenngwa |
| `label` | string | Tjhe | Leibole le balwang ke batho bakeng sa block ena ya CSS, le sebediswang ho debug logs. Default `"agent-injected"` |
| `replace` | boolean | Tjhe | Haeba `true`, e nkela CSS yohle e kileng ya kenngwa pele sebaka. Default `false` (e eketsa qetellong) |

**Mohlala**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**E kgutlisa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

E ngodisa paterone ya block e ka sebediswang hape laeboraring ya dipaterone ya WordPress.

**Diparamethara**

| Paramethara | Mofuta | Ya hlokahala | Tlhaloso |
|---|---|---|---|
| `slug` | string | Ee | Seitsebahatsi sa paterone, mohl. `gratis/hero-dark` |
| `title` | string | Ee | Lebitso la paterone le balwang ke batho le bontshwang ho editor |
| `content` | string | Ee | Markup ya block e serialised (HTML) bakeng sa paterone |
| `categories` | array | Tjhe | Di-slug tsa category ya paterone, mohl. `["featured", "hero"]` |
| `description` | string | Tjhe | Tlhaloso e kgutshwane e bontshwang ho picker ya paterone |
| `keywords` | array | Tjhe | Mantswe a sehlooho a ho batla |

**E kgutlisa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

E thathamisa dipaterone tsohle tsa block tse ngodisitsweng ke moemedi.

**Diparamethara** — ha ho letho

**E kgutlisa**

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

E seta logo ya saete ya WordPress ho attachment ID e fanoeng kapa URL ya setshwantsho se hole. Ha ho fanoa ka URL, setshwantsho se jarollwa mme se kenngwa ho Media Library.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `attachment_id` | integer | Che | ID ya attachment e seng e le teng ya Media Library |
| `url` | string | Che | URL ya setshwantsho se hole se lokelang ho kenngwa le ho setwa e le logo |

E nngwe ya `attachment_id` kapa `url` e tlameha ho fanwa.

**E kgutlisa** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

E kenya preset e bitswang ya mmala/typography ho `theme.json` ya sehlooho se sebetsang (kapa `global-styles`). Di-preset ke di-bundle tse hlophisitsweng tse hlokomelwang ke sehlopha sa Gratis AI Agent.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `preset` | string | E | Lebitso la preset, mohl. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Che | Haeba e le `true`, kopanya le boleng bo seng bo le teng ho ena le ho bo nkela sebaka. Ya kamehla ke `false` |

**Di-preset tse fumanehang**

| Preset | Tlhaloso |
|---|---|
| `minimal-dark` | Bokamorao bo batlang bo le botsho, mongolo o mosweu, mmala o le mong wa kgatiso |
| `warm-editorial` | Bokamorao bo mofuthu bo batlang bo le bosweu, dihlooho tsa serif, mebala ya kgatiso ya lefatshe |
| `corporate-blue` | Palette ya navy le bosweu e nang le typography ya botsebi |
| `vibrant-startup` | Di-gradient tse kganyang, dikgutlo tse kgolokwe, mofuta wa sejoale-joale wa sans-serif |
| `classic-blog` | Grey e sa nke lehlakore, line-height e phutholohileng, sebaka sa moralo wa setso |

**E kgutlisa** `{ "success": true, "preset": "minimal-dark" }`

---

## Ditaele tsa Lefatshe Lohle {#global-styles}

Bokgoni ba Ditaele tsa Lefatshe Lohle bo bala le ho ngola boleng ba theme.json ka WordPress Global Styles API, bo ama diboloko tsohle le di-template saeteng yohle.

### `get_global_styles` {#getglobalstyles}

E kgutlisa tlhophiso ya jwale ya ditaele tsa lefatshe lohle.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `path` | string | Che | JSON pointer ho boleng bo itseng, mohl. `/color/palette` kapa `/typography/fontSizes`. E kgutlisa object yohle haeba e tlohetswe. |

**E kgutlisa** object e feletseng ya ditaele tsa lefatshe lohle kapa boleng ho `path`.

---

### `set_global_styles` {#setglobalstyles}

E ntjhafatsa boleng bo le bong kapa bo bongata tlhophisong ya ditaele tsa lefatshe lohle.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `path` | string | E | JSON pointer ho boleng bo lokelang ho setwa, mohl. `/color/palette` |
| `value` | any | E | Boleng bo botjha |

**Mohlala** — eketsa mmala ho palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**E kgutlisa** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

E seta botjha diphetoho tsohle tsa ditaele tsa lefatshe lohle tse kentsweng ke agent, e kgutlisetsa tsa kamehla tsa sehlooho.

**Dipharaemitha** — ha ho letho

**E kgutlisa** `{ "success": true }`

---

## Dimenu tsa Navigation {#navigation-menus}

Bokgoni ba Navigation Menu bo bopa le ho laola dimenu tsa nav tsa WordPress le dintho tsa tsona.

### `create_menu` {#createmenu}

E bopa menu e ntjha ya navigation ya WordPress.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `name` | string | E | Lebitso la menu, mohl. `Primary Navigation` |
| `location` | string | Che | Sebaka sa sehlooho seo menu ena e lokelang ho abelwa sona, mohl. `primary` |

**E kgutlisa** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

E reha menu lebitso le letjha kapa e e abela hape sebakeng sa sehlooho.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `menu_id` | integer | E | ID ya menu e lokelang ho ntjhafatswa |
| `name` | string | Che | Lebitso le letjha la menu |
| `location` | string | Che | Sebaka sa sehlooho seo e lokelang ho abelwa kapa ho abelwa hape ho sona |

**E kgutlisa** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

E eketsa ntho ho menu ya navigation e seng e le teng.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `menu_id` | integer | E | ID ya menu e lebisitsweng |
| `type` | string | E | Mofuta wa ntho: `custom`, `post_type`, kapa `taxonomy` |
| `title` | string | Che | Label ya ntho ya menu (e hlokahala bakeng sa mofuta wa `custom`) |
| `url` | string | Che | URL ya dintho tsa `custom` |
| `object_id` | integer | Che | Post ID kapa term ID bakeng sa dintho tsa `post_type`/`taxonomy` |
| `parent_id` | integer | Che | ID ya ntho ya menu eo ntho ena e tla kenngwa ka tlasa yona |
| `position` | integer | Che | Boemo bo qalang ka zero ka hara menu |

**E kgutlisa** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

E tlosa ntho ho menu ya navigation.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `item_id` | integer | E | ID ya ntho ya menu e lokelang ho tloswa |

**E kgutlisa** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

E thathamisa dimenu tsohle tsa navigation tsa WordPress, ho kenyeletswa le dibaka tsa sehlooho tseo di abetsweng tsona.

**Dipharaemitha** — ha ho letho

**E kgutlisa**

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

## Taolo ya Dikgetho {#options-management}

Bokgoni ba dikgetho bo bala le ho ngola dikgetho tsa WordPress ka `get_option` / `update_option`. Blocklist ya polokeho e hahilweng kahare e thibela phetoho e sa etswang ka boomo ya disetting tsa bohlokwa.

### `get_option` {#getoption}

E bala kgetho ya WordPress.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `option_name` | string | E | Senotlolo sa kgetho, mohl. `blogname` |

**E kgutlisa** `{ "option_name": "blogname", "value": "My Site" }`

E kgutlisa phoso haeba `option_name` e le ho blocklist ya polokeho.

---

### `set_option` {#setoption}

E ngola kgetho ya WordPress.

**Dipharaemitha**

| Pharaemitha | Mofuta | A hlokahala | Tlhaloso |
|---|---|---|---|
| `option_name` | string | E | Senotlolo sa kgetho |
| `value` | any | E | Boleng bo botjha (bo serialised ka boiketsetso bakeng sa di-array/di-object) |
| `autoload` | string | Che | `"yes"` kapa `"no"`. Ya kamehla e boloka setting ya autoload e seng e le teng |

E khutlisa phoso haeba `option_name` e le lethathamong la thibelo la polokeho.

**E khutlisa** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

E hlakola khetho ea WordPress.

**Dipharamitha**

| Pharâmitha | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `option_name` | string | E | Senotlolo sa khetho se lokelang ho hlakoloa |

E khutlisa phoso haeba `option_name` e le lethathamong la thibelo la polokeho.

**E khutlisa** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

E thathamisa dikgetho tsa WordPress tse tsamaisanang le paterone.

**Dipharamitha**

| Pharâmitha | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `pattern` | string | Tjhe | Paterone ya SQL LIKE ho sefa mabitso a dikgetho, mohl. `gratis_%`. E khutlisa dikgetho tsohle haeba e siilwe (sebedisa ka tlhokomelo ho database tse kgolo). |
| `limit` | integer | Tjhe | Palo e phahameng ya diphetho. Ya kamehla ke `50`, e phahameng ke `500` |

**E khutlisa**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Taolo ya Dikahare {#content-management}

Bokgoni ba Taolo ya Dikahare bo bopa le ho hlophisa diposo le maqephe a WordPress. Di-ID tsa poso di khutliswa hore mehato e latelang mererong ya bokgoni bo bongata e ka supa dikahare tse bopilweng.

### `create_post` {#createpost}

E bopa poso e ntjha ya WordPress, leqephe, kapa kenyo ya mofuta wa poso o ikgethileng.

**Dipharamitha**

| Pharâmitha | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `title` | string | E | Sehlooho sa poso |
| `content` | string | Tjhe | Mmele wa poso — e amohela mongolo o tlwaelehileng, HTML, kapa markup ya block e serialised |
| `status` | string | Tjhe | `draft`, `publish`, `pending`, `private`. Ya kamehla ke `draft` |
| `post_type` | string | Tjhe | Slug ya mofuta wa poso, mohl. `post`, `page`, kapa CPT efe kapa efe e ngodisitsweng. Ya kamehla ke `post` |
| `excerpt` | string | Tjhe | Kakaretso e kgutshwane e bontshwang di-archive le diphethong tsa patlo |
| `categories` | array | Tjhe | Array ya mabitso a dikarolo kapa di-ID tse lokelang ho abelwa |
| `tags` | array | Tjhe | Array ya mabitso a ditag kapa di-ID tse lokelang ho abelwa |
| `author` | integer | Tjhe | ID ya mosebedisi wa WordPress ya ho behwa e le mongodi wa poso. Ya kamehla ke mosebedisi wa hajwale |
| `date` | string | Tjhe | Letsatsi la phatlalatso ka sebopeho sa ISO 8601, mohl. `2026-05-01T09:00:00` |
| `page_template` | string | Tjhe | Faele ya template e lokelang ho abelwa poso ena kapa leqephe lena, mohl. `page-full-width.php`. E na le moelelo feela ha `post_type` e le `page` kapa CPT e tshehetsang di-template tsa maqephe. |

**Mohlala**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**E khutlisa** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

E ntjhafatsa poso kapa leqephe la WordPress le seng le le teng.

**Dipharamitha**

| Pharâmitha | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `post_id` | integer | E | ID ya poso e lokelang ho ntjhafatswa |
| `title` | string | Tjhe | Sehlooho se setjha sa poso |
| `content` | string | Tjhe | Mmele o motjha wa poso |
| `status` | string | Tjhe | Boemo bo botjha: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Tjhe | Qotso e ntjha |
| `categories` | array | Tjhe | Kenya sebaka sa lenane lohle la dikarolo ka array ena ya mabitso kapa di-ID |
| `tags` | array | Tjhe | Kenya sebaka sa lenane lohle la ditag ka array ena ya mabitso kapa di-ID |
| `page_template` | string | Tjhe | Faele e ntjha ya template e lokelang ho abelwa poso ena kapa leqephe lena, mohl. `page-full-width.php`. Fetisa string e se nang letho ho tlosa kabelo ya template le ho kgutlela ho ya kamehla ya theme. |

**Mohlala** — fetola template kamora ho bopa

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**E khutlisa** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

E bopa diposo tse ngata pitsong e le nngwe ya bokgoni, e fokotsa maeto a ho ya le ho kgutla nakong ya ho haha site kapa ho kenya dikahare ka bongata. Diposo di bopuwa ka tatellano; haeba e nngwe e hloleha tse ding di tswela pele mme ho hloleha ho tlalehwa ho array ya diphetho.

**Dipharamitha**

| Pharâmitha | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `posts` | array | E | Array ya dintho tsa poso, e nngwe le e nngwe e amohelang dipharamitha tse tshwanang le `create_post` |
| `stop_on_error` | boolean | Tjhe | Haeba `true`, emisa ho sebetsa kamora ho hloleha ha pele. Ya kamehla ke `false` |

**Mohlala**

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

**E khutlisa**

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

E abela poso kapa leqephe le seng le le teng setshwantsho se hlahelletseng (thumbnail ya poso). E amohela ID ya sehokelo sa Media Library se seng se le teng kapa URL ya setshwantsho se hole; ha URL e fanwa, setshwantsho se jarollwa mme se kenngwa ka boiketsetso.

**Dipharamitha**

| Pharâmitha | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `post_id` | integer | E | ID ya poso kapa leqephe le lokelang ho ntjhafatswa |
| `attachment_id` | integer | Tjhe | ID ya sehokelo se seng se le teng sa Media Library |
| `url` | string | Tjhe | URL ya setshwantsho se hole se lokelang ho kenngwa le ho behwa e le setshwantsho se hlahelletseng |
| `alt_text` | string | Tjhe | Mongolo wa alt o lokelang ho sebediswa ho sehokelo haeba se kenngwa ho tswa ho URL |

E nngwe ya `attachment_id` kapa `url` e tlameha ho fanwa.

**E khutlisa** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

E bopa foromo ya puisano ka ho sebedisa plugin ya foromo e sebetsang (Contact Form 7, WPForms, Fluent Forms, kapa Gravity Forms, ho ya ka hore na ke efe e kentsoeng). E khutlisa shortcode e ka kenngwang posong efe kapa efe kapa leqepheng lefe kapa lefe.

**Dipharamitha**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Lebitso la foromo le bontshwang ho admin ya plugin ya foromo |
| `fields` | array | Yes | Lenane le hlophisitsweng la dikarolo tsa foromo (sheba ntho ya karolo ka tlase) |
| `recipient` | string | No | Aterese ya imeile e tla amohela dithomelo. Ya kamehla ke imeile ya admin ya WordPress |
| `subject` | string | No | Mola wa sehlooho sa imeile. E tshehetsa dipolaseholdara tsa `[your-name]` le `[your-subject]` ha ho sebediswa Contact Form 7 |
| `confirmation_message` | string | No | Molaetsa o bontshwang kamora thomelo e atlehileng. Ya kamehla: `"Thank you for your message. We'll be in touch soon."` |

**Ntho ya karolo**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Lebitso la karolo la ka hare / senotlolo sa mochine |
| `label` | string | Yes | Leibole e balwang ke batho e bontshwang foromong |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Hore na karolo e tlameha ho tlatswa pele ho thomelo. Ya kamehla `false` |
| `options` | array | No | Dikgetho bakeng sa dikarolo tsa `select`, `checkbox`, le `radio` |
| `placeholder` | string | No | Mongolo wa polaseholdara bakeng sa dikeno tsa mofuta wa mongolo |

**Mohlala**

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

**E kgutlisa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Tlhahlobo ya Ponahalo {#visual-review}

Bokgoni ba Tlhahlobo ya Ponahalo bo dumella agent ho hapa ditshwantsho tsa maqephe a phelang le ho di sekaseka, bo kgontsha tlhahlobo ya moralo e ikemetseng, dipapiso tsa pele/kamora, le diteko tsa visual regression ntle le ho hloka katoloso efe kapa efe ya sebatli.

### `capture_screenshot` {#capturescreenshot}

E hapa setshwantsho sa leqephe la WordPress ho URL e fanoeng ka ho sebedisa sebatli se se nang hlooho ka lehlakoreng la seva. Setshwantsho se bolokwa ho Media Library mme URL ya CDN e kgutlisetswa.

**Dipharemetara**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL e felletseng ya leqephe leo ho tla nkwa setshwantsho sa lona, mohl. `https://example.com/about/` |
| `width` | integer | No | Bophara ba viewport ka dipiksele. Ya kamehla `1280` |
| `height` | integer | No | Bophahamo ba viewport ka dipiksele. Ya kamehla `800` |
| `full_page` | boolean | No | Hapa leqephe lohle le ka skrolwang ho ena le viewport feela. Ya kamehla `false` |
| `delay_ms` | integer | No | Dimilisekonthe tsa ho ema kamora hore leqephe le kenngwe pele ho hapa, ho molemo bakeng sa dikahare tse phelisang. Ya kamehla `500` |
| `label` | string | No | Leibole e balwang ke batho e bolokwang le sehokelwa ho Media Library |

**E kgutlisa**

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

E nka ditshwantsho tse pedi mme e kgutlisa dintlha tsa phapang ya pono hammoho le setshwantsho sa phapang se totobatsang dibaka tse fetohileng. E molemo bakeng sa ho netefatsa hore phetoho ya moralo e hlahisitse sephetho se lebelletsweng kapa bakeng sa ho lemoha regressions tse sa rerwang.

**Dipharemetara**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL ya leqephe le lokelang ho hapuwa e le boemo ba "pele" |
| `after_url` | string | Yes | URL ya leqephe le lokelang ho hapuwa e le boemo ba "kamora". E ka ba yona URL e tshwanang haeba ho bapiswa ho pholletsa le nako |
| `width` | integer | No | Bophara ba viewport bakeng sa ho hapa ka bobedi. Ya kamehla `1280` |
| `threshold` | float | No | Moedi wa phapang ya dipiksele (0.0–1.0). Dipiksele tse kahara mamello ena di nkuwa di sa fetoha. Ya kamehla `0.1` |

**E kgutlisa**

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

`diff_score` ya `0.0` e bolela hore ha ho phetoho e bonahalang; `1.0` e bolela hore piksele e nngwe le e nngwe e fetohile.

---

### `review_page_design` {#reviewpagedesign}

E hapa setshwantsho sa leqephe mme e se romela ho mohlala wa puo bakeng sa tlhahlobo ya pono. E kgutlisa tekolo e hlophisitsweng e akaretsang moralo wa leqephe, typography, tshebediso ya mmala, le matshwenyeho a phihlello.

**Dipharemetara**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL e felletseng ya leqephe le lokelang ho hlahlojwa |
| `focus` | string | No | Lenane le arotsoeng ka dikomane la dibaka tsa tlhahlobo tse lokelang ho hatellwa: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Ya kamehla: dibaka tsohle |
| `width` | integer | No | Bophara ba viewport. Ya kamehla `1280` |

**E kgutlisa**

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

## Bokgoni bo ka Kenngwang {#installable-abilities}

Rejistara ya Bokgoni bo ka Kenngwang e o dumella ho atolosa agent ka diphuthelwana tse eketsehileng tsa bokgoni tse ajoang e le WordPress plugins. Sephuthelwana ka seng se ngodisa bokgoni bo le bong kapa ho feta sebedisa ability API e tlwaelehileng.

### `list_available_abilities` {#listavailableabilities}

E kgutlisa kataloge ya diphuthelwana tsa bokgoni tse fumanehang bakeng sa ho kenngwa ho tswa rejistareng.

**Dipharemetara**

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `category` | string | Tjhe | Sefe ka sehlopha: `ecommerce`, `seo`, `media`, `social`, `developer` |

**E kgutlisa**

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

E jarolla le ho kenya tshebetsong sephutheloana sa bokgoni ho tswa registry.

**Dipharamethara**

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `slug` | string | Ee | slug ya tlatsetso ya sephutheloana sa bokgoni |

**E kgutlisa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

E botsa registry ya bokgoni ho fumana tlatsetso e molemo ka ho fetisisa bakeng sa tshebediso e hlalositsweng mme, haeba ho kgethilwe, e e kenya.

**Dipharamethara**

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `description` | string | Ee | Tlhaloso ka puo ya tlhaho ya tshebetso e lakatsehang |
| `install` | boolean | Tjhe | Haeba e le `true`, e kenya tlatsetso e kgothaletswang hanghang. Ya kamehla ke `false` |

**Mohlala**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**E kgutlisa**

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
