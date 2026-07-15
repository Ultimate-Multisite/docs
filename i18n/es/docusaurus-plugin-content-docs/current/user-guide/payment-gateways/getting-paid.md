---
title: Recibir pagos
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Recibir pagos (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Ultimate Multisite tiene un sistema integrado de membresías y facturación. Para que nuestro sistema de facturación funcione, hemos integrado las pasarelas de pago más comunes utilizadas en el comercio electrónico. Las pasarelas de pago predeterminadas en Ultimate Multisite son _Stripe_ , _PayPal_ y Pago manual. También puedes usar _WooCommerce_ , _GoCardless_ y _Payfast_ para recibir pagos instalando sus respectivos add-ons.

## Ajustes básicos {#basic-settings}

Puedes configurar cualquiera de estas pasarelas de pago en los ajustes de pago de Ultimate Multisite. Puedes encontrarlos yendo a **menú de Ultimate Multisite > Settings > Payments.**

![Página de ajustes de pagos en Ultimate Multisite que muestra el panel de Payments](/img/config/payments-settings-page.png)

Antes de configurar tu pasarela de pago, revisa los ajustes básicos de pago que puedes configurar:

**Forzar renovación automática** **:** Esto garantizará que el pago se repita automáticamente al final de cada ciclo de facturación según la frecuencia de facturación que haya seleccionado el usuario.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 comprueba si la pasarela activa tiene una credencial de renovación reutilizable antes de guardar una membresía recurrente con la renovación automática activada. Una credencial de renovación puede ser una suscripción de la pasarela, un acuerdo de facturación, un token de bóveda guardado o un método de pago reutilizable equivalente. Si la pasarela informa que no existe ninguna credencial utilizable, Ultimate Multisite guarda la membresía, pero desactiva la renovación automática y registra el estado de credencial faltante para que un administrador o un flujo de soporte pueda pedir al cliente que vuelva a autorizar el pago antes de la fecha de renovación.

Esto evita que una membresía parezca renovarse automáticamente cuando la pasarela solo puede cobrar pagos únicos. Los add-ons de pasarela deben confirmar que los checkouts recurrentes almacenan una credencial reutilizable, especialmente cuando la pasarela admite tanto captura de pago único como modos de pago en bóveda/suscripción.

**Permitir pruebas sin método** **de pago:** Con esta opción activada, tu cliente no tendrá que añadir ninguna información financiera durante el proceso de registro. Esto solo será necesario una vez que venza el período de prueba.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Enviar factura al confirmar el pago:** Esto te da la opción de enviar o no una factura después del pago. Ten en cuenta que los usuarios tendrán acceso a su historial de pagos desde el dashboard de su subsitio. Esta opción no se aplica a la pasarela manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Esquema de numeración de facturas:** Aquí puedes seleccionar un código de referencia de pago o un esquema de numeración secuencial. Si eliges usar un código de referencia de pago para tus facturas, no necesitas configurar nada. Si eliges usar un esquema de numeración secuencial, tendrás que configurar el **siguiente número de factura** (este número se usará como número de factura para la próxima factura generada en el sistema. Se incrementa en uno cada vez que se crea una nueva factura. Puedes cambiarlo y guardarlo para restablecer el número secuencial de factura a un valor específico) y el **prefijo del número de factura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Dónde encontrar las pasarelas: {#where-to-find-the-gateways}

Puedes configurar las pasarelas de pago en la misma página ( **Ultimate Multisite > Settings > Payments**). Justo debajo de **pasarelas de pago activas** , podrás ver: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ y _Manual_.

![Sección Active Payment Gateways que lista Stripe, Stripe Checkout, PayPal y Manual](/img/config/payments-active-gateways.png)

Tenemos un artículo dedicado para cada pasarela de pago que te guiará por los pasos para configurarla, que puedes encontrar en los enlaces siguientes.

Puedes ver y editar los detalles de pago:

![Interfaz de edición de pago](/img/admin/payment-edit.png)

Aquí tienes una vista completa de la página de edición de pago:

![Interfaz completa de edición de pago](/img/admin/payment-edit-full.png)

Aquí también tienes una vista completa de los ajustes de las pasarelas de pago:

![Página completa de ajustes de pasarelas de pago](/img/config/settings-payments-gateways-full.png)

**Configurar la pasarela Stripe**

**Configurar la pasarela PayPal**** **

**Configurar pagos manuales**

Ahora, si quieres usar _WooCommerce_ , _GoCardless_ o _Payfast_ como tu pasarela de pago, tendrás que **instalar y configurar sus add-ons**.

### Cómo instalar el add-on de WooCommerce: {#how-to-install-the-woocommerce-add-on}

Entendemos que _Stripe_ y _PayPal_ no están disponibles en algunos países, lo que limita o impide que los usuarios de Ultimate Multisite utilicen eficazmente nuestro plugin. Por eso creamos un add-on para integrar _WooCommerce,_ que es un plugin de comercio electrónico muy popular. Desarrolladores de todo el mundo crearon add-ons para integrar diferentes pasarelas de pago con él. Aprovechamos esto para ampliar las pasarelas de pago que puedes usar con el sistema de facturación de Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration requiere que WooCommerce esté activado al menos en tu sitio principal._

Primero, ve a la página de add-ons. Puedes encontrarla yendo a **Ultimate Multisite > Settings**. Deberías ver la tabla **Add-ons**. Haz clic en **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Después de hacer clic en **Check our Add-ons** , se te redirigirá a la página de add-ons. Aquí puedes encontrar todos los add-ons de Ultimate Multisite. Haz clic en el add-on **Ultimate Multisite: WooCommerce Integration**.

![Página de add-ons que lista add-ons de Ultimate Multisite, incluida WooCommerce Integration](/img/addons/addons-page.png)

Aparecerá una ventana con los detalles del add-on. Solo haz clic en **Install Now**.

<!-- Captura de pantalla no disponible: cuadro de diálogo de detalles del add-on Ultimate Multisite WooCommerce Integration con el botón Install Now -->

Una vez finalizada la instalación, se te redirigirá a la página de plugins. Aquí, solo haz clic en **Network Activate** y el add-on de WooCommerce se activará en tu red.

<!-- Captura de pantalla no disponible: página de plugins con el enlace Network Activate para el add-on WooCommerce Integration -->

Después de activarlo, si aún no tienes el plugin WooCommerce instalado y activado en tu sitio web, recibirás un recordatorio.

<!-- Captura de pantalla no disponible: aviso de administración que recuerda al administrador instalar y activar el plugin WooCommerce -->

Para leer más sobre el add-on WooCommerce Integration, **haz clic aquí**.

### Cómo instalar el add-on GoCardless: {#how-to-install-the-gocardless-add-on}

Los pasos para instalar el add-on _GoCardless_ son prácticamente los mismos que para el add-on _WooCommerce_. Ve a la página de add-ons y selecciona el add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Captura de pantalla no disponible: página de add-ons con el add-on Ultimate Multisite GoCardless Gateway resaltado -->

Aparecerá la ventana del add-on. Haz clic en **Install Now**.

<!-- Captura de pantalla no disponible: cuadro de diálogo de detalles del add-on Ultimate Multisite GoCardless Gateway con el botón Install Now -->

Una vez finalizada la instalación, se te redirigirá a la página de plugins. Aquí, solo haz clic en **Network Activate** y el add-on _GoCardless_ se activará en tu red.

<!-- Captura de pantalla no disponible: página de plugins con el enlace Network Activate para el add-on GoCardless Gateway -->

Para aprender cómo empezar con la pasarela _GoCardless_, **lee este artículo**.

### Cómo instalar el add-on Payfast: {#how-to-install-the-payfast-add-on}

Ve a la página de add-ons y selecciona el add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Captura de pantalla no disponible: página de add-ons con el add-on Ultimate Multisite Payfast Gateway resaltado -->

Aparecerá la ventana del add-on. Haz clic en **Install Now.**

<!-- Captura de pantalla no disponible: cuadro de diálogo de detalles del add-on Ultimate Multisite Payfast Gateway con el botón Install Now -->

Una vez finalizada la instalación, se te redirigirá a la página de plugins. Aquí, solo haz clic en **Network Activate** y el add-on _Payfast_ se activará en tu red.

<!-- Captura de pantalla no disponible: página de plugins con el enlace Network Activate para el add-on Payfast Gateway add-on -->
