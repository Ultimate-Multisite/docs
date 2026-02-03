---
title: Registro de cambios de Content Sync
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Registro de cambios de sincronización de contenido

### Versión 1.1.0 - Lanzado el 2025-12-31
* Nuevo: Soporte para sincronizar todos los tipos de publicación (posts, páginas, tipos de publicación personalizados)
* Nuevo: Filtrado por tipo de publicación en el paso de selección de contenido
* Nuevo: Paso de selección del sitio fuente - sincronizar desde cualquier sitio, no solo el sitio principal
* Nuevo: Preselección de sitios secundarios para sitios de plantillas
* Nuevo: Extracción de medios desde post_content para todos los tipos de publicación
* Nuevo: Sincronización de taxonomías (categorías, etiquetas, taxonomías personalizadas)
* Cambiado: Renombrado de "Elementor Template Sync" a "Content Sync"
* Cambiado: Paso "Select Templates" renombrado a "Select Data"
* Mejorado: El código específico de Elementor ahora solo se ejecuta para el tipo de publicación elementor_library

### Versión 1.0.0 - Lanzado el 2025-12-19
* Lanzamiento inicial
* Asistente de varios pasos para la selección de plantillas y sitios
* Procesamiento por lotes con retroalimentación de progreso en tiempo real
* Sincronización completa de medios con reasignación automática de ID
* Integración de ajustes con Ultimate Multisite
* Soporte de exclusión de sitios a través de ajustes de red
* Limpieza de caché de Elementor después de la sincronización
* Preservación de la taxonomía de plantillas
