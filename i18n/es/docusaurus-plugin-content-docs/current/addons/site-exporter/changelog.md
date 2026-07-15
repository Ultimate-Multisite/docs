---
title: Registro de cambios del exportador de sitios
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Registro de cambios de Site Exporter

Versión: 1.0.6 - Publicada el 2026-05-11
* Nuevo: Las exportaciones de sitios ahora incluyen un index.php de arranque automático para que el ZIP pueda instalarse en un host nuevo sin una instalación separada de plugin
* Nuevo: La exportación de red permite a los administradores exportar todos los subsitios en un único archivo desde la página de administración de Site Export

Versión: 1.0.5 - Publicada el 2026-05-05
* Corrección: Se añadió __callStatic al stub polyfill de WP_CLI para manejar métodos no simulados como get_config, evitando fallos en el arranque de pruebas

Versión: 1.0.4 - Publicada el 2025-11-25

* Corregida la compatibilidad con Ultimate Multisite 2.4.

Versión: 1.0.2 - Publicada el 2025-09-28

* Renombrar prefijo a ultimate-multisite; actualizar dominio de texto; incremento de versión.

### Versión 1.0.1 - Publicada el 2023-08-09 {#version-101---released-on-2023-08-09}

* Mejorado: Ahora garantiza que se obtenga la ruta de archivo correcta del archivo del importador.
* Corregido: Se desactivó la caché de objetos para evitar errores durante la importación.
* Corregido: Se solucionó el problema con el enlace de descarga del plugin importador que no funcionaba.

### Versión 1.0.0 - Publicada el 2022-12-23 {#version-100---released-on-2022-12-23}

* Corregido: La ventana emergente del formulario de exportación no se cargaba;
* Corregido: Los archivos Javascript no se cargaban en la página de exportación;
* Interno: Nuevo proceso de compilación;

### Versión 1.0.0-beta.4 - Publicada el 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interno: Se añadió generador de hooks y filtros;
* Interno: Se añadieron stubs de WP Ultimo para mejorar la calidad de vida del desarrollador;
