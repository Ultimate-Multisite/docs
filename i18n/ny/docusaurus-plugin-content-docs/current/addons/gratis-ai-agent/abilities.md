---
title: Cholozera cha Maluso
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Buku la Abilities

Abilities ndi zochita zazing'ono zomwe Gratis AI Agent ingayitanitse pa WordPress installation yanu. Ability iliyonse ndi PHP class yolembetsedwa yomwe imatulutsa JSON schema — agent imawerenga schema iyi pa runtime kuti imvetse parameter zofunika ndi zomwe ability imabweza.

Tsambali limalemba abilities zonse zomwe zikubwera ndi Gratis AI Agent v1.9.0.

---

## Mitundu ya Zolemba Zosinthidwa

Abilities izi zimayang'anira mitundu ya zolemba zosinthidwa (CPTs) zolembetsedwa kudzera mwa agent. Zolembetsa zimasungidwa mu tebulo la WordPress options kotero zimakhalabe ngakhale plugin itayimitsidwa ndi kuyambitsidwanso.

### `register_post_type`

Imalembetsa mtundu watsopano wa cholemba chosinthidwa.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi ya mtundu wa cholemba (zilembo zosapitirira 20, palibe zilembo zazikulu, palibe mipata) |
| `singular_label` | string | Yes | Dzina limodzi losavuta kuwerenga ndi munthu, mwachitsanzo `Portfolio Item` |
| `plural_label` | string | Yes | Dzina lochuluka losavuta kuwerenga ndi munthu, mwachitsanzo `Portfolio Items` |
| `public` | boolean | No | Kaya mtundu wa cholemba ukupezeka pagulu. Zokhazikika `true` |
| `supports` | array | No | Mawonekedwe oti athandizidwe: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Zokhazikika `["title","editor"]` |
| `has_archive` | boolean | No | Kaya tsamba la archive la mtundu wa cholemba layatsidwa. Zokhazikika `false` |
| `menu_icon` | string | No | Dashicons class kapena URL ya chizindikiro cha menyu ya admin. Zokhazikika `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug ya mtundu wa cholemba. Imakhazikika ku `slug` |

**Chitsanzo**

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

**Zimabweza** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Imabweza mitundu yonse ya zolemba zosinthidwa yolembetsedwa ndi agent.

**Parameter** — palibe

**Zimabweza**

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

Imachotsa kulembetsa kwa mtundu wa cholemba chosinthidwa womwe unalembetsedwa kale ndi agent. Zolemba zomwe zilipo za mtundu umenewo zimakhalabe mu database koma sizipezekanso kudzera mwa mtundu wa cholemba.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi ya mtundu wa cholemba yochotsa |

**Zimabweza** `{ "success": true, "slug": "portfolio" }`

---

## Ma Taxonomy Osinthidwa

Abilities izi zimayang'anira ma taxonomy osinthidwa. Monga CPTs, zolembetsa za taxonomy zimasungidwa.

### `register_taxonomy`

Imalembetsa taxonomy yatsopano yosinthidwa.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi ya taxonomy (zilembo zosapitirira 32) |
| `singular_label` | string | Yes | Dzina limodzi losavuta kuwerenga ndi munthu, mwachitsanzo `Project Category` |
| `plural_label` | string | Yes | Dzina lochuluka losavuta kuwerenga ndi munthu, mwachitsanzo `Project Categories` |
| `post_types` | array | Yes | Ma slug a mitundu ya zolemba omwe taxonomy iyi iyenera kulumikizidwa nawo |
| `hierarchical` | boolean | No | `true` ya kalembedwe ka category, `false` ya kalembedwe ka tag. Zokhazikika `true` |
| `public` | boolean | No | Kaya ma term akupezeka pagulu. Zokhazikika `true` |
| `rewrite_slug` | string | No | URL slug ya taxonomy. Imakhazikika ku `slug` |

**Chitsanzo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Zimabweza** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Imabweza ma taxonomy onse osinthidwa olembetsedwa ndi agent.

**Parameter** — palibe

**Zimabweza**

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

Imachotsa kulembetsa kwa taxonomy yosinthidwa yomwe inalembetsedwa kale ndi agent.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi ya taxonomy yochotsa |

**Zimabweza** `{ "success": true, "slug": "project-category" }`

---

## Dongosolo la Kapangidwe

Abilities za dongosolo la kapangidwe zimasintha mawonekedwe owoneka a WordPress site — kuyambira custom CSS mpaka block patterns ndi logo ya site.

### `inject_custom_css`

Imawonjezera CSS ku `<head>` ya site kudzera mwa `wp_add_inline_style`. CSS imasungidwa mu option ya `gratis_ai_agent_custom_css` ndipo imachotsedwa bwino pamzere ikakhazikitsidwanso ability.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS yovomerezeka yoti ilowetsedwe |
| `label` | string | No | Chizindikiro chosavuta kuwerenga ndi munthu cha block iyi ya CSS, chogwiritsidwa ntchito mu debug logs. Zokhazikika `"agent-injected"` |
| `replace` | boolean | No | Ngati `true`, imalowa m'malo mwa CSS yonse yomwe inalowetsedwa kale. Zokhazikika `false` (imawonjezera) |

**Chitsanzo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Zimabweza** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Imalembetsa block pattern yogwiritsidwanso ntchito mu laibulale ya WordPress pattern.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Chizindikiro cha pattern, mwachitsanzo `gratis/hero-dark` |
| `title` | string | Yes | Dzina la pattern losavuta kuwerenga ndi munthu lomwe limasonyezedwa mu editor |
| `content` | string | Yes | Block markup yosanjidwa (HTML) ya pattern |
| `categories` | array | No | Ma slug a magulu a pattern, mwachitsanzo `["featured", "hero"]` |
| `description` | string | No | Kufotokozera kwachidule komwe kumasonyezedwa mu chosankhira pattern |
| `keywords` | array | No | Mawu ofufuzira |

**Zimabweza** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Imalemba block patterns zonse zolembetsedwa ndi agent.

**Parameter** — palibe

**Zimabwezera**

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

Imayika logo ya tsamba la WordPress kukhala ID ya attachment yomwe yaperekedwa kapena URL ya chithunzi chakutali. URL ikaperekedwa, chithunzicho chimatsitsidwa ndi kulowetsedwa mu Media Library.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID ya attachment yomwe ilipo mu Media Library |
| `url` | string | No | URL ya chithunzi chakutali choti chilowetsedwe ndi kuyikidwa ngati logo |

Chimodzi mwa `attachment_id` kapena `url` chiyenera kuperekedwa.

**Zimabwezera** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Imagwiritsa ntchito preset ya mitundu/typography yomwe yatchulidwa pa `theme.json` (kapena `global-styles`) ya theme yogwira ntchito. Ma preset ndi magulu osankhidwa omwe amasamalidwa ndi gulu la Gratis AI Agent.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Dzina la preset, mwachitsanzo `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Ngati `true`, phatikizani ndi zomwe zilipo m'malo mosintha zonse. Default `false` |

**Ma preset omwe alipo**

| Preset | Description |
|---|---|
| `minimal-dark` | Maziko pafupi ndi wakuda, mawu oyera, mtundu umodzi wotsindika |
| `warm-editorial` | Maziko ofunda a off-white, mitu ya serif, mitundu yotsindika ya nthaka |
| `corporate-blue` | Palette ya navy ndi yoyera yokhala ndi typography yaukadaulo |
| `vibrant-startup` | Ma gradient owala, ngodya zozungulira, mtundu wamakono wa sans-serif |
| `classic-blog` | Ma grey osalowerera, line-height yabwino kuwerenga, mipata ya layout yachikhalidwe |

**Zimabwezera** `{ "success": true, "preset": "minimal-dark" }`

---

## Masitayilo a Global

Kuthekera kwa Masitayilo a Global kumawerenga ndi kulemba ma value a theme.json kudzera mu WordPress Global Styles API, kukhudza ma block onse ndi ma template pa tsamba lonse.

### `get_global_styles`

Imabwezera kasinthidwe kamakono ka masitayilo a global.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer kupita ku value inayake, mwachitsanzo `/color/palette` kapena `/typography/fontSizes`. Imabwezera object yonse ngati yasiyidwa. |

**Zimabwezera** object yonse ya masitayilo a global kapena value pa `path`.

---

### `set_global_styles`

Imasintha value imodzi kapena zingapo mu kasinthidwe ka masitayilo a global.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON pointer kupita ku value yoti iyikidwe, mwachitsanzo `/color/palette` |
| `value` | any | Yes | Value yatsopano |

**Chitsanzo** — onjezani mtundu ku palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Zimabwezera** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Imakhazikitsanso zosintha zonse za masitayilo a global zomwe agent adagwiritsa ntchito, kubwezeretsa ma default a theme.

**Ma parameter** — palibe

**Zimabwezera** `{ "success": true }`

---

## Ma Menu a Navigation

Kuthekera kwa Navigation Menu kumapanga ndi kusamalira ma menu a WordPress nav ndi zinthu zake.

### `create_menu`

Imapanga menu yatsopano ya WordPress navigation.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Dzina la menu, mwachitsanzo `Primary Navigation` |
| `location` | string | No | Malo a theme oti menu iyi ipatsidwe, mwachitsanzo `primary` |

**Zimabwezera** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Imasintha dzina la menu kapena kuipatsanso malo a theme.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ya menu yoti isinthidwe |
| `name` | string | No | Dzina latsopano la menu |
| `location` | string | No | Malo a theme oti apatsidwe kapena kupatsidwanso |

**Zimabwezera** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Imawonjezera chinthu ku menu ya navigation yomwe ilipo.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ya menu yomwe ikulunjikidwa |
| `type` | string | Yes | Mtundu wa chinthu: `custom`, `post_type`, kapena `taxonomy` |
| `title` | string | No | Label ya chinthu cha menu (yofunika pa mtundu wa `custom`) |
| `url` | string | No | URL ya zinthu za `custom` |
| `object_id` | integer | No | ID ya post kapena ID ya term ya zinthu za `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID ya chinthu cha menu choti chinthu ichi chiyikidwe pansi pake |
| `position` | integer | No | Malo oyambira pa zero mu menu |

**Zimabwezera** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Imachotsa chinthu mu menu ya navigation.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID ya chinthu cha menu choti chichotsedwe |

**Zimabwezera** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Imalemba ma menu onse a WordPress navigation, kuphatikizapo malo awo a theme omwe apatsidwa.

**Ma parameter** — palibe

**Zimabwezera**

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

## Kasamalidwe ka Options

Kuthekera kwa Options kumawerenga ndi kulemba ma options a WordPress kudzera mu `get_option` / `update_option`. Blocklist yachitetezo yomangidwa mkati imalepheretsa kusintha mwangozi kwa makonzedwe ofunika kwambiri.

### `get_option`

Imawerenga option ya WordPress.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Kiyi ya option, mwachitsanzo `blogname` |

**Zimabwezera** `{ "option_name": "blogname", "value": "My Site" }`

Imabwezera cholakwika ngati `option_name` ili pa blocklist yachitetezo.

---

### `set_option`

Imalemba option ya WordPress.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Kiyi ya option |
| `value` | any | Yes | Value yatsopano (imasandulizidwa yokha kukhala serialised kwa ma array/object) |
| `autoload` | string | No | `"yes"` kapena `"no"`. Default imasunga makonzedwe a autoload omwe alipo |

Imabwezera cholakwika ngati `option_name` ili pa safety blocklist.

**Imabwezera** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Imachotsa option ya WordPress.

**Magawo**

| Gawo | Mtundu | Chofunikira | Kufotokozera |
|---|---|---|---|
| `option_name` | string | Inde | Kiyi ya option yochotsa |

Imabwezera cholakwika ngati `option_name` ili pa safety blocklist.

**Imabwezera** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Imalemba options za WordPress zomwe zikufanana ndi pattern.

**Magawo**

| Gawo | Mtundu | Chofunikira | Kufotokozera |
|---|---|---|---|
| `pattern` | string | Ayi | Pattern ya SQL LIKE yosefera mayina a option, mwachitsanzo `gratis_%`. Imabwezera options zonse ngati yasiyidwa (gwiritsani ntchito mosamala pa databases akulu). |
| `limit` | integer | Ayi | Chiwerengero chachikulu kwambiri cha zotsatira. Default `50`, max `500` |

**Imabwezera**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Kasamalidwe ka Zokhutira

Maluso a Kasamalidwe ka Zokhutira amapanga ndi kusintha posts ndi masamba a WordPress. Ma ID a post amabweretsedwa kuti masitepe otsatira mu mapulani a maluso ambiri athe kutchula zokhutira zomwe zapangidwa.

### `create_post`

Imapanga post yatsopano ya WordPress, tsamba, kapena cholowa cha mtundu wa post wosinthidwa mwamakonda.

**Magawo**

| Gawo | Mtundu | Chofunikira | Kufotokozera |
|---|---|---|---|
| `title` | string | Inde | Mutu wa post |
| `content` | string | Ayi | Thupi la post — imavomereza mawu wamba, HTML, kapena serialised block markup |
| `status` | string | Ayi | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | Ayi | Slug ya mtundu wa post, mwachitsanzo `post`, `page`, kapena CPT iliyonse yolembetsedwa. Default `post` |
| `excerpt` | string | Ayi | Chidule chachifupi chomwe chimawonetsedwa mu archives ndi zotsatira zosaka |
| `categories` | array | Ayi | Array ya mayina a magulu kapena ma ID oti apatsidwe |
| `tags` | array | Ayi | Array ya mayina a tags kapena ma ID oti apatsidwe |
| `author` | integer | Ayi | ID ya wogwiritsa ntchito WordPress kuti aikidwe ngati wolemba post. Default ndi wogwiritsa ntchito wapano |
| `date` | string | Ayi | Tsiku lofalitsa mu fomati ya ISO 8601, mwachitsanzo `2026-05-01T09:00:00` |
| `page_template` | string | Ayi | Fayilo ya template yopatsa post kapena tsamba ili, mwachitsanzo `page-full-width.php`. Imakhala ndi tanthauzo pokhapokha `post_type` ili `page` kapena CPT yomwe imathandiza page templates. |

**Chitsanzo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Imabwezera** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Imasintha post kapena tsamba la WordPress lomwe lilipo kale.

**Magawo**

| Gawo | Mtundu | Chofunikira | Kufotokozera |
|---|---|---|---|
| `post_id` | integer | Inde | ID ya post yosinthidwa |
| `title` | string | Ayi | Mutu watsopano wa post |
| `content` | string | Ayi | Thupi latsopano la post |
| `status` | string | Ayi | Status yatsopano: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ayi | Excerpt yatsopano |
| `categories` | array | Ayi | Sinthani mndandanda wonse wa magulu ndi array iyi ya mayina kapena ma ID |
| `tags` | array | Ayi | Sinthani mndandanda wonse wa tags ndi array iyi ya mayina kapena ma ID |
| `page_template` | string | Ayi | Fayilo yatsopano ya template yopatsa post kapena tsamba ili, mwachitsanzo `page-full-width.php`. Tumizani string yopanda kanthu kuti muchotse kupatsidwa kwa template ndikubwerera ku default ya theme. |

**Chitsanzo** — sinthani template pambuyo popanga

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Imabwezera** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Imapanga posts angapo mu kuyitana kumodzi kwa luso, kuchepetsa maulendo obwerera-bwerera panthawi yomanga site kapena kulowetsa zokhutira zambiri. Posts amapangidwa motsatizana; ngati imodzi yalephera, ena amapitiriza ndipo kulepherako kumafotokozedwa mu array ya zotsatira.

**Magawo**

| Gawo | Mtundu | Chofunikira | Kufotokozera |
|---|---|---|---|
| `posts` | array | Inde | Array ya zinthu za post, chilichonse chikuvomereza magawo omwewo monga `create_post` |
| `stop_on_error` | boolean | Ayi | Ngati `true`, siyani kukonza pambuyo pa kulephera koyamba. Default `false` |

**Chitsanzo**

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

**Imabwezera**

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

Imapatsa chithunzi chosankhidwa (thumbnail ya post) ku post kapena tsamba lomwe lilipo kale. Imavomereza ID ya attachment yomwe ilipo kale mu Media Library kapena URL ya chithunzi chakutali; ngati URL yaperekedwa, chithunzicho chimatsitsidwa ndikulowetsedwa zokha.

**Magawo**

| Gawo | Mtundu | Chofunikira | Kufotokozera |
|---|---|---|---|
| `post_id` | integer | Inde | ID ya post kapena tsamba losinthidwa |
| `attachment_id` | integer | Ayi | ID ya attachment yomwe ilipo kale mu Media Library |
| `url` | string | Ayi | URL ya chithunzi chakutali cholowetsa ndi kuyika ngati chithunzi chosankhidwa |
| `alt_text` | string | Ayi | Mawu a alt oti agwiritsidwe ntchito pa attachment ngati yalowetsedwa kuchokera ku URL |

Chimodzi mwa `attachment_id` kapena `url` chiyenera kuperekedwa.

**Imabwezera** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Imapanga fomu yolumikizirana pogwiritsa ntchito plugin ya fomu yomwe ikugwira ntchito (Contact Form 7, WPForms, Fluent Forms, kapena Gravity Forms, kutengera yomwe yaikidwa). Imabwezera shortcode yomwe ingayikidwe mu post kapena tsamba lililonse.

**Magawo**

| Paramita | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `title` | string | Inde | Dzina la fomu lomwe limaonekera mu admin wa pulagini ya fomu |
| `fields` | array | Inde | Mndandanda wokonzedwa wa magawo a fomu (onani chinthu cha Gawo pansipa) |
| `recipient` | string | Ayi | Adilesi ya imelo yolandirira zotumizidwa. Imasinthira ku imelo ya admin wa WordPress |
| `subject` | string | Ayi | Mzere wa mutu wa imelo. Imathandiza malo osungira `[your-name]` ndi `[your-subject]` mukamagwiritsa ntchito Contact Form 7 |
| `confirmation_message` | string | Ayi | Uthenga wowonetsedwa pambuyo potumiza bwino. Zokhazikika: `"Thank you for your message. We'll be in touch soon."` |

**Chinthu cha gawo**

| Kiyi | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `name` | string | Inde | Dzina la gawo lamkati / kiyi ya makina |
| `label` | string | Inde | Chizindikiro chosavuta kumva ndi anthu chomwe chikuwonetsedwa pa fomu |
| `type` | string | Inde | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ayi | Kaya gawo liyenera kudzazidwa musanatumize. Zokhazikika `false` |
| `options` | array | Ayi | Zosankha za magawo a `select`, `checkbox`, ndi `radio` |
| `placeholder` | string | Ayi | Mawu a placeholder a zolowetsa za mtundu wa mawu |

**Chitsanzo**

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

**Zobwezedwa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Kuwunika Kowoneka

Kuthekera kwa Kuwunika Kowoneka kumalola wothandizira kujambula zithunzi za masamba amoyo ndi kuzisanthula, zomwe zimathandiza kuwunika kapangidwe modziyimira pawokha, kuyerekezera pamaso/pambuyo, ndi macheke a kusintha kowoneka popanda kufuna chowonjezera chilichonse cha msakatuli.

### `capture_screenshot`

Imajambula chithunzi cha tsamba la WordPress pa URL yoperekedwa pogwiritsa ntchito msakatuli wopanda mutu wa mbali ya seva. Chithunzicho chimasungidwa ku Laibulale ya Media ndipo CDN URL imabwezedwa.

**Maparamita**

| Paramita | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `url` | string | Inde | URL yonse ya tsamba loti lijambulidwe chithunzi, mwachitsanzo `https://example.com/about/` |
| `width` | integer | Ayi | M'lifupi mwa viewport mu pixels. Zokhazikika `1280` |
| `height` | integer | Ayi | Kutalika kwa viewport mu pixels. Zokhazikika `800` |
| `full_page` | boolean | Ayi | Jambulani tsamba lonse losunthika m'malo mwa viewport yokha. Zokhazikika `false` |
| `delay_ms` | integer | Ayi | Milliseconds zodikirira tsamba likatseguka musanajambule, zothandiza pa zomwe zili ndi makanema. Zokhazikika `500` |
| `label` | string | Ayi | Chizindikiro chosavuta kumva ndi anthu chosungidwa ndi attachment mu Laibulale ya Media |

**Zobwezedwa**

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

Imatenga zithunzi ziwiri ndipo imabweza mphambu ya kusiyana kowoneka kuphatikizapo chithunzi cha kusiyana chomwe chikuwonetsa madera omwe asintha. Ndi chothandiza potsimikizira kuti kusintha kwa kapangidwe kwatulutsa zotsatira zomwe zinkayembekezeredwa kapena pozindikira kubwerera m'mbuyo kosayembekezereka.

**Maparamita**

| Paramita | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `before_url` | string | Inde | URL ya tsamba loti lijambulidwe ngati mkhalidwe wa "pamaso" |
| `after_url` | string | Inde | URL ya tsamba loti lijambulidwe ngati mkhalidwe wa "pambuyo". Itha kukhala URL yomweyo ngati mukuyerekezera pakapita nthawi |
| `width` | integer | Ayi | M'lifupi mwa viewport pa kujambula konseku. Zokhazikika `1280` |
| `threshold` | float | Ayi | Malire a kusiyana kwa pixel (0.0–1.0). Ma pixel omwe ali mkati mwa kulekerera uku amaonedwa ngati osasinthika. Zokhazikika `0.1` |

**Zobwezedwa**

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

`diff_score` ya `0.0` imatanthauza palibe kusintha kowoneka; `1.0` imatanthauza pixel iliyonse yasintha.

---

### `review_page_design`

Imajambula chithunzi cha tsamba ndipo imachitumiza ku language model kuti chisanthulidwe mowoneka. Imabweza kuwunika kokonzedwa komwe kumaphimba layout, typography, kagwiritsidwe ka mitundu, ndi nkhawa za accessibility.

**Maparamita**

| Paramita | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `url` | string | Inde | URL yonse ya tsamba loti liunikidwe |
| `focus` | string | Ayi | Mndandanda wolekanitsidwa ndi makoma wa madera owunika oti agogomezedwe: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Zokhazikika: madera onse |
| `width` | integer | Ayi | M'lifupi mwa viewport. Zokhazikika `1280` |

**Zobwezedwa**

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

## Kuthekera Koyikika

Registry ya Kuthekera Koyikika imakulolani kukulitsa wothandizira ndi mapaketi owonjezera a kuthekera omwe amagawidwa ngati mapulagini a WordPress. Paketi iliyonse imalembetsa kuthekera kumodzi kapena koposerapo pogwiritsa ntchito API yokhazikika ya kuthekera.

### `list_available_abilities`

Imabweza kalozera wa mapaketi a kuthekera omwe alipo kuti ayikidwe kuchokera mu registry.

**Maparamita**

| Chizindikiro | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `category` | string | Ayi | Sefa ndi gulu: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Zimabwezera**

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

Imatsitsa ndi kuyambitsa paketi ya maluso kuchokera m'kaundula.

**Zizindikiro**

| Chizindikiro | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `slug` | string | Inde | Slug ya pulagini ya paketi ya maluso |

**Zimabwezera** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Imafunsa kaundula wa maluso kuti ipeze pulagini yabwino kwambiri pa kagwiritsidwe ntchito kofotokozedwa ndipo, ngati mukufuna, imayiyika.

**Zizindikiro**

| Chizindikiro | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `description` | string | Inde | Kufotokozera kwa chilankhulo chachilengedwe cha ntchito yomwe ikufunika |
| `install` | boolean | Ayi | Ngati ndi `true`, imayika pulagini yolimbikitsidwa nthawi yomweyo. Zokhazikika ndi `false` |

**Chitsanzo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Zimabwezera**

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
