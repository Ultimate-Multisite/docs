---
title: Ntụaka Ikike
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Ntụaka Abilities

Abilities bụ omume atomic nke Gratis AI Agent nwere ike ịkpọ na nrụnye WordPress gị. Ability ọ bụla bụ klaasị PHP e debanyere aha nke na-egosipụta JSON schema — agent na-agụ schema a n'oge ọ na-arụ ọrụ iji ghọta parameters achọrọ na ihe ability ahụ na-eweghachi.

Peeji a na-akọwa abilities niile na-abịa na Gratis AI Agent v1.9.0.

---

## Ụdị Edemede Ahaziri Ahazi {#custom-post-types}

Abilities ndị a na-elekọta ụdị edemede ahaziri ahazi (CPTs) e debanyere site n'aka agent. A na-echekwa ndebanye aha na tebụl options nke WordPress ka ha dịgide ọbụna mgbe agbanyụrụ ma gbanyeghachi plugin.

### `register_post_type` {#registerposttype}

Na-edebanye aha ụdị edemede ahaziri ahazi ọhụrụ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Igodo ụdị edemede (karịa agwa 20, enweghị mkpụrụedemede ukwu, enweghị oghere) |
| `singular_label` | string | Yes | Aha otu nke mmadụ nwere ike ịgụ, dịka `Portfolio Item` |
| `plural_label` | string | Yes | Aha ọtụtụ nke mmadụ nwere ike ịgụ, dịka `Portfolio Items` |
| `public` | boolean | No | Ma ụdị edemede ahụ enwere ike ịnweta n'ihu ọha. Ndabara `true` |
| `supports` | array | No | Njirimara a ga-akwado: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Ndabara `["title","editor"]` |
| `has_archive` | boolean | No | Ma e nyere peeji archive nke ụdị edemede ahụ ọrụ. Ndabara `false` |
| `menu_icon` | string | No | Klaasị Dashicons ma ọ bụ URL maka akara ngosi menu admin. Ndabara `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Slug URL maka ụdị edemede ahụ. Ndabara bụ `slug` |

**Ọmụmaatụ**

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

**Na-eweghachi** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Na-eweghachi ụdị edemede ahaziri ahazi niile agent debanyere aha.

**Parameters** — enweghị

**Na-eweghachi**

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

Na-ewepụ ndebanye aha ụdị edemede ahaziri ahazi agent debanyere aha na mbụ. Edemede dị adị nke ụdị ahụ ka na-adị na database mana agaghịzi enwe ike ịnweta ha site na ụdị edemede ahụ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Igodo ụdị edemede a ga-ewepụ |

**Na-eweghachi** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies Ahaziri Ahazi {#custom-taxonomies}

Abilities ndị a na-elekọta taxonomies ahaziri ahazi. Dị ka CPTs, a na-echekwa ndebanye aha taxonomy.

### `register_taxonomy` {#registertaxonomy}

Na-edebanye aha taxonomy ahaziri ahazi ọhụrụ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Igodo taxonomy (karịa agwa 32) |
| `singular_label` | string | Yes | Aha otu nke mmadụ nwere ike ịgụ, dịka `Project Category` |
| `plural_label` | string | Yes | Aha ọtụtụ nke mmadụ nwere ike ịgụ, dịka `Project Categories` |
| `post_types` | array | Yes | Slugs ụdị edemede nke a ga-ejikọta taxonomy a na ha |
| `hierarchical` | boolean | No | `true` maka ụdị category, `false` maka ụdị tag. Ndabara `true` |
| `public` | boolean | No | Ma terms enwere ike ịnweta n'ihu ọha. Ndabara `true` |
| `rewrite_slug` | string | No | Slug URL maka taxonomy. Ndabara bụ `slug` |

**Ọmụmaatụ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Na-eweghachi** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Na-eweghachi taxonomies ahaziri ahazi niile agent debanyere aha.

**Parameters** — enweghị

**Na-eweghachi**

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

Na-ewepụ ndebanye aha taxonomy ahaziri ahazi agent debanyere aha na mbụ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Igodo taxonomy a ga-ewepụ |

**Na-eweghachi** `{ "success": true, "slug": "project-category" }`

---

## Usoro Nhazi {#design-system}

Abilities nke usoro nhazi na-agbanwe ngosipụta anya nke saịtị WordPress — site na CSS ahaziri ahazi ruo block patterns na akara ngosi saịtị.

### `inject_custom_css` {#injectcustomcss}

Na-agbakwunye CSS na `<head>` nke saịtị site na `wp_add_inline_style`. A na-echekwa CSS na option `gratis_ai_agent_custom_css` ma wepụ ya n'ụzọ dị ọcha mgbe a reset ability ahụ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS ziri ezi a ga-etinye |
| `label` | string | No | Label mmadụ nwere ike ịgụ maka block CSS a, eji ya na debug logs. Ndabara `"agent-injected"` |
| `replace` | boolean | No | Ọ bụrụ `true`, ọ na-anọchi CSS niile etinyere na mbụ. Ndabara `false` (na-agbakwunye) |

**Ọmụmaatụ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Na-eweghachi** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Na-edebanye aha block pattern a pụrụ iji ọzọ na ọbá akwụkwọ pattern nke WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ihe njirimara pattern, dịka `gratis/hero-dark` |
| `title` | string | Yes | Aha pattern nke mmadụ nwere ike ịgụ nke a na-egosi na editor |
| `content` | string | Yes | Markup block edepụtara n’usoro serial (HTML) maka pattern |
| `categories` | array | No | Slugs category pattern, dịka `["featured", "hero"]` |
| `description` | string | No | Nkọwa dị mkpirikpi a na-egosi na pattern picker |
| `keywords` | array | No | Keywords ọchụchọ |

**Na-eweghachi** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Na-edepụta block patterns niile agent debanyere aha.

**Parameters** — enweghị

**Na-eweghachi**

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

Na-etinye logo saịtị WordPress ka ọ bụrụ attachment ID e nyere ma ọ bụ URL onyonyo dịpụrụ adịpụ. Mgbe e nyere URL, a na-ebudata onyonyo ahụ ma bubata ya n'ime Media Library.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | Mba | ID nke attachment Media Library dị adị |
| `url` | string | Mba | URL onyonyo dịpụrụ adịpụ iji bubata ma tọọ dị ka logo |

A ga-enye otu n'ime `attachment_id` ma ọ bụ `url`.

**Na-eweghachi** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Na-etinye preset agba/typography nwere aha na `theme.json` nke theme nọ n'ọrụ (ma ọ bụ `global-styles`). Presets bụ ngwugwu ahọpụtara nke otu Gratis AI Agent na-elekọta.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Ee | Aha preset, dịka `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Mba | Ọ bụrụ `true`, jikọta ya na uru ndị dị adị kama dochie ha. Ndabara bụ `false` |

**Presets dị**

| Preset | Description |
|---|---|
| `minimal-dark` | Ndabere fọrọ nke nta ka ọ bụrụ oji, ederede ọcha, otu agba accent |
| `warm-editorial` | Ndabere off-white na-ekpo ọkụ, isiokwu serif, agba accent nke ala |
| `corporate-blue` | Palette navy na ọcha nwere typography ọkachamara |
| `vibrant-startup` | Gradients na-enwu gbaa, nkuku gbara okirikiri, ụdị sans-serif ọgbara ọhụrụ |
| `classic-blog` | Greys na-anọpụ iche, line-height dị mma, oghere layout ọdịnala |

**Na-eweghachi** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Ikike Global Styles na-agụ ma dee uru theme.json site na WordPress Global Styles API, na-emetụta blocks na templates niile n'ofe saịtị.

### `get_global_styles` {#getglobalstyles}

Na-eweghachi nhazi global styles dị ugbu a.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Mba | JSON pointer gaa n'uru kpọmkwem, dịka `/color/palette` ma ọ bụ `/typography/fontSizes`. Na-eweghachi object dum ma ọ bụrụ na ahapụrụ ya. |

**Na-eweghachi** object global styles zuru ezu ma ọ bụ uru dị na `path`.

---

### `set_global_styles` {#setglobalstyles}

Na-emelite otu ma ọ bụ karịa uru n'ime nhazi global styles.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Ee | JSON pointer gaa n'uru a ga-etinye, dịka `/color/palette` |
| `value` | any | Ee | Uru ọhụrụ ahụ |

**Ọmụmaatụ** — tinye agba na palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Na-eweghachi** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Na-emegharị mgbanwe global styles niile agent tinyere, na-eweghachi ndabara theme.

**Paramita** — enweghị

**Na-eweghachi** `{ "success": true }`

---

## Menu Ndugharị {#navigation-menus}

Ikike Navigation Menu na-emepụta ma jikwaa menu nav WordPress na ihe ha.

### `create_menu` {#createmenu}

Na-emepụta menu ndugharị WordPress ọhụrụ.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Ee | Aha menu, dịka `Primary Navigation` |
| `location` | string | Mba | Ebe theme iji kenye menu a, dịka `primary` |

**Na-eweghachi** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Na-agbanwe aha menu ma ọ bụ na-ekenye ya ọzọ n'ebe theme.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Ee | ID nke menu a ga-emelite |
| `name` | string | Mba | Aha menu ọhụrụ |
| `location` | string | Mba | Ebe theme iji kenye ma ọ bụ kenye ọzọ |

**Na-eweghachi** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Na-agbakwunye ihe na menu ndugharị dị adị.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Ee | ID nke menu e lekwasịrị anya |
| `type` | string | Ee | Ụdị ihe: `custom`, `post_type`, ma ọ bụ `taxonomy` |
| `title` | string | Mba | Label maka ihe menu (achọrọ maka ụdị `custom`) |
| `url` | string | Mba | URL maka ihe `custom` |
| `object_id` | integer | Mba | Post ID ma ọ bụ term ID maka ihe `post_type`/`taxonomy` |
| `parent_id` | integer | Mba | ID ihe menu iji tinye ihe a n'okpuru ya |
| `position` | integer | Mba | Ọnọdụ dabere na zero n'ime menu |

**Na-eweghachi** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Na-ewepụ ihe n'ime menu ndugharị.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Ee | ID ihe menu a ga-ewepụ |

**Na-eweghachi** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Na-edepụta menu ndugharị WordPress niile, gụnyere ebe theme e kenyere ha.

**Paramita** — enweghị

**Na-eweghachi**

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

## Njikwa Options {#options-management}

Ikike Options na-agụ ma dee options WordPress site na `get_option` / `update_option`. Blocklist nchekwa arụnyere n'ime ya na-egbochi mgbanwe na-atụghị anya ya na ntọala dị mkpa.

### `get_option` {#getoption}

Na-agụ option WordPress.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Ee | Igodo option, dịka `blogname` |

**Na-eweghachi** `{ "option_name": "blogname", "value": "My Site" }`

Na-eweghachi njehie ma ọ bụrụ na `option_name` dị na blocklist nchekwa.

---

### `set_option` {#setoption}

Na-ede option WordPress.

**Paramita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Ee | Igodo option |
| `value` | any | Ee | Uru ọhụrụ ahụ (a na-eme ya serialise na akpaghị aka maka arrays/objects) |
| `autoload` | string | Mba | `"yes"` ma ọ bụ `"no"`. Ndabara na-edobe ntọala autoload dị adị |

Na-eweghachi njehie ma ọ bụrụ na `option_name` dị na safety blocklist.

**Na-eweghachi** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Na-ehichapụ WordPress option.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Igodo option a ga-ehichapụ |

Na-eweghachi njehie ma ọ bụrụ na `option_name` dị na safety blocklist.

**Na-eweghachi** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Na-edepụta WordPress options kwekọrọ na pattern.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | SQL LIKE pattern iji nyochaa aha option, dịka `gratis_%`. Na-eweghachi options niile ma ọ bụrụ na ahapụrụ ya (jiri nlezianya na nnukwu databases). |
| `limit` | integer | No | Ọnụọgụ kacha elu nke nsonaazụ. Ndabara `50`, kacha `500` |

**Na-eweghachi**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Njikwa Ọdịnaya {#content-management}

Ikike Njikwa Ọdịnaya na-emepụta ma dezie WordPress posts na pages. A na-eweghachi Post IDs ka usoro ndị sochirinụ n'ime atụmatụ nwere ọtụtụ ikike nwee ike izo aka na ọdịnaya emepụtara.

### `create_post` {#createpost}

Na-emepụta WordPress post ọhụrụ, page, ma ọ bụ ntinye custom post type.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Aha post |
| `content` | string | No | Ahụ post — na-anabata ederede nkịtị, HTML, ma ọ bụ serialised block markup |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Ndabara `draft` |
| `post_type` | string | No | Slug ụdị post, dịka `post`, `page`, ma ọ bụ CPT ọ bụla edebanyere aha. Ndabara `post` |
| `excerpt` | string | No | Nchịkọta dị mkpirikpi a na-egosi na archives na nsonaazụ ọchụchọ |
| `categories` | array | No | Array nke aha category ma ọ bụ IDs a ga-ekenye |
| `tags` | array | No | Array nke aha tag ma ọ bụ IDs a ga-ekenye |
| `author` | integer | No | WordPress user ID iji tọọ dịka onye dere post. Ndabara bụ user dị ugbu a |
| `date` | string | No | Ụbọchị mbipụta n'ụdị ISO 8601, dịka `2026-05-01T09:00:00` |
| `page_template` | string | No | Faịlụ template a ga-ekenye post ma ọ bụ page a, dịka `page-full-width.php`. Ọ bara uru naanị mgbe `post_type` bụ `page` ma ọ bụ CPT na-akwado page templates. |

**Ihe atụ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Na-eweghachi** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Na-emelite WordPress post ma ọ bụ page dị adị.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID nke post a ga-emelite |
| `title` | string | No | Aha post ọhụrụ |
| `content` | string | No | Ahụ post ọhụrụ |
| `status` | string | No | Ọnọdụ ọhụrụ: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Excerpt ọhụrụ |
| `categories` | array | No | Dochie ndepụta category zuru ezu na array a nke aha ma ọ bụ IDs |
| `tags` | array | No | Dochie ndepụta tag zuru ezu na array a nke aha ma ọ bụ IDs |
| `page_template` | string | No | Faịlụ template ọhụrụ a ga-ekenye post ma ọ bụ page a, dịka `page-full-width.php`. Nyefee eriri efu iji wepụ nkesa template ma laghachi na ndabara theme. |

**Ihe atụ** — gbanwee template mgbe emechara ya

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Na-eweghachi** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Na-emepụta ọtụtụ posts n'ime otu oku ikike, na-ebelata njem azụ-na-ihu n'oge owuwu saịtị ma ọ bụ mbubata ọdịnaya n'ọtụtụ. A na-emepụta posts n'usoro; ọ bụrụ na otu daa, ndị ọzọ na-aga n'ihu ma kọọ ọdịda ahụ n'ime array nsonaazụ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array nke ihe post, nke ọ bụla na-anabata parameters otu ahụ dịka `create_post` |
| `stop_on_error` | boolean | No | Ọ bụrụ na `true`, kwụsị nhazi mgbe ọdịda mbụ gasịrị. Ndabara `false` |

**Ihe atụ**

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

**Na-eweghachi**

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

Na-ekenye onyonyo pụtara ìhè (post thumbnail) na post ma ọ bụ page dị adị. Na-anabata ID nke mgbakwunye Media Library dị adị ma ọ bụ URL onyonyo dị anya; mgbe enyere URL, a na-ebudata onyonyo ahụ ma bubata ya na-akpaghị aka.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID nke post ma ọ bụ page a ga-emelite |
| `attachment_id` | integer | No | ID nke mgbakwunye Media Library dị adị |
| `url` | string | No | URL onyonyo dị anya a ga-ebubata ma tọọ dịka onyonyo pụtara ìhè |
| `alt_text` | string | No | Ederede alt a ga-etinye na mgbakwunye ma ọ bụrụ na ebubatara ya site na URL |

A ga-enye otu n'ime `attachment_id` ma ọ bụ `url`.

**Na-eweghachi** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Na-emepụta contact form site n'iji plugin form na-arụ ọrụ (Contact Form 7, WPForms, Fluent Forms, ma ọ bụ Gravity Forms, dabere na nke arụnyere). Na-eweghachi shortcode nke a pụrụ itinye n'ime post ma ọ bụ page ọ bụla.

**Parameters**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `title` | string | Ee | Aha fọm a na-egosi na admin mgbakwunye fọm |
| `fields` | array | Ee | Ndepụta ahaziri nke mpaghara fọm (lee ihe mpaghara n'okpuru) |
| `recipient` | string | Mba | Adreesị email ga-anata ntinye. Ndabara bụ email admin WordPress |
| `subject` | string | Mba | Ahịrị isiokwu email. Na-akwado placeholders `[your-name]` na `[your-subject]` mgbe a na-eji Contact Form 7 |
| `confirmation_message` | string | Mba | Ozi a na-egosi mgbe ntinye gara nke ọma. Ndabara: `"Thank you for your message. We'll be in touch soon."` |

**Ihe mpaghara**

| Igodo | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `name` | string | Ee | Aha mpaghara ime / igodo igwe |
| `label` | string | Ee | Akara mmadụ nwere ike ịgụ a na-egosi na fọm |
| `type` | string | Ee | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Mba | Ma a ga-ejupụta mpaghara ahụ tupu ntinye. Ndabara `false` |
| `options` | array | Mba | Nhọrọ maka mpaghara `select`, `checkbox`, na `radio` |
| `placeholder` | string | Mba | Ederede placeholder maka ntinye ụdị ederede |

**Ọmụmaatụ**

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

**Na-eweghachi**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Nyocha Anya {#visual-review}

Ikike Nyocha Anya na-eme ka agent nwee ike ijide screenshots nke ibe dị ndụ ma nyochaa ha, na-eme ka nyochaa imewe n'onwe ya, ntụnyere tupu/mgbe e mesịrị, na nyocha visual regression kwe omume na-enweghị ịchọ browser extension ọ bụla.

### `capture_screenshot` {#capturescreenshot}

Na-ejide screenshot nke ibe WordPress na URL enyere site n'iji server-side headless browser. A na-echekwa onyonyo ahụ na Media Library ma weghachite CDN URL.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `url` | string | Ee | URL zuru ezu nke ibe a ga-eme screenshot, dịka `https://example.com/about/` |
| `width` | integer | Mba | Obosara viewport na pikselụ. Ndabara `1280` |
| `height` | integer | Mba | Ogologo viewport na pikselụ. Ndabara `800` |
| `full_page` | boolean | Mba | Jide ibe niile a pụrụ ịsụgharị kama naanị viewport. Ndabara `false` |
| `delay_ms` | integer | Mba | Milliseconds a ga-eche mgbe ibe kwụsịrị ibu tupu ijide ya, bara uru maka ọdịnaya animated. Ndabara `500` |
| `label` | string | Mba | Akara mmadụ nwere ike ịgụ echekwara na attachment n'ime Media Library |

**Na-eweghachi**

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

Na-ewere screenshots abụọ ma weghachite akara visual diff tinyere onyonyo diff nke na-eme ka mpaghara gbanwere pụta ìhè. Bara uru iji kwado na mgbanwe imewe mepụtara nsonaazụ a tụrụ anya ya ma ọ bụ iji chọpụta regressions a na-atụghị anya ya.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `before_url` | string | Ee | URL nke ibe a ga-ejide dị ka ọnọdụ "tupu" |
| `after_url` | string | Ee | URL nke ibe a ga-ejide dị ka ọnọdụ "mgbe e mesịrị". Ọ nwere ike ịbụ otu URL ma ọ bụrụ na a na-atụnyere n'ofe oge |
| `width` | integer | Mba | Obosara viewport maka ijide abụọ ahụ. Ndabara `1280` |
| `threshold` | float | Mba | Oke pixel-difference (0.0–1.0). A na-ewere pikselụ dị n'ime nnabata a dị ka agbanwebeghị. Ndabara `0.1` |

**Na-eweghachi**

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

`diff_score` nke `0.0` pụtara enweghị mgbanwe a na-ahụ anya; `1.0` pụtara pikselụ ọ bụla gbanwere.

---

### `review_page_design` {#reviewpagedesign}

Na-ejide screenshot nke ibe ma ziga ya na ụdị asụsụ maka nyocha anya. Na-eweghachi nlele ahaziri nke na-ekpuchi nhazi, typography, ojiji agba, na nchegbu accessibility.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `url` | string | Ee | URL zuru ezu nke ibe a ga-enyocha |
| `focus` | string | Mba | Ndepụta mpaghara nyocha kewapụrụ site na kọma a ga-emesi ike: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Ndabara: mpaghara niile |
| `width` | integer | Mba | Obosara viewport. Ndabara `1280` |

**Na-eweghachi**

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

## Ikike A Pụrụ Ịwụnye {#installable-abilities}

Installable Abilities Registry na-eme ka ịgbatị agent site na ngwugwu ikike ndị ọzọ a na-ekesa dị ka mgbakwunye WordPress kwe omume. Ngwugwu ọ bụla na-edebanye otu ikike ma ọ bụ karịa site n'iji API ikike ọkọlọtọ.

### `list_available_abilities` {#listavailableabilities}

Na-eweghachi katalọgụ nke ngwugwu ikike dị maka nwụnye site na registry.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `category` | string | Mba | Nyochaa site na category: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Na-eweghachi**

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

Na-ebudata ma na-eme ka ngwugwu ikike si na ndekọ rụọ ọrụ.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `slug` | string | Ee | slug nke plugin ngwugwu ikike |

**Na-eweghachi** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Na-ajụ ndekọ ikike iji chọta plugin kacha mma maka ọnọdụ ojiji akọwara, ma, ma ọ bụrụ na achọrọ, wụnye ya.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `description` | string | Ee | Nkọwa n'asụsụ nkịtị banyere ọrụ a chọrọ |
| `install` | boolean | Mba | Ọ bụrụ na `true`, wụnye plugin a tụrụ aro ozugbo. Ndabara bụ `false` |

**Ihe atụ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Na-eweghachi**

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
