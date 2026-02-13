---
title: 通过 Zapier 注册账户
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# 事件：通过 Zapier 注册账户

在文章 [Integrating Ultimate Multisite with Zapier](zapier.md) 中，我们讨论了如何使用 Zapier 根据触发器和事件在 Ultimate Multisite 内执行不同的操作。在本文中，我们将展示如何集成第三方应用程序。我们将使用 Google Sheets 作为数据来源，并将信息发送到 Ultimate Multisite 以注册账户。

首先，您需要在 Google Drive 下创建一个 **Google Sheet**。请确保正确定义每一列，以便以后轻松映射数据。

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

然后在 **“Event”** 字段中选择 **“New spreadsheet row”** 并点击 **“Continue”**

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

在 **“Set up trigger”** 下，您需要选择并指定将用于获取数据的 Google Spreadsheet 和工作表。请填写相关信息并点击 **“Continue”**

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

在 **“Event”** 字段中，选择 **“Register an Account in Ultimate Multisite”**，然后点击 **“Continue”** 按钮。

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
