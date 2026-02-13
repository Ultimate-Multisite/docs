---
title: "Register an Account via Zapier"
sidebar_position: 1
---

# Event: Register an account via Zapier

In the article [Integrating Ultimate Multisite with Zapier](zapier.md), we discussed how to use Zapier to perform different actions within Ultimate Multisite based on triggers and events. In this article, we will show how you can integrate 3rd party applications. We will use Google Sheets as the source of data and send the information to Ultimate Multisite to register an account.

First, you need to create a **Google Sheet** under your Google Drive. Make sure you properly define each column so that you can easily map the data later.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Then for the "**Event** " field select "**New spreadsheet row** " and hit "**Continue** "

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Under **"Set up trigger** ", you will need to select and specify the google spreadsheet and worksheet you will use where the data will be coming from. Just go ahead and fill those out and hit "**Continue** "

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Under the "**Event** " field, select "**Register an Account in Ultimate Multisite** " then click the "**Continue** " button.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

After mapping the values, you can test the action.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
