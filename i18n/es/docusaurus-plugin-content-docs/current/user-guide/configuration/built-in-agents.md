---
title: Agentes integrados
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents integrados

Gratis AI Agent v1.9.0 incluye cinco agents integrados, cada uno preconfigurado con un conjunto enfocado de herramientas, un system prompt adaptado y sugerencias iniciales ajustadas a tareas comunes en esa área. Cambiar entre agents modifica lo que el asistente puede hacer y cómo responde, sin ninguna configuración por tu parte. Superdav AI Agent v1.18.0 puede añadir herramientas conscientes de horarios, registros de recordatorios, puertas de aprobación y notificaciones SMS a estos flujos de trabajo cuando las integraciones relacionadas están configuradas.

## ¿Qué es un Agent?

Cada agent es un perfil de configuración con nombre que combina:

- **Herramientas** — las capacidades que el agent tiene permitido invocar (p. ej., un redactor de contenido tiene acceso a capacidades de creación de entradas; un estudio de diseño tiene acceso a capacidades de CSS y theme.json)
- **System prompt** — instrucciones que establecen el tono, las prioridades y las restricciones del agent
- **Sugerencias** — prompts preescritos que se muestran en la interfaz de chat para ayudarte a empezar rápidamente

## Acceder al selector de Agent

1. Abre el panel **Gratis AI Agent** en la barra lateral de administración de WordPress.
2. Haz clic en el **icono de agent** en la parte superior izquierda del encabezado del chat (el icono cambia para reflejar el agent activo).
3. El **Selector de Agent** se abre como una superposición de tabla de formulario. Cada agent aparece con su icono, nombre y una descripción de una línea.
4. Haz clic en una fila de agent para activarlo. El encabezado del chat se actualiza de inmediato.

También puedes cambiar de agents a mitad de una conversación: el system prompt del nuevo agent entra en vigor a partir del siguiente mensaje.

## Los cinco Agents integrados

### Redactor de contenido

**Enfoque:** Crear y editar entradas, páginas y formularios de contacto.

**Herramientas disponibles:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Con las integraciones de Superdav AI Agent v1.18.0 activadas, también pueden estar disponibles para flujos de trabajo aprobados el contexto de calendario configurado, puertas de aprobación, recordatorios y herramientas de notificación SMS.

**Lo que hace bien:**
- Redactar y publicar entradas de blog a partir de un brief o esquema
- Crear lotes de páginas de destino para un sitio nuevo
- Crear formularios de contacto y consulta
- Establecer imágenes destacadas en entradas desde una URL o búsqueda
- Redactar mensajes de seguimiento de eventos a partir del contexto configurado de Google Calendar y luego pausar para aprobación antes de enviar notificaciones

**Sugerencias iniciales:**
- *Escribe una entrada de blog de 500 palabras sobre los beneficios de WordPress multisite.*
- *Crea una página Acerca de, Servicios y Contacto y publícalas.*
- *Añade un formulario de consulta de reservas a la página Contacto.*
- *Redacta un recordatorio para los asistentes del evento configurado en el calendario de mañana y espera la aprobación antes de enviarlo.*

---

### Constructor de sitios

**Enfoque:** Creación integral de sitios web desde un único prompt.

**Herramientas disponibles:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Con Superdav AI Agent v1.18.0, pueden estar disponibles herramientas configuradas de servicio gestionado, aprobación, recordatorio, calendario y SMS cuando los administradores las habiliten.

**Lo que hace bien:**
- Generar un plan de creación de sitio en varias fases para un tipo de negocio descrito
- Ejecutar cada fase de forma autónoma: estructura, contenido, navegación, diseño
- Recuperarse de errores a mitad del plan sin requerir intervención manual
- Instalar plugins recomendados como parte de la creación
- Crear formularios de contacto directamente desde la interfaz de chat (Superdav AI Agent v1.10.0+)
- Coordinar recordatorios de lanzamiento o seguimiento de asistentes sin notificaciones duplicadas cuando las puertas de aprobación y los registros de recordatorios están activados

**Sugerencias iniciales:**
- *Crea un sitio de portafolio de fotografía con un tipo de entrada de galería, una página de reservas y un formulario de contacto.*
- *Crea un sitio web de restaurante con un menú en línea, horario de apertura y un formulario de consulta para reservar mesa.*
- *Configura un sitio de consultoría freelance con páginas de servicios, una sección de portafolio y un blog.*
- *Añade un formulario de contacto a la página Contacto usando el constructor de sitios.*
- *Después de que se apruebe la lista de verificación de lanzamiento del sitio, envía un recordatorio SMS al contacto de parte interesada configurado.*

---

### Estudio de diseño

**Enfoque:** Personalización visual: colores, tipografía, CSS y patrones de bloques.

**Herramientas disponibles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Lo que hace bien:**
- Aplicar presets de theme con nombre (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar con precisión la tipografía global y las paletas de colores mediante theme.json
- Inyectar CSS personalizado para anulaciones específicas de la marca
- Tomar una captura de pantalla de una página y revisarla para detectar problemas de diseño

**Sugerencias iniciales:**
- *Aplica el preset warm-editorial y luego establece el color primario en #2d6a4f.*
- *Toma una captura de pantalla de la página de inicio y dime qué mejorarías.*
- *Crea un patrón de bloque hero reutilizable con una imagen de fondo de ancho completo y un encabezado centrado.*

### Gestor de plugins

**Enfoque:** Descubrir, instalar y gestionar plugins de WordPress.

**Herramientas disponibles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Lo que hace bien:**
- Recomendar el mejor plugin para un caso de uso descrito
- Instalar paquetes de capacidades desde el registro
- Explorar el catálogo de capacidades disponibles por categoría

**Sugerencias iniciales:**
- *¿Cuál es el mejor plugin para un directorio de membresía?*
- *Instala el paquete de capacidades de WooCommerce.*
- *Muéstrame todos los paquetes de capacidades de comercio electrónico disponibles.*

---

### Asistente de soporte

**Enfoque:** Responder preguntas sobre el contenido del sitio, los ajustes y la configuración de WordPress.

**Herramientas disponibles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Lo que hace bien:**
- Buscar ajustes y opciones actuales del sitio
- Explicar qué tipos de entrada, taxonomías y menús están configurados en el sitio
- Responder preguntas de "¿qué hace este ajuste?" leyendo valores en vivo
- Servir como una capa de diagnóstico de solo lectura antes de hacer cambios

**Sugerencias iniciales:**
- *¿Qué plugins y ajustes están activos actualmente en este sitio?*
- *Enumera todos los tipos de entrada personalizados registrados en este sitio.*
- *¿Qué menús de navegación existen y dónde están asignados?*

---

## Integraciones de automatización de Superdav

Cuando las integraciones de Superdav AI Agent v1.18.0 están configuradas, los agentes integrados pueden participar en flujos de trabajo de automatización más seguros y conscientes de la programación:

- **Herramientas de lectura de Google Calendar** permiten a los agentes inspeccionar calendarios y eventos configurados antes de redactar trabajo de seguimiento.
- **Mapeo de contactos y asistentes** ayuda a relacionar a los participantes del evento con usuarios de WordPress o contactos conocidos.
- **Puertas de aprobación humana** pausan acciones sensibles hasta que un usuario autorizado las revise y confirme.
- **Registros de recordatorios** evitan notificaciones duplicadas cuando los trabajos programados se reintentan o se repiten.
- **Notificaciones SMS de TextBee** envían mensajes de texto configurados solo cuando las credenciales de SMS y los permisos del flujo de trabajo están habilitados.

Flujo de trabajo recomendado: pide al agente que prepare el mensaje o la acción, revisa la solicitud de aprobación y luego permite que se reanude la acción aprobada. Para recordatorios recurrentes, mantén la deduplicación de recordatorios habilitada para que el mismo evento o contacto no reciba notificaciones repetidas.

---

## Personalización de agentes

Cada agente integrado se puede ampliar o reemplazar mediante el filtro `gratis_ai_agent_agents`.

### Añadir un prompt del sistema personalizado a un agente existente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrar un nuevo agente

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

El nuevo agente aparece en el selector de agentes inmediatamente después de que se ejecute el filtro.

### Eliminar un agente integrado

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
