---
title: Riferimenti delle capacità
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referència d'abilitats {#abilities-reference}

Les habilitats són les accions atòmiques que l'Agent AI Gratis pot invocat en la teva instal·lació de WordPress. Cada habilitat és una classe PHP registrada que exposa un esquema JSON —l'agent lee aquest esquema al temps d'execució per entendre quins paràmetres són necessaris i què retorna la habilitat.

Aquesta pàgina documenta totes les habilitats que es envien amb Gratis AI Agent v1.9.0.

---

## Tipos de Publicació Personalitzats (Custom Post Types) {#custom-post-types}

Aquestes habilitats gestionen els tipus de publicació personalitzats (CPT) registrats a través de l'agent. Les registres es mantenen persistides en la taula d'opcions de WordPress, així com sobre la desactivació i reactivació del plugin.

### `register_post_type` {#registerposttype}

Registra un nou tipus de publicació personalitzat.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `slug` | string | Sí | La clau del tipus de publicació (màxim 20 caràcters, sense majúscules, sense espais) |
| `singular_label` | string | Sí | Nom singular legible per humans, p. ex., `Portfolio Item` |
| `plural_label` | string | Sí | Nom plural legible per humans, p. ex., `Portfolio Items` |
| `public` | boolean | No | Si el tipus de publicació és accessible públicament. Valor predefinit `true` |
| `supports` | array | No | Característiques a suportar: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predefinit `["title","editor"]` |
| `has_archive` | boolean | No | Si es activa la pàgina d'arxiu del tipus de publicació. Valor predefinit `false` |
| `menu_icon` | string | No | Classe Dashicons o URL per a l'ícone del menú administratiu. Predefinit `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Slug de URL per al tipus de publicació. Per paràmetres predefinits `slug` |

**Exemple**

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

**Retorna** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Retorna tots els tipus de publicació personalitzats registrats per l'agent.

**Paràmetres** — cap

**Retorna**

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

Desregistra un tipus de publicació personalitzat que va ser registrat anteriorment per l'agent. Els posts existents d'aquest tipus es mantenen en la base de dades, però ja no són accessibles mitjançant el tipus de publicació.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `slug` | string | Sí | La clau del tipus de publicació a eliminar |

**Retorna** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies Personalitzades (Custom Taxonomies) {#custom-taxonomies}

Aquestes habilitats gestionen les taxonomies personalitzades. Com els CPTs, les registres de taxonomies es mantenen persistides.

### `register_taxonomy` {#registertaxonomy}

Registra una nova taxonomia personalitzada.

**Paràmetres**

## Design System {#listtaxonomies}

Les capacités du système de conception modifient la présentation visuelle du site WordPress — du CSS personnalisé aux modèles de blocs et au logo du site.

### `inject_custom_css` {#deletetaxonomy}

Ajoute du CSS dans la balise `<head>` du site via `wp_add_inline_style`. Le CSS est stocké dans l'option `gratis_ai_agent_custom_css` et est retiré proprement lorsque cette capacité est réinitialisée.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `css` | string | Oui | CSS valide à injecter |
| `label` | string | Non | Étiquette lisible pour ce bloc CSS, utilisée dans les journaux de débogage. Valeur par défaut `"agent-injected"` |
| `replace` | boolean | Non | Si est vrai, remplace tout le CSS précédemment injecté. Par défaut `false` (ajoute) |

**Exemple**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Retourne** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#design-system}

Enregistre un modèle de bloc réutilisable dans la bibliothèque de modèles WordPress.

**Paramètres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `slug` | string | Sí | Identificador del patró, p. ex. `gratis/hero-dark` |
| `title` | string | Sí | Nom del patró legible per humans que s'visualitza a l'editor |
| `content` | string | Sí | Marcador de blocs serialitzat (HTML) per al patró |
| `categories` | array | No | Slugs de categoria del patró, p. ex. `["featured", "hero"]` |
| `description` | string | No | Descripció curta que s'visualitza en el select de patrò |
| `keywords` | array | No | Palabras clau de cerca |

**Retorna** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#injectcustomcss}

Llista tots els patterns de blocs registrats pel agent.

**Paràmetres** — cap

**Retorna**

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

### `set_site_logo` {#addblockpattern}

Establix el logo del site de WordPress a un ID d'attachment o a una URL d'imatge remota. Quan es proporciona una URL, l'imatge es descàrrega i s'importa a la Biblioteca de Mèdia.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `attachment_id` | integer | No | ID d'un attachment existent en la Biblioteca de Mèdia |
| `url` | string | No | URL d'imatge remota per importar i setar com a logo |

Cal proporcionar un dels dos, l'ID d'attachment o la URL.

**Retorna** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#listblockpatterns}

Applica un preset de color/tipografia només al `theme.json` (o `global-styles`) del tema actiu. Els presets són paquetes curats mantenits pel equip d'agents AI Gratis.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `preset` | string | Sí | Nom del preset, p. ex. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Si és `true`, es fusiona amb els valors existents en lloc de substituir. Default `false` |

**Presets disponibles**

| Preset | Descripció |
|---|---|
| `minimal-dark` | Fons quasi negre, text blanc, un color d'accent únic |
| `warm-editorial` | Fons off-blanc calent, títols serif, colors d'accent terrosos |
| `corporate-blue` | Paleta de blau marí i blanc amb tipografia professional |
| `vibrant-startup` | Graduats brillants, angles arrodonits, tipografia sans-serif moderna |
| `classic-blog` | Gris neutral, altura de línia còmoda, espacament tradicional del layout |

**Retorna** `{ "success": true, "preset": "minimal-dark" }`

---

## Estils Globals {#setsitelogo}

Les habilitats d'Estils Globals la lectura i escrit dels valors de `theme.json` a través de l'API Global Styles de WordPress, afectant tots els blocs i templates del site.

### `get_global_styles` {#applythemejsonpreset}

Retorna la configuració actual dels estils globals.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `path` | string | No | Punter JSON a un valor específic, p. ex. `/color/palette` o `/typography/fontSizes`. Retorna l'objecte complet si no es especifica res. |

**Retorna** l'objecte complet dels estils globals o el valor a `path`.

---

### `set_global_styles` {#global-styles}

### `reset_global_styles` {#getglobalstyles}

Desactiva tots els canvis de estil global aplicats per l'agent, restaurant les configuracions predefinides del tema.

**Paràmetres** — cap

**Retorna** `{ "success": true }`

---

## Menús de Navegació {#setglobalstyles}

Les habilitats de Menú de Navegació permeten crear i gestionar els menús de navigació de WordPress i els seus elements.

### `create_menu` {#resetglobalstyles}

Crea un nou menú de navigació de WordPress.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `name` | string | Sí | Nom del menú, per exemple `Primary Navigation` |
| `location` | string | No | Ubicació del tema a la qual assignar aquest menú, per exemple `primary` |

**Retorna** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#navigation-menus}

Canvia el nom d'un menú o reassigna-lo a una ubicació del tema.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `menu_id` | integer | Sí | ID del menú que s'ha de modificar |
| `name` | string | No | Nou nom del menú |
| `location` | string | No | Ubicació del tema a assignar o reassignar |

**Retorna** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#createmenu}

Afegeix un element a un menú de navigació existent.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `menu_id` | integer | Sí | ID del menú objectiu |
| `type` | string | Sí | Tip de l'element: `custom`, `post_type` o `taxonomy` |
| `title` | string | No | Etiqueta per a l'element del menú (obligatori per al tip `custom`) |
| `url` | string | No | URL per als elements `custom` |
| `object_id` | integer | No | ID de post o ID de terme per als elements `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID de l'element del menú a la qual anidar aquest element |
| `position` | integer | No | Posició basada en zero del menú |

**Retorna** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#updatemenu}

Elimina un element d'un menú de navigació.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `item_id` | integer | Sí | ID de l'element del menú a eliminar |

**Retorna** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#addmenuitem}

Llista tots els menús de navigació de WordPress, incloent les seves ubicacions del tema assignades.

**Paràmetres** — cap

**Retorna**

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

## Gestió d'Opcions {#removemenuitem}

Les habilitats d'Opcions permeten llegir i escriure les opcions de WordPress mitjançant `get_option` / `update_option`. Una llista de seguretat integrada impedeix la modificació accidental de configuracions crítiques.

### `get_option` {#listmenus}

Llegeix una opció de WordPress.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `option_name` | string | Sí | La clef de l'opció, per exemple `blogname` |

**Retorna** `{ "option_name": "blogname", "value": "My Site" }`

Retorna un error si `option_name` està en la llista de bloqueig de seguretat.

---

### `set_option` {#options-management}

Escriu una opció de WordPress.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `option_name` | string | Sí | La clef de l'opció |
| `value` | any | Sí | El nou valor (s'serialitza automàticament per a arrays/objects) |
| `autoload` | string | No | `"yes"` o `"no"`. Per par défaut, conserva la configuració d'autoload existente |

Retorna un error si `option_name` està en la llista de bloqueig de seguretat.

**Retorna** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#getoption}

Elimina una opció de WordPress.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `option_name` | string | Sí | La clef de l'opció a eliminar |

Retorna un error si `option_name` està en la llista de bloqueig de seguretat.

**Retorna** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#setoption}

Llista les opcions de WordPress que coincideixen amb un patró.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `pattern` | string | No | Patró SQL LIKE per filtrar els noms d'opcions, per exemple `gratis_%`. Retorna totes les opcions si no es especifica (utilitza amb precaució en bases de dades grans). |
| `limit` | integer | No | Nombre màxim de resultats. Per paràmeture `50`, el màxim és `500` |

**Retorna**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gestió de Contenu (Content Management) {#deleteoption}

Les habilitats de Gestió de Contenu creen i editen posts i pàgines de WordPress. S'retornen els IDs dels posts per poder fer referència al contingut creat en passos posteriors dins dels plans de múltiples habilitats.

### `create_post` {#listoptions}

Crea un nou post, pàgina o entrada de tipus de post personalitzat de WordPress.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `title` | string | Sí | Títol del post |
| `content` | string | No | El cor del post — accepta text simple, HTML o marc de blocs serialitzat |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Per paràmeture `draft` |
| `post_type` | string | No | Slug del tipus de post, per exemple `post`, `page`, o qualsevol CPT registrat. Per paràmeture `post` |
| `excerpt` | string | No | Resum curt que s'mostra en archives i resultats de cerca |
| `categories` | array | No | Array de noms o IDs de categories per assignar |
| `tags` | array | No | Array de noms o IDs de tags per assignar |
| `author` | integer | No | ID de l'usuari de WordPress que es menetge com a autor del post. Per paràmeture l'usuari actual |
| `date` | string | No | Data de publicació al format ISO 8601, per exemple `2026-05-01T09:00:00` |
| `page_template` | string | No | Fichier de plantilla a assignar a aquest post o pàgina, per exemple `page-full-width.php`. Només és significatiu quan `post_type` és `page` o un CPT que suporti plantilles de pàgines. |

**Exemple**

### `update_post` {#content-management}

Actualitza un post o pàgina de WordPress que ja existeix.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `post_id` | integer | Sí | ID del post que vols actualitzar |
| `title` | string | No | Nou títol del post |
| `content` | string | No | Nou contingut del body del post |
| `status` | string | No | Nou estat: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nou extract |
| `categories` | array | No | Substitueix la llista completa de categories per aquest array de noms o IDs |
| `tags` | array | No | Substitueix la llista completa de tags per aquest array de noms o IDs |
| `page_template` | string | No | Nou fitxer de plantilla a assignar a aquest post o pàgina, per exemple `page-full-width.php`. Passa una cadena buida per eliminar l'assignació de la plantilla i revertir al default del tema. |

**Exemple** — canviar la plantilla després de la creació

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Retorna** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#createpost}

Crea múltiples posts en una sola llamada a la funció, reduint els envials (round-trips) durant les construccions del site o l'import de contingut en massa. Els posts es creen en seqüència; si un falla, els altres continuaran i el fracàs es reportarà en l'array de resultats.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `posts` | array | Sí | Array d'objectes de post, cada un acceptant els mateixos paràmetres que `create_post` |
| `stop_on_error` | boolean | No | Si és `true`, aturar el processament després del primer fracàs. Default `false` |

**Exemple**

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

**Retorna**

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

### `set_featured_image` {#updatepost}

Assigna una imatge destacada (thumbnail del post) a un post o pàgina que ja existeix. Accepta un ID d'adjunt de la Media Library existente o una URL d'imatge remota; quan es proporciona una URL, l'imatge es descàrrega i s'importa automàticament.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `post_id` | integer | Sí | ID de la publicació o pàgina que s'ha d'actualitzar |
| `attachment_id` | integer | No | ID d'un attachment existente de la Biblioteca de Mèdia |
| `url` | string | No | URL remota de l'imatge per importar i setar com a imatge destacada |
| `alt_text` | string | No | Text alternatiu per aplicar al attachment si es importa d'una URL |

Cal ser obligatori proporcionar `attachment_id` o `url`.

**Retorna** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#batchcreateposts}

Crea un formulari de contact utilitzant el plugin de formulari actiu (Contact Form 7, WPForms, Fluent Forms o Gravity Forms, segons quin estigui instal·lat). Retorna un shortcode que es pot incorporar en qualsevol publicació o pàgina.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `title` | string | Sí | Nom del formulari que s'visualitza a l'administració del plugin de formulari |
| `fields` | array | Sí | Llista ordenada de camps del formulari (veure object Field a continuació) |
| `recipient` | string | No | Adreça de correu electrònic per rebre les submissió. Per par défaut, és el correu electrònic de l'administració de WordPress |
| `subject` | string | No | Línia d'assumpte del correu electrònic. Soporta els placeholders `[your-name]` i `[your-subject]` quan s'utilitza Contact Form 7 |
| `confirmation_message` | string | No | Mensatge que es mostra després d'una submissió exitosa. Per par défaut: `"Gràcies per el teu missatge. Estem en contacte aviat."` |

**Object Field**

| Clau | Tip | Obligatori | Descripció |
|---|---|---|---|
| `name` | string | Sí | Nom del camp intern / clau de màquina |
| `label` | string | Sí | Etiqueta legible per a humans que s'visualitza al formulari |
| `type` | string | Sí | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Si el camp ha de ser poblat abans de la submissió. Per par défaut, `false` |
| `options` | array | No | Opcions per als camps `select`, `checkbox` i `radio` |
| `placeholder` | string | No | Text de suport per a les entrades de tip text |

**Exemple**

```json
{
  "title": "Consulta de reserva de restaurant",
  "fields": [
    { "name": "your-name",    "label": "Nom",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Número de persones",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Request especial", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "Nou sol·licitud de reserva de [your-name]"
}
```

**Retorna**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Consulta de reserva de restaurant\"]"
}
```

---

## Revisió Visual {#setfeaturedimage}

Les habilitats de Revisió Visual permeten a l'agent capturar captures d'esdevenços (screenshots) de pàgines en directe i analitzar-les, possibilitant la revisió de disseny autònoma, comparacions abans/després i verificacions de regressió visual sense necessitar cap extensió del navegador.

### `capture_screenshot` {#createcontactform}

### `compare_screenshots` {#visual-review}

Toma dos capturades de pantalla i retorna una puntuació de diferència visual més una imatge que resalta les zones canviades. És molt útil per confirmar que un canvi de disseny ha produït el resultat esperat o per detectar regressions no desitjades.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `before_url` | string | Sí | URL de la pàgina que s'captura com a l'estat "abans" |
| `after_url` | string | Sí | URL de la pàgina que s'captura com a l'estat "després". Pot ser la mateixa URL si compares entre temps |
| `width` | integer | No | Amplitud del viewport per a totes les capturades. Default `1280` |
| `threshold` | float | No | Teixit de diferència en píxels (de 0.0 a 1.0). Els píxels dins d'aquesta tolerància es consideren inalterats. Default `0.1` |

**Retorna**

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

Una `diff_score` de `0.0` significa que no hi ha canvi visible; `1.0` significa que cada píxel ha canviat.

---

### `review_page_design` {#capturescreenshot}

Captura una captura de pantalla d'una pàgina i la envia al model de llenguatge per a l'anàlisi visual. Retorna una tasació estructurada que cobreix el disseny, la tipografia, l'ús del color i les preocupacions d'accessibilitat.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `url` | string | Sí | URL completa de la pàgina que s'ha de revisar |
| `focus` | string | No | Llista separada per comas d'àrees de revisió a destacar: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: totes les àrees |
| `width` | integer | No | Amplitud del viewport. Default `1280` |

**Retorna**

## Capacitats Instal·laborables {#comparescreenshots}

El Registre de Capacitats Instal·laborables (Installable Abilities Registry) t'permís ampliar l'agent amb pacs de capacitats distribuïdos com plugins de WordPress. Cada pack registra una o més capacitats utilitzant l'API estàndard de habilitats.

### `list_available_abilities` {#reviewpagedesign}

Retorna el catalog de pacs de capacitats disponibles per instal·lar des del registre.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `category` | string | No | Filtrar per categoria: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Retorn**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "Capacitats WooCommerce",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installable-abilities}

Descarrega i activa un pack de capacitats des del registre.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `slug` | string | Sí | Slug del plugin del pack de capacitats |

**Retorn** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#listavailableabilities}

Consulta el registre de capacitats per trobar el millor plugin per a un cas d'ús descrit i, opcionalment, l'installa.

**Paràmetres**

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `description` | string | Sí | Descripció en llengua natural de la funcionalitat desitjada |
| `install` | boolean | No | Si és `true`, instala immediatament el plugin recomanat. Valor per par défaut `false` |

**Exemple**

```json
{
  "description": "Necessito un formulari de contact amb suport de càrregament de fitxers i protecció contra el spam",
  "install": false
}
```

**Retorn**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Ampliament, suporta càrregaments de fitxers i es integra amb Akismet per al filtratge de spam.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
