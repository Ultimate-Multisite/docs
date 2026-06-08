---
title: Webhooks
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Първо Поглед върху Webhooks (v2)

_**ВНИМАНИЕ: Прочетете, че тази функция или статия е за напреднали потребители.**_

**Webhook** е начин, по който приложение или софтуер като Ultimate Multisite може да предоставя информация в реално време на други приложения. Webhook изпраща данни или payload към други приложения по мере, с които се случва нещо, което означава, че **получавате данните незабавно.**

Това е полезно, ако трябва да интегрирате или да прехвърлите определени данни от Ultimate Multisite към друг CRM или система всеки път, когато се активира събитие. Например, може да се наложи да изпратите името и имейла на потребителя към списък с абонати всеки път, когато се създава нов потребителски профил.

## Как да създадете webhook

За да създадете webhook, отидете в административния dashboard на мрежата си. Кликнете върху **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

След това можете да редактирате конфигурацията на webhook:

![Webhook edit interface](/img/admin/webhook-edit.png)

При създаването на нов webhook ще бъдете попитани за информация като **Name, URL** и **Event**. Можете да използвате каквото име желаете за своя webhook. Най-важните полета са URL и Event.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL е **endpoint-ът или дестинацията**, към която Ultimate Multisite ще изпрати **payload-а или данните**. Това е приложението, което ще получи данните.

Zapier е най-често срещаното решение, което потребителите използват, за да улеснят интеграцията с външни (3rd party) приложения. Без платформа като Zapier, ще трябва ръчно да създадете персонализирана функция, която да улови данните и да ги обработи. Вижте тази статия за **как да използвате Ultimate Multisite webhook с Zapier.**

В тази статия ще разгледаме основните концепции за това как работи webhook и събитията, налични в Ultimate Multisite. Ще използваме външен сайт, наречен [requestbin.com](https://requestbin.com/). Този сайт ни позволява да създадем endpoint и да уловиме payload, без да пишем никакъв код. _**Откатка: той просто ще ни покаже, че данните са пристигнали.**_ Няма да има никаква обработка или никакъв вид действие върху payload-а.

Отидете на [requestbin.com](https://requestbin.com/) и кликнете върху Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

След кликването върху тази бутон, той ще ви попита да влезете, ако вече имате профил, или да се регистрирате. Ако вече имате профил, ще бъдете пренасочени директно към неговия dashboard. В неговия dashboard веднага ще видите endpoint-а или URL, който можете да използвате при създаването на Ultimate Multisite webhook.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

Копирайте URL-а и се върнете в Ultimate Multisite. Поставете endpoint-а в полето URL и изберете събитие от падащото меню. В този пример, ще изберем **Payment Received**.

Това събитие се активира всеки път, когато потребител направи плащане. Всички налични събития, техните описания и payload-и са изброени в долната част на страницата. Кликнете върху бутона **Add New Webhook**, за да запазите webhook-а.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Сега можем да изпратим тестово събитие към endpoint-а, за да видим дали създаденият ни webhook работи. Това можем да направим, като кликнем върху **Send Test Event** под създадения webhook.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Това показва потвъртелно изскажение, че тестът е успешен.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Сега, ако се върнем на сайта _Requestbin_, ще видим, че payload-ът е пристигнал и съдържа някои тестови данни.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Това е основният принцип на това как работят webhook-ове и endpoint-и. Ако трябва да създадете собствен endpoint, ще трябва да създадете персонализирана функция, за да обработите данните, които получавате от Ultimate Multisite.
