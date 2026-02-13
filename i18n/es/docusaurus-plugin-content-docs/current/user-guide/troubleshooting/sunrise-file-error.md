---
title: Error de archivo Sunrise
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Error al instalar el archivo Sunrise

El archivo sunrise.php es un archivo especial que WordPress busca mientras se inicia. Para que WordPress pueda detectar el archivo sunrise.php, debe estar ubicado dentro de la carpeta **wp-content**.

Cuando activas Ultimate Multisite y pasas por el asistente de configuración como el que tienes en la captura de pantalla, Ultimate Multisite intenta copiar nuestro archivo sunrise.php a la carpeta wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

La mayoría de las veces podemos copiar el archivo con éxito y todo funciona. Sin embargo, si algo no está configurado correctamente (por ejemplo, los permisos de la carpeta), podrías encontrarte con un escenario en el que Ultimate Multisite no pueda copiar el archivo.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Si lees el mensaje de error que te da Ultimo, verás que eso es exactamente lo que ocurrió aquí: **Sunrise copy failed**.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

Para solucionar eso, simplemente puedes copiar el archivo sunrise.php dentro de la carpeta del plugin wp-ultimo y pegarlo en tu carpeta wp-content. Después de hacer eso, recarga la página del asistente y las comprobaciones deberían pasar.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->

La herramienta **Health Check** que forma parte de WordPress (puedes acceder a ella a través del **admin panel > Tools > Health Check** de tu sitio principal) es capaz de informarte si tienes permisos de carpeta configurados con valores que podrían causar problemas con WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
