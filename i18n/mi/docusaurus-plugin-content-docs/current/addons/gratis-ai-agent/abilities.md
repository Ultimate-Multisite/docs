---
title: Tohutoro Āheinga
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Tohutoro Āheinga

Ko ngā āheinga ngā mahi ngota ka taea e Gratis AI Agent te karanga ki tō tāutanga WordPress. He class PHP kua rēhitatia ia āheinga, ā, ka whakaatu i tētahi aronuinga JSON — ka pānui te agent i tēnei aronuinga i te wā whakahaere kia mārama ai he aha ngā tawhā e hiahiatia ana, ā, he aha hoki tā te āheinga e whakahoki mai ai.

Ka tuhi tēnei whārangi i ngā āheinga katoa e tukuna ana me Gratis AI Agent v1.9.0.

---

## Ngā Momo Whakairinga Ritenga

Ka whakahaere ēnei āheinga i ngā momo whakairinga ritenga (CPTs) kua rēhitatia mā te agent. Ka tiakina tonutia ngā rēhitatanga ki te ripanga kōwhiringa WordPress kia ora tonu ahakoa ka whakawetohia, ka whakahohe anō hoki te plugin.

### `register_post_type`

Ka rēhita i tētahi momo whakairinga ritenga hou.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `slug` | string | Āe | Te kī momo whakairinga (mōrahi 20 pūāhua, kaua he pūmatua, kaua he mokowā) |
| `singular_label` | string | Āe | Ingoa takitahi pānui-ngāwari, hei tauira `Portfolio Item` |
| `plural_label` | string | Āe | Ingoa takitini pānui-ngāwari, hei tauira `Portfolio Items` |
| `public` | boolean | Kāo | Mēnā ka wātea tūmatanui te momo whakairinga. Taunoa `true` |
| `supports` | array | Kāo | Ngā āhuatanga hei tautoko: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Taunoa `["title","editor"]` |
| `has_archive` | boolean | Kāo | Mēnā kua whakahohea tētahi whārangi pūranga momo whakairinga. Taunoa `false` |
| `menu_icon` | string | Kāo | Class Dashicons, URL rānei mō te ata tahua kaiwhakahaere. Taunoa `"dashicons-admin-post"` |
| `rewrite_slug` | string | Kāo | URL slug mō te momo whakairinga. Ka taunoa ki `slug` |

**Tauira**

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

**Ka whakahoki** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Ka whakahoki i ngā momo whakairinga ritenga katoa kua rēhitatia e te agent.

**Ngā Tawhā** — kāore

**Ka whakahoki**

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

Ka wetewete-rēhita i tētahi momo whakairinga ritenga i rēhitatia i mua e te agent. Ka noho tonu ngā whakairinga o taua momo ki te pātengi raraunga, engari kāore e wātea mā te momo whakairinga.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `slug` | string | Āe | Te kī momo whakairinga hei tango |

**Ka whakahoki** `{ "success": true, "slug": "portfolio" }`

---

## Ngā Taxonomy Ritenga

Ka whakahaere ēnei āheinga i ngā taxonomy ritenga. Pērā i ngā CPTs, ka tiakina tonutia ngā rēhitatanga taxonomy.

### `register_taxonomy`

Ka rēhita i tētahi taxonomy ritenga hou.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `slug` | string | Āe | Te kī taxonomy (mōrahi 32 pūāhua) |
| `singular_label` | string | Āe | Ingoa takitahi pānui-ngāwari, hei tauira `Project Category` |
| `plural_label` | string | Āe | Ingoa takitini pānui-ngāwari, hei tauira `Project Categories` |
| `post_types` | array | Āe | Ngā slug momo whakairinga me āpiti tēnei taxonomy ki a rātou |
| `hierarchical` | boolean | Kāo | `true` mō te kāhua-kāwai, `false` mō te kāhua-tohu. Taunoa `true` |
| `public` | boolean | Kāo | Mēnā ka wātea tūmatanui ngā kupu. Taunoa `true` |
| `rewrite_slug` | string | Kāo | URL slug mō te taxonomy. Ka taunoa ki `slug` |

**Tauira**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Ka whakahoki** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Ka whakahoki i ngā taxonomy ritenga katoa kua rēhitatia e te agent.

**Ngā Tawhā** — kāore

**Ka whakahoki**

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

Ka wetewete-rēhita i tētahi taxonomy ritenga i rēhitatia i mua e te agent.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `slug` | string | Āe | Te kī taxonomy hei tango |

**Ka whakahoki** `{ "success": true, "slug": "project-category" }`

---

## Pūnaha Hoahoa

Ka whakarerekē ngā āheinga pūnaha hoahoa i te whakaaturanga ā-ataata o te pae WordPress — mai i te CSS ritenga ki ngā tauira paraka me te waitohu pae.

### `inject_custom_css`

Ka tāpiri i te CSS ki te `<head>` o te pae mā `wp_add_inline_style`. Ka rokirokitia te CSS ki te kōwhiringa `gratis_ai_agent_custom_css`, ā, ka unuhia mā i te rārangi ina tautuhia anō te āheinga.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `css` | string | Āe | CSS whaimana hei wero |
| `label` | string | Kāo | Tapanga pānui-ngāwari mō tēnei paraka CSS, ka whakamahia ki ngā rangitaki patuiro. Taunoa `"agent-injected"` |
| `replace` | boolean | Kāo | Mēnā he `true`, ka whakakapi i ngā CSS katoa i werohia i mua. Taunoa `false` (ka tāpiri) |

**Tauira**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Ka whakahoki** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Ka rēhita i tētahi tauira paraka whakamahi-anō ki te whare pukapuka tauira WordPress.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `slug` | string | Āe | Kaitautohu tauira, hei tauira `gratis/hero-dark` |
| `title` | string | Āe | Ingoa tauira pānui-ngāwari e whakaaturia ana ki te editor |
| `content` | string | Āe | Tohu paraka kua raupapatia (HTML) mō te tauira |
| `categories` | array | Kāo | Ngā slug kāwai tauira, hei tauira `["featured", "hero"]` |
| `description` | string | Kāo | Whakaahuatanga poto e whakaaturia ana ki te kōwhiri tauira |
| `keywords` | array | Kāo | Ngā kupu matua rapu |

**Ka whakahoki** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Ka whakarārangi i ngā tauira paraka katoa kua rēhitatia e te agent.

**Ngā Tawhā** — kāore

**Whakahoki**

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

Ka tautuhi i te moko pae WordPress ki tētahi ID āpitihanga kua hoatu, ki tētahi URL atahanga mamao rānei. Ina tukuna he URL, ka tikiakehia te atahanga, ā, ka kawemai ki te Pātaka Pāpāho.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `attachment_id` | integer | Kāo | ID o tētahi āpitihanga Pātaka Pāpāho e tīariari ana |
| `url` | string | Kāo | URL atahanga mamao hei kawemai, hei tautuhi hoki hei moko |

Me tuku tētahi o `attachment_id`, o `url` rānei.

**Whakahoki** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Ka whakamahi i tētahi tatūkē tae/tuhi kua whakaingoatia ki te `theme.json` (ki `global-styles` rānei) o te kaupapa hohe. He paihere kua āta kōwhiria ngā tatūkē, e tiakina ana e te tīma Gratis AI Agent.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `preset` | string | Āe | Ingoa tatūkē, hei tauira `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Kāo | Mēnā he `true`, hanumi ki ngā uara e tīariari kē ana, kaua e whakakapi. Taunoa `false` |

**Ngā tatūkē e wātea ana**

| Tatūkē | Whakaahuatanga |
|---|---|
| `minimal-dark` | Papamuri tata-pango, kuputuhi mā, kotahi te tae miramira |
| `warm-editorial` | Papamuri mā-mahana, pane serif, ngā tae miramira ā-whenua |
| `corporate-blue` | Papatae kahurangi hōhonu me te mā, me te tuhi ngaio |
| `vibrant-startup` | Rōnaki kanapa, kokonga porotaka, momo pū sans-serif hou |
| `classic-blog` | Kerei tōkeke, teitei-rārangi hāneanea, mokowā tahora tuku iho |

**Whakahoki** `{ "success": true, "preset": "minimal-dark" }`

---

## Ngā Kāhua Ao

Ka pānui, ka tuhi hoki ngā āheinga Kāhua Ao i ngā uara theme.json mā te WordPress Global Styles API, ka pā ki ngā poraka me ngā tātauira katoa puta noa i te pae.

### `get_global_styles`

Ka whakahoki i te whirihoranga kāhua ao o nāianei.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `path` | string | Kāo | Tohu JSON ki tētahi uara motuhake, hei tauira `/color/palette`, `/typography/fontSizes` rānei. Ka whakahoki i te ahanoa katoa mēnā ka waiho. |

**Whakahoki** te ahanoa kāhua ao katoa, te uara rānei kei `path`.

---

### `set_global_styles`

Ka whakahou i tētahi, i ētahi uara rānei i te whirihoranga kāhua ao.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `path` | string | Āe | Tohu JSON ki te uara hei tautuhi, hei tauira `/color/palette` |
| `value` | any | Āe | Te uara hou |

**Tauira** — tāpirihia he tae ki te papatae

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Whakahoki** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Ka tautuhi anō i ngā huringa kāhua ao katoa i whakamahia e te agent, ka whakahoki i ngā taunoa o te kaupapa.

**Ngā Tawhā** — kāore

**Whakahoki** `{ "success": true }`

---

## Ngā Tahua Whakatere

Ka waihanga, ka whakahaere hoki ngā āheinga Tahua Whakatere i ngā tahua whakatere WordPress me ā rātou tūemi.

### `create_menu`

Ka waihanga i tētahi tahua whakatere WordPress hou.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `name` | string | Āe | Ingoa tahua, hei tauira `Primary Navigation` |
| `location` | string | Kāo | Tauwāhi kaupapa hei tautapa i tēnei tahua ki reira, hei tauira `primary` |

**Whakahoki** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Ka whakaingoa anō i tētahi tahua, ka tautapa anō rānei ki tētahi tauwāhi kaupapa.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `menu_id` | integer | Āe | ID o te tahua hei whakahou |
| `name` | string | Kāo | Ingoa tahua hou |
| `location` | string | Kāo | Tauwāhi kaupapa hei tautapa, hei tautapa anō rānei |

**Whakahoki** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Ka tāpiri i tētahi tūemi ki tētahi tahua whakatere e tīariari ana.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `menu_id` | integer | Āe | ID o te tahua ūnga |
| `type` | string | Āe | Momo tūemi: `custom`, `post_type`, `taxonomy` rānei |
| `title` | string | Kāo | Tapanga mō te tūemi tahua (e hiahiatia ana mō te momo `custom`) |
| `url` | string | Kāo | URL mō ngā tūemi `custom` |
| `object_id` | integer | Kāo | ID whakairinga, ID kupu rānei mō ngā tūemi `post_type`/`taxonomy` |
| `parent_id` | integer | Kāo | ID tūemi tahua hei whakakōhanga i tēnei tūemi ki raro |
| `position` | integer | Kāo | Tūranga tīmata-kore i roto i te tahua |

**Whakahoki** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Ka tango i tētahi tūemi i tētahi tahua whakatere.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `item_id` | integer | Āe | ID tūemi tahua hei tango |

**Whakahoki** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Ka whakarārangi i ngā tahua whakatere WordPress katoa, tae atu ki ō rātou tauwāhi kaupapa kua tautapatia.

**Ngā Tawhā** — kāore

**Whakahoki**

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

## Whakahaere Kōwhiringa

Ka pānui, ka tuhi hoki ngā āheinga Kōwhiringa i ngā kōwhiringa WordPress mā `get_option` / `update_option`. Ka ārai tētahi rārangi-aukati haumaru ā-roto i te whakarerekētanga ohorere o ngā tautuhinga tino hira.

### `get_option`

Ka pānui i tētahi kōwhiringa WordPress.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `option_name` | string | Āe | Te kī kōwhiringa, hei tauira `blogname` |

**Whakahoki** `{ "option_name": "blogname", "value": "My Site" }`

Ka whakahoki hapa mēnā kei runga `option_name` i te rārangi-aukati haumaru.

---

### `set_option`

Ka tuhi i tētahi kōwhiringa WordPress.

**Ngā Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `option_name` | string | Āe | Te kī kōwhiringa |
| `value` | any | Āe | Te uara hou (ka whakaraupapatia aunoatia mō ngā huānga/ngā ahanoa) |
| `autoload` | string | Kāo | `"yes"` or `"no"`. Ka pupuri te taunoa i te tautuhinga autoload e tīariari ana |

Whakahoki ai i tētahi hapa mēnā kei runga a `option_name` i te safety blocklist.

**Whakahoki** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Muku ai i tētahi kōwhiringa WordPress.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `option_name` | string | Āe | Te kī kōwhiringa hei muku |

Whakahoki ai i tētahi hapa mēnā kei runga a `option_name` i te safety blocklist.

**Whakahoki** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Whakarārangi ai i ngā kōwhiringa WordPress e ōrite ana ki tētahi tauira.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `pattern` | string | Kāo | Tauira SQL LIKE hei tātari i ngā ingoa kōwhiringa, hei tauira `gratis_%`. Whakahoki ai i ngā kōwhiringa katoa mēnā ka mahue (whakamahia me te tūpato ki runga pātengi raraunga nui). |
| `limit` | integer | Kāo | Tau mōrahi o ngā hua. Taunoa `50`, mōrahi `500` |

**Whakahoki**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Whakahaere Ihirangi

Ka waihanga, ka whakatika hoki ngā āheinga Whakahaere Ihirangi i ngā whakairinga me ngā whārangi WordPress. Ka whakahokia ngā ID whakairinga kia taea ai e ngā hipanga whai muri i roto i ngā mahere āheinga-maha te tohutoro ki te ihirangi kua waihangatia.

### `create_post`

Waihanga ai i tētahi whakairinga WordPress hou, whārangi, tāurunga momo whakairinga ritenga rānei.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `title` | string | Āe | Taitara whakairinga |
| `content` | string | Kāo | Tinana whakairinga — ka whakaae ki te kuputuhi noa, HTML, tohu poraka kua raupapatia rānei |
| `status` | string | Kāo | `draft`, `publish`, `pending`, `private`. Taunoa `draft` |
| `post_type` | string | Kāo | Slug momo whakairinga, hei tauira `post`, `page`, tētahi CPT kua rēhitatia rānei. Taunoa `post` |
| `excerpt` | string | Kāo | Whakarāpopototanga poto e whakaaturia ana i ngā pūranga me ngā hua rapu |
| `categories` | array | Kāo | Huinga ingoa kāwai, ID rānei hei tautapa |
| `tags` | array | Kāo | Huinga ingoa tūtohu, ID rānei hei tautapa |
| `author` | integer | Kāo | ID kaiwhakamahi WordPress hei tautuhi hei kaituhi o te whakairinga. Ka taunoa ki te kaiwhakamahi onāianei |
| `date` | string | Kāo | Rā whakaputa i te hōputu ISO 8601, hei tauira `2026-05-01T09:00:00` |
| `page_template` | string | Kāo | Kōnae tauira hei tautapa ki tēnei whakairinga, whārangi rānei, hei tauira `page-full-width.php`. Ka whai tikanga anake ina ko `post_type` he `page`, he CPT rānei e tautoko ana i ngā tauira whārangi. |

**Tauira**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Whakahoki** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Whakahōu ai i tētahi whakairinga, whārangi WordPress rānei e tīariari ana.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `post_id` | integer | Āe | ID o te whakairinga hei whakahōu |
| `title` | string | Kāo | Taitara whakairinga hou |
| `content` | string | Kāo | Tinana whakairinga hou |
| `status` | string | Kāo | Tūnga hou: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Kāo | Kōrero tangohanga hou |
| `categories` | array | Kāo | Whakakapi i te rārangi kāwai katoa ki tēnei huinga ingoa, ID rānei |
| `tags` | array | Kāo | Whakakapi i te rārangi tūtohu katoa ki tēnei huinga ingoa, ID rānei |
| `page_template` | string | Kāo | Kōnae tauira hou hei tautapa ki tēnei whakairinga, whārangi rānei, hei tauira `page-full-width.php`. Tukuna he aho pātea hei tango i te tautapanga tauira, kia hoki ki te taunoa o te theme. |

**Tauira** — hurihia te tauira i muri i te waihangatanga

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Whakahoki** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Waihanga ai i ngā whakairinga maha i roto i te karanga āheinga kotahi, ka whakaiti i ngā haerenga hoki-mai i te wā e hanga ana i ngā pae, e kawemai nui ana rānei i te ihirangi. Ka waihangatia ngā whakairinga ā-raupapa; mēnā ka rahua tētahi, ka haere tonu ērā atu, ā, ka pūrongotia te rahunga ki te huinga hua.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `posts` | array | Āe | Huinga ahanoa whakairinga, ka whakaae ia ki ngā tawhā ōrite ki `create_post` |
| `stop_on_error` | boolean | Kāo | Mēnā he `true`, whakamutua te tukatuka i muri i te rahunga tuatahi. Taunoa `false` |

**Tauira**

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

**Whakahoki**

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

Tautapa ai i tētahi atahanga āhuatanga (karakōnui whakairinga) ki tētahi whakairinga, whārangi rānei e tīariari ana. Ka whakaae ki tētahi ID āpitihanga Media Library e tīariari ana, ki tētahi URL atahanga mamao rānei; ina tukuna he URL, ka tikiakehia, ka kawemai aunoatia te atahanga.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `post_id` | integer | Āe | ID o te whakairinga, whārangi rānei hei whakahōu |
| `attachment_id` | integer | Kāo | ID o tētahi āpitihanga Media Library e tīariari ana |
| `url` | string | Kāo | URL atahanga mamao hei kawemai, hei tautuhi hoki hei atahanga āhuatanga |
| `alt_text` | string | Kāo | Kuputuhi kē hei hoatu ki te āpitihanga mēnā ka kawemaihia mai i tētahi URL |

Me whakarato tētahi o `attachment_id`, `url` rānei.

**Whakahoki** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Waihanga ai i tētahi puka whakapā mā te whakamahi i te plugin puka hohe (Contact Form 7, WPForms, Fluent Forms, Gravity Forms rānei, e ai ki te mea kua tāutatia). Whakahoki ai i tētahi shortcode ka taea te tāmau ki roto i tētahi whakairinga, whārangi rānei.

**Tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `title` | string | Āe | Ingoa puka e whakaaturia ana i te admin o te plugin puka |
| `fields` | array | Āe | Rārangi kua raupapatia o ngā āpure puka (tirohia te ahanoa Āpure i raro iho) |
| `recipient` | string | Kāo | Wāhitau īmēra hei whiwhi tukunga. Ko te taunoa ko te īmēra admin o WordPress |
| `subject` | string | Kāo | Rārangi kaupapa īmēra. Ka tautoko i ngā puriwāhi `[your-name]` me `[your-subject]` ina whakamahi ana i Contact Form 7 |
| `confirmation_message` | string | Kāo | Karere e whakaaturia ana i muri i tētahi tukunga angitu. Taunoa: `"Thank you for your message. We'll be in touch soon."` |

**Ahanoa āpure**

| Kī | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `name` | string | Āe | Ingoa āpure ā-roto / kī mīhini |
| `label` | string | Āe | Tapanga pānuihia e te tangata e whakaaturia ana ki te puka |
| `type` | string | Āe | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Kāo | Mēnā me whakakī te āpure i mua i te tukunga. Taunoa `false` |
| `options` | array | Kāo | Kōwhiringa mō ngā āpure `select`, `checkbox`, me `radio` |
| `placeholder` | string | Kāo | Kuputuhi puriwāhi mō ngā tāuru momo-kuputuhi |

**Tauira**

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

**Ngā whakahokinga**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Arotake Ataata

Mā ngā āheinga Arotake Ataata e taea ai e te agent te hopu whakaahua mata o ngā whārangi ora me te tātari i aua mea, e whakaahei ana i te arotake hoahoa motuhake, ngā whakataurite i mua/i muri, me ngā arowhai hekenga ataata me te kore e hiahiatia tētahi browser extension.

### `capture_screenshot`

Ka hopu i tētahi whakaahua mata o tētahi whārangi WordPress i tētahi URL kua tohua mā te whakamahi i tētahi pūtirotiro headless taha-tūmau. Ka tiakina te atahanga ki te Media Library, ā, ka whakahokia mai he URL CDN.

**Ngā tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `url` | string | Āe | URL katoa o te whārangi hei hopu whakaahua mata, hei tauira `https://example.com/about/` |
| `width` | integer | Kāo | Whānui viewport i roto i ngā pika. Taunoa `1280` |
| `height` | integer | Kāo | Teitei viewport i roto i ngā pika. Taunoa `800` |
| `full_page` | boolean | Kāo | Hopukina te whārangi katoa ka taea te panuku, kaua ko te viewport anake. Taunoa `false` |
| `delay_ms` | integer | Kāo | Ngā manomano hēkona hei tatari i muri i te utanga o te whārangi i mua i te hopu, he pai mō te ihirangi whakakorikori. Taunoa `500` |
| `label` | string | Kāo | Tapanga pānuihia e te tangata e puritia ana me te āpitihanga i te Media Library |

**Ngā whakahokinga**

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

Ka tango i ngā whakaahua mata e rua, ā, ka whakahoki i tētahi kaute rerekētanga ataata me tētahi atahanga rerekētanga e miramira ana i ngā rohe kua panoni. He pai mō te whakaū i hua mai i tētahi panonitanga hoahoa te hua i tūmanakohia, mō te kite rānei i ngā hekenga kāore i whakaarohia.

**Ngā tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `before_url` | string | Āe | URL o te whārangi hei hopu hei āhua "i mua" |
| `after_url` | string | Āe | URL o te whārangi hei hopu hei āhua "i muri". Tērā pea ko taua URL anō mēnā e whakataurite ana puta noa i te wā |
| `width` | integer | Kāo | Whānui viewport mō ngā hopukanga e rua. Taunoa `1280` |
| `threshold` | float | Kāo | Paepae rerekētanga-pika (0.0–1.0). Ka whakaarotia ngā pika i roto i tēnei manawanui kāore i panoni. Taunoa `0.1` |

**Ngā whakahokinga**

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

Ko te `diff_score` o `0.0` te tikanga kāore he panonitanga kitea; ko `1.0` te tikanga i panoni ia pika.

---

### `review_page_design`

Ka hopu i tētahi whakaahua mata o tētahi whārangi, ā, ka tuku ki te tauira reo mō te tātari ataata. Ka whakahoki i tētahi aromatawai kua whakaraupapatia e kapi ana i te whakatakotoranga, te momotuhi, te whakamahinga tae, me ngā āwangawanga āheitanga.

**Ngā tawhā**

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|---|---|---|---|
| `url` | string | Āe | URL katoa o te whārangi hei arotake |
| `focus` | string | Kāo | Rārangi kua whakawehea ki te piko o ngā wāhanga arotake hei whakahihiri: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Taunoa: ngā wāhanga katoa |
| `width` | integer | Kāo | Whānui viewport. Taunoa `1280` |

**Ngā whakahokinga**

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

## Ngā Āheinga Ka Taea te Tāuta

Mā te Rēhita Āheinga Ka Taea te Tāuta koe e āhei ai ki te whakawhānui i te agent ki ngā mōkihi āheinga tāpiri e tohaina ana hei ngā plugin WordPress. Ka rēhita ia mōkihi i tētahi, neke atu rānei, āheinga mā te API āheinga paerewa.

### `list_available_abilities`

Ka whakahoki i te rārangi o ngā mōkihi āheinga e wātea ana mō te tāutanga mai i te rēhita.

**Ngā tawhā**

| Tawhā | Momo | E hiahiatia ana | Whakaahuatanga |
|---|---|---|---|
| `category` | string | Kāo | Tātari mā te kāwai: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ka whakahoki**

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

Ka tikiake, ka whakahohe hoki i tētahi pōkai āheinga mai i te rēhita.

**Tawhā**

| Tawhā | Momo | E hiahiatia ana | Whakaahuatanga |
|---|---|---|---|
| `slug` | string | Āe | Slug mono-mai o te pōkai āheinga |

**Ka whakahoki** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ka uiui i te rēhita āheinga kia kitea ai te mono-mai pai rawa mō tētahi take whakamahinga kua whakaahuatia, ā, mēnā e hiahiatia ana, ka tāuta.

**Tawhā**

| Tawhā | Momo | E hiahiatia ana | Whakaahuatanga |
|---|---|---|---|
| `description` | string | Āe | Whakaahuatanga ki te reo noa o te taumahinga e hiahiatia ana |
| `install` | boolean | Kāo | Ki te mea ko `true`, ka tāuta tonu i te mono-mai kua tūtohutia. Taunoa `false` |

**Tauira**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Ka whakahoki**

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
