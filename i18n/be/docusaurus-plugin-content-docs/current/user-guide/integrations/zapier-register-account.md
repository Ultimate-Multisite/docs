---
title: Зарэгістраваць кант у Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Падыёме: Рэгістрацыя акаўнта праз Zapier

У артыкуле [Integrating Ultimate Multisite with Zapier](zapier.md) мы разглядалі, як выкарыстоўваць Zapier для выканання розных дзеянняў унутры Ultimate Multisite на аснове выклікальных падыёмам (triggers) і падыёмам (events). У гэтым артыкуле мы пакажам, як вы можаце інтэграваць стороннія праграмы. Мы выкарыстоўага Google Sheets ў якасці крыніцы дадзеных і адпраўляем гэтую інфармацыю ў Ultimate Multisite для рэгістрацыі акаўнта.

Перш за ўсё вам трэба стварыць **Google Sheet** у сваім Google Drive. Убедзіцеся, што вы належным чынам вызначылі кожны калонка, каб пазней можна было лёгка адпавідзена значэнні.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png) Пасля стварэння Google Sheet вы можаце ўвайсці ў свой акаўнт Zapier і пачаць ствараць zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png) У полі пошуку для **"App event"** выберыце **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Далей у полі "**Event** " выберыце "**New spreadsheet row** " і націсніце "**Continue** "

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png) На наступным кроку ад вас пахаваецца выбраць **Google Account**, дзе захоўваецца **Google Sheet**. Таму проста пераканайцеся, што ўказаны правільны Google акаўнт.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

У блоку **"Set up trigger** ", вам трэба выбраць і ўказаць Google Sheet і аркуш, які вы будзеце выкарыстоўваць, адкуль будзе прыходзіць дадзеныя. Проста зафарвіце гэтыя паля і націсніце "**Continue** "

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png) Далей трэба "**test your trigger** ", каб пераканацца, што ваш Google Sheet належным чынам падключаны.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png) Калі тэст будзе паспяховым, вы павінны ўбачыць вынік, які паказвае некаторыя значэнні з вашага Google Sheet. Націсніце "**Continue** " для працягу.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png) На наступным кроку трэба наладзіць другога блок дзеяння, які створыць або зарэгіструе акаўнт у Ultimate Multisite. У полі пошуку выберыце "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

У полі "**Event** " выберыце "**Register an Account in Ultimate Multisite** " і націсніце кнопку "**Continue** "

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png) У блоку "**Set up an action** ", вы ўбачыце розныя паля, доступныя для дадзеных карыстальніка, канчатковага карыстальніцтва, прадуктаў і г.д. Вы можаце адпавідзена значэнні з вашага Google Sheet і прызначыць іх у адпаведныя паля, куды яны павінны зафарвіцца, як паказана на скріншоце ніжэй.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Пасля маппінгу значэнняў вы можаце пратэставаць дзеянне.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
