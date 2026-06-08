---
title: Наладванне PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Наладжаванне шлюзу PayPal (v2)

_**ВАЖНАЕ ПАМЫЖАННЕ: Гэты артыкул адносітся да версіі Ultimate Multisite 2.x.**_

На нашый адканняўцы наладжавання платёжаў вы можаце актываваць да трох памерных метадаў платёжаў: Stripe, Stripe Checkout, PayPal і Ручны. У гэтым артыкуле мы пакажам, як інтэгравацца з **PayPal**.

Падобна да Stripe, PayPal шырока выкарыстоўваецца для онлайн-платёжаў, асабліва на сайтах WordPress. Гэты артыкул паведоміць вам, як выкарыстоўваць PayPal як метад платёжаў, доступны ў вашай сетцы.

Замеціце, што вам трэба мець **бізнес-рахункт PayPal** для атрымання API-усыкоўкаў, неабходных для гэтай інтэграцыі.

## Актывацыя PayPal у вашай сетцы

Каб актываваць PayPal як доступны метад платёжаў у вашай сетцы, зайдзіце на **Ultimate Multisite > Settings > Payments** і ўстаўце галочку побач з PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Выкарыстанне паказальнага мастака наладжавання

Ultimate Multisite 2.10.0 дадаў паказальны мастак наладжавання PayPal у адканняўцы шлюзу платёжаў. Пасля актывацыі PayPal выкарыстоўвайце гэты мастак на **Ultimate Multisite > Settings > Payments**, каб выбраць, як вы адбіваacie шлюз, і пацвердзіць, якія ўсыкоўкі яшчэ неабходныя, перш чым zapisać наладжанні платёжаў.

Мастак падтрымлівае два шляхі наладжавання:

* **Ручны ўваход у усыкоўкі (Manual credential entry)**: Выкарыстоўвайце гэты шлях, калі ў вас ужо ёсць API-усыкоўкі PayPal, калі наладжаванне OAuth не даступна для вашага рахунку, або калі вы пераканаўваacieся ў саміх, каб skóпіяваць усыкоўкі з PayPal. Увярце API Username, API Password і API Signature у полі PayPal, а потым zapісаце наладжанні платёжаў.
* **Шлюз злучэння OAuth (OAuth connection gate)**: Выкарыстоўвайце гэты шлях толькі калі варыянт OAuth даступны і актываваны для вашай інсталяцыі. Мастак паказвае працэс OAuth за функцыяй прадукта (feature flag), таму сеткі без гэтай функцыі працягваюць выкарыстоўваць поля ручнага ўваду усыкоўкаў.

Калі вы не бачыце варыянт OAuth у мастаку, завершыце працэс ручнага ўваду ўсыкоўкаў, прыведзены ўнізе. Шлюз працуе з тымі ж API-усыкоўкамі PayPal Business, што і ў папярэдніх рэлізах Ultimate Multisite 2.x.

## Атрыманне API-усыкоўкаў PayPal

Пасля актывацыі PayPal як шлюзу платёжаў вам трэба зарэўставаць поля для API **Username** PayPal, API **Password** PayPal і API **Signature** PayPal.

Вы можаце атрымаць іх, увайшоўшы на свой PayPal [Live](https://www.paypal.com/home) або [Sandbox](https://www.sandbox.paypal.com/home) рахунак.

(Не забывайце, што вы можаце выкарыстоўваць **режым sandbox** для тэставання платёжаў і праверыць, ці правільна наладжаваны шлюз. Проста пераключыце адпаведны раздзел.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Каб пасылаць за API Signature або Certificate усыкоўкамі для вашага рахунку PayPal:

  1. Праййміце на [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. У раздзеле **API access** націсніце **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. Па падраздзелем **NVP/SOAP API integration (Classic)** націсніце **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Калі вы ўжо згенерыравалі API Signature або Certificate, вы будзеце перакігнаныя на старонку, дзе зможаце знайсці свае ўсыкоўкі.

     * _**Замеціце:** Калі вам патрабуюць праверыць ваш рахунак PayPal, выкончыце паказаныя на экране інструкцыі._

  4. Выберыце _одна_ з наступных варыянтаў, а потым націсніце **Agree and Submit**.

     * **Request API Signature** – Выбрана для аўтэнтыкацыі API Signature.

     * **Request API Certificate** – Выбрана для аўтэнтыкацыі API Certificate.

  5. PayPal згенерыруе вашы API-усыкоўкі наступным чынам:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ўключаюць API Username, API Password і Signature, якія не праходзяць тэрмін. Гэтыя значэнні па спецыяльнасці схавалены па спецыяльнасці. Націсніце **Show/Hide**, каб пераключыць іх на ўключэнне і выключэнне. Калі ўсё гатова, націсніце **Done**.

     * **API Certificate credentials** ўключаюць API Username, API Password і Certificate, які аўтаматычна праходзіць тэрмін пасля трох гадоў. Націсніце **Download Certificate**, каб захаваць API Certificate на свой напартак.

Вось і ўсё, ваша інтэграцыя платёжаў PayPal завершана!

Калі ў вас возникнуць пытанні адносна наладжавання PayPal, вы можаце спасылацца на [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
