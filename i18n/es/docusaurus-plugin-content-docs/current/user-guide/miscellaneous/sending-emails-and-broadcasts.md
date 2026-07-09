---
title: Enviar correos electrónicos y difusiones
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Enviar emails y Broadcasts (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Ultimate Multisite incluye una función que te permitirá comunicarte con tus clientes enviando un email a un usuario específico o a un grupo de usuarios, así como enviando avisos en su Dashboard de administración para difundir anuncios

## Añade avisos de administración al Dashboard de tus clientes con Broadcasts

Usando la función de broadcast de Ultimate Multisite, puedes añadir **avisos de administración** al Dashboard de administración del subsitio de tu usuario.

Esto es extremadamente útil si necesitas hacer un anuncio, como mantenimiento del sistema u ofrecer nuevos productos o servicios a tus usuarios existentes. Así se verá el aviso de administración en el Dashboard de tu usuario.

<!-- Captura de pantalla no disponible: aviso de administración de broadcast mostrado en el Dashboard del subsitio de un cliente -->

Para iniciar un aviso de administración, ve al Dashboard de administración de tu red y, bajo el menú **Ultimate Multisite**, encontrarás la opción **Broadcasts**.

![Página de lista de Broadcasts en la administración de Ultimate Multisite](/img/admin/broadcasts-list.png)

También puedes editar broadcasts existentes:

![Interfaz de edición de broadcast](/img/admin/broadcast-edit.png)

Desde esta página, haz clic en el botón **Add Broadcast** en la parte superior.

Esto abrirá la ventana modal Añadir broadcast, donde puedes elegir qué tipo de broadcast deseas enviar.

Continúa y selecciona **Message** y luego haz clic en el botón **Next Step**.

![Modal para añadir broadcast con la opción Message seleccionada](/img/admin/broadcast-add-message.png)

La siguiente ventana te pedirá el **Target customer** o el **Target product**. Ten en cuenta que puedes seleccionar más de un usuario o más de un producto.

Para buscar una cuenta de usuario o un producto, debes empezar a escribir la palabra clave dentro del campo.

Bajo el campo **Message type**, puedes seleccionar el color del aviso. Esto enfatizará la urgencia de tu mensaje.

Luego puedes hacer clic en **Next Step**.

![Campos de Target customers, Target product y Message type para un broadcast de Message](/img/admin/broadcast-message-targets.png)

La siguiente ventana es donde puedes empezar a redactar tu mensaje introduciendo el asunto y el contenido/mensaje que deseas difundir a los usuarios.

![Editor de asunto y contenido del mensaje de broadcast en el paso de redacción](/img/admin/broadcast-edit.png)

Después de crear tu mensaje, puedes pulsar el botón **Send**.

Y eso es todo. El aviso de administración debería mostrarse inmediatamente en el Dashboard de tu usuario.

## Enviar emails a tus clientes

Usando la función de broadcast de Ultimate Multisite, puedes enviar un email a tus usuarios. Tienes la opción de enviar el email solo a usuarios específicos o dirigirte a un grupo de usuarios específico según el producto o plan al que estén suscritos.

Para iniciar un broadcast por email, ve al Dashboard de administración de tu red y, bajo el menú Ultimate Multisite, encontrarás la opción Broadcast.

![Página de lista de Broadcasts usada como punto de partida para un broadcast por email](/img/admin/broadcasts-list.png)

Desde esta página, haz clic en el botón **Add broadcast** en la parte superior.

Esto abrirá la ventana modal Añadir broadcast, donde puedes elegir qué tipo de broadcast deseas enviar. Continúa y selecciona **Email** y luego haz clic en el botón **Next Step**.

![Modal para añadir broadcast con la opción Email seleccionada](/img/admin/broadcast-add-email.png)

La siguiente ventana te pedirá el **Target customer** o el **Target produc** t. Ten en cuenta que puedes seleccionar más de un usuario o más de un producto.

Para buscar una cuenta de usuario o un producto, debes empezar a escribir la palabra clave dentro del campo.

Una vez seleccionado tu público objetivo, puedes hacer clic en **Next Step**.

![Selección de Target customers y Target product para un broadcast por Email](/img/admin/broadcast-email-targets.png)

La siguiente ventana es donde puedes empezar a redactar tu email introduciendo el asunto y el contenido/mensaje que deseas enviar a los usuarios.

<!-- Captura de pantalla no disponible: editor de asunto y contenido del broadcast por email en el paso de redacción -->

Después de crear tu mensaje, puedes pulsar el botón **Send**.

Y así de fácil es enviar un email a tus usuarios finales usando la función de broadcast.

## Emails del sistema

Los emails del sistema en Ultimate Multisite son aquellas **notificaciones automáticas** enviadas por el sistema después de ciertas acciones, como registro, pago, asignación de dominio, etc. Estos emails se pueden editar o modificar desde la configuración de Ultimate Multisite. También incluye una función que te permitirá restablecer e importar configuraciones existentes desde otra instalación de Ultimate Multisite.

### Restablecimiento e importación

Las nuevas versiones de Ultimate Multisite, así como los add-ons, pueden registrar y registrarán nuevos emails de vez en cuando.

Para evitar conflictos y otros problemas, **no añadiremos automáticamente las nuevas plantillas de email como emails del sistema en tu instalación** , a menos que sean cruciales para el correcto funcionamiento de una función determinada.

Sin embargo, los superadministradores y agentes pueden importar estos emails recién registrados mediante la herramienta de importación. Ese proceso creará un nuevo email del sistema con el contenido y la configuración de la nueva plantilla de email, permitiendo al superadministrador realizar cualquier modificación que desee o mantenerlos tal cual.

#### Cómo importar emails del sistema

Ve a tu página de configuración de Ultimate Multisite y dirígete a la pestaña **Emails**.

![Pestaña Emails en la configuración de Ultimate Multisite que muestra la sección System Emails](/img/config/settings-emails-tab.png)

Luego, en la barra lateral, haz clic en el botón **Customize System Emails**.

<!-- Captura de pantalla no disponible: botón Customize System Emails en el panel lateral de System Emails -->

En la página System Emails, verás el botón de acción **Reset & Import** en la parte superior. Al hacer clic en ese botón, debería abrirse la ventana modal de importación y restablecimiento.

![Botón de acción Reset or Import en la página de administración de System Emails](/img/admin/system-emails-reset-import.png)

Luego, puedes alternar las opciones de Import Emails para ver qué emails del sistema están disponibles para importarse.

<!-- Captura de pantalla no disponible: modal Reset and Import con las opciones de Import Emails expandidas -->

#### Restablecimiento de correos electrónicos del sistema

En otras ocasiones, te darás cuenta de que los cambios que hiciste en una plantilla de correo electrónico determinada ya no te funcionan y querrás restablecerla a su **estado predeterminado**.

En esos casos, tienes dos opciones: puedes simplemente eliminar el correo electrónico del sistema e importarlo de nuevo (usando las instrucciones anteriores), lo que borrará las métricas de envío y otras cosas, por lo que este método es el menos recomendado.

O puedes usar la **herramienta Reset & Import** para restablecer esa plantilla de correo electrónico.

Para restablecer una plantilla de correo electrónico, puedes seguir los pasos anteriores hasta llegar a la herramienta Reset & Import y luego activar la opción **Reset** y seleccionar los correos electrónicos que quieres restablecer a su contenido predeterminado.

<!-- Captura de pantalla no disponible: modal Reset and Import con las opciones de Reset Emails expandidas -->
