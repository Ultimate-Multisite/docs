---
title: Configurazione di Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurazione del gateway Stripe (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Puoi attivare fino a quattro metodi di pagamento nella nostra pagina delle impostazioni di pagamento: Stripe, Stripe Checkout, PayPal e Manuale. In questo articolo vedremo come integrare **Stripe**.

## Abilitare Stripe {#enabling-stripe}

Per abilitare Stripe come gateway di pagamento disponibile sulla tua rete, vai su **Ultimate Multisite > Settings > Payments** e seleziona l’interruttore accanto a **Stripe** o **Stripe Checkout** nella sezione Active Payment Gateways.

![Abilitazione di Stripe nei gateway di pagamento attivi](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Questo metodo mostrerà uno spazio per inserire il numero della carta di credito durante il checkout.

![Campo inline della carta di credito Stripe durante il checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Questo metodo reindirizzerà il cliente a una pagina Stripe Checkout durante il checkout.

![Pagina di reindirizzamento Stripe Checkout durante il checkout](/img/config/settings-payment-gateways.png)

Ottenere le tue chiavi API Stripe

Una volta che Stripe è abilitato come gateway di pagamento, dovrai compilare i campi per **Stripe Publishable Key** e **Stripe Secret Key** . Puoi ottenerle accedendo al tuo Account Stripe.

_**Nota:** puoi attivare **Sandbox mode** per verificare se il metodo di pagamento funziona._

![Campi delle chiavi API Stripe e interruttore della modalità sandbox](/img/config/settings-payment-gateways.png)

Nel tuo Dashboard Stripe, fai clic su **Developers** nell’angolo in alto a destra, quindi su **API Keys** nel menu a sinistra.

![Sezione Developers del Dashboard Stripe con API Keys](/img/config/settings-payment-gateways.png)

Puoi usare **Test Data** (per verificare se l’integrazione funziona sul tuo sito di produzione) oppure no. Per modificarlo, attiva o disattiva l’interruttore **Viewing test data**.

![Interruttore Viewing test data di Stripe](/img/config/settings-payment-gateways.png)

Copia il valore da **Publishable key** e **Secret key** , dalla colonna **Token** e incollalo nei campi del gateway Stripe di Ultimate Multisite. Quindi fai clic su **Save Changes**.

![Valori della chiave pubblicabile e della chiave segreta Stripe](/img/config/settings-payment-gateways.png)

![Incollare le chiavi Stripe nelle impostazioni di Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Configurazione del Webhook Stripe {#setting-up-stripe-webhook}

Stripe invia eventi webhook che notificano Ultimate Multisite ogni volta che si verifica un evento su **il tuo Account stripe**.

Fai clic su **Developers** e poi scegli la voce **Webhooks** nel menu a sinistra. Quindi, sul lato destro, fai clic su **Add endpoint** *.*

![Pagina Webhooks di Stripe con pulsante Add endpoint](/img/config/settings-payment-gateways.png)

Ti servirà un **Endpoint URL** *.* Ultimate Multisite genera automaticamente l’endpoint URL, che puoi trovare subito sotto il campo **Webhook Listener URL** nella sezione _gateway Stripe di Ultimate Multisite._

![Campo Webhook Listener URL nelle impostazioni del gateway Stripe](/img/config/settings-payment-gateways.png)

**Copia** l’endpoint URL e **incollalo** nel campo **Endpoint URL** di Stripe.

![Incollare l’endpoint URL nella configurazione del webhook Stripe](/img/config/settings-payment-gateways.png)

Il passaggio successivo è selezionare un **Event** *.* In questa opzione, devi semplicemente selezionare la casella **Select all events** e fare clic su **Add events**. Dopodiché fai clic su **Add Endpoint** per salvare le modifiche.

![Selezione di tutti gli eventi e aggiunta dell’endpoint Stripe](/img/config/settings-payment-gateways.png)

Ecco fatto, la tua integrazione dei pagamenti Stripe è completa!
