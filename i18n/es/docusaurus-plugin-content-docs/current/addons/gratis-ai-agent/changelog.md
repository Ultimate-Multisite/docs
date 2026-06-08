---
title: Registro de cambios
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Lanzado el 2026-04-28

### Nuevo

- **Capacidad `create_contact_form`** — crea un formulario de contacto utilizando el plugin de formularios activo (Contact Form 7, WPForms, Fluent Forms o Gravity Forms) y devuelve un shortcode listo para incrustar en cualquier entrada o página.
- **Capacidad `set_featured_image`** — asigna una imagen destacada a una entrada o página a partir de un ID de adjunto existente en la Biblioteca de Medios o una URL remota; importa la imagen automáticamente cuando se proporciona una URL.
- **Capacidad `batch_create_posts`** — crea múltiples entradas en una sola llamada de capacidad. Admite los mismos parámetros que `create_post`, reporta el éxito/fallo por entrada y tiene un modo opcional `stop_on_error`.
- **Parámetro `page_template`** — añadido a `create_post` y `update_post`. Asigna un archivo de plantilla de página PHP (ej. `page-full-width.php`) en el momento de la creación o actualización. Pasa una cadena vacía a `update_post` para volver a la plantilla predeterminada del tema.
- **Capacidades de captura de pantalla del lado del cliente** — `capture_screenshot`, `compare_screenshots` y `review_page_design`. Capturan capturas de pantalla completas o del viewport de páginas en vivo a través de un navegador sin cabeza (headless browser) del lado del servidor, comparan dos capturas de pantalla y obtienen una revisión de diseño generada por IA que cubre el diseño, la tipografía, el color y la accesibilidad.
- **Cinco agentes integrados** — Redactor de Contenido (Content Writer), Constructor de Sitios (Site Builder), Estudio de Diseño (Design Studio), Administrador de Plugins (Plugin Manager) y Asistente de Soporte (Support Assistant). Cada agente tiene un conjunto dedicado de herramientas, un prompt de sistema adaptado y sugerencias iniciales. Se puede cambiar a través del nuevo **Selector de Agentes (Agent Picker)** en el encabezado del chat. Consulta [Agentes Integrados](../../user-guide/configuration/built-in-agents).
- **Flags de función (Feature flags)** — nueva pestaña **Ajustes → Flags de función** con interruptores de control de acceso (restringir a administradores, restringir a administradores de red, acceso de suscriptor, deshabilitar para no miembros) y opciones de marca (ocultar atribución del pie de página, nombre de agente personalizado, ocultar selector de agentes, usar el icono del sitio como avatar del chat). Consulta [Ajustes del Agente Gratis AI](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurar última sesión** — el panel de chat ahora recarga automáticamente la conversación más reciente al cargar la página y al abrir el widget, por lo que el contexto nunca se pierde durante la navegación por páginas.
- **Enlaces de acción de plugins** — ahora aparecen enlaces rápidos a Ajustes y al Registro de Capacidades (Abilities Registry) en la pantalla **Plugins → Plugins instalados** de WordPress, debajo de la descripción del plugin.

### Mejorado

- **Reintento de fuente de imagen** — el agente ahora reintenta todas las fuentes de imágenes gratuitas configuradas antes de recurrir a una imagen generada por IA en caso de fallo de descarga.
- **Panel de información del modelo** — siempre visible en el encabezado del chat; ya no está oculto después del primer mensaje.
- **Comportamiento de desplazamiento automático** — el desplazamiento automático se pausa cuando el usuario se desplaza hacia arriba para leer; aparece un botón flotante de **Ir al final** que se desvanece automáticamente cuando el usuario llega al mensaje más reciente.
- **Interfaz de usuario del Selector de Agentes (Agent Picker UI)** — rediseñada como una superposición de tabla de formulario con iconos por agente, lo que facilita identificar y cambiar de agente de un vistazo.
- **Fragmentos JS cargados perezosamente (Lazy-loaded JS chunks)** — el paquete JavaScript inicial del widget de chat ahora se divide en fragmentos cargados perezosamente, lo que reduce los tamaños del paquete inicial entre un 75% y un 90%.
- **Rediseño del widget de chat** — el icono unificado de IA reemplaza el antiguo avatar personalizado; es consistente con el sistema de agentes integrados.
- **Vínculo de URLs (URL linkification)** — las URLs que aparecen en los mensajes del sistema y en las burbujas de mensajes de error ahora se muestran como enlaces clicables.

### Corregido

- **Descubribilidad de capacidades (Ability discoverability)** — se corrigieron descripciones, referencias de prompts de sistema y alineación de espacios de nombres para que todas las capacidades aparezcan en la lista de herramientas del agente de manera fiable.
- **Caché de proveedores (Providers cache)** — los proveedores ahora se almacenan en caché en todo el sitio mediante un contador de versiones, lo que evita problemas de proveedores obsoletos en redes multisite.
- **`ability_invalid_output`** — resuelto en 12 manejadores de capacidades; todos devuelven respuestas JSON con la estructura correcta.
- **Pipeline `pending_client_tool_calls`** — conectado de extremo a extremo para que las llamadas a herramientas del lado del cliente se completen correctamente y devuelvan resultados al modelo.
- **Cajón de historial (History drawer)** — los cambios no revertibles se excluyen de la lista de reversión; el enlace **Ver historial completo** ahora funciona correctamente.
- **Sistema de cambios/reversión** — se corrigieron cinco errores separados y se unificaron bajo la nueva interfaz de administración.
- **Toast de guardado de ajustes** — la notificación snackbar ahora aparece de forma fiable después de hacer clic en **Guardar ajustes**.
- **Menú contextual de papelera** — se añadió la opción **Eliminar permanentemente** para que los elementos puedan eliminarse de forma definitiva sin salir de la vista de papelera.
- **Editar y reenviar** — hacer clic en el icono de editar ahora entra en modo de edición solo para el mensaje seleccionado, no para todos los mensajes del hilo.
- **Altura del diseño del chat** — el panel de chat adapta su altura cuando aparece contenido inyectado por plugins (avisos de administración, banners) encima de la página, evitando que el área de entrada se desplace fuera de la pantalla.

---

## 1.4.0 — Lanzado el 2026-04-09

### Nuevo

- **Comando de benchmark de WP-CLI** (`wp gratis-ai-agent benchmark`) — ejecuta el conjunto de pruebas de referencia Agent Capabilities v1 desde la línea de comandos para pipelines de CI y flujos de trabajo de evaluación de modelos. Admite ejecuciones por pregunta, anulación de proveedores/modelos y salida JSON/CSV.
- **Conjunto de pruebas de referencia Agent Capabilities v1** — un conjunto estructurado de prompts complejos y de múltiples pasos que ejercitan toda la superficie de capacidades, con puntuación y reportes de tokens/duración.
- **Capacidades para Tipos de Contenido Personalizados (Custom Post Type abilities)** — `register_post_type`, `list_post_types`, `delete_post_type`. Los registros persisten después de reinicios a través de la tabla de opciones.
- **Capacidades para Taxonomías Personalizadas (Custom Taxonomy abilities)** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Admite taxonomías jerárquicas y planas con slugs de reescritura opcionales.
- **Capacidades de Sistema de Diseño (Design System abilities)** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Incluye cinco presets seleccionados: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Capacidades de Estilos Globales (Global Styles abilities)** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lee y escribe valores de theme.json a través de la API de Estilos Globales de WordPress.
- **Capacidad de gestión de menús de navegación (Navigation Menu management ability)** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Admite menús anidados y asignación de ubicación del tema.
- **Capacidad de gestión de opciones (Options Management ability)** — `get_option`, `set_option`, `delete_option`, `list_options`. Incluye una lista negra de seguridad integrada que protege las opciones críticas de WordPress de modificaciones.
- **Registro de Capacidades instalables (Installable Abilities Registry)** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Descubre y activa paquetes de capacidades distribuidos como plugins de WordPress.
- **Orquestación del Constructor de Sitios v2 (Site Builder Orchestration v2)** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Planes de construcción de sitios multifase con descubrimiento de plugins, referencias de salida de pasos, seguimiento del progreso y recuperación autónoma de errores.
- **Pregunta de benchmark para sitio web de restaurante (`q-restaurant-website`)** — prueba de extremo a extremo que cubre el registro de CPT, sistema de diseño, navegación y descubrimiento de plugins.
- **Plugins con conector de proveedores de IA** añadidos a los blueprints de WordPress Playground para una configuración de desarrollo local más rápida.

### Mejorado

- README actualizado con documentación e instrucciones de configuración para el conector de proveedores de IA.

### Corregido

- Resueltos 25 fallos de prueba PHPUnit en la rama `main`.
- Corregado el formato de URL de lanzamientos de GitHub en `blueprint.json`.
- Renumeración del ID de tarea para evitar colisiones con IDs antiguos.

---

## 1.3.x

_Las notas de la versión anterior se mantienen en el repositorio del plugin._
