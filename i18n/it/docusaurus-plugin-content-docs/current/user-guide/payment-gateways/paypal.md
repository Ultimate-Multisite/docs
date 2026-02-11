---
title: Configurazione di PayPal
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# Configurare il Gateway PayPal (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Puoi attivare fino a quattro metodi di pagamento nella nostra pagina delle impostazioni di pagamento: Stripe, Stripe Checkout, PayPal e Manual. In questo articolo vedremo come integrare con **PayPal**.

Proprio come Stripe, PayPal è ampiamente usato per pagamenti online, soprattutto sui siti WordPress. Questo articolo ti guiderà su come utilizzare PayPal come metodo di pagamento disponibile sulla tua rete.

Nota che devi avere un **PayPal Business account** per ottenere le credenziali API necessarie per questa integrazione.

## Abilitare PayPal sulla tua rete

Per abilitare PayPal come metodo di pagamento disponibile sulla tua rete, vai alla scheda **Ultimate Multisite > Settings > Payments** e spunta la casella accanto a PayPal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FhlfHHJLPl.png)

## Ottenere le credenziali API PayPal

Una volta abilitato PayPal come gateway di pagamento, dovrai compilare i campi per PayPal API **Username**, PayPal API **Password** e PayPal API **Signature**.

Puoi ottenerlo accedendo al tuo account PayPal [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

(Ricorda che puoi usare la modalità **sandbox** per testare i pagamenti e verificare se il gateway è configurato correttamente. Basta attivare la sezione corrispondente.)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PgTatIgsIm.png)

Per richiedere credenziali API Signature o Certificate per il tuo account PayPal:

1. Vai alle tue [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

2. Nella sezione **API access**, fai clic su **Update**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Dx72ARoKzx.png)

3. Sotto **NVP/SOAP API integration (Classic)**, fai clic su **Manage API credentials**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mUoIzsfpMq.png)

   * Se hai già generato un API Signature o Certificate, verrai reindirizzato a una pagina dove potrai trovare le tue credenziali.

   * _**Nota:** Se ti viene chiesto di verificare il tuo account PayPal, segui le istruzioni sullo schermo._

4. Seleziona _uno_ delle seguenti opzioni, quindi fai clic su **Agree and Submit**.

   * **Request API Signature** – Seleziona per l'autenticazione API Signature.

   * **Request API Certificate** – Seleziona per l'autenticazione API Certificate.

5. PayPal genera le tue credenziali API come segue:  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-utEMaS5roo.png)

   * **API Signature credentials** includono un API Username, API Password e Signature, che non scadono. Questi valori sono nascosti per impostazione predefinita per maggiore sicurezza. Fai clic su **Show/Hide** per attivarli o disattivarli. Quando hai finito, fai clic su **Done**.

   * **API Certificate credentials** includono un API Username, API Password e Certificate, che scade automaticamente dopo tre anni. Fai clic su **Download Certificate** per salvare il API Certificate sul tuo desktop.

Ecco fatto, la tua integrazione PayPal è completa!

Se hai domande riguardo le impostazioni PayPal, puoi consultare il [Help Center](https://www.paypal.com/br/smarthelp/home) di PayPal.
