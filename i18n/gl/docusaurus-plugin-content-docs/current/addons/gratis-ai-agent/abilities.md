---
title: Referencia de habilidades
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referencia de habilidades {#abilities-reference}

As habilidades son as accións atómicas que Gratis AI Agent pode invocar na túa instalación de WordPress. Cada habilidade é unha clase PHP rexistrada que expón un esquema JSON — o axente le este esquema en tempo de execución para entender que parámetros son necesarios e que devolve a habilidade.

Esta páxina documenta todas as habilidades incluídas con Gratis AI Agent v1.9.0.

---

## Tipos de entrada personalizados {#custom-post-types}

Estas habilidades xestionan tipos de entrada personalizados (CPTs) rexistrados a través do axente. Os rexistros persisten na táboa de opcións de WordPress para que sobrevivan á desactivación e reactivación do plugin.

### `register_post_type` {#registerposttype}

Rexistra un novo tipo de entrada personalizado.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `slug` | string | Si | A clave do tipo de entrada (máx. 20 caracteres, sen maiúsculas, sen espazos) |
| `singular_label` | string | Si | Nome singular lexible para humanos, por exemplo `Portfolio Item` |
| `plural_label` | string | Si | Nome plural lexible para humanos, por exemplo `Portfolio Items` |
| `public` | boolean | Non | Se o tipo de entrada é accesible publicamente. Predeterminado `true` |
| `supports` | array | Non | Funcionalidades que admitir: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predeterminado `["title","editor"]` |
| `has_archive` | boolean | Non | Se está activada unha páxina de arquivo do tipo de entrada. Predeterminado `false` |
| `menu_icon` | string | Non | Clase Dashicons ou URL para a icona do menú de administración. Predeterminado `"dashicons-admin-post"` |
| `rewrite_slug` | string | Non | Slug de URL para o tipo de entrada. Predetermina a `slug` |

**Exemplo**

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

**Devolve** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Devolve todos os tipos de entrada personalizados rexistrados polo axente.

**Parámetros** — ningún

**Devolve**

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

Anula o rexistro dun tipo de entrada personalizado rexistrado previamente polo axente. As entradas existentes dese tipo permanecen na base de datos pero xa non son accesibles a través do tipo de entrada.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `slug` | string | Si | A clave do tipo de entrada que eliminar |

**Devolve** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomías personalizadas {#custom-taxonomies}

Estas habilidades xestionan taxonomías personalizadas. Igual ca os CPTs, os rexistros de taxonomías persisten.

### `register_taxonomy` {#registertaxonomy}

Rexistra unha nova taxonomía personalizada.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `slug` | string | Si | A clave da taxonomía (máx. 32 caracteres) |
| `singular_label` | string | Si | Nome singular lexible para humanos, por exemplo `Project Category` |
| `plural_label` | string | Si | Nome plural lexible para humanos, por exemplo `Project Categories` |
| `post_types` | array | Si | Slugs de tipos de entrada aos que se debe anexar esta taxonomía |
| `hierarchical` | boolean | Non | `true` para estilo categoría, `false` para estilo etiqueta. Predeterminado `true` |
| `public` | boolean | Non | Se os termos son accesibles publicamente. Predeterminado `true` |
| `rewrite_slug` | string | Non | Slug de URL para a taxonomía. Predetermina a `slug` |

**Exemplo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Devolve** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Devolve todas as taxonomías personalizadas rexistradas polo axente.

**Parámetros** — ningún

**Devolve**

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

Anula o rexistro dunha taxonomía personalizada rexistrada previamente polo axente.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `slug` | string | Si | A clave da taxonomía que eliminar |

**Devolve** `{ "success": true, "slug": "project-category" }`

---

## Sistema de deseño {#design-system}

As habilidades do sistema de deseño modifican a presentación visual do sitio WordPress — desde CSS personalizado ata patróns de bloques e o logotipo do sitio.

### `inject_custom_css` {#injectcustomcss}

Engade CSS ao `<head>` do sitio mediante `wp_add_inline_style`. O CSS almacénase na opción `gratis_ai_agent_custom_css` e retírase da cola limpamente cando se restablece a habilidade.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `css` | string | Si | CSS válido para inxectar |
| `label` | string | Non | Etiqueta lexible para humanos para este bloque CSS, usada nos rexistros de depuración. Predeterminado `"agent-injected"` |
| `replace` | boolean | Non | Se é `true`, substitúe todo o CSS inxectado previamente. Predeterminado `false` (engade) |

**Exemplo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Devolve** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Rexistra un patrón de bloques reutilizable na biblioteca de patróns de WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `slug` | string | Si | Identificador do patrón, por exemplo `gratis/hero-dark` |
| `title` | string | Si | Nome do patrón lexible para humanos mostrado no editor |
| `content` | string | Si | Marcado de bloques serializado (HTML) para o patrón |
| `categories` | array | Non | Slugs de categorías de patróns, por exemplo `["featured", "hero"]` |
| `description` | string | Non | Descrición curta mostrada no selector de patróns |
| `keywords` | array | Non | Palabras clave de busca |

**Devolve** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Lista todos os patróns de bloques rexistrados polo axente.

**Parámetros** — ningún

**Devolve**

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

Establece o logotipo do sitio WordPress nun ID de adxunto dado ou nun URL de imaxe remota. Cando se proporciona un URL, a imaxe descárgase e impórtase á Biblioteca multimedia.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `attachment_id` | integer | Non | ID dun adxunto existente da Biblioteca multimedia |
| `url` | string | Non | URL de imaxe remota para importar e establecer como logotipo |

Debe proporcionarse un de `attachment_id` ou `url`.

**Devolve** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aplica un axuste predefinido con nome de cor/tipografía ao `theme.json` do tema activo (ou `global-styles`). Os axustes predefinidos son paquetes seleccionados mantidos polo equipo de Gratis AI Agent.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `preset` | string | Si | Nome do axuste predefinido, p. ex. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Non | Se é `true`, combina cos valores existentes en lugar de substituílos. Valor predeterminado `false` |

**Axustes predefinidos dispoñibles**

| Axuste predefinido | Descrición |
|---|---|
| `minimal-dark` | Fondo case negro, texto branco, unha soa cor de acento |
| `warm-editorial` | Fondo cálido case branco, encabezados con serifa, cores de acento terrosas |
| `corporate-blue` | Paleta azul mariño e branca con tipografía profesional |
| `vibrant-startup` | Degradados brillantes, esquinas redondeadas, tipo sans-serif moderno |
| `classic-blog` | Grises neutros, altura de liña cómoda, espazamento de deseño tradicional |

**Devolve** `{ "success": true, "preset": "minimal-dark" }`

---

## Estilos globais {#global-styles}

As capacidades de Estilos globais len e escriben valores de theme.json mediante a API de Estilos globais de WordPress, afectando a todos os bloques e modelos en todo o sitio.

### `get_global_styles` {#getglobalstyles}

Devolve a configuración actual dos estilos globais.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `path` | string | Non | Punteiro JSON a un valor específico, p. ex. `/color/palette` ou `/typography/fontSizes`. Devolve o obxecto completo se se omite. |

**Devolve** o obxecto completo de estilos globais ou o valor en `path`.

---

### `set_global_styles` {#setglobalstyles}

Actualiza un ou máis valores na configuración dos estilos globais.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `path` | string | Si | Punteiro JSON ao valor que se vai establecer, p. ex. `/color/palette` |
| `value` | any | Si | O novo valor |

**Exemplo** — engadir unha cor á paleta

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Devolve** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Restablece todos os cambios de estilos globais aplicados polo axente, restaurando os valores predeterminados do tema.

**Parámetros** — ningún

**Devolve** `{ "success": true }`

---

## Menús de navegación {#navigation-menus}

As capacidades de Menú de navegación crean e xestionan menús de navegación de WordPress e os seus elementos.

### `create_menu` {#createmenu}

Crea un novo menú de navegación de WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `name` | string | Si | Nome do menú, p. ex. `Primary Navigation` |
| `location` | string | Non | Localización do tema á que asignar este menú, p. ex. `primary` |

**Devolve** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Renomea un menú ou reasígano a unha localización do tema.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `menu_id` | integer | Si | ID do menú que se vai actualizar |
| `name` | string | Non | Novo nome do menú |
| `location` | string | Non | Localización do tema á que asignar ou reasignar |

**Devolve** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Engade un elemento a un menú de navegación existente.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `menu_id` | integer | Si | ID do menú de destino |
| `type` | string | Si | Tipo de elemento: `custom`, `post_type` ou `taxonomy` |
| `title` | string | Non | Etiqueta para o elemento de menú (obrigatoria para o tipo `custom`) |
| `url` | string | Non | URL para elementos `custom` |
| `object_id` | integer | Non | ID de publicación ou ID de termo para elementos `post_type`/`taxonomy` |
| `parent_id` | integer | Non | ID do elemento de menú baixo o que aniñar este elemento |
| `position` | integer | Non | Posición baseada en cero no menú |

**Devolve** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Elimina un elemento dun menú de navegación.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `item_id` | integer | Si | ID do elemento de menú que se vai eliminar |

**Devolve** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Lista todos os menús de navegación de WordPress, incluídas as súas localizacións de tema asignadas.

**Parámetros** — ningún

**Devolve**

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

## Xestión de opcións {#options-management}

As capacidades de opcións len e escriben opcións de WordPress mediante `get_option` / `update_option`. Unha lista de bloqueo de seguridade integrada evita a modificación accidental de configuracións críticas.

### `get_option` {#getoption}

Le unha opción de WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `option_name` | string | Si | A clave da opción, p. ex. `blogname` |

**Devolve** `{ "option_name": "blogname", "value": "My Site" }`

Devolve un erro se `option_name` está na lista de bloqueo de seguridade.

---

### `set_option` {#setoption}

Escribe unha opción de WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `option_name` | string | Si | A clave da opción |
| `value` | any | Si | O novo valor (serializado automaticamente para matrices/obxectos) |
| `autoload` | string | Non | `"yes"` ou `"no"`. O valor predeterminado conserva a configuración de autoload existente |

Devolve un erro se `option_name` está na lista de bloqueo de seguridade.

**Devolve** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Elimina unha opción de WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `option_name` | string | Si | A clave da opción que se vai eliminar |

Devolve un erro se `option_name` está na lista de bloqueo de seguridade.

**Devolve** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lista opcións de WordPress que coinciden cun patrón.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `pattern` | string | Non | Patrón SQL LIKE para filtrar nomes de opcións, por exemplo `gratis_%`. Devolve todas as opcións se se omite (úsao con precaución en bases de datos grandes). |
| `limit` | integer | Non | Número máximo de resultados. Predeterminado `50`, máximo `500` |

**Devolve**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Xestión de contido {#content-management}

As capacidades de xestión de contido crean e editan entradas e páxinas de WordPress. Devólvense os ID das entradas para que os pasos posteriores en plans con varias capacidades poidan facer referencia ao contido creado.

### `create_post` {#createpost}

Crea unha nova entrada, páxina ou entrada de tipo de contido personalizado en WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `title` | string | Si | Título da entrada |
| `content` | string | Non | Corpo da entrada — acepta texto sen formato, HTML ou marcado de bloques serializado |
| `status` | string | Non | `draft`, `publish`, `pending`, `private`. Predeterminado `draft` |
| `post_type` | string | Non | Slug do tipo de entrada, por exemplo `post`, `page` ou calquera CPT rexistrado. Predeterminado `post` |
| `excerpt` | string | Non | Resumo breve que se mostra nos arquivos e nos resultados de busca |
| `categories` | array | Non | Array de nomes ou ID de categorías que asignar |
| `tags` | array | Non | Array de nomes ou ID de etiquetas que asignar |
| `author` | integer | Non | ID do usuario de WordPress que se establecerá como autor da entrada. Predetermínase ao usuario actual |
| `date` | string | Non | Data de publicación en formato ISO 8601, por exemplo `2026-05-01T09:00:00` |
| `page_template` | string | Non | Ficheiro de modelo que asignar a esta entrada ou páxina, por exemplo `page-full-width.php`. Só ten sentido cando `post_type` é `page` ou un CPT que admite modelos de páxina. |

**Exemplo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Devolve** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Actualiza unha entrada ou páxina existente de WordPress.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `post_id` | integer | Si | ID da entrada que se vai actualizar |
| `title` | string | Non | Novo título da entrada |
| `content` | string | Non | Novo corpo da entrada |
| `status` | string | Non | Novo estado: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Non | Novo resumo |
| `categories` | array | Non | Substitúe a lista completa de categorías por este array de nomes ou ID |
| `tags` | array | Non | Substitúe a lista completa de etiquetas por este array de nomes ou ID |
| `page_template` | string | Non | Novo ficheiro de modelo que asignar a esta entrada ou páxina, por exemplo `page-full-width.php`. Pasa unha cadea baleira para eliminar a asignación do modelo e volver ao predeterminado do tema. |

**Exemplo** — cambiar o modelo despois da creación

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Devolve** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Crea varias entradas nunha soa chamada de capacidade, reducindo as idas e voltas durante a creación de sitios ou a importación masiva de contido. As entradas créanse en secuencia; se unha falla, as outras continúan e o fallo infórmase no array de resultados.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `posts` | array | Si | Array de obxectos de entrada, cada un aceptando os mesmos parámetros ca `create_post` |
| `stop_on_error` | boolean | Non | Se é `true`, detén o procesamento despois do primeiro fallo. Predeterminado `false` |

**Exemplo**

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

**Devolve**

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

Asigna unha imaxe destacada (miniatura da entrada) a unha entrada ou páxina existente. Acepta un ID de anexo existente da biblioteca multimedia ou un URL de imaxe remoto; cando se fornece un URL, a imaxe descárgase e impórtase automaticamente.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `post_id` | integer | Si | ID da entrada ou páxina que se vai actualizar |
| `attachment_id` | integer | Non | ID dun anexo existente da biblioteca multimedia |
| `url` | string | Non | URL de imaxe remoto que importar e establecer como imaxe destacada |
| `alt_text` | string | Non | Texto alternativo que aplicar ao anexo se se importa desde un URL |

Debe fornecerse un de `attachment_id` ou `url`.

**Devolve** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Crea un formulario de contacto usando o plugin de formularios activo (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms, dependendo de cal estea instalado). Devolve un shortcode que se pode incrustar en calquera entrada ou páxina.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `title` | string | Si | Nome do formulario mostrado no admin do plugin de formularios |
| `fields` | array | Si | Lista ordenada de campos do formulario (ver o obxecto Campo a continuación) |
| `recipient` | string | Non | Enderezo de correo electrónico para recibir envíos. Por defecto usa o correo electrónico do admin de WordPress |
| `subject` | string | Non | Liña de asunto do correo electrónico. Admite os marcadores de posición `[your-name]` e `[your-subject]` ao usar Contact Form 7 |
| `confirmation_message` | string | Non | Mensaxe mostrada despois dun envío correcto. Por defecto: `"Thank you for your message. We'll be in touch soon."` |

**Obxecto Campo**

| Chave | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `name` | string | Si | Nome interno do campo / chave de máquina |
| `label` | string | Si | Etiqueta lexible para humanos mostrada no formulario |
| `type` | string | Si | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Non | Se o campo debe cubrirse antes do envío. Por defecto `false` |
| `options` | array | Non | Opcións para os campos `select`, `checkbox` e `radio` |
| `placeholder` | string | Non | Texto do marcador de posición para entradas de tipo texto |

**Exemplo**

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

**Devolve**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revisión visual {#visual-review}

As capacidades de Revisión visual permiten que o axente capture capturas de pantalla de páxinas en directo e as analice, permitindo a revisión autónoma do deseño, comparacións antes/despois e comprobacións de regresión visual sen requirir ningunha extensión de navegador.

### `capture_screenshot` {#capturescreenshot}

Captura unha captura de pantalla dunha páxina de WordPress nun URL dado usando un navegador headless do lado do servidor. A imaxe gárdase na Biblioteca multimedia e devólvese un URL de CDN.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `url` | string | Si | URL completo da páxina da que facer unha captura de pantalla, por exemplo `https://example.com/about/` |
| `width` | integer | Non | Largura do viewport en píxeles. Por defecto `1280` |
| `height` | integer | Non | Altura do viewport en píxeles. Por defecto `800` |
| `full_page` | boolean | Non | Captura a páxina desprazable completa en vez de só o viewport. Por defecto `false` |
| `delay_ms` | integer | Non | Milisegundos que agardar despois da carga da páxina antes de capturar, útil para contido animado. Por defecto `500` |
| `label` | string | Non | Etiqueta lexible para humanos almacenada co anexo na Biblioteca multimedia |

**Devolve**

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

Toma dúas capturas de pantalla e devolve unha puntuación de diferenza visual máis unha imaxe de diferenza que destaca as rexións modificadas. Útil para confirmar que un cambio de deseño produciu o resultado esperado ou para detectar regresións non intencionadas.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `before_url` | string | Si | URL da páxina que capturar como estado "anterior" |
| `after_url` | string | Si | URL da páxina que capturar como estado "posterior". Pode ser o mesmo URL se se compara ao longo do tempo |
| `width` | integer | Non | Largura do viewport para ambas capturas. Por defecto `1280` |
| `threshold` | float | Non | Limiar de diferenza de píxeles (0.0–1.0). Os píxeles dentro desta tolerancia considéranse sen cambios. Por defecto `0.1` |

**Devolve**

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

Un `diff_score` de `0.0` significa que non hai cambios visibles; `1.0` significa que cambiaron todos os píxeles.

---

### `review_page_design` {#reviewpagedesign}

Captura unha captura de pantalla dunha páxina e envíaa ao modelo de linguaxe para análise visual. Devolve unha avaliación estruturada que cobre a disposición, a tipografía, o uso da cor e preocupacións de accesibilidade.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `url` | string | Si | URL completo da páxina que revisar |
| `focus` | string | Non | Lista separada por comas de áreas de revisión que enfatizar: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Por defecto: todas as áreas |
| `width` | integer | Non | Largura do viewport. Por defecto `1280` |

**Devolve**

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

## Capacidades instalables {#installable-abilities}

O Rexistro de capacidades instalables permíteche ampliar o axente con paquetes de capacidades adicionais distribuídos como plugins de WordPress. Cada paquete rexistra unha ou máis capacidades usando a API estándar de capacidades.

### `list_available_abilities` {#listavailableabilities}

Devolve o catálogo de paquetes de capacidades dispoñibles para a instalación desde o rexistro.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `category` | string | Non | Filtrar por categoría: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Devolve**

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

Descarga e activa un paquete de habilidades desde o rexistro.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `slug` | string | Si | Slug do plugin do paquete de habilidades |

**Devolve** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Consulta o rexistro de habilidades para atopar o mellor plugin para un caso de uso descrito e, opcionalmente, instálao.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `description` | string | Si | Descrición en linguaxe natural da funcionalidade desexada |
| `install` | boolean | Non | Se `true`, instala o plugin recomendado inmediatamente. Predeterminado `false` |

**Exemplo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Devolve**

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
