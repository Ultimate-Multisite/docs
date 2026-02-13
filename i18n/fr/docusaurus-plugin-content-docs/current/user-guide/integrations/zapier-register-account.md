---
title: Enregistrer un compte via Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Événement : Enregistrer un compte via Zapier

Dans l'article [Integrating Ultimate Multisite with Zapier](zapier.md), nous avons abordé comment utiliser Zapier pour effectuer différentes actions au sein d'Ultimate Multisite en fonction de déclencheurs et d'événements. Dans cet article, nous allons montrer comment vous pouvez intégrer des applications tierces. Nous utiliserons Google Sheets comme source de données et enverrons les informations vers Ultimate Multisite pour enregistrer un compte.

Tout d'abord, vous devez créer une **Google Sheet** dans votre Google Drive. Assurez-vous de définir correctement chaque colonne afin de pouvoir mapper les données plus tard.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Ensuite, pour le champ **"Event"** sélectionnez **"New spreadsheet row"** et cliquez sur **"Continue"**

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
