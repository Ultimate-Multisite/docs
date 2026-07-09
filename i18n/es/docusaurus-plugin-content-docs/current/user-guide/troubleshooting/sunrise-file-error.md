---
title: Error del archivo Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error al instalar el archivo Sunrise

El archivo sunrise.php es un archivo especial que WordPress busca mientras se inicia. Para que WordPress pueda detectar el archivo sunrise.php, debe estar ubicado dentro de la **carpeta wp-content**.

Cuando activas Ultimate Multisite y pasas por el asistente de configuración como el que tienes en la captura de pantalla, Ultimate Multisite intenta copiar nuestro archivo sunrise.php a la carpeta wp-content.

<!-- Captura de pantalla no disponible: página del asistente de configuración que muestra el paso de instalación de sunrise.php -->

La mayoría de las veces, podemos copiar el archivo correctamente y todo funciona. Sin embargo, si algo no está configurado correctamente (permisos de carpeta, por ejemplo), podrías encontrarte con un escenario en el que Ultimate Multisite no puede copiar el archivo.

Si lees el mensaje de error que Ultimo te muestra, verás que eso es exactamente lo que ocurrió aquí: **Falló la copia de Sunrise**.

<!-- Captura de pantalla no disponible: mensaje de error que muestra que falló la copia de Sunrise -->

Para solucionarlo, simplemente puedes copiar el archivo sunrise.php dentro de la carpeta del plugin wp-ultimo y pegarlo en tu carpeta wp-content. Después de hacerlo, recarga la página del asistente y las comprobaciones deberían superarse.

<!-- Captura de pantalla no disponible: administrador de archivos que muestra sunrise.php dentro de la carpeta del plugin wp-ultimo --> En cualquier caso, esto podría justificar una revisión general de los permisos de tus carpetas para evitar problemas en el futuro (no solo con Ultimate Multisite, sino también con otros plugins y themes).

La **herramienta Health Check** que forma parte de WordPress (puedes acceder a ella desde el **panel de administración > Herramientas > Health Check** de tu sitio principal) puede indicarte si tienes permisos de carpeta establecidos en valores que podrían causar problemas con WordPress.

<!-- Captura de pantalla no disponible: herramienta Health Check de WordPress que muestra el estado de los permisos de carpeta -->
