---
title: Zapier를 통해 계정 등록
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# 이벤트: Zapier를 통해 계정 등록

이 기사 [Integrating Ultimate Multisite with Zapier](zapier.md)에서는 Zapier를 사용하여 트리거와 이벤트에 따라 Ultimate Multisite 내에서 다양한 작업을 수행하는 방법에 대해 논의했습니다. 이 기사에서는 타사 애플리케이션을 통합하는 방법을 보여 드립니다. Google Sheets를 데이터 소스로 사용하고 정보를 Ultimate Multisite에 전송하여 계정을 등록할 것입니다.

먼저 Google Drive에 **Google Sheet**를 만들어야 합니다. 나중에 데이터를 쉽게 매핑할 수 있도록 각 열을 올바르게 정의했는지 확인하세요.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

그런 다음 \"**Event**\" 필드에서 \"**New spreadsheet row**\"를 선택하고 \"**Continue**\"를 누르세요.

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

**"Set up trigger"** 아래에서 데이터를 가져올 Google 스프레드시트와 워크시트를 선택하고 지정해야 합니다. 해당 항목을 입력하고 \"**Continue**\"를 누르세요.

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

\"**Event**\" 필드에서 \"**Register an Account in Ultimate Multisite**\"를 선택한 다음 \"**Continue**\" 버튼을 클릭하세요.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
