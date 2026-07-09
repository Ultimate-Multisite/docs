---
title: Inkomba Yamakhono
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Inkomba Yamakhono {#abilities-reference}

Amakhono ayizenzo eziyisisekelo i-Gratis AI Agent engazibiza ekufakweni kwakho kwe-WordPress. Ikhono ngalinye liyikilasi le-PHP elibhalisiwe eliveza i-schema ye-JSON — i-agent ifunda le schema ngesikhathi sokusebenza ukuze iqonde ukuthi yimaphi amapharamitha adingekayo nokuthi ikhono libuyisa ini.

Leli khasi libhala wonke amakhono ahambisana ne-Gratis AI Agent v1.9.0.

---

## Izinhlobo Zokuthunyelwe Ezenziwe Ngokwezifiso {#custom-post-types}

Lawa makhono aphatha izinhlobo zokuthunyelwe ezenziwe ngokwezifiso (CPTs) ezibhaliswe nge-agent. Ukubhaliswa kugcinwa etafuleni lezinketho ze-WordPress ukuze kuqhubeke nokuba khona ngemva kokuthi plugin ivaliwe bese ivuselelwa futhi.

### `register_post_type` {#registerposttype}

Ibhalisa uhlobo olusha lokuthunyelwe olwenziwe ngokwezifiso.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `slug` | string | Yebo | Ukhiye wohlobo lokuthunyelwe (ubuningi bezinhlamvu ezingu-20, akukho osonhlamvukazi, akukho zikhala) |
| `singular_label` | string | Yebo | Igama lobunye elifundeka kubantu, isib. `Portfolio Item` |
| `plural_label` | string | Yebo | Igama lobuningi elifundeka kubantu, isib. `Portfolio Items` |
| `public` | boolean | Cha | Ukuthi uhlobo lokuthunyelwe luyatholakala emphakathini yini. Okuzenzakalelayo `true` |
| `supports` | array | Cha | Izici okufanele zisekelwe: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Okuzenzakalelayo `["title","editor"]` |
| `has_archive` | boolean | Cha | Ukuthi ikhasi le-archive lohlobo lokuthunyelwe livuliwe yini. Okuzenzakalelayo `false` |
| `menu_icon` | string | Cha | Ikilasi le-Dashicons noma i-URL yesithonjana semenyu yomlawuli. Okuzenzakalelayo `"dashicons-admin-post"` |
| `rewrite_slug` | string | Cha | I-URL slug yohlobo lokuthunyelwe. Okuzenzakalelayo kuba `slug` |

**Isibonelo**

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

**Kubuyisa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Kubuyisa zonke izinhlobo zokuthunyelwe ezenziwe ngokwezifiso ezibhaliswe yi-agent.

**Amapharamitha** — akukho

**Kubuyisa**

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

Isusa ukubhaliswa kohlobo lokuthunyelwe olwenziwe ngokwezifiso olwalubhaliswe ngaphambilini yi-agent. Okuthunyelwe okukhona kwalolo hlobo kuhlala kusizindalwazi kodwa akusatholakali ngohlobo lokuthunyelwe.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `slug` | string | Yebo | Ukhiye wohlobo lokuthunyelwe okufanele ususwe |

**Kubuyisa** `{ "success": true, "slug": "portfolio" }`

---

## Ama-Taxonomies Enziwe Ngokwezifiso {#custom-taxonomies}

Lawa makhono aphatha ama-taxonomies enziwe ngokwezifiso. Njengama-CPTs, ukubhaliswa kwama-taxonomy kugcinwa.

### `register_taxonomy` {#registertaxonomy}

Ibhalisa i-taxonomy entsha eyenziwe ngokwezifiso.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `slug` | string | Yebo | Ukhiye we-taxonomy (ubuningi bezinhlamvu ezingu-32) |
| `singular_label` | string | Yebo | Igama lobunye elifundeka kubantu, isib. `Project Category` |
| `plural_label` | string | Yebo | Igama lobuningi elifundeka kubantu, isib. `Project Categories` |
| `post_types` | array | Yebo | Ama-slug ezinhlobo zokuthunyelwa le taxonomy okufanele inamathiselwe kuwo |
| `hierarchical` | boolean | Cha | `true` kwesitayela se-category, `false` kwesitayela se-tag. Okuzenzakalelayo `true` |
| `public` | boolean | Cha | Ukuthi amagama ayatholakala emphakathini yini. Okuzenzakalelayo `true` |
| `rewrite_slug` | string | Cha | I-URL slug ye-taxonomy. Okuzenzakalelayo kuba `slug` |

**Isibonelo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Kubuyisa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Kubuyisa wonke ama-taxonomies enziwe ngokwezifiso abhaliswe yi-agent.

**Amapharamitha** — akukho

**Kubuyisa**

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

Isusa ukubhaliswa kwe-taxonomy eyenziwe ngokwezifiso eyayibhaliswe ngaphambilini yi-agent.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `slug` | string | Yebo | Ukhiye we-taxonomy okufanele ususwe |

**Kubuyisa** `{ "success": true, "slug": "project-category" }`

---

## Uhlelo Lokuklama {#design-system}

Amakhono ohlelo lokuklama ashintsha ukubukeka okubukwayo kwe-site ye-WordPress — kusukela ku-CSS eyenziwe ngokwezifiso kuya kuma-pattern e-block kanye ne-logo ye-site.

### `inject_custom_css` {#injectcustomcss}

Yengeza i-CSS ku-`<head>` ye-site nge-`wp_add_inline_style`. I-CSS igcinwa enkethweni ye-`gratis_ai_agent_custom_css` futhi isuswa emgqeni ngokuhlanzekile lapho ikhono lisethwa kabusha.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `css` | string | Yebo | I-CSS evumelekile okufanele ifakwe |
| `label` | string | Cha | Ilebula elifundeka kubantu lale block ye-CSS, lisetshenziswa kuma-log okulungisa amaphutha. Okuzenzakalelayo `"agent-injected"` |
| `replace` | boolean | Cha | Uma `true`, ishintsha yonke i-CSS eyayifakwe ngaphambilini. Okuzenzakalelayo `false` (iyengeza) |

**Isibonelo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Kubuyisa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Ibhalisa i-pattern ye-block ephinde isetshenziswe kulabhulali yama-pattern ye-WordPress.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `slug` | string | Yebo | Isihlonzi se-pattern, isib. `gratis/hero-dark` |
| `title` | string | Yebo | Igama le-pattern elifundeka kubantu eliboniswa ku-editor |
| `content` | string | Yebo | I-markup ye-block egcinwe ngokulandelana (HTML) ye-pattern |
| `categories` | array | Cha | Ama-slug ezigaba ze-pattern, isib. `["featured", "hero"]` |
| `description` | string | Cha | Incazelo emfushane eboniswa kusikhethi se-pattern |
| `keywords` | array | Cha | Amagama angukhiye okusesha |

**Kubuyisa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Ibala wonke ama-pattern e-block abhaliswe yi-agent.

**Amapharamitha** — akukho

**Kubuyisa**

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

Kusetha ilogo yesayithi le-WordPress ibe yi-ID yokunamathiselwe enikeziwe noma i-URL yesithombe esikude. Lapho kunikezwa i-URL, isithombe siyalandwa futhi singeniswe ku-Media Library.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `attachment_id` | integer | Cha | ID yokunamathiselwe okukhona kwe-Media Library |
| `url` | string | Cha | I-URL yesithombe esikude sokungenisa nokusetha njengelogo |

Kufanele kunikezwe okukodwa kokuthi `attachment_id` noma `url`.

**Kubuyisa** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Kusebenzisa i-preset enegama yombala/typography ku-`theme.json` (noma `global-styles`) yetimu esebenzayo. Ama-preset angamaphakheji akhethwe futhi agcinwa ithimba le-Gratis AI Agent.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `preset` | string | Yebo | Igama le-preset, isb. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Cha | Uma kuyi-`true`, hlanganisa namanani akhona esikhundleni sokuwashintsha. Okuzenzakalelayo `false` |

**Ama-preset atholakalayo**

| I-preset | Incazelo |
|---|---|
| `minimal-dark` | Ingemuva elicishe libe mnyama, umbhalo omhlophe, umbala owodwa wokugqamisa |
| `warm-editorial` | Ingemuva elifudumele elimhlophe ngokufiphele, izihloko ze-serif, imibala yokugqamisa efana nomhlaba |
| `corporate-blue` | Iphalethi elinombala we-navy nomhlophe ene-typography yobungcweti |
| `vibrant-startup` | Ama-gradient akhanyayo, amakhona ayindilinga, uhlobo lwe-sans-serif lwesimanje |
| `classic-blog` | Okumpunga okungathathi hlangothi, line-height entofontofo, izikhala zesakhiwo zendabuko |

**Kubuyisa** `{ "success": true, "preset": "minimal-dark" }`

---

## Izitayela Zomhlaba Wonke {#global-styles}

Amakhono e-Global Styles afunda futhi abhale amanani e-theme.json nge-WordPress Global Styles API, ethinta wonke amabhulokhi nama-template kusayithi lonke.

### `get_global_styles` {#getglobalstyles}

Kubuyisa ukucushwa kwamanje kwezitayela zomhlaba wonke.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `path` | string | Cha | Isikhombi se-JSON senani elithile, isb. `/color/palette` noma `/typography/fontSizes`. Kubuyisa yonke into uma kushiyiwe. |

**Kubuyisa** into ephelele yezitayela zomhlaba wonke noma inani ku-`path`.

---

### `set_global_styles` {#setglobalstyles}

Kubuyekeza inani elilodwa noma amaningi ekucushweni kwezitayela zomhlaba wonke.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `path` | string | Yebo | Isikhombi se-JSON senani elizosethwa, isb. `/color/palette` |
| `value` | any | Yebo | Inani elisha |

**Isibonelo** — engeza umbala ku-palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Kubuyisa** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Kusetha kabusha zonke izinguquko zezitayela zomhlaba wonke ezisetshenziswe yi-agent, kubuyiselwe okuzenzakalelayo kwetimu.

**Amapharamitha** — akukho

**Kubuyisa** `{ "success": true }`

---

## Amamenyu Okuzulazula {#navigation-menus}

Amakhono e-Navigation Menu akha futhi aphathe amamenyu e-WordPress nav nezinto zawo.

### `create_menu` {#createmenu}

Kwakha imenyu entsha yokuzulazula ye-WordPress.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `name` | string | Yebo | Igama lemenyu, isb. `Primary Navigation` |
| `location` | string | Cha | Indawo yetimu yokwabela le menyu kuyo, isb. `primary` |

**Kubuyisa** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Kuqamba kabusha imenyu noma kuyabele kabusha endaweni yetimu.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `menu_id` | integer | Yebo | ID yemenyu ezobuyekezwa |
| `name` | string | Cha | Igama elisha lemenyu |
| `location` | string | Cha | Indawo yetimu yokwabela noma ukwabela kabusha |

**Kubuyisa** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Kwengeza into kumenyu yokuzulazula ekhona.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `menu_id` | integer | Yebo | ID yemenyu eqondiwe |
| `type` | string | Yebo | Uhlobo lwento: `custom`, `post_type`, noma `taxonomy` |
| `title` | string | Cha | Ilebula lento yemenyu (iyadingeka ohlotsheni lwe-`custom`) |
| `url` | string | Cha | I-URL yezinto ze-`custom` |
| `object_id` | integer | Cha | I-ID yokuthunyelwe noma i-ID yetemu yezinto ze-`post_type`/`taxonomy` |
| `parent_id` | integer | Cha | ID yento yemenyu yokufaka le nto ngaphansi kwayo |
| `position` | integer | Cha | Indawo eqala ngoziro kumenyu |

**Kubuyisa** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Kususa into kumenyu yokuzulazula.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `item_id` | integer | Yebo | ID yento yemenyu ezosuswa |

**Kubuyisa** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Kubala wonke amamenyu okuzulazula e-WordPress, kuhlanganise nezindawo zawo zetimu azabelwe kuzo.

**Amapharamitha** — akukho

**Kubuyisa**

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

## Ukuphathwa Kwezinketho {#options-management}

Amakhono ezinketho afunda futhi abhale izinketho ze-WordPress nge-`get_option` / `update_option`. Uhlu lokuvimba lokuphepha olwakhelwe ngaphakathi luvimbela ukuguqulwa ngengozi kwezilungiselelo ezibucayi.

### `get_option` {#getoption}

Kufunda inketho ye-WordPress.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `option_name` | string | Yebo | Ukhiye wenketho, isb. `blogname` |

**Kubuyisa** `{ "option_name": "blogname", "value": "My Site" }`

Kubuyisa iphutha uma `option_name` isohlwini lokuvimba lokuphepha.

---

### `set_option` {#setoption}

Kubhala inketho ye-WordPress.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `option_name` | string | Yebo | Ukhiye wenketho |
| `value` | any | Yebo | Inani elisha (lifakwa kusimo se-serial ngokuzenzakalelayo kuma-array/objects) |
| `autoload` | string | Cha | `"yes"` noma `"no"`. Okuzenzakalelayo kugcina isilungiselelo esikhona se-autoload |

Ibuyisa iphutha uma `option_name` isohlwini lokuvimba lokuphepha.

**Ibuyisa** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Isusa inketho ye-WordPress.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `option_name` | string | Yebo | Ukhiye wenketho okufanele ususwe |

Ibuyisa iphutha uma `option_name` isohlwini lokuvimba lokuphepha.

**Ibuyisa** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Ibala izinketho ze-WordPress ezifana nephethini.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `pattern` | string | Cha | Iphethini ye-SQL LIKE yokuhlunga amagama ezinketho, isb. `gratis_%`. Ibuyisa zonke izinketho uma ingashiywanga (sebenzisa ngokuqapha kumadathabheyisi amakhulu). |
| `limit` | integer | Cha | Inani eliphezulu lemiphumela. Okuzenzakalelayo `50`, okuphezulu `500` |

**Ibuyisa**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Ukuphathwa Kokuqukethwe {#content-management}

Amakhono Okuphathwa Kokuqukethwe adala futhi ahlele okuthunyelwe namakhasi e-WordPress. Ama-ID okuthunyelwe ayabuyiswa ukuze izinyathelo ezilandelayo ezinhlelweni zamakhono amaningi zikwazi ukubhekisa kokuqukethwe okudaliwe.

### `create_post` {#createpost}

Idala okuthunyelwe okusha kwe-WordPress, ikhasi, noma okufakiwe kohlobo lokuthunyelwe olwenziwe ngokwezifiso.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `title` | string | Yebo | Isihloko sokuthunyelwe |
| `content` | string | Cha | Umzimba wokuthunyelwe — wamukela umbhalo ojwayelekile, i-HTML, noma i-markup yamabhulokhi eserialised |
| `status` | string | Cha | `draft`, `publish`, `pending`, `private`. Okuzenzakalelayo `draft` |
| `post_type` | string | Cha | I-slug yohlobo lokuthunyelwe, isb. `post`, `page`, noma noma iyiphi i-CPT ebhalisiwe. Okuzenzakalelayo `post` |
| `excerpt` | string | Cha | Isifinyezo esifushane esiboniswa kuma-archive nasemiphumeleni yosesho |
| `categories` | array | Cha | I-array yamagama ezigaba noma ama-ID okufanele anikezwe |
| `tags` | array | Cha | I-array yamagama amathegi noma ama-ID okufanele anikezwe |
| `author` | integer | Cha | I-ID yomsebenzisi we-WordPress yokusetha njengombhali wokuthunyelwe. Okuzenzakalelayo kumsebenzisi wamanje |
| `date` | string | Cha | Usuku lokushicilela ngefomethi ye-ISO 8601, isb. `2026-05-01T09:00:00` |
| `page_template` | string | Cha | Ifayela le-template okufanele linikezwe kulokhu okuthunyelwe noma ikhasi, isb. `page-full-width.php`. Kunencazelo kuphela uma `post_type` ingu-`page` noma i-CPT esekela ama-template ekhasi. |

**Isibonelo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Ibuyisa** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ibuyekeza okuthunyelwe noma ikhasi le-WordPress elikhona.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `post_id` | integer | Yebo | I-ID yokuthunyelwe okufanele kubuyekezwe |
| `title` | string | Cha | Isihloko esisha sokuthunyelwe |
| `content` | string | Cha | Umzimba omusha wokuthunyelwe |
| `status` | string | Cha | Isimo esisha: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Cha | I-excerpt entsha |
| `categories` | array | Cha | Faka esikhundleni uhlu oluphelele lwezigaba ngale array yamagama noma ama-ID |
| `tags` | array | Cha | Faka esikhundleni uhlu oluphelele lwamathegi ngale array yamagama noma ama-ID |
| `page_template` | string | Cha | Ifayela elisha le-template okufanele linikezwe kulokhu okuthunyelwe noma ikhasi, isb. `page-full-width.php`. Dlulisa iyunithi yezinhlamvu engenalutho ukuze ususe ukunikezwa kwe-template bese ubuyela kokuzenzakalelayo kwe-theme. |

**Isibonelo** — shintsha i-template ngemva kokudala

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Ibuyisa** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Idala okuthunyelwe okuningi ekubizweni okukodwa kwekhono, inciphisa ukubuyela emuva naphambili ngesikhathi sokwakhiwa kwe-site noma ukungenisa okuqukethwe ngobuningi. Okuthunyelwe kudalwa ngokulandelana; uma okukodwa kwehluleka okunye kuyaqhubeka futhi ukwehluleka kubikwa ku-array yemiphumela.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `posts` | array | Yebo | I-array yezinto zokuthunyelwe, ngayinye yamukela amapharamitha afanayo ne-`create_post` |
| `stop_on_error` | boolean | Cha | Uma `true`, misa ukucubungula ngemva kokwehluleka kokuqala. Okuzenzakalelayo `false` |

**Isibonelo**

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

**Ibuyisa**

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

Inika isithombe esivelele (isithonjana sokuthunyelwe) kokuthunyelwe noma ikhasi elikhona. Yamukela i-ID yokunamathiselwe ekhona ye-Media Library noma i-URL yesithombe esikude; uma kunikezwa i-URL, isithombe siyalandwa futhi singeniswe ngokuzenzakalelayo.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `post_id` | integer | Yebo | I-ID yokuthunyelwe noma ikhasi okufanele kubuyekezwe |
| `attachment_id` | integer | Cha | I-ID yokunamathiselwe okukhona kwe-Media Library |
| `url` | string | Cha | I-URL yesithombe esikude okufanele singeniswe futhi sisethwe njengesithombe esivelele |
| `alt_text` | string | Cha | Umbhalo we-alt okufanele usetshenziswe ekunamathiselweni uma kungeniswa kusuka ku-URL |

Enye ye-`attachment_id` noma `url` kufanele inikezwe.

**Ibuyisa** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Idala ifomu lokuxhumana isebenzisa i-plugin yefomu esebenzayo (Contact Form 7, WPForms, Fluent Forms, noma Gravity Forms, kuya ngokuthi iyiphi efakiwe). Ibuyisa i-shortcode engashumekwa kunoma yikuphi okuthunyelwe noma ikhasi.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `title` | string | Yebo | Igama lefomu eliboniswa kumlawuli we-plugin yefomu |
| `fields` | array | Yebo | Uhlu oluhleliwe lwezinkambu zefomu (bheka into Yenkambu ngezansi) |
| `recipient` | string | Cha | Ikheli le-imeyili lokwamukela ukuthunyelwa. Ngokuzenzakalelayo lisebenzisa i-imeyili yomlawuli we-WordPress |
| `subject` | string | Cha | Umugqa wesihloko se-imeyili. Isekela izibambi-ndawo ze-`[your-name]` ne-`[your-subject]` lapho kusetshenziswa i-Contact Form 7 |
| `confirmation_message` | string | Cha | Umlayezo oboniswa ngemva kokuthunyelwa okuyimpumelelo. Okuzenzakalelayo: `"Thank you for your message. We'll be in touch soon."` |

**Into Yenkambu**

| Ukhiye | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `name` | string | Yebo | Igama lenkambu langaphakathi / ukhiye womshini |
| `label` | string | Yebo | Ilebula elifundeka kubantu eliboniswa efomini |
| `type` | string | Yebo | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Cha | Ukuthi inkambu kufanele igcwaliswe ngaphambi kokuthunyelwa. Okuzenzakalelayo `false` |
| `options` | array | Cha | Izinketho zezinkambu ze-`select`, `checkbox`, ne-`radio` |
| `placeholder` | string | Cha | Umbhalo wesibambi-ndawo wokufakwayo kohlobo lombhalo |

**Isibonelo**

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

**Kubuyisa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Ukubuyekeza Okubonakalayo {#visual-review}

Amakhono Okubuyekeza Okubonakalayo avumela i-ejenti ukuthi ithwebule izithombe-skrini zamakhasi abukhoma futhi izihlaziye, okuvumela ukubuyekezwa komklamo okuzimelayo, ukuqhathanisa ngaphambi/ngemva, kanye nokuhlolwa kokuhlehla kokubonakalayo ngaphandle kokudinga noma yisiphi isandiso sesiphequluli.

### `capture_screenshot` {#capturescreenshot}

Ithwebula isithombe-skrini sekhasi le-WordPress ku-URL enikeziwe isebenzisa isiphequluli esingenakhanda esiseceleni kweseva. Isithombe sigcinwa ku-Media Library futhi kubuyiselwa i-URL ye-CDN.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `url` | string | Yebo | I-URL ephelele yekhasi okumele lithwetshulwe isithombe-skrini, isb. `https://example.com/about/` |
| `width` | integer | Cha | Ububanzi be-viewport ngamaphikseli. Okuzenzakalelayo `1280` |
| `height` | integer | Cha | Ukuphakama kwe-viewport ngamaphikseli. Okuzenzakalelayo `800` |
| `full_page` | boolean | Cha | Thwebula ikhasi eligcwele eliskrolekayo esikhundleni se-viewport kuphela. Okuzenzakalelayo `false` |
| `delay_ms` | integer | Cha | Ama-millisecond okulinda ngemva kokulayishwa kwekhasi ngaphambi kokuthwebula, kuyasiza kokuqukethwe okunokunyakaza. Okuzenzakalelayo `500` |
| `label` | string | Cha | Ilebula elifundeka kubantu eligcinwa nokunamathiselwe ku-Media Library |

**Kubuyisa**

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

Ithatha izithombe-skrini ezimbili bese ibuyisa isikolo somehluko obonakalayo kanye nesithombe somehluko esigqamisa izindawo ezishintshile. Kuyasiza ukuqinisekisa ukuthi ushintsho lomklamo lukhiqize umphumela olindelekile noma ukuthola ukuhlehla okungahlosiwe.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `before_url` | string | Yebo | I-URL yekhasi elizothwetshulwa njengesimo "sangaphambi" |
| `after_url` | string | Yebo | I-URL yekhasi elizothwetshulwa njengesimo "sangemva". Ingaba yi-URL efanayo uma kuqhathaniswa ngokuhamba kwesikhathi |
| `width` | integer | Cha | Ububanzi be-viewport kukho kokubili ukuthwebula. Okuzenzakalelayo `1280` |
| `threshold` | float | Cha | Umkhawulo womehluko wamaphikseli (0.0–1.0). Amaphikseli angaphakathi kwalokhu kubekezelelana athathwa njengangashintshile. Okuzenzakalelayo `0.1` |

**Kubuyisa**

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

I-`diff_score` engu-`0.0` isho ukuthi alukho ushintsho olubonakalayo; `1.0` isho ukuthi wonke amaphikseli ashintshile.

---

### `review_page_design` {#reviewpagedesign}

Ithwebula isithombe-skrini sekhasi bese isithumela kumodeli yolimi ukuze kuhlaziywe ngokubonakalayo. Ibuyisa ukuhlola okuhlelekile okuhlanganisa isakhiwo, i-typography, ukusetshenziswa kombala, kanye nokukhathazeka ngokufinyeleleka.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `url` | string | Yebo | I-URL ephelele yekhasi elizobuyekezwa |
| `focus` | string | Cha | Uhlu lwezindawo zokubuyekeza ezihlukaniswe ngamakhoma okumele zigcizelelwe: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Okuzenzakalelayo: zonke izindawo |
| `width` | integer | Cha | Ububanzi be-viewport. Okuzenzakalelayo `1280` |

**Kubuyisa**

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

## Amakhono Afakekayo {#installable-abilities}

Irejistri Yamakhono Afakekayo ikuvumela ukuthi welule i-ejenti ngamaphakethe amakhono engeziwe asatshalaliswa njengama-plugin e-WordPress. Iphakethe ngalinye libhalisa ikhono elilodwa noma amaningi lisebenzisa i-API yamakhono ejwayelekile.

### `list_available_abilities` {#listavailableabilities}

Ibuyisa ikhathalogi yamaphakethe amakhono atholakalayo ukuze afakwe kusuka kurejistri.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `category` | string | Cha | Hlunga ngokwesigaba: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Okubuyiswayo**

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

Ilanda futhi isebenze iphakheji yamakhono kusuka kurejista.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `slug` | string | Yebo | I-slug ye-plugin yephakheji yamakhono |

**Okubuyiswayo** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Ibuza irejista yamakhono ukuze ithole i-plugin engcono kakhulu yesimo sokusetshenziswa esichaziwe futhi, ngokuzikhethela, iyifake.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `description` | string | Yebo | Incazelo yolimi lwemvelo yokusebenza okufunwayo |
| `install` | boolean | Cha | Uma `true`, ifaka i-plugin enconyiwe ngokushesha. Okuzenzakalelayo `false` |

**Isibonelo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Okubuyiswayo**

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
