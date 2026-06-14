---
title: Imponere constantiam Aurora in Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Setting the constanta Sunrise in Closte

Algunos proveedores de alojamiento bloquean el wp-config.php por razones de seguridad. Esto significa que Ultimate Multisite no puede editar automáticamente el archivo para incluir las constantes necesarias para que el mapeo de dominios y otras funciones funcionen. Closte es uno de esos hosts.

Sin embargo, Closte ofrece una forma de añadir constantes al wp-config.php de manera segura. Solo necesitas seguir los pasos a continuación:

## En el panel de control de Closte

Primero, [inicia sesión en tu cuenta de Closte](https://app.closte.com/), haz clic en el menú Sites, y luego haz clic en el enlace Dashboard del sitio en el que estás trabajando actualmente:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Se te presentarán varios nuevos elementos de menú en el lado izquierdo de la pantalla. Navega a la página **Settings** (Configuración) usando ese menú:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Luego, en **Settings**, busca la pestaña WP-Config, y luego el campo "Additional wp-config.php content" (Contenido adicional de wp-config.php) en esa pestaña:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

En el contexto de instalar Ultimate Multisite, necesitarás añadir la constante sunrise a ese campo. Simplemente añade una nueva línea y pega la siguiente línea. Después de eso, haz clic en el botón **Save All** (Guardar todo).

define('SUNRISE', true);

Eso es todo, ya estás listo. Vuelve al asistente de instalación de Ultimate Multisite y actualiza la página para continuar con el proceso.
