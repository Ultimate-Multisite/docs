---
title: Настройване на Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Настройване на Stripe Gateway (v2)

_**ВАЖНО ЗАБЕЛЕЖКА: Тази статия се отнася до Ultimate Multisite версия 2.x.**_

Можете да активирате до четири метода на плащане в страницата за настройки на плащанията ни: Stripe, Stripe Checkout, PayPal и ръчно (Manual). В тази статия ще видим как да интегрирате с **Stripe**.

## Активиране на Stripe

За да активирате Stripe като наличен платежен шлюз за вашата мрежа (network), отидете на **Ultimate Multisite > Settings > Payments** и отбелете превключвателя до **Stripe** или **Stripe Checkout** в секцията Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe срещу Stripe Checkout:

**Stripe:** Този метод ще покаже място за въвеждане на номера на кредитна карта по време на процеса на плащане (checkout).

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Този метод ще пренасочи клиента към страница за Stripe Checkout по време на процеса на плащане.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Получаване на Stripe API ключове

След като Stripe бъде активиран като платежен шлюз, ще трябва да попълните полетата за **Stripe Publishable Key** и **Stripe Secret Key**. Можете да ги получите, като влезете във вашия Stripe account.

_**Забележка:** можете да активирате **Sandbox mode**, за да тествате дали методът на плащане работи._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

На Stripe dashboard, кликнете върху **Developers** в горния десен ъгъл, а след това върху **API Keys** в лявото меню.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Можете да използвате **Test Data** (за тестване дали интеграцията работи на вашия продуктивен сайт) или не. За промяна на това, превключете превключвателя **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Копирайте стойността от **Publishable key** и **Secret key**, от колоната **Token** и я поставете в полетата на Stripe Gateway в Ultimate Multisite. След това кликнете върху **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Настройване на Stripe Webhook

Stripe изпраща webhook събития, които уведомяват Ultimate Multisite всеки път, когато възникне събитие във **вашия Stripe account**.

Кликнете върху **Developers** и след това изберете елемента **Webhooks** в лявото меню. След това от дясната страна кликнете върху **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ще ви е необходим **Endpoint URL** *.* Ultimate Multisite автоматично генерира Endpoint URL, който можете да намерите точно под полето **Webhook Listener URL** в секцията **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Копирайте** Endpoint URL и го **поставете** в полето **Endpoint URL** на Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Следва да изберете **Event** *.* Под тази опция просто трябва да отбелете кутията **Select all events** и да кликнете върху **Add events**. След това кликнете върху **Add Endpoint**, за да запазите промените.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Това е всичко, вашата Stripe платежна интеграция е завършена!
