---
title: Configuración de pagos manuales
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configurar pagos manuales (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Los pagos manuales son una forma de ofrecer otros métodos de pago si **Stripe** o **PayPal** no están disponibles para tus usuarios. Puede ser una transferencia bancaria o cualquier otro método de pago disponible localmente para tus usuarios.

## Cómo habilitar los pagos manuales

Configurar el pago manual es muy fácil. Solo necesitas habilitarlo en las pasarelas de pago y añadir instrucciones detalladas sobre cómo debe enviar el usuario el pago.

Primero, ve a **Ultimate Multisite > Settings > Payments**. Debajo de **Payment Gateways**, activa **Manual**. Verás que aparecerá un cuadro de **Payment Instructions** para ti.

Añade en este cuadro la información que tu cliente necesitará para realizar el pago. Puede ser los datos de tu cuenta bancaria y tu correo electrónico para que el cliente pueda enviarte la confirmación del pago, por ejemplo.

![Selector de pasarela de pago manual con área de texto de Payment Instructions](/img/config/manual-gateway-expanded.png)

Esta es la interfaz de ajustes de la pasarela manual:

![Ajustes de pasarela manual](/img/config/manual-gateway-settings.png)

Después de configurarlo, simplemente haz clic en **Save Settings** y estará listo. Cuando los usuarios se registren en tu red, verán un mensaje que les indicará que recibirán tus instrucciones para completar la compra.

![Mensaje de confirmación de registro que indica al usuario que recibirá instrucciones de pago](/img/frontend/registration-manual-notice.png)

Y también recibirán un mensaje en tu página de **Thank You** con tus instrucciones de pago.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmar pagos manuales

Para confirmar un pago manual, ve al menú **Payments** en la barra izquierda. Allí puedes ver todos los pagos de tu red y sus detalles, incluido su **estado**. Un pago manual siempre tendrá un estado **Pending** hasta que lo cambies manualmente.

![Lista de pagos que muestra un pago manual pendiente](/img/admin/payments-list.png)

Entra en la página del pago haciendo clic en el **código de referencia**. En esta página tienes todos los detalles del pago pendiente, como el ID de referencia, productos, marcas de tiempo y más.

![Página de detalles del pago que muestra código de referencia, productos y totales](/img/admin/payment-edit.png)

En la columna derecha, puedes cambiar el estado del pago. Cambiarlo a **Completed** y **activar la opción Activate Membership** habilitará el sitio de tu cliente y su membresía estará activa.

![Página de edición de pago con Status configurado en Completed y selector Activate Membership](/img/admin/payment-activate-membership.png)
