---
title: El flujo de registro
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# El flujo de registro (v2) {#the-registration-flow-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Los usuarios pueden registrarse de diferentes maneras en tu red. Pueden usar tu formulario de registro o un enlace compartible a un plan preseleccionado. Aquí te mostraremos cómo tus clientes pueden registrarse en tu red usando las rutas disponibles y qué ocurre después de que se registran en tu red.

## Usar el formulario de registro: {#using-the-registration-form}

Este es el proceso de registro estándar. Creas una página de registro con un **formulario de checkout** y ahí será donde tus clientes irán para registrarse en tu red y suscribirse a un plan. Puedes tener varias páginas de registro, cada una con un formulario de registro diferente si quieres.

La página predeterminada para el registro es [_**yourdomain.com/register**_](http://yourdomain.com/register), pero puedes cambiarla en cualquier momento en **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Después de que un usuario llegue a tu página de registro (normalmente haciendo clic en un botón **Sign in** o **Buy now**), verá allí tu formulario de registro.

![Formulario de registro mostrado en la página de registro](/img/frontend/registration-form.png)

Aquí tienes un ejemplo del formulario de checkout tal como aparece en el frontend:

![Formulario de registro de checkout en frontend](/img/config/checkout-frontend-registration.png)

Todo lo que tienen que hacer es completar todos los campos obligatorios - correo electrónico, nombre de usuario, contraseña, etc... - y pagar el plan o confirmar su dirección de correo electrónico si se están registrando en un plan gratuito o en un plan de pago con período de prueba sin información de pago.

En la página de "Gracias", verán un mensaje que les indicará si necesitan confirmar su dirección de correo electrónico o si su sitio web ya está activado y pueden empezar a usarlo.

![Página de gracias después del registro](/img/frontend/registration-thank-you.png)

Si se requiere confirmación de la dirección de correo electrónico, deberán ir a su bandeja de entrada y hacer clic en el enlace de verificación. Su sitio web no se activará si su dirección de correo electrónico no se verifica.

Si se han registrado en un plan de pago o la verificación de correo electrónico no es obligatoria en tu red, su sitio web se activará justo después del checkout y se les mostrará un enlace para iniciar sesión en su dashboard.

![Sitio activado con enlace para iniciar sesión en el dashboard](/img/frontend/site-activated.png)

## Usar un enlace compartible: {#using-a-shareable-link}

El proceso de registro usando un enlace compartible es básicamente el mismo que el formulario de registro; la única diferencia es que, usando un enlace compartible, tus clientes pueden tener un producto o una plantilla de sitio web preseleccionados en el formulario de checkout (consulta la sección Preseleccionar productos y plantillas mediante parámetros de URL) o quizá un código de cupón añadido (consulta la sección Usar parámetros de URL).

El proceso de registro será el mismo: deberán completar su nombre, nombre de usuario, dirección de correo electrónico, nombre y título del sitio web, etc... pero el plan o la plantilla de sitio ya estarán preseleccionados para ellos.

### Registrarse usando pagos manuales: {#registering-using-manual-payments}

Si no quieres usar PayPal, Stripe ni ninguna otra pasarela de pago ofrecida por Ultimate Multisite o sus integraciones de add-on, puedes usar pagos manuales para tus clientes. De esta forma, puedes generar una factura para que paguen en tu procesador de pagos preferido después de que se registren en tu red.

El proceso de registro será exactamente el mismo que el anterior, pero en la página de registro tus clientes verán un mensaje indicando que recibirán un correo electrónico con más instrucciones para completar el pago.

![Mensaje de pago manual durante el registro](/img/frontend/registration-manual-notice.png)

Y después de que se complete el registro, verán las instrucciones de pago que configuraste (y también las recibirán en su correo electrónico).

![Instrucciones de pago mostradas después del registro](/img/frontend/registration-payment-instructions.png)

Las instrucciones de pago se pueden cambiar en **Ultimate Multisite > Settings > Payments** después de activar la opción de pago **Manual**:

![Conmutador de pago manual con campo de instrucciones de pago](/img/config/manual-gateway-settings.png)

Después de que tus clientes completen el pago manual y te envíen la confirmación, debes **confirmar manualmente el pago** para activar la membresía del cliente y el sitio web.

Para hacerlo, ve a **Ultimate Multisite > Payments** y busca el pago del cliente. Todavía debería mostrar un estado **Pending**.

![Lista de pagos con pago manual pendiente](/img/admin/payments-list.png)

Haz clic en el número de pago y podrás cambiar su estado a **Completed**.

![Página de detalles del pago](/img/admin/payment-edit.png)

![Cambiar el estado del pago a Completed](/img/admin/payment-status-completed.png)

Después de cambiar su estado a **Completed** , deberías ver un mensaje **Activate membership**. Activa esta opción **on** para activar la membresía y el sitio web asociados con este cliente. Luego, haz clic en **Save Payment**.

![Conmutador para activar membresía y botón Save Payment](/img/admin/payment-activate-membership.png)

Tu cliente ahora debería poder acceder al dashboard y a todas las funciones a las que se suscribió.
