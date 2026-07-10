---
title: Integrazione Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrare Ultimate Multisite con Zapier {#integrating-ultimate-multisite-with-zapier}

In uno degli articoli, abbiamo discusso dei [Webhooks](webhooks.md) e di come possono essere usati per integrarsi con applicazioni di terze parti.

Usare i webhooks è un po' complicato, perché richiede conoscenze avanzate di programmazione e di intercettazione dei payload. Usare **Zapier** è un modo per aggirare questo problema.

Zapier ha integrazioni con oltre 5000+ app, il che rende più semplice la comunicazione tra diverse applicazioni.

Puoi creare **Trigger** che verranno attivati quando si verificano eventi sulla tua rete (ad esempio, un account viene creato e attiva l'evento account_create) oppure generare **Actions** sulla tua rete in risposta a eventi esterni (ad esempio, creare una nuova membership per un account nella tua rete Ultimate Multisite).

Questo è possibile perché **i trigger di Ultimate Multisite Zapier** e le actions sono alimentati dalla [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Come iniziare {#how-to-start}

Per prima cosa, cerca Ultimate Multisite nell'elenco delle app di Zapier. In alternativa, puoi fare clic su [questo link](https://zapier.com/apps/wp-ultimo/integrations).

Vai alla tua dashboard e premi il pulsante **+** **Crea Zap** nella barra laterale sinistra per configurare un nuovo Zap.

![Dashboard di Zapier con pulsante Crea Zap](/img/admin/webhooks-list.png)

Verrai reindirizzato alla pagina di creazione dello Zap.

Nella casella di ricerca digita "wp ultimo". Fai clic per scegliere l'opzione della versione **Beta**.

![Ricerca di WP Ultimo nell'elenco delle app di Zapier](/img/admin/webhooks-list.png)

Dopo aver selezionato la nostra app, scegli l'evento disponibile: **Nuovo evento Ultimate Multisite**.

![Selezione del trigger Nuovo evento Ultimate Multisite](/img/admin/webhooks-list.png)

Ora dobbiamo dare a Zapier accesso alla **tua rete**. Facendo clic su **Sign in** si aprirà una nuova finestra che richiede le **credenziali API**.

![Prompt di Sign in di Zapier per le credenziali API](/img/admin/webhooks-list.png)

Vai al pannello di amministrazione della tua rete e naviga su **Ultimate Multisite > Settings** > **API & Webhooks** e cerca la sezione API Settings.

Seleziona l'opzione **Enable API**, poiché è necessaria affinché questa connessione funzioni.

![Impostazioni API e Webhooks con opzioni API Settings ed Enable API](/img/admin/settings-api-webhooks.png)

Usa l'icona **Copy to Clipboard** nei campi API Key e API Secret e incolla quei valori nella schermata di integrazione.

Nel campo URL, inserisci l'URL completo della tua rete, incluso il protocollo (HTTP o HTTPS).

![Schermata di integrazione di Zapier con campi API Key, Secret e URL](/img/admin/webhooks-list.png)

Fai clic sul pulsante **Yes, Continue** per passare al passaggio successivo. Se tutto funziona correttamente, dovresti essere accolto dal tuo nuovo account connesso! Fai clic su **Continue** per creare un nuovo trigger.

## Come creare un nuovo Trigger {#how-to-create-a-new-trigger}

Ora che il tuo account è connesso, puoi vedere gli eventi disponibili. Scegliamo l'evento **payment_received** per questo tutorial.

![Selezione dell'evento payment_received nel trigger di Zapier](/img/admin/webhooks-list.png)

Una volta selezionato l'evento e fatto clic su **continue** , apparirà un **passaggio di test**.

![Passaggio di test di Zapier per il trigger](/img/admin/webhooks-list.png)

In questa fase, Zapier testerà se il tuo Zap può **recuperare il payload specifico per quell'evento**. Nei futuri eventi dello stesso tipo, verranno inviate informazioni con questa stessa struttura.

![Test del trigger di Zapier completato con successo con payload](/img/admin/webhooks-list.png)

Nel nostro tutorial il test è stato **completato con successo** e ha restituito le informazioni di esempio del payload. Queste informazioni di esempio saranno utili per guidarci durante la creazione delle actions. Il tuo trigger è ora creato e pronto per essere collegato ad altre applicazioni.

## Come creare Actions {#how-to-create-actions}

Le actions usano informazioni provenienti da altri trigger per creare nuove voci nella tua rete.

Nel **passaggio di creazione di un'action** sceglierai Ultimate Multisite **Beta** e l'opzione **Create Items on Ultimate Multisite**.

![Creazione di un'action con Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Nel passaggio successivo creerai la tua autenticazione, proprio come abbiamo fatto in **Come iniziare** , oppure selezionerai un'autenticazione già creata. In questo tutorial sceglieremo la stessa autenticazione creata in precedenza.

![Selezione dell'autenticazione per l'action di Zapier](/img/admin/webhooks-list.png)

### Configurare l'Action {#setting-up-the-action}

Questo è il **passaggio principale dell'action** e qui le cose sono un po' diverse. La prima informazione che sceglierai è l'**Item**. Item è il **modello di informazioni** della tua rete, come **Customers, Payments, Sites, Emails** e altri.

![Scelta del tipo di Item per l'action di Zapier](/img/admin/webhooks-list.png)

Quando selezioni un item, il modulo si **riorganizzerà per mostrare i campi obbligatori e opzionali** per l'item selezionato.

Ad esempio, quando selezioni l'item **Customer** , i campi del modulo mostreranno tutto ciò che è necessario compilare per creare un nuovo Customer nella rete.

![Campi dell'item Customer nella configurazione dell'action di Zapier](/img/admin/webhooks-list.png)

Dopo aver compilato tutti i campi contrassegnati come **obbligatori** e fatto clic su continua, un'ultima schermata ti mostrerà i campi compilati e i campi lasciati vuoti.

![Test dell'action di Zapier che mostra campi compilati e non compilati](/img/admin/webhooks-list.png)

Non appena il test si completa con successo, la tua action è configurata. È anche importante verificare sulla tua rete se l'item è stato creato con il test della tua action.
