---
title: Регистриране на профил чрез Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Събитие: Регистриране на акаунт чрез Zapier

В статията [Integrating Ultimate Multisite with Zapier](zapier.md) обсъдихме как да използвате Zapier, за да изпълните различни действия в Ultimate Multisite въз основа на тригери и събития. В тази статия ще покажем как можете да интегрирате приложения от трети страни. Ще използваме Google Sheets като източник на данни и ще изпратим информацията към Ultimate Multisite за регистриране на акаунт.

Първо, трябва да създадете **Google Sheet** в Google Drive. Уверете се, че дефинирате правилно всяка колона, за да можете лесно да мапирате данните по-късно.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)След като създадете Google Sheet, можете да влезете във вашия Zapier акаунт и да започнете да създавате zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Под полето за търсене на **"App event"** изберете **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

След това за полето "**Event** " изберете "**New spreadsheet row** " и натиснете "**Continue** "

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)Следващата стъпка ще ви помоли да изберете **Google Account**, където е запазен **Google Sheet**. Така че просто уверете се, че е посочен правилният Google account.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Под **"Set up trigger** ", трябва да изберете и да посочите Google Sheet и работен лист (worksheet), които ще използвате, от които ще идват данните. Просто попълнете тези полета и натиснете "**Continue** "

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Следващото е да натиснете "**test your trigger** ", за да се уверите, че Google Sheet ви е правилно свързан.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)Ако тестът ви е успешен, трябва да видите резултат, показващ някои стойности от вашите таблици. Натиснете "**Continue** " за продължаване.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)Следващата стъпка е да настроите второто действие, което ще създаде или регистрира акаунт в Ultimate Multisite. В полето за търсене изберете "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Под полето "**Event** " изберете "**Register an Account in Ultimate Multisite** " и след това кликнете върху бутона "**Continue** ".

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Под "**Set up an action** ", ще видите различни полета, налични за данни на клиенти, членства, продукти и др. Можете да мапирате стойностите от Google Sheet си и да ги присвоите на подходящото поле, където трябва да бъдат попълнени, както е показано в екранален снимок по-долу.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

След като мапирате стойностите, можете да тествате действието.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
