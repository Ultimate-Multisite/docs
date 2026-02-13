---
title: Configuración de Pagos Manuales
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# Configuración de Pagos Manuales (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Los pagos manuales son una forma de ofrecer a tus usuarios otros métodos de pago cuando **Stripe** o **PayPal** no están disponibles. Puede ser una transferencia bancaria o cualquier otro método de pago disponible localmente para tus usuarios.

## Cómo habilitar Pagos Manuales

Configurar pagos manuales es muy sencillo. Solo necesitas habilitarlos bajo los pasarelas de pago y proporcionar instrucciones detalladas sobre cómo el usuario debe enviar el pago.

Primero, ve a **Ultimate Multisite > Settings > Payments**. Debajo de **Payment Gateways**, activa **Manual**. Verás que aparecerá una caja de **Payment Instructions**.

Agrega a esta caja la información que tu cliente necesitará para realizar el pago. Puede ser los datos de tu cuenta bancaria y tu correo electrónico para que el cliente pueda enviarte la confirmación del pago, por ejemplo.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

Después de configurarlo, simplemente haz clic en **Save Settings** y listo. Cuando los usuarios se registren en tu red, verán un mensaje que les indica que recibirán tus instrucciones para completar la compra.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

Y también recibirán un mensaje en tu página de **Thank You** con tus instrucciones de pago.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Confirmación de pagos manuales

Para confirmar un pago manual, ve al menú **Payments** en la barra izquierda. Allí podrás ver todos los pagos en tu red y sus detalles, incluido su **status**. Un pago manual siempre tendrá un estado **Pending** hasta que lo cambies manualmente.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Accede a la página de pago haciendo clic en el **reference code**. En esta página tienes todos los detalles del pago pendiente, como el ID de referencia, productos, marcas de tiempo y más.

![Payment details page with reference code and products](/img/admin/payments-list.png)

En la columna derecha, puedes cambiar el estado del pago. Al cambiarlo a **Completed** y activar la opción **Activate Membership**, habilitarás el sitio de tu cliente y su membresía quedará activa.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
