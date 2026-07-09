---
title: Configurazione di PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurazione del gateway PayPal (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Puoi attivare fino a quattro metodi di pagamento nella nostra pagina delle impostazioni di pagamento: Stripe, Stripe Checkout, PayPal e Manuale. In questo articolo vedremo come integrare **PayPal**.

Proprio come Stripe, PayPal è ampiamente utilizzato per i pagamenti online, soprattutto sui siti WordPress. Questo articolo ti guiderà su come usare PayPal come metodo di pagamento disponibile sulla tua rete.

Tieni presente che devi avere un **Account PayPal Business** per ottenere la credenziale API necessaria per questa integrazione.

## Abilitare PayPal sulla tua rete

Per abilitare PayPal come metodo di pagamento disponibile sulla tua rete, vai alla scheda **Ultimate Multisite > Settings > Payments** e seleziona la casella accanto a PayPal.

![Abilitazione di PayPal nei gateway di pagamento attivi](/img/config/settings-payment-gateways.png)

## Usare la procedura guidata di configurazione

Ultimate Multisite 2.10.0 aggiunge una procedura guidata di configurazione di PayPal alle impostazioni del gateway di pagamento. Dopo aver abilitato PayPal, usa la procedura guidata in **Ultimate Multisite > Settings > Payments** per scegliere come vuoi connettere il gateway e confermare quali credenziali sono ancora necessarie prima di salvare.

La procedura guidata supporta due percorsi di configurazione:

* **Inserimento manuale delle credenziali**: usa questo percorso quando hai già le credenziali API PayPal, quando la configurazione OAuth non è disponibile per il tuo Account, oppure quando preferisci copiare personalmente le credenziali da PayPal. Inserisci API Username, API Password e API Signature nei campi PayPal, quindi salva le impostazioni di pagamento.
* **Gate di connessione OAuth**: usa questo percorso solo quando l’opzione OAuth è disponibile e abilitata per la tua installazione. La procedura guidata mostra il flusso OAuth dietro un feature flag, quindi le reti senza il flag continuano a usare i campi di inserimento manuale delle credenziali.

Se non vedi l’opzione OAuth nella procedura guidata, completa il flusso di inserimento manuale delle credenziali qui sotto. Il gateway funziona con le stesse credenziali API PayPal Business delle precedenti versioni Ultimate Multisite 2.x.

## Ottenere le credenziali API PayPal

Una volta che PayPal è abilitato come gateway di pagamento, dovrai compilare i campi per PayPal API **Username** , PayPal API **Password** e PayPal API **Signature**.

Puoi ottenerle accedendo al tuo Account PayPal [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

(Ricorda che puoi usare la **modalità sandbox** per testare i pagamenti e vedere se il gateway è configurato correttamente. Basta attivare la sezione corrispondente.)

![Campi delle credenziali API PayPal e interruttore della modalità sandbox](/img/config/settings-payment-gateways.png)

Per richiedere le credenziali API Signature o Certificate per il tuo Account PayPal:

  1. Vai alle tue [Impostazioni Account](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Nella sezione **API access**, fai clic su **Update**.
![Impostazioni Account PayPal con sezione API access](/img/config/settings-payment-gateways.png)

  3. Sotto **NVP/SOAP API integration (Classic)** , fai clic su **Manage API credentials**.
![Integrazione API NVP/SOAP PayPal Manage API credentials](/img/config/settings-payment-gateways.png)

     * Se hai già generato una API Signature o un Certificate, verrai reindirizzato a una pagina in cui puoi trovare le tue credenziali.

     * _**Nota:** se ti viene richiesto di verificare il tuo Account PayPal, segui le istruzioni sullo schermo._

  4. Seleziona _una_ delle seguenti opzioni, quindi fai clic su **Agree and Submit**.

     * **Request API Signature** – Seleziona per l’autenticazione API Signature.

     * **Request API Certificate** – Seleziona per l’autenticazione API Certificate.

  5. PayPal genera le tue credenziali API come segue:
![Credenziali API generate da PayPal](/img/config/settings-payment-gateways.png)

     * Le **credenziali API Signature** includono un API Username, un API Password e una Signature, che non scade. Questi valori sono nascosti per impostazione predefinita per una maggiore sicurezza. Fai clic su **Show/Hide** per attivarne e disattivarne la visualizzazione. Al termine, fai clic su **Done**.

     * Le **credenziali API Certificate** includono un API Username, un API Password e un Certificate, che scade automaticamente dopo tre anni. Fai clic su **Download Certificate** per salvare il Certificate API sul tuo desktop.

Ecco fatto, la tua integrazione di pagamento PayPal è completa!

Se hai domande sulle impostazioni PayPal, puoi consultare il [Centro assistenza](https://www.paypal.com/br/smarthelp/home) di PayPal.
