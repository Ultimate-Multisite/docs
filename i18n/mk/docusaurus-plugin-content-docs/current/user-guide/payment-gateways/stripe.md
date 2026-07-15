---
title: Поставување на Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Напоставување на Stripe Gateway (v2)

_**ВАЖНА НАПОМЕНА: Ова приложување се однесува на Ultimate Multisite верзија 2.x.**_

Можете да активирате до четири методи за плаќање на вашата страница за поставки за плаќање: Stripe, Stripe Checkout, PayPal и Ручно (Manual). Во ова приложување ќе ви покажеме како да се интегрирате со **Stripe**.

## Активирање на Stripe {#enabling-stripe}

За да го активирате Stripe како достапен платежен врата на вашата мрежа, отидете на **Ultimate Multisite > Settings > Payments** и означете префрлувачот до **Stripe** или **Stripe Checkout** во секцијата Активни плаќателни врата (Active Payment Gateways).

![Активирање на Stripe во активните плаќателни врата](/img/config/settings-payment-gateways.png)

### Stripe против Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Овој метод ќе прикаже простор за вметнување на бројот на кредитна картичка за време на процесот на плаќање (checkout).

![Inline поле за кредитна картичка со Stripe во време на плаќање](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Овој метод ќе го пренасочи клиентот на страница за Stripe Checkout за време на процесот на плаќање.

![Страница за редиректирање со Stripe Checkout во време на плаќање](/img/config/settings-payment-gateways.png)

### Пронаоѓање на вашите Stripe API клучеви {#setting-up-stripe-webhook}

Откако активирате Stripe како платежно врата, ќе треба да ги пополнивте текстовите за **Stripe Publishable Key** и **Stripe Secret Key**. Можете да ги добиете со најавување во вашата Stripe сметка.

_**Напомена:** можете да активирате **Sandbox режим** за да тестирате дали методот за плаќање работи._

![Полиски за API клучеви на Stripe и префрлувач за Sandbox режим](/img/config/settings-payment-gateways.png)

На вашата Stripe административна табла, кликнете на **Developers** во горниот десен агол, а потоа на **API Keys** во левата мени.

![Сегментот Developers на Stripe административната табла со API клучеви](/img/config/settings-payment-gateways.png)

Можете да користите **Test Data** (за да проверите дали интеграцијата работи на вашата продукциозна локација) или не. За да го промените ова, префрлете го прекинекот за **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Копирајте ја вредноста од колоните **Publishable key** и **Secret key**, од колоната **Token** и залепете ја во текстовите за Ultimate Multisite Stripe Gateway. Потоа кликнете на **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Напоставување на Stripe Webhook

Stripe испраќа webhook настани кои ја информира Ultimate Multisite секогаш што се случи на **вашоот stripe акаунт**.

Кликнете на **Developers** и потоа изберете го елементот **Webhooks** во левиот мени. Потоа на десната страна кликнете на **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ќе ви треба **Endpoint URL** *.* Ultimate Multisite автоматски генерира Endpoint URL што можете да го најдете под текстот за полето **Webhook Listener URL** во секцијата **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Копирајте** ја Endpoint URL и **залепете** ја во текстот за полето **Endpoint URL** на Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Следва да изберете **Event** *.* Под оваа опција, само треба да означите правото框че со **Select all events** и да кликнете на **Add events**. Потоа кликнете на **Add Endpoint** за да го зачувате промената.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Тоа е тоа, вашата интеграција за плаќање со Stripe е завршена!
