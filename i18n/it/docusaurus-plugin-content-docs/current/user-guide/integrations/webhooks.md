---
title: Webhook
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Una prima occhiata ai Webhook (v2)

_**ATTENZIONE: Nota che questa funzionalità o articolo è destinato a utenti avanzati.**_

Un **webhook** è un modo per un'app o software come Ultimate Multisite di fornire ad altre applicazioni informazioni in tempo reale. Un webhook consegna dati o payload ad altre applicazioni al momento in cui avvengono, il che significa che **ricevi i dati immediatamente.**

Questo è utile se hai bisogno di integrare o passare determinati dati da Ultimate Multisite a un altro CRM o sistema ogni volta che viene attivato un evento. Per esempio, devi inviare il nome e l'indirizzo email dell'utente a una mailing list ogni volta che viene creato un nuovo account utente.

## How to create a webhook

Per creare un webhook, vai alla dashboard di amministrazione della rete. Fai clic su **Ultimate Multisite > Webhooks > Add New Webhook.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7cBdC7uhfX.png)

Quando crei un nuovo webhook ti verrà chiesto di inserire informazioni come **Name, URL,** e **Event**. Puoi usare qualsiasi nome tu voglia per il tuo webhook. I campi più importanti sono l'URL e l'Event.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7MmyV3wafK.png)

L'URL è l'**endpoint o la destinazione** a cui Ultimate Multisite invierà il **payload o i dati**. Questa è l'applicazione che riceverà i dati.

Zapier è la soluzione più comune che l'utente utilizza per rendere più facile l'integrazione con applicazioni di terze parti. Senza una piattaforma come Zapier, dovrai creare manualmente una funzione personalizzata che intercetterà i dati e li elaborerà. Vedi questo articolo su **how to use Ultimate Multisite webhook with Zapier.**

In questo articolo esamineremo il concetto di base su come funziona un webhook e gli eventi disponibili in Ultimate Multisite. Utilizzeremo un sito di terze parti chiamato [requestbin.com](https://requestbin.com/). Questo sito ci permetterà di creare un endpoint e intercettare il payload senza fare alcun codice. _**Disclaimer: tutto ciò che farà è mostrarci che i dati sono stati ricevuti.**_ Non verrà eseguita alcuna elaborazione o azione sul payload.

Vai su [requestbin.com](https://requestbin.com/) e fai clic su Create Request Bin.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J0e5FzS04g.png)

Dopo aver cliccato quel pulsante, ti verrà chiesto di accedere se hai già un account o di registrarti. Se hai già un account, verrai indirizzato direttamente alla loro dashboard. Nella loro dashboard, vedrai immediatamente l'endpoint o l'URL che puoi utilizzare per creare il tuo webhook Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M40kPMGsji.png)

Copia l'URL e torna a Ultimate Multisite. Inserisci l'endpoint nel campo URL e seleziona un evento dal menu a tendina. In questo esempio, selezioneremo **Payment Received**.

Questo evento viene attivato ogni volta che un utente effettua un pagamento. Tutti gli eventi disponibili, le loro descrizioni e i payload sono elencati nella parte inferiore della pagina. Fai clic sul pulsante **Add New Webhook** per salvare il webhook.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1NwqQP4bP0.png)

Ora possiamo inviare un evento di prova all'endpoint per verificare se il webhook che abbiamo creato funziona. Possiamo fare ciò facendo clic su **Send Test Event** sotto il webhook che abbiamo creato.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zTDhrG4wlP.png)

Questo mostra una finestra di conferma che indica che il test è stato eseguito con successo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9jP9r7yRT9.png)

Ora, se torniamo al sito _Requestbin_, vedremo che il payload è stato ricevuto contenente alcuni dati di prova.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RZke5xnrAg.png)

Questo è il principio di base su come funzionano webhook e endpoint. Se devi creare un endpoint personalizzato, dovrai creare una funzione personalizzata per elaborare i dati che ricevi da Ultimate Multisite.
