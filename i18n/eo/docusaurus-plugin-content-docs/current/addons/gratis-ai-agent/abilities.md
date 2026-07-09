---
title: Referenco pri kapabloj
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenco de Kapabloj

Kapabloj estas la atomaj agoj, kiujn Gratis AI Agent povas alvoki en via WordPress-instalaĵo. Ĉiu kapablo estas registrita PHP-klaso, kiu elmontras JSON-skemon — la agento legas ĉi tiun skemon dum rultempo por kompreni kiuj parametroj estas bezonataj kaj kion la kapablo redonas.

Ĉi tiu paĝo dokumentas ĉiujn kapablojn liveratajn kun Gratis AI Agent v1.9.0.

---

## Propraj Afiŝotipoj

Ĉi tiuj kapabloj administras proprajn afiŝotipojn (CPT-ojn) registritajn per la agento. Registradoj estas konservataj en la WordPress-opcia tabelo, tiel ke ili postvivas plugin-malaktivigon kaj reaktivigon.

### `register_post_type`

Registras novan propran afiŝotipon.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `slug` | ĉeno | Jes | La afiŝotipa ŝlosilo (maks. 20 signoj, neniuj majuskloj, neniuj spacoj) |
| `singular_label` | ĉeno | Jes | Homlegebla singulara nomo, ekz. `Portfolio Item` |
| `plural_label` | ĉeno | Jes | Homlegebla plurala nomo, ekz. `Portfolio Items` |
| `public` | bulea | Ne | Ĉu la afiŝotipo estas publike alirebla. Defaŭlte `true` |
| `supports` | tabelo | Ne | Trajtoj subtenotaj: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Defaŭlte `["title","editor"]` |
| `has_archive` | bulea | Ne | Ĉu arkivpaĝo de afiŝotipo estas ebligita. Defaŭlte `false` |
| `menu_icon` | ĉeno | Ne | Dashicons-klaso aŭ URL por la administra menuikono. Defaŭlte `"dashicons-admin-post"` |
| `rewrite_slug` | ĉeno | Ne | URL-limako por la afiŝotipo. Defaŭltas al `slug` |

**Ekzemplo**

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

**Redonas** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Redonas ĉiujn proprajn afiŝotipojn registritajn de la agento.

**Parametroj** — neniuj

**Redonas**

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

Malregistras propran afiŝotipon antaŭe registritan de la agento. Ekzistantaj afiŝoj de tiu tipo restas en la datumbazo sed ne plu estas alireblaj per la afiŝotipo.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `slug` | ĉeno | Jes | La afiŝotipa ŝlosilo forigota |

**Redonas** `{ "success": true, "slug": "portfolio" }`

---

## Propraj Taksonomioj

Ĉi tiuj kapabloj administras proprajn taksonomiojn. Kiel CPT-oj, taksonomiaj registradoj estas konservataj.

### `register_taxonomy`

Registras novan propran taksonomion.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `slug` | ĉeno | Jes | La taksonomia ŝlosilo (maks. 32 signoj) |
| `singular_label` | ĉeno | Jes | Homlegebla singulara nomo, ekz. `Project Category` |
| `plural_label` | ĉeno | Jes | Homlegebla plurala nomo, ekz. `Project Categories` |
| `post_types` | tabelo | Jes | Afiŝotipaj limakoj, al kiuj ĉi tiu taksonomio estu alkroĉita |
| `hierarchical` | bulea | Ne | `true` por kategoria stilo, `false` por etikeda stilo. Defaŭlte `true` |
| `public` | bulea | Ne | Ĉu terminoj estas publike alireblaj. Defaŭlte `true` |
| `rewrite_slug` | ĉeno | Ne | URL-limako por la taksonomio. Defaŭltas al `slug` |

**Ekzemplo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Redonas** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Redonas ĉiujn proprajn taksonomiojn registritajn de la agento.

**Parametroj** — neniuj

**Redonas**

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

Malregistras propran taksonomion antaŭe registritan de la agento.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `slug` | ĉeno | Jes | La taksonomia ŝlosilo forigota |

**Redonas** `{ "success": true, "slug": "project-category" }`

---

## Dezajna Sistemo

Dezajnsistemaj kapabloj modifas la vidan prezenton de la WordPress-retejo — de propra CSS ĝis blokaj ŝablonoj kaj la reteja emblemo.

### `inject_custom_css`

Aldonas CSS-on al la `<head>` de la retejo per `wp_add_inline_style`. CSS estas stokita en la opcio `gratis_ai_agent_custom_css` kaj pure elviciĝas kiam la kapablo estas restarigita.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `css` | ĉeno | Jes | Valida CSS enmetota |
| `label` | ĉeno | Ne | Homlegebla etikedo por ĉi tiu CSS-bloko, uzata en sencimigaj protokoloj. Defaŭlte `"agent-injected"` |
| `replace` | bulea | Ne | Se `true`, anstataŭigas ĉiun antaŭe enmetitan CSS-on. Defaŭlte `false` (aldonas) |

**Ekzemplo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Redonas** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Registras reuzeblan blokan ŝablonon en la WordPress-ŝablona biblioteko.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `slug` | ĉeno | Jes | Ŝablona identigilo, ekz. `gratis/hero-dark` |
| `title` | ĉeno | Jes | Homlegebla ŝablona nomo montrata en la redaktilo |
| `content` | ĉeno | Jes | Seriigita bloka markado (HTML) por la ŝablono |
| `categories` | tabelo | Ne | Ŝablonaj kategoriaj limakoj, ekz. `["featured", "hero"]` |
| `description` | ĉeno | Ne | Mallonga priskribo montrata en la ŝablonelektilo |
| `keywords` | tabelo | Ne | Serĉaj ŝlosilvortoj |

**Redonas** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Listigas ĉiujn blokajn ŝablonojn registritajn de la agento.

**Parametroj** — neniuj

**Redonas**

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

Agordas la emblemon de la WordPress retejo al donita aldonaĵa ID aŭ fora bilda URL. Kiam URL estas provizita, la bildo estas elŝutita kaj importita en la Aŭdvidan Bibliotekon.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `attachment_id` | entjero | Ne | ID de ekzistanta aldonaĵo en la Aŭdvida Biblioteko |
| `url` | ĉeno | Ne | Fora bilda URL por importi kaj agordi kiel la emblemon |

Unu el `attachment_id` aŭ `url` devas esti provizita.

**Redonas** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Aplikas nomitan kolor-/tipografian antaŭagordon al la `theme.json` de la aktiva etoso (aŭ `global-styles`). Antaŭagordoj estas prizorgataj pakaĵoj konservataj de la teamo de Gratis AI Agent.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `preset` | ĉeno | Jes | Nomo de antaŭagordo, ekz. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | bulea | Ne | Se `true`, kunfandu kun ekzistantaj valoroj anstataŭ anstataŭigi. Defaŭlte `false` |

**Disponeblaj antaŭagordoj**

| Antaŭagordo | Priskribo |
|---|---|
| `minimal-dark` | Preskaŭ nigra fono, blanka teksto, unu akcenta koloro |
| `warm-editorial` | Varma neĝblanka fono, serifaj titoloj, terkoloraj akcentaj koloroj |
| `corporate-blue` | Marblua kaj blanka paletro kun profesia tipografio |
| `vibrant-startup` | Brilaj gradientoj, rondigitaj anguloj, moderna senserifa tiparo |
| `classic-blog` | Neŭtralaj grizoj, komforta linialteco, tradicia aranĝa interspacigo |

**Redonas** `{ "success": true, "preset": "minimal-dark" }`

---

## Ĉieaj Stiloj

Kapabloj pri ĉieaj stiloj legas kaj skribas valorojn de theme.json per la WordPress API por Ĉieaj Stiloj, influante ĉiujn blokojn kaj ŝablonojn tra la tuta retejo.

### `get_global_styles`

Redonas la aktualan agordon de ĉieaj stiloj.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `path` | ĉeno | Ne | JSON-montrilo al specifa valoro, ekz. `/color/palette` aŭ `/typography/fontSizes`. Redonas la tutan objekton se ellasita. |

**Redonas** la plenan objekton de ĉieaj stiloj aŭ la valoron ĉe `path`.

---

### `set_global_styles`

Ĝisdatigas unu aŭ pli da valoroj en la agordo de ĉieaj stiloj.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `path` | ĉeno | Jes | JSON-montrilo al la valoro por agordi, ekz. `/color/palette` |
| `value` | iu ajn | Jes | La nova valoro |

**Ekzemplo** — aldoni koloron al la paletro

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Redonas** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Restarigas ĉiujn de agento aplikitajn ŝanĝojn de ĉieaj stiloj, restaŭrante la defaŭltojn de la etoso.

**Parametroj** — neniuj

**Redonas** `{ "success": true }`

---

## Navigaj Menuoj

Kapabloj pri navigaj menuoj kreas kaj administras WordPress navigajn menuojn kaj iliajn erojn.

### `create_menu`

Kreas novan WordPress navigan menuon.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `name` | ĉeno | Jes | Nomo de menuo, ekz. `Primary Navigation` |
| `location` | ĉeno | Ne | Loko de etoso al kiu atribui ĉi tiun menuon, ekz. `primary` |

**Redonas** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Alinomas menuon aŭ reasignas ĝin al loko de etoso.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `menu_id` | entjero | Jes | ID de la menuo ĝisdatigenda |
| `name` | ĉeno | Ne | Nova nomo de menuo |
| `location` | ĉeno | Ne | Loko de etoso por atribui aŭ reasigni |

**Redonas** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Aldonas eron al ekzistanta naviga menuo.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `menu_id` | entjero | Jes | ID de la cela menuo |
| `type` | ĉeno | Jes | Tipo de ero: `custom`, `post_type`, aŭ `taxonomy` |
| `title` | ĉeno | Ne | Etikedo por la menuero (deviga por tipo `custom`) |
| `url` | ĉeno | Ne | URL por eroj `custom` |
| `object_id` | entjero | Ne | Afiŝa ID aŭ termino-ID por eroj `post_type`/`taxonomy` |
| `parent_id` | entjero | Ne | ID de menuero sub kiu nestigi ĉi tiun eron |
| `position` | entjero | Ne | Nul-bazita pozicio en la menuo |

**Redonas** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Forigas eron el naviga menuo.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `item_id` | entjero | Jes | ID de menuero forigenda |

**Redonas** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Listigas ĉiujn WordPress navigajn menuojn, inkluzive iliajn atribuitajn lokojn de etoso.

**Parametroj** — neniuj

**Redonas**

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

## Administrado de Opcioj

Kapabloj pri opcioj legas kaj skribas WordPress opciojn per `get_option` / `update_option`. Enkonstruita sekureca bloklisto malhelpas akcidentan modifon de kritikaj agordoj.

### `get_option`

Legas WordPress opcion.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `option_name` | ĉeno | Jes | La opcia ŝlosilo, ekz. `blogname` |

**Redonas** `{ "option_name": "blogname", "value": "My Site" }`

Redonas eraron se `option_name` estas en la sekureca bloklisto.

---

### `set_option`

Skribas WordPress opcion.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `option_name` | ĉeno | Jes | La opcia ŝlosilo |
| `value` | iu ajn | Jes | La nova valoro (seriigita aŭtomate por tabeloj/objektoj) |
| `autoload` | ĉeno | Ne | `"yes"` aŭ `"no"`. Defaŭlte konservas la ekzistantan agordon de autoload |

Redonas eraron se `option_name` estas en la sekureca bloklisto.

**Redonas** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Forigas WordPress opcion.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `option_name` | string | Jes | La opcia ŝlosilo por forigi |

Redonas eraron se `option_name` estas en la sekureca bloklisto.

**Redonas** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Listigas WordPress opciojn kongruajn kun ŝablono.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `pattern` | string | Ne | SQL LIKE ŝablono por filtri opcinomojn, ekz. `gratis_%`. Redonas ĉiujn opciojn se ellasita (uzu singarde ĉe grandaj datumbazoj). |
| `limit` | integer | Ne | Maksimuma nombro da rezultoj. Defaŭlte `50`, maksimume `500` |

**Redonas**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Enhava Administrado

Enhava Administrado-kapabloj kreas kaj redaktas WordPress afiŝojn kaj paĝojn. Afiŝaj ID-oj estas redonataj por ke postaj paŝoj en plurkapablaj planoj povu referenci la kreitan enhavon.

### `create_post`

Kreas novan WordPress afiŝon, paĝon aŭ propran afiŝtipan enskribon.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `title` | string | Jes | Afiŝa titolo |
| `content` | string | Ne | Afiŝa korpo — akceptas simplan tekston, HTML, aŭ seriigitan blokan markadon |
| `status` | string | Ne | `draft`, `publish`, `pending`, `private`. Defaŭlte `draft` |
| `post_type` | string | Ne | Afiŝtipa identigilo, ekz. `post`, `page`, aŭ ajna registrita CPT. Defaŭlte `post` |
| `excerpt` | string | Ne | Mallonga resumo montrata en arkivoj kaj serĉrezultoj |
| `categories` | array | Ne | Tabelo de kategorinomoj aŭ ID-oj por asigni |
| `tags` | array | Ne | Tabelo de etikednomoj aŭ ID-oj por asigni |
| `author` | integer | Ne | WordPress uzanta ID por agordi kiel la afiŝa aŭtoro. Defaŭltas al la nuna uzanto |
| `date` | string | Ne | Publikiga dato en ISO 8601 formato, ekz. `2026-05-01T09:00:00` |
| `page_template` | string | Ne | Ŝablona dosiero por asigni al ĉi tiu afiŝo aŭ paĝo, ekz. `page-full-width.php`. Signifa nur kiam `post_type` estas `page` aŭ CPT kiu subtenas paĝajn ŝablonojn. |

**Ekzemplo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Redonas** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Ĝisdatigas ekzistantan WordPress afiŝon aŭ paĝon.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `post_id` | integer | Jes | ID de la afiŝo por ĝisdatigi |
| `title` | string | Ne | Nova afiŝa titolo |
| `content` | string | Ne | Nova afiŝa korpo |
| `status` | string | Ne | Nova stato: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ne | Nova eltiraĵo |
| `categories` | array | Ne | Anstataŭigi la plenan kategorian liston per ĉi tiu tabelo de nomoj aŭ ID-oj |
| `tags` | array | Ne | Anstataŭigi la plenan etikedan liston per ĉi tiu tabelo de nomoj aŭ ID-oj |
| `page_template` | string | Ne | Nova ŝablona dosiero por asigni al ĉi tiu afiŝo aŭ paĝo, ekz. `page-full-width.php`. Pasigu malplenan ĉenon por forigi la ŝablonan asignon kaj reveni al la defaŭlto de la theme. |

**Ekzemplo** — ŝanĝi ŝablonon post kreado

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Redonas** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Kreas plurajn afiŝojn per unu sola kapablovoko, reduktante rondirojn dum site-konstruoj aŭ amasa enhava importo. Afiŝoj estas kreataj sinsekve; se unu malsukcesas, la aliaj daŭras kaj la malsukceso estas raportita en la rezultotabelo.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `posts` | array | Jes | Tabelo de afiŝaj objektoj, ĉiu akceptante la samajn parametrojn kiel `create_post` |
| `stop_on_error` | boolean | Ne | Se `true`, ĉesu prilabori post la unua malsukceso. Defaŭlte `false` |

**Ekzemplo**

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

**Redonas**

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

Asignas elstarigitan bildon (afiŝan miniaturobildon) al ekzistanta afiŝo aŭ paĝo. Akceptas ID-on de ekzistanta Media Library aldonaĵo aŭ foran bildan URL; kiam URL estas provizita, la bildo estas elŝutita kaj importita aŭtomate.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `post_id` | integer | Jes | ID de la afiŝo aŭ paĝo por ĝisdatigi |
| `attachment_id` | integer | Ne | ID de ekzistanta Media Library aldonaĵo |
| `url` | string | Ne | Fora bilda URL por importi kaj agordi kiel la elstarigitan bildon |
| `alt_text` | string | Ne | Alternativa teksto por apliki al la aldonaĵo se ĝi estas importita el URL |

Unu el `attachment_id` aŭ `url` devas esti provizita.

**Redonas** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Kreas kontaktformularon uzante la aktivan formularan plugin (Contact Form 7, WPForms, Fluent Forms, aŭ Gravity Forms, depende de tio, kiu estas instalita). Redonas shortcode, kiu povas esti enkorpigita en ajna afiŝo aŭ paĝo.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `title` | string | Jes | Formulara nomo montrata en la administrado de la formulara plugin |
| `fields` | array | Jes | Ordigita listo de formularaj kampoj (vidu Kampan objekton sube) |
| `recipient` | string | Ne | Retpoŝtadreso por ricevi sendaĵojn. Defaŭlte al la WordPress-administra retpoŝto |
| `subject` | string | Ne | Retpoŝta temlinio. Subtenas `[your-name]` kaj `[your-subject]` lokokupilojn kiam oni uzas Contact Form 7 |
| `confirmation_message` | string | Ne | Mesaĝo montrata post sukcesa sendado. Defaŭlte: `"Thank you for your message. We'll be in touch soon."` |

**Kampa objekto**

| Ŝlosilo | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `name` | string | Jes | Interna kampa nomo / maŝina ŝlosilo |
| `label` | string | Jes | Homlegebla etikedo montrata sur la formularo |
| `type` | string | Jes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ne | Ĉu la kampo devas esti plenigita antaŭ sendado. Defaŭlte `false` |
| `options` | array | Ne | Opcioj por kampoj `select`, `checkbox`, kaj `radio` |
| `placeholder` | string | Ne | Lokokupila teksto por tekstotipaj enigoj |

**Ekzemplo**

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

**Redonas**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vida Revizio

Kapabloj de Vida Revizio permesas al la agento kapti ekrankopiojn de aktivaj paĝoj kaj analizi ilin, ebligante aŭtonoman dezajnorevizion, antaŭ/post-komparojn, kaj vidajn regresajn kontrolojn sen postuli ian retumilan etendaĵon.

### `capture_screenshot`

Kaptas ekrankopion de WordPress-paĝo ĉe donita URL uzante servilflankan senkapan retumilon. La bildo estas konservata en la Media Library kaj CDN-URL estas redonata.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `url` | string | Jes | Plena URL de la paĝo por ekrankopii, ekz. `https://example.com/about/` |
| `width` | integer | Ne | Larĝo de la vidujo en pikseloj. Defaŭlte `1280` |
| `height` | integer | Ne | Alto de la vidujo en pikseloj. Defaŭlte `800` |
| `full_page` | boolean | Ne | Kapti la plenan ruleblan paĝon anstataŭ nur la vidujon. Defaŭlte `false` |
| `delay_ms` | integer | Ne | Milisekundoj por atendi post paĝŝarĝo antaŭ kaptado, utila por animita enhavo. Defaŭlte `500` |
| `label` | string | Ne | Homlegebla etikedo konservata kun la aldonaĵo en la Media Library |

**Redonas**

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

Prenas du ekrankopiojn kaj redonas vidan diferencopoentaron plus diferencobildon reliefigantan ŝanĝitajn regionojn. Utila por konfirmi, ke dezajnoŝanĝo produktis la atenditan rezulton aŭ por detekti neintencitajn regresojn.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `before_url` | string | Jes | URL de la paĝo por kapti kiel la "antaŭa" stato |
| `after_url` | string | Jes | URL de la paĝo por kapti kiel la "posta" stato. Povas esti la sama URL se oni komparas tra tempo |
| `width` | integer | Ne | Larĝo de la vidujo por ambaŭ kaptoj. Defaŭlte `1280` |
| `threshold` | float | Ne | Pikseldiferenca sojlo (0.0–1.0). Pikseloj ene de ĉi tiu toleremo estas konsiderataj neŝanĝitaj. Defaŭlte `0.1` |

**Redonas**

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

`diff_score` de `0.0` signifas neniun videblan ŝanĝon; `1.0` signifas ke ĉiu pikselo ŝanĝiĝis.

---

### `review_page_design`

Kaptas ekrankopion de paĝo kaj sendas ĝin al la lingva modelo por vida analizo. Redonas strukturitan takson pri aranĝo, tipografio, koloruzado, kaj alireblecaj zorgoj.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `url` | string | Jes | Plena URL de la paĝo por revizii |
| `focus` | string | Ne | Perkomata listo de reviziareoj por emfazi: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Defaŭlte: ĉiuj areoj |
| `width` | integer | Ne | Larĝo de la vidujo. Defaŭlte `1280` |

**Redonas**

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

## Instalableblaj Kapabloj

La Registro de Instalableblaj Kapabloj permesas al vi etendi la agenton per aldonaj kapablopakaĵoj distribuitaj kiel WordPress plugins. Ĉiu pakaĵo registras unu aŭ pli da kapabloj uzante la norman kapablan API.

### `list_available_abilities`

Redonas la katalogon de kapablopakaĵoj disponeblaj por instalado el la registro.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `category` | string | Ne | Filtri laŭ kategorio: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Redonas**

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

Elŝutas kaj aktivigas kapablopakan plugin de la registro.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `slug` | string | Jes | Slug de kapablopaka plugin |

**Redonas** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Demandas la kapablo-registron por trovi la plej bonan plugin por priskribita uzokazo kaj, laŭvole, instalas ĝin.

**Parametroj**

| Parametro | Tipo | Bezonata | Priskribo |
|---|---|---|---|
| `description` | string | Jes | Naturlingva priskribo de la dezirata funkcieco |
| `install` | boolean | Ne | Se `true`, instalas la rekomenditan plugin tuj. Defaŭlte `false` |

**Ekzemplo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Redonas**

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
