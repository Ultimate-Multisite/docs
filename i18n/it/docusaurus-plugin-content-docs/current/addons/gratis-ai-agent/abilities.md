---
title: Riferimento delle abilità
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Riferimento delle abilità {#abilities-reference}

Le abilità sono le azioni atomiche che Gratis AI Agent può invocare sulla tua installazione WordPress. Ogni abilità è una classe PHP registrata che espone uno schema JSON — l’agente legge questo schema in fase di esecuzione per capire quali parametri sono richiesti e cosa restituisce l’abilità.

Questa pagina documenta tutte le abilità incluse con Gratis AI Agent v1.9.0.

---

## Tipi di post personalizzati {#custom-post-types}

Queste abilità gestiscono tipi di post personalizzati (CPT) registrati tramite l’agente. Le registrazioni vengono salvate nella tabella delle opzioni di WordPress, così sopravvivono alla disattivazione e riattivazione del plugin.

### `register_post_type` {#registerposttype}

Registra un nuovo tipo di post personalizzato.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `slug` | string | Sì | La chiave del tipo di post (massimo 20 caratteri, nessuna maiuscola, nessuno spazio) |
| `singular_label` | string | Sì | Nome singolare leggibile, ad es. `Portfolio Item` |
| `plural_label` | string | Sì | Nome plurale leggibile, ad es. `Portfolio Items` |
| `public` | boolean | No | Se il tipo di post è accessibile pubblicamente. Predefinito `true` |
| `supports` | array | No | Funzionalità da supportare: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predefinito `["title","editor"]` |
| `has_archive` | boolean | No | Se è abilitata una pagina di archivio per il tipo di post. Predefinito `false` |
| `menu_icon` | string | No | Classe Dashicons o URL per l’icona del menu di amministrazione. Predefinito `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Slug URL per il tipo di post. Predefinito su `slug` |

**Esempio**

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

**Restituisce** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Restituisce tutti i tipi di post personalizzati registrati dall’agente.

**Parametri** — nessuno

**Restituisce**

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

Annulla la registrazione di un tipo di post personalizzato precedentemente registrato dall’agente. I post esistenti di quel tipo rimangono nel database ma non sono più accessibili tramite il tipo di post.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `slug` | string | Sì | La chiave del tipo di post da rimuovere |

**Restituisce** `{ "success": true, "slug": "portfolio" }`

---

## Tassonomie personalizzate {#custom-taxonomies}

Queste abilità gestiscono tassonomie personalizzate. Come i CPT, le registrazioni delle tassonomie vengono salvate.

### `register_taxonomy` {#registertaxonomy}

Registra una nuova tassonomia personalizzata.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `slug` | string | Sì | La chiave della tassonomia (massimo 32 caratteri) |
| `singular_label` | string | Sì | Nome singolare leggibile, ad es. `Project Category` |
| `plural_label` | string | Sì | Nome plurale leggibile, ad es. `Project Categories` |
| `post_types` | array | Sì | Slug dei tipi di post a cui questa tassonomia deve essere collegata |
| `hierarchical` | boolean | No | `true` per stile categoria, `false` per stile tag. Predefinito `true` |
| `public` | boolean | No | Se i termini sono accessibili pubblicamente. Predefinito `true` |
| `rewrite_slug` | string | No | Slug URL per la tassonomia. Predefinito su `slug` |

**Esempio**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Restituisce** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Restituisce tutte le tassonomie personalizzate registrate dall’agente.

**Parametri** — nessuno

**Restituisce**

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

Annulla la registrazione di una tassonomia personalizzata precedentemente registrata dall’agente.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `slug` | string | Sì | La chiave della tassonomia da rimuovere |

**Restituisce** `{ "success": true, "slug": "project-category" }`

---

## Sistema di design {#design-system}

Le abilità del sistema di design modificano la presentazione visiva del sito WordPress — dal CSS personalizzato ai pattern di blocchi e al logo del sito.

### `inject_custom_css` {#injectcustomcss}

Aggiunge CSS al `<head>` del sito tramite `wp_add_inline_style`. Il CSS viene memorizzato nell’opzione `gratis_ai_agent_custom_css` e rimosso dalla coda in modo pulito quando l’abilità viene reimpostata.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `css` | string | Sì | CSS valido da iniettare |
| `label` | string | No | Etichetta leggibile per questo blocco CSS, usata nei log di debug. Predefinito `"agent-injected"` |
| `replace` | boolean | No | Se `true`, sostituisce tutto il CSS precedentemente iniettato. Predefinito `false` (aggiunge) |

**Esempio**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Restituisce** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registra un pattern di blocchi riutilizzabile nella libreria dei pattern di WordPress.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `slug` | string | Sì | Identificatore del pattern, ad es. `gratis/hero-dark` |
| `title` | string | Sì | Nome del pattern leggibile mostrato nell’editor |
| `content` | string | Sì | Markup di blocchi serializzato (HTML) per il pattern |
| `categories` | array | No | Slug delle categorie di pattern, ad es. `["featured", "hero"]` |
| `description` | string | No | Breve descrizione mostrata nel selettore di pattern |
| `keywords` | array | No | Parole chiave di ricerca |

**Restituisce** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Elenca tutti i pattern di blocchi registrati dall’agente.

**Parametri** — nessuno

**Restituisce**

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

Imposta il logo del sito WordPress su un dato ID allegato o su un URL di immagine remoto. Quando viene fornito un URL, l'immagine viene scaricata e importata nella Media Library.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `attachment_id` | integer | No | ID di un allegato esistente della Media Library |
| `url` | string | No | URL di immagine remoto da importare e impostare come logo |

È necessario fornire uno tra `attachment_id` o `url`.

**Restituisce** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Applica un preset denominato di colore/tipografia al `theme.json` (o `global-styles`) del theme attivo. I preset sono pacchetti curati mantenuti dal team di Gratis AI Agent.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `preset` | string | Sì | Nome del preset, ad es. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Se `true`, unisce ai valori esistenti invece di sostituirli. Predefinito `false` |

**Preset disponibili**

| Preset | Descrizione |
|---|---|
| `minimal-dark` | Sfondo quasi nero, testo bianco, un unico colore di accento |
| `warm-editorial` | Sfondo caldo bianco sporco, titoli serif, colori di accento terrosi |
| `corporate-blue` | Palette blu navy e bianca con tipografia professionale |
| `vibrant-startup` | Gradienti vivaci, angoli arrotondati, carattere sans-serif moderno |
| `classic-blog` | Grigi neutri, altezza di riga confortevole, spaziatura del layout tradizionale |

**Restituisce** `{ "success": true, "preset": "minimal-dark" }`

---

## Stili globali {#global-styles}

Le capacità degli Stili globali leggono e scrivono valori di theme.json tramite la WordPress Global Styles API, influenzando tutti i blocchi e i template nell'intero sito.

### `get_global_styles` {#getglobalstyles}

Restituisce la configurazione corrente degli stili globali.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `path` | string | No | Puntatore JSON a un valore specifico, ad es. `/color/palette` o `/typography/fontSizes`. Restituisce l'intero oggetto se omesso. |

**Restituisce** l'oggetto completo degli stili globali o il valore in `path`.

---

### `set_global_styles` {#setglobalstyles}

Aggiorna uno o più valori nella configurazione degli stili globali.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `path` | string | Sì | Puntatore JSON al valore da impostare, ad es. `/color/palette` |
| `value` | any | Sì | Il nuovo valore |

**Esempio** — aggiungere un colore alla palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Restituisce** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Reimposta tutte le modifiche agli stili globali applicate dall'agent, ripristinando i valori predefiniti del theme.

**Parametri** — nessuno

**Restituisce** `{ "success": true }`

---

## Menu di navigazione {#navigation-menus}

Le capacità dei menu di navigazione creano e gestiscono i menu di navigazione WordPress e i relativi elementi.

### `create_menu` {#createmenu}

Crea un nuovo menu di navigazione WordPress.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `name` | string | Sì | Nome del menu, ad es. `Primary Navigation` |
| `location` | string | No | Posizione del theme a cui assegnare questo menu, ad es. `primary` |

**Restituisce** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Rinomina un menu o lo riassegna a una posizione del theme.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `menu_id` | integer | Sì | ID del menu da aggiornare |
| `name` | string | No | Nuovo nome del menu |
| `location` | string | No | Posizione del theme da assegnare o riassegnare |

**Restituisce** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Aggiunge un elemento a un menu di navigazione esistente.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `menu_id` | integer | Sì | ID del menu di destinazione |
| `type` | string | Sì | Tipo di elemento: `custom`, `post_type` o `taxonomy` |
| `title` | string | No | Etichetta per l'elemento del menu (richiesta per il tipo `custom`) |
| `url` | string | No | URL per gli elementi `custom` |
| `object_id` | integer | No | ID del post o ID del termine per elementi `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID dell'elemento del menu sotto cui annidare questo elemento |
| `position` | integer | No | Posizione a base zero nel menu |

**Restituisce** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Rimuove un elemento da un menu di navigazione.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `item_id` | integer | Sì | ID dell'elemento del menu da rimuovere |

**Restituisce** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Elenca tutti i menu di navigazione WordPress, incluse le posizioni del theme assegnate.

**Parametri** — nessuno

**Restituisce**

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

## Gestione delle opzioni {#options-management}

Le capacità delle opzioni leggono e scrivono le opzioni WordPress tramite `get_option` / `update_option`. Una blocklist di sicurezza integrata impedisce la modifica accidentale di impostazioni critiche.

### `get_option` {#getoption}

Legge un'opzione WordPress.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `option_name` | string | Sì | La chiave dell'opzione, ad es. `blogname` |

**Restituisce** `{ "option_name": "blogname", "value": "My Site" }`

Restituisce un errore se `option_name` è nella blocklist di sicurezza.

---

### `set_option` {#setoption}

Scrive un'opzione WordPress.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `option_name` | string | Sì | La chiave dell'opzione |
| `value` | any | Sì | Il nuovo valore (serializzato automaticamente per array/oggetti) |
| `autoload` | string | No | `"yes"` o `"no"`. Il valore predefinito conserva l'impostazione autoload esistente |

Restituisce un errore se `option_name` è nella blocklist di sicurezza.

**Restituisce** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Elimina un’opzione WordPress.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | La chiave dell’opzione da eliminare |

Restituisce un errore se `option_name` è nella blocklist di sicurezza.

**Restituisce** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Elenca le opzioni WordPress che corrispondono a un pattern.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Pattern SQL LIKE per filtrare i nomi delle opzioni, ad es. `gratis_%`. Restituisce tutte le opzioni se omesso (da usare con cautela su database di grandi dimensioni). |
| `limit` | integer | No | Numero massimo di risultati. Predefinito `50`, massimo `500` |

**Restituisce**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gestione dei contenuti {#content-management}

Le capacità di Gestione dei contenuti creano e modificano post e pagine WordPress. Gli ID dei post vengono restituiti in modo che i passaggi successivi nei piani multi-capacità possano fare riferimento al contenuto creato.

### `create_post` {#createpost}

Crea un nuovo post WordPress, una pagina o una voce di tipo di post personalizzato.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Titolo del post |
| `content` | string | No | Corpo del post — accetta testo semplice, HTML o markup a blocchi serializzato |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Predefinito `draft` |
| `post_type` | string | No | Slug del tipo di post, ad es. `post`, `page` o qualsiasi CPT registrato. Predefinito `post` |
| `excerpt` | string | No | Breve riepilogo mostrato negli archivi e nei risultati di ricerca |
| `categories` | array | No | Array di nomi o ID di categorie da assegnare |
| `tags` | array | No | Array di nomi o ID di tag da assegnare |
| `author` | integer | No | ID utente WordPress da impostare come autore del post. Il valore predefinito è l’utente corrente |
| `date` | string | No | Data di pubblicazione in formato ISO 8601, ad es. `2026-05-01T09:00:00` |
| `page_template` | string | No | File template da assegnare a questo post o a questa pagina, ad es. `page-full-width.php`. Ha significato solo quando `post_type` è `page` o un CPT che supporta i template di pagina. |

**Esempio**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Restituisce** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Aggiorna un post o una pagina WordPress esistente.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID del post da aggiornare |
| `title` | string | No | Nuovo titolo del post |
| `content` | string | No | Nuovo corpo del post |
| `status` | string | No | Nuovo stato: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nuovo estratto |
| `categories` | array | No | Sostituisci l’elenco completo delle categorie con questo array di nomi o ID |
| `tags` | array | No | Sostituisci l’elenco completo dei tag con questo array di nomi o ID |
| `page_template` | string | No | Nuovo file template da assegnare a questo post o a questa pagina, ad es. `page-full-width.php`. Passa una stringa vuota per rimuovere l’assegnazione del template e tornare al valore predefinito del theme. |

**Esempio** — cambia template dopo la creazione

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Restituisce** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Crea più post in una singola chiamata di capacità, riducendo i round-trip durante la creazione del sito o l’importazione massiva di contenuti. I post vengono creati in sequenza; se uno fallisce, gli altri continuano e l’errore viene riportato nell’array dei risultati.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array di oggetti post, ognuno dei quali accetta gli stessi parametri di `create_post` |
| `stop_on_error` | boolean | No | Se `true`, interrompe l’elaborazione dopo il primo errore. Predefinito `false` |

**Esempio**

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

**Restituisce**

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

Assegna un’immagine in evidenza (miniatura del post) a un post o a una pagina esistente. Accetta l’ID di un allegato esistente della Media Library o l’URL di un’immagine remota; quando viene fornito un URL, l’immagine viene scaricata e importata automaticamente.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID del post o della pagina da aggiornare |
| `attachment_id` | integer | No | ID di un allegato esistente della Media Library |
| `url` | string | No | URL dell’immagine remota da importare e impostare come immagine in evidenza |
| `alt_text` | string | No | Testo alt da applicare all’allegato se viene importato da un URL |

Deve essere fornito uno tra `attachment_id` o `url`.

**Restituisce** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Crea un modulo di contatto utilizzando il plugin per moduli attivo (Contact Form 7, WPForms, Fluent Forms o Gravity Forms, a seconda di quale è installato). Restituisce uno shortcode che può essere incorporato in qualsiasi post o pagina.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Nome del modulo mostrato nell'admin del plugin del modulo |
| `fields` | array | Yes | Elenco ordinato dei campi del modulo (vedi oggetto Campo sotto) |
| `recipient` | string | No | Indirizzo email per ricevere gli invii. Predefinito: email dell'admin WordPress |
| `subject` | string | No | Riga dell'oggetto dell'email. Supporta i placeholder `[your-name]` e `[your-subject]` quando si usa Contact Form 7 |
| `confirmation_message` | string | No | Messaggio visualizzato dopo un invio riuscito. Predefinito: `"Thank you for your message. We'll be in touch soon."` |

**Oggetto Campo**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Nome interno del campo / chiave macchina |
| `label` | string | Yes | Etichetta leggibile mostrata sul modulo |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Se il campo deve essere compilato prima dell'invio. Predefinito `false` |
| `options` | array | No | Opzioni per i campi `select`, `checkbox` e `radio` |
| `placeholder` | string | No | Testo segnaposto per input di tipo testo |

**Esempio**

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

**Restituisce**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revisione visiva {#visual-review}

Le capacità di Revisione visiva consentono all'agente di acquisire screenshot di pagine live e analizzarli, abilitando la revisione autonoma del design, confronti prima/dopo e controlli di regressione visiva senza richiedere alcuna estensione del browser.

### `capture_screenshot` {#capturescreenshot}

Acquisisce uno screenshot di una pagina WordPress a un determinato URL usando un browser headless lato server. L'immagine viene salvata nella Libreria Media e viene restituito un URL CDN.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL completo della pagina di cui acquisire lo screenshot, ad es. `https://example.com/about/` |
| `width` | integer | No | Larghezza del viewport in pixel. Predefinito `1280` |
| `height` | integer | No | Altezza del viewport in pixel. Predefinito `800` |
| `full_page` | boolean | No | Acquisisci l'intera pagina scorrevole invece del solo viewport. Predefinito `false` |
| `delay_ms` | integer | No | Millisecondi da attendere dopo il caricamento della pagina prima dell'acquisizione, utile per contenuti animati. Predefinito `500` |
| `label` | string | No | Etichetta leggibile memorizzata con l'allegato nella Libreria Media |

**Restituisce**

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

Prende due screenshot e restituisce un punteggio di differenza visiva più un'immagine di differenza che evidenzia le regioni modificate. Utile per confermare che una modifica di design abbia prodotto il risultato previsto o per rilevare regressioni non intenzionali.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL della pagina da acquisire come stato "prima" |
| `after_url` | string | Yes | URL della pagina da acquisire come stato "dopo". Può essere lo stesso URL se si confronta nel tempo |
| `width` | integer | No | Larghezza del viewport per entrambe le acquisizioni. Predefinito `1280` |
| `threshold` | float | No | Soglia di differenza tra pixel (0.0–1.0). I pixel entro questa tolleranza sono considerati invariati. Predefinito `0.1` |

**Restituisce**

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

Un `diff_score` di `0.0` significa nessun cambiamento visibile; `1.0` significa che ogni pixel è cambiato.

---

### `review_page_design` {#reviewpagedesign}

Acquisisce uno screenshot di una pagina e lo invia al modello linguistico per l'analisi visiva. Restituisce una valutazione strutturata che copre layout, tipografia, uso del colore e problemi di accessibilità.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL completo della pagina da revisionare |
| `focus` | string | No | Elenco separato da virgole delle aree di revisione da enfatizzare: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Predefinito: tutte le aree |
| `width` | integer | No | Larghezza del viewport. Predefinito `1280` |

**Restituisce**

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

## Capacità installabili {#installable-abilities}

Il Registro delle capacità installabili ti consente di estendere l'agente con pacchetti di capacità aggiuntivi distribuiti come plugin WordPress. Ogni pacchetto registra una o più capacità usando l'API standard delle capacità.

### `list_available_abilities` {#listavailableabilities}

Restituisce il catalogo dei pacchetti di capacità disponibili per l'installazione dal registro.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `category` | string | No | Filtra per categoria: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Restituisce**

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

Scarica e attiva un pacchetto di abilità dal registro.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `slug` | string | Sì | Slug del plugin del pacchetto di abilità |

**Restituisce** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Interroga il registro delle abilità per trovare il miglior plugin per un caso d'uso descritto e, facoltativamente, lo installa.

**Parametri**

| Parametro | Tipo | Obbligatorio | Descrizione |
|---|---|---|---|
| `description` | string | Sì | Descrizione in linguaggio naturale della funzionalità desiderata |
| `install` | boolean | No | Se `true`, installa immediatamente il plugin consigliato. Predefinito `false` |

**Esempio**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Restituisce**

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
