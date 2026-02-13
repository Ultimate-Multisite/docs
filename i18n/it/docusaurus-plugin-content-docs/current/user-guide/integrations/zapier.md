---
title: Integrazione Zapier
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Integrazione di Ultimate Multisite con Zapier

In uno degli articoli, abbiamo discusso di [Webhooks](webhooks.md) e di come possono essere utilizzati per integrare con applicazioni di terze parti.

Utilizzare i webhooks è un po' complicato poiché richiede conoscenze avanzate di programmazione e di gestione dei payload. Utilizzare **Zapier** è un modo per aggirare questo problema.

Zapier ha integrazioni con oltre 5000 app, il che rende più facile la comunicazione tra diverse applicazioni.

Puoi creare **Triggers** che si attivano quando si verificano eventi sulla tua rete (ad es. un account viene creato e attiva l'evento account_create) o generare **Actions** sulla tua rete in risposta a eventi esterni (ad es. creare una nuova iscrizione di account nella tua rete Ultimate Multisite).

Ciò è possibile perché i **triggers di Ultimate Multisite Zapier** e le azioni sono alimentati dalla [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Come iniziare

Per prima cosa, cerca Ultimate Multisite nell'elenco delle app di Zapier. In alternativa, puoi fare clic su [questo link](https://zapier.com/apps/wp-ultimo/integrations).

Vai alla tua dashboard e premi il pulsante **+** **Create Zap** nella barra laterale sinistra per impostare un nuovo Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Verrai reindirizzato alla pagina di creazione dello Zap.

Nel campo di ricerca digita "wp ultimo". Fai clic per scegliere l'opzione **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Dopo aver selezionato la nostra app, scegli l'evento disponibile: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ora dobbiamo concedere a Zapier l'accesso a **la tua rete**. Facendo clic su **Sign in** si aprirà una nuova finestra che richiede le **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Vai al pannello di amministrazione della tua rete e naviga su **Ultimate Multisite > Settings** > **API & Webhooks** e cerca la sezione API Settings.

Seleziona l'opzione **Abilita API** poiché è necessaria per far funzionare questa connessione.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Usa l'icona **Copy to Clipboard** sui campi API Key e API Secret e incolla quei valori nella schermata di integrazione.

Nel campo URL, inserisci l'URL completo della tua rete, incluso il protocollo (HTTP o HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Fai clic sul pulsante **Yes, Continue** per passare al passaggio successivo. Se tutto funziona, dovresti essere accolto dal tuo nuovo account connesso! Fai clic su **Continue** per creare un nuovo trigger.

## Come creare un nuovo Trigger

Ora che il tuo account è connesso, puoi vedere gli eventi disponibili. Scegliamo l'evento **payment_received** per questo tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Una volta selezionato l'evento e fatto clic su **continue**, apparirà un **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

In questa fase, Zapier testerà se il tuo Zap può **recuperare il payload specifico per quell'evento**. In futuri eventi dello stesso tipo, verrà inviata l'informazione con la stessa struttura.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Nel nostro tutorial il test è stato **completed successfully** e ha restituito le informazioni di esempio del payload. Queste informazioni di esempio saranno utili per guidarci durante la creazione delle azioni. Il tuo trigger è ora creato e pronto per essere collegato ad altre applicazioni.

## Come creare Actions

Le Actions utilizzano le informazioni da altri trigger per creare nuove voci nella tua rete.

Nel **creating an action step** sceglierai Ultimate Multisite **Beta** e l'opzione **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Nel passaggio successivo creerai la tua autenticazione, proprio come abbiamo fatto in **How to start**, oppure selezionerai un'autenticazione già creata. In questo tutorial sceglieremo la stessa autenticazione precedentemente creata.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Configurazione dell'Action

Questo è il **main step of the action** e qui le cose sono un po' diverse. La prima informazione che sceglierai è l'**Item**. L'Item è il **modello di informazione** della tua rete, come **Customers, Payments, Sites, Emails** e altri.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Quando selezioni un item, il modulo si **riarrangerà per mostrare i campi obbligatori e opzionali** per l'item selezionato.

Ad esempio, quando selezioni l'item **Customer**, i campi del modulo mostreranno tutto ciò che è necessario per creare un nuovo Customer nella rete.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Dopo aver compilato tutti i campi contrassegnati come **required** e aver fatto clic su continue, un'ultima schermata mostrerà i campi compilati e quelli lasciati vuoti.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Non appena il tuo test è completato e ha successo, la tua action è configurata. È anche importante verificare sulla tua rete se l'item è stato creato con il test della tua action.
