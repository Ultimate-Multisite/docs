---
title: Referenca sposobnosti
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenca sposobnosti

Sposobnosti su atomske radnje koje Gratis AI Agent može pozvati na vašoj WordPress instalaciji. Svaka sposobnost je registrirana PHP klasa koja izlaže JSON shemu — agent čita tu shemu tijekom izvođenja kako bi razumio koji su parametri potrebni i što sposobnost vraća.

Ova stranica dokumentira sve sposobnosti koje dolaze s Gratis AI Agent v1.9.0.

---

## Prilagođene vrste objava {#custom-post-types}

Ove sposobnosti upravljaju prilagođenim vrstama objava (CPT-ovima) registriranima putem agenta. Registracije se spremaju u WordPress tablicu opcija kako bi preživjele deaktivaciju i ponovnu aktivaciju dodatka.

### `register_post_type` {#registerposttype}

Registrira novu prilagođenu vrstu objave.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ vrste objave (maks. 20 znakova, bez velikih slova, bez razmaka) |
| `singular_label` | string | Da | Čitljiv naziv u jednini, npr. `Portfolio Item` |
| `plural_label` | string | Da | Čitljiv naziv u množini, npr. `Portfolio Items` |
| `public` | boolean | Ne | Je li vrsta objave javno dostupna. Zadano `true` |
| `supports` | array | Ne | Značajke koje treba podržati: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Zadano `["title","editor"]` |
| `has_archive` | boolean | Ne | Je li omogućena arhivska stranica vrste objave. Zadano `false` |
| `menu_icon` | string | Ne | Dashicons klasa ili URL za ikonu administratorskog izbornika. Zadano `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ne | URL slug za vrstu objave. Zadano je `slug` |

**Primjer**

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

**Vraća** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Vraća sve prilagođene vrste objava koje je registrirao agent.

**Parametri** — nema

**Vraća**

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

Odregistrira prilagođenu vrstu objave koju je agent prethodno registrirao. Postojeće objave te vrste ostaju u bazi podataka, ali više nisu dostupne putem te vrste objave.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ vrste objave koji treba ukloniti |

**Vraća** `{ "success": true, "slug": "portfolio" }`

---

## Prilagođene taksonomije {#custom-taxonomies}

Ove sposobnosti upravljaju prilagođenim taksonomijama. Kao i CPT-ovi, registracije taksonomija se spremaju.

### `register_taxonomy` {#registertaxonomy}

Registrira novu prilagođenu taksonomiju.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ taksonomije (maks. 32 znaka) |
| `singular_label` | string | Da | Čitljiv naziv u jednini, npr. `Project Category` |
| `plural_label` | string | Da | Čitljiv naziv u množini, npr. `Project Categories` |
| `post_types` | array | Da | Slugovi vrsta objava kojima ova taksonomija treba biti pridružena |
| `hierarchical` | boolean | Ne | `true` za stil kategorija, `false` za stil oznaka. Zadano `true` |
| `public` | boolean | Ne | Jesu li pojmovi javno dostupni. Zadano `true` |
| `rewrite_slug` | string | Ne | URL slug za taksonomiju. Zadano je `slug` |

**Primjer**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Vraća** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Vraća sve prilagođene taksonomije koje je registrirao agent.

**Parametri** — nema

**Vraća**

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

Odregistrira prilagođenu taksonomiju koju je agent prethodno registrirao.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Ključ taksonomije koji treba ukloniti |

**Vraća** `{ "success": true, "slug": "project-category" }`

---

## Sustav dizajna {#design-system}

Sposobnosti sustava dizajna mijenjaju vizualni prikaz WordPress web-mjesta — od prilagođenog CSS-a do obrazaca blokova i logotipa web-mjesta.

### `inject_custom_css` {#injectcustomcss}

Dodaje CSS u `<head>` web-mjesta putem `wp_add_inline_style`. CSS se pohranjuje u opciji `gratis_ai_agent_custom_css` i čisto se uklanja iz reda učitavanja kada se sposobnost resetira.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `css` | string | Da | Valjani CSS za umetanje |
| `label` | string | Ne | Čitljiva oznaka za ovaj CSS blok, koristi se u zapisnicima za otklanjanje pogrešaka. Zadano `"agent-injected"` |
| `replace` | boolean | Ne | Ako je `true`, zamjenjuje sav prethodno umetnuti CSS. Zadano `false` (dodaje se na kraj) |

**Primjer**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Vraća** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registrira višekratno upotrebljiv obrazac bloka u WordPress biblioteci obrazaca.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Identifikator obrasca, npr. `gratis/hero-dark` |
| `title` | string | Da | Čitljiv naziv obrasca prikazan u uređivaču |
| `content` | string | Da | Serijalizirane oznake bloka (HTML) za obrazac |
| `categories` | array | Ne | Slugovi kategorija obrazaca, npr. `["featured", "hero"]` |
| `description` | string | Ne | Kratak opis prikazan u biraču obrazaca |
| `keywords` | array | Ne | Ključne riječi za pretraživanje |

**Vraća** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Navodi sve obrasce blokova koje je registrirao agent.

**Parametri** — nema

**Vraća**

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

Postavlja logo WordPress web-stranice na zadani ID privitka ili udaljeni URL slike. Kada se navede URL, slika se preuzima i uvozi u Biblioteku medija.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `attachment_id` | integer | Ne | ID postojećeg privitka u Biblioteci medija |
| `url` | string | Ne | URL udaljene slike za uvoz i postavljanje kao logo |

Mora se navesti jedno od `attachment_id` ili `url`.

**Vraća** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Primjenjuje imenovanu unaprijed postavljenu kombinaciju boja/tipografije na `theme.json` aktivne teme (ili `global-styles`). Unaprijed postavljene kombinacije kurirani su paketi koje održava tim Gratis AI Agent.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `preset` | string | Da | Naziv unaprijed postavljene kombinacije, npr. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ne | Ako je `true`, spoji s postojećim vrijednostima umjesto zamjene. Zadano je `false` |

**Dostupne unaprijed postavljene kombinacije**

| Unaprijed postavljena kombinacija | Opis |
|---|---|
| `minimal-dark` | Gotovo crna pozadina, bijeli tekst, jedna naglašena boja |
| `warm-editorial` | Topla prljavobijela pozadina, serifni naslovi, zemljane naglašene boje |
| `corporate-blue` | Tamnoplava i bijela paleta s profesionalnom tipografijom |
| `vibrant-startup` | Svijetli gradijenti, zaobljeni kutovi, moderan sans-serif tip |
| `classic-blog` | Neutralne sive nijanse, ugodna visina retka, tradicionalni razmak rasporeda |

**Vraća** `{ "success": true, "preset": "minimal-dark" }`

---

## Globalni stilovi {#global-styles}

Mogućnosti globalnih stilova čitaju i zapisuju vrijednosti theme.json putem WordPress Global Styles API-ja, utječući na sve blokove i predloške na cijeloj web-stranici.

### `get_global_styles` {#getglobalstyles}

Vraća trenutačnu konfiguraciju globalnih stilova.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `path` | string | Ne | JSON pokazivač na određenu vrijednost, npr. `/color/palette` ili `/typography/fontSizes`. Vraća cijeli objekt ako je izostavljeno. |

**Vraća** puni objekt globalnih stilova ili vrijednost na `path`.

---

### `set_global_styles` {#setglobalstyles}

Ažurira jednu ili više vrijednosti u konfiguraciji globalnih stilova.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `path` | string | Da | JSON pokazivač na vrijednost za postavljanje, npr. `/color/palette` |
| `value` | any | Da | Nova vrijednost |

**Primjer** — dodaj boju u paletu

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Vraća** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Resetira sve promjene globalnih stilova koje je primijenio agent, vraćajući zadane vrijednosti teme.

**Parametri** — nema

**Vraća** `{ "success": true }`

---

## Navigacijski izbornici {#navigation-menus}

Mogućnosti navigacijskog izbornika stvaraju i upravljaju WordPress navigacijskim izbornicima i njihovim stavkama.

### `create_menu` {#createmenu}

Stvara novi WordPress navigacijski izbornik.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `name` | string | Da | Naziv izbornika, npr. `Primary Navigation` |
| `location` | string | Ne | Lokacija teme kojoj se ovaj izbornik dodjeljuje, npr. `primary` |

**Vraća** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Preimenuje izbornik ili ga ponovno dodjeljuje lokaciji teme.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `menu_id` | integer | Da | ID izbornika za ažuriranje |
| `name` | string | Ne | Novi naziv izbornika |
| `location` | string | Ne | Lokacija teme za dodjelu ili ponovnu dodjelu |

**Vraća** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Dodaje stavku u postojeći navigacijski izbornik.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `menu_id` | integer | Da | ID ciljnog izbornika |
| `type` | string | Da | Vrsta stavke: `custom`, `post_type` ili `taxonomy` |
| `title` | string | Ne | Oznaka za stavku izbornika (obavezno za vrstu `custom`) |
| `url` | string | Ne | URL za `custom` stavke |
| `object_id` | integer | Ne | ID objave ili ID pojma za `post_type`/`taxonomy` stavke |
| `parent_id` | integer | Ne | ID stavke izbornika ispod koje se ova stavka ugnježđuje |
| `position` | integer | Ne | Položaj u izborniku s početkom od nule |

**Vraća** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Uklanja stavku iz navigacijskog izbornika.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `item_id` | integer | Da | ID stavke izbornika za uklanjanje |

**Vraća** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Navodi sve WordPress navigacijske izbornike, uključujući njihove dodijeljene lokacije tema.

**Parametri** — nema

**Vraća**

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

## Upravljanje opcijama {#options-management}

Mogućnosti opcija čitaju i zapisuju WordPress opcije putem `get_option` / `update_option`. Ugrađeni sigurnosni popis blokiranja sprječava slučajnu izmjenu kritičnih postavki.

### `get_option` {#getoption}

Čita WordPress opciju.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ opcije, npr. `blogname` |

**Vraća** `{ "option_name": "blogname", "value": "My Site" }`

Vraća pogrešku ako je `option_name` na sigurnosnom popisu blokiranja.

---

### `set_option` {#setoption}

Zapisuje WordPress opciju.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ opcije |
| `value` | any | Da | Nova vrijednost (automatski serijalizirana za nizove/objekte) |
| `autoload` | string | Ne | `"yes"` ili `"no"`. Zadano čuva postojeću postavku autoload |

Vraća pogrešku ako je `option_name` na sigurnosnom popisu blokiranih.

**Vraća** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Briše WordPress opciju.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `option_name` | string | Da | Ključ opcije za brisanje |

Vraća pogrešku ako je `option_name` na sigurnosnom popisu blokiranih.

**Vraća** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Ispisuje WordPress opcije koje odgovaraju uzorku.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `pattern` | string | Ne | SQL LIKE uzorak za filtriranje naziva opcija, npr. `gratis_%`. Vraća sve opcije ako je izostavljeno (koristite oprezno na velikim bazama podataka). |
| `limit` | integer | Ne | Maksimalan broj rezultata. Zadano `50`, najviše `500` |

**Vraća**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Upravljanje sadržajem {#content-management}

Mogućnosti upravljanja sadržajem stvaraju i uređuju WordPress objave i stranice. ID-jevi objava se vraćaju kako bi se sljedeći koraci u planovima s više mogućnosti mogli referencirati na stvoreni sadržaj.

### `create_post` {#createpost}

Stvara novu WordPress objavu, stranicu ili unos prilagođene vrste objave.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `title` | string | Da | Naslov objave |
| `content` | string | Ne | Tijelo objave — prihvaća običan tekst, HTML ili serijaliziranu oznaku blokova |
| `status` | string | Ne | `draft`, `publish`, `pending`, `private`. Zadano `draft` |
| `post_type` | string | Ne | Slug vrste objave, npr. `post`, `page` ili bilo koji registrirani CPT. Zadano `post` |
| `excerpt` | string | Ne | Kratki sažetak prikazan u arhivama i rezultatima pretraživanja |
| `categories` | array | Ne | Niz naziva ili ID-jeva kategorija za dodjelu |
| `tags` | array | Ne | Niz naziva ili ID-jeva oznaka za dodjelu |
| `author` | integer | Ne | WordPress ID korisnika koji će se postaviti kao autor objave. Zadano je trenutačni korisnik |
| `date` | string | Ne | Datum objave u ISO 8601 formatu, npr. `2026-05-01T09:00:00` |
| `page_template` | string | Ne | Datoteka predloška za dodjelu ovoj objavi ili stranici, npr. `page-full-width.php`. Ima značenje samo kada je `post_type` `page` ili CPT koji podržava predloške stranica. |

**Primjer**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Vraća** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ažurira postojeću WordPress objavu ili stranicu.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `post_id` | integer | Da | ID objave za ažuriranje |
| `title` | string | Ne | Novi naslov objave |
| `content` | string | Ne | Novo tijelo objave |
| `status` | string | Ne | Novi status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ne | Novi izvadak |
| `categories` | array | Ne | Zamijenite puni popis kategorija ovim nizom naziva ili ID-jeva |
| `tags` | array | Ne | Zamijenite puni popis oznaka ovim nizom naziva ili ID-jeva |
| `page_template` | string | Ne | Nova datoteka predloška za dodjelu ovoj objavi ili stranici, npr. `page-full-width.php`. Proslijedite prazan string za uklanjanje dodjele predloška i povratak na zadani predložak teme. |

**Primjer** — promjena predloška nakon stvaranja

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Vraća** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Stvara više objava u jednom pozivu mogućnosti, smanjujući broj kružnih putovanja tijekom izrade web-mjesta ili masovnog uvoza sadržaja. Objave se stvaraju redom; ako jedna ne uspije, ostale se nastavljaju, a neuspjeh se prijavljuje u nizu rezultata.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `posts` | array | Da | Niz objekata objava, pri čemu svaki prihvaća iste parametre kao `create_post` |
| `stop_on_error` | boolean | Ne | Ako je `true`, zaustavite obradu nakon prvog neuspjeha. Zadano `false` |

**Primjer**

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

**Vraća**

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

Dodjeljuje istaknutu sliku (sličicu objave) postojećoj objavi ili stranici. Prihvaća ID postojećeg privitka iz Media Library ili URL udaljene slike; kada se navede URL, slika se automatski preuzima i uvozi.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `post_id` | integer | Da | ID objave ili stranice za ažuriranje |
| `attachment_id` | integer | Ne | ID postojećeg privitka iz Media Library |
| `url` | string | Ne | URL udaljene slike za uvoz i postavljanje kao istaknute slike |
| `alt_text` | string | Ne | Alternativni tekst za primjenu na privitak ako je uvezen s URL-a |

Mora se navesti jedno od `attachment_id` ili `url`.

**Vraća** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Stvara kontaktni obrazac pomoću aktivnog plugina za obrasce (Contact Form 7, WPForms, Fluent Forms ili Gravity Forms, ovisno o tome koji je instaliran). Vraća shortcode koji se može ugraditi u bilo koju objavu ili stranicu.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `title` | string | Da | Naziv obrasca prikazan u administratorskom sučelju plugina za obrasce |
| `fields` | array | Da | Uređeni popis polja obrasca (pogledajte objekt polja u nastavku) |
| `recipient` | string | Ne | Adresa e-pošte za primanje podnesaka. Zadano je WordPress administratorska adresa e-pošte |
| `subject` | string | Ne | Redak predmeta e-pošte. Podržava `[your-name]` i `[your-subject]` rezervirana mjesta pri upotrebi Contact Form 7 |
| `confirmation_message` | string | Ne | Poruka prikazana nakon uspješnog slanja. Zadano: `"Thank you for your message. We'll be in touch soon."` |

**Objekt polja**

| Ključ | Tip | Obavezno | Opis |
|---|---|---|---|
| `name` | string | Da | Interni naziv polja / strojni ključ |
| `label` | string | Da | Čitljiva oznaka prikazana na obrascu |
| `type` | string | Da | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ne | Mora li se polje ispuniti prije slanja. Zadano `false` |
| `options` | array | Ne | Opcije za polja `select`, `checkbox` i `radio` |
| `placeholder` | string | Ne | Tekst rezerviranog mjesta za unose tekstualnog tipa |

**Primjer**

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

**Vraća**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizualni pregled {#visual-review}

Mogućnosti vizualnog pregleda omogućuju agentu snimanje snimki zaslona stranica uživo i njihovu analizu, omogućujući autonomni pregled dizajna, usporedbe prije/poslije i provjere vizualne regresije bez potrebe za ikakvim proširenjem preglednika.

### `capture_screenshot` {#capturescreenshot}

Snima snimku zaslona WordPress stranice na zadanom URL-u pomoću poslužiteljskog preglednika bez grafičkog sučelja. Slika se sprema u medijsku biblioteku i vraća se CDN URL.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `url` | string | Da | Puni URL stranice za snimku zaslona, npr. `https://example.com/about/` |
| `width` | integer | Ne | Širina viewporta u pikselima. Zadano `1280` |
| `height` | integer | Ne | Visina viewporta u pikselima. Zadano `800` |
| `full_page` | boolean | Ne | Snimi cijelu stranicu koja se može pomicati umjesto samo viewporta. Zadano `false` |
| `delay_ms` | integer | Ne | Milisekunde čekanja nakon učitavanja stranice prije snimanja, korisno za animirani sadržaj. Zadano `500` |
| `label` | string | Ne | Čitljiva oznaka pohranjena s privitkom u medijskoj biblioteci |

**Vraća**

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

Uzima dvije snimke zaslona i vraća rezultat vizualne razlike te sliku razlike koja ističe promijenjena područja. Korisno za potvrdu da je promjena dizajna proizvela očekivani rezultat ili za otkrivanje neželjenih regresija.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `before_url` | string | Da | URL stranice za snimanje kao stanje "prije" |
| `after_url` | string | Da | URL stranice za snimanje kao stanje "poslije". Može biti isti URL ako se uspoređuje kroz vrijeme |
| `width` | integer | Ne | Širina viewporta za obje snimke. Zadano `1280` |
| `threshold` | float | Ne | Prag razlike piksela (0.0–1.0). Pikseli unutar ove tolerancije smatraju se nepromijenjenima. Zadano `0.1` |

**Vraća**

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

`diff_score` od `0.0` znači da nema vidljive promjene; `1.0` znači da se svaki piksel promijenio.

---

### `review_page_design` {#reviewpagedesign}

Snima snimku zaslona stranice i šalje je jezičnom modelu na vizualnu analizu. Vraća strukturiranu procjenu koja obuhvaća raspored, tipografiju, upotrebu boja i pitanja pristupačnosti.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `url` | string | Da | Puni URL stranice za pregled |
| `focus` | string | Ne | Popis područja pregleda odvojenih zarezima koja treba naglasiti: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Zadano: sva područja |
| `width` | integer | Ne | Širina viewporta. Zadano `1280` |

**Vraća**

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

## Instalabilne mogućnosti {#installable-abilities}

Registar instalabilnih mogućnosti omogućuje proširenje agenta dodatnim paketima mogućnosti distribuiranima kao WordPress plugini. Svaki paket registrira jednu ili više mogućnosti pomoću standardnog API-ja za mogućnosti.

### `list_available_abilities` {#listavailableabilities}

Vraća katalog paketa mogućnosti dostupnih za instalaciju iz registra.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `category` | string | Ne | Filtriraj po kategoriji: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Vraća**

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

Preuzima i aktivira paket sposobnosti iz registra.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `slug` | string | Da | Slug plugina paketa sposobnosti |

**Vraća** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Šalje upit registru sposobnosti kako bi pronašao najbolji plugin za opisani slučaj upotrebe i, po želji, instalira ga.

**Parametri**

| Parametar | Tip | Obavezno | Opis |
|---|---|---|---|
| `description` | string | Da | Opis željene funkcionalnosti prirodnim jezikom |
| `install` | boolean | Ne | Ako je `true`, odmah instalira preporučeni plugin. Zadano `false` |

**Primjer**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Vraća**

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
