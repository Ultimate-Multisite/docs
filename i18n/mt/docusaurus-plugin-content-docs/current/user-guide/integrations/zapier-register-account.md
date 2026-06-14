---
title: Iscrivi un Konto tramite Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Iscrivi un account tramite Zapier

Nell'articolo [Integrating Ultimate Multisite with Zapier](zapier.md), abbiamo discusso come usare Zapier per fare diverse azioni all'interno di Ultimate Multisite in base a trigger ed eventi. In questo articolo, ti mostreremo come puoi integrare applicazioni di terze parti. Useremo Google Sheets come fonte dei dati e invieremo le informazioni a Ultimate Multisite per registrare un account.

Prima di collegare Zapier, vai su **Ultimate Multisite > Settings > API & Webhooks** e conferma che l'API sia abilitata. Copia la API Key e l'API Secret da questa schermata quando Zapier ti chiederà le credenziali dell'account Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Per prima cosa, devi creare un **Google Sheet** nel tuo Google Drive. Assicurati di definire correttamente ogni colonna in modo da poter mappare i dati facilmente in seguito.

Dopo aver creato il Google sheet, puoi accedere al tuo account Zapier e iniziare a creare un zap.

Sotto il campo di ricerca per **"App event"**, seleziona **"Google Sheets"**.

Poi, per il campo "**Event**", seleziona "**New spreadsheet row**" (Nuova riga del foglio di calcolo) e clicca su "**Continue**" (Continua).

Il passo successivo ti chiederà di selezionare un **Google Account** dove è salvato il **Google Sheet**. Quindi assicurati solo che sia specificato il giusto account Google.

Sotto "**Set up trigger**", dovrai selezionare e specificare il google spreadsheet e la worksheet che userai come fonte dei dati. Vai avanti e compilali e clicca su "**Continue**".

Successivamente, devi "**test the your trigger**" (testare il tuo trigger) per assicurarti che il tuo Google Sheet sia collegato correttamente.

Se il tuo test ha successo, dovresti vedere il risultato che mostra alcuni valori dai tuoi fogli di calcolo. Clicca su "**Continue**" per procedere.

Il prossimu passaggju huwa li tsetti l-azione li tgħmli jew tiskrib kont att (account) f Ultimate Multisite. F'il-field tal-ricerca (search field), selez "**Ultimate Multisite(2.0.2)** ".

Sot il-field "**Event** ", selez "**Register an Account in Ultimate Multisite** " u poi issaċċċja bix "Continue" button.

Sot "**Set up an action** ", tista' tara diversi field disponibili għall-dati tal-klijenti, membership, prodotti, ecc. Tista' tmappa (map) il-valuri sotto il Google Sheet tiegħek u tappjiexhom fil-field appropriat li għandhom jkun popolati bħala wieħed li juri s-screenshot sott'ha.

Wara ma mappat il-valuri, tista' ti testja l-azione.
