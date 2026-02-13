---
title: Recibir pagos
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Recibiendo pagos (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Ultimate Multisite tiene un sistema de membresía y facturación incorporado. Para que nuestro sistema de facturación funcione, hemos integrado las pasarelas de pago más comunes utilizadas en el comercio electrónico. Las pasarelas de pago predeterminadas en Ultimate Multisite son _Stripe_, _PayPal_ y Manual Payment. También puedes usar _WooCommerce_, _GoCardless_ y _Payfast_ para recibir pagos instalando sus respectivos complementos.

## Configuración básica

Puedes configurar cualquiera de estas pasarelas de pago en la configuración de pagos de Ultimate Multisite. Puedes encontrarla yendo a **Ultimate Multisite menu > Settings > Payments.**

![Payment settings page in Ultimate Multisite](/img/config/settings-payment-gateways.png)

Antes de configurar tu pasarela de pago, por favor revisa la configuración básica de pagos que puedes configurar:

**Forzar auto-renovación** **w:** Esto asegurará que el pago se renueve automáticamente al final de cada ciclo de facturación, dependiendo de la frecuencia de facturación que el usuario haya seleccionado.

![Force auto-renew toggle setting](/img/config/settings-payment-gateways.png)

**Permitir pruebas sin pago** **method:** Con esta opción habilitada, tu cliente no tendrá que agregar información financiera durante el proceso de registro. Esto solo será necesario una vez que expire el período de prueba.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Enviar factura en la confirmación de pago:** Esta opción te permite decidir si enviar o no una factura después del pago. Ten en cuenta que los usuarios tendrán acceso a su historial de pagos en el panel de su subsitio. Esta opción no se aplica a la pasarela Manual.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Esquema de numeración de facturas:** Aquí puedes seleccionar ya sea un código de referencia de pago o un esquema de número secuencial. Si eliges usar un código de referencia de pago para tus facturas, no necesitas configurar nada. Si eliges usar un esquema de número secuencial, deberás configurar el **siguiente número de factura** (Este número se usará como el número de factura para la próxima factura generada en el sistema. Se incrementa en uno cada vez que se crea una nueva factura. Puedes cambiarlo y guardarlo para restablecer el número secuencial de facturas a un valor específico) y el **prefijo del número de factura.**

![Invoice numbering scheme selection](/img/config/settings-payment-gateways.png)

![Sequential invoice number and prefix settings](/img/config/settings-payment-gateways.png)

## Dónde encontrar las pasarelas:

Puedes configurar las pasarelas de pago en la misma página ( **Ultimate Multisite > Settings > Payments**). Justo debajo de **active payment gateways**, podrás ver: _Stripe_, _Stripe Checkout_, _PayPal_ y _Manual_.

![Active payment gateways list](/img/config/settings-payment-gateways.png)

Tenemos un artículo dedicado para cada pasarela de pago que te guiará a través de los pasos para configurarla, los cuales puedes encontrar en los enlaces a continuación.

**Configuración de la pasarela Stripe**

**Configuración de la pasarela PayPal**

**Configuración de pagos manuales**

Ahora, si deseas usar _WooCommerce_, _GoCardless_ o _Payfast_ como tu pasarela de pago, necesitarás **instalar y configurar sus complementos**.

### Cómo instalar el complemento WooCommerce:

Entendemos que _Stripe_ y _PayPal_ no están disponibles en algunos países, lo que limita o dificulta a los usuarios de Ultimate Multisite usar nuestro plugin de manera efectiva. Por eso creamos un complemento para integrar _WooCommerce_, que es un plugin de comercio electrónico muy popular. Desarrolladores de todo el mundo han creado complementos para integrar diferentes pasarelas de pago. Aprovechamos esto para ampliar las pasarelas de pago que puedes usar con el sistema de facturación de Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration requiere que WooCommerce esté activado al menos en tu sitio principal._

Primero, por favor ve a la página de complementos. Puedes encontrarla yendo a **Ultimate Multisite > Settings**. Deberías ver la tabla **Add-ons**. Haz clic en **Check our Add-ons**.

![Settings page with add-ons section](/img/config/settings-general.png)

Después de hacer clic en **Check our Add-ons**, serás redirigido a la página de complementos. Aquí puedes encontrar todos los complementos de Ultimate Multisite. Haz clic en el complemento **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Se abrirá una ventana con los detalles del complemento. Simplemente haz clic en **Install Now**.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

Una vez finalizada la instalación, serás redirigido a la página de plugins. Aquí, simplemente haz clic en **Network Activate** y el complemento WooCommerce se activará en tu red.

![Network Activate the WooCommerce add-on](/img/config/settings-general.png)

Después de activarlo, si aún no tienes el plugin WooCommerce instalado y activado en tu sitio web, recibirás un recordatorio.

![WooCommerce activation reminder notice](/img/config/settings-general.png)

Para leer más sobre el complemento WooCommerce Integration, **haz clic aquí**.

### Cómo instalar el complemento GoCardless:

Los pasos para instalar el complemento _GoCardless_ son prácticamente los mismos que los del complemento _WooCommerce_. Por favor, ve a la página de complementos y selecciona el complemento **Ultimate Multisite: GoCardless Gateway**.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Se abrirá una ventana con el complemento. Haz clic en **Install Now**.

![GoCardless add-on install dialog](/img/config/settings-general.png)

Una vez finalizada la instalación, serás redirigido a la página de plugins. Aquí, simplemente haz clic en **Network Activate** y el complemento _GoCardless_ se activará en tu red.

![Network Activate the GoCardless add-on](/img/config/settings-general.png)

Para aprender cómo comenzar con la pasarela _GoCardless_, **lee este artículo**.

### Cómo instalar el complemento Payfast:

Ve a la página de complementos y selecciona el complemento **Ultimate Multisite: Payfast Gateway**.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Se abrirá una ventana con el complemento. Haz clic en **Install Now.**

![Payfast add-on install dialog](/img/config/settings-general.png)

Una vez finalizada la instalación, serás redirigido a la página de plugins. Aquí, simplemente haz clic en **Network Activate** y el complemento _Payfast_ se activará en tu red.

![Network Activate the Payfast add-on](/img/config/settings-general.png)
