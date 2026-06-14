---
title: Поставување на ручни плаќања
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Напоставување на ручни плаќања (v2)

_**ВАЖНА НАПОМЕНА: Ова прилози верзии 2.x од Ultimate Multisite.**_

Ручните плаќања се начин да им понудите други методи за плаќање ако **Stripe** или **PayPal** не е достапен за вашите корисници. Може да биде префрлање на средства (wire) или банкарски превод или некој друг метод за плаќање што е достапен локално за вашите корисници.

## Како да овозможите ручни плаќања

Напоставувањето на ручно плаќање е многу лесно. Само треба да го активирате под Payment Gateways и да поставите детализирани упатства како тој треба да испрати плаќање на корисникот.

Прво, отидете на **Ultimate Multisite > Settings > Payments**. Под **Payment Gateways**, префрлете ја опцијата **Manual** на вкл. Ќе видите дека ќе се појави прозорец за **Payment Instructions**.

Додадете во овој прозорец информации што ќе им треба на вашиот клиент за да направи плаќање. Може да бидат деталите на вашата банкарска сметка и вашата е-пошта за да може корисникот ви испрати потврда за плаќање, на пример.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Еве интерфејсот за поставки на ручните врати:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

По завршувањето со поставување, само кликнете на **Save Settings** и е готово. Кога корисниците ќе се регистрираат во вашата мрежа, ќе ви видат порака што им кажува дека ќе добијате вашите упатства за завршување на купувањето.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

И ти ќе добиете и порака на вашата **Thank You** страница со вашите упатства за плаќање.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Потврда на ручните плаќања

За да потврдите ручна плаќање, отидете на менюто **Payments** (Плаќања) на левата страна. Таму можете да видите сите плаќања во вашата мрежа и нивните детали, вклучувајќи ги нивниот **status** (статус). Ручно плаќање ќе има секогаш статус **Pending** (Очекување) додека го промените ручно.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Внесете ја страницата за плаќање кликнувајќи на **reference code** (референтен код). На оваа страница имате сите детали за очекувањето плаќање, како референтен ID, производи, временски ознаки и многу нешто повеќе.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Во делот на десната колона можете да го промените статусот на плаќањето. Промена на него во **Completed** (Завршено) и преключување на опцијата **Activate Membership** (Активирај членство) ќе активира вашата страница на клиентот и нивското членство ќе биде активно.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
