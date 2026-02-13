---
title: El flujo de registro
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# El flujo de registro (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Los usuarios pueden registrarse de diferentes maneras en tu red. Pueden usar tu formulario de registro o un enlace compartible a un plan preseleccionado. Aquí te mostraremos cómo tus clientes pueden registrarse en tu red utilizando las rutas disponibles y qué sucede después de registrarse en tu red.

## Usando el formulario de registro:

Este es el proceso estándar de registro. Creas una página de registro con un **checkout form** y será donde tus clientes irán a registrarse en tu red y suscribirse a un plan. Puedes tener múltiples páginas de registro, cada una con un formulario de registro diferente si lo deseas.

La página predeterminada para el registro es [_**yourdomain.com/register**_](http://yourdomain.com/register), pero puedes cambiarla en cualquier momento en **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Después de que un usuario llegue a tu página de registro (normalmente haciendo clic en un botón **Sign in** o **Buy now**), verá tu formulario de registro allí.

![Registration form displayed on the registration page](/img/config/checkout-forms-list.png)

Todo lo que tienen que hacer es rellenar todos los campos obligatorios - correo electrónico, nombre de usuario, contraseña, etc... - y pagar por el plan o confirmar su dirección de correo electrónico si se están registrando para un plan gratuito o un plan de pago con período de prueba sin información de pago.

En la página de «Thank you», verán un mensaje que les indica si necesitan confirmar su dirección de correo electrónico o si su sitio web ya está activado y pueden comenzar a usarlo.

![Thank You page after registration](/img/config/checkout-form-editor.png)

Si se requiere la confirmación de la dirección de correo electrónico, deberán ir a su bandeja de entrada y hacer clic en el enlace de verificación. Su sitio web no se activará si su dirección de correo electrónico no se verifica.

Si se han registrado en un plan de pago o la verificación de correo electrónico no es obligatoria en tu red, su sitio web se activará justo después del pago y se les mostrará un enlace para iniciar sesión en su panel de control.

![Site activated with link to sign in to dashboard](/img/config/checkout-form-editor.png)

## Usando un enlace compartible:

El proceso de registrarse usando un enlace compartible es básicamente el mismo que el formulario de registro; la única diferencia es que, al usar un enlace compartible, tus clientes pueden tener un producto o plantilla de sitio web preseleccionado en el formulario de pago (consulta la sección Pre-selecting products and templates via URL parameters) o quizá se añada un código de cupón (consulta la sección Using URL Parameters).

El proceso de registro será el mismo: deberán rellenar su nombre, nombre de usuario, dirección de correo electrónico, nombre y título del sitio, etc... pero el plan o la plantilla del sitio ya estará preseleccionada para ellos.

### Registrándose usando pagos manuales:

Si no deseas usar PayPal, Stripe u otro gateway de pago ofrecido por Ultimate Multisite o sus integraciones complementarias, puedes usar pagos manuales para tus clientes. De esta manera, puedes generar una factura para que paguen en tu procesador de pagos preferido después de registrarse en tu red.

El proceso de registro será exactamente el mismo que el anterior, pero en la página de registro tus clientes verán un mensaje indicando que recibirán un correo electrónico con más instrucciones para completar el pago.

![Manual payment message during registration](/img/config/settings-payment-gateways.png)

Y después de que el registro se complete, verán las instrucciones de pago que has configurado (y también las recibirán en su correo electrónico).

![Payment instructions shown after registration](/img/config/settings-payment-gateways.png)

Las instrucciones de pago se pueden cambiar en **Ultimate Multisite > Settings > Payments** después de activar la opción de pago **Manual**:

![Manual payment toggle with payment instructions field](/img/config/settings-payment-gateways.png)

Después de que tus clientes completen el pago manual y te envíen la confirmación, debes **confirmar manualmente el pago** para activar la membresía del cliente y el sitio web.

Para hacer esto, ve a **Ultimate Multisite > Payments** y busca el pago del cliente. Debería seguir mostrando un estado **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Haz clic en el número de pago y podrás cambiar su estado a **Completed**.

![Payment details page](/img/admin/payments-list.png)

![Changing payment status to Completed](/img/admin/payments-list.png)

Después de cambiar su estado a **Completed**, deberías ver un mensaje **Activate membership**. Activa esta opción **on** para activar la membresía y el sitio web asociado a este cliente. Luego, haz clic en **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payments-list.png)

Tu cliente ahora debería poder acceder al panel de control y a todas las funciones a las que se suscribió.
