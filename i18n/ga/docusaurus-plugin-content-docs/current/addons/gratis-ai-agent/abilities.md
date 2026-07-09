---
title: Tagairt Cumais
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Tagairt d'Ábaltachtaí

Is iad na hábaltachtaí na gníomhartha adamhacha is féidir le Gratis AI Agent a agairt ar do shuiteáil WordPress. Is rang PHP cláraithe gach ábaltacht a nochtann scéimre JSON — léann an agent an scéimre seo ag am rite chun tuiscint a fháil ar na paraiméadair atá riachtanach agus ar a bhfilleann an ábaltacht.

Déanann an leathanach seo doiciméadú ar gach ábaltacht a thagann le Gratis AI Agent v1.9.0.

---

## Cineálacha Saincheaptha Postálacha

Bainistíonn na hábaltachtaí seo cineálacha saincheaptha postálacha (CPTanna) atá cláraithe tríd an agent. Coinnítear clárúcháin i dtábla roghanna WordPress ionas go mairfidh siad díghníomhachtú agus athghníomhachtú an plugin.

### `register_post_type`

Cláraíonn cineál saincheaptha nua postála.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `slug` | string | Tá | Eochair an chineáil postála (uasmhéid 20 carachtar, gan ceannlitreacha, gan spásanna) |
| `singular_label` | string | Tá | Ainm uatha inléite ag duine, m.sh. `Portfolio Item` |
| `plural_label` | string | Tá | Ainm iolra inléite ag duine, m.sh. `Portfolio Items` |
| `public` | boolean | Níl | Cibé acu atá an cineál postála inrochtana go poiblí. Réamhshocrú `true` |
| `supports` | array | Níl | Gnéithe le tacú leo: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Réamhshocrú `["title","editor"]` |
| `has_archive` | boolean | Níl | Cibé acu atá leathanach cartlainne do chineál postála cumasaithe. Réamhshocrú `false` |
| `menu_icon` | string | Níl | Aicme Dashicons nó URL d'íocón an roghchláir riaracháin. Réamhshocrú `"dashicons-admin-post"` |
| `rewrite_slug` | string | Níl | Sluga URL don chineál postála. Réamhshocraítear go `slug` é |

**Sampla**

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

**Filleann** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Filleann sé gach cineál saincheaptha postála atá cláraithe ag an agent.

**Paraiméadair** — níl aon cheann

**Filleann**

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

Díchláraíonn cineál saincheaptha postála a chláraigh an agent roimhe seo. Fanann postálacha atá ann cheana den chineál sin sa bhunachar sonraí ach ní bhíonn siad inrochtana a thuilleadh tríd an gcineál postála.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `slug` | string | Tá | Eochair an chineáil postála le baint |

**Filleann** `{ "success": true, "slug": "portfolio" }`

---

## Tacsanomaíochtaí Saincheaptha

Bainistíonn na hábaltachtaí seo tacsanomaíochtaí saincheaptha. Cosúil le CPTanna, coinnítear clárúcháin tacsanomaíochta.

### `register_taxonomy`

Cláraíonn tacsanomaíocht shaincheaptha nua.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `slug` | string | Tá | Eochair na tacsanomaíochta (uasmhéid 32 carachtar) |
| `singular_label` | string | Tá | Ainm uatha inléite ag duine, m.sh. `Project Category` |
| `plural_label` | string | Tá | Ainm iolra inléite ag duine, m.sh. `Project Categories` |
| `post_types` | array | Tá | Slugaí cineálacha postálacha ar cheart an tacsanomaíocht seo a cheangal leo |
| `hierarchical` | boolean | Níl | `true` le haghaidh stíl catagóire, `false` le haghaidh stíl clibe. Réamhshocrú `true` |
| `public` | boolean | Níl | Cibé acu atá téarmaí inrochtana go poiblí. Réamhshocrú `true` |
| `rewrite_slug` | string | Níl | Sluga URL don tacsanomaíocht. Réamhshocraítear go `slug` é |

**Sampla**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Filleann** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Filleann sé gach tacsanomaíocht shaincheaptha atá cláraithe ag an agent.

**Paraiméadair** — níl aon cheann

**Filleann**

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

Díchláraíonn tacsanomaíocht shaincheaptha a chláraigh an agent roimhe seo.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `slug` | string | Tá | Eochair na tacsanomaíochta le baint |

**Filleann** `{ "success": true, "slug": "project-category" }`

---

## Córas Dearaidh

Athraíonn ábaltachtaí an chórais dearaidh cur i láthair amhairc an tsuímh WordPress — ó CSS saincheaptha go patrúin bloc agus lógó an tsuímh.

### `inject_custom_css`

Cuireann sé CSS le `<head>` an tsuímh trí `wp_add_inline_style`. Stóráiltear CSS sa rogha `gratis_ai_agent_custom_css` agus díchiúáiltear é go glan nuair a athshocraítear an ábaltacht.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `css` | string | Tá | CSS bailí le hinstealladh |
| `label` | string | Níl | Lipéad inléite ag duine don bhloc CSS seo, a úsáidtear i logaí dífhabhtaithe. Réamhshocrú `"agent-injected"` |
| `replace` | boolean | Níl | Má tá `true`, cuirtear in ionad gach CSS a instealladh roimhe seo é. Réamhshocrú `false` (cuireann leis) |

**Sampla**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Filleann** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Cláraíonn patrún bloc in-athúsáidte i leabharlann patrún WordPress.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `slug` | string | Tá | Aitheantóir patrúin, m.sh. `gratis/hero-dark` |
| `title` | string | Tá | Ainm patrúin inléite ag duine a thaispeántar san eagarthóir |
| `content` | string | Tá | Marcáil bhloc shraitheach (HTML) don phatrún |
| `categories` | array | Níl | Slugaí catagóirí patrúin, m.sh. `["featured", "hero"]` |
| `description` | string | Níl | Cur síos gairid a thaispeántar sa roghnóir patrún |
| `keywords` | array | Níl | Eochairfhocail chuardaigh |

**Filleann** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Liostaíonn sé gach patrún bloc atá cláraithe ag an agent.

**Paraiméadair** — níl aon cheann

**Tugann ar ais**

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

Socraíonn sé lógó shuíomh WordPress go haitheantas ceangaltáin ar leith nó go URL íomhá cianda. Nuair a chuirtear URL ar fáil, íoslódáiltear an íomhá agus iompórtáiltear í isteach sa Media Library.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `attachment_id` | integer | Níl | Aitheantas ceangaltáin Media Library atá ann cheana |
| `url` | string | Níl | URL íomhá cianda le hiompórtáil agus le socrú mar an lógó |

Ní mór ceann de `attachment_id` nó `url` a sholáthar.

**Tugann ar ais** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Cuireann sé réamhshocrú ainmnithe datha/clóghrafaíochta i bhfeidhm ar `theme.json` (nó `global-styles`) an téama ghníomhaigh. Is beartáin choimeádta iad na réamhshocruithe a chothaíonn foireann Gratis AI Agent.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `preset` | string | Tá | Ainm réamhshocraithe, m.sh. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Níl | Má tá `true`, cumaisc le luachanna atá ann cheana seachas iad a athsholáthar. Réamhshocrú `false` |

**Réamhshocruithe atá ar fáil**

| Réamhshocrú | Cur síos |
|---|---|
| `minimal-dark` | Cúlra beagnach dubh, téacs bán, dath béime amháin |
| `warm-editorial` | Cúlra te nach bhfuil go hiomlán bán, ceannteidil serif, dathanna béime créúla |
| `corporate-blue` | Pailéad dúghorm agus bán le clóghrafaíocht ghairmiúil |
| `vibrant-startup` | Grádáin gheala, coirnéil chothromaithe, cineál nua-aimseartha sans-serif |
| `classic-blog` | Liathanna neodracha, airde líne chompordach, spásáil leagain amach thraidisiúnta |

**Tugann ar ais** `{ "success": true, "preset": "minimal-dark" }`

---

## Stíleanna Domhanda

Léann agus scríobhann cumais Stíleanna Domhanda luachanna theme.json trí WordPress Global Styles API, agus bíonn tionchar acu ar gach bloc agus teimpléad ar fud an tsuímh.

### `get_global_styles`

Tugann sé cumraíocht reatha na stíleanna domhanda ar ais.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `path` | string | Níl | pointeoir JSON chuig luach sonrach, m.sh. `/color/palette` nó `/typography/fontSizes`. Tugann sé an réad iomlán ar ais má fhágtar ar lár é. |

**Tugann ar ais** réad iomlán na stíleanna domhanda nó an luach ag `path`.

---

### `set_global_styles`

Nuashonraíonn sé luach amháin nó níos mó i gcumraíocht na stíleanna domhanda.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `path` | string | Tá | pointeoir JSON chuig an luach atá le socrú, m.sh. `/color/palette` |
| `value` | any | Tá | An luach nua |

**Sampla** — cuir dath leis an bpailéad

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Tugann ar ais** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Athshocraíonn sé gach athrú ar stíleanna domhanda a chuir an gníomhaire i bhfeidhm, ag athbhunú réamhshocruithe an téama.

**Paraiméadair** — ceann ar bith

**Tugann ar ais** `{ "success": true }`

---

## Roghchláir Nascleanúna

Cruthaíonn agus bainistíonn cumais Roghchláir Nascleanúna roghchláir nascleanúna WordPress agus a míreanna.

### `create_menu`

Cruthaíonn sé roghchlár nascleanúna nua WordPress.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `name` | string | Tá | Ainm roghchláir, m.sh. `Primary Navigation` |
| `location` | string | Níl | Suíomh téama le sannadh don roghchlár seo, m.sh. `primary` |

**Tugann ar ais** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Athainmníonn sé roghchlár nó athshannann sé é do shuíomh téama.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `menu_id` | integer | Tá | Aitheantas an roghchláir atá le nuashonrú |
| `name` | string | Níl | Ainm nua an roghchláir |
| `location` | string | Níl | Suíomh téama le sannadh nó le hathshannadh |

**Tugann ar ais** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Cuireann sé mír le roghchlár nascleanúna atá ann cheana.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `menu_id` | integer | Tá | Aitheantas an spriocroghchláir |
| `type` | string | Tá | Cineál míre: `custom`, `post_type`, nó `taxonomy` |
| `title` | string | Níl | Lipéad don mhír roghchláir (riachtanach don chineál `custom`) |
| `url` | string | Níl | URL do mhíreanna `custom` |
| `object_id` | integer | Níl | Aitheantas poist nó aitheantas téarma do mhíreanna `post_type`/`taxonomy` |
| `parent_id` | integer | Níl | Aitheantas míre roghchláir chun an mhír seo a neadú faoi |
| `position` | integer | Níl | Suíomh bunaithe ar nialas sa roghchlár |

**Tugann ar ais** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Baineann sé mír as roghchlár nascleanúna.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `item_id` | integer | Tá | Aitheantas míre roghchláir le baint |

**Tugann ar ais** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Liostaíonn sé gach roghchlár nascleanúna WordPress, lena n-áirítear a suíomhanna téama sannta.

**Paraiméadair** — ceann ar bith

**Tugann ar ais**

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

## Bainistíocht Roghanna

Léann agus scríobhann cumais Roghanna roghanna WordPress trí `get_option` / `update_option`. Cuireann blocliosta sábháilteachta ionsuite cosc ar mhodhnú de thaisme ar shocruithe criticiúla.

### `get_option`

Léann sé rogha WordPress.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `option_name` | string | Tá | Eochair na rogha, m.sh. `blogname` |

**Tugann ar ais** `{ "option_name": "blogname", "value": "My Site" }`

Tugann sé earráid ar ais má tá `option_name` ar an mblocliosta sábháilteachta.

---

### `set_option`

Scríobhann sé rogha WordPress.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `option_name` | string | Tá | Eochair na rogha |
| `value` | any | Tá | An luach nua (sraitheáilte go huathoibríoch d’eagair/réada) |
| `autoload` | string | Níl | `"yes"` nó `"no"`. Coinníonn an réamhshocrú an socrú autoload atá ann cheana |

Filleann earráid má tá `option_name` ar an mblocliosta sábháilteachta.

**Filleann** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Scriosann sé rogha WordPress.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `option_name` | string | Tá | An eochair rogha le scriosadh |

Filleann earráid má tá `option_name` ar an mblocliosta sábháilteachta.

**Filleann** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Liostaíonn sé roghanna WordPress a mheaitseálann patrún.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `pattern` | string | Níl | Patrún SQL LIKE chun ainmneacha roghanna a scagadh, m.sh. `gratis_%`. Filleann sé gach rogha má fhágtar ar lár é (úsáid go cúramach ar bhunachair sonraí mhóra). |
| `limit` | integer | Níl | Uaslíon torthaí. Réamhshocrú `50`, uasmhéid `500` |

**Filleann**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Bainistíocht Ábhair

Cruthaíonn agus cuireann cumais Bhainistíocht Ábhair postálacha agus leathanaigh WordPress in eagar. Filleann IDanna postála ionas gur féidir le céimeanna ina dhiaidh sin i bpleananna ilchumais tagairt a dhéanamh don ábhar cruthaithe.

### `create_post`

Cruthaíonn sé postáil nua WordPress, leathanach, nó iontráil de chineál postála saincheaptha.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `title` | string | Tá | Teideal na postála |
| `content` | string | Níl | Corp na postála — glacann sé le gnáth-théacs, HTML, nó marcáil bhloc sraitheach |
| `status` | string | Níl | `draft`, `publish`, `pending`, `private`. Réamhshocrú `draft` |
| `post_type` | string | Níl | Slug cineáil postála, m.sh. `post`, `page`, nó aon CPT cláraithe. Réamhshocrú `post` |
| `excerpt` | string | Níl | Achoimre ghearr a thaispeántar i gcartlanna agus i dtorthaí cuardaigh |
| `categories` | array | Níl | Eagar d’ainmneacha nó IDanna catagóirí le sannadh |
| `tags` | array | Níl | Eagar d’ainmneacha nó IDanna clibeanna le sannadh |
| `author` | integer | Níl | ID úsáideora WordPress le socrú mar údar na postála. Réamhshocraíonn sé don úsáideoir reatha |
| `date` | string | Níl | Dáta foilsithe i bhformáid ISO 8601, m.sh. `2026-05-01T09:00:00` |
| `page_template` | string | Níl | Comhad teimpléid le sannadh don phostáil nó don leathanach seo, m.sh. `page-full-width.php`. Ní bhíonn brí leis ach nuair is `page` é `post_type` nó CPT a thacaíonn le teimpléid leathanaigh. |

**Sampla**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Filleann** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Nuashonraíonn sé postáil nó leathanach WordPress atá ann cheana.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `post_id` | integer | Tá | ID na postála le nuashonrú |
| `title` | string | Níl | Teideal nua postála |
| `content` | string | Níl | Corp nua postála |
| `status` | string | Níl | Stádas nua: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Níl | Sliocht nua |
| `categories` | array | Níl | Cuir an t-eagar ainmneacha nó IDanna seo in ionad liosta iomlán na gcatagóirí |
| `tags` | array | Níl | Cuir an t-eagar ainmneacha nó IDanna seo in ionad liosta iomlán na gclibeanna |
| `page_template` | string | Níl | Comhad teimpléid nua le sannadh don phostáil nó don leathanach seo, m.sh. `page-full-width.php`. Cuir teaghrán folamh isteach chun sannadh an teimpléid a bhaint agus filleadh ar réamhshocrú an téama. |

**Sampla** — athraigh teimpléad tar éis cruthaithe

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Filleann** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Cruthaíonn sé ilphostálacha in aon ghlao cumais amháin, rud a laghdaíonn turais anonn is anall le linn tógálacha suímh nó iompórtáil ábhair ar an mórchóir. Cruthaítear postálacha in ord; má theipeann ar cheann acu, leanann na cinn eile ar aghaidh agus tuairiscítear an teip san eagar torthaí.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `posts` | array | Tá | Eagar de réada postála, agus glacann gach ceann acu leis na paraiméadair chéanna le `create_post` |
| `stop_on_error` | boolean | Níl | Má tá `true`, stop den phróiseáil tar éis na chéad teipe. Réamhshocrú `false` |

**Sampla**

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

**Filleann**

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

Sannann sé íomhá faoi thrácht (mionsamhail postála) do phostáil nó leathanach atá ann cheana. Glacann sé le ID ceangaltáin atá ann cheana sa Media Library nó URL íomhá iargúlta; nuair a sholáthraítear URL, íoslódáiltear agus iompórtáiltear an íomhá go huathoibríoch.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `post_id` | integer | Tá | ID na postála nó an leathanaigh le nuashonrú |
| `attachment_id` | integer | Níl | ID ceangaltáin atá ann cheana sa Media Library |
| `url` | string | Níl | URL íomhá iargúlta le hiompórtáil agus le socrú mar an íomhá faoi thrácht |
| `alt_text` | string | Níl | Téacs malartach le cur i bhfeidhm ar an gceangaltán má iompórtáiltear ó URL é |

Ní mór ceann amháin de `attachment_id` nó `url` a sholáthar.

**Filleann** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Cruthaíonn sé foirm theagmhála ag úsáid an bhreiseáin foirme ghníomhaigh (Contact Form 7, WPForms, Fluent Forms, nó Gravity Forms, ag brath ar cé acu atá suiteáilte). Filleann sé gearrchód is féidir a leabú in aon phostáil nó leathanach.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `title` | string | Tá | Ainm na foirme a thaispeántar i riarachán an plugin foirme |
| `fields` | array | Tá | Liosta ordaithe de réimsí foirme (féach an réad Réimse thíos) |
| `recipient` | string | Níl | Seoladh ríomhphoist chun aighneachtaí a fháil. Réamhshocraítear é chuig ríomhphost riarthóra WordPress |
| `subject` | string | Níl | Líne ábhair ríomhphoist. Tacaíonn sé le hionadchoinneálaithe `[your-name]` agus `[your-subject]` agus Contact Form 7 á úsáid |
| `confirmation_message` | string | Níl | Teachtaireacht a thaispeántar tar éis aighneacht rathúil. Réamhshocrú: `"Thank you for your message. We'll be in touch soon."` |

**Réad réimse**

| Eochair | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `name` | string | Tá | Ainm inmheánach réimse / eochair mheaisín |
| `label` | string | Tá | Lipéad inléite ag duine a thaispeántar ar an bhfoirm |
| `type` | string | Tá | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Níl | An gcaithfear an réimse a líonadh roimh aighneacht. Réamhshocrú `false` |
| `options` | array | Níl | Roghanna do réimsí `select`, `checkbox`, agus `radio` |
| `placeholder` | string | Níl | Téacs ionadchoinneála d’ionchuir de chineál téacs |

**Sampla**

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

**Filleann sé**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Athbhreithniú Amhairc

Ligeann cumais Athbhreithnithe Amhairc don ghníomhaire gabhálacha scáileáin de leathanaigh bheo a ghabháil agus anailís a dhéanamh orthu, rud a chumasaíonn athbhreithniú dearaidh uathrialach, comparáidí roimh/i ndiaidh, agus seiceálacha aischéimnithe amhairc gan aon síneadh brabhsálaí a bheith riachtanach.

### `capture_screenshot`

Gabhann sé gabháil scáileáin de leathanach WordPress ag URL ar leith ag úsáid brabhsálaí gan cheann ar thaobh an fhreastalaí. Sábháiltear an íomhá sa Leabharlann Meán agus filleann sé URL CDN.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `url` | string | Tá | URL iomlán an leathanaigh le gabháil scáileáin de, m.sh. `https://example.com/about/` |
| `width` | integer | Níl | Leithead an amharcphoirt i bpicteilíní. Réamhshocrú `1280` |
| `height` | integer | Níl | Airde an amharcphoirt i bpicteilíní. Réamhshocrú `800` |
| `full_page` | boolean | Níl | Gabh an leathanach iomlán inscrollaithe in ionad an amharcphoirt amháin. Réamhshocrú `false` |
| `delay_ms` | integer | Níl | Milleasoicindí le fanacht tar éis luchtú an leathanaigh roimh ghabháil, úsáideach d’ábhar beochana. Réamhshocrú `500` |
| `label` | string | Níl | Lipéad inléite ag duine a stóráiltear leis an gceangaltán sa Leabharlann Meán |

**Filleann sé**

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

Glacann sé dhá ghabháil scáileáin agus filleann sé scór difríochta amhairc chomh maith le híomhá difríochta a aibhsíonn réigiúin athraithe. Úsáideach chun a dheimhniú gur tháirg athrú dearaidh an toradh a rabhthas ag súil leis nó chun aischéimnithe neamhbheartaithe a bhrath.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `before_url` | string | Tá | URL an leathanaigh le gabháil mar an staid "roimh" |
| `after_url` | string | Tá | URL an leathanaigh le gabháil mar an staid "i ndiaidh". D’fhéadfadh sé a bheith ar an URL céanna má tá comparáid á déanamh thar am |
| `width` | integer | Níl | Leithead an amharcphoirt don dá ghabháil. Réamhshocrú `1280` |
| `threshold` | float | Níl | Tairseach difríochta picteilíní (0.0–1.0). Meastar picteilíní laistigh den lamháltas seo a bheith gan athrú. Réamhshocrú `0.1` |

**Filleann sé**

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

Ciallaíonn `diff_score` de `0.0` nach bhfuil aon athrú infheicthe ann; ciallaíonn `1.0` gur athraigh gach picteilín.

---

### `review_page_design`

Gabhann sé gabháil scáileáin de leathanach agus seolann sé chuig an tsamhail teanga é le haghaidh anailíse amhairc. Filleann sé measúnú struchtúrtha a chlúdaíonn leagan amach, clóghrafaíocht, úsáid dathanna, agus ábhair imní inrochtaineachta.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `url` | string | Tá | URL iomlán an leathanaigh le hathbhreithniú |
| `focus` | string | Níl | Liosta scartha le camóga de réimsí athbhreithnithe le béim a chur orthu: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Réamhshocrú: gach réimse |
| `width` | integer | Níl | Leithead an amharcphoirt. Réamhshocrú `1280` |

**Filleann sé**

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

## Cumais Inshuiteáilte

Ligeann Clárlann na gCumas Inshuiteáilte duit an gníomhaire a leathnú le pacáistí cumais breise a dháiltear mar plugins WordPress. Cláraíonn gach pacáiste cumas amháin nó níos mó ag úsáid an API caighdeánaigh cumais.

### `list_available_abilities`

Filleann sé catalóg na bpacáistí cumais atá ar fáil le suiteáil ón gclárlann.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `category` | string | Níl | Scag de réir catagóire: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Torthaí**

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

Íoslódálann agus gníomhachtaíonn sé pacáiste cumais ón gclárlann.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `slug` | string | Tá | Slug breiseáin don phacáiste cumais |

**Torthaí** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Cuireann sé ceist ar an gclárlann cumais chun an breiseán is fearr a aimsiú do chás úsáide a bhfuil cur síos air agus, go roghnach, suiteálann sé é.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `description` | string | Tá | Cur síos i dteanga nádúrtha ar an bhfeidhmiúlacht atá ag teastáil |
| `install` | boolean | Níl | Má tá sé `true`, suiteálann sé an breiseán molta láithreach. Réamhshocrú `false` |

**Sampla**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Torthaí**

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
