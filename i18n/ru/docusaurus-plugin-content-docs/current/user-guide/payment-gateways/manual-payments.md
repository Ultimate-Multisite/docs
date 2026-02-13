---
title: Настройка ручных платежей
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# Настройка ручных платежей (v2)

_**ВАЖНОЕ ЗАМЕЧАНИЕ: Эта статья относится к версии Ultimate Multisite 2.x.**_

Ручные платежи — это способ предложить вашим пользователям другие методы оплаты, если **Stripe** или **PayPal** недоступны. Это может быть банковский перевод или любой другой способ оплаты, доступный вашим пользователям локально.

## Как включить ручные платежи

Настройка ручного платежа очень проста. Нужно включить его в разделе платежных шлюзов и указать подробные инструкции о том, как пользователь должен отправить платеж.

Сначала перейдите в **Ultimate Multisite > Settings > Payments**. Ниже **Payment Gateways** включите **Manual**. Вы увидите появление блока **Payment Instructions**.

Добавьте в этот блок информацию, необходимую вашему клиенту для совершения платежа. Это могут быть реквизиты вашего банковского счета и ваш e‑mail, чтобы клиент мог отправить вам подтверждение платежа, например.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

После настройки просто нажмите **Save Settings**, и всё готово. Когда пользователи регистрируются в вашей сети, они увидят сообщение, сообщающее им, что они получат ваши инструкции для завершения покупки.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

И они также получат сообщение на вашей странице **Thank You** с вашими инструкциями по оплате.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Подтверждение ручных платежей

Для подтверждения ручного платежа перейдите в меню **Payments** на левой панели. Там вы увидите все платежи в вашей сети и их детали, включая **status**. Ручной платеж всегда будет иметь статус **Pending**, пока вы не измените его вручную.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Откройте страницу платежа, кликнув по **reference code**. На этой странице вы увидите все детали ожидающего платежа, такие как ID ссылки, товары, временные метки и прочее.

![Payment details page with reference code and products](/img/admin/payments-list.png)

В правой колонке вы можете изменить статус платежа. Переведя его в **Completed** и включив опцию **Activate Membership**, вы активируете сайт вашего клиента, и его членство станет активным.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
