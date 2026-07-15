---
title: Invio di email e comunicazioni di massa
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Invio di email e comunicazioni (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Ultimate Multisite include una funzionalità che ti permette di comunicare con i tuoi clienti inviando un’email a un utente specifico o a un gruppo di utenti, oltre a inviare avvisi sulla loro Dashboard di amministrazione per diffondere annunci

## Aggiungi avvisi di amministrazione alla Dashboard dei tuoi clienti con le comunicazioni {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Usando la funzionalità di comunicazione di Ultimate Multisite, puoi aggiungere **avvisi di amministrazione** alla Dashboard di amministrazione del sottosito del tuo utente.

Questo è estremamente utile se devi fare un annuncio, come una manutenzione di sistema, oppure offrire nuovi prodotti o servizi ai tuoi utenti esistenti. Ecco come apparirà l’avviso di amministrazione sulla Dashboard del tuo utente.

<!-- Screenshot non disponibile: avviso di amministrazione mostrato sulla Dashboard del sottosito di un cliente -->

Per avviare un avviso di amministrazione, vai alla Dashboard di amministrazione della rete e, nel menu **Ultimate Multisite**, troverai l’opzione **Comunicazioni**.

![Pagina elenco Comunicazioni nell’amministrazione di Ultimate Multisite](/img/admin/broadcasts-list.png)

Puoi anche modificare le comunicazioni esistenti:

![Interfaccia di modifica della comunicazione](/img/admin/broadcast-edit.png)

Da questa pagina, fai clic sul pulsante **Aggiungi comunicazione** in alto.

Questo aprirà la finestra modale Aggiungi comunicazione, dove puoi scegliere quale tipo di comunicazione desideri inviare.

Procedi e seleziona **Messaggio**, quindi fai clic sul pulsante **Passaggio successivo**.

![Modale Aggiungi comunicazione con l’opzione Messaggio selezionata](/img/admin/broadcast-add-message.png)

La finestra successiva ti chiederà il **Cliente di destinazione** oppure il **Prodotto di destinazione**. Nota che puoi selezionare più di un utente o più di un prodotto.

Per cercare un account utente o un prodotto devi iniziare a digitare la parola chiave all’interno del campo.

Nel campo **Tipo di messaggio**, puoi selezionare il colore dell’avviso. Questo metterà in evidenza l’urgenza del tuo messaggio.

Puoi quindi fare clic su **Passaggio successivo**.

![Campi cliente di destinazione, prodotto di destinazione e tipo di messaggio per una comunicazione Messaggio](/img/admin/broadcast-message-targets.png)

La finestra successiva è dove puoi iniziare a comporre il tuo messaggio inserendo l’oggetto e il contenuto/messaggio che desideri diffondere agli utenti.

![Editor dell’oggetto e del contenuto del messaggio della comunicazione nel passaggio di composizione](/img/admin/broadcast-edit.png)

Dopo aver creato il tuo messaggio, puoi quindi premere il pulsante **Invia**.

Ed è tutto. L’avviso di amministrazione dovrebbe comparire immediatamente sulla Dashboard del tuo utente.

## Invia email ai tuoi clienti {#send-emails-to-your-customers}

Usando la funzionalità di comunicazione di Ultimate Multisite, puoi inviare un’email ai tuoi utenti. Hai la possibilità di inviare l’email solo a utenti specifici oppure di indirizzarla a un gruppo di utenti specifico in base al prodotto o al piano a cui sono iscritti.

Per avviare una comunicazione email, vai alla Dashboard di amministrazione della rete e, nel menu Ultimate Multisite, troverai l’opzione Comunicazione.

![Pagina elenco Comunicazioni usata come punto di partenza per una comunicazione email](/img/admin/broadcasts-list.png)

Da questa pagina, fai clic sul pulsante **Aggiungi comunicazione** in alto.

Questo aprirà la finestra modale Aggiungi comunicazione, dove puoi scegliere quale tipo di comunicazione desideri inviare. Procedi e seleziona **Email**, quindi fai clic sul pulsante **Passaggio successivo**.

![Modale Aggiungi comunicazione con l’opzione Email selezionata](/img/admin/broadcast-add-email.png)

La finestra successiva ti chiederà il **Cliente di destinazione** oppure il **Prodott** o di destinazione. Nota che puoi selezionare più di un utente o più di un prodotto.

Per cercare un account utente o un prodotto devi iniziare a digitare la parola chiave all’interno del campo.

Una volta selezionato il tuo pubblico di destinazione, puoi fare clic su **Passaggio successivo**.

![Selezione di clienti di destinazione e prodotto di destinazione per una comunicazione Email](/img/admin/broadcast-email-targets.png)

La finestra successiva è dove puoi iniziare a comporre la tua email inserendo l’oggetto e il contenuto/messaggio che desideri inviare agli utenti.

<!-- Screenshot non disponibile: editor dell’oggetto e del contenuto della comunicazione email nel passaggio di composizione -->

Dopo aver creato il tuo messaggio, puoi premere il pulsante **Invia**.

Ed ecco quanto è facile inviare un’email ai tuoi utenti finali usando la funzionalità di comunicazione.

## Email di sistema {#system-emails}

Le email di sistema in Ultimate Multisite sono quelle **notifiche automatiche** inviate dal sistema dopo determinate azioni, come registrazione, pagamento, mappatura del dominio, ecc. Queste email possono essere modificate dalle impostazioni di Ultimate Multisite. Include anche una funzionalità che ti permette di reimpostare e importare impostazioni esistenti da un’altra installazione di Ultimate Multisite.

### Reimpostazione e importazione {#resetting--importing}

Le nuove versioni di Ultimate Multisite, così come gli add-on, possono registrare e registreranno di tanto in tanto nuove email.

Per evitare conflitti e altri problemi, **non aggiungeremo automaticamente i nuovi template email come Email di sistema nella tua installazione** , a meno che non siano cruciali per il corretto funzionamento di una determinata funzionalità.

Tuttavia, i super admin e gli agenti possono importare queste email appena registrate tramite lo strumento di importazione. Questo processo creerà una nuova email di sistema con il contenuto e la configurazione del nuovo template email, permettendo al super admin di apportare qualsiasi modifica desideri o di mantenerli così come sono.

#### Come importare le email di sistema {#how-to-import-system-emails}

Vai alla pagina Impostazioni di Ultimate Multisite e apri la scheda **Email**.

![Scheda Email nelle impostazioni di Ultimate Multisite che mostra la sezione Email di sistema](/img/config/settings-emails-tab.png)

Quindi, nella barra laterale, fai clic sul pulsante **Personalizza Email di sistema**.

<!-- Screenshot non disponibile: pulsante Personalizza Email di sistema nel pannello laterale Email di sistema -->

Nella pagina Email di sistema, vedrai il pulsante di azione **Reimposta e importa** in alto. Facendo clic su quel pulsante si dovrebbe aprire la finestra modale di importazione e reimpostazione.

![Pulsante di azione Reimposta o Importa nella pagina di amministrazione Email di sistema](/img/admin/system-emails-reset-import.png)

Quindi, puoi attivare le opzioni Importa email per vedere quali email di sistema sono disponibili per l’importazione.

<!-- Screenshot non disponibile: modale Reimposta e Importa con le opzioni Importa email espanse -->

#### Reimpostazione delle email di sistema {#reseting-system-emails}

Altre volte, ti renderai conto che le modifiche apportate a un determinato template email non funzionano più per te e vorresti reimpostarlo al suo **stato predefinito**.

In questi casi, hai due opzioni: puoi semplicemente eliminare l'email di sistema e importarla di nuovo (usando le istruzioni sopra) - il che cancellerà le metriche di invio e altre cose, rendendo questo metodo il meno consigliato.

Oppure puoi usare lo **strumento Reimposta e Importa** per reimpostare quel template email.

Per reimpostare un template email, puoi seguire i passaggi sopra finché non raggiungi lo strumento Reimposta e Importa, quindi attivare l'opzione **Reimposta** e selezionare le email che vuoi riportare al loro contenuto predefinito.

<!-- Screenshot non disponibile: modale Reimposta e Importa con le opzioni Reimposta email espanse -->
