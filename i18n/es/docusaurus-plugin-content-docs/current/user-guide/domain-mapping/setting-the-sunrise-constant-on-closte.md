---
title: Configuración de la constante Sunrise en Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Establecer la constante Sunrise en true en Closte

Algunos proveedores de hosting bloquean el wp-config.php por motivos de seguridad. Esto significa que Ultimate Multisite no puede editar automáticamente el archivo para incluir las constantes necesarias para que el mapeo de dominios y otras funciones funcionen. Closte es uno de esos proveedores de hosting.

Sin embargo, Closte ofrece una forma de añadir constantes al wp-config.php de manera segura. Solo tienes que seguir los pasos a continuación:

## En el Dashboard de Closte

Primero, [inicia sesión en tu Account de Closte](https://app.closte.com/), haz clic en el elemento de menú Sites y luego haz clic en el enlace Dashboard del sitio en el que estás trabajando actualmente:

<!-- Captura de pantalla no disponible: Dashboard de Closte que muestra el menú Sites y el enlace Dashboard -->

Se te presentarán varios elementos de menú nuevos en el lado izquierdo de la pantalla. Navega a la página **Settings** usando ese menú:

<!-- Captura de pantalla no disponible: menú de la barra lateral izquierda de Closte que muestra la opción Settings -->

Luego, en **Settings**, busca la pestaña WP-Config y luego el campo "Additional wp-config.php content" en esa pestaña:

<!-- Captura de pantalla no disponible: página Settings de Closte con la pestaña WP-Config que muestra el campo Additional wp-config.php content -->

En el contexto de instalar Ultimate Multisite, tendrás que añadir la constante sunrise en ese campo. Simplemente añade una nueva línea y pega la línea de abajo. Después de eso, haz clic en el botón **Save All**.

define('SUNRISE', true);

Eso es todo, ya está todo listo. Vuelve al asistente de instalación de Ultimate Multisite y actualiza la página para continuar el proceso.
