---
title: Registra un account tramite Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Evento: Registrare un account tramite Zapier

Nel articolo [Integrating Ultimate Multisite with Zapier](zapier.md), abbiamo discusso come utilizzare Zapier per eseguire diverse azioni all'interno di Ultimate Multisite basate su trigger ed eventi. In questo articolo mostreremo come integrare applicazioni di terze parti. Utilizzeremo Google Sheets come fonte di dati e invieremo le informazioni a Ultimate Multisite per registrare un account.

Per prima cosa, devi creare un **Google Sheet** sul tuo Google Drive. Assicurati di definire correttamente ogni colonna in modo da poter mappare facilmente i dati in seguito.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Quindi, per il campo **"Event"** seleziona **"New spreadsheet row"** e premi **"Continue"**

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Sotto **"Set up trigger"**, dovrai selezionare e specificare il foglio di calcolo Google e il foglio di lavoro che utilizzerai come origine dei dati. Compila semplicemente i campi e premi **"Continue"**

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Nel campo **"Event"**, seleziona **"Register an Account in Ultimate Multisite"** e poi clicca il pulsante **"Continue"**

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Dopo aver mappato i valori, puoi testare l'azione.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
