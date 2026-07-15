---
title: Errare de Sunrise Dosilo
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erro Instalado de Sunrise File

La carpeta `sunrise.php` es un archivo especial que WordPress busca mientras se inicia (bootstraps). Para que WordPress pueda detectar el archivo `sunrise.php`, necesita estar ubicado dentro de la carpeta **wp-content**.

Cuando activas Ultimate Multisite y sigues el asistente de configuración como el que ves en la captura de pantalla, Ultimate Multisite intenta copiar nuestro archivo `sunrise.php` a la carpeta wp-content.

<!-- Captura de pantalla no disponible: Página del asistente de configuración mostrando el paso de instalación de sunrise.php -->

La mayoría de las veces, logramos copiar el archivo con éxito y todo funciona bien. Sin embargo, si algo no está configurado correctamente (por ejemplo, los permisos de la carpeta), podrías encontrarte en una situación donde Ultimate Multisite no puede copiar el archivo.

Si lees el mensaje de error que te da Ultimo, verás exactamente lo que pasó aquí: **Sunrise copy failed** (Copia de Sunrise fallida).

<!-- Captura de pantalla no disponible: Mensaje de error mostrando Sunrise copy failed -->

Para solucionarlo, simplemente copia el archivo `sunrise.php` dentro de la carpeta del plugin wp-ultimo y pégalo en tu carpeta wp-content. Después de hacer eso, recarga la página del asistente y las comprobaciones deberían pasar.

<!-- Captura de pantalla no disponible: Gestor de archivos mostrando sunrise.php dentro de la carpeta del plugin wp-ultimo --> De todos modos, esto podría requerir una revisión general de los permisos de tus carpetas para evitar problemas en el futuro (no solo con Ultimate Multisite, sino también con otros plugins y temas).

La **Health Check tool** (Herramienta de Comprobación de Salud) que forma parte de WordPress (puedes acceder a ella a través del panel de administración principal de tu sitio: **admin panel > Tools > Health Check**) es capaz de informarte si tienes los permisos de carpeta configurados con valores que podrían causar problemas con WordPress.

<!-- Skrinshot ne estas mal disponebla: Instrumento de kontrolado de WordPress montras la statŭon permovigo de la voluniro -->
