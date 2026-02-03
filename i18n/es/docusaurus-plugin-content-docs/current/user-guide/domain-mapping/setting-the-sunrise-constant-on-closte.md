---
title: Configuración de la constante Sunrise en Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Configurar la constante Sunrise a true en Closte

Algunos proveedores de hosting bloquean el wp-config.php por razones de seguridad. Esto significa que Ultimate Multisite no puede editar el archivo automáticamente para incluir las constantes necesarias y que el mapeo de dominios y otras funciones funcionen. Closte es uno de esos hosts.

Sin embargo, Closte ofrece una forma de añadir constantes al wp-config.php de manera segura. Solo necesitas seguir los pasos a continuación:

## En el panel de Closte

Primero, [inicia sesión en tu cuenta de Closte](https://app.closte.com/), haz clic en el elemento del menú Sites, luego haz clic en el enlace Dashboard en el sitio en el que estás trabajando actualmente:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dPRIeofCDK.png)

Se te presentará una serie de nuevos elementos de menú en el lado izquierdo de la pantalla. Navega a la página **Settings** usando ese menú:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JmSwHIOaGz.png)

Luego, en **Settings**, encuentra la pestaña WP-Config, y luego el campo "Additional wp-config.php content" en esa pestaña:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FqVEnSTIu9.png)

En el contexto de la instalación de Ultimate Multisite, necesitarás añadir la constante sunrise en ese campo. Simplemente añade una nueva línea y pega la línea a continuación. Después, haz clic en el botón **Save All**.

define('SUNRISE', true);

Eso es todo, ya estás listo. Regresa al asistente de instalación de Ultimate Multisite y actualiza la página para continuar con el proceso.
