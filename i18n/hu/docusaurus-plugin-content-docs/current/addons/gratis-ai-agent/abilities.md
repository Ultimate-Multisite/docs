---
title: Képességek referenciája
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Képességek referenciája

A képességek azok az atomi műveletek, amelyeket a Gratis AI Agent meghívhat a WordPress telepítéseden. Minden képesség egy regisztrált PHP osztály, amely JSON sémát tesz közzé — az agent futásidőben olvassa ezt a sémát, hogy megértse, milyen paraméterek szükségesek, és mit ad vissza a képesség.

Ez az oldal a Gratis AI Agent v1.9.0 verzióval szállított összes képességet dokumentálja.

---

## Egyedi bejegyzéstípusok

Ezek a képességek az agenten keresztül regisztrált egyedi bejegyzéstípusokat (CPT-ket) kezelik. A regisztrációk a WordPress options táblájában maradnak meg, így túlélik a plugin deaktiválását és újraaktiválását.

### `register_post_type`

Új egyedi bejegyzéstípust regisztrál.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | A bejegyzéstípus kulcsa (legfeljebb 20 karakter, nincs nagybetű, nincs szóköz) |
| `singular_label` | string | Yes | Ember által olvasható egyes számú név, pl. `Portfolio Item` |
| `plural_label` | string | Yes | Ember által olvasható többes számú név, pl. `Portfolio Items` |
| `public` | boolean | No | Nyilvánosan elérhető-e a bejegyzéstípus. Alapértelmezés: `true` |
| `supports` | array | No | Támogatandó funkciók: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Alapértelmezés: `["title","editor"]` |
| `has_archive` | boolean | No | Engedélyezve van-e bejegyzéstípus-archívum oldal. Alapértelmezés: `false` |
| `menu_icon` | string | No | Dashicons osztály vagy URL az admin menü ikonjához. Alapértelmezés: `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug a bejegyzéstípushoz. Alapértelmezés szerint `slug` |

**Példa**

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

**Visszatér** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Visszaadja az agent által regisztrált összes egyedi bejegyzéstípust.

**Paraméterek** — nincs

**Visszatér**

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

Törli egy korábban az agent által regisztrált egyedi bejegyzéstípus regisztrációját. Az ilyen típusú meglévő bejegyzések az adatbázisban maradnak, de a bejegyzéstípuson keresztül már nem érhetők el.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Az eltávolítandó bejegyzéstípus kulcsa |

**Visszatér** `{ "success": true, "slug": "portfolio" }`

---

## Egyedi taxonómiák

Ezek a képességek egyedi taxonómiákat kezelnek. A CPT-khez hasonlóan a taxonómiaregisztrációk is megmaradnak.

### `register_taxonomy`

Új egyedi taxonómiát regisztrál.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | A taxonómia kulcsa (legfeljebb 32 karakter) |
| `singular_label` | string | Yes | Ember által olvasható egyes számú név, pl. `Project Category` |
| `plural_label` | string | Yes | Ember által olvasható többes számú név, pl. `Project Categories` |
| `post_types` | array | Yes | Azoknak a bejegyzéstípusoknak a slugjai, amelyekhez ezt a taxonómiát hozzá kell rendelni |
| `hierarchical` | boolean | No | `true` kategória jellegűhöz, `false` címke jellegűhöz. Alapértelmezés: `true` |
| `public` | boolean | No | Nyilvánosan elérhetők-e a kifejezések. Alapértelmezés: `true` |
| `rewrite_slug` | string | No | URL slug a taxonómiához. Alapértelmezés szerint `slug` |

**Példa**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Visszatér** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Visszaadja az agent által regisztrált összes egyedi taxonómiát.

**Paraméterek** — nincs

**Visszatér**

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

Törli egy korábban az agent által regisztrált egyedi taxonómia regisztrációját.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Az eltávolítandó taxonómia kulcsa |

**Visszatér** `{ "success": true, "slug": "project-category" }`

---

## Dizájnrendszer

A dizájnrendszer-képességek módosítják a WordPress site vizuális megjelenését — az egyedi CSS-től a blokkmintákig és a site logójáig.

### `inject_custom_css`

CSS-t fűz hozzá a site `<head>` részéhez a `wp_add_inline_style` segítségével. A CSS a `gratis_ai_agent_custom_css` optionben tárolódik, és a képesség visszaállításakor tisztán kikerül a sorból.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Beillesztendő érvényes CSS |
| `label` | string | No | Ember által olvasható címke ehhez a CSS-blokkhoz, hibakeresési naplókban használva. Alapértelmezés: `"agent-injected"` |
| `replace` | boolean | No | Ha `true`, lecseréli az összes korábban beillesztett CSS-t. Alapértelmezés: `false` (hozzáfűz) |

**Példa**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Visszatér** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Újrahasználható blokkmintát regisztrál a WordPress mintakönyvtárában.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Mintaazonosító, pl. `gratis/hero-dark` |
| `title` | string | Yes | A szerkesztőben megjelenő, ember által olvasható mintanév |
| `content` | string | Yes | Szerializált blokkjelölés (HTML) a mintához |
| `categories` | array | No | Mintakategória-slugok, pl. `["featured", "hero"]` |
| `description` | string | No | A mintaválasztóban megjelenő rövid leírás |
| `keywords` | array | No | Keresési kulcsszavak |

**Visszatér** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Felsorolja az agent által regisztrált összes blokkmintát.

**Paraméterek** — nincs

**Visszatérési érték**

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

Beállítja a WordPress webhely logóját egy megadott melléklet-ID-ra vagy távoli kép URL-re. Ha URL van megadva, a kép letöltésre kerül és importálódik a Médiatárba.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | Egy meglévő Médiatár-melléklet ID-ja |
| `url` | string | No | Importálandó és logóként beállítandó távoli kép URL |

Az `attachment_id` vagy az `url` egyikét meg kell adni.

**Visszatérési érték** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Alkalmaz egy névvel ellátott szín-/tipográfiai presetet az aktív theme `theme.json` fájljára (vagy `global-styles` beállításaira). A presetek a Gratis AI Agent csapata által karbantartott, gondosan összeállított csomagok.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Presetnév, pl. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Ha `true`, a meglévő értékekkel egyesíti a csere helyett. Alapértelmezett: `false` |

**Elérhető presetek**

| Preset | Description |
|---|---|
| `minimal-dark` | Közel fekete háttér, fehér szöveg, egyetlen kiemelőszín |
| `warm-editorial` | Meleg törtfehér háttér, talpas címsorok, földszínű kiemelőszínek |
| `corporate-blue` | Tengerészkék és fehér paletta professzionális tipográfiával |
| `vibrant-startup` | Élénk színátmenetek, lekerekített sarkok, modern sans-serif betűtípus |
| `classic-blog` | Semleges szürkék, kényelmes sormagasság, hagyományos elrendezési térközök |

**Visszatérési érték** `{ "success": true, "preset": "minimal-dark" }`

---

## Globális stílusok

A Globális stílusok képességei a WordPress Global Styles API-n keresztül olvassák és írják a theme.json értékeit, a webhely egészén minden blokkra és sablonra hatva.

### `get_global_styles`

Visszaadja az aktuális globális stíluskonfigurációt.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer egy konkrét értékhez, pl. `/color/palette` vagy `/typography/fontSizes`. Ha nincs megadva, a teljes objektumot adja vissza. |

**Visszatérési érték** a teljes globális stílusobjektum vagy a `path` értéknél található érték.

---

### `set_global_styles`

Frissít egy vagy több értéket a globális stíluskonfigurációban.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON pointer a beállítandó értékhez, pl. `/color/palette` |
| `value` | any | Yes | Az új érték |

**Példa** — szín hozzáadása a palettához

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Visszatérési érték** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Visszaállítja az összes agent által alkalmazott globálisstílus-módosítást, helyreállítva a theme alapértelmezéseit.

**Paraméterek** — nincs

**Visszatérési érték** `{ "success": true }`

---

## Navigációs menük

A Navigációs menü képességei WordPress navigációs menüket és azok elemeit hozzák létre és kezelik.

### `create_menu`

Új WordPress navigációs menüt hoz létre.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Menü neve, pl. `Primary Navigation` |
| `location` | string | No | Theme-hely, amelyhez ezt a menüt hozzá kell rendelni, pl. `primary` |

**Visszatérési érték** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Átnevez egy menüt, vagy újra hozzárendeli egy theme-helyhez.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | A frissítendő menü ID-ja |
| `name` | string | No | Új menünév |
| `location` | string | No | Hozzárendelendő vagy újra hozzárendelendő theme-hely |

**Visszatérési érték** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Hozzáad egy elemet egy meglévő navigációs menühöz.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | A célmenü ID-ja |
| `type` | string | Yes | Elemtípus: `custom`, `post_type` vagy `taxonomy` |
| `title` | string | No | A menüelem címkéje (`custom` típus esetén kötelező) |
| `url` | string | No | URL a `custom` elemekhez |
| `object_id` | integer | No | Bejegyzés-ID vagy kifejezés-ID a `post_type`/`taxonomy` elemekhez |
| `parent_id` | integer | No | Annak a menüelemnek az ID-ja, amely alá ez az elem beágyazódik |
| `position` | integer | No | Nullától induló pozíció a menüben |

**Visszatérési érték** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Eltávolít egy elemet egy navigációs menüből.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | Az eltávolítandó menüelem ID-ja |

**Visszatérési érték** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Felsorolja az összes WordPress navigációs menüt, beleértve a hozzájuk rendelt theme-helyeket is.

**Paraméterek** — nincs

**Visszatérési érték**

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

## Opciókezelés

Az Opciók képességei WordPress opciókat olvasnak és írnak a `get_option` / `update_option` használatával. Egy beépített biztonsági tiltólista megakadályozza a kritikus beállítások véletlen módosítását.

### `get_option`

Beolvas egy WordPress opciót.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Az opció kulcsa, pl. `blogname` |

**Visszatérési érték** `{ "option_name": "blogname", "value": "My Site" }`

Hibát ad vissza, ha az `option_name` szerepel a biztonsági tiltólistán.

---

### `set_option`

Beír egy WordPress opciót.

**Paraméterek**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Az opció kulcsa |
| `value` | any | Yes | Az új érték (tömbök/objektumok esetén automatikusan szerializálva) |
| `autoload` | string | No | `"yes"` vagy `"no"`. Alapértelmezés szerint megőrzi a meglévő autoload beállítást |

Hibát ad vissza, ha az `option_name` szerepel a biztonsági tiltólistán.

**Visszatérési érték** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Töröl egy WordPress beállítást.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `option_name` | string | Igen | A törlendő beállításkulcs |

Hibát ad vissza, ha az `option_name` szerepel a biztonsági tiltólistán.

**Visszatérési érték** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Listázza a mintára illeszkedő WordPress beállításokat.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `pattern` | string | Nem | SQL LIKE minta a beállításnevek szűréséhez, pl. `gratis_%`. Ha nincs megadva, minden beállítást visszaad (nagy adatbázisokon óvatosan használja). |
| `limit` | integer | Nem | Az eredmények maximális száma. Alapértelmezett `50`, maximum `500` |

**Visszatérési érték**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Tartalomkezelés

A Tartalomkezelés képességei WordPress bejegyzéseket és oldalakat hoznak létre és szerkesztenek. A bejegyzésazonosítók visszaadásra kerülnek, így a többképességes tervek későbbi lépései hivatkozhatnak a létrehozott tartalomra.

### `create_post`

Új WordPress bejegyzést, oldalt vagy egyéni bejegyzéstípus-bejegyzést hoz létre.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `title` | string | Igen | Bejegyzés címe |
| `content` | string | Nem | Bejegyzés törzse — elfogad egyszerű szöveget, HTML-t vagy szerializált blokkjelölést |
| `status` | string | Nem | `draft`, `publish`, `pending`, `private`. Alapértelmezett `draft` |
| `post_type` | string | Nem | Bejegyzéstípus slug, pl. `post`, `page`, vagy bármely regisztrált CPT. Alapértelmezett `post` |
| `excerpt` | string | Nem | Rövid összefoglaló, amely az archívumokban és a keresési eredményekben jelenik meg |
| `categories` | array | Nem | Hozzárendelendő kategórianevek vagy azonosítók tömbje |
| `tags` | array | Nem | Hozzárendelendő címkenevek vagy azonosítók tömbje |
| `author` | integer | Nem | WordPress felhasználói azonosító, amelyet a bejegyzés szerzőjeként kell beállítani. Alapértelmezés szerint az aktuális felhasználó |
| `date` | string | Nem | Közzétételi dátum ISO 8601 formátumban, pl. `2026-05-01T09:00:00` |
| `page_template` | string | Nem | Ehhez a bejegyzéshez vagy oldalhoz hozzárendelendő sablonfájl, pl. `page-full-width.php`. Csak akkor van jelentősége, ha a `post_type` értéke `page`, vagy olyan CPT, amely támogatja az oldalsablonokat. |

**Példa**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Visszatérési érték** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Frissít egy meglévő WordPress bejegyzést vagy oldalt.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `post_id` | integer | Igen | A frissítendő bejegyzés azonosítója |
| `title` | string | Nem | Új bejegyzéscím |
| `content` | string | Nem | Új bejegyzéstörzs |
| `status` | string | Nem | Új állapot: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nem | Új kivonat |
| `categories` | array | Nem | A teljes kategórialistát lecseréli erre a név- vagy azonosítótömbre |
| `tags` | array | Nem | A teljes címkelistát lecseréli erre a név- vagy azonosítótömbre |
| `page_template` | string | Nem | Ehhez a bejegyzéshez vagy oldalhoz hozzárendelendő új sablonfájl, pl. `page-full-width.php`. Üres string átadásával eltávolítható a sablon-hozzárendelés, és visszaállítható a theme alapértelmezése. |

**Példa** — sablon módosítása a létrehozás után

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Visszatérési érték** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Több bejegyzést hoz létre egyetlen képességhívással, csökkentve a körutak számát webhelyépítések vagy tömeges tartalomimport során. A bejegyzések sorban jönnek létre; ha az egyik sikertelen, a többi folytatódik, és a hiba megjelenik az eredménytömbben.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `posts` | array | Igen | Bejegyzésobjektumok tömbje, amelyek mindegyike ugyanazokat a paramétereket fogadja el, mint a `create_post` |
| `stop_on_error` | boolean | Nem | Ha `true`, az első hiba után leállítja a feldolgozást. Alapértelmezett `false` |

**Példa**

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

**Visszatérési érték**

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

Kiemelt képet (bejegyzés bélyegképét) rendel egy meglévő bejegyzéshez vagy oldalhoz. Elfogad egy meglévő Médiatár csatolmányazonosítót vagy egy távoli kép URL-t; ha URL van megadva, a kép automatikusan letöltésre és importálásra kerül.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `post_id` | integer | Igen | A frissítendő bejegyzés vagy oldal azonosítója |
| `attachment_id` | integer | Nem | Egy meglévő Médiatár-csatolmány azonosítója |
| `url` | string | Nem | Importálandó és kiemelt képként beállítandó távoli kép URL |
| `alt_text` | string | Nem | A csatolmányra alkalmazandó alternatív szöveg, ha URL-ből importálják |

Az `attachment_id` vagy az `url` egyikét meg kell adni.

**Visszatérési érték** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Kapcsolati űrlapot hoz létre az aktív űrlapbővítmény használatával (Contact Form 7, WPForms, Fluent Forms vagy Gravity Forms, attól függően, melyik van telepítve). Egy shortcode-ot ad vissza, amely bármely bejegyzésbe vagy oldalba beágyazható.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `title` | string | Igen | Az űrlap plugin admin felületén megjelenő űrlapnév |
| `fields` | array | Igen | Az űrlapmezők rendezett listája (lásd lent a Field objektumot) |
| `recipient` | string | Nem | Az beküldések fogadására szolgáló e-mail-cím. Alapértelmezés szerint a WordPress admin e-mail-címe |
| `subject` | string | Nem | E-mail tárgysora. Contact Form 7 használatakor támogatja a `[your-name]` és `[your-subject]` helyőrzőket |
| `confirmation_message` | string | Nem | Sikeres beküldés után megjelenített üzenet. Alapértelmezett: `"Thank you for your message. We'll be in touch soon."` |

**Field objektum**

| Kulcs | Típus | Kötelező | Leírás |
|---|---|---|---|
| `name` | string | Igen | Belső mezőnév / gépi kulcs |
| `label` | string | Igen | Az űrlapon megjelenő, ember által olvasható címke |
| `type` | string | Igen | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nem | Megadja, hogy a mezőt kötelező-e kitölteni a beküldés előtt. Alapértelmezett: `false` |
| `options` | array | Nem | Opciók a `select`, `checkbox` és `radio` mezőkhöz |
| `placeholder` | string | Nem | Helyőrző szöveg szöveg típusú beviteli mezőkhöz |

**Példa**

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

**Visszatérési érték**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizuális áttekintés

A Visual Review képességek lehetővé teszik, hogy az agent képernyőképeket készítsen élő oldalakról és elemezze azokat, így böngészőbővítmény nélkül is lehetővé válik az önálló dizájnellenőrzés, az előtte/utána összehasonlítás és a vizuális regressziós ellenőrzés.

### `capture_screenshot`

Képernyőképet készít egy WordPress oldalról a megadott URL-en, szerveroldali headless böngésző használatával. A kép a Media Libraryba kerül mentésre, és egy CDN URL kerül visszaadásra.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `url` | string | Igen | A képernyőképezendő oldal teljes URL-je, pl. `https://example.com/about/` |
| `width` | integer | Nem | A nézetablak szélessége pixelben. Alapértelmezett: `1280` |
| `height` | integer | Nem | A nézetablak magassága pixelben. Alapértelmezett: `800` |
| `full_page` | boolean | Nem | A teljes görgethető oldal rögzítése csak a nézetablak helyett. Alapértelmezett: `false` |
| `delay_ms` | integer | Nem | Az oldal betöltése után a rögzítés előtt várandó ezredmásodpercek száma; animált tartalomnál hasznos. Alapértelmezett: `500` |
| `label` | string | Nem | Ember által olvasható címke, amely a csatolmánnyal együtt a Media Libraryban tárolódik |

**Visszatérési érték**

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

Két képernyőképet vesz, és visszaad egy vizuális eltérési pontszámot, valamint egy eltérésképet, amely kiemeli a megváltozott régiókat. Hasznos annak megerősítésére, hogy egy dizájnmódosítás a várt eredményt hozta-e, illetve a nem szándékolt regressziók észlelésére.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `before_url` | string | Igen | Annak az oldalnak az URL-je, amelyet az „előtte” állapotként kell rögzíteni |
| `after_url` | string | Igen | Annak az oldalnak az URL-je, amelyet az „utána” állapotként kell rögzíteni. Lehet ugyanaz az URL, ha időbeli összehasonlítás történik |
| `width` | integer | Nem | A nézetablak szélessége mindkét rögzítéshez. Alapértelmezett: `1280` |
| `threshold` | float | Nem | Pixelkülönbségi küszöbérték (0.0–1.0). Az ezen tűréshatáron belüli pixelek változatlannak számítanak. Alapértelmezett: `0.1` |

**Visszatérési érték**

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

A `diff_score` `0.0` értéke azt jelenti, hogy nincs látható változás; az `1.0` azt jelenti, hogy minden pixel megváltozott.

---

### `review_page_design`

Képernyőképet készít egy oldalról, és elküldi a nyelvi modellnek vizuális elemzésre. Strukturált értékelést ad vissza, amely lefedi az elrendezést, a tipográfiát, a színhasználatot és az akadálymentességi szempontokat.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `url` | string | Igen | Az áttekintendő oldal teljes URL-je |
| `focus` | string | Nem | Vesszővel elválasztott lista a hangsúlyozandó áttekintési területekről: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Alapértelmezett: minden terület |
| `width` | integer | Nem | Nézetablak szélessége. Alapértelmezett: `1280` |

**Visszatérési érték**

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

## Telepíthető képességek

Az Installable Abilities Registry lehetővé teszi, hogy az agent további képességcsomagokkal bővíthető legyen, amelyeket WordPress pluginként terjesztenek. Minden csomag egy vagy több képességet regisztrál a szabványos képesség API használatával.

### `list_available_abilities`

Visszaadja a registryből telepítésre elérhető képességcsomagok katalógusát.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `category` | string | Nem | Szűrés kategória szerint: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Visszatérési érték**

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

Letölt és aktivál egy képességcsomagot a nyilvántartásból.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `slug` | string | Igen | Képességcsomag beépülő modul slugja |

**Visszatérési érték** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Lekérdezi a képesség-nyilvántartást, hogy megtalálja a leírt felhasználási esethez legjobb beépülő modult, és opcionálisan telepíti azt.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `description` | string | Igen | A kívánt funkcionalitás természetes nyelvű leírása |
| `install` | boolean | Nem | Ha `true`, azonnal telepíti az ajánlott beépülő modult. Alapértelmezett: `false` |

**Példa**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Visszatérési érték**

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
