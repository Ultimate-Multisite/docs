---
title: Envío de correos electrónicos y transmisiones
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# Envío de correos electrónicos y transmisiones (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Ultimate Multisite viene con una función que te permitirá comunicarte con tus clientes enviando un correo electrónico a un usuario objetivo o a un grupo de usuarios, así como enviando avisos en su panel de administración para difundir anuncios

## Añadir avisos de administrador al panel de tus clientes con Transmisiones

Usando la función de transmisión de Ultimate Multisite, puedes añadir **avisos de administrador** al panel de administración del subsitio de tu usuario.

Esto es extremadamente útil si necesitas hacer un anuncio como mantenimiento del sistema o ofrecer nuevos productos o servicios a tus usuarios existentes. Así es como se verá el aviso de administrador en el panel de tu usuario.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

Para iniciar un aviso de administrador, ve al panel de administración de tu red y, bajo el menú **Ultimate Multisite**, encontrarás la opción **Broadcasts**.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Desde esta página, haz clic en el botón **Add Broadcast** en la parte superior.

Esto abrirá la ventana modal Añadir transmisión donde puedes elegir qué tipo de transmisión deseas enviar. Selecciona **Message** y luego haz clic en el botón **Next Step**.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

La siguiente ventana te pedirá el **Target customer** o el **Target product**. Ten en cuenta que puedes seleccionar más de un usuario o más de un producto.

Para buscar una cuenta de usuario o un producto, debes comenzar a escribir la palabra clave dentro del campo.

En el campo **Message type**, puedes seleccionar el color del aviso. Esto enfatizará la urgencia de tu mensaje.

Luego puedes hacer clic en **Next Step**.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

La siguiente ventana es donde puedes comenzar a redactar tu mensaje ingresando el asunto y el contenido/mensaje que deseas difundir a los usuarios.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

Después de crear tu mensaje, puedes pulsar el botón **Send**.

Y eso es todo. El aviso de administrador debería mostrarse inmediatamente en el panel de tu usuario.

## Enviar correos electrónicos a tus clientes

Usando la función de transmisión de Ultimate Multisite, puedes enviar un correo electrónico a tus usuarios. Tienes la opción de enviar el correo solo a usuarios específicos o dirigirlo a un grupo de usuarios basado en el producto o plan al que están suscritos.

Para iniciar una transmisión de correo electrónico, ve al panel de administración de tu red y, bajo el menú Ultimate Multisite, encontrarás la opción Broadcast.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Desde esta página, haz clic en el botón **Add broadcast** en la parte superior.

Esto abrirá la ventana modal Añadir transmisión donde puedes elegir qué tipo de transmisión deseas enviar. Selecciona **Email** y luego haz clic en el botón **Next Step**.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

La siguiente ventana te pedirá el **Target customer** o el **Target produc** t. Ten en cuenta que puedes seleccionar más de un usuario o más de un producto.

Para buscar una cuenta de usuario o un producto, debes comenzar a escribir la palabra clave dentro del campo.

Una vez que hayas seleccionado tu audiencia objetivo, puedes hacer clic en **Next Step**.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

La siguiente ventana es donde puedes comenzar a redactar tu correo electrónico ingresando el asunto y el contenido/mensaje que deseas enviar a los usuarios.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

Después de crear tu mensaje, puedes pulsar el botón **Send**.

Y eso es lo fácil que es enviar un correo electrónico a tus usuarios finales usando la función de transmisión.

## Correos electrónicos del sistema

Los correos electrónicos del sistema en Ultimate Multisite son esas **notificaciones automáticas** enviadas por el sistema después de ciertas acciones como registro, pago, mapeo de dominio, etc. Estos correos pueden ser editados o modificados desde la configuración de Ultimate Multisite. También incluye una función que te permitirá restablecer e importar configuraciones existentes de otra instalación de Ultimate Multisite.

### Restablecer e Importar

Las nuevas versiones de Ultimate Multisite, así como los complementos, pueden y registrarán nuevos correos de vez en cuando.

Para evitar conflictos y otros problemas, **no añadiremos automáticamente las nuevas plantillas de correo como Correos del Sistema en tu instalación**, a menos que sean cruciales para el correcto funcionamiento de una determinada función.

Sin embargo, los superadministradores y agentes pueden importar estos correos recién registrados a través de la herramienta de importación. Ese proceso creará un nuevo correo del sistema con el contenido y la configuración de la nueva plantilla de correo, permitiendo al superadministrador hacer cualquier modificación que desee o mantenerlos tal cual.

#### Cómo importar correos electrónicos del sistema

Ve a la página de Configuración de Ultimate Multisite y dirígete a la pestaña **Emails**.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

Luego, en la barra lateral, haz clic en el botón **Customize System Emails**.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

En la página de Correos del Sistema, verás el botón de acción **Reset & Import** en la parte superior. Al hacer clic en ese botón debería abrirse la ventana modal de importación y restablecimiento.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

Luego, puedes alternar las opciones Import Emails para ver qué correos del sistema están disponibles para ser importados.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### Restablecer Correos del Sistema

Otras veces, te darás cuenta de que los cambios que hiciste en una plantilla de correo ya no funcionan para ti y te gustaría restablecerla a su **estado predeterminado**.

En tales casos, tienes dos opciones: puedes simplemente eliminar el correo del sistema e importarlo de nuevo (usando las instrucciones anteriores) - lo que borrará las métricas de envío y otras cosas, lo que hace que este método sea el menos preferido.

O puedes usar la herramienta **Reset & Import** para restablecer esa plantilla de correo.

Para restablecer una plantilla de correo, puedes seguir los pasos anteriores hasta llegar a la herramienta Reset & Import, y luego, alternar la opción **Reset** y seleccionar los correos que deseas restablecer a su contenido predeterminado.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
