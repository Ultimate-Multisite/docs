---
title: Насоз кардани Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Насозӣ кардани шウェイ Stripe (v2)

_**Эътибори муҳим: Ин мақола ба Ultimate Multisite версияи 2.x меруу.**_

Шумо метавонед то чор усул пардохтро дар саҳифаи калитуби пардохти худ фаъол кунед: Stripe, Stripe Checkout, PayPal ва Рушӣ (Manual). Дар ин мақола мо интихоб мекунем, ки чӣ тавр бо **Stripe** ҳамгирӣ кунем.

## Фаъол кардани Stripe

Барои фаъол кардани Stripe ҳамчун як шウェイ пардохт дар шабакаи худ, ба **Ultimate Multisite > Settings > Payments** равед ва тугси (toggle) пасои **Stripe** ё **Stripe Checkout** дар қисми Active Payment Gateways-ро иҷро кунед.

![Фаъол кардани Stripe дар шウェイ пардохти фаъол](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Ин усул ҷойро барои ворид кардани рақами картаи кредит ҳангоми савдо (checkout) нишон медиҳад.

![Ҳадафи полеи картаи кредит дар Stripe интихоби савдо](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ин усул муштариро ҳангоми савдо ба саҳифаи Stripe Checkout редирект мекунад.

![Саҳифаи редиректи Stripe Checkout дар интихоби савдо](/img/config/settings-payment-gateways.png)

### Гирифтани API keys-и Stripe

Баъд аз фаъол кардани Stripe ҳамчун шウェイ пардохт, шумо бояд болоии матлабҳо барои **Stripe Publishable Key** ва **Stripe Secret Key** маълумот ворид кунед. Шумо метавонед инро бо ворид шудан ба ҳисоби Stripe-и худ гиред.

_**Нота:** шумо метавонед **Sandbox mode**-ро фаъол кунед, то санҷед, ки усули пардохт кор мекунад._

![Ҳадафи API keys-и Stripe ва тугси Sandbox mode](/img/config/settings-payment-gateways.png)

Дар дашборди Stripe-и худ, дар бурҷаи рост бурда **Developers**-ро идора кунед ва пас дар менюи чап **API Keys**-ро интихоб кунед.

![Қисми Developers дар дашборди Stripe бо API keys](/img/config/settings-payment-gateways.png)

Вы можете либо использовать **Test Data** (чтобы проверить, работает ли интеграция на вашем рабочем сайте), либо нет. Чтобы изменить это, переключите тумблер **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Скопируйте значение из полей **Publishable key** и **Secret key**, из столбца **Token**, и вставьте его в поля Stripe Gateway Ultimate Multisite. Затем нажмите, чтобы **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Настройка Webhook для Stripe

С помощью вебхуков Stripe отправляет уведомления в Ultimate Multisite о любом событии, которое происходит в **вашем аккаунте Stripe**.

Нажмите **Developers** (Разработчики), а затем выберите пункт **Webhooks** (Веб-хуки) в левом меню. Затем справа нажмите **Add endpoint** (Добавить конечную точку) *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Вам понадобится **Endpoint URL** (URL конечной точки) *. Ultimate Multisite автоматически генерирует этот URL, который вы можете найти прямо под полем **Webhook Listener URL** в разделе **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Скопируйте** Endpoint URL и **вставьте** его в поле **Endpoint URL** Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Далее нужно выбрать **Event** (Событие) *. В этом варианте вам просто нужно поставить галочку напротив **Select all events** (Выбрать все события) и нажать **Add events** (Добавить события). После этого нажмите **Add Endpoint** (Добавить конечную точку), чтобы сохранить изменения.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Интеграция платежей через Stripe завершена!
