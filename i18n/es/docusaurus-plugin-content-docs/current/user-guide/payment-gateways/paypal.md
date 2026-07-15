---
title: Configuración de PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configuración del gateway de PayPal (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Puedes activar hasta cuatro métodos de pago en nuestra página de ajustes de pago: Stripe, Stripe Checkout, PayPal y Manual. En este artículo, veremos cómo integrarse con **PayPal**.

Al igual que Stripe, PayPal se usa ampliamente para pagos en línea, especialmente en sitios web de WordPress. Este artículo te guiará sobre cómo usar PayPal como método de pago disponible en tu red.

Ten en cuenta que necesitas tener una **cuenta Business de PayPal** para obtener la credencial de API necesaria para esta integración.

## Habilitar PayPal en tu red {#enabling-paypal-on-your-network}

Para habilitar PayPal como método de pago disponible en tu red, ve a la pestaña **Ultimate Multisite > Settings > Payments** y marca la casilla junto a PayPal.

![Habilitar PayPal en los gateways de pago activos](/img/config/settings-payment-gateways.png)

## Usar el asistente de configuración guiado {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 añade un asistente guiado de configuración de PayPal a los ajustes del gateway de pago. Después de habilitar PayPal, usa el asistente en **Ultimate Multisite > Settings > Payments** para elegir cómo quieres conectar el gateway y confirmar qué credenciales siguen siendo necesarias antes de guardar.

El asistente admite dos rutas de configuración:

* **Entrada manual de credenciales**: Usa esta ruta cuando ya tengas credenciales de API de PayPal, cuando la configuración OAuth no esté disponible para tu Account, o cuando prefieras copiar las credenciales desde PayPal tú mismo. Introduce el nombre de usuario de API, la contraseña de API y la firma de API en los campos de PayPal y luego guarda los ajustes de pago.
* **Puerta de conexión OAuth**: Usa esta ruta solo cuando la opción OAuth esté disponible y habilitada para tu instalación. El asistente muestra el flujo OAuth detrás de una feature flag, por lo que las redes sin la flag continúan usando los campos de entrada manual de credenciales.

Si no ves la opción OAuth en el asistente, completa el flujo de entrada manual de credenciales a continuación. El gateway funciona con las mismas credenciales de API de PayPal Business que las versiones anteriores de Ultimate Multisite 2.x.

## Obtener las credenciales de API de PayPal {#getting-the-paypal-api-credentials}

Una vez que PayPal esté habilitado como gateway de pago, necesitarás rellenar los campos de PayPal API **Username**, PayPal API **Password** y PayPal API **Signature**.

Puedes obtener esto iniciando sesión en tu cuenta de PayPal [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

(Recuerda que puedes usar el **modo sandbox** para probar pagos y ver si el gateway está configurado correctamente. Solo activa la sección correspondiente.)

![Campos de credenciales de API de PayPal y conmutador de modo sandbox](/img/config/settings-payment-gateways.png)

Para solicitar credenciales de API Signature o Certificate para tu cuenta de PayPal:

  1. Ve a tus [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. En la sección **API access**, haz clic en **Update**.
![Ajustes de Account de PayPal con sección de acceso a API](/img/config/settings-payment-gateways.png)

  3. Bajo **NVP/SOAP API integration (Classic)**, haz clic en **Manage API credentials**.
![Integración NVP/SOAP API de PayPal Administrar credenciales de API](/img/config/settings-payment-gateways.png)

     * Si ya has generado una API Signature o Certificate, se te redirigirá a una página donde puedes encontrar tus credenciales.

     * _**Nota:** Si se te solicita verificar tu cuenta de PayPal, sigue las instrucciones en pantalla._

  4. Selecciona _una_ de las siguientes opciones y luego haz clic en **Agree and Submit**.

     * **Request API Signature** – Selecciona para la autenticación con API Signature.

     * **Request API Certificate** – Selecciona para la autenticación con API Certificate.

  5. PayPal genera tus credenciales de API de la siguiente manera:
![Credenciales de API generadas por PayPal](/img/config/settings-payment-gateways.png)

     * Las **credenciales de API Signature** incluyen un API Username, API Password y Signature, que no caducan. Estos valores están ocultos de forma predeterminada para mayor seguridad. Haz clic en **Show/Hide** para alternar su visualización. Cuando hayas terminado, haz clic en **Done**.

     * Las **credenciales de API Certificate** incluyen un API Username, API Password y Certificate, que caduca automáticamente después de tres años. Haz clic en **Download Certificate** para guardar el API Certificate en tu escritorio.

Eso es todo, ¡tu integración de pagos con PayPal está completa!

Si tienes alguna pregunta sobre los ajustes de PayPal, puedes consultar el [Help Center](https://www.paypal.com/br/smarthelp/home) de PayPal.
