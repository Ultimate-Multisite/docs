---
title: Võimete teatmik
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Võimekuste viide {#abilities-reference}

Võimekused on aatomilised toimingud, mida Gratis AI Agent saab sinu WordPressi paigalduses käivitada. Iga võimekus on registreeritud PHP klass, mis avaldab JSON-skeemi — agent loeb seda skeemi käitusajal, et mõista, millised parameetrid on nõutavad ja mida võimekus tagastab.

See leht dokumenteerib kõik võimekused, mis tulevad kaasa Gratis AI Agent v1.9.0-ga.

---

## Kohandatud postitusetüübid {#custom-post-types}

Need võimekused haldavad kohandatud postitusetüüpe (CPT-sid), mis on registreeritud agendi kaudu. Registreeringud salvestatakse WordPressi options-tabelisse, et need säiliksid plugin deaktiveerimisel ja uuesti aktiveerimisel.

### `register_post_type` {#registerposttype}

Registreerib uue kohandatud postitusetüübi.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `slug` | string | Jah | Postitusetüübi võti (max 20 märki, ei suurtähti, ei tühikuid) |
| `singular_label` | string | Jah | Inimloetav ainsuse nimi, nt `Portfolio Item` |
| `plural_label` | string | Jah | Inimloetav mitmuse nimi, nt `Portfolio Items` |
| `public` | boolean | Ei | Kas postitusetüüp on avalikult ligipääsetav. Vaikimisi `true` |
| `supports` | array | Ei | Toetatavad funktsioonid: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Vaikimisi `["title","editor"]` |
| `has_archive` | boolean | Ei | Kas postitusetüübi arhiivileht on lubatud. Vaikimisi `false` |
| `menu_icon` | string | Ei | Dashicons-klass või URL adminimenüü ikooni jaoks. Vaikimisi `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ei | URL-i slug postitusetüübi jaoks. Vaikimisi `slug` |

**Näide**

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

**Tagastab** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Tagastab kõik agendi registreeritud kohandatud postitusetüübid.

**Parameetrid** — puuduvad

**Tagastab**

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

Eemaldab agendi poolt varem registreeritud kohandatud postitusetüübi registreeringu. Selle tüübi olemasolevad postitused jäävad andmebaasi, kuid pole enam postitusetüübi kaudu ligipääsetavad.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `slug` | string | Jah | Eemaldatav postitusetüübi võti |

**Tagastab** `{ "success": true, "slug": "portfolio" }`

---

## Kohandatud taksonoomiad {#custom-taxonomies}

Need võimekused haldavad kohandatud taksonoomiaid. Nagu CPT-d, salvestatakse ka taksonoomia registreeringud püsivalt.

### `register_taxonomy` {#registertaxonomy}

Registreerib uue kohandatud taksonoomia.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `slug` | string | Jah | Taksonoomia võti (max 32 märki) |
| `singular_label` | string | Jah | Inimloetav ainsuse nimi, nt `Project Category` |
| `plural_label` | string | Jah | Inimloetav mitmuse nimi, nt `Project Categories` |
| `post_types` | array | Jah | Postitusetüüpide slugid, mille külge see taksonoomia tuleb siduda |
| `hierarchical` | boolean | Ei | `true` kategooria-laadi jaoks, `false` sildi-laadi jaoks. Vaikimisi `true` |
| `public` | boolean | Ei | Kas terminid on avalikult ligipääsetavad. Vaikimisi `true` |
| `rewrite_slug` | string | Ei | URL-i slug taksonoomia jaoks. Vaikimisi `slug` |

**Näide**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Tagastab** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Tagastab kõik agendi registreeritud kohandatud taksonoomiad.

**Parameetrid** — puuduvad

**Tagastab**

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

Eemaldab agendi poolt varem registreeritud kohandatud taksonoomia registreeringu.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `slug` | string | Jah | Eemaldatav taksonoomia võti |

**Tagastab** `{ "success": true, "slug": "project-category" }`

---

## Disainisüsteem {#design-system}

Disainisüsteemi võimekused muudavad WordPressi saidi visuaalset esitust — kohandatud CSS-ist plokimustrite ja saidi logoni.

### `inject_custom_css` {#injectcustomcss}

Lisab CSS-i saidi `<head>`-i `wp_add_inline_style` kaudu. CSS salvestatakse `gratis_ai_agent_custom_css` valikusse ja eemaldatakse järjekorrast puhtalt, kui võimekus lähtestatakse.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `css` | string | Jah | Sisestatav kehtiv CSS |
| `label` | string | Ei | Selle CSS-ploki inimloetav silt, mida kasutatakse silumislogides. Vaikimisi `"agent-injected"` |
| `replace` | boolean | Ei | Kui `true`, asendab kogu varem sisestatud CSS-i. Vaikimisi `false` (lisab lõppu) |

**Näide**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Tagastab** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registreerib taaskasutatava plokimustri WordPressi mustriteegis.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `slug` | string | Jah | Mustri identifikaator, nt `gratis/hero-dark` |
| `title` | string | Jah | Inimloetav mustri nimi, mida näidatakse redaktoris |
| `content` | string | Jah | Mustri serialiseeritud plokimärgistus (HTML) |
| `categories` | array | Ei | Mustri kategooriate slugid, nt `["featured", "hero"]` |
| `description` | string | Ei | Lühikirjeldus, mida näidatakse mustrivalijas |
| `keywords` | array | Ei | Otsingu märksõnad |

**Tagastab** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Loetleb kõik agendi registreeritud plokimustrid.

**Parameetrid** — puuduvad

**Tagastab**

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

Määrab WordPress saidi logo antud manuse ID-ks või kaugpildi URL-iks. Kui esitatakse URL, laaditakse pilt alla ja imporditakse Media Librarysse.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `attachment_id` | integer | Ei | Olemasoleva Media Library manuse ID |
| `url` | string | Ei | Imporditava ja logoks määratava kaugpildi URL |

Üks väärtustest `attachment_id` või `url` peab olema esitatud.

**Tagastab** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Rakendab aktiivse teema `theme.json`-ile (või `global-styles`-ile) nimetatud värvi-/tüpograafia eelseadistuse. Eelseadistused on kureeritud paketid, mida haldab Gratis AI Agent meeskond.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `preset` | string | Jah | Eelseadistuse nimi, nt `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ei | Kui `true`, liida olemasolevate väärtustega, mitte ära asenda. Vaikimisi `false` |

**Saadaolevad eelseadistused**

| Eelseadistus | Kirjeldus |
|---|---|
| `minimal-dark` | Peaaegu must taust, valge tekst, üks aktsentvärv |
| `warm-editorial` | Soe murtudvalge taust, serif-pealkirjad, maalähedased aktsentvärvid |
| `corporate-blue` | Tumesinise ja valge palett professionaalse tüpograafiaga |
| `vibrant-startup` | Erksad gradiendid, ümardatud nurgad, modernne sans-serif kirjastiil |
| `classic-blog` | Neutraalsed hallid toonid, mugav reavahe, traditsiooniline paigutuse vahestus |

**Tagastab** `{ "success": true, "preset": "minimal-dark" }`

---

## Globaalsed stiilid {#global-styles}

Globaalsete stiilide võimekused loevad ja kirjutavad theme.json väärtusi WordPress globaalsete stiilide API kaudu, mõjutades kõiki plokke ja malle kogu saidil.

### `get_global_styles` {#getglobalstyles}

Tagastab praeguse globaalsete stiilide konfiguratsiooni.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `path` | string | Ei | JSON-viit konkreetsele väärtusele, nt `/color/palette` või `/typography/fontSizes`. Kui välja jätta, tagastab kogu objekti. |

**Tagastab** täieliku globaalsete stiilide objekti või väärtuse asukohas `path`.

---

### `set_global_styles` {#setglobalstyles}

Uuendab globaalsete stiilide konfiguratsioonis üht või mitut väärtust.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `path` | string | Jah | JSON-viit määratavale väärtusele, nt `/color/palette` |
| `value` | any | Jah | Uus väärtus |

**Näide** — lisa paletti värv

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Tagastab** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Lähtestab kõik agendi rakendatud globaalsete stiilide muudatused, taastades teema vaikeväärtused.

**Parameetrid** — puuduvad

**Tagastab** `{ "success": true }`

---

## Navigatsioonimenüüd {#navigation-menus}

Navigatsioonimenüü võimekused loovad ja haldavad WordPress navigeerimismenüüsid ning nende üksusi.

### `create_menu` {#createmenu}

Loob uue WordPress navigatsioonimenüü.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `name` | string | Jah | Menüü nimi, nt `Primary Navigation` |
| `location` | string | Ei | Teema asukoht, millele see menüü määrata, nt `primary` |

**Tagastab** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Nimetab menüü ümber või määrab selle ümber teema asukohta.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `menu_id` | integer | Jah | Uuendatava menüü ID |
| `name` | string | Ei | Uus menüü nimi |
| `location` | string | Ei | Teema asukoht määramiseks või ümbermääramiseks |

**Tagastab** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Lisab olemasolevasse navigatsioonimenüüsse üksuse.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `menu_id` | integer | Jah | Sihtmenüü ID |
| `type` | string | Jah | Üksuse tüüp: `custom`, `post_type` või `taxonomy` |
| `title` | string | Ei | Menüüüksuse silt (nõutav tüübi `custom` puhul) |
| `url` | string | Ei | URL `custom` üksuste jaoks |
| `object_id` | integer | Ei | Postituse ID või termini ID `post_type`/`taxonomy` üksuste jaoks |
| `parent_id` | integer | Ei | Menüüüksuse ID, mille alla see üksus pesastada |
| `position` | integer | Ei | Nullist algav asukoht menüüs |

**Tagastab** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Eemaldab üksuse navigatsioonimenüüst.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `item_id` | integer | Jah | Eemaldatava menüüüksuse ID |

**Tagastab** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Loetleb kõik WordPress navigatsioonimenüüd, sealhulgas neile määratud teema asukohad.

**Parameetrid** — puuduvad

**Tagastab**

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

## Valikute haldus {#options-management}

Valikute võimekused loevad ja kirjutavad WordPress valikuid `get_option` / `update_option` kaudu. Sisseehitatud ohutusblokeeringute loend hoiab ära kriitiliste seadete juhusliku muutmise.

### `get_option` {#getoption}

Loeb WordPress valiku.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `option_name` | string | Jah | Valiku võti, nt `blogname` |

**Tagastab** `{ "option_name": "blogname", "value": "My Site" }`

Tagastab vea, kui `option_name` on ohutusblokeeringute loendis.

---

### `set_option` {#setoption}

Kirjutab WordPress valiku.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `option_name` | string | Jah | Valiku võti |
| `value` | any | Jah | Uus väärtus (serialiseeritakse massiivide/objektide puhul automaatselt) |
| `autoload` | string | Ei | `"yes"` või `"no"`. Vaikimisi säilitab olemasoleva autoload-seade |

Tagastab vea, kui `option_name` on ohutuse blokeerimisloendis.

**Tagastab** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Kustutab WordPress valiku.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `option_name` | string | Jah | Kustutatava valiku võti |

Tagastab vea, kui `option_name` on ohutuse blokeerimisloendis.

**Tagastab** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Loetleb mustrile vastavad WordPress valikud.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `pattern` | string | Ei | SQL LIKE muster valikunimede filtreerimiseks, nt `gratis_%`. Tagastab kõik valikud, kui see on välja jäetud (kasuta suurte andmebaaside puhul ettevaatusega). |
| `limit` | integer | Ei | Maksimaalne tulemuste arv. Vaikimisi `50`, maksimaalselt `500` |

**Tagastab**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Sisu haldamine {#content-management}

Sisu haldamise võimed loovad ja muudavad WordPress postitusi ja lehti. Postituste ID-d tagastatakse, et mitme võimega plaanide järgmised sammud saaksid loodud sisule viidata.

### `create_post` {#createpost}

Loob uue WordPress postituse, lehe või kohandatud postitusetüübi kirje.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `title` | string | Jah | Postituse pealkiri |
| `content` | string | Ei | Postituse sisu — aktsepteerib lihtteksti, HTML-i või serialiseeritud plokimärgistust |
| `status` | string | Ei | `draft`, `publish`, `pending`, `private`. Vaikimisi `draft` |
| `post_type` | string | Ei | Postitusetüübi slug, nt `post`, `page` või mis tahes registreeritud CPT. Vaikimisi `post` |
| `excerpt` | string | Ei | Lühikokkuvõte, mida näidatakse arhiivides ja otsingutulemustes |
| `categories` | array | Ei | Määratavate kategoorianimede või ID-de massiiv |
| `tags` | array | Ei | Määratavate sildinimede või ID-de massiiv |
| `author` | integer | Ei | WordPress kasutaja ID, mis määratakse postituse autoriks. Vaikimisi praegune kasutaja |
| `date` | string | Ei | Avaldamiskuupäev ISO 8601 vormingus, nt `2026-05-01T09:00:00` |
| `page_template` | string | Ei | Mallifail, mis määratakse sellele postitusele või lehele, nt `page-full-width.php`. Tähenduslik ainult siis, kui `post_type` on `page` või lehemalle toetav CPT. |

**Näide**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Tagastab** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Uuendab olemasolevat WordPress postitust või lehte.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `post_id` | integer | Jah | Uuendatava postituse ID |
| `title` | string | Ei | Uus postituse pealkiri |
| `content` | string | Ei | Uus postituse sisu |
| `status` | string | Ei | Uus olek: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ei | Uus väljavõte |
| `categories` | array | Ei | Asenda täielik kategoorialoend selle nimede või ID-de massiiviga |
| `tags` | array | Ei | Asenda täielik sildiloend selle nimede või ID-de massiiviga |
| `page_template` | string | Ei | Uus mallifail, mis määratakse sellele postitusele või lehele, nt `page-full-width.php`. Malli määrangu eemaldamiseks ja theme vaikeseadele naasmiseks edasta tühi string. |

**Näide** — muuda malli pärast loomist

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Tagastab** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Loob ühe võimekutsega mitu postitust, vähendades edasi-tagasi päringuid saidi ehitamise või sisu hulgiimportimise ajal. Postitused luuakse järjest; kui üks ebaõnnestub, jätkavad teised ning tõrkest teatatakse tulemuste massiivis.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `posts` | array | Jah | Postituseobjektide massiiv, millest igaüks aktsepteerib samu parameetreid nagu `create_post` |
| `stop_on_error` | boolean | Ei | Kui `true`, lõpeta töötlemine pärast esimest ebaõnnestumist. Vaikimisi `false` |

**Näide**

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

**Tagastab**

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

Määrab olemasolevale postitusele või lehele esiletõstetud pildi (postituse pisipildi). Aktsepteerib olemasoleva meediateegi manuse ID-d või kaugpildi URL-i; kui antakse URL, laaditakse pilt alla ja imporditakse automaatselt.

**Parameetrid**

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|---|---|---|---|
| `post_id` | integer | Jah | Uuendatava postituse või lehe ID |
| `attachment_id` | integer | Ei | Olemasoleva meediateegi manuse ID |
| `url` | string | Ei | Kaugpildi URL importimiseks ja esiletõstetud pildiks määramiseks |
| `alt_text` | string | Ei | Alternatiivtekst, mis rakendatakse manusele, kui see imporditakse URL-ist |

Tuleb esitada üks väärtustest `attachment_id` või `url`.

**Tagastab** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Loob kontaktivormi aktiivse vormiplugina abil (Contact Form 7, WPForms, Fluent Forms või Gravity Forms, olenevalt sellest, milline on installitud). Tagastab lühikoodi, mille saab põimida mis tahes postitusse või lehele.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `title` | string | Jah | Vormi nimi, mida näidatakse vormi plugina halduses |
| `fields` | array | Jah | Vormiväljade järjestatud loend (vt allpool välja objekti) |
| `recipient` | string | Ei | E-posti aadress vormi esitamiste vastuvõtmiseks. Vaikimisi WordPressi administraatori e-post |
| `subject` | string | Ei | E-kirja teemarea tekst. Toetab kohatäitjaid `[your-name]` ja `[your-subject]`, kui kasutatakse Contact Form 7-t |
| `confirmation_message` | string | Ei | Sõnum, mida kuvatakse pärast edukat esitamist. Vaikimisi: `"Thank you for your message. We'll be in touch soon."` |

**Välja objekt**

| Võti | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `name` | string | Jah | Sisemine välja nimi / masinvõti |
| `label` | string | Jah | Vormil kuvatav inimloetav silt |
| `type` | string | Jah | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ei | Kas väli peab olema enne esitamist täidetud. Vaikimisi `false` |
| `options` | array | Ei | Valikud väljadele `select`, `checkbox` ja `radio` |
| `placeholder` | string | Ei | Kohatäitetekst tekst-tüüpi sisenditele |

**Näide**

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

**Tagastab**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visuaalne ülevaatus {#visual-review}

Visuaalse ülevaatuse võimalused lasevad agentil jäädvustada reaalajas lehtede ekraanipilte ja neid analüüsida, võimaldades autonoomset disaini ülevaatust, enne/pärast võrdlusi ja visuaalse regressiooni kontrolle ilma ühtegi brauserilaiendit nõudmata.

### `capture_screenshot` {#capturescreenshot}

Jäädvustab serveripoolse headless-brauseri abil WordPressi lehe ekraanipildi antud URL-il. Pilt salvestatakse Media Librarysse ja tagastatakse CDN URL.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `url` | string | Jah | Ekraanipildi tegemiseks mõeldud lehe täielik URL, nt `https://example.com/about/` |
| `width` | integer | Ei | Vaateala laius pikslites. Vaikimisi `1280` |
| `height` | integer | Ei | Vaateala kõrgus pikslites. Vaikimisi `800` |
| `full_page` | boolean | Ei | Jäädvusta ainult vaateala asemel kogu keritav leht. Vaikimisi `false` |
| `delay_ms` | integer | Ei | Millisekundid, mille võrra oodata pärast lehe laadimist enne jäädvustamist; kasulik animeeritud sisu puhul. Vaikimisi `500` |
| `label` | string | Ei | Inimloetav silt, mis salvestatakse manusega Media Librarys |

**Tagastab**

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

Võtab kaks ekraanipilti ja tagastab visuaalse erinevuse skoori ning erinevuste pildi, mis tõstab esile muutunud piirkonnad. Kasulik kinnitamaks, et disainimuudatus andis oodatud tulemuse, või soovimatute regressioonide tuvastamiseks.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `before_url` | string | Jah | Lehe URL, mis jäädvustada olekuna „enne“ |
| `after_url` | string | Jah | Lehe URL, mis jäädvustada olekuna „pärast“. Võib olla sama URL, kui võrreldakse ajas |
| `width` | integer | Ei | Vaateala laius mõlema jäädvustuse jaoks. Vaikimisi `1280` |
| `threshold` | float | Ei | Pikslierinevuse lävi (0,0–1,0). Selle tolerantsi piires olevaid piksleid peetakse muutumatuks. Vaikimisi `0.1` |

**Tagastab**

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

`diff_score` väärtus `0.0` tähendab, et nähtavaid muutusi pole; `1.0` tähendab, et iga piksel muutus.

---

### `review_page_design` {#reviewpagedesign}

Jäädvustab lehe ekraanipildi ja saadab selle visuaalseks analüüsiks keelemudelile. Tagastab struktureeritud hinnangu, mis käsitleb paigutust, tüpograafiat, värvikasutust ja ligipääsetavuse probleeme.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `url` | string | Jah | Ülevaatamiseks mõeldud lehe täielik URL |
| `focus` | string | Ei | Komadega eraldatud loend ülevaatuse valdkondadest, millele rõhku panna: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Vaikimisi: kõik valdkonnad |
| `width` | integer | Ei | Vaateala laius. Vaikimisi `1280` |

**Tagastab**

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

## Installitavad võimalused {#installable-abilities}

Installitavate võimaluste register võimaldab laiendada agenti täiendavate võimaluste pakettidega, mida levitatakse WordPressi pluginatena. Iga pakett registreerib ühe või mitu võimalust standardse võimaluste API abil.

### `list_available_abilities` {#listavailableabilities}

Tagastab registrist installimiseks saadaval olevate võimaluste pakettide kataloogi.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `category` | string | Ei | Filtreeri kategooria järgi: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Tagastab**

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

Laadib alla ja aktiveerib võimekusepaketi registrist.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `slug` | string | Jah | Võimekusepaketi lisamooduli slug |

**Tagastab** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Pärib võimekuste registrist, et leida kirjeldatud kasutusjuhtumi jaoks parim lisamoodul, ja soovi korral installib selle.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `description` | string | Jah | Soovitud funktsionaalsuse loomulikus keeles kirjeldus |
| `install` | boolean | Ei | Kui `true`, installib soovitatud lisamooduli kohe. Vaikeväärtus `false` |

**Näide**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Tagastab**

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
