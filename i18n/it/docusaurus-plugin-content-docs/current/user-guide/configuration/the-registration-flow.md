---
title: Il Flusso di Registrazione
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# Il Flusso di Registrazione (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Gli utenti possono registrarsi in diversi modi nella tua rete. Possono utilizzare il tuo modulo di registrazione o un link condivisibile a un piano pre-selezionato. Qui ti mostreremo come i tuoi clienti possono registrarsi nella tua rete utilizzando i percorsi disponibili e cosa succede dopo la registrazione.

## Utilizzo del Modulo di Registrazione:

Questo è il processo di registrazione standard. Crei una pagina di registrazione con un **checkout form** e questo sarà il luogo dove i tuoi clienti andranno per registrarsi nella tua rete e abbonarsi a un piano. Puoi avere più pagine di registrazione, ognuna con un modulo di registrazione diverso se lo desideri.

La pagina predefinita per la registrazione è [_**yourdomain.com/register**_](http://yourdomain.com/register), ma puoi cambiarla in qualsiasi momento su **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Dopo che un utente arriva sulla tua pagina di registrazione (di solito cliccando su un pulsante **Sign in** o **Buy now**), vedrà il tuo modulo di registrazione lì.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hDcy7S8pBK.png)

Tutto ciò che devono fare è compilare tutti i campi obbligatori - email, nome utente, password, ecc... - e pagare per il piano o confermare il loro indirizzo email se si registrano per un piano gratuito o un piano a pagamento con periodo di prova senza informazioni di pagamento.

Nella pagina di "Grazie", vedranno un messaggio che indica se devono confermare il loro indirizzo email o se il loro sito è già attivato e possono iniziare a usarlo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FnXxCLt0YW.png)

Se è richiesta la conferma dell'indirizzo email, dovranno andare nella loro casella di posta e cliccare sul link di verifica. Il loro sito non verrà attivato se l'indirizzo email non viene verificato.

Se si sono registrati su un piano a pagamento o la verifica email non è obbligatoria nella tua rete, il loro sito verrà attivato subito dopo il checkout e verrà mostrato un link per accedere al loro cruscotto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DJwvUqQnQU.png)

## Utilizzo di un Link Condivisibile:

Il processo di registrazione tramite un link condivisibile è fondamentalmente lo stesso del modulo di registrazione; l'unica differenza è che, utilizzando un link condivisibile, i tuoi clienti possono avere un prodotto o un modello di sito pre-selezionato nel modulo di checkout (vedi la sezione Pre-selecting products and templates via URL parameters) o magari un codice coupon aggiunto (vedi la sezione Using URL Parameters).

Il processo di registrazione sarà lo stesso: dovranno compilare nome, nome utente, indirizzo email, nome del sito e titolo, ecc... ma il piano o il modello di sito sarà già pre-selezionato per loro.

### Registrazione con Pagamenti Manuali:

Se non vuoi usare PayPal, Stripe o qualsiasi altro gateway di pagamento offerto da Ultimate Multisite o dalle sue integrazioni add-on, puoi utilizzare pagamenti manuali per i tuoi clienti. In questo modo, puoi generare una fattura da pagare sul tuo processore di pagamento preferito dopo che si registrano nella tua rete.

Il processo di registrazione sarà esattamente lo stesso di sopra, ma sulla pagina di registrazione i tuoi clienti vedranno un messaggio che indica che riceveranno un'email con ulteriori istruzioni per completare il pagamento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iSli6MoFGw.png)

E dopo che la registrazione è completata, vedranno le istruzioni di pagamento che hai impostato (e le riceveranno anche via email).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hX0GPWYfEA.png)

Le istruzioni di pagamento possono essere modificate su **Ultimate Multisite > Settings > Payments** dopo aver attivato l'opzione di pagamento **Manual**:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RpPGDd0BZo.png)

Dopo che i tuoi clienti hanno completato il pagamento manuale e ti hanno inviato la conferma, devi **confermare manualmente il pagamento** per attivare l'iscrizione del cliente e il sito.

Per fare ciò, vai su **Ultimate Multisite > Payments** e trova il pagamento del cliente. Dovrebbe ancora mostrare lo stato **Pending**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-2rW0tFemEP.png)

Clicca sul numero di pagamento e potrai cambiare il suo stato in **Completed**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KiRQKw3wGg.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-NPFNchZrUa.png)

Dopo aver cambiato lo stato in **Completed**, dovresti vedere un messaggio **Activate membership**. Attiva questa opzione **on** per attivare l'iscrizione e il sito associato a questo cliente. Quindi, fai clic su **Save Payment**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e3R91KmnUV.png)

Il tuo cliente dovrebbe ora poter accedere al cruscotto e a tutte le funzionalità a cui si è abbonato.
