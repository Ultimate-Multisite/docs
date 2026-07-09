---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Un primo sguardo ai Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**ATTENZIONE: nota che questa funzionalità o articolo è per utenti avanzati.**_

Un **webhook** è un modo per un'app o un software come Ultimate Multisite di fornire ad altre applicazioni informazioni in tempo reale. Un webhook consegna dati o payload ad altre applicazioni nel momento in cui accade, il che significa che **ricevi i dati immediatamente.**

Questo è utile se devi integrare o passare determinati dati da Ultimate Multisite a un altro CRM o sistema ogni volta che viene attivato un evento. Ad esempio, devi inviare il nome e l'indirizzo email dell'utente a una mailing list ogni volta che viene creato un nuovo account utente.

## Come creare un webhook {#how-to-create-a-webhook}

Per creare un webhook, vai alla tua dashboard di amministrazione di rete. Fai clic su **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pagina vuota dell'elenco Webhooks con pulsante Add New Webhook](/img/admin/webhooks-list-empty.png)

Puoi quindi modificare la configurazione del webhook:

![Modulo Add New Webhook con campi Nome, Evento e URL](/img/admin/webhook-add-modal.png)

Quando crei un nuovo webhook, ti verranno richieste informazioni come **Name, URL,** ed **Event**. Puoi usare qualsiasi nome desideri per il tuo webhook. I campi più importanti sono URL ed Event.

![Interfaccia di modifica del webhook che mostra il campo URL e l'anteprima del payload](/img/admin/webhook-url-field.png)

URL è l'**endpoint o la destinazione** a cui Ultimate Multisite invierà il **payload o i dati**. Questa è l'applicazione che riceverà i dati.

Zapier è la soluzione più comune che l'utente usa per rendere più facile l'integrazione con applicazioni di terze parti. Senza una piattaforma come Zapier, dovrai creare manualmente una funzione personalizzata che catturerà i dati e li elaborerà. Consulta questo articolo su **come usare il webhook di Ultimate Multisite con Zapier.**

In questo articolo esamineremo il concetto di base di come funziona un webhook e gli eventi disponibili in Ultimate Multisite. Useremo un sito di terze parti chiamato [requestbin.com](https://requestbin.com/). Questo sito ci permetterà di creare un endpoint e catturare il payload senza scrivere codice. _**Dichiarazione di non responsabilità: tutto ciò che farà è mostrarci che i dati sono stati ricevuti.**_ Non verrà eseguita alcuna elaborazione o alcun tipo di azione sul payload.

Vai su [requestbin.com](https://requestbin.com/) e fai clic su Create Request Bin.

Dopo aver fatto clic su quel pulsante, ti chiederà di accedere se hai già un account o di registrarti. Se hai già un account, ti porterà direttamente alla loro dashboard. Nella loro dashboard vedrai subito l'endpoint o l'URL che puoi usare per creare il tuo webhook Ultimate Multisite.

Procedi e copia l'URL, quindi torna a Ultimate Multisite. Inserisci l'endpoint nel campo URL e seleziona un evento dal menu a discesa. In questo esempio selezioneremo **Payment Received**.

Questo evento viene attivato ogni volta che un utente effettua un pagamento. Tutti gli eventi disponibili, la loro descrizione e i payload sono elencati in fondo alla pagina. Fai clic sul pulsante **Add New Webhook** per salvare il webhook.

![Menu a discesa degli eventi webhook con Payment Received selezionato](/img/admin/webhook-event-picker.png)

Ora possiamo inviare un evento di test all'endpoint per vedere se il webhook che abbiamo creato funziona. Possiamo farlo facendo clic su **Send Test Event** sotto il webhook che abbiamo creato.

![Elenco Webhooks che mostra un webhook configurato e l'azione Send Test](/img/admin/webhooks-list-populated.png)

Questo mostra una finestra di conferma che indica che il test è riuscito.

![Risultato dell'evento di test del webhook dopo l'invio di un payload di test](/img/admin/webhook-test-result.png)

Ora, se torniamo al sito _Requestbin_, vedremo che il payload è stato ricevuto e contiene alcuni dati di test.

Questo è il principio di base di come funzionano webhook ed endpoint. Se devi creare un endpoint personalizzato, dovrai creare una funzione personalizzata per elaborare i dati che ricevi da Ultimate Multisite.
