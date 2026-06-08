---
title: Вебхукі
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Першы ўгляд на Webhooks (v2)

_**УВАГА: Зверніце ўвагу, што гэтая функцыя або артыкул пазначаны для памераўных карыстальнікаў.**_

**Webhook** — гэта спосаб, які дазваляе паслузе або праграме, такой як Ultimate Multisite, перадаваць інфармацыю іншым праграмам у рэальным часе. Webhook перадае дадзеныя або **payloads** іншым праграмам у момант іх паказу, што азначае, што вы **атдымаеце дадзеныя неадкладна**.

Гэта будзе карысным, калі вам трэба інтэграваць або перадаць пэўныя дадзеныя з Ultimate Multisite ў іншую CRM або сістэму кожны раз, калі спрацьоўвае пэўная падпарадкаванне (event). Напрыклад, вам трэба адправіць імя і электронную адразу карыстальніка ў спіс рассылкі кожны раз, калі ствараецца новы карыстальніцкі кант.

## Як стварыць webhook

Каб стварыць webhook, зайдзіце на адмінскую панэль (dashboard) вашай сеткі. Націсніце на **Ultimate Multisite > Webhooks > Add New Webhook**.

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Далей вы можаце рэдагаваць канфігурацыю webhook:

![Webhook edit interface](/img/admin/webhook-edit.png)

Пры стварэнні новага webhook вас папросуць пра інфармацыю, такую як **Name, URL** і **Event**. Вы можаце выкарыстоўваць любое імя для вашага webhook. Найважнейшымі полямі з'яўляюцца URL і Event.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL — гэта **endpoint або пункт прызначэння**, на які Ultimate Multisite адпраўіць **payload або дадзеныя**. Гэта праграма, якая атрымае дадзеныя.

Zapier — гэта найбольш распаўсюджанае рашую, якое карыстальнікі выкарыстоўваюць, каб палічваць інтэграцыю з паслугамі трэцяга выступанта (3rd party application). Без платформы, падобнай да Zapier, вам трэба будзе ўручную ствараць кастомную функцыю, якая ўловіць і апрацуе дадзеныя. Паглядзіце гэты артыкул пра **як выкарыстоўваць Ultimate Multisite webhook з Zapier**.

У гэтым артыкуле мы паглубіцца ў асноўную канцэпцыю пра тое, як працуе webhook, і пра падпарадкаванні (events), доступныя ў Ultimate Multisite. Мы будзем выкарыстоўваць трэцяга выступанта сайт з назвай [requestbin.com](https://requestbin.com/). Гэты сайт дазволіць нам стварыць endpoint і ўловіць payload, не пішачы ніяга каду. _**Адмова ад адказнасці: ён проста пакажа нам, што дадзеныя былі атказаны.**_ Нікага апрацоўкі або ніякай акцыі з дадзенымі payload не будзе.

Зайдзіце на [requestbin.com](https://requestbin.com/) і націсніце Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Пасля націску на гэту кнопку, вам папросуць увайсці ў свой кант, калі ў вас ужо ёсць кант, або зарэгістравацца. Калі ў вас ужо ёсць кант, вас перанаправяць на адмінскую панэль. На гэтай панэлі вы неадкладна ўбачыце endpoint або URL, які вы можаце выкарыстоўваць для стварэння вашага Ultimate Multisite webhook.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

Скопіруйце URL і вярэць на Ultimate Multisite. Устаўце endpoint ў поле URL і выберыце падпарадкаванне з выпадальнага меню. У гэтым прыкладзе мы выбіраем **Payment Received**.

Гэта падпарадкаванне спрацьорўвае кожны раз, калі карыстальнік звялічае плацёж. Усе доступныя падпарадкаванні, іх апісанне і payloads пералічаны на дне старонкі. Націсніце кнопку **Add New Webhook**, каб захаваць webhook.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Цяпер мы можам адправіць тэставы падпадак на endpoint, каб паглядзець, ці працуе webhook, які мы стварылі. Мы можам гэта зрабіць, націснуўшы **Send Test Event** пад webhook, які мы стварылі.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Гэта паказвае акна пацвярджэння, што тэст быў паспяховым.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Цяпер, калі мы вернемся на сайт _Requestbin_, мы ўбачым, што payload быў атказаны і ўтрымлівае некаторыя тэставыя дадзеныя.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Гэта асноўны прынцып пра тое, як працуюць webhook і endpoints. Калі вам трэба стварыць кастомны endpoint, вам трэба будзе стварыць кастомную функцыю для апрацоўкі дадзеных, якія вы атрымлі з Ultimate Multisite.
