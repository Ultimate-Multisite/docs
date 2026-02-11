---
title: Registra un account tramite Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Evento: Registrare un account tramite Zapier

Nel articolo [Integrating Ultimate Multisite with Zapier](zapier.md), abbiamo discusso come utilizzare Zapier per eseguire diverse azioni all'interno di Ultimate Multisite basate su trigger ed eventi. In questo articolo mostreremo come integrare applicazioni di terze parti. Utilizzeremo Google Sheets come fonte di dati e invieremo le informazioni a Ultimate Multisite per registrare un account.

Per prima cosa, devi creare un **Google Sheet** sul tuo Google Drive. Assicurati di definire correttamente ogni colonna in modo da poter mappare facilmente i dati in seguito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)Dopo aver creato un Google Sheet, puoi accedere al tuo account Zapier e iniziare a creare un zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)Nel campo di ricerca per **"App event"** seleziona **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

Quindi, per il campo **"Event"** seleziona **"New spreadsheet row"** e premi **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)Il passo successivo ti chiederà di selezionare un **Google Account** in cui è salvato il **Google Sheet**. Assicurati quindi che sia specificato l'account Google corretto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)

Sotto **"Set up trigger"**, dovrai selezionare e specificare il foglio di calcolo Google e il foglio di lavoro che utilizzerai come origine dei dati. Compila semplicemente i campi e premi **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)Successivamente, esegui il "**test your trigger**" per verificare che il tuo Google Sheet sia correttamente connesso.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)Se il test ha esito positivo, dovresti vedere il risultato con alcuni valori dai tuoi fogli di calcolo. Clicca **"Continue"** per procedere.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)Il passo successivo è configurare la seconda azione che creerà o registrerà un account in Ultimate Multisite. Nel campo di ricerca seleziona **"Ultimate Multisite(2.0.2)"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

Nel campo **"Event"**, seleziona **"Register an Account in Ultimate Multisite"** e poi clicca il pulsante **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)Sotto **"Set up an action"**, vedrai diversi campi disponibili per i dati del cliente, le iscrizioni, i prodotti, ecc. Puoi mappare i valori presenti nel tuo Google Sheet e assegnarli al campo appropriato dove dovrebbero essere popolati, come mostrato nella schermata di seguito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)

Dopo aver mappato i valori, puoi testare l'azione.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
