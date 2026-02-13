---
title: Configurazione di Stripe
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Configurare il Gateway Stripe (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Puoi attivare fino a quattro metodi di pagamento nella nostra pagina delle impostazioni di pagamento: Stripe, Stripe Checkout, PayPal e Manuale. In questo articolo vedremo come integrare con **Stripe**.

## Abilitare Stripe

Per abilitare Stripe come gateway di pagamento disponibile sulla tua rete, vai su **Ultimate Multisite > Settings > Payments** e spunta l'interruttore accanto a **Stripe** o **Stripe Checkout** nella sezione Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Questo metodo mostrerà uno spazio per inserire il numero della carta di credito durante il checkout.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Questo metodo reindirizzerà il cliente a una pagina Stripe Checkout durante il checkout.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

## Ottenere le chiavi API di Stripe

Una volta abilitato Stripe come gateway di pagamento, dovrai compilare i campi per **Stripe Publishable Key** e **Stripe Secret Key**. Puoi ottenerli accedendo al tuo account Stripe.

_**Nota:** puoi attivare la modalità **Sandbox** per verificare se il metodo di pagamento funziona._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Nel tuo cruscotto Stripe, fai clic su **Developers** nell'angolo in alto a destra, e poi su **API Keys** nel menu a sinistra.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Puoi usare **Test Data** (per verificare se l'integrazione funziona sul tuo sito di produzione) o meno. Per cambiare questa impostazione, sposta l'interruttore **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copia il valore dalla **Publishable key** e dalla **Secret key**, dalla colonna **Token**, e incollalo nei campi del Gateway Stripe di Ultimate Multisite. Poi fai clic su **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Configurare il Webhook di Stripe

Stripe invia eventi webhook che notificano Ultimate Multisite ogni volta che si verifica un evento sul **tuo account Stripe**.

Fai clic su **Developers** e poi scegli l'elemento **Webhooks** nel menu a sinistra. Poi, sul lato destro, fai clic su **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Avrai bisogno di un **Endpoint URL** *.* Ultimate Multisite genera automaticamente l'URL dell'endpoint, che puoi trovare proprio sotto il campo **Webhook Listener URL** nella sezione **Ultimate Multisite Stripe Gateway**_.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copy** l'URL dell'endpoint e **paste** nel campo **Endpoint URL** di Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Successivamente, seleziona un **Event** *.* Sotto questa opzione, devi semplicemente spuntare la casella **Select all events** e fare clic su **Add events**. Dopo di ciò, fai clic su **Add Endpoint** per salvare le modifiche.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Ecco fatto, la tua integrazione di pagamento Stripe è completa!
