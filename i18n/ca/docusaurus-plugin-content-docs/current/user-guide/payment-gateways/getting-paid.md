---
title: Obtenir pagaments
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Obtenció de pagaments (v2)

_**NOTA IMPORTANT: Aquest article fa referència a Ultimate Multisite versió 2.x.**_

Ultimate Multisite té un sistema integrat de membresia i facturació. Per fer funcionar el nostre sistema de facturació, hem integrat les portelles de pagaments més comunes que s'utilitzen en e-commerce. Les portelles de pagaments per defecte en Ultimate Multisite són _Stripe_, _PayPal_ i Pagament Manual. També pots utilitzar _WooCommerce_, _GoCardless_ i _Payfast_ instal·lant els seus add-ons per rebre pagaments.

## Configuració bàsica

 Pots configurar qualsevol d'aquestes portelles de pagaments a través de les configuracions de pagament d'Ultimate Multisite. Pots trobar-ho anomenant **menú Ultimate Multisite > Configuració > Pagaments.**

![Pàgina de configuració de pagaments en Ultimate Multisite mostrant el painel de Pagaments](/img/config/payments-settings-page.png)

Abans d'configurar la teva portella de pagament, consulta les configuracions bàsiques de pagament que pots configurar:

**Forçar renovació automàtica** **w:** Això assegura que el pagament es renovi automàticament al final de cada cicle de facturació, segons la freqüència de facturació que hagi seleccionat l'usuari.

![Configuració del interruptor Forçar Renovació Automàtica a la pàgina de configuració de pagaments](/img/config/payments-force-auto-renew.png)

**Permitir proves sense pagament** **method:** Amb aquesta opció activada, el teu client no hauria de proporcionar informació financera durant el procés d'inscripció. Això només serà necessari una vegada que l'període de prova expiri.

![Permettre pruebas sin método de pago en la página de configuración de pagos](/img/config/payments-allow-trials.png)

**Enviar factura tras confirmación del pago:** Esto te da la opción de enviar una factura o no después de que se realiza el pago. Ten en cuenta que los usuarios tendrán acceso a su historial de pagos en el panel de control de su subsitio. Esta opción no se aplica al Manual Gateway.

![Alternar Enviar Factura tras Confirmación del Pago en la página de configuración de pagos](/img/config/payments-send-invoice.png)

**Esquema de numeración de facturas:** Aquí puedes elegir entre un código de referencia de pago o un esquema de número secuencial. Si eliges usar un código de referencia de pago para tus facturas, no necesitas configurar nada. Si eliges un esquema de número secuencial, deberás configurar el **siguiente número de factura** (Este número se usará como número de factura para la siguiente factura generada en el sistema. Se incrementa en uno cada vez que se crea una nueva factura. Puedes cambiarlo y guardarlo para restablecer el número secuencial de la factura a un valor específico) y el **prefijo del número de factura**.

![Menú desplegable del esquema de numeración de facturas con opciones de Código de Referencia de Pago y Número Secuencial](/img/config/payments-invoice-scheme.png)

![Campos para el siguiente número de factura y prefijo del número de factura cuando se selecciona Número Secuencial](/img/config/payments-invoice-sequential.png)

## Dónde encontrar los gateways:

Pots configurar les passadoss de pagament a la mateixa pàgina (**Ultimate Multisite > Settings > Payments**). Just a sota de **active payment gateways**, podràs veure: _Stripe_, _Stripe_ Checkout, _PayPal_ i _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Tenim un article específic per a cada passadoss de pagament que et guiarà en els passos per configurar-lo, i pots trobar-los als links següents.

Pots veure i editar els detalls del pagament:

![Payment edit interface](/img/admin/payment-edit.png)

Aquí teniu una vista completa de la pàgina d'edició del pagament:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Aquí també hi tens una vista completa de les configuracions dels passadoss de pagament:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Configurar el passadoss Stripe**

**Configurar el passadoss PayPal**

**Configurar els pagaments manuals**

Ara mateix, si vols utilitzar _WooCommerce_, _GoCardless_ o _Payfast_ com al teu passadoss de pagament, cal que **installsis i configuris els seus add-ons**.

### Com instal·lar l'add-on WooCommerce:

Entenc que _Stripe_ i _PayPal_ no estan disponibles en alguns països, cosa que limita o dificulta el ús efectiu del nostre plugin Ultimate Multisite per part de usuaris. Per això, hem creat un add-on per integrar _WooCommerce_, que és un plugin d'e-commerce molt popular. Desenvolutors de tot el món han creat add-ons per integrar diferents gateways de pagaments amb ell. Hem capitalitzat això per ampliar els gateways de pagaments que pots utilitzar amb el sistema de facturació Ultimate Multisite.

**IMPORTANT:** La integració d'Ultimate Multisite amb WooCommerce requereix que WooCommerce estigui activat almenys en la teva pàgina principal.

Primer, ve a la pàgina d'add-ons. Pots trobar-la anomenant **Ultimate Multisite > Settings**. Debes veure la taula d'**Add-ons**. Clica a **Check our Add-ons**.

![Taula d'add-ons en el lateral de configuració de Ultimate Multisite amb el llink Check our Add-ons](/img/config/settings-addons-table.png)

Després de clicar a **Check our Add-ons**, seran redirigid a la pàgina d'add-ons. Aquí pots trobar tots els add-ons de Ultimate Multisite. Clica a l'add-on **Ultimate Multisite: WooCommerce Integration**.

![Pàgina d'add-ons que enumera els add-ons de Ultimate Multisite inclòs la integració amb WooCommerce](/img/addons/addons-page.png)

Aparetarà una finestra amb els detalls de l'add-on. Simplement, clica a **Install Now**.

![Diàleg de detalls de l'add-on Ultimate Multisite WooCommerce Integration amb el botó Install Now](/img/addons/addon-install-woocommerce.png)

Després de la instal·lació, s'ha redirigit a la pàgina de plugins. Allà, només has de fer clic en **Network Activate** i l'add-on WooCommerce es activarà a la teva xarxa.

![Pàgina de plugins amb el vincul Network Activate per a l'add-on d'integració WooCommerce](/img/addons/addon-network-activate-woocommerce.png)

Després de activar-lo, si encara no tens instal·lat i activat el plugin WooCommerce al teu web, t'arreu farà un record.

![Notificació d'administració que recorda a l'administrador instal·lar i activar el plugin WooCommerce](/img/addons/addon-woocommerce-reminder.png)

Per saber més sobre l'add-on d'integració WooCommerce, **haz clic aquí**.

### Com instal·lar l'add-on GoCardless:

Els passos per instal·lar l'add-on _GoCardless_ són pràcticament els mateixos que per a l'add-on _WooCommerce_. Per favor, anomena a la pàgina d'addons i selecciona l'add-on **Ultimate Multisite: GoCardless Gateway**.

![Pàgina d'addons amb l'add-on Ultimate Multisite GoCardless Gateway destacat](/img/addons/addons-page-gocardless.png)

Es desplegarà una finestra de l'add-on. Haz clic en **Install Now** (Instalar ara).

![Diàleg de detalls de l'add-on Ultimate Multisite GoCardless Gateway amb el botó Install Now](/img/addons/addon-install-gocardless.png)

Després de fer la instal·lació, s'ha redirigit a la pàgina de plugins. Allà, només has de fer clic en **Network Activate** i l'add-on _GoCardless_ es activarà a la teva xarxa.

![Pàgina de plugins amb el llink Network Activate per a la add-on GoCardless Gateway](/img/addons/addon-network-activate-gocardless.png)

Per saber com començar amb la gateway _GoCardless_, **llegeu aquest article**.

### Com instal·lar la add-on Payfast:

Veu a la pàgina d'add-ons i selecciona l'add-on **Ultimate Multisite: Payfast Gateway**.

![Pàgina d'add-ons amb l'add-on Ultimate Multisite Payfast Gateway destacat](/img/addons/addons-page-payfast.png)

S'obre la finestra de l'add-on. Clica a **Install Now** (Instalar ara).

![Diàleg de detalls de l'add-on Ultimate Multisite Payfast Gateway amb el botó Install Now](/img/addons/addon-install-payfast.png)

Després que la instal·lació estigui acabada, seran redirigits a la pàgina de plugins. Aquí, simplement fes clic a **Network Activate** i l'add-on _Payfast_ es activarà en la vostra xarxa.

![Pàgina de plugins amb el llink Network Activate per a l'add-on Payfast Gateway](/img/addons/addon-network-activate-payfast.png)
