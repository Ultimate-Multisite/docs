---
title: Il flusso di registrazione
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Il flusso di registrazione (v2) {#the-registration-flow-v2}

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Gli utenti possono registrarsi alla tua rete in modi diversi. Possono usare il tuo modulo di registrazione o un link condivisibile a un piano preselezionato. Qui ti mostreremo come i tuoi clienti possono registrarsi alla tua rete usando i percorsi disponibili e cosa succede dopo la registrazione alla tua rete.

## Usare il modulo di registrazione: {#using-the-registration-form}

Questo è il processo di registrazione standard. Crei una pagina di registrazione con un **modulo di checkout** e questo sarà il punto in cui i tuoi clienti andranno per registrarsi alla tua rete e abbonarsi a un piano. Puoi avere più pagine di registrazione, ciascuna con un modulo di registrazione diverso, se vuoi.

La pagina predefinita per la registrazione è [_**yourdomain.com/register**_](http://yourdomain.com/register), ma puoi cambiarla in qualsiasi momento in **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Dopo che un utente arriva alla tua pagina di registrazione (di solito facendo clic su un pulsante **Accedi** o **Acquista ora**), vedrà lì il tuo modulo di registrazione.

![Modulo di registrazione visualizzato nella pagina di registrazione](/img/frontend/registration-form.png)

Ecco un esempio del modulo di checkout come appare nel frontend:

![Modulo di registrazione checkout nel frontend](/img/config/checkout-frontend-registration.png)

Tutto ciò che devono fare è compilare tutti i campi obbligatori - email, nome utente, password, ecc... - e pagare il piano oppure confermare il loro indirizzo email se si stanno registrando per un piano gratuito o un piano a pagamento con periodo di prova senza informazioni di pagamento.

Nella pagina "Grazie", vedranno un messaggio che indica se devono confermare il loro indirizzo email o se il loro sito web è già attivato e possono iniziare a usarlo.

![Pagina di ringraziamento dopo la registrazione](/img/frontend/registration-thank-you.png)

Se è richiesta la conferma dell'indirizzo email, dovranno andare nella loro casella email e fare clic sul link di verifica. Il loro sito web non verrà attivato se il loro indirizzo email non viene verificato.

Se si sono registrati a un piano a pagamento o la verifica dell'email non è obbligatoria sulla tua rete, il loro sito web verrà attivato subito dopo il checkout e verrà mostrato loro un link per accedere alla loro Dashboard.

![Sito attivato con link per accedere alla Dashboard](/img/frontend/site-activated.png)

## Usare un link condivisibile: {#using-a-shareable-link}

Il processo di registrazione usando un link condivisibile è sostanzialmente lo stesso del modulo di registrazione; l'unica differenza è che usando un link condivisibile, i tuoi clienti possono avere un prodotto o un template di sito web preselezionato nel modulo di checkout (consulta la sezione Preselezionare prodotti e template tramite parametri URL) o magari un codice coupon aggiunto (consulta la sezione Usare i parametri URL).

Il processo di registrazione sarà lo stesso: dovranno compilare il loro nome, nome utente, indirizzo email, nome e titolo del sito web, ecc... ma il piano o il template del sito saranno già preselezionati per loro.

### Registrazione usando pagamenti manuali: {#registering-using-manual-payments}

Se non vuoi usare PayPal, Stripe o qualsiasi altro gateway di pagamento offerto da Ultimate Multisite o dalle sue integrazioni add-on, puoi usare i pagamenti manuali per i tuoi clienti. In questo modo, puoi generare una fattura da far pagare loro sul processore di pagamento che preferisci dopo che si registrano alla tua rete.

Il processo di registrazione sarà esattamente lo stesso descritto sopra, ma nella pagina di registrazione i tuoi clienti vedranno un messaggio che indica che riceveranno un'email con ulteriori istruzioni per completare il pagamento.

![Messaggio di pagamento manuale durante la registrazione](/img/frontend/registration-manual-notice.png)

E dopo che la registrazione è completata, vedranno le istruzioni di pagamento che hai impostato (e le riceveranno anche nella loro email).

![Istruzioni di pagamento mostrate dopo la registrazione](/img/frontend/registration-payment-instructions.png)

Le istruzioni di pagamento possono essere modificate in **Ultimate Multisite > Settings > Payments** dopo aver attivato l'opzione di pagamento **Manuale**:

![Interruttore di pagamento manuale con campo delle istruzioni di pagamento](/img/config/manual-gateway-settings.png)

Dopo che i tuoi clienti completano il pagamento manuale e ti inviano la conferma, devi **confermare manualmente il pagamento** per attivare l'iscrizione e il sito web del cliente.

Per farlo, vai su **Ultimate Multisite > Payments** e trova il pagamento del cliente. Dovrebbe mostrare ancora lo stato **In sospeso**.

![Elenco dei pagamenti con pagamento manuale in sospeso](/img/admin/payments-list.png)

Fai clic sul numero del pagamento e potrai cambiarne lo stato in **Completato**.

![Pagina dei dettagli del pagamento](/img/admin/payment-edit.png)

![Modifica dello stato del pagamento in Completato](/img/admin/payment-status-completed.png)

Dopo aver cambiato il suo stato in **Completato** , dovresti vedere un messaggio **Attiva iscrizione**. Attiva questa opzione per attivare l'iscrizione e il sito web associati a questo cliente. Poi, fai clic su **Salva pagamento**.

![Interruttore Attiva iscrizione e pulsante Salva pagamento](/img/admin/payment-activate-membership.png)

Il tuo cliente dovrebbe ora poter accedere alla Dashboard e a tutte le funzionalità a cui si è abbonato.
