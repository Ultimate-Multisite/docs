---
title: Konto über Zapier registrieren
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Ereignis: Ein Konto über Zapier registrieren

In dem Artikel [Integrating Ultimate Multisite with Zapier](zapier.md) haben wir besprochen, wie man Zapier nutzt, um verschiedene Aktionen innerhalb von Ultimate Multisite basierend auf Triggern und Ereignissen auszuführen. In diesem Artikel zeigen wir, wie Sie Drittanbieter-Anwendungen integrieren können. Wir verwenden Google Sheets als Datenquelle und senden die Informationen an Ultimate Multisite, um ein Konto zu registrieren.

Zuerst müssen Sie ein **Google Sheet** in Ihrem Google Drive erstellen. Stellen Sie sicher, dass Sie jede Spalte korrekt definieren, damit Sie die Daten später leicht zuordnen können.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Dann wählen Sie im Feld **"Event"** die Option **"New spreadsheet row"** und klicken Sie auf **"Continue"**

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Unter **"Set up trigger"** müssen Sie die Google-Tabelle und das Arbeitsblatt auswählen, aus dem die Daten stammen. Füllen Sie diese einfach aus und klicken Sie auf **"Continue"**

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Im Feld **"Event"** wählen Sie **"Register an Account in Ultimate Multisite"** und klicken dann auf die Schaltfläche **"Continue"**

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Nach dem Zuordnen der Werte können Sie die Aktion testen.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
