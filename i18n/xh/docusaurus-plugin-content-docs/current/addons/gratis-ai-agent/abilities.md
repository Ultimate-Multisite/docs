---
title: Isalathiso seZakhono
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Isalathisi Sezakhono {#abilities-reference}

Izakhono zizenzo ezisisiseko ezinokubizwa yi Gratis AI Agent kufakelo lwakho lwe WordPress. Isakhono ngasinye yi PHP class ebhalisiweyo eveza i JSON schema — i-agent ifunda le schema ngexesha lokusebenza ukuze iqonde ukuba zeziphi iiparameter ezifunekayo nokuba isakhono sibuyisa ntoni.

Eli phepha libhala zonke izakhono eziza ne Gratis AI Agent v1.9.0.

---

## Iintlobo Zeeposti Ezilungiselelweyo {#custom-post-types}

Ezi zakhono zilawula iintlobo zeeposti ezilungiselelweyo (CPTs) ezibhaliswe nge-agent. Ubhaliso lugcinwa kwitheyibhile yeenketho ze WordPress ukuze luqhubeke lukhona emva kokucinywa nokuphinda kusebenze kwe-plugin.

### `register_post_type` {#registerposttype}

Ibhalisa uhlobo olutsha lweposti olulungiselelweyo.

**Iiparameter**

| Iparameter | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `slug` | string | Ewe | Isitshixo sohlobo lweposti (ubuninzi ziimpawu ezingama-20, akukho oonobumba abakhulu, akukho zithuba) |
| `singular_label` | string | Ewe | Igama elinye elifundeka ngabantu, umzekelo `Portfolio Item` |
| `plural_label` | string | Ewe | Igama lesininzi elifundeka ngabantu, umzekelo `Portfolio Items` |
| `public` | boolean | Hayi | Ukuba uhlobo lweposti luyafikeleleka esidlangalaleni. Okungagqibekanga `true` |
| `supports` | array | Hayi | Iimpawu eziza kuxhaswa: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Okungagqibekanga `["title","editor"]` |
| `has_archive` | boolean | Hayi | Ukuba iphepha le-archive lohlobo lweposti livuliwe. Okungagqibekanga `false` |
| `menu_icon` | string | Hayi | Iklasi ye-Dashicons okanye i-URL ye-icon yemenyu ye-admin. Okungagqibekanga `"dashicons-admin-post"` |
| `rewrite_slug` | string | Hayi | I-URL slug yohlobo lweposti. Isebenzisa okungagqibekanga ku `slug` |

**Umzekelo**

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

**Ibuyisa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Ibuyisa zonke iintlobo zeeposti ezilungiselelweyo ezibhaliswe yi-agent.

**Iiparameter** — akukho

**Ibuyisa**

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

Iyasusa ubhaliso lohlobo lweposti olulungiselelweyo olwalubhaliswe ngaphambili yi-agent. Iiposti ezikhoyo zolo hlobo zihlala kwidatabase kodwa azisafikeleleki ngohlobo lweposti.

**Iiparameter**

| Iparameter | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `slug` | string | Ewe | Isitshixo sohlobo lweposti esiza kususwa |

**Ibuyisa** `{ "success": true, "slug": "portfolio" }`

---

## Iitaxonomy Ezilungiselelweyo {#custom-taxonomies}

Ezi zakhono zilawula iitaxonomy ezilungiselelweyo. Njenge-CPTs, ubhaliso lweetaxonomy lugcinwa ngokusisigxina.

### `register_taxonomy` {#registertaxonomy}

Ibhalisa i-taxonomy entsha elungiselelweyo.

**Iiparameter**

| Iparameter | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `slug` | string | Ewe | Isitshixo se-taxonomy (ubuninzi ziimpawu ezingama-32) |
| `singular_label` | string | Ewe | Igama elinye elifundeka ngabantu, umzekelo `Project Category` |
| `plural_label` | string | Ewe | Igama lesininzi elifundeka ngabantu, umzekelo `Project Categories` |
| `post_types` | array | Ewe | Ii-slug zeentlobo zeeposti ekufuneka le taxonomy incanyathiselwe kuzo |
| `hierarchical` | boolean | Hayi | `true` kwisitayile secandelo, `false` kwisitayile sethegi. Okungagqibekanga `true` |
| `public` | boolean | Hayi | Ukuba amagama ayafikeleleka esidlangalaleni. Okungagqibekanga `true` |
| `rewrite_slug` | string | Hayi | I-URL slug ye-taxonomy. Isebenzisa okungagqibekanga ku `slug` |

**Umzekelo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Ibuyisa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Ibuyisa zonke iitaxonomy ezilungiselelweyo ezibhaliswe yi-agent.

**Iiparameter** — akukho

**Ibuyisa**

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

Iyasusa ubhaliso lwe-taxonomy elungiselelweyo eyayibhaliswe ngaphambili yi-agent.

**Iiparameter**

| Iparameter | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `slug` | string | Ewe | Isitshixo se-taxonomy esiza kususwa |

**Ibuyisa** `{ "success": true, "slug": "project-category" }`

---

## Inkqubo Yoyilo {#design-system}

Izakhono zenkqubo yoyilo zitshintsha ukubonakala okubonwayo kwesayithi ye WordPress — ukusuka kwi-CSS elungiselelweyo ukuya kwiipateni zebhloko kunye nelogo yesayithi.

### `inject_custom_css` {#injectcustomcss}

Yongeza i-CSS kwi-`<head>` yesayithi nge `wp_add_inline_style`. I-CSS igcinwa kukhetho lwe `gratis_ai_agent_custom_css` kwaye isuswa ngokucocekileyo emgceni xa isakhono sisetwa ngokutsha.

**Iiparameter**

| Iparameter | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `css` | string | Ewe | I-CSS esebenzayo eza kufakwa |
| `label` | string | Hayi | Ileyibhile efundeka ngabantu yale block ye-CSS, esetyenziswa kwiilog zokulungisa iimpazamo. Okungagqibekanga `"agent-injected"` |
| `replace` | boolean | Hayi | Ukuba `true`, ithatha indawo yayo yonke i-CSS ebifakwe ngaphambili. Okungagqibekanga `false` (iyongeza ekupheleni) |

**Umzekelo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Ibuyisa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Ibhalisa ipateni yebhloko enokusetyenziswa kwakhona kwithala leepateni le WordPress.

**Iiparameter**

| Iparameter | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `slug` | string | Ewe | Isazisi sepateni, umzekelo `gratis/hero-dark` |
| `title` | string | Ewe | Igama lepateni elifundeka ngabantu eliboniswa kwi-editor |
| `content` | string | Ewe | I-markup yebhloko eseriwe (HTML) yepateni |
| `categories` | array | Hayi | Ii-slug zamacandelo epateni, umzekelo `["featured", "hero"]` |
| `description` | string | Hayi | Inkcazo emfutshane eboniswa kumkhethi wepateni |
| `keywords` | array | Hayi | Amagama angundoqo okukhangela |

**Ibuyisa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Idwelisa zonke iipateni zebhloko ezibhaliswe yi-agent.

**Iiparameter** — akukho

**Ibuyisa**

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

Iseta ilogo yesayithi ye-WordPress kwi-ID yesincamatheliso esinikiweyo okanye kwi-URL yomfanekiso okude. Xa kunikwe i-URL, umfanekiso uyakhutshelwa uze ungeniswe kwiThala leMidiya.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `attachment_id` | integer | Hayi | I-ID yesincamatheliso esele sikhona kwiThala leMidiya |
| `url` | string | Hayi | I-URL yomfanekiso okude oza kungeniswa uze usetwe njengelogo |

Enye kwezi `attachment_id` okanye `url` kufuneka inikwe.

**Ibuyisa** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Isebenzisa iseti esele ibiziwe yombala/ubhalo kwi-`theme.json` ye-theme esebenzayo (okanye `global-styles`). Iiseti ezisele zilungisiwe ziingqokelela ezikhethiweyo ezigcinwa liqela le-Gratis AI Agent.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `preset` | string | Ewe | Igama leseti esele ilungisiwe, umz. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Hayi | Ukuba `true`, dibanisa namaxabiso asele ekhona endaweni yokuwatshintsha. Okuhlala kukho ngu-`false` |

**Iiseti ezifumanekayo**

| Iseti | Inkcazelo |
|---|---|
| `minimal-dark` | Imvelaphi ekufutshane nomnyama, umbhalo omhlophe, umbala omnye wogxininiso |
| `warm-editorial` | Imvelaphi efudumeleyo engamhlophe ngokupheleleyo, izihloko ze-serif, imibala yogxininiso yendalo |
| `corporate-blue` | Iphalethi eluhlaza okwesibhakabhaka emnyama nomhlophe enobhalo lobuchule |
| `vibrant-startup` | Iigradient eziqaqambileyo, iikona ezijikelezisiweyo, uhlobo lwangoku lwe-sans-serif |
| `classic-blog` | Iigreyi ezingathathi cala, ukuphakama komgca okukhululekileyo, izithuba zoyilo zesintu |

**Ibuyisa** `{ "success": true, "preset": "minimal-dark" }`

---

## Izimbo zeHlabathi {#global-styles}

Amandla eZimbo zeHlabathi afunda aze abhale amaxabiso e-theme.json nge-WordPress Global Styles API, echaphazela zonke iibhloko neetemplate kwisayithi yonke.

### `get_global_styles` {#getglobalstyles}

Ibuyisa uqwalaselo lwangoku lwezimbo zehlabathi.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `path` | string | Hayi | Isalathisi se-JSON kwixabiso elithile, umz. `/color/palette` okanye `/typography/fontSizes`. Ibuyisa into iyonke ukuba ishiyiwe. |

**Ibuyisa** into epheleleyo yezimbo zehlabathi okanye ixabiso eliku-`path`.

---

### `set_global_styles` {#setglobalstyles}

Ihlaziya ixabiso elinye okanye amaninzi kuqwalaselo lwezimbo zehlabathi.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `path` | string | Ewe | Isalathisi se-JSON kwixabiso eliza kusetwa, umz. `/color/palette` |
| `value` | any | Ewe | Ixabiso elitsha |

**Umzekelo** — yongeza umbala kwiphalethi

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Ibuyisa** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Iseta kwakhona zonke iinguqu zezimbo zehlabathi ezisetyenziswe yi-agent, ibuyisela okungagqibekanga kwe-theme.

**Iiparamitha** — akukho

**Ibuyisa** `{ "success": true }`

---

## Iimenyu zokuhamba {#navigation-menus}

Amandla eMenu yokuhamba adala aze alawule iimenyu ze-WordPress nav kunye nezinto zazo.

### `create_menu` {#createmenu}

Idala imenyu entsha yokuhamba ye-WordPress.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `name` | string | Ewe | Igama lemenyu, umz. `Primary Navigation` |
| `location` | string | Hayi | Indawo ye-theme yokwabela le menyu kuyo, umz. `primary` |

**Ibuyisa** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Ithiya ngokutsha imenyu okanye iyabele kwakhona kwindawo ye-theme.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `menu_id` | integer | Ewe | I-ID yemenyu eza kuhlaziywa |
| `name` | string | Hayi | Igama elitsha lemenyu |
| `location` | string | Hayi | Indawo ye-theme yokwabela okanye ukwabela kwakhona |

**Ibuyisa** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Yongeza into kwimenyu yokuhamba esele ikhona.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `menu_id` | integer | Ewe | I-ID yemenyu ekujoliswe kuyo |
| `type` | string | Ewe | Uhlobo lwento: `custom`, `post_type`, okanye `taxonomy` |
| `title` | string | Hayi | Ileyibhile yento yemenyu (iyafuneka kuhlobo lwe-`custom`) |
| `url` | string | Hayi | I-URL yezinto ze-`custom` |
| `object_id` | integer | Hayi | I-ID yeposi okanye i-ID yegama lezinto ze-`post_type`/`taxonomy` |
| `parent_id` | integer | Hayi | I-ID yento yemenyu yokufaka le nto phantsi kwayo |
| `position` | integer | Hayi | Indawo esekelwe ku-zero kwimenyu |

**Ibuyisa** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Isusa into kwimenyu yokuhamba.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `item_id` | integer | Ewe | I-ID yento yemenyu eza kususwa |

**Ibuyisa** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Idwelisa zonke iimenyu zokuhamba ze-WordPress, kuquka iindawo ze-theme ezabelwe zona.

**Iiparamitha** — akukho

**Ibuyisa**

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

## Ulawulo lweeKhetho {#options-management}

Amandla eeKhetho afunda aze abhale iinketho ze-WordPress nge-`get_option` / `update_option`. Uluhlu lokuthintela lokhuseleko olwakhelwe ngaphakathi luthintela ukuguqulwa ngempazamo kwezicwangciso ezibalulekileyo.

### `get_option` {#getoption}

Ifunda ukhetho lwe-WordPress.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `option_name` | string | Ewe | Isitshixo sokhetho, umz. `blogname` |

**Ibuyisa** `{ "option_name": "blogname", "value": "My Site" }`

Ibuyisa impazamo ukuba `option_name` ikuluhlu lokuthintela lokhuseleko.

---

### `set_option` {#setoption}

Ibhala ukhetho lwe-WordPress.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `option_name` | string | Ewe | Isitshixo sokhetho |
| `value` | any | Ewe | Ixabiso elitsha (lenziwa i-serialise ngokuzenzekelayo kwii-array/izinto) |
| `autoload` | string | Hayi | `"yes"` okanye `"no"`. Okuhlala kukho kugcina isicwangciso se-autoload esele sikhona |

Ibuyisela impazamo ukuba `option_name` ikuluhlu lokuthintela lokhuseleko.

**Ibuyisela** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Icima ukhetho lwe-WordPress.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `option_name` | string | Ewe | Isitshixo sokhetho esiza kucinywa |

Ibuyisela impazamo ukuba `option_name` ikuluhlu lokuthintela lokhuseleko.

**Ibuyisela** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Idwelisa iinketho ze-WordPress ezihambelana nepateni.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `pattern` | string | Hayi | Ipateni ye-SQL LIKE yokuhluza amagama eenketho, umz. `gratis_%`. Ibuyisela zonke iinketho ukuba ishiyiwe (yisebenzise ngononophelo kwiidatabase ezinkulu). |
| `limit` | integer | Hayi | Elona nani liphezulu leziphumo. Okuhlala kukho `50`, ubuninzi `500` |

**Ibuyisela**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Ulawulo Lomxholo {#content-management}

Izakhono zoLawulo Lomxholo zenza kwaye zihlele iiposti namaphepha e-WordPress. Ii-ID zeposti ziyabuyiselwa ukuze amanyathelo alandelayo kwizicwangciso ezinezakhono ezininzi akwazi ukubhekisa kumxholo owenziweyo.

### `create_post` {#createpost}

Yenza iposti entsha ye-WordPress, iphepha, okanye ungeno lohlobo lweposti olulungiselelweyo.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `title` | string | Ewe | Isihloko seposti |
| `content` | string | Hayi | Umzimba weposti — wamkela umbhalo ocacileyo, HTML, okanye i-markup yeebhloko eserialised |
| `status` | string | Hayi | `draft`, `publish`, `pending`, `private`. Okuhlala kukho `draft` |
| `post_type` | string | Hayi | I-slug yohlobo lweposti, umz. `post`, `page`, okanye nayiphi na i-CPT ebhalisiweyo. Okuhlala kukho `post` |
| `excerpt` | string | Hayi | Isishwankathelo esifutshane esiboniswa kwii-archive nakwiziphumo zokukhangela |
| `categories` | array | Hayi | Uluhlu lwamagama eendidi okanye ii-ID eziza kwabelwa |
| `tags` | array | Hayi | Uluhlu lwamagama eetag okanye ii-ID eziza kwabelwa |
| `author` | integer | Hayi | I-ID yomsebenzisi we-WordPress yokumisela njengombhali weposti. Ihlala kumsebenzisi wangoku |
| `date` | string | Hayi | Umhla wokupapasha ngefomathi ye-ISO 8601, umz. `2026-05-01T09:00:00` |
| `page_template` | string | Hayi | Ifayile yetemplate eza kwabelwa kule posti okanye kweli phepha, umz. `page-full-width.php`. Inentsingiselo kuphela xa `post_type` iyi-`page` okanye i-CPT exhasa iitemplate zamaphepha. |

**Umzekelo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Ibuyisela** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ihlaziya iposti okanye iphepha le-WordPress esele likho.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `post_id` | integer | Ewe | I-ID yeposti eza kuhlaziywa |
| `title` | string | Hayi | Isihloko esitsha seposti |
| `content` | string | Hayi | Umzimba omtsha weposti |
| `status` | string | Hayi | Isimo esitsha: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Hayi | Isicatshulwa esitsha |
| `categories` | array | Hayi | Buyisela uluhlu olupheleleyo lweendidi ngolu luhlu lwamagama okanye ii-ID |
| `tags` | array | Hayi | Buyisela uluhlu olupheleleyo lweetag ngolu luhlu lwamagama okanye ii-ID |
| `page_template` | string | Hayi | Ifayile yetemplate entsha eza kwabelwa kule posti okanye kweli phepha, umz. `page-full-width.php`. Dlulisa umtya ongenanto ukususa ukwabelwa kwetemplate uze ubuyele kokuhlala kukho kwe-theme. |

**Umzekelo** — tshintsha itemplate emva kokudala

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Ibuyisela** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Yenza iiposti ezininzi kubizo olunye lwesakhono, inciphisa ukuhamba nokubuya ngexesha lokwakhiwa kwesayithi okanye ukungeniswa komxholo ngobuninzi. Iiposti zenziwa ngokulandelelana; ukuba enye iyasilela ezinye ziyaqhubeka kwaye ukusilela kuxelwa kuluhlu lweziphumo.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `posts` | array | Ewe | Uluhlu lwezinto zeposti, nganye yamkela iiparamitha ezifanayo ne-`create_post` |
| `stop_on_error` | boolean | Hayi | Ukuba `true`, misa ukuqhubekeka emva kokusilela kokuqala. Okuhlala kukho `false` |

**Umzekelo**

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

**Ibuyisela**

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

Yabela umfanekiso obalulekileyo (i-thumbnail yeposti) kwiposti okanye iphepha esele likho. Yamkela i-ID yesincamatheliso esele sikhona se-Media Library okanye i-URL yomfanekiso okude; xa i-URL inikiwe, umfanekiso uyakhutshelwa uze ungeniswe ngokuzenzekelayo.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `post_id` | integer | Ewe | I-ID yeposti okanye yephepha eliza kuhlaziywa |
| `attachment_id` | integer | Hayi | I-ID yesincamatheliso esele sikhona se-Media Library |
| `url` | string | Hayi | I-URL yomfanekiso okude eza kungeniswa kwaye imiselwe njengomfanekiso obalulekileyo |
| `alt_text` | string | Hayi | Umbhalo we-alt oza kusetyenziswa kwisincamatheliso ukuba singeniswe sisuka kwi-URL |

Enye ye-`attachment_id` okanye `url` kufuneka inikwe.

**Ibuyisela** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Yenza ifom yoqhagamshelwano usebenzisa iplagini yefom esebenzayo (Contact Form 7, WPForms, Fluent Forms, okanye Gravity Forms, kuxhomekeke kokufakiweyo). Ibuyisela i-shortcode enokufakwa kuyo nayiphi na iposti okanye iphepha.

**Iiparamitha**

| Ipharamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `title` | string | Ewe | Igama lefom eliboniswa kulawulo lwesongezo sefom |
| `fields` | array | Ewe | Uluhlu olucwangcisiweyo lwemihlaba yefom (jonga into yoMhlaba ngezantsi) |
| `recipient` | string | Hayi | Idilesi ye-imeyile yokufumana ukuthunyelwa. Ihlala ngokungagqibekanga kwi-imeyile yomlawuli we-WordPress |
| `subject` | string | Hayi | Umgca wesihloko se-imeyile. Ixhasa izibambi-ndawo ze-`[your-name]` kunye ne-`[your-subject]` xa usebenzisa Contact Form 7 |
| `confirmation_message` | string | Hayi | Umyalezo oboniswa emva kokuthunyelwa okuyimpumelelo. Okungagqibekanga: `"Thank you for your message. We'll be in touch soon."` |

**Into yoMhlaba**

| Isitshixo | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `name` | string | Ewe | Igama langaphakathi lomhlaba / isitshixo somatshini |
| `label` | string | Ewe | Ileyibhile efundeka ebantwini eboniswa kwifom |
| `type` | string | Ewe | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Hayi | Nokuba umhlaba kufuneka uzaliswe ngaphambi kokuthunyelwa. Okungagqibekanga `false` |
| `options` | array | Hayi | Iinketho zemihlaba ye-`select`, `checkbox`, kunye ne-`radio` |
| `placeholder` | string | Hayi | Umbhalo wesibambi-ndawo wamagalelo ohlobo lombhalo |

**Umzekelo**

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

**Ibuyisa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Uphononongo olubonakalayo {#visual-review}

Amandla oPhononongo olubonakalayo avumela i-agent ukuba ibambe iiscreenshot zamaphepha aphilayo kwaye iwahlalutye, ivumela uphononongo loyilo oluzenzekelayo, uthelekiso lwangaphambi/nasemva, kunye nokukhangelwa kokubuyela umva okubonakalayo ngaphandle kokufuna nasiphi na isongezo sesikhangeli.

### `capture_screenshot` {#capturescreenshot}

Ibamba iscreenshot sephepha le-WordPress kwi-URL enikiweyo isebenzisa isikhangeli esingenantloko kwicala leseva. Umfanekiso ugcinwa kwiMedia Library kwaye kubuyiswa i-URL ye-CDN.

**Iipharamitha**

| Ipharamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `url` | string | Ewe | I-URL epheleleyo yephepha ekufuneka lenzelwe iscreenshot, umz. `https://example.com/about/` |
| `width` | integer | Hayi | Ububanzi be-viewport ngeepikseli. Okungagqibekanga `1280` |
| `height` | integer | Hayi | Ukuphakama kwe-viewport ngeepikseli. Okungagqibekanga `800` |
| `full_page` | boolean | Hayi | Bamba iphepha elipheleleyo eliskrolekayo endaweni ye-viewport kuphela. Okungagqibekanga `false` |
| `delay_ms` | integer | Hayi | Iimilizuzwana zokulinda emva kokulayishwa kwephepha ngaphambi kokubamba, kuluncedo kumxholo onentshukumo. Okungagqibekanga `500` |
| `label` | string | Hayi | Ileyibhile efundeka ebantwini egcinwe kunye nesincamathelisi kwiMedia Library |

**Ibuyisa**

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

Ithatha iiscreenshot ezimbini kwaye ibuyise amanqaku omahluko obonakalayo kunye nomfanekiso womahluko oqaqambisa iindawo ezitshintshileyo. Iluncedo ekuqinisekiseni ukuba utshintsho loyilo luvelise isiphumo esilindelekileyo okanye ekufumaniseni ukubuyela umva okungacetywanga.

**Iipharamitha**

| Ipharamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `before_url` | string | Ewe | I-URL yephepha eliza kubanjwa njengemeko "yangaphambili" |
| `after_url` | string | Ewe | I-URL yephepha eliza kubanjwa njengemeko "yasemva". Isenokuba yi-URL efanayo ukuba kuthelekiswa ekuhambeni kwexesha |
| `width` | integer | Hayi | Ububanzi be-viewport kuzo zombini izinto ezibanjwayo. Okungagqibekanga `1280` |
| `threshold` | float | Hayi | Umda womahluko weepikseli (0.0–1.0). Iipikseli ezingaphakathi kolu nyamezelo zithathwa njengezingatshintshanga. Okungagqibekanga `0.1` |

**Ibuyisa**

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

I-`diff_score` engu-`0.0` ithetha ukuba akukho tshintsho lubonakalayo; `1.0` ithetha ukuba yonke ipikseli itshintshile.

---

### `review_page_design` {#reviewpagedesign}

Ibamba iscreenshot sephepha kwaye isithumele kwimodeli yolwimi ukuze sihlalutywe ngokubonakalayo. Ibuyisa uvavanyo olucwangcisiweyo olugubungela ulungelelwaniso, ifonti nendlela yokuchwetheza, ukusetyenziswa kombala, kunye nemiba yokufikeleleka.

**Iipharamitha**

| Ipharamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `url` | string | Ewe | I-URL epheleleyo yephepha eliza kuhlolwa |
| `focus` | string | Hayi | Uluhlu olwahlulwe ngeekoma lweendawo zophononongo ekufuneka kugxininiswe kuzo: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Okungagqibekanga: zonke iindawo |
| `width` | integer | Hayi | Ububanzi be-viewport. Okungagqibekanga `1280` |

**Ibuyisa**

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

## Amandla afakelekayo {#installable-abilities}

IRegistry yaMandla afakelekayo ikuvumela ukuba wandise i-agent ngeepakethe zamandla ezongezelelweyo ezisasazwa njengezongezo ze-WordPress. Ipakethe nganye ibhalisa amandla elinye okanye angaphezulu isebenzisa i-API yamandla esemgangathweni.

### `list_available_abilities` {#listavailableabilities}

Ibuyisa ikhathalogu yeepakethe zamandla ezifumanekayo ukuze zifakelwe zisuka kwirejistri.

**Iipharamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `category` | string | Hayi | Hluza ngokodidi: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ibuyisa**

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

Ikhuphela kwaye ivule ipakethe yezakhono evela kwirejistri.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `slug` | string | Ewe | I-slug yesongezelelo sephakheji yezakhono |

**Ibuyisa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Ibuza irejistri yezakhono ukuze ifumane esona songezelelo silungileyo semeko yokusebenzisa echaziweyo kwaye, ngokuzikhethela, iyasifaka.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazelo |
|---|---|---|---|
| `description` | string | Ewe | Inkcazelo ngolwimi lwendalo yomsebenzi ofunekayo |
| `install` | boolean | Hayi | Ukuba `true`, ifaka isongezelelo esicetyisiweyo ngoko nangoko. Okumiselweyo ngu `false` |

**Umzekelo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Ibuyisa**

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
