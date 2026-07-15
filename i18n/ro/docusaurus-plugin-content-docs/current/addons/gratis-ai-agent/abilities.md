---
title: Referință pentru abilități
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referință capabilități

Capabilitățile sunt acțiunile atomice pe care Gratis AI Agent le poate invoca în instalarea ta WordPress. Fiecare capabilitate este o clasă PHP înregistrată care expune o schemă JSON — agentul citește această schemă la rulare pentru a înțelege ce parametri sunt necesari și ce returnează capabilitatea.

Această pagină documentează toate capabilitățile incluse cu Gratis AI Agent v1.9.0.

---

## Tipuri de postări personalizate {#custom-post-types}

Aceste capabilități gestionează tipuri de postări personalizate (CPT-uri) înregistrate prin agent. Înregistrările sunt persistate în tabelul de opțiuni WordPress, astfel încât supraviețuiesc dezactivării și reactivării pluginului.

### `register_post_type` {#registerposttype}

Înregistrează un nou tip de postare personalizată.

**Parametri**

| Parametru | Tip | Necesar | Descriere |
|---|---|---|---|
| `slug` | string | Da | Cheia tipului de postare (maximum 20 de caractere, fără majuscule, fără spații) |
| `singular_label` | string | Da | Nume la singular lizibil pentru oameni, de ex. `Portfolio Item` |
| `plural_label` | string | Da | Nume la plural lizibil pentru oameni, de ex. `Portfolio Items` |
| `public` | boolean | Nu | Dacă tipul de postare este accesibil public. Implicit `true` |
| `supports` | array | Nu | Funcționalități de suportat: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Implicit `["title","editor"]` |
| `has_archive` | boolean | Nu | Dacă este activată o pagină de arhivă pentru tipul de postare. Implicit `false` |
| `menu_icon` | string | Nu | Clasa Dashicons sau URL-ul pentru pictograma meniului de administrare. Implicit `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nu | Slug URL pentru tipul de postare. Implicit este `slug` |

**Exemplu**

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

**Returnează** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Returnează toate tipurile de postări personalizate înregistrate de agent.

**Parametri** — niciunul

**Returnează**

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

Anulează înregistrarea unui tip de postare personalizată înregistrat anterior de agent. Postările existente de acel tip rămân în baza de date, dar nu mai sunt accesibile prin tipul de postare.

**Parametri**

| Parametru | Tip | Necesar | Descriere |
|---|---|---|---|
| `slug` | string | Da | Cheia tipului de postare de eliminat |

**Returnează** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomii personalizate {#custom-taxonomies}

Aceste capabilități gestionează taxonomii personalizate. La fel ca CPT-urile, înregistrările taxonomiilor sunt persistate.

### `register_taxonomy` {#registertaxonomy}

Înregistrează o nouă taxonomie personalizată.

**Parametri**

| Parametru | Tip | Necesar | Descriere |
|---|---|---|---|
| `slug` | string | Da | Cheia taxonomiei (maximum 32 de caractere) |
| `singular_label` | string | Da | Nume la singular lizibil pentru oameni, de ex. `Project Category` |
| `plural_label` | string | Da | Nume la plural lizibil pentru oameni, de ex. `Project Categories` |
| `post_types` | array | Da | Slugurile tipurilor de postări la care ar trebui atașată această taxonomie |
| `hierarchical` | boolean | Nu | `true` pentru stil de categorie, `false` pentru stil de etichetă. Implicit `true` |
| `public` | boolean | Nu | Dacă termenii sunt accesibili public. Implicit `true` |
| `rewrite_slug` | string | Nu | Slug URL pentru taxonomie. Implicit este `slug` |

**Exemplu**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Returnează** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Returnează toate taxonomiile personalizate înregistrate de agent.

**Parametri** — niciunul

**Returnează**

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

Anulează înregistrarea unei taxonomii personalizate înregistrate anterior de agent.

**Parametri**

| Parametru | Tip | Necesar | Descriere |
|---|---|---|---|
| `slug` | string | Da | Cheia taxonomiei de eliminat |

**Returnează** `{ "success": true, "slug": "project-category" }`

---

## Sistem de design {#design-system}

Capabilitățile sistemului de design modifică prezentarea vizuală a site-ului WordPress — de la CSS personalizat la modele de blocuri și sigla site-ului.

### `inject_custom_css` {#injectcustomcss}

Adaugă CSS în `<head>` al site-ului prin `wp_add_inline_style`. CSS este stocat în opțiunea `gratis_ai_agent_custom_css` și scos din coadă curat când capabilitatea este resetată.

**Parametri**

| Parametru | Tip | Necesar | Descriere |
|---|---|---|---|
| `css` | string | Da | CSS valid de injectat |
| `label` | string | Nu | Etichetă lizibilă pentru oameni pentru acest bloc CSS, folosită în jurnalele de depanare. Implicit `"agent-injected"` |
| `replace` | boolean | Nu | Dacă este `true`, înlocuiește tot CSS-ul injectat anterior. Implicit `false` (adaugă) |

**Exemplu**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Returnează** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Înregistrează un model de bloc reutilizabil în biblioteca de modele WordPress.

**Parametri**

| Parametru | Tip | Necesar | Descriere |
|---|---|---|---|
| `slug` | string | Da | Identificatorul modelului, de ex. `gratis/hero-dark` |
| `title` | string | Da | Numele modelului lizibil pentru oameni afișat în editor |
| `content` | string | Da | Marcaj de bloc serializat (HTML) pentru model |
| `categories` | array | Nu | Slugurile categoriilor de modele, de ex. `["featured", "hero"]` |
| `description` | string | Nu | Descriere scurtă afișată în selectorul de modele |
| `keywords` | array | Nu | Cuvinte-cheie de căutare |

**Returnează** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Listează toate modelele de blocuri înregistrate de agent.

**Parametri** — niciunul

**Returnează**

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

Setează logo-ul site-ului WordPress la un ID de atașament dat sau la un URL de imagine la distanță. Când este furnizat un URL, imaginea este descărcată și importată în Biblioteca media.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `attachment_id` | integer | Nu | ID-ul unui atașament existent din Biblioteca media |
| `url` | string | Nu | URL-ul unei imagini la distanță de importat și setat ca logo |

Trebuie furnizat unul dintre `attachment_id` sau `url`.

**Returnează** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aplică o presetare denumită de culoare/tipografie la `theme.json` (sau `global-styles`) al temei active. Presetările sunt pachete curatoriate întreținute de echipa Gratis AI Agent.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `preset` | string | Da | Numele presetării, de ex. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nu | Dacă este `true`, îmbină cu valorile existente în loc să le înlocuiască. Implicit `false` |

**Presetări disponibile**

| Presetare | Descriere |
|---|---|
| `minimal-dark` | Fundal aproape negru, text alb, o singură culoare de accent |
| `warm-editorial` | Fundal alb cald, titluri serif, culori de accent pământii |
| `corporate-blue` | Paletă bleumarin și alb cu tipografie profesională |
| `vibrant-startup` | Gradienturi luminoase, colțuri rotunjite, font sans-serif modern |
| `classic-blog` | Griuri neutre, înălțime confortabilă a rândului, spațiere tradițională a aspectului |

**Returnează** `{ "success": true, "preset": "minimal-dark" }`

---

## Stiluri globale {#global-styles}

Abilitățile pentru Stiluri globale citesc și scriu valori theme.json prin API-ul WordPress Global Styles, afectând toate blocurile și șabloanele la nivelul întregului site.

### `get_global_styles` {#getglobalstyles}

Returnează configurația curentă a stilurilor globale.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `path` | string | Nu | Pointer JSON către o valoare specifică, de ex. `/color/palette` sau `/typography/fontSizes`. Returnează întregul obiect dacă este omis. |

**Returnează** obiectul complet al stilurilor globale sau valoarea de la `path`.

---

### `set_global_styles` {#setglobalstyles}

Actualizează una sau mai multe valori în configurația stilurilor globale.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `path` | string | Da | Pointer JSON către valoarea de setat, de ex. `/color/palette` |
| `value` | any | Da | Noua valoare |

**Exemplu** — adaugă o culoare în paletă

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Returnează** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Resetează toate modificările stilurilor globale aplicate de agent, restaurând valorile implicite ale temei.

**Parametri** — niciunul

**Returnează** `{ "success": true }`

---

## Meniuri de navigare {#navigation-menus}

Abilitățile pentru meniuri de navigare creează și gestionează meniuri de navigare WordPress și elementele acestora.

### `create_menu` {#createmenu}

Creează un nou meniu de navigare WordPress.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `name` | string | Da | Numele meniului, de ex. `Primary Navigation` |
| `location` | string | Nu | Locația temei căreia să i se atribuie acest meniu, de ex. `primary` |

**Returnează** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Redenumește un meniu sau îl reatribuie unei locații a temei.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `menu_id` | integer | Da | ID-ul meniului de actualizat |
| `name` | string | Nu | Noul nume al meniului |
| `location` | string | Nu | Locația temei căreia să i se atribuie sau reatribuie |

**Returnează** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Adaugă un element într-un meniu de navigare existent.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `menu_id` | integer | Da | ID-ul meniului țintă |
| `type` | string | Da | Tipul elementului: `custom`, `post_type` sau `taxonomy` |
| `title` | string | Nu | Etichetă pentru elementul de meniu (obligatorie pentru tipul `custom`) |
| `url` | string | Nu | URL pentru elementele `custom` |
| `object_id` | integer | Nu | ID de articol sau ID de termen pentru elementele `post_type`/`taxonomy` |
| `parent_id` | integer | Nu | ID-ul elementului de meniu sub care se imbrică acest element |
| `position` | integer | Nu | Poziție cu indexare de la zero în meniu |

**Returnează** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Elimină un element dintr-un meniu de navigare.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `item_id` | integer | Da | ID-ul elementului de meniu de eliminat |

**Returnează** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Listează toate meniurile de navigare WordPress, inclusiv locațiile de temă atribuite.

**Parametri** — niciunul

**Returnează**

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

## Gestionarea opțiunilor {#options-management}

Abilitățile pentru opțiuni citesc și scriu opțiuni WordPress prin `get_option` / `update_option`. O listă de blocare de siguranță încorporată previne modificarea accidentală a setărilor critice.

### `get_option` {#getoption}

Citește o opțiune WordPress.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `option_name` | string | Da | Cheia opțiunii, de ex. `blogname` |

**Returnează** `{ "option_name": "blogname", "value": "My Site" }`

Returnează o eroare dacă `option_name` se află pe lista de blocare de siguranță.

---

### `set_option` {#setoption}

Scrie o opțiune WordPress.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `option_name` | string | Da | Cheia opțiunii |
| `value` | any | Da | Noua valoare (serializată automat pentru tablouri/obiecte) |
| `autoload` | string | Nu | `"yes"` sau `"no"`. Implicit păstrează setarea autoload existentă |

Returnează o eroare dacă `option_name` se află pe lista de blocare de siguranță.

**Returnează** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Șterge o opțiune WordPress.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `option_name` | string | Da | Cheia opțiunii de șters |

Returnează o eroare dacă `option_name` se află pe lista de blocare de siguranță.

**Returnează** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Listează opțiunile WordPress care corespund unui tipar.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `pattern` | string | Nu | Tipar SQL LIKE pentru a filtra numele opțiunilor, de ex. `gratis_%`. Returnează toate opțiunile dacă este omis (utilizați cu prudență pe baze de date mari). |
| `limit` | integer | Nu | Numărul maxim de rezultate. Implicit `50`, maxim `500` |

**Returnează**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gestionarea conținutului {#content-management}

Abilitățile de Gestionare a conținutului creează și editează articole și pagini WordPress. ID-urile articolelor sunt returnate, astfel încât pașii ulteriori din planurile cu mai multe abilități să poată referenția conținutul creat.

### `create_post` {#createpost}

Creează un nou articol WordPress, o pagină sau o intrare de tip de articol personalizat.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `title` | string | Da | Titlul articolului |
| `content` | string | Nu | Corpul articolului — acceptă text simplu, HTML sau markup de bloc serializat |
| `status` | string | Nu | `draft`, `publish`, `pending`, `private`. Implicit `draft` |
| `post_type` | string | Nu | Slug-ul tipului de articol, de ex. `post`, `page` sau orice CPT înregistrat. Implicit `post` |
| `excerpt` | string | Nu | Scurt rezumat afișat în arhive și în rezultatele căutării |
| `categories` | array | Nu | Array de nume sau ID-uri de categorii de atribuit |
| `tags` | array | Nu | Array de nume sau ID-uri de etichete de atribuit |
| `author` | integer | Nu | ID-ul utilizatorului WordPress care va fi setat ca autor al articolului. Implicit este utilizatorul curent |
| `date` | string | Nu | Data publicării în format ISO 8601, de ex. `2026-05-01T09:00:00` |
| `page_template` | string | Nu | Fișierul șablon de atribuit acestui articol sau acestei pagini, de ex. `page-full-width.php`. Are sens doar când `post_type` este `page` sau un CPT care acceptă șabloane de pagină. |

**Exemplu**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Returnează** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Actualizează un articol sau o pagină WordPress existentă.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `post_id` | integer | Da | ID-ul articolului de actualizat |
| `title` | string | Nu | Noul titlu al articolului |
| `content` | string | Nu | Noul corp al articolului |
| `status` | string | Nu | Stare nouă: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nu | Nou extras |
| `categories` | array | Nu | Înlocuiește lista completă de categorii cu acest array de nume sau ID-uri |
| `tags` | array | Nu | Înlocuiește lista completă de etichete cu acest array de nume sau ID-uri |
| `page_template` | string | Nu | Noul fișier șablon de atribuit acestui articol sau acestei pagini, de ex. `page-full-width.php`. Transmiteți un șir gol pentru a elimina atribuirea șablonului și a reveni la valoarea implicită a theme-ului. |

**Exemplu** — schimbați șablonul după creare

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Returnează** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Creează mai multe articole într-un singur apel de abilitate, reducând drumurile dus-întors în timpul construirii site-urilor sau al importului de conținut în masă. Articolele sunt create în secvență; dacă unul eșuează, celelalte continuă, iar eșecul este raportat în array-ul de rezultate.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `posts` | array | Da | Array de obiecte de articol, fiecare acceptând aceiași parametri ca `create_post` |
| `stop_on_error` | boolean | Nu | Dacă este `true`, oprește procesarea după primul eșec. Implicit `false` |

**Exemplu**

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

**Returnează**

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

Atribuie o imagine reprezentativă (miniatură de articol) unui articol sau unei pagini existente. Acceptă un ID de atașament existent din Media Library sau un URL de imagine la distanță; când este furnizat un URL, imaginea este descărcată și importată automat.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `post_id` | integer | Da | ID-ul articolului sau paginii de actualizat |
| `attachment_id` | integer | Nu | ID-ul unui atașament existent din Media Library |
| `url` | string | Nu | URL-ul imaginii la distanță de importat și setat ca imagine reprezentativă |
| `alt_text` | string | Nu | Text alternativ de aplicat atașamentului dacă este importat dintr-un URL |

Unul dintre `attachment_id` sau `url` trebuie furnizat.

**Returnează** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Creează un formular de contact folosind pluginul de formulare activ (Contact Form 7, WPForms, Fluent Forms sau Gravity Forms, în funcție de ce este instalat). Returnează un shortcode care poate fi încorporat în orice articol sau pagină.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `title` | string | Da | Numele formularului afișat în admin-ul pluginului de formular |
| `fields` | array | Da | Listă ordonată de câmpuri ale formularului (vezi obiectul Câmp de mai jos) |
| `recipient` | string | Nu | Adresa de email care primește trimiterile. Implicit, emailul de administrator WordPress |
| `subject` | string | Nu | Linia de subiect a emailului. Suportă placeholder-ele `[your-name]` și `[your-subject]` când se folosește Contact Form 7 |
| `confirmation_message` | string | Nu | Mesaj afișat după o trimitere reușită. Implicit: `"Thank you for your message. We'll be in touch soon."` |

**Obiect Câmp**

| Cheie | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `name` | string | Da | Numele intern al câmpului / cheia mașinii |
| `label` | string | Da | Etichetă lizibilă pentru oameni afișată pe formular |
| `type` | string | Da | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nu | Dacă acest câmp trebuie completat înainte de trimitere. Implicit `false` |
| `options` | array | Nu | Opțiuni pentru câmpurile `select`, `checkbox` și `radio` |
| `placeholder` | string | Nu | Text placeholder pentru intrări de tip text |

**Exemplu**

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

**Returnează**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revizuire vizuală {#visual-review}

Capacitățile de Revizuire vizuală permit agentului să captureze capturi de ecran ale paginilor live și să le analizeze, permițând revizuirea autonomă a designului, comparații înainte/după și verificări de regresie vizuală fără a necesita vreo extensie de browser.

### `capture_screenshot` {#capturescreenshot}

Capturează o captură de ecran a unei pagini WordPress la un URL dat folosind un browser headless pe partea de server. Imaginea este salvată în Media Library și este returnat un URL CDN.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `url` | string | Da | URL-ul complet al paginii pentru captură de ecran, de ex. `https://example.com/about/` |
| `width` | integer | Nu | Lățimea viewport-ului în pixeli. Implicit `1280` |
| `height` | integer | Nu | Înălțimea viewport-ului în pixeli. Implicit `800` |
| `full_page` | boolean | Nu | Capturează întreaga pagină derulabilă în loc de doar viewport-ul. Implicit `false` |
| `delay_ms` | integer | Nu | Milisecunde de așteptat după încărcarea paginii înainte de capturare, util pentru conținut animat. Implicit `500` |
| `label` | string | Nu | Etichetă lizibilă pentru oameni stocată cu atașamentul în Media Library |

**Returnează**

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

Preia două capturi de ecran și returnează un scor de diferență vizuală plus o imagine diff care evidențiază regiunile modificate. Util pentru confirmarea faptului că o modificare de design a produs rezultatul așteptat sau pentru detectarea regresiilor neintenționate.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `before_url` | string | Da | URL-ul paginii de capturat ca stare „înainte” |
| `after_url` | string | Da | URL-ul paginii de capturat ca stare „după”. Poate fi același URL dacă se compară în timp |
| `width` | integer | Nu | Lățimea viewport-ului pentru ambele capturi. Implicit `1280` |
| `threshold` | float | Nu | Prag de diferență între pixeli (0.0–1.0). Pixelii din această toleranță sunt considerați neschimbați. Implicit `0.1` |

**Returnează**

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

Un `diff_score` de `0.0` înseamnă nicio schimbare vizibilă; `1.0` înseamnă că fiecare pixel s-a schimbat.

---

### `review_page_design` {#reviewpagedesign}

Capturează o captură de ecran a unei pagini și o trimite modelului lingvistic pentru analiză vizuală. Returnează o evaluare structurată care acoperă layout-ul, tipografia, utilizarea culorilor și preocupările de accesibilitate.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `url` | string | Da | URL-ul complet al paginii de revizuit |
| `focus` | string | Nu | Listă separată prin virgule a zonelor de revizuire de accentuat: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Implicit: toate zonele |
| `width` | integer | Nu | Lățimea viewport-ului. Implicit `1280` |

**Returnează**

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

## Capacități instalabile {#installable-abilities}

Registrul de Capacități instalabile îți permite să extinzi agentul cu pachete de capacități suplimentare distribuite ca pluginuri WordPress. Fiecare pachet înregistrează una sau mai multe capacități folosind API-ul standard de capacități.

### `list_available_abilities` {#listavailableabilities}

Returnează catalogul pachetelor de capacități disponibile pentru instalare din registru.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `category` | string | Nu | Filtrează după categorie: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Returnează**

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

Descarcă și activează un pachet de abilități din registru.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `slug` | string | Da | Slug-ul pluginului pachetului de abilități |

**Returnează** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Interoghează registrul de abilități pentru a găsi cel mai bun plugin pentru un caz de utilizare descris și, opțional, îl instalează.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `description` | string | Da | Descriere în limbaj natural a funcționalității dorite |
| `install` | boolean | Nu | Dacă este `true`, instalează imediat pluginul recomandat. Implicit `false` |

**Exemplu**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Returnează**

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
