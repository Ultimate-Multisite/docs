---
title: Інтыграцыя Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Інтыгрэйцыя Ultimate Multisite з Zapier

У адным з артыкулаў мы разглядалі [Webhooks](webhooks.md) і тое, як іх можна выкарыстоўваць для інтыгрэйцыі з стороннімі праграмами.

Выкарыстанне webhooks трохі складана, бо гэта патрабуе пашыраных ведаў у кадэванні і разумення, як прымацаваць (catch) payloads. Выкарыстанне **Zapier** — гэта спосаб, які дазваляе вам пазбегнуць гэтай складанасці.

Zapier мае інтыгрэйцыю з больш за 5000+ праграмамі, што палічвае ўваску ў спілкуванні паміж рознымі праграмамі.

Вы можаце ствараць **Triggers**, якія актывуюцца, калі адбываюцца падбыты на вашай сетцы (напрыклад, ствараецца кант, што актывуе падбыт `account_create`), або ствараць **Actions** на вашай сетцы, якія рэагуюць на знешнія падбыты (напрыклад, стварэнне новай рэгістрацыі карыстальніка ў вашай сетцы Ultimate Multisite).

Гэта магчыма, бо **Ultimate Multisite Zapier's triggers** і actions працуюць на аснове [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Як пачаць

Перш за ўсё, знайдзіце Ultimate Multisite ў спісе праграм Zapier. Альтэрнатыўна, вы можаце націснуць на [гэ ўяўленне](https://zapier.com/apps/wp-ultimo/integrations).

Зайдзіце на свой дашборд і націсніце кнопку **+ Create Zap** у боковым меню, каб наладзіць новы Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Вас перанаправяць на старонку стварэння Zap.

У полі пошуку ўвярбіце "wp ultimo". Націсніце, каб выбраць варыянт **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Пасля выбару нашай праграмы, выберыце даступны падбыт: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Цяпер нам трэба даць Zapier доступ **до вашай сеткі**. Націску ў **Sign in** адкрэе новае акно, якое патрабуе **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Зайдзіце на адмінскую панэль вашай сеткі і перайдзіце ў **Ultimate Multisite > Settings** > **API & Webhooks**, а ўкрэсліце ў секцыі API Settings.

Выберыце варыянт **Enable API**, бо гэта патрабавальна для працы гэтага злучэння.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Выкарыстоўвайце значок **Copy to Clipboard** у полі API Key і API Secret і ўстаўце гэтыя значэнні на экране інтыгрэйцыі.

У полі URL ўкажыце поўны URL вашай сеткі, уключаючы пратакол (HTTP або HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Націсніце кнопку **Yes, Continue**, каб прайсці да наступнага кроку. Калі ўсё прайшло па плану, вы павінны відаць свой новы звязаны кант! Націсніце **Continue**, каб стварыць новы trigger.

## Як стварыць новы Trigger

Цяпер, калі ваш кант звязаны, вы можаце ўбачыць даступныя падбыты. Для гэтага туториала выберім падбыт **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Пасля выбару падбыту і націску на **continue**, з'явіцца **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

На гэтым этапе Zapier праверыць, ці можа ваш Zap **адказаць (fetch) канкрэтны payload для гэтага падбыту**. У будучыні, падчас падбытаў той жа тып, будзе адпраўляцца інфармацыя з такой жа структуры.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

У нашым туториале тэст быў **completed successfully** і паказаў прыклад інфармацыі payload. Гэты прыклад будзе карысным для нас падчас стварэння actions. Ваш trigger цяпер створаны і гатовы для злучэння з іншымі праграмамі.

## Як стварыць Actions

Actions выкарыстоўваюць інфармацыю з іншых triggers для стварэння новых запісаў у вашай сетцы.

Падчас **стварэння кроку action** вы ўкажыце Ultimate Multisite **Beta** і варыянт **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

На наступным кроку вы або стварэце сваю аўтэнтыфікацыю, як мы і на\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
