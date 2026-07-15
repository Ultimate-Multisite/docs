---
title: Configurare Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurare la Porta di Pagamento Stripe (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Puoi attivare fino a quattro metodi di pagamento nella pagina delle impostazioni dei pagamenti: Stripe, Stripe Checkout, PayPal e Manuale. In questo articolo vedremo come integrare con **Stripe**.

## Abilitare Stripe {#enabling-stripe}

Per abilitare Stripe come porta di pagamento disponibile sulla tua rete, vai su **Ultimate Multisite > Impostazioni > Pagamenti** e spunta l'interruttore accanto a **Stripe** o **Stripe Checkout** nella sezione Portali di Pagamento Attivi.

![Abilitare Stripe nei portali di pagamento attivi](/img/config/settings-payment-gateways.png)

### Stripe contro Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Questo metodo mostrerà uno spazio per inserire il numero della carta di credito durante il checkout.

![Campo carta di credito inline Stripe durante il checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Questo metodo reindirizzerà il cliente a una pagina Stripe Checkout durante il checkout.

![Pagina di reindirizzamento Stripe Checkout durante il checkout](/img/config/settings-payment-gateways.png)

Ottieni le tue chiavi API Stripe

Una volta abilitato Stripe come porta di pagamento, dovrai compilare i campi per la **Stripe Publishable Key** e la **Stripe Secret Key**. Puoi ottenerle effettuando l'accesso al tuo account Stripe.

_**Nota:** puoi attivare il **Sandbox mode** per testare se il metodo di pagamento funziona._

![Campi chiavi API Stripe e interruttore modalità sandbox](/img/config/settings-payment-gateways.png)

Sulla tua dashboard Stripe, clicca su **Developers** nell'angolo in alto a destra e poi su **API Keys** nel menu a sinistra.

![Sezione Developers della dashboard Stripe con le chiavi API](/img/config/settings-payment-gateways.png)

Podes uti possumus ut **Test Data** (ut testes si integrare in operam tuum produktionem) vel non. Ut hoc mutare, sponte togglen **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copie valorem ex **Publishable key** et **Secret key**, ex columna **Token** et in Ultimate Multisite Stripe Gateway fields inponte. Deinde clica ad **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Configuratio Webhook Stripe {#setting-up-stripe-webhook}

Stripe praedit eventa webhook quae Ultimate Multisite notificant dum aliquid in **account tuo stripe** accidit.

Clicca in **Developers** et deinde eligas item **Webhooks** in menu sinistro. Deinde in dextram clica ad **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Utne necesse est **Endpoint URL** *.* Ultimate Multisite automatico generat Endpoint URL, quod potes in loco subito sub campo **Webhook Listener URL** in sectione **Ultimate Multisite Stripe Gateway** invenire._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copie** endpoint URL et **inponte** in campo Stripe **Endpoint URL**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Deinde eligas **Event** *.* Sub hoc optione, solum necesse est marcare box **Select all events** et clicare ad **Add events**. Postea clica in **Add Endpoint** ut changes salvare.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Ita est, integra est integratio Petri (Stripe) tua!
