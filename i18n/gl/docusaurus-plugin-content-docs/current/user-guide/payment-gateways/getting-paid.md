---
title: Recibir pagos
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Recibir pagos (v2)

_**NOTA IMPORTANTE: Este artigo refírese á versión 2.x de Ultimate Multisite.**_

Ultimate Multisite ten un sistema integrado de membresía e facturación. Para que o noso sistema de facturación funcione, integramos as pasarelas de pago máis comúns usadas no comercio electrónico. As pasarelas de pago predeterminadas en Ultimate Multisite son _Stripe_ , _PayPal_ , e Pago manual. Tamén podes usar _WooCommerce_ , _GoCardless_ e _Payfast_ para recibir pagos instalando os seus respectivos add-ons.

## Configuración básica {#basic-settings}

Podes configurar calquera destas pasarelas de pago na configuración de pagos de Ultimate Multisite. Podes atopala indo a **menú Ultimate Multisite > Configuración > Pagos.**

![Páxina de configuración de pagos en Ultimate Multisite que mostra o panel de Pagos](/img/config/payments-settings-page.png)

Antes de configurar a túa pasarela de pago, bota unha ollada á configuración básica de pagos que podes configurar:

**Forzar auto-rene** **vación:** Isto asegurará que o pago se repita automaticamente ao final de cada ciclo de facturación segundo a frecuencia de facturación que seleccionase o usuario.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 comproba se a pasarela activa ten unha credencial de renovación reutilizable antes de gardar unha membresía recorrente coa renovación automática activada. Unha credencial de renovación pode ser unha subscrición da pasarela, un acordo de facturación, un token de bóveda gardado ou un método de pago reutilizable equivalente. Se a pasarela informa de que non existe ningunha credencial usable, Ultimate Multisite garda a membresía pero desactiva a renovación automática e rexistra o estado de credencial ausente para que un administrador ou un fluxo de soporte poida pedirlle ao cliente que volva autorizar o pago antes da data de renovación.

Isto evita que unha membresía pareza renovarse automaticamente cando a pasarela só pode cobrar pagos puntuais. Os add-ons de pasarela deberían confirmar que os checkouts recorrentes gardan unha credencial reutilizable, especialmente cando a pasarela admite tanto a captura puntual como os modos de pago en bóveda/subscrición.

**Permitir probas sen** **método de pago:** Con esta opción activada, o teu cliente non terá que engadir ningunha información financeira durante o proceso de rexistro. Isto só será necesario unha vez que expire o período de proba.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Enviar factura na confirmación do pago:** Isto dáche a opción de enviar ou non unha factura despois do pago. Ten en conta que os usuarios terán acceso ao seu historial de pagos no Dashboard do seu subsite. Esta opción non se aplica á pasarela manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Esquema de numeración de facturas:** Aquí podes seleccionar un código de referencia de pago ou un esquema de numeración secuencial. Se escolles usar un código de referencia de pago para as túas facturas, non necesitas configurar nada. Se escolles usar un esquema de numeración secuencial, terás que configurar o **seguinte número de factura** (Este número usarase como número de factura para a seguinte factura xerada no sistema. Increméntase en un cada vez que se crea unha nova factura. Podes cambialo e gardalo para restablecer o número secuencial de factura a un valor específico) e o **prefixo do número de factura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Onde atopar as pasarelas: {#where-to-find-the-gateways}

Podes configurar as pasarelas de pago na mesma páxina ( **Ultimate Multisite > Configuración > Pagos**). Xusto debaixo de **pasarelas de pago activas** , poderás ver: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ e _Manual_.

![Sección Pasarelas de pago activas que enumera Stripe, Stripe Checkout, PayPal e Manual](/img/config/payments-active-gateways.png)

Temos un artigo dedicado para cada pasarela de pago que te guiará polos pasos para configurala, que podes atopar nas ligazóns de abaixo.

Podes ver e editar os detalles do pago:

![Interface de edición de pago](/img/admin/payment-edit.png)

Aquí tes unha vista completa da páxina de edición de pago:

![Interface completa de edición de pago](/img/admin/payment-edit-full.png)

Aquí tes tamén unha vista completa da configuración das pasarelas de pago:

![Páxina completa de configuración das pasarelas de pago](/img/config/settings-payments-gateways-full.png)

**Configurar a pasarela Stripe**

**Configurar a pasarela PayPal**** **

**Configurar pagos manuais**

Agora, se queres usar _WooCommerce_ , _GoCardless_ ou _Payfast_ como a túa pasarela de pago, terás que **instalar e configurar os seus add-ons**.

### Como instalar o add-on de WooCommerce: {#how-to-install-the-woocommerce-add-on}

Entendemos que _Stripe_ e _PayPal_ non están dispoñibles nalgúns países, o que limita ou dificulta que os usuarios de Ultimate Multisite usen eficazmente o noso plugin. Por iso creamos un add-on para integrar _WooCommerce,_ que é un plugin de comercio electrónico moi popular. Desenvolvedores de todo o mundo crearon add-ons para integrar nel diferentes pasarelas de pago. Aproveitamos isto para ampliar as pasarelas de pago que podes usar co sistema de facturación de Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration require que WooCommerce estea activado polo menos no teu sitio principal._

Primeiro, vai á páxina de add-ons. Podes atopala indo a **Ultimate Multisite > Configuración**. Deberías ver a táboa de **Add-ons**. Fai clic en **Consulta os nosos Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Despois de facer clic en **Consulta os nosos Add-ons** , serás redirixido á páxina de add-ons. Aquí podes atopar todos os add-ons de Ultimate Multisite. Fai clic no add-on **Ultimate Multisite: WooCommerce Integration**.

![Páxina de add-ons que enumera os add-ons de Ultimate Multisite, incluída WooCommerce Integration](/img/addons/addons-page.png)

Abrirase unha xanela cos detalles do complemento. Só tes que premer en **Instalar agora**.

<!-- Captura de pantalla non dispoñible: diálogo de detalles do complemento Ultimate Multisite WooCommerce Integration co botón Instalar agora -->

Cando remate a instalación, serás redirixido á páxina de complementos. Aquí, só tes que premer en **Activar na rede** e o complemento de WooCommerce activarase na túa rede.

<!-- Captura de pantalla non dispoñible: páxina de complementos coa ligazón Activar na rede para o complemento WooCommerce Integration -->

Despois de activalo, se aínda non tes o complemento WooCommerce instalado e activado no teu sitio web, recibirás un recordatorio.

<!-- Captura de pantalla non dispoñible: aviso de administración que lembra ao administrador que instale e active o complemento WooCommerce -->

Para ler máis sobre o complemento WooCommerce Integration, **preme aquí**.

### Como instalar o complemento GoCardless: {#how-to-install-the-gocardless-add-on}

Os pasos para instalar o complemento _GoCardless_ son practicamente os mesmos que para o complemento _WooCommerce_. Vai á páxina de complementos e selecciona o complemento **Ultimate Multisite: GoCardless Gateway**.

<!-- Captura de pantalla non dispoñible: páxina de complementos co complemento Ultimate Multisite GoCardless Gateway destacado -->

Abrirase a xanela do complemento. Preme en **Instalar agora**.

<!-- Captura de pantalla non dispoñible: diálogo de detalles do complemento Ultimate Multisite GoCardless Gateway co botón Instalar agora -->

Cando remate a instalación, serás redirixido á páxina de complementos. Aquí, só tes que premer en **Activar na rede** e o complemento _GoCardless_ activarase na túa rede.

<!-- Captura de pantalla non dispoñible: páxina de complementos coa ligazón Activar na rede para o complemento GoCardless Gateway -->

Para aprender como comezar coa pasarela _GoCardless_, **le este artigo**.

### Como instalar o complemento Payfast: {#how-to-install-the-payfast-add-on}

Vai á páxina de complementos e selecciona o complemento **Ultimate Multisite: Payfast Gateway**.

<!-- Captura de pantalla non dispoñible: páxina de complementos co complemento Ultimate Multisite Payfast Gateway destacado -->

Abrirase a xanela do complemento. Preme en **Instalar agora.**

<!-- Captura de pantalla non dispoñible: diálogo de detalles do complemento Ultimate Multisite Payfast Gateway co botón Instalar agora -->

Cando remate a instalación, serás redirixido á páxina de complementos. Aquí, só tes que premer en **Activar na rede** e o complemento _Payfast_ activarase na túa rede.

<!-- Captura de pantalla non dispoñible: páxina de complementos coa ligazón Activar na rede para o complemento Payfast Gateway -->
