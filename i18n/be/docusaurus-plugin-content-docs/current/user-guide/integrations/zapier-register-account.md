---
title: Зарэгістраваць Account праз Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Падзея: зарэгістраваць Account праз Zapier {#event-register-an-account-via-zapier}

У артыкуле [Інтэграцыя Ultimate Multisite з Zapier](zapier.md) мы абмеркавалі, як выкарыстоўваць Zapier для выканання розных дзеянняў у Ultimate Multisite на аснове трыгераў і падзей. У гэтым артыкуле мы пакажам, як можна інтэграваць староннія прыкладанні. Мы будзем выкарыстоўваць Google Sheets як крыніцу даных і адпраўляць інфармацыю ў Ultimate Multisite, каб зарэгістраваць Account.

Перад падключэннем Zapier перайдзіце ў **Ultimate Multisite > Settings > API & Webhooks** і пацвердзіце, што API уключаны. Скапіруйце API Key і API Secret з гэтага экрана, калі Zapier запытае ўліковыя даныя Account Ultimate Multisite.

![Налады API і Webhooks з API Key, API Secret і параметрамі Enable API](/img/admin/settings-api-webhooks.png)

Спачатку вам трэба стварыць **Google Sheet** у вашым Google Drive. Пераканайцеся, што вы належным чынам вызначылі кожны слупок, каб пазней можна было лёгка супаставіць даныя.

Пасля стварэння Google sheet вы можаце ўвайсці ў свой Account Zapier і пачаць ствараць zap.

У полі пошуку для **"App event"** выберыце **"Google Sheets"**


Затым для поля "**Event** " выберыце "**New spreadsheet row** " і націсніце "**Continue** "

На наступным кроку вам будзе прапанавана выбраць **Google Account**, дзе захаваны **Google Sheet**. Таму проста пераканайцеся, што ўказаны правільны google account.


У раздзеле **"Set up trigger** " вам трэба будзе выбраць і ўказаць google spreadsheet і worksheet, якія вы будзеце выкарыстоўваць і адкуль будуць паступаць даныя. Проста запоўніце гэтыя палі і націсніце "**Continue** "

Далей трэба "**test your trigger** ", каб пераканацца, што ваш google sheet правільна падключаны.

Калі тэст паспяховы, вы павінны ўбачыць вынік з некаторымі значэннямі з вашых spreadsheets. Націсніце "**Continue** ", каб працягнуць.

Наступны крок — наладзіць другое дзеянне, якое створыць або зарэгіструе Account у Ultimate Multisite. У полі пошуку выберыце "**Ultimate Multisite(2.0.2)** "


У полі "**Event** " выберыце "**Register an Account in Ultimate Multisite** ", затым націсніце кнопку "**Continue** ".

У раздзеле "**Set up an action** " вы ўбачыце розныя палі, даступныя для даных кліентаў, membership-аў, прадуктаў і г.д. Вы можаце супаставіць значэнні з вашага google sheet і прызначыць іх адпаведнаму полю, дзе яны павінны быць запоўнены, як паказана на здымку экрана ніжэй.


Пасля супастаўлення значэнняў вы можаце праверыць дзеянне.
