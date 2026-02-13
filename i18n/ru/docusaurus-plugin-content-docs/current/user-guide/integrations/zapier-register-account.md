---
title: Регистрация аккаунта через Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Событие: Регистрация аккаунта через Zapier

В статье [Интеграция Ultimate Multisite с Zapier](zapier.md) мы обсудили, как использовать Zapier для выполнения различных действий в Ultimate Multisite на основе триггеров и событий. В этой статье мы покажем, как можно интегрировать сторонние приложения. Мы будем использовать Google Sheets в качестве источника данных и отправлять информацию в Ultimate Multisite для регистрации аккаунта.

Сначала вам нужно создать **Google Sheet** в вашем Google Drive. Убедитесь, что вы правильно определили каждый столбец, чтобы позже было легко сопоставлять данные.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Затем в поле **"Event"** выберите **"New spreadsheet row"** и нажмите **"Continue"**

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

В поле **"Event"** выберите **"Register an Account in Ultimate Multisite"** и нажмите кнопку **"Continue"**

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
