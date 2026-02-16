---
title: Налаштування Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Налаштування платіжного шлюзу Stripe (v2)

_**ВАЖЛИВА ПРИМІТКА: Ця стаття стосується Ultimate Multisite версії 2.x.**_

На сторінці налаштувань оплати ви можете активувати до чотирьох способів оплати: Stripe, Stripe Checkout, PayPal та ручний режим. У цій статті ми розглянемо, як інтегрувати **Stripe**.

## Увімкнення Stripe

Щоб увімкнути Stripe як доступний платіжний шлюз у вашій мережі, перейдіть до **Ultimate Multisite > Settings > Payments** і встановіть перемикач біля **Stripe** або **Stripe Checkout** у розділі Active Payment Gateways.

![Увімкнення Stripe в активних платіжних шлюзах](/img/config/settings-payment-gateways.png)

### Stripe та Stripe Checkout:

**Stripe:** Цей метод показує поле для введення номера кредитної картки під час оформлення замовлення.

![Вбудоване поле кредитної картки Stripe під час оформлення замовлення](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Цей метод перенаправляє покупця на сторінку Stripe Checkout під час оформлення замовлення.

![Сторінка перенаправлення Stripe Checkout під час оформлення замовлення](/img/config/settings-payment-gateways.png)

Отримання API-ключів Stripe

Після увімкнення Stripe як платіжного шлюзу вам потрібно буде заповнити поля **Stripe Publishable Key** та **Stripe Secret Key**. Ці ключі можна отримати, увійшовши до свого облікового запису Stripe.

_**Примітка:** ви можете активувати **Sandbox mode** для перевірки роботи способу оплати._

![Поля API-ключів Stripe та перемикач режиму sandbox](/img/config/settings-payment-gateways.png)

У панелі керування Stripe натисніть **Developers** у верхньому правому куті, а потім **API Keys** у лівому меню.

![Розділ Developers у панелі керування Stripe з API Keys](/img/config/settings-payment-gateways.png)

Ви можете використовувати **Test Data** (для перевірки інтеграції на вашому робочому сайті) або ні. Щоб змінити це, перемкніть перемикач **Viewing test data**.

![Перемикач Viewing test data у Stripe](/img/config/settings-payment-gateways.png)

Скопіюйте значення **Publishable key** та **Secret key** зі стовпця **Token** і вставте їх у відповідні поля Stripe Gateway в Ultimate Multisite. Потім натисніть **Save Changes**.

![Значення publishable та secret key у Stripe](/img/config/settings-payment-gateways.png)

![Вставлення ключів Stripe у налаштуваннях Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Налаштування Stripe Webhook

Stripe надсилає події webhook, які сповіщають Ultimate Multisite щоразу, коли щось відбувається у **вашому обліковому записі Stripe**.

Натисніть **Developers**, а потім виберіть пункт **Webhooks** у лівому меню. Далі на правій стороні натисніть **Add endpoint**.

![Сторінка Webhooks у Stripe з кнопкою Add endpoint](/img/config/settings-payment-gateways.png)

Вам знадобиться **Endpoint URL**. Ultimate Multisite автоматично генерує URL-адресу endpoint, яку можна знайти під полем **Webhook Listener URL** у розділі **Ultimate Multisite Stripe Gateway**.

![Поле Webhook Listener URL у налаштуваннях шлюзу Stripe](/img/config/settings-payment-gateways.png)

**Скопіюйте** URL-адресу endpoint і **вставте** її в поле **Endpoint URL** у Stripe.

![Вставлення URL-адреси endpoint у налаштуваннях webhook Stripe](/img/config/settings-payment-gateways.png)

Далі потрібно вибрати **Event**. У цьому пункті просто поставте позначку біля **Select all events** і натисніть **Add events**. Після цього натисніть **Add Endpoint**, щоб зберегти зміни.

![Вибір усіх подій та додавання endpoint у Stripe](/img/config/settings-payment-gateways.png)

Ось і все, інтеграцію платежів Stripe завершено!
