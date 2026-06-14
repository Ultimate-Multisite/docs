---
title: Pagare
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Pagare (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Ultimate Multisite tiene un sistema integrado de membresía y facturación. Para que nuestro sistema de facturación funcione, hemos integrado las pasarelas de pago más comunes utilizadas en el comercio electrónico. Las pasarelas de pago predeterminadas en Ultimate Multisite son _Stripe_, _PayPal_ y Pago Manual. También puedes usar _WooCommerce_, _GoCardless_ y _Payfast_ para recibir pagos instalando sus respectivos add-ons (complementos).

## Configuración Básica

Puedes configurar cualquiera de estas pasarelas de pago dentro de la configuración de pagos de Ultimate Multisite. Puedes encontrarlo yendo a **Menú de Ultimate Multisite > Ajustes > Pagos**.

![Página de configuración de pagos en Ultimate Multisite mostrando el panel de Pagos](/img/config/payments-settings-page.png)

Antes de configurar tu pasarela de pago, por favor echa un vistazo a la configuración básica que puedes ajustar:

**Forzar renovación automática** **w:** Esto asegurará que el pago se repita automáticamente al final de cada ciclo de facturación dependiendo de la frecuencia de facturación que haya seleccionado el usuario.

<!-- Screenshot unavailable: Configuración del interruptor Forzar Renovación Automática en la página de ajustes de pagos -->

Ultimate Multisite v2.13.0 comprueba si la pasarela activa tiene una credencial de renovación reutilizable antes de guardar una membresía recurrente con renovación automática activada. Una credencial de renovación puede ser una suscripción a una pasarela, un acuerdo de facturación, un token de bóveda guardado o un método de pago reutilizable equivalente. Si la pasarela informa que no existe ninguna credencial utilizable, Ultimate Multisite guarda la membresía pero desactiva la renovación automática y registra el estado de credencial faltante para que un administrador o flujo de soporte pueda pedirle al cliente que autorice nuevamente el pago antes de la fecha de renovación.

Hoc praecipit aut renovandum automaticum membership non apparere, dum portale (gateway) solum pagamenta unicus tempore collectare potest. Add-ons gateway debent confirmare quod checkout recurrens conservat credential reutilizabilis, specialiter cum portal supportat modum captationis unicae et modum pagamenti securi/abonificati (vaulted/subscription).

**Permittere trials sine methodo payment:** Cum ha optionem activas habes, tuus client non debet aliquam informationes pecuniaria in processu registrationis addere. Hoc necessebit solum cum periodu trialis expirabit.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Invoce in confirmatione paymentis agere:** Hoc tibi optionem daret si post pagamentum invoicem agere vel non facere. Nota, utentia ad historiam paymentium suarum sub dashboard subsite accessum habet. Ha optionem non applicatur ad Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schema numerandi invoiciorum:** Hic, tu eligere potes vel codicem referentiae paymentis aut schemam numerorum sequentalium. Si eliges ut codicem referentiae paymentis ad invoicia tua uses, nulla configuratione debet facere. Si eliges ut schemam numerorum sequentalium uses, necesse tibi configurare **numerum proximo invoicii** (Hoc numerum ut numero invoicii ad prossimo generatum in sistema usum erit. Per unum incrementum incrementatur dum novum invoicem creas. Hoc potest mutare et salvare ut numerum sequens invoiciorum rediatur ad valorem valor specificum) et **prefix numris invoicii**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ubi quae ad porticos (gateways) invenire:

Portas de payment gateway in eodem page ( **Ultimate Multisite > Settings > Payments** ) configurare possis. Sub **active payment gateways**, videris: _Stripe_, _Stripe_ _Checkout_, _PayPal_ et _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Ad hoc opus dedicatum ad perpetuum (gateway) quod te per gradus configurationem ducet, in linkibus infra invenies.

Possis detegere et editare details payment:

![Payment edit interface](/img/admin/payment-edit.png)

Hic est tota vista paginae editio payment:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Hic etiam est tota vista configurationem payment gateway:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Configuratio gateway Stripe**

**Configuratio gateway PayPal**** **

**Configuratio payment manualium**

Nunc, si desideras ut _WooCommerce_, _GoCardless_ vel _Payfast_ ut tuus gateway payment sit, necessitas est ut **add-ons eorum installes et configure**.

### Quomodo add-on WooCommerce instalare:

Comprehendimus quod _Stripe_ et _PayPal_ in quibusdam gentibus non sunt disponibili quae usum Ultimate Multisite userum in plugin nostro efficacem limitant vel ostendunt. Ergo, add-on creavimus ad integrandum _WooCommerce_, qui est plugin e-commerce valde popularis. Developer omnium mundi add-ons creaverunt ad integrationem diversorum payment gateway cum eo. Hoc usque ad usum extendere payment gateways quae cum sistema facturationis Ultimate Multisite possis uti, aprovevimus.

_**IMPORTANT:** Ultimate Multisite: Integrare WooCommerce richiede che WooCommerce sia attivato almeno sul tuo sito principale._

Per prima cosa, vai alla pagina degli add-ons. Puoi trovarla andando su **Ultimate Multisite > Settings**. Dovresti vedere la tabella degli **Add-ons**. Clicca su **Check our Add-ons** (Verifica i nostri add-ons).

<!-- Screenshot unavailable: Tabella degli add-ons nelle barre laterali delle impostazioni di Ultimate Multisite con il link Check our Add-ons -->

Dopo aver cliccato su **Check our Add-ons**, sarai reindirizzato alla pagina degli add-ons. Qui puoi trovare tutti gli add-on Ultimate Multisite. Clicca sull'add-on **Ultimate Multisite: WooCommerce Integration**.

![Pagina degli add-ons che elenca gli add-on Ultimate Multisite inclusa l'Integrazione WooCommerce](/img/addons/addons-page.png)

Si aprirà una finestra con i dettagli dell'add-on. Clicca semplicemente su **Install Now** (Installa ora).

<!-- Screenshot unavailable: Dialogo dei dettagli dell'add-on Ultimate Multisite WooCommerce Integration con il pulsante Install Now -->

Dopo che l'installazione è completata, sarai reindirizzato alla pagina dei plugin. Qui, clicca semplicemente su **Network Activate** (Attiva la rete) e l'add-on WooCommerce verrà attivato sulla tua rete.

<!-- Screenshot unavailable: Pagina dei plugin con il link Network Activate per l'add-on WooCommerce Integration -->

Dopo averlo attivato, se non hai ancora installato e attivato il plugin WooCommerce sul tuo sito web, riceverai un promemoria.

<!-- Screenshot unavailable: Avviso amministrativo che ricorda all'amministratore di installare e attivare il plugin WooCommerce -->

Per saperne di più sull'add-on WooCommerce Integration, **clicca qui**.

### Come installare l'add-on GoCardless:

I passi ad installation del plugin _GoCardless_ sono quasi gli stessi del plugin _WooCommerce_. Vai alla pagina dei plugin e seleziona il plugin **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Pagina dei plugin con il plugin Ultimate Multisite GoCardless Gateway evidenziato -->

Si aprirà la finestra del plugin. Clicca su **Install Now** (Installa ora).

<!-- Screenshot unavailable: Dialogo dettagli del plugin Ultimate Multisite GoCardless Gateway con pulsante Install Now -->

Dopo che l'installazione è finita, sarai reindirizzato alla pagina dei plugin. Qui, clicca semplicemente su **Network Activate** (Attiva rete) e il plugin _GoCardless_ verrà attivato sulla tua rete.

<!-- Screenshot unavailable: Pagina dei plugin con il link Network Activate per il GoCardless Gateway add-on -->

Per imparare come iniziare con il gateway _GoCardless_, **leggi questo articolo**.

### Come installare il plugin Payfast:

Vai alla pagina dei plugin e seleziona il plugin **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Pagina dei plugin con il plugin Ultimate Multisite Payfast Gateway evidenziato -->

Si aprirà la finestra del plugin. Clicca su **Install Now** (Installa ora).

<!-- Screenshot unavailable: Dialogo dettagli del plugin Ultimate Multisite Payfast Gateway con pulsante Install Now -->

Dopo che l'installazione è finita, sarai reindirizzato alla pagina dei plugin. Qui, clicca semplicemente su **Network Activate** (Attiva rete) e il plugin _Payfast_ verrà attivato sulla tua rete.

<!-- Screenshot unavailable: Pagina dei plugin con il link Network Activate per il Payfast Gateway add-on -->
