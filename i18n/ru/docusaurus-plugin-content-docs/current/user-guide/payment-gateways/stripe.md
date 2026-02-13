---
title: Настройка Stripe
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Настройка шлюза Stripe (v2)

_**ВАЖНОЕ ЗАМЕЧАНИЕ: Эта статья относится к версии Ultimate Multisite 2.x.**_

Вы можете активировать до четырёх способов оплаты на странице настроек платежей: Stripe, Stripe Checkout, PayPal и Manual. В этой статье мы рассмотрим, как интегрировать **Stripe**.

## Включение Stripe

Чтобы включить Stripe в качестве доступного шлюза оплаты в вашей сети, перейдите в **Ultimate Multisite > Settings > Payments** и включите переключатель рядом с **Stripe** или **Stripe Checkout** в разделе Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Этот метод покажет поле для ввода номера кредитной карты во время оформления заказа.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Этот метод перенаправит клиента на страницу Stripe Checkout во время оформления заказа.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

## Получение ваших ключей Stripe API

После того как Stripe включён в качестве шлюза оплаты, вам нужно заполнить поля **Stripe Publishable Key** и **Stripe Secret Key**. Вы можете получить их, войдя в свой аккаунт Stripe.

_**Примечание:** вы можете активировать **Sandbox mode**, чтобы проверить, работает ли способ оплаты._ 

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

На панели управления Stripe нажмите **Developers** в правом верхнем углу, а затем **API Keys** в левом меню.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Вы можете использовать **Test Data** (чтобы проверить, работает ли интеграция на вашем продакшн-сайте) или нет. Чтобы изменить это, переключите переключатель **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Скопируйте значения из **Publishable key** и **Secret key** в колонке **Token** и вставьте их в поля Ultimate Multisite Stripe Gateway. Затем нажмите **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Настройка Stripe Webhook

Stripe отправляет события webhook, которые уведомляют Ultimate Multisite каждый раз, когда происходит событие на **вашем stripe аккаунте**.

Нажмите **Developers**, затем выберите пункт **Webhooks** в левом меню. Затем в правой части нажмите **Add endpoint** *.* 

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Вам понадобится **Endpoint URL** *.* Ultimate Multisite автоматически генерирует URL-адрес конечной точки, который вы можете найти прямо под полем **Webhook Listener URL** в разделе **Ultimate Multisite Stripe Gateway**_.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Скопируйте** URL конечной точки и **вставьте** его в поле **Endpoint URL** Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Далее выберите **Event** *.* Под этой опцией вам просто нужно отметить чекбокс **Select all events** и нажать **Add events**. После этого нажмите **Add Endpoint**, чтобы сохранить изменения.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Вот и всё, ваша интеграция Stripe завершена!
