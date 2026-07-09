---
title: Migración desde V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migración desde V1 {#migrating-from-v1}

## Ultimate Multisite ha cambiado de su familia original de versiones 1.x a la familia de versiones 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versión 2.0 y superiores es una reescritura completa del codebase, lo que significa que hay muy poco compartido entre la versión antigua y la nueva. Por ese motivo, al actualizar de 1.x a 2.x, tus datos deberán migrarse a un formato que las nuevas versiones puedan entender.

Afortunadamente, Ultimate Multisite 2.0+ **viene con un migrador** integrado en el núcleo que es capaz de detectar datos de la versión antigua y convertirlos al nuevo formato. Esta migración ocurre durante el **Setup Wizard** de la versión 2.0+.

Esta lección cubre cómo funciona el migrador, qué hacer en casos de fallo y cómo solucionar problemas que puedan surgir durante este proceso.

_**IMPORTANTE: Antes de comenzar a actualizar de la versión 1.x a la versión 2.0, asegúrate de crear una copia de seguridad de la base de datos de tu sitio**_

## Primeros pasos {#first-steps}

El primer paso es descargar el archivo .zip del plugin e instalar la versión 2.0 en el Dashboard de administración de tu red.

Después de [instalar y activar la versión 2.0](../getting-started/installing-ultimate-multisite.md), el sistema detectará automáticamente que tu Multisite se está ejecutando en la versión heredada y verás este mensaje en la parte superior de la página del plugin.

_**NOTA:** Si tienes Ultimate Multisite 1.x instalado en tu Multisite, tendrás la opción de reemplazar el plugin con la versión que acabas de descargar. Por favor, continúa y haz clic en **Replace current with uploaded**._

<!-- Captura de pantalla no disponible: Página del plugin que muestra la opción de reemplazar v1 con la versión v2 subida -->

La siguiente página te indicará qué add-ons heredados tienes instalados junto con la versión 1.x. Tendrá instrucciones sobre si la versión que estás usando es compatible con la versión 2.0 o si necesitas instalar una versión actualizada del add-on después de la migración.

<!-- Captura de pantalla no disponible: Mensaje en la parte superior de la página de plugins sobre la actualización a v2.0, con lista de add-ons que necesitan actualizarse -->

Una vez que estés listo para continuar, puedes hacer clic en el botón que dice **Visit the Installer to finish the upgrade**.

<!-- Captura de pantalla no disponible: Botón que dice Visit the Installer to finish the upgrade -->

Luego te llevará a la página del asistente de instalación con algunos mensajes de bienvenida. Solo necesitas hacer clic en **Get Started** para pasar a la siguiente página.

<!-- Captura de pantalla no disponible: Página de bienvenida de Setup Wizard con botón Get Started -->

Después de hacer clic en **Get Started** , te redirigirá a las Comprobaciones previas a la instalación_._ Esto te mostrará tu Información del sistema y la instalación de WordPress, y te dirá si cumple con **los requisitos de Ultimate Multisite**.

<!-- Captura de pantalla no disponible: Página de Comprobaciones previas a la instalación que muestra la confirmación de requisitos del sistema -->

El siguiente paso es introducir tu clave de licencia de Ultimate Multisite y activar el plugin. Esto garantizará que todas las funciones, incluidos los add-ons, estén disponibles en tu sitio.

<!-- Captura de pantalla no disponible: Página de activación de licencia con entrada de clave de licencia y botón Agree and Activate -->

Después de introducir tu clave, haz clic en **Agree & Activate**.

Tras la activación de la licencia, puedes comenzar la instalación real haciendo clic en **Install** en la siguiente página. Esto creará automáticamente los archivos necesarios y la base de datos necesaria para que la versión 2.0 funcione.

<!-- Captura de pantalla no disponible: Página de instalación que muestra lo que se actualizará con botón Install -->

## Ahora, la migración {#now-the-migration}

El migrador tiene una función de seguridad integrada en la que comprobará todo tu multisite para asegurarse de que todos tus datos de Ultimate Multisite puedan migrarse sin problemas. Haz clic en el botón **Run Check** para iniciar el proceso.

<!-- Captura de pantalla no disponible: Página de migración con botón Run Check para verificar que los datos se pueden convertir -->

Después de ejecutar la comprobación, tienes dos posibilidades: el resultado puede ser **con** un error o **sin un error**.

### Con error {#with-error}

Si recibes un mensaje de error, tendrás que ponerte en contacto con nuestro equipo de soporte para que puedan ayudarte a corregir el error. Asegúrate de **proporcionar el registro de errores** cuando crees un ticket. Puedes descargar el registro o hacer clic en el enlace que dice contactar con nuestro equipo de soporte. Abrirá el widget de ayuda en el lado derecho de tu página con los campos precompletados para ti, que incluyen los registros de error en la descripción.

_**Dado que el sistema encontró un error, no podrás continuar con la migración a la versión 2.0. Luego puedes volver a la versión 1.x para reanudar la ejecución de tu red hasta que se corrija el error.**_

### Sin error {#without-error}

Si el sistema no encuentra ningún error, verás un mensaje de éxito y un botón **Migrate** en la parte inferior que te permitirá continuar con la migración. En esta página, se te recordará crear una copia de seguridad de tu base de datos antes de continuar, lo cual recomendamos encarecidamente. Pulsa **Migrate** si ya tienes una copia de seguridad.

<!-- Captura de pantalla no disponible: Página de migración que muestra mensaje de éxito y recomendación de copia de seguridad -->

<!-- Captura de pantalla no disponible: Botón Migrate en la esquina inferior derecha -->

¡Y eso es todo lo que hace falta!

Puedes continuar ejecutando la configuración del Wizard para actualizar tu logotipo y otras cosas en tu red, o empezar a navegar por el menú de Ultimate Multisite versión 2.0 y su nueva interfaz. Adelante, diviértete.
