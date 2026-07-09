---
title: Gebėjimų žinynas
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Galimybių žinynas

Galimybės yra atominiai veiksmai, kuriuos Gratis AI Agent gali iškviesti jūsų WordPress diegime. Kiekviena galimybė yra registruota PHP klasė, kuri pateikia JSON schemą — agentas ją skaito vykdymo metu, kad suprastų, kokie parametrai reikalingi ir ką galimybė grąžina.

Šiame puslapyje dokumentuojamos visos galimybės, pateikiamos su Gratis AI Agent v1.9.0.

---

## Pasirinktiniai įrašų tipai

Šios galimybės valdo pasirinktinius įrašų tipus (CPT), registruotus per agentą. Registracijos išsaugomos WordPress parinkčių lentelėje, todėl jos išlieka po plugin išjungimo ir pakartotinio įjungimo.

### `register_post_type`

Užregistruoja naują pasirinktinį įrašų tipą.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Taip | Įrašo tipo raktas (daugiausia 20 simbolių, be didžiųjų raidžių, be tarpų) |
| `singular_label` | string | Taip | Žmogui suprantamas vienaskaitos pavadinimas, pvz., `Portfolio Item` |
| `plural_label` | string | Taip | Žmogui suprantamas daugiskaitos pavadinimas, pvz., `Portfolio Items` |
| `public` | boolean | Ne | Ar įrašo tipas yra viešai pasiekiamas. Numatytoji reikšmė `true` |
| `supports` | array | Ne | Palaikomos funkcijos: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Numatytoji reikšmė `["title","editor"]` |
| `has_archive` | boolean | Ne | Ar įjungtas įrašo tipo archyvo puslapis. Numatytoji reikšmė `false` |
| `menu_icon` | string | Ne | Dashicons klasė arba URL administratoriaus meniu piktogramai. Numatytoji reikšmė `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ne | URL slug įrašo tipui. Numatyta reikšmė yra `slug` |

**Pavyzdys**

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

**Grąžina** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Grąžina visus pasirinktinius įrašų tipus, kuriuos užregistravo agentas.

**Parametrai** — nėra

**Grąžina**

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

Išregistruoja pasirinktinį įrašų tipą, kurį anksčiau užregistravo agentas. Esami to tipo įrašai lieka duomenų bazėje, bet nebėra pasiekiami per įrašo tipą.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Taip | Pašalintinas įrašo tipo raktas |

**Grąžina** `{ "success": true, "slug": "portfolio" }`

---

## Pasirinktinės taksonomijos

Šios galimybės valdo pasirinktines taksonomijas. Kaip ir CPT, taksonomijų registracijos yra išsaugomos.

### `register_taxonomy`

Užregistruoja naują pasirinktinę taksonomiją.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Taip | Taksonomijos raktas (daugiausia 32 simboliai) |
| `singular_label` | string | Taip | Žmogui suprantamas vienaskaitos pavadinimas, pvz., `Project Category` |
| `plural_label` | string | Taip | Žmogui suprantamas daugiskaitos pavadinimas, pvz., `Project Categories` |
| `post_types` | array | Taip | Įrašų tipų slug, prie kurių ši taksonomija turi būti priskirta |
| `hierarchical` | boolean | Ne | `true` kategorijų stiliui, `false` žymų stiliui. Numatytoji reikšmė `true` |
| `public` | boolean | Ne | Ar terminai yra viešai pasiekiami. Numatytoji reikšmė `true` |
| `rewrite_slug` | string | Ne | URL slug taksonomijai. Numatyta reikšmė yra `slug` |

**Pavyzdys**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Grąžina** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Grąžina visas pasirinktines taksonomijas, kurias užregistravo agentas.

**Parametrai** — nėra

**Grąžina**

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

Išregistruoja pasirinktinę taksonomiją, kurią anksčiau užregistravo agentas.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Taip | Pašalintinas taksonomijos raktas |

**Grąžina** `{ "success": true, "slug": "project-category" }`

---

## Dizaino sistema

Dizaino sistemos galimybės keičia WordPress site vizualinį pateikimą — nuo pasirinktinio CSS iki blokų šablonų ir site logotipo.

### `inject_custom_css`

Prideda CSS prie site `<head>` per `wp_add_inline_style`. CSS saugomas `gratis_ai_agent_custom_css` parinktyje ir tvarkingai pašalinamas iš eilės, kai galimybė nustatoma iš naujo.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Taip | Tinkamas CSS, kurį reikia įterpti |
| `label` | string | Ne | Žmogui suprantama šio CSS bloko etiketė, naudojama derinimo žurnaluose. Numatytoji reikšmė `"agent-injected"` |
| `replace` | boolean | Ne | Jei `true`, pakeičia visą anksčiau įterptą CSS. Numatytoji reikšmė `false` (prideda) |

**Pavyzdys**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Grąžina** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Užregistruoja daugkartinio naudojimo blokų šabloną WordPress šablonų bibliotekoje.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Taip | Šablono identifikatorius, pvz., `gratis/hero-dark` |
| `title` | string | Taip | Žmogui suprantamas šablono pavadinimas, rodomas redaktoriuje |
| `content` | string | Taip | Serializuota bloko žymėsena (HTML) šablonui |
| `categories` | array | Ne | Šablono kategorijų slug, pvz., `["featured", "hero"]` |
| `description` | string | Ne | Trumpas aprašymas, rodomas šablonų parinkiklyje |
| `keywords` | array | Ne | Paieškos raktažodžiai |

**Grąžina** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Išvardija visus blokų šablonus, kuriuos užregistravo agentas.

**Parametrai** — nėra

**Grąžina**

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

Nustato WordPress svetainės logotipą į nurodytą priedo ID arba nuotolinio paveikslėlio URL. Kai pateikiamas URL, paveikslėlis atsisiunčiamas ir importuojamas į medijos biblioteką.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `attachment_id` | integer | Ne | Esamo medijos bibliotekos priedo ID |
| `url` | string | Ne | Nuotolinio paveikslėlio URL, kurį reikia importuoti ir nustatyti kaip logotipą |

Turi būti pateiktas vienas iš `attachment_id` arba `url`.

**Grąžina** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Pritaiko pavadintą spalvų / tipografijos išankstinį nustatymą aktyvios temos `theme.json` (arba `global-styles`). Išankstiniai nustatymai yra kuruojami rinkiniai, kuriuos prižiūri Gratis AI Agent komanda.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `preset` | string | Taip | Išankstinio nustatymo pavadinimas, pvz., `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ne | Jei `true`, sujungti su esamomis reikšmėmis, o ne pakeisti. Numatytoji reikšmė `false` |

**Galimi išankstiniai nustatymai**

| Išankstinis nustatymas | Aprašymas |
|---|---|
| `minimal-dark` | Beveik juodas fonas, baltas tekstas, viena akcento spalva |
| `warm-editorial` | Šiltas ne visiškai baltas fonas, serif antraštės, žemiškos akcento spalvos |
| `corporate-blue` | Tamsiai mėlynos ir baltos spalvų paletė su profesionalia tipografija |
| `vibrant-startup` | Ryškūs gradientai, suapvalinti kampai, modernus sans-serif šriftas |
| `classic-blog` | Neutralūs pilki atspalviai, patogus eilučių aukštis, tradicinis maketo išdėstymo tarpas |

**Grąžina** `{ "success": true, "preset": "minimal-dark" }`

---

## Visuotiniai stiliai

Visuotinių stilių galimybės skaito ir rašo theme.json reikšmes per WordPress Global Styles API, paveikdamos visus blokus ir šablonus visoje svetainėje.

### `get_global_styles`

Grąžina dabartinę visuotinių stilių konfigūraciją.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `path` | string | Ne | JSON žymeklis į konkrečią reikšmę, pvz., `/color/palette` arba `/typography/fontSizes`. Jei praleista, grąžina visą objektą. |

**Grąžina** visą visuotinių stilių objektą arba reikšmę ties `path`.

---

### `set_global_styles`

Atnaujina vieną ar daugiau reikšmių visuotinių stilių konfigūracijoje.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `path` | string | Taip | JSON žymeklis į reikšmę, kurią reikia nustatyti, pvz., `/color/palette` |
| `value` | any | Taip | Nauja reikšmė |

**Pavyzdys** — pridėti spalvą į paletę

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Grąžina** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Atstato visus agento pritaikytus visuotinių stilių pakeitimus, grąžindamas numatytąsias temos reikšmes.

**Parametrai** — nėra

**Grąžina** `{ "success": true }`

---

## Navigacijos meniu

Navigacijos meniu galimybės kuria ir tvarko WordPress navigacijos meniu bei jų elementus.

### `create_menu`

Sukuria naują WordPress navigacijos meniu.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `name` | string | Taip | Meniu pavadinimas, pvz., `Primary Navigation` |
| `location` | string | Ne | Temos vieta, kuriai priskirti šį meniu, pvz., `primary` |

**Grąžina** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Pervadina meniu arba iš naujo priskiria jį temos vietai.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `menu_id` | integer | Taip | Atnaujintino meniu ID |
| `name` | string | Ne | Naujas meniu pavadinimas |
| `location` | string | Ne | Temos vieta, kuriai priskirti arba iš naujo priskirti |

**Grąžina** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Prideda elementą prie esamo navigacijos meniu.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `menu_id` | integer | Taip | Tikslinio meniu ID |
| `type` | string | Taip | Elemento tipas: `custom`, `post_type` arba `taxonomy` |
| `title` | string | Ne | Meniu elemento etiketė (privaloma `custom` tipui) |
| `url` | string | Ne | URL `custom` elementams |
| `object_id` | integer | Ne | Įrašo ID arba termino ID `post_type` / `taxonomy` elementams |
| `parent_id` | integer | Ne | Meniu elemento ID, po kuriuo įdėti šį elementą |
| `position` | integer | Ne | Nuliu pagrįsta pozicija meniu |

**Grąžina** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Pašalina elementą iš navigacijos meniu.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `item_id` | integer | Taip | Pašalintino meniu elemento ID |

**Grąžina** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Išvardija visus WordPress navigacijos meniu, įskaitant jų priskirtas temos vietas.

**Parametrai** — nėra

**Grąžina**

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

## Parinkčių valdymas

Parinkčių galimybės skaito ir rašo WordPress parinktis per `get_option` / `update_option`. Integruotas saugos blokavimo sąrašas apsaugo nuo netyčinio kritinių nustatymų keitimo.

### `get_option`

Skaito WordPress parinktį.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `option_name` | string | Taip | Parinkties raktas, pvz., `blogname` |

**Grąžina** `{ "option_name": "blogname", "value": "My Site" }`

Grąžina klaidą, jei `option_name` yra saugos blokavimo sąraše.

---

### `set_option`

Įrašo WordPress parinktį.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `option_name` | string | Taip | Parinkties raktas |
| `value` | any | Taip | Nauja reikšmė (masyvams / objektams automatiškai serializuojama) |
| `autoload` | string | Ne | `"yes"` arba `"no"`. Numatytoji parinktis išsaugo esamą autoload nustatymą |

Grąžina klaidą, jei `option_name` yra saugos blokuojamųjų sąraše.

**Grąžina** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Ištrina WordPress parinktį.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `option_name` | string | Taip | Parinkties raktas, kurį reikia ištrinti |

Grąžina klaidą, jei `option_name` yra saugos blokuojamųjų sąraše.

**Grąžina** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Išvardija WordPress parinktis, atitinkančias šabloną.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `pattern` | string | Ne | SQL LIKE šablonas parinkčių pavadinimams filtruoti, pvz., `gratis_%`. Jei praleista, grąžina visas parinktis (didelėse duomenų bazėse naudokite atsargiai). |
| `limit` | integer | Ne | Didžiausias rezultatų skaičius. Numatytoji reikšmė `50`, maks. `500` |

**Grąžina**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Turinio valdymas

Turinio valdymo galimybės kuria ir redaguoja WordPress įrašus bei puslapius. Įrašų ID grąžinami, kad vėlesni veiksmai kelių galimybių planuose galėtų nurodyti sukurtą turinį.

### `create_post`

Sukuria naują WordPress įrašą, puslapį arba pasirinktinio įrašo tipo įrašą.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `title` | string | Taip | Įrašo pavadinimas |
| `content` | string | Ne | Įrašo turinys — priima paprastą tekstą, HTML arba serializuotą blokų žymėjimą |
| `status` | string | Ne | `draft`, `publish`, `pending`, `private`. Numatytoji reikšmė `draft` |
| `post_type` | string | Ne | Įrašo tipo trumpinys, pvz., `post`, `page` arba bet kuris registruotas CPT. Numatytoji reikšmė `post` |
| `excerpt` | string | Ne | Trumpa santrauka, rodoma archyvuose ir paieškos rezultatuose |
| `categories` | array | Ne | Priskirtinų kategorijų pavadinimų arba ID masyvas |
| `tags` | array | Ne | Priskirtinų žymų pavadinimų arba ID masyvas |
| `author` | integer | Ne | WordPress naudotojo ID, kurį nustatyti kaip įrašo autorių. Pagal numatymą naudojamas dabartinis naudotojas |
| `date` | string | Ne | Publikavimo data ISO 8601 formatu, pvz., `2026-05-01T09:00:00` |
| `page_template` | string | Ne | Šablono failas, kurį priskirti šiam įrašui arba puslapiui, pvz., `page-full-width.php`. Prasminga tik tada, kai `post_type` yra `page` arba CPT, palaikantis puslapių šablonus. |

**Pavyzdys**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Grąžina** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Atnaujina esamą WordPress įrašą arba puslapį.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `post_id` | integer | Taip | Atnaujintino įrašo ID |
| `title` | string | Ne | Naujas įrašo pavadinimas |
| `content` | string | Ne | Naujas įrašo turinys |
| `status` | string | Ne | Nauja būsena: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ne | Nauja ištrauka |
| `categories` | array | Ne | Pakeisti visą kategorijų sąrašą šiuo pavadinimų arba ID masyvu |
| `tags` | array | Ne | Pakeisti visą žymų sąrašą šiuo pavadinimų arba ID masyvu |
| `page_template` | string | Ne | Naujas šablono failas, kurį priskirti šiam įrašui arba puslapiui, pvz., `page-full-width.php`. Perduokite tuščią eilutę, kad pašalintumėte šablono priskyrimą ir grįžtumėte prie numatytojo temos šablono. |

**Pavyzdys** — pakeisti šabloną po sukūrimo

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Grąžina** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Sukuria kelis įrašus vienu galimybės iškvietimu, sumažindama užklausų skaičių kuriant svetaines arba masiškai importuojant turinį. Įrašai kuriami iš eilės; jei vieno sukurti nepavyksta, kiti tęsiami, o nesėkmė pateikiama rezultatų masyve.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `posts` | array | Taip | Įrašų objektų masyvas, kuriame kiekvienas priima tuos pačius parametrus kaip `create_post` |
| `stop_on_error` | boolean | Ne | Jei `true`, sustabdyti apdorojimą po pirmos nesėkmės. Numatytoji reikšmė `false` |

**Pavyzdys**

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

**Grąžina**

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

Priskiria pagrindinį paveikslėlį (įrašo miniatiūrą) esamam įrašui arba puslapiui. Priima esamo Media Library priedo ID arba nuotolinio paveikslėlio URL; pateikus URL, paveikslėlis automatiškai atsisiunčiamas ir importuojamas.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `post_id` | integer | Taip | Atnaujintino įrašo arba puslapio ID |
| `attachment_id` | integer | Ne | Esamo Media Library priedo ID |
| `url` | string | Ne | Nuotolinio paveikslėlio URL, kurį importuoti ir nustatyti kaip pagrindinį paveikslėlį |
| `alt_text` | string | Ne | Alternatyvus tekstas, kurį taikyti priedui, jei jis importuojamas iš URL |

Turi būti pateiktas vienas iš `attachment_id` arba `url`.

**Grąžina** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Sukuria kontaktinę formą naudojant aktyvų formų plugin (Contact Form 7, WPForms, Fluent Forms arba Gravity Forms, priklausomai nuo to, kuris įdiegtas). Grąžina shortcode, kurį galima įterpti į bet kurį įrašą arba puslapį.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `title` | string | Taip | Formos pavadinimas, rodomas formos plugin administravimo srityje |
| `fields` | array | Taip | Surikiuotas formos laukų sąrašas (žr. Lauko objektą žemiau) |
| `recipient` | string | Ne | El. pašto adresas pateiktoms formoms gauti. Numatytoji reikšmė – WordPress administratoriaus el. paštas |
| `subject` | string | Ne | El. laiško temos eilutė. Palaiko `[your-name]` ir `[your-subject]` vietaženklius naudojant Contact Form 7 |
| `confirmation_message` | string | Ne | Pranešimas, rodomas po sėkmingo pateikimo. Numatytoji reikšmė: `"Thank you for your message. We'll be in touch soon."` |

**Lauko objektas**

| Raktas | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `name` | string | Taip | Vidinis lauko pavadinimas / mašininis raktas |
| `label` | string | Taip | Žmogui suprantama etiketė, rodoma formoje |
| `type` | string | Taip | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ne | Ar lauką būtina užpildyti prieš pateikimą. Numatytoji reikšmė `false` |
| `options` | array | Ne | Parinktys `select`, `checkbox` ir `radio` laukams |
| `placeholder` | string | Ne | Vietaženklio tekstas teksto tipo įvestims |

**Pavyzdys**

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

**Grąžina**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizualinė peržiūra

Vizualinės peržiūros galimybės leidžia agentui užfiksuoti veikiančių puslapių ekrano kopijas ir jas analizuoti, taip įgalinant autonominę dizaino peržiūrą, palyginimus prieš ir po bei vizualinės regresijos patikras be jokio naršyklės plėtinio.

### `capture_screenshot`

Užfiksuoja WordPress puslapio ekrano kopiją nurodytu URL, naudodama serverio pusėje veikiančią headless naršyklę. Vaizdas išsaugomas Media Library ir grąžinamas CDN URL.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `url` | string | Taip | Visas puslapio, kurio ekrano kopiją reikia padaryti, URL, pvz., `https://example.com/about/` |
| `width` | integer | Ne | Viewport plotis pikseliais. Numatytoji reikšmė `1280` |
| `height` | integer | Ne | Viewport aukštis pikseliais. Numatytoji reikšmė `800` |
| `full_page` | boolean | Ne | Užfiksuoti visą slenkamą puslapį, o ne tik viewport. Numatytoji reikšmė `false` |
| `delay_ms` | integer | Ne | Milisekundės, kiek laukti po puslapio įkėlimo prieš fiksuojant; naudinga animuotam turiniui. Numatytoji reikšmė `500` |
| `label` | string | Ne | Žmogui suprantama etiketė, saugoma kartu su priedu Media Library |

**Grąžina**

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

Paima dvi ekrano kopijas ir grąžina vizualinio skirtumo įvertį bei skirtumo vaizdą, kuriame paryškintos pasikeitusios sritys. Naudinga patvirtinti, kad dizaino pakeitimas davė tikėtiną rezultatą, arba aptikti nenumatytas regresijas.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `before_url` | string | Taip | Puslapio URL, kurį fiksuoti kaip būseną „prieš“ |
| `after_url` | string | Taip | Puslapio URL, kurį fiksuoti kaip būseną „po“. Gali būti tas pats URL, jei lyginama laike |
| `width` | integer | Ne | Viewport plotis abiem fiksavimams. Numatytoji reikšmė `1280` |
| `threshold` | float | Ne | Pikselių skirtumo slenkstis (0.0–1.0). Pikseliai šiame nuokrypyje laikomi nepakitusiais. Numatytoji reikšmė `0.1` |

**Grąžina**

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

`diff_score` reikšmė `0.0` reiškia, kad matomo pokyčio nėra; `1.0` reiškia, kad pasikeitė kiekvienas pikselis.

---

### `review_page_design`

Užfiksuoja puslapio ekrano kopiją ir siunčia ją kalbos modeliui vizualinei analizei. Grąžina struktūruotą vertinimą, apimantį išdėstymą, tipografiją, spalvų naudojimą ir prieinamumo problemas.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `url` | string | Taip | Visas peržiūrimo puslapio URL |
| `focus` | string | Ne | Kableliais atskirtas peržiūros sričių, kurias reikia pabrėžti, sąrašas: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Numatytoji reikšmė: visos sritys |
| `width` | integer | Ne | Viewport plotis. Numatytoji reikšmė `1280` |

**Grąžina**

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

## Diegiamos galimybės

Diegiamų galimybių registras leidžia išplėsti agentą papildomais galimybių paketais, platinamais kaip WordPress pluginai. Kiekvienas paketas registruoja vieną ar daugiau galimybių naudodamas standartinį galimybių API.

### `list_available_abilities`

Grąžina galimybių paketų, kuriuos galima įdiegti iš registro, katalogą.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `category` | string | Ne | Filtruoti pagal kategoriją: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Grąžina**

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

Atsisiunčia ir aktyvuoja galimybių paketą iš registro.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `slug` | string | Taip | Galimybių paketo plugin slug |

**Grąžina** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Pateikia užklausą galimybių registrui, kad rastų geriausią plugin aprašytam naudojimo atvejui, ir, pasirinktinai, jį įdiegia.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `description` | string | Taip | Pageidaujamo funkcionalumo aprašymas natūralia kalba |
| `install` | boolean | Ne | Jei `true`, iš karto įdiegia rekomenduojamą plugin. Numatytoji reikšmė `false` |

**Pavyzdys**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Grąžina**

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
