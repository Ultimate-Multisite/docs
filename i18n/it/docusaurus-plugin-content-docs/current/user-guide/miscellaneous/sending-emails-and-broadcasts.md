---
title: Invio di email e trasmissioni
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# Invio di email e trasmissioni (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Ultimate Multisite offre una funzionalità che ti consente di comunicare con i tuoi clienti inviando un'email a un utente mirato o a un gruppo di utenti, oltre a inviare avvisi sul loro cruscotto di amministrazione per trasmettere annunci.

## Aggiungi avvisi amministrativi al cruscotto dei tuoi clienti con le Trasmissioni

Utilizzando la funzione di trasmissione di Ultimate Multisite, puoi aggiungere **avvisi amministrativi** al cruscotto di amministrazione del sottosito del tuo utente.

Questo è estremamente utile se hai bisogno di fare un annuncio come la manutenzione del sistema o l'offerta di nuovi prodotti o servizi ai tuoi utenti esistenti. Ecco come apparirà l'avviso amministrativo sul cruscotto del tuo utente.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

Per avviare un avviso amministrativo, vai al cruscotto di amministrazione della rete e sotto il menu **Ultimate Multisite**, troverai l'opzione **Broadcasts**.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Da questa pagina, fai clic sul pulsante **Add Broadcast** in alto.

Questo aprirà la finestra modale Add broadcast dove puoi scegliere il tipo di trasmissione che desideri inviare.

Vai avanti e seleziona **Message** quindi fai clic sul pulsante **Next Step**.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

La finestra successiva ti chiederà di selezionare il **Target customer** o il **Target product**. Nota che puoi selezionare più di un utente o più di un prodotto.

Per cercare un account utente o un prodotto, devi iniziare a digitare la parola chiave nel campo.

Sotto il campo **Message type**, puoi selezionare il colore dell'avviso. Questo enfatizzerà l'urgenza del tuo messaggio.

Puoi quindi fare clic su **Next Step**.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

La finestra successiva è dove puoi iniziare a comporre il tuo messaggio inserendo l'oggetto e il contenuto/messaggio che desideri trasmettere agli utenti.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

Dopo aver creato il tuo messaggio, puoi premere il pulsante **Send**.

Ecco fatto. L'avviso amministrativo dovrebbe apparire immediatamente sul cruscotto del tuo utente.

## Invia email ai tuoi clienti

Utilizzando la funzione di trasmissione di Ultimate Multisite, puoi inviare un'email ai tuoi utenti. Hai l'opzione di inviare l'email solo a utenti specifici o di mirare a un gruppo di utenti specifico in base al prodotto o al piano a cui sono iscritti.

Per avviare una trasmissione di email, vai al cruscotto di amministrazione della rete e sotto il menu Ultimate Multisite, troverai l'opzione Broadcast.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Da questa pagina, fai clic sul pulsante **Add broadcast** in alto.

Questo aprirà la finestra modale Add broadcast dove puoi scegliere il tipo di trasmissione che desideri inviare. Vai avanti e seleziona **Email** quindi fai clic sul pulsante **Next Step**.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

La finestra successiva ti chiederà di selezionare il **Target customer** o il **Target product**. Nota che puoi selezionare più di un utente o più di un prodotto.

Per cercare un account utente o un prodotto, devi iniziare a digitare la parola chiave nel campo.

Una volta selezionato il tuo pubblico di destinazione, puoi fare clic su **Next Step**.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

La finestra successiva è dove puoi iniziare a comporre la tua email inserendo l'oggetto e il contenuto/messaggio che desideri inviare agli utenti.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

Dopo aver creato il tuo messaggio, puoi premere il pulsante **Send**.

Ecco quanto è facile inviare un'email ai tuoi utenti finali utilizzando la funzione di trasmissione.

## Email di sistema

Le email di sistema in Ultimate Multisite sono quelle **notifiche automatiche** inviate dal sistema dopo determinate azioni come registrazione, pagamento, mappatura del dominio, ecc. Queste email possono essere modificate dalle impostazioni di Ultimate Multisite. Include anche una funzione che ti consente di reimpostare e importare le impostazioni esistenti da un'altra installazione di Ultimate Multisite.

### Reimpostare & Importare

Le nuove versioni di Ultimate Multisite, così come gli add-on, possono e registreranno nuove email di tanto in tanto.

Per prevenire conflitti e altri problemi, **non aggiungeremo automaticamente i nuovi modelli di email come Email di Sistema nella tua installazione**, a meno che non siano cruciali per il corretto funzionamento di una determinata funzionalità.

Tuttavia, gli super amministratori e gli agenti possono importare queste nuove email registrate tramite lo strumento di importazione. Tale processo creerà una nuova email di sistema con il contenuto e la configurazione del nuovo modello di email, consentendo al super amministratore di apportare le modifiche desiderate o di mantenerle così come sono.

#### Come importare le email di sistema

Vai alla pagina Impostazioni di Ultimate Multisite e accedi alla scheda **Emails**.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

Quindi, nella barra laterale, fai clic sul pulsante **Customize System Emails**.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

Nella pagina Email di Sistema, vedrai il pulsante di azione **Reset & Import** in alto. Fare clic su quel pulsante dovrebbe aprire la finestra modale di importazione e reimpostazione.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

Quindi, puoi attivare le opzioni Importa Email per vedere quali email di sistema sono disponibili per l'importazione.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### Reimpostare le Email di Sistema

Altre volte, potresti renderti conto che le modifiche apportate a un determinato modello di email non funzionano più e desideri reimpostarlo al suo **stato predefinito**.

In tali casi, hai due opzioni: puoi semplicemente eliminare l'email di sistema e importarla di nuovo (utilizzando le istruzioni sopra) - il che cancellerà le metriche di invio e altre cose, rendendo questo metodo meno preferito.

Oppure puoi usare lo **Strumento Reimposta & Importa** per reimpostare quel modello di email.

Per reimpostare un modello di email, puoi seguire i passaggi sopra fino a raggiungere lo Strumento Reimposta & Importa, quindi attivare l'opzione **Reset** e selezionare le email che desideri reimpostare al loro contenuto predefinito.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
