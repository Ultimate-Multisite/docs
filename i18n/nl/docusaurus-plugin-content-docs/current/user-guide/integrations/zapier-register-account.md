---
title: Registreer een account via Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Evenement: Een account registreren via Zapier

In het artikel [Integrating Ultimate Multisite with Zapier](zapier.md) bespraken we hoe je Zapier kunt gebruiken om verschillende acties binnen Ultimate Multisite uit te voeren op basis van triggers en gebeurtenissen. In dit artikel laten we zien hoe je applicaties van derden kunt integreren. We gebruiken Google Sheets als gegevensbron en sturen de informatie naar Ultimate Multisite om een account te registreren.

Allereerst moet je een **Google Sheet** aanmaken in je Google Drive. Zorg ervoor dat je elke kolom correct definieert, zodat je de gegevens later gemakkelijk kunt toewijzen.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Selecteer vervolgens voor het veld **"Event"** de optie **"New spreadsheet row"** en klik op **"Continue"**

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Onder **"Set up trigger"** moet je het Google-werkblad en het werkblad selecteren waarvan de gegevens afkomstig zijn. Vul deze in en klik op **"Continue"**

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Selecteer onder het veld **"Event"** de optie **"Register an Account in Ultimate Multisite"** en klik op de knop **"Continue"**

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Na het toewijzen van de waarden kun je de actie testen.
