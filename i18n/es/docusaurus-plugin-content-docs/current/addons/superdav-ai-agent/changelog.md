---
title: Registro de cambios
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Registro de cambios

## 1.18.0 — Publicado el 2026-06-29 {#1180--released-on-2026-06-29}

### Nuevo {#new}

- **Herramientas de Google Calendar** — leen calendarios y eventos configurados para automatizaciones conscientes de la agenda
- **Asignación de contactos y asistentes de participantes** — relacionan participantes del calendario con usuarios y contactos del sitio
- **Puertas de aprobación humana y registros de recordatorios** — pausan automatizaciones para revisión y evitan notificaciones duplicadas
- **Proveedor de SMS TextBee** — envía notificaciones configuradas de mensajes de texto a través de TextBee
- **Paquete complementario avanzado** — añade herramientas de sistema de archivos para desarrolladores de confianza, base de datos, WP-CLI, despachador REST, creador de plugins, instantánea de git, gestión de usuarios y benchmark distribuidas por separado de la compilación de WordPress.org

### Mejorado {#improved}

- **Configuración del servicio gestionado Superdav** — añade endpoints de servicio alojado y aprovisionamiento automático de conexiones para sitios compatibles
- **Empaquetado de versiones** — crea ZIPs separados del núcleo y avanzados, publica ambos en GitHub y envía solo el paquete del núcleo a WordPress.org

### Corregido {#fixed}

- **Fiabilidad de solicitudes de AI** — mejora la selección de modelos, los tiempos de espera de solicitudes, el modelo de configuración predeterminado, el manejo de texto de razonamiento y la orientación de reintentos para llamadas de herramientas no válidas
- **Refuerzo de calendarios y recordatorios** — fortalece los tokens de Google Calendar y la deduplicación de recordatorios
- **Reanudaciones de incorporación y aprobación** — corrige los inicios de incorporación del frontend y las reanudaciones de habilidades confirmadas
- **Problemas de revisión de empaquetado de WordPress.org** — aborda los comentarios de revisión de empaquetado para la versión del núcleo

## 1.16.0 — Publicado el 2026-05-20 {#1160--released-on-2026-05-20}

### Nuevo {#new-1}

- **Habilidad de generar SVG de logotipo** — Theme Builder ahora puede generar e incrustar SVGs de logotipo personalizados con saneamiento seguro para espacios de nombres
- **Subida de fotos en la entrevista de descubrimiento** — la entrevista de descubrimiento de Theme Builder ahora incluye un paso de subida de fotos para un contexto de diseño más rico
- **Habilidad de validar contraste de paleta** — comprueba pares de colores para cumplimiento con WCAG antes de aplicarlos a un tema
- **Menús de hostelería** — Theme Builder ahora puede generar páginas de menús estructurados de comida y bebida para negocios de hostelería
- **Renderizado de vista previa de escritorio y móvil** — previsualiza tu diseño en dispositivos de escritorio y móviles durante la selección de dirección de diseño
- **Parámetro de etiqueta de navegación** — la habilidad Crear menú ahora admite un `navigation_label` distinto, separado del título de la página
- **Disponibilidad de herramienta de nivel 1** — sd-ai-agent/site-scrape ahora es una herramienta de nivel 1 disponible de forma predeterminada en Theme Builder

### Corregido {#fixed-1}

- **Caché del cliente AI** — ahora respaldada por transients para persistencia entre solicitudes, evitando la pérdida de datos en tareas de agente de larga duración
- **Enlaces de acción de fila del plugin** — corregidos y renombrados para mayor claridad

## 1.10.0 — Publicado el 2026-05-05 {#1100--released-on-2026-05-05}

### Nuevo {#new-2}

- **Búsqueda en internet Tavily** — añade Tavily como proveedor de búsqueda para resultados de búsqueda en internet más completos junto con Brave Search
- **Habilidades integradas conscientes del tema** — las guías de habilidades de Block Themes, Classic Themes, Kadence Blocks y Kadence Theme ahora se incluyen con el plugin
- **Habilidad de formulario de contacto del creador de sitios** — añade un formulario de contacto a cualquier página directamente desde la interfaz de chat

### Mejorado {#improved-1}

- **Integración de WooCommerce refactorizada** — ahora usa APIs nativas de WooCommerce para mayor fiabilidad y compatibilidad
- **La lista de proveedores se actualiza automáticamente** — cuando cualquier plugin se activa o desactiva

### Corregido {#fixed-2}

- **Habilidad navigate-to** — corregido un bucle de recarga infinito en algunas páginas de administración
- **Habilidad list-posts** — ahora resuelve correctamente nombres de categorías y etiquetas a slugs
- **Comandos WP-CLI** — restaurados alias de espacio de nombres faltantes tras una refactorización anterior
- **Automatización de eventos** — maneja correctamente sitios donde las tablas de automatización aún no se han creado
- **Habilidad memory-save** — ahora usa el prefijo de espacio de nombres correcto en el constructor de instrucciones del sistema
- **Resultados escalares de herramientas** — ahora se envuelven correctamente antes de devolverse a la AI
- **Estadísticas de uso** — ahora manejan correctamente el formato de clave de habilidad heredado al actualizar desde versiones anteriores
