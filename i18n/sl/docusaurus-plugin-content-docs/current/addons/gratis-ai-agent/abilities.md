---
title: Referenca zmožnosti
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenca zmožnosti

Zmožnosti so atomska dejanja, ki jih lahko Gratis AI Agent prikliče v vaši WordPress namestitvi. Vsaka zmožnost je registriran PHP razred, ki izpostavi JSON shemo — agent to shemo prebere med izvajanjem, da razume, kateri parametri so zahtevani in kaj zmožnost vrne.

Ta stran dokumentira vse zmožnosti, ki so vključene v Gratis AI Agent v1.9.0.

---

## Vrste objav po meri

Te zmožnosti upravljajo vrste objav po meri (CPT), registrirane prek agenta. Registracije so shranjene v tabelo možnosti WordPress, zato preživijo deaktivacijo in ponovno aktivacijo plugin-a.

### `register_post_type`

Registrira novo vrsto objave po meri.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ključ vrste objave (največ 20 znakov, brez velikih črk, brez presledkov) |
| `singular_label` | string | Yes | Človeku berljivo edninsko ime, npr. `Portfolio Item` |
| `plural_label` | string | Yes | Človeku berljivo množinsko ime, npr. `Portfolio Items` |
| `public` | boolean | No | Ali je vrsta objave javno dostopna. Privzeto `true` |
| `supports` | array | No | Funkcije za podporo: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Privzeto `["title","editor"]` |
| `has_archive` | boolean | No | Ali je omogočena arhivska stran vrste objave. Privzeto `false` |
| `menu_icon` | string | No | Razred Dashicons ali URL za ikono administratorskega menija. Privzeto `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug za vrsto objave. Privzeto je `slug` |

**Primer**

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

**Vrne** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Vrne vse vrste objav po meri, ki jih je registriral agent.

**Parametri** — brez

**Vrne**

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

Odregistrira vrsto objave po meri, ki jo je predhodno registriral agent. Obstoječe objave te vrste ostanejo v podatkovni zbirki, vendar niso več dostopne prek vrste objave.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ključ vrste objave za odstranitev |

**Vrne** `{ "success": true, "slug": "portfolio" }`

---

## Taksonomije po meri

Te zmožnosti upravljajo taksonomije po meri. Tako kot CPT-ji so registracije taksonomij shranjene.

### `register_taxonomy`

Registrira novo taksonomijo po meri.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ključ taksonomije (največ 32 znakov) |
| `singular_label` | string | Yes | Človeku berljivo edninsko ime, npr. `Project Category` |
| `plural_label` | string | Yes | Človeku berljivo množinsko ime, npr. `Project Categories` |
| `post_types` | array | Yes | Slugi vrst objav, na katere naj bo ta taksonomija pripeta |
| `hierarchical` | boolean | No | `true` za slog kategorij, `false` za slog oznak. Privzeto `true` |
| `public` | boolean | No | Ali so izrazi javno dostopni. Privzeto `true` |
| `rewrite_slug` | string | No | URL slug za taksonomijo. Privzeto je `slug` |

**Primer**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Vrne** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Vrne vse taksonomije po meri, ki jih je registriral agent.

**Parametri** — brez

**Vrne**

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

Odregistrira taksonomijo po meri, ki jo je predhodno registriral agent.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ključ taksonomije za odstranitev |

**Vrne** `{ "success": true, "slug": "project-category" }`

---

## Oblikovalski sistem

Zmožnosti oblikovalskega sistema spreminjajo vizualno predstavitev WordPress site-a — od CSS po meri do vzorcev blokov in logotipa site-a.

### `inject_custom_css`

Doda CSS v `<head>` site-a prek `wp_add_inline_style`. CSS je shranjen v možnosti `gratis_ai_agent_custom_css` in se čisto odstrani iz čakalne vrste, ko je zmožnost ponastavljena.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Veljaven CSS za vbrizganje |
| `label` | string | No | Človeku berljiva oznaka za ta blok CSS, uporabljena v dnevnikih za odpravljanje napak. Privzeto `"agent-injected"` |
| `replace` | boolean | No | Če je `true`, zamenja ves predhodno vbrizgan CSS. Privzeto `false` (doda) |

**Primer**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Vrne** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Registrira ponovno uporaben vzorec blokov v knjižnici vzorcev WordPress.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Identifikator vzorca, npr. `gratis/hero-dark` |
| `title` | string | Yes | Človeku berljivo ime vzorca, prikazano v urejevalniku |
| `content` | string | Yes | Serializirana oznaka blokov (HTML) za vzorec |
| `categories` | array | No | Slugi kategorij vzorca, npr. `["featured", "hero"]` |
| `description` | string | No | Kratek opis, prikazan v izbirniku vzorcev |
| `keywords` | array | No | Iskalne ključne besede |

**Vrne** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Navede vse vzorce blokov, ki jih je registriral agent.

**Parametri** — brez

**Vrne**

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

Nastavi logotip WordPress strani na podani ID priloge ali URL oddaljene slike. Ko je naveden URL, se slika prenese in uvozi v Media Library.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID obstoječe priloge Media Library |
| `url` | string | No | URL oddaljene slike za uvoz in nastavitev kot logotip |

Naveden mora biti eden od `attachment_id` ali `url`.

**Vrne** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Uporabi imenovano prednastavitev barv/tipografije za `theme.json` aktivne teme (ali `global-styles`). Prednastavitve so skrbno pripravljeni paketi, ki jih vzdržuje ekipa Gratis AI Agent.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Ime prednastavitve, npr. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Če je `true`, združi z obstoječimi vrednostmi namesto zamenjave. Privzeto `false` |

**Razpoložljive prednastavitve**

| Preset | Description |
|---|---|
| `minimal-dark` | Skoraj črno ozadje, belo besedilo, ena poudarjena barva |
| `warm-editorial` | Toplo skoraj belo ozadje, serifni naslovi, zemeljske poudarjene barve |
| `corporate-blue` | Mornarsko modra in bela paleta s profesionalno tipografijo |
| `vibrant-startup` | Živahni prelivi, zaobljeni koti, moderna sans-serif pisava |
| `classic-blog` | Nevtralne sive barve, udobna višina vrstice, tradicionalni razmiki postavitve |

**Vrne** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Zmožnosti Global Styles berejo in zapisujejo vrednosti theme.json prek WordPress Global Styles API ter vplivajo na vse bloke in predloge na celotnem spletnem mestu.

### `get_global_styles`

Vrne trenutno konfiguracijo globalnih slogov.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON kazalec na določeno vrednost, npr. `/color/palette` ali `/typography/fontSizes`. Če je izpuščeno, vrne celoten objekt. |

**Vrne** celoten objekt globalnih slogov ali vrednost na `path`.

---

### `set_global_styles`

Posodobi eno ali več vrednosti v konfiguraciji globalnih slogov.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON kazalec na vrednost za nastavitev, npr. `/color/palette` |
| `value` | any | Yes | Nova vrednost |

**Primer** — dodaj barvo v paleto

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Vrne** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Ponastavi vse spremembe globalnih slogov, ki jih je uporabil agent, in obnovi privzete nastavitve teme.

**Parametri** — brez

**Vrne** `{ "success": true }`

---

## Navigacijski meniji

Zmožnosti navigacijskega menija ustvarjajo in upravljajo WordPress navigacijske menije ter njihove elemente.

### `create_menu`

Ustvari nov WordPress navigacijski meni.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Ime menija, npr. `Primary Navigation` |
| `location` | string | No | Lokacija teme, ki se dodeli temu meniju, npr. `primary` |

**Vrne** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Preimenuje meni ali ga znova dodeli lokaciji teme.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID menija za posodobitev |
| `name` | string | No | Novo ime menija |
| `location` | string | No | Lokacija teme za dodelitev ali ponovno dodelitev |

**Vrne** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Doda element v obstoječi navigacijski meni.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ciljnega menija |
| `type` | string | Yes | Vrsta elementa: `custom`, `post_type` ali `taxonomy` |
| `title` | string | No | Oznaka za element menija (obvezna za vrsto `custom`) |
| `url` | string | No | URL za elemente `custom` |
| `object_id` | integer | No | ID objave ali ID izraza za elemente `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID elementa menija, pod katerega se ugnezdi ta element |
| `position` | integer | No | Ničelno indeksiran položaj v meniju |

**Vrne** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Odstrani element iz navigacijskega menija.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID elementa menija za odstranitev |

**Vrne** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Navede vse WordPress navigacijske menije, vključno z njihovimi dodeljenimi lokacijami teme.

**Parametri** — brez

**Vrne**

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

## Upravljanje možnosti

Zmožnosti možnosti berejo in zapisujejo WordPress možnosti prek `get_option` / `update_option`. Vgrajen varnostni seznam blokiranih možnosti preprečuje nenamerno spreminjanje kritičnih nastavitev.

### `get_option`

Prebere WordPress možnost.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ključ možnosti, npr. `blogname` |

**Vrne** `{ "option_name": "blogname", "value": "My Site" }`

Vrne napako, če je `option_name` na varnostnem seznamu blokiranih možnosti.

---

### `set_option`

Zapiše WordPress možnost.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ključ možnosti |
| `value` | any | Yes | Nova vrednost (samodejno serializirana za polja/objekte) |
| `autoload` | string | No | `"yes"` ali `"no"`. Privzeto ohrani obstoječo nastavitev autoload |

Vrne napako, če je `option_name` na varnostnem seznamu blokiranih.

**Vrne** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Izbriše možnost WordPress.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ možnosti za izbris |

Vrne napako, če je `option_name` na varnostnem seznamu blokiranih.

**Vrne** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Prikaže seznam možnosti WordPress, ki se ujemajo z vzorcem.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `pattern` | string | Ne | Vzorec SQL LIKE za filtriranje imen možnosti, npr. `gratis_%`. Če je izpuščen, vrne vse možnosti (uporabljajte previdno pri velikih podatkovnih bazah). |
| `limit` | integer | Ne | Največje število rezultatov. Privzeto `50`, največ `500` |

**Vrne**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Upravljanje vsebine

Zmožnosti upravljanja vsebine ustvarjajo in urejajo WordPress prispevke in strani. ID-ji prispevkov se vrnejo, da se lahko nadaljnji koraki v načrtih z več zmožnostmi sklicujejo na ustvarjeno vsebino.

### `create_post`

Ustvari nov WordPress prispevek, stran ali vnos vrste objave po meri.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `title` | string | Da | Naslov prispevka |
| `content` | string | Ne | Telo prispevka — sprejme navadno besedilo, HTML ali serializirano oznako blokov |
| `status` | string | Ne | `draft`, `publish`, `pending`, `private`. Privzeto `draft` |
| `post_type` | string | Ne | Ključ vrste objave, npr. `post`, `page` ali kateri koli registriran CPT. Privzeto `post` |
| `excerpt` | string | Ne | Kratek povzetek, prikazan v arhivih in rezultatih iskanja |
| `categories` | array | Ne | Polje imen ali ID-jev kategorij za dodelitev |
| `tags` | array | Ne | Polje imen ali ID-jev oznak za dodelitev |
| `author` | integer | Ne | ID uporabnika WordPress, ki naj bo nastavljen kot avtor prispevka. Privzeto je trenutni uporabnik |
| `date` | string | Ne | Datum objave v formatu ISO 8601, npr. `2026-05-01T09:00:00` |
| `page_template` | string | Ne | Datoteka predloge, ki se dodeli temu prispevku ali strani, npr. `page-full-width.php`. Smiselno le, kadar je `post_type` `page` ali CPT, ki podpira predloge strani. |

**Primer**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Vrne** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Posodobi obstoječ WordPress prispevek ali stran.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `post_id` | integer | Da | ID prispevka za posodobitev |
| `title` | string | Ne | Nov naslov prispevka |
| `content` | string | Ne | Novo telo prispevka |
| `status` | string | Ne | Novo stanje: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ne | Nov izvleček |
| `categories` | array | Ne | Zamenja celoten seznam kategorij s tem poljem imen ali ID-jev |
| `tags` | array | Ne | Zamenja celoten seznam oznak s tem poljem imen ali ID-jev |
| `page_template` | string | Ne | Nova datoteka predloge, ki se dodeli temu prispevku ali strani, npr. `page-full-width.php`. Posredujte prazen niz, da odstranite dodelitev predloge in se vrnete na privzeto nastavitev theme. |

**Primer** — spremenite predlogo po ustvarjanju

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Vrne** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Ustvari več prispevkov v enem klicu zmožnosti, s čimer zmanjša število povratnih zahtev med izdelavo strani ali množičnim uvozom vsebine. Prispevki se ustvarijo zaporedno; če eden ne uspe, se drugi nadaljujejo, napaka pa je navedena v polju rezultatov.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `posts` | array | Da | Polje objektov prispevkov, pri čemer vsak sprejme enake parametre kot `create_post` |
| `stop_on_error` | boolean | Ne | Če je `true`, ustavi obdelavo po prvi napaki. Privzeto `false` |

**Primer**

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

**Vrne**

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

Dodeli prikazno sliko (sličico prispevka) obstoječemu prispevku ali strani. Sprejme ID obstoječe priloge iz Media Library ali URL oddaljene slike; ko je naveden URL, se slika samodejno prenese in uvozi.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `post_id` | integer | Da | ID prispevka ali strani za posodobitev |
| `attachment_id` | integer | Ne | ID obstoječe priloge iz Media Library |
| `url` | string | Ne | URL oddaljene slike za uvoz in nastavitev kot prikazna slika |
| `alt_text` | string | Ne | Nadomestno besedilo, ki se uporabi za prilogo, če je uvožena iz URL-ja |

Naveden mora biti eden od `attachment_id` ali `url`.

**Vrne** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Ustvari kontaktni obrazec z aktivnim vtičnikom za obrazce (Contact Form 7, WPForms, Fluent Forms ali Gravity Forms, odvisno od tega, kateri je nameščen). Vrne shortcode, ki ga je mogoče vdelati v kateri koli prispevek ali stran.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Ime obrazca, prikazano v skrbništvu plugin za obrazce |
| `fields` | array | Yes | Urejen seznam polj obrazca (glejte objekt polja spodaj) |
| `recipient` | string | No | E-poštni naslov za prejem oddaj. Privzeto je e-poštni naslov skrbnika WordPress |
| `subject` | string | No | Vrstica z zadevo e-pošte. Podpira označbi mesta `[your-name]` in `[your-subject]` pri uporabi Contact Form 7 |
| `confirmation_message` | string | No | Sporočilo, prikazano po uspešni oddaji. Privzeto: `"Thank you for your message. We'll be in touch soon."` |

**Objekt polja**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Notranje ime polja / strojni ključ |
| `label` | string | Yes | Človeku berljiva oznaka, prikazana na obrazcu |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Ali mora biti polje izpolnjeno pred oddajo. Privzeto `false` |
| `options` | array | No | Možnosti za polja `select`, `checkbox` in `radio` |
| `placeholder` | string | No | Besedilo označbe mesta za vnose besedilne vrste |

**Primer**

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

**Vrne**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizualni pregled

Zmožnosti Vizualnega pregleda agentu omogočajo zajem posnetkov zaslona živih strani in njihovo analizo, kar omogoča avtonomen pregled zasnove, primerjave pred/po in preverjanja vizualnih regresij brez potrebe po kakršni koli razširitvi brskalnika.

### `capture_screenshot`

Zajame posnetek zaslona strani WordPress na danem URL-ju z uporabo strežniškega brezglavega brskalnika. Slika se shrani v Media Library in vrne se CDN URL.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Polni URL strani za posnetek zaslona, npr. `https://example.com/about/` |
| `width` | integer | No | Širina vidnega polja v slikovnih pikah. Privzeto `1280` |
| `height` | integer | No | Višina vidnega polja v slikovnih pikah. Privzeto `800` |
| `full_page` | boolean | No | Zajem celotne pomične strani namesto samo vidnega polja. Privzeto `false` |
| `delay_ms` | integer | No | Milisekunde čakanja po nalaganju strani pred zajemom, uporabno za animirano vsebino. Privzeto `500` |
| `label` | string | No | Človeku berljiva oznaka, shranjena s prilogo v Media Library |

**Vrne**

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

Vzame dva posnetka zaslona in vrne oceno vizualne razlike ter sliko razlike, ki poudari spremenjena območja. Uporabno za potrditev, da je sprememba zasnove ustvarila pričakovani rezultat, ali za odkrivanje neželenih regresij.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL strani za zajem kot stanje "pred" |
| `after_url` | string | Yes | URL strani za zajem kot stanje "po". Lahko je isti URL, če primerjate skozi čas |
| `width` | integer | No | Širina vidnega polja za oba zajema. Privzeto `1280` |
| `threshold` | float | No | Prag razlike med slikovnimi pikami (0.0–1.0). Slikovne pike znotraj te tolerance se štejejo za nespremenjene. Privzeto `0.1` |

**Vrne**

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

`diff_score` `0.0` pomeni, da ni vidne spremembe; `1.0` pomeni, da se je spremenila vsaka slikovna pika.

---

### `review_page_design`

Zajame posnetek zaslona strani in ga pošlje jezikovnemu modelu za vizualno analizo. Vrne strukturirano oceno, ki zajema postavitev, tipografijo, uporabo barv in pomisleke glede dostopnosti.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Polni URL strani za pregled |
| `focus` | string | No | Seznam področij pregleda, ločenih z vejicami, ki jih je treba poudariti: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Privzeto: vsa področja |
| `width` | integer | No | Širina vidnega polja. Privzeto `1280` |

**Vrne**

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

## Namestljive zmožnosti

Register namestljivih zmožnosti vam omogoča, da agenta razširite z dodatnimi paketi zmožnosti, distribuiranimi kot WordPress plugin. Vsak paket registrira eno ali več zmožnosti z uporabo standardnega API-ja zmožnosti.

### `list_available_abilities`

Vrne katalog paketov zmožnosti, ki so na voljo za namestitev iz registra.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `category` | string | Ne | Filtriraj po kategoriji: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Vrne**

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

Prenese in aktivira paket zmožnosti iz registra.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Slug plugin paketa zmožnosti |

**Vrne** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Poizveduje po registru zmožnosti, da najde najboljši plugin za opisani primer uporabe, in ga po želji namesti.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `description` | string | Da | Opis želene funkcionalnosti v naravnem jeziku |
| `install` | boolean | Ne | Če je `true`, takoj namesti priporočeni plugin. Privzeto `false` |

**Primer**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Vrne**

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
