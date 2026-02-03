---
title: Configuración de PayPal
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# Configuración del Gateway PayPal (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Puedes activar hasta cuatro métodos de pago en la página de configuración de pagos: Stripe, Stripe Checkout, PayPal y Manual. En este artículo, veremos cómo integrar con **PayPal**.

Al igual que Stripe, PayPal se utiliza ampliamente para pagos en línea, especialmente en sitios web de WordPress. Este artículo te guiará sobre cómo usar PayPal como método de pago disponible en tu red.

Ten en cuenta que necesitas tener una **cuenta PayPal Business** para obtener las credenciales API necesarias para esta integración.

## Habilitar PayPal en tu red

Para habilitar PayPal como método de pago disponible en tu red, ve a la pestaña **Ultimate Multisite > Settings > Payments** y marca la casilla junto a PayPal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FhlfHHJLPl.png)

## Obtener las credenciales API de PayPal

Una vez que PayPal esté habilitado como pasarela de pago, deberás completar los campos para el **Nombre de usuario** de la API de PayPal, la **Contraseña** de la API de PayPal y la **Firma** de la API de PayPal.

Puedes obtener esto iniciando sesión en tu cuenta PayPal [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

*(Recuerda que puedes usar el **modo sandbox** para probar pagos y verificar si la pasarela está configurada correctamente. Simplemente activa la sección correspondiente.)*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PgTatIgsIm.png)

Para solicitar credenciales de Firma o Certificado API para tu cuenta PayPal:

  1. Ve a tus [Configuraciones de cuenta](https://www.paypal.com/businessmanage/account/accountAccess).

  2. En la sección **API access**, haz clic en **Update**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Dx72ARoKzx.png)

  3. En **NVP/SOAP API integration (Classic)**, haz clic en **Manage API credentials**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mUoIzsfpMq.png)

     * Si ya has generado una Firma o Certificado API, serás redirigido a una página donde podrás encontrar tus credenciales.

     * _**Nota:** Si se te solicita verificar tu cuenta PayPal, sigue las instrucciones en pantalla._

  4. Selecciona _una_ de las siguientes opciones, luego haz clic en **Agree and Submit**.

     * **Request API Signature** – Selecciona para autenticación con Firma API.

     * **Request API Certificate** – Selecciona para autenticación con Certificado API.

  5. PayPal genera tus credenciales API de la siguiente manera:  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-utEMaS5roo.png)

     * **Credenciales de Firma API** incluyen un Nombre de usuario API, una Contraseña API y una Firma, que no expira. Estos valores están ocultos por defecto por mayor seguridad. Haz clic en **Show/Hide** para alternarlos. Cuando termines, haz clic en **Done**.

     * **Credenciales de Certificado API** incluyen un Nombre de usuario API, una Contraseña API y un Certificado, que expira automáticamente después de tres años. Haz clic en **Download Certificate** para guardar el Certificado API en tu escritorio.

¡Eso es todo, tu integración de pagos PayPal está completa!

Si tienes alguna pregunta sobre la configuración de PayPal, puedes consultar el [Help Center](https://www.paypal.com/br/smarthelp/home) de PayPal.
