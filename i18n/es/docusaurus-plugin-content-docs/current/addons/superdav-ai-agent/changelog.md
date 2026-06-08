---
title: Registro de cambios
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Registro de cambios

## 1.16.0 — Lanzado el 2026-05-20

### Novedades

- **Capacidad de generar SVG de logo** — Theme Builder ahora puede generar e incrustar SVGs de logo personalizados con sanitización segura del namespace.
- **Subida de fotos en la entrevista de descubrimiento** — La entrevista de descubrimiento de Theme Builder ahora incluye un paso para subir fotos, lo que enriquece el contexto de diseño.
- **Capacidad de validar el contraste de la paleta** — Comprueba los pares de colores para el cumplimiento de WCAG antes de aplicarlos a un tema.
- **Menús de hostelería** — Theme Builder ahora puede generar páginas de menús de alimentos y bebidas estructurados para negocios de hostelería.
- **Renderizado de previsualización en escritorio y móvil** — Previsualiza tu diseño en dispositivos de escritorio y móviles durante la selección de la dirección de diseño.
- **Parámetro de etiqueta de navegación** — La capacidad de Crear Menú ahora admite un `navigation_label` distinto, separado del título de la página.
- **Disponibilidad de herramientas de Nivel 1** — sd-ai-agent/site-scrape ahora es una herramienta de Nivel 1 disponible por defecto en Theme Builder.

### Solucionado

- **Cache del cliente de IA** — ahora está respaldado por transitorios para la persistencia entre solicitudes, evitando la pérdida de datos en tareas de agente de larga duración.
- **Enlaces de acción de fila de plugin** — corregidos y renombrados para mayor claridad.

## 1.10.0 — Lanzado el 2026-05-05

### Novedades

- **Búsqueda de internet con Tavily** — añadir Tavily como proveedor de búsqueda para resultados de búsqueda de internet más ricos, junto con Brave Search.
- **Habilidades integradas conscientes del tema** — Las guías de habilidades para Block Themes, Classic Themes, Kadence Blocks y Kadence Theme ahora vienen con el plugin.
- **Capacidad de formulario de contacto del constructor de sitios** — añadir un formulario de contacto a cualquier página directamente desde la interfaz de chat.

### Mejorado

- **Integración de WooCommerce refactorizada** — ahora utiliza las APIs nativas de WooCommerce para una mejor fiabilidad y compatibilidad.
- **Lista de proveedores se actualiza automáticamente** — cuando se activa o desactiva cualquier plugin.

### Solucionado

- **Capacidad `navigate-to`** — se corrigió el bucle de recarga infinita en algunas páginas de administración.
- **Capacidad `list-posts`** — ahora resuelve correctamente los nombres de categorías y etiquetas a slugs.
- **Comandos WP-CLI** — se restauraron los alias de namespace faltantes después de una refactorización anterior.
- **Automatización de eventos** — maneja con normalidad los sitios donde las tablas de automatización aún no han sido creadas.
- **Capacidad `memory-save`** — ahora utiliza el prefijo de namespace correcto en el constructor de instrucciones del sistema.
- **Resultados de la herramienta Scalar** — ahora se envuelven correctamente antes de ser devueltos a la IA.
- **Estadísticas de uso** — ahora manejan correctamente el formato de clave de capacidad heredado al actualizar desde versiones anteriores.
