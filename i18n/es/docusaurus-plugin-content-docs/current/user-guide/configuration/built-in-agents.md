---
title: Agentes incorporados
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Integrados

Gratis AI Agent v1.9.0 incluye cinco agents integrados, cada uno preconfigurado con un conjunto de herramientas enfocado, un *system prompt* adaptado y sugerencias iniciales que coinciden con tareas comunes en esa área. Cambiar entre agents cambia lo que puede hacer el asistente y cómo responde, sin que tengas que configurar nada.

## ¿Qué es un Agent?

Cada agent es un perfil de configuración con nombre que combina:

- **Tools** — las habilidades que el agent tiene permitido invocar (por ejemplo, un Redactor de Contenido tiene acceso a habilidades de creación de publicaciones; un Estudio de Diseño tiene acceso a habilidades de CSS y theme.json).
- **System prompt** — instrucciones que establecen el tono, las prioridades y las limitaciones del agent.
- **Suggestions** — *prompts* preescritos que se muestran en la interfaz de chat para ayudarte a empezar rápidamente.

## Accediendo al Selector de Agents

1. Abre el panel **Gratis AI Agent** en la barra lateral de administración de WordPress.
2. Haz clic en el **icono de agent** en la esquina superior izquierda del encabezado del chat (el icono cambia para reflejar el agent activo).
3. El **Agent Picker** se abre como una superposición de tabla de formulario. Cada agent se lista con su icono, nombre y una descripción de una línea.
4. Haz clic en una fila de agent para activarlo. El encabezado del chat se actualiza inmediatamente.

También puedes cambiar de agent a mitad de una conversación: el *system prompt* del nuevo agent entra en vigor con el siguiente mensaje.

## Los Cinco Agents Integrados

### Redactor de Contenido (Content Writer)

**Enfoque:** Crear y editar publicaciones, páginas y formularios de contacto.

**Tools disponibles:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Lo que hace bien:**
- Redactar y publicar entradas de blog a partir de un resumen o un esquema.
- Crear lotes de páginas de aterrizaje para un sitio nuevo.
- Construir formularios de contacto y de consulta.
- Establecer imágenes destacadas en publicaciones a partir de una URL o una búsqueda.

**Sugerencias iniciales:**
- *Escribe una entrada de blog de 500 palabras sobre los beneficios de WordPress multisite.*
- *Crea una página de Acerca de, Servicios y Contacto y publícalas.*
- *Añade un formulario de consulta de reservas a la página de Contacto.*

---

### Constructor de Sitios (Site Builder)

**Enfoque:** Creación de sitios web de principio a fin a partir de un solo *prompt*.

**Tools disponibles:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Lo que hace bien:**
- Generar un plan de construcción de sitio multifase para un tipo de negocio descrito.
- Ejecutar cada fase de forma autónoma: estructura, contenido, navegación, diseño.
- Recuperarse de errores a mitad del plan sin requerir intervención manual.
- Instalar plugins recomendados como parte de la construcción.
- Crear formularios de contacto directamente desde la interfaz de chat (Superdav AI Agent v1.10.0+).

**Sugerencias iniciales:**
- *Construye un sitio de portafolio fotográfico con un tipo de publicación de galería, una página de reservas y un formulario de contacto.*
- *Crea un sitio web de restaurante con un menú en línea, horarios de apertura y un formulario de consulta de reservas de mesa.*
- *Configura un sitio de consultoría *freelance* con páginas de servicios, una sección de portafolio y un blog.*
- *Añade un formulario de contacto a la página de Contacto usando el constructor de sitios.*

---

### Estudio de Diseño (Design Studio)

**Enfoque:** Personalización visual: colores, tipografía, CSS y patrones de bloques.

**Tools disponibles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Lo que hace bien:**
- Aplicar presets de temas con nombre (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- Ajustar la tipografía y las paletas de colores globales a través de theme.json.
- Inyectar CSS personalizado para anular estilos específicos de la marca.
- Tomar una captura de pantalla de una página y revisarla en busca de problemas de diseño.

**Sugerencias iniciales:**
- *Aplica el preset warm-editorial y luego establece el color primario en #2d6a4f.*
- *Toma una captura de pantalla de la página de inicio y dime qué mejorarías.*
- *Crea un patrón de bloque de héroe reutilizable con una imagen de fondo de ancho completo y un encabezado centrado.*

---

### Administrador de Plugins (Plugin Manager)

**Enfoque:** Descubrir, instalar y gestionar plugins de WordPress.

**Tools disponibles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Lo que hace bien:**
- Recomendar el mejor plugin para un caso de uso descrito.
- Instalar paquetes de habilidades desde el registro.
- Navegar por el catálogo de habilidades disponibles por categoría.

**Sugerencias iniciales:**
- *¿Cuál es el mejor plugin para un directorio de membresía?*
- *Instala el paquete de habilidades de WooCommerce.*
- *Muéstrame todos los paquetes de habilidades de comercio electrónico disponibles.*

---

### Asistente de Soporte (Support Assistant)

**Enfoque:** Responder preguntas sobre el contenido del sitio, la configuración y la configuración de WordPress.

**Tools disponibles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Lo que hace bien:**
- Consultar la configuración y las opciones actuales del sitio.
- Explicar qué tipos de publicaciones, taxonomías y menús están configurados en el sitio.
- Responder preguntas como "¿qué hace esta configuración?" leyendo valores en vivo.
- Servir como una capa de diagnóstico de solo lectura antes de realizar cambios.

**Sugerencias iniciales:**
- *¿Qué plugins y configuraciones están activos actualmente en este sitio?*
- *Enumera todos los tipos de publicaciones personalizadas registrados en este sitio.*
- *¿Qué menús de navegación existen y dónde están asignados?*

---

## Personalizando Agents

Cada agent integrado puede ampliarse o reemplazarse a través del filtro `gratis_ai_agent_agents`.

### Añadir un system prompt personalizado a un agent existente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrar un nuevo agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

El nuevo agent aparecerá en el Agent Picker inmediatamente después de que se ejecute el filtro.

### Eliminar un agent integrado

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
