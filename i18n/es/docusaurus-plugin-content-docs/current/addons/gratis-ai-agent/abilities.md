---
title: Referencia de capacidades
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referencia de habilidades

Las habilidades son las acciones atómicas que Gratis AI Agent puede invocar en tu instalación de WordPress. Cada habilidad es una clase PHP registrada que expone un esquema JSON: el agente lee este esquema en tiempo de ejecución para entender qué parámetros son obligatorios y qué devuelve la habilidad.

Esta página documenta todas las habilidades incluidas con Gratis AI Agent v1.9.0.

---

## Tipos de entradas personalizadas {#custom-post-types}

Estas habilidades gestionan tipos de entradas personalizadas (CPTs) registradas mediante el agente. Los registros se conservan en la tabla de opciones de WordPress para que sobrevivan a la desactivación y reactivación del plugin.

### `register_post_type` {#registerposttype}

Registra un nuevo tipo de entrada personalizada.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `slug` | string | Sí | La clave del tipo de entrada (máx. 20 caracteres, sin mayúsculas, sin espacios) |
| `singular_label` | string | Sí | Nombre singular legible por humanos, p. ej. `Portfolio Item` |
| `plural_label` | string | Sí | Nombre plural legible por humanos, p. ej. `Portfolio Items` |
| `public` | boolean | No | Si el tipo de entrada es accesible públicamente. Predeterminado `true` |
| `supports` | array | No | Características que se admiten: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predeterminado `["title","editor"]` |
| `has_archive` | boolean | No | Si está habilitada una página de archivo para el tipo de entrada. Predeterminado `false` |
| `menu_icon` | string | No | Clase Dashicons o URL para el icono del menú de administración. Predeterminado `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Slug de URL para el tipo de entrada. De forma predeterminada usa `slug` |

**Ejemplo**

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

**Devuelve** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Devuelve todos los tipos de entradas personalizadas registrados por el agente.

**Parámetros** — ninguno

**Devuelve**

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

Anula el registro de un tipo de entrada personalizada registrado previamente por el agente. Las entradas existentes de ese tipo permanecen en la base de datos, pero ya no son accesibles mediante el tipo de entrada.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `slug` | string | Sí | La clave del tipo de entrada que se va a eliminar |

**Devuelve** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomías personalizadas {#custom-taxonomies}

Estas habilidades gestionan taxonomías personalizadas. Al igual que los CPTs, los registros de taxonomía se conservan.

### `register_taxonomy` {#registertaxonomy}

Registra una nueva taxonomía personalizada.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `slug` | string | Sí | La clave de la taxonomía (máx. 32 caracteres) |
| `singular_label` | string | Sí | Nombre singular legible por humanos, p. ej. `Project Category` |
| `plural_label` | string | Sí | Nombre plural legible por humanos, p. ej. `Project Categories` |
| `post_types` | array | Sí | Slugs de tipos de entradas a los que debe adjuntarse esta taxonomía |
| `hierarchical` | boolean | No | `true` para estilo de categoría, `false` para estilo de etiqueta. Predeterminado `true` |
| `public` | boolean | No | Si los términos son accesibles públicamente. Predeterminado `true` |
| `rewrite_slug` | string | No | Slug de URL para la taxonomía. De forma predeterminada usa `slug` |

**Ejemplo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Devuelve** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Devuelve todas las taxonomías personalizadas registradas por el agente.

**Parámetros** — ninguno

**Devuelve**

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

Anula el registro de una taxonomía personalizada registrada previamente por el agente.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `slug` | string | Sí | La clave de la taxonomía que se va a eliminar |

**Devuelve** `{ "success": true, "slug": "project-category" }`

---

## Sistema de diseño {#design-system}

Las habilidades del sistema de diseño modifican la presentación visual del sitio WordPress, desde CSS personalizado hasta patrones de bloques y el logotipo del sitio.

### `inject_custom_css` {#injectcustomcss}

Añade CSS al `<head>` del sitio mediante `wp_add_inline_style`. El CSS se almacena en la opción `gratis_ai_agent_custom_css` y se retira de la cola limpiamente cuando se restablece la habilidad.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `css` | string | Sí | CSS válido para inyectar |
| `label` | string | No | Etiqueta legible por humanos para este bloque CSS, usada en registros de depuración. Predeterminado `"agent-injected"` |
| `replace` | boolean | No | Si es `true`, reemplaza todo el CSS inyectado previamente. Predeterminado `false` (añade) |

**Ejemplo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Devuelve** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registra un patrón de bloques reutilizable en la biblioteca de patrones de WordPress.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `slug` | string | Sí | Identificador del patrón, p. ej. `gratis/hero-dark` |
| `title` | string | Sí | Nombre del patrón legible por humanos mostrado en el editor |
| `content` | string | Sí | Marcado de bloques serializado (HTML) para el patrón |
| `categories` | array | No | Slugs de categorías del patrón, p. ej. `["featured", "hero"]` |
| `description` | string | No | Descripción breve mostrada en el selector de patrones |
| `keywords` | array | No | Palabras clave de búsqueda |

**Devuelve** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Lista todos los patrones de bloques registrados por el agente.

**Parámetros** — ninguno

**Devuelve**

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

Establece el logo del sitio WordPress en un ID de adjunto dado o en una URL de imagen remota. Cuando se proporciona una URL, la imagen se descarga y se importa en la Biblioteca de medios.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `attachment_id` | integer | No | ID de un adjunto existente de la Biblioteca de medios |
| `url` | string | No | URL de imagen remota para importar y establecer como logo |

Debe proporcionarse uno de `attachment_id` o `url`.

**Devuelve** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aplica un ajuste preestablecido con nombre de color/tipografía al `theme.json` (o `global-styles`) del tema activo. Los ajustes preestablecidos son paquetes seleccionados mantenidos por el equipo de Gratis AI Agent.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `preset` | string | Sí | Nombre del ajuste preestablecido, p. ej. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Si es `true`, fusiona con los valores existentes en lugar de reemplazarlos. Predeterminado `false` |

**Ajustes preestablecidos disponibles**

| Ajuste preestablecido | Descripción |
|---|---|
| `minimal-dark` | Fondo casi negro, texto blanco, un solo color de énfasis |
| `warm-editorial` | Fondo cálido blanquecino, encabezados con serif, colores de énfasis terrosos |
| `corporate-blue` | Paleta azul marino y blanca con tipografía profesional |
| `vibrant-startup` | Degradados brillantes, esquinas redondeadas, tipo sans-serif moderno |
| `classic-blog` | Grises neutros, interlineado cómodo, espaciado de diseño tradicional |

**Devuelve** `{ "success": true, "preset": "minimal-dark" }`

---

## Estilos globales {#global-styles}

Las capacidades de Estilos globales leen y escriben valores de theme.json mediante la API de Estilos globales de WordPress, afectando a todos los bloques y plantillas en todo el sitio.

### `get_global_styles` {#getglobalstyles}

Devuelve la configuración actual de estilos globales.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `path` | string | No | Puntero JSON a un valor específico, p. ej. `/color/palette` o `/typography/fontSizes`. Devuelve el objeto completo si se omite. |

**Devuelve** el objeto completo de estilos globales o el valor en `path`.

---

### `set_global_styles` {#setglobalstyles}

Actualiza uno o más valores en la configuración de estilos globales.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `path` | string | Sí | Puntero JSON al valor que se va a establecer, p. ej. `/color/palette` |
| `value` | any | Sí | El nuevo valor |

**Ejemplo** — añadir un color a la paleta

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Devuelve** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Restablece todos los cambios de estilos globales aplicados por el agente, restaurando los valores predeterminados del tema.

**Parámetros** — ninguno

**Devuelve** `{ "success": true }`

---

## Menús de navegación {#navigation-menus}

Las capacidades de Menús de navegación crean y gestionan menús de navegación de WordPress y sus elementos.

### `create_menu` {#createmenu}

Crea un nuevo menú de navegación de WordPress.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `name` | string | Sí | Nombre del menú, p. ej. `Primary Navigation` |
| `location` | string | No | Ubicación del tema a la que asignar este menú, p. ej. `primary` |

**Devuelve** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Cambia el nombre de un menú o lo reasigna a una ubicación del tema.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `menu_id` | integer | Sí | ID del menú que se va a actualizar |
| `name` | string | No | Nuevo nombre del menú |
| `location` | string | No | Ubicación del tema a la que asignar o reasignar |

**Devuelve** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Añade un elemento a un menú de navegación existente.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `menu_id` | integer | Sí | ID del menú de destino |
| `type` | string | Sí | Tipo de elemento: `custom`, `post_type` o `taxonomy` |
| `title` | string | No | Etiqueta para el elemento del menú (obligatoria para el tipo `custom`) |
| `url` | string | No | URL para elementos `custom` |
| `object_id` | integer | No | ID de entrada o ID de término para elementos `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID del elemento de menú bajo el cual anidar este elemento |
| `position` | integer | No | Posición basada en cero en el menú |

**Devuelve** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Elimina un elemento de un menú de navegación.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `item_id` | integer | Sí | ID del elemento de menú que se va a eliminar |

**Devuelve** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Enumera todos los menús de navegación de WordPress, incluidas sus ubicaciones de tema asignadas.

**Parámetros** — ninguno

**Devuelve**

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

## Gestión de opciones {#options-management}

Las capacidades de opciones leen y escriben opciones de WordPress mediante `get_option` / `update_option`. Una lista de bloqueo de seguridad integrada evita la modificación accidental de ajustes críticos.

### `get_option` {#getoption}

Lee una opción de WordPress.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `option_name` | string | Sí | La clave de la opción, p. ej. `blogname` |

**Devuelve** `{ "option_name": "blogname", "value": "My Site" }`

Devuelve un error si `option_name` está en la lista de bloqueo de seguridad.

---

### `set_option` {#setoption}

Escribe una opción de WordPress.

**Parámetros**

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `option_name` | string | Sí | La clave de la opción |
| `value` | any | Sí | El nuevo valor (serializado automáticamente para arrays/objetos) |
| `autoload` | string | No | `"yes"` o `"no"`. De forma predeterminada conserva el ajuste de autoload existente |

Devuelve un error si `option_name` está en la lista de bloqueo de seguridad.

**Devuelve** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Elimina una opción de WordPress.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `option_name` | string | Sí | La clave de opción que se va a eliminar |

Devuelve un error si `option_name` está en la lista de bloqueo de seguridad.

**Devuelve** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lista las opciones de WordPress que coinciden con un patrón.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `pattern` | string | No | Patrón SQL LIKE para filtrar nombres de opciones, p. ej. `gratis_%`. Devuelve todas las opciones si se omite (úsalo con precaución en bases de datos grandes). |
| `limit` | integer | No | Número máximo de resultados. Predeterminado `50`, máximo `500` |

**Devuelve**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gestión de contenido {#content-management}

Las capacidades de gestión de contenido crean y editan entradas y páginas de WordPress. Se devuelven los IDs de las entradas para que los pasos posteriores en planes de múltiples capacidades puedan hacer referencia al contenido creado.

### `create_post` {#createpost}

Crea una nueva entrada, página o entrada de tipo de contenido personalizado de WordPress.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Título de la entrada |
| `content` | string | No | Cuerpo de la entrada — acepta texto sin formato, HTML o marcado de bloques serializado |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Predeterminado `draft` |
| `post_type` | string | No | Slug del tipo de entrada, p. ej. `post`, `page` o cualquier CPT registrado. Predeterminado `post` |
| `excerpt` | string | No | Resumen breve mostrado en archivos y resultados de búsqueda |
| `categories` | array | No | Array de nombres o IDs de categorías que asignar |
| `tags` | array | No | Array de nombres o IDs de etiquetas que asignar |
| `author` | integer | No | ID de usuario de WordPress que se establecerá como autor de la entrada. De forma predeterminada es el usuario actual |
| `date` | string | No | Fecha de publicación en formato ISO 8601, p. ej. `2026-05-01T09:00:00` |
| `page_template` | string | No | Archivo de plantilla que asignar a esta entrada o página, p. ej. `page-full-width.php`. Solo tiene sentido cuando `post_type` es `page` o un CPT que admite plantillas de página. |

**Ejemplo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Devuelve** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Actualiza una entrada o página existente de WordPress.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `post_id` | integer | Sí | ID de la entrada que se va a actualizar |
| `title` | string | No | Nuevo título de la entrada |
| `content` | string | No | Nuevo cuerpo de la entrada |
| `status` | string | No | Nuevo estado: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nuevo extracto |
| `categories` | array | No | Reemplaza la lista completa de categorías por este array de nombres o IDs |
| `tags` | array | No | Reemplaza la lista completa de etiquetas por este array de nombres o IDs |
| `page_template` | string | No | Nuevo archivo de plantilla que asignar a esta entrada o página, p. ej. `page-full-width.php`. Pasa una cadena vacía para eliminar la asignación de plantilla y volver al valor predeterminado del theme. |

**Ejemplo** — cambiar la plantilla después de la creación

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Devuelve** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Crea múltiples entradas en una sola llamada de capacidad, reduciendo los viajes de ida y vuelta durante la creación de sitios o la importación masiva de contenido. Las entradas se crean en secuencia; si una falla, las demás continúan y el fallo se informa en el array de resultados.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `posts` | array | Sí | Array de objetos de entrada, cada uno acepta los mismos parámetros que `create_post` |
| `stop_on_error` | boolean | No | Si es `true`, detiene el procesamiento después del primer fallo. Predeterminado `false` |

**Ejemplo**

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

**Devuelve**

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

Asigna una imagen destacada (miniatura de entrada) a una entrada o página existente. Acepta un ID de adjunto existente de la biblioteca de medios o una URL de imagen remota; cuando se proporciona una URL, la imagen se descarga e importa automáticamente.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `post_id` | integer | Sí | ID de la entrada o página que se va a actualizar |
| `attachment_id` | integer | No | ID de un adjunto existente de la biblioteca de medios |
| `url` | string | No | URL de imagen remota que importar y establecer como imagen destacada |
| `alt_text` | string | No | Texto alternativo que aplicar al adjunto si se importa desde una URL |

Se debe proporcionar uno de `attachment_id` o `url`.

**Devuelve** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Crea un formulario de contacto usando el plugin de formularios activo (Contact Form 7, WPForms, Fluent Forms o Gravity Forms, según cuál esté instalado). Devuelve un shortcode que se puede incrustar en cualquier entrada o página.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Nombre del formulario que se muestra en la administración del plugin de formularios |
| `fields` | array | Sí | Lista ordenada de campos del formulario (consulta el objeto de campo a continuación) |
| `recipient` | string | No | Dirección de correo electrónico para recibir envíos. Por defecto es el correo electrónico de administración de WordPress |
| `subject` | string | No | Línea de asunto del correo electrónico. Admite los placeholders `[your-name]` y `[your-subject]` al usar Contact Form 7 |
| `confirmation_message` | string | No | Mensaje mostrado después de un envío correcto. Predeterminado: `"Thank you for your message. We'll be in touch soon."` |

**Objeto de campo**

| Clave | Tipo | Requerido | Descripción |
|---|---|---|---|
| `name` | string | Sí | Nombre interno del campo / clave de máquina |
| `label` | string | Sí | Etiqueta legible para humanos que se muestra en el formulario |
| `type` | string | Sí | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Si el campo debe completarse antes del envío. Predeterminado `false` |
| `options` | array | No | Opciones para campos `select`, `checkbox` y `radio` |
| `placeholder` | string | No | Texto de placeholder para entradas de tipo texto |

**Ejemplo**

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

**Devuelve**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revisión visual {#visual-review}

Las capacidades de Revisión visual permiten al agent capturar capturas de pantalla de páginas en vivo y analizarlas, lo que habilita la revisión de diseño autónoma, comparaciones de antes/después y comprobaciones de regresión visual sin requerir ninguna extensión de navegador.

### `capture_screenshot` {#capturescreenshot}

Captura una captura de pantalla de una página de WordPress en una URL determinada usando un navegador headless del lado del servidor. La imagen se guarda en la Biblioteca de medios y se devuelve una URL de CDN.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `url` | string | Sí | URL completa de la página de la que hacer la captura de pantalla, por ejemplo `https://example.com/about/` |
| `width` | integer | No | Ancho del viewport en píxeles. Predeterminado `1280` |
| `height` | integer | No | Alto del viewport en píxeles. Predeterminado `800` |
| `full_page` | boolean | No | Captura toda la página desplazable en lugar de solo el viewport. Predeterminado `false` |
| `delay_ms` | integer | No | Milisegundos que esperar después de la carga de la página antes de capturar, útil para contenido animado. Predeterminado `500` |
| `label` | string | No | Etiqueta legible para humanos almacenada con el adjunto en la Biblioteca de medios |

**Devuelve**

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

Toma dos capturas de pantalla y devuelve una puntuación de diferencia visual más una imagen de diferencia que resalta las regiones cambiadas. Útil para confirmar que un cambio de diseño produjo el resultado esperado o para detectar regresiones no intencionadas.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `before_url` | string | Sí | URL de la página que capturar como estado "antes" |
| `after_url` | string | Sí | URL de la página que capturar como estado "después". Puede ser la misma URL si se compara a lo largo del tiempo |
| `width` | integer | No | Ancho del viewport para ambas capturas. Predeterminado `1280` |
| `threshold` | float | No | Umbral de diferencia de píxeles (0.0–1.0). Los píxeles dentro de esta tolerancia se consideran sin cambios. Predeterminado `0.1` |

**Devuelve**

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

Un `diff_score` de `0.0` significa que no hay ningún cambio visible; `1.0` significa que cada píxel cambió.

---

### `review_page_design` {#reviewpagedesign}

Captura una captura de pantalla de una página y la envía al modelo de lenguaje para análisis visual. Devuelve una evaluación estructurada que cubre el diseño, la tipografía, el uso del color y los problemas de accesibilidad.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `url` | string | Sí | URL completa de la página que revisar |
| `focus` | string | No | Lista separada por comas de áreas de revisión que enfatizar: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Predeterminado: todas las áreas |
| `width` | integer | No | Ancho del viewport. Predeterminado `1280` |

**Devuelve**

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

El Registro de capacidades instalables te permite extender el agent con paquetes de capacidades adicionales distribuidos como plugins de WordPress. Cada paquete registra una o más capacidades usando la API de capacidades estándar.

### `list_available_abilities` {#listavailableabilities}

Devuelve el catálogo de paquetes de capacidades disponibles para instalar desde el registro.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `category` | string | No | Filtrar por categoría: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Devuelve**

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

Descarga y activa un paquete de habilidades desde el registro.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `slug` | string | Sí | Slug del plugin del paquete de habilidades |

**Devuelve** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Consulta el registro de habilidades para encontrar el mejor plugin para un caso de uso descrito y, opcionalmente, lo instala.

**Parámetros**

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `description` | string | Sí | Descripción en lenguaje natural de la funcionalidad deseada |
| `install` | boolean | No | Si es `true`, instala el plugin recomendado inmediatamente. Predeterminado `false` |

**Ejemplo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Devuelve**

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
