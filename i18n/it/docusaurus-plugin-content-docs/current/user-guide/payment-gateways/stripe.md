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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** Questo metodo mostrerà uno spazio per inserire il numero della carta di credito durante il checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** Questo metodo reindirizzerà il cliente a una pagina Stripe Checkout durante il checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

## Ottenere le chiavi API di Stripe

Una volta abilitato Stripe come gateway di pagamento, dovrai compilare i campi per **Stripe Publishable Key** e **Stripe Secret Key**. Puoi ottenerli accedendo al tuo account Stripe.

_**Nota:** puoi attivare la modalità **Sandbox** per verificare se il metodo di pagamento funziona._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

Nel tuo cruscotto Stripe, fai clic su **Developers** nell'angolo in alto a destra, e poi su **API Keys** nel menu a sinistra.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Puoi usare **Test Data** (per verificare se l'integrazione funziona sul tuo sito di produzione) o meno. Per cambiare questa impostazione, sposta l'interruttore **Viewing test data**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Copia il valore dalla **Publishable key** e dalla **Secret key**, dalla colonna **Token**, e incollalo nei campi del Gateway Stripe di Ultimate Multisite. Poi fai clic su **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Configurare il Webhook di Stripe

Stripe invia eventi webhook che notificano Ultimate Multisite ogni volta che si verifica un evento sul **tuo account Stripe**.

Fai clic su **Developers** e poi scegli l'elemento **Webhooks** nel menu a sinistra. Poi, sul lato destro, fai clic su **Add endpoint** *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Avrai bisogno di un **Endpoint URL** *.* Ultimate Multisite genera automaticamente l'URL dell'endpoint, che puoi trovare proprio sotto il campo **Webhook Listener URL** nella sezione **Ultimate Multisite Stripe Gateway**_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Copy** l'URL dell'endpoint e **paste** nel campo **Endpoint URL** di Stripe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

Successivamente, seleziona un **Event** *.* Sotto questa opzione, devi semplicemente spuntare la casella **Select all events** e fare clic su **Add events**. Dopo di ciò, fai clic su **Add Endpoint** per salvare le modifiche.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

Ecco fatto, la tua integrazione di pagamento Stripe è completa!
