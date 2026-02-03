---
title: Migración desde V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Migrando desde V1

## Ultimate Multisite ha cambiado de su familia original de lanzamientos 1.x a la familia de lanzamientos 2.x.

La versión 2.0 y posteriores de Ultimate Multisite es una reescritura completa de la base de código, lo que significa que hay muy poco en común entre la versión antigua y la nueva. Por esa razón, al actualizar de 1.x a 2.x, sus datos deberán migrarse a un formato que las nuevas versiones puedan entender.

Afortunadamente, Ultimate Multisite 2.0+ **viene con un migrador** incorporado en el núcleo que es capaz de detectar datos de la versión antigua y convertirlos al nuevo formato. Esta migración ocurre durante el **Asistente de Configuración** de la versión 2.0+.

Esta lección cubre cómo funciona el migrador, qué hacer en caso de fallo y cómo solucionar problemas que puedan surgir durante este proceso.

_**IMPORTANTE: Antes de comenzar la actualización de la versión 1.x a la 2.0, asegúrese de crear una copia de seguridad de la base de datos de su sitio**_

## Primeros pasos

El primer paso es descargar el archivo .zip del plugin e instalar la versión 2.0 en el panel de administración de su red.

Después de [instalar y activar la versión 2.0](../getting-started/installing-ultimate-multisite.md), el sistema detectará automáticamente que su Multisite está ejecutándose en la versión heredada y verá este mensaje en la parte superior de la página del plugin.

_**NOTA:** Si tiene Ultimate Multisite 1.x instalado en su Multisite, tendrá la opción de reemplazar el plugin con la versión que acaba de descargar. Por favor, continúe y haga clic en **Reemplazar actual con subido**._

![](https://support.delta.nextpress.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2aff9b312e5b7ec95c9e2c5355480d4aa7258fd/Migration.png)

La siguiente página le informará qué complementos heredados tiene instalados junto con la versión 1.x. Instruirá si la versión que está utilizando es compatible con la versión 2.0 o si necesita instalar una versión actualizada del complemento después de la migración.

![Mensaje en la parte superior de la página de plugins: Gracias por actualizar a Ultimate Multisite versión 2.0. Hay un enlace debajo que lleva al usuario al actualizador de versiones. Luego, hay una lista de complementos que necesitan actualizarse.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

Una vez que esté listo para continuar, puede hacer clic en el botón que dice **Visitar el Instalador para terminar la actualización**.

![Enmarcado en rojo: botón que dice Visitar el Instalador para terminar la actualización](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

Luego lo llevará a la página del asistente de instalación con algunos mensajes de bienvenida. Solo necesita hacer clic en **Empezar** para pasar a la siguiente página.

![Página de bienvenida del Asistente de Configuración. Enmarcado en rojo en la esquina inferior derecha: botón Empezar.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

Después de hacer clic en **Empezar**, lo redirigirá a los **Pre-checks de instalación**. Esto le mostrará su Información del Sistema y la instalación de WordPress y le dirá si cumple con los **requisitos de Ultimate Multisite**.

![Página de Pre-checks de instalación que muestra mensajes de confirmación de que la instalación cumple con los requisitos de Ultimate Multisite. Enmarcado en rojo, en la esquina inferior derecha: botón Ir al siguiente paso.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

El siguiente paso es introducir su clave de licencia de Ultimate Multisite y activar el plugin. Esto garantizará que todas las funciones, incluidos los complementos, estén disponibles en su sitio.

![Página de activación de licencia que enumera lo que incluye el soporte y lo que no. Hay una caja en la parte inferior para insertar la licencia del plugin. Enmarcado en rojo, en la esquina inferior derecha: botón Aceptar y Activar.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

Después de introducir su clave, haga clic en **Aceptar y Activar**.

Después de la activación de la licencia, puede comenzar la instalación real haciendo clic en **Instalar** en la siguiente página. Esto creará automáticamente los archivos y la base de datos necesarios para que la versión 2.0 funcione.

![Página de instalación que muestra lo que se actualizará para que Ultimate Multisite funcione. Enmarcado en rojo, en la esquina inferior derecha: botón Instalar.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## Ahora, la migración

El migrador tiene una función de seguridad incorporada que verificará toda su multisite para asegurarse de que todos sus datos de Ultimate Multisite puedan migrarse sin problemas. Haga clic en el botón **Ejecutar Verificación** para iniciar el proceso.

![Página de migración que explica que se ejecutará una verificación para ver si todos sus datos de v1 pueden convertirse. Enmarcado en rojo, en la esquina inferior derecha: botón Ejecutar Verificación.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

Después de ejecutar la verificación, tiene dos posibilidades: el resultado puede ser **con** un error o **sin** error.

### Con Error

Si recibe un mensaje de error, deberá ponerse en contacto con nuestro equipo de soporte para que lo ayude a corregir el error. Asegúrese de **proporcionar el registro de errores** cuando cree un ticket. Puede descargar el registro o hacer clic en el enlace que dice contactar a nuestro equipo de soporte. Se abrirá el widget de ayuda en el lado derecho de su página con los campos prellenados, incluidos los registros de errores bajo la descripción.

_**Dado que el sistema detectó un error, no podrá continuar con la migración a la versión 2.0. Puede revertir a la versión 1.x para reanudar el funcionamiento de su red hasta que se solucione el error.**_

### Sin Error

Si el sistema no encuentra ningún error, verá un mensaje de éxito y un botón **Migrar** en la parte inferior que le permitirá continuar con la migración. En esta página, se le recordará crear una copia de seguridad de su base de datos antes de avanzar, lo cual recomendamos encarecidamente. Pulse **Migrar** si ya tiene una copia de seguridad.

![Página de migración que muestra un mensaje de éxito y una recomendación para crear una copia de seguridad.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![Enmarcado en rojo, en la esquina inferior derecha: botón Migrar.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

¡Y eso es todo lo que se necesita!

Puede continuar ejecutando la configuración del Asistente para actualizar su logotipo y otras cosas en su red o comenzar a navegar por el menú de Ultimate Multisite versión 2.0 y su nueva interfaz. Adelante y diviértase.
