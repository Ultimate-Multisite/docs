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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** Этот метод покажет поле для ввода номера кредитной карты во время оформления заказа.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** Этот метод перенаправит клиента на страницу Stripe Checkout во время оформления заказа.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

## Получение ваших ключей Stripe API

После того как Stripe включён в качестве шлюза оплаты, вам нужно заполнить поля **Stripe Publishable Key** и **Stripe Secret Key**. Вы можете получить их, войдя в свой аккаунт Stripe.

_**Примечание:** вы можете активировать **Sandbox mode**, чтобы проверить, работает ли способ оплаты._ 

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

На панели управления Stripe нажмите **Developers** в правом верхнем углу, а затем **API Keys** в левом меню.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Вы можете использовать **Test Data** (чтобы проверить, работает ли интеграция на вашем продакшн-сайте) или нет. Чтобы изменить это, переключите переключатель **Viewing test data**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Скопируйте значения из **Publishable key** и **Secret key** в колонке **Token** и вставьте их в поля Ultimate Multisite Stripe Gateway. Затем нажмите **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Настройка Stripe Webhook

Stripe отправляет события webhook, которые уведомляют Ultimate Multisite каждый раз, когда происходит событие на **вашем stripe аккаунте**.

Нажмите **Developers**, затем выберите пункт **Webhooks** в левом меню. Затем в правой части нажмите **Add endpoint** *.* 

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Вам понадобится **Endpoint URL** *.* Ultimate Multisite автоматически генерирует URL-адрес конечной точки, который вы можете найти прямо под полем **Webhook Listener URL** в разделе **Ultimate Multisite Stripe Gateway**_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Скопируйте** URL конечной точки и **вставьте** его в поле **Endpoint URL** Stripe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

Далее выберите **Event** *.* Под этой опцией вам просто нужно отметить чекбокс **Select all events** и нажать **Add events**. После этого нажмите **Add Endpoint**, чтобы сохранить изменения.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

Вот и всё, ваша интеграция Stripe завершена!
