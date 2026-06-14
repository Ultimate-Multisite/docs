---
title: Наладванне ручных плацяжаў
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Наладка ручных плацяжоў (v2)

_**ВАЖНАЕ ПРАМІТЕЛЕ: Гэты артыкул адносітся да версіі Ultimate Multisite 2.x.**_

Ручныя плацёжы — гэта спосаб прапанаваць іншыя метады плацёжа, калі **Stripe** або **PayPal** не даступны для вашага карыстальнікаў. Гэта можа быць пераказ або банкавы пераклад, або любой іншы метад плацёжа, які даступны вашымі карыстальнікам на мясцоўным рынку.

## Як актываваць ручныя плацёжы

Наладка ручных плацёжаў вельмі простая. Вам проста трэба актываваць гэтую функцыю ў аддзеле плацёжных шлюзов і пакінуць дэталёвыя інструкцыі аб тым, як карыстальнік павінен адправіць плацёж.

Сперш зайдзіце ў **Ultimate Multisite > Settings > Payments**. Ніж пры **Payment Gateways** актывуйце **Manual**. Вы ўбачыце, што для вас з'явіцца пале **Payment Instructions**.

Дадайце ў гэтае пале інфармацыю, якая спатрэбіцца вашым кліенту для аплаты. Гэта могуць быць дэталі вашага банкаўскага рахунку і ваша электронная адрас, каб кліент мог адправіць вам пацвярджэнне плацёжу, напрыклад.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Вось інтэрфейс наладкі ручнага шлюзу:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Пасля налады проста націсніце **Save Settings**, і ўсё гатова. Калі карыстальнікі рэгіструюцца ў вашай сетцы, яны ўбачаць паведамленне, што атрымаюць вашыя інструкцыі для завяршэння пакупкі.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

А яны таксама атрымаюць паведамленне на вашай старонцы **Thank You** з вашымі плацёжнымі інструкцыямі.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Пацвярджэнне ручных плацёжаў

Каб пацвердзіць ручны плацёж, зайдзіце ў меню **Payments** у левым боку. Тут вы ўбачыце ўсе плацёжы ў вашай сетцы і іх дэталі, у тым ліку іх **status**. Ручны плацёж заўсёды будзе мець статус **Pending**, пакуль вы яго не змяніце ўручную.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Адкрыйце старонку плацёжу, націснуўшы на **reference code**. На гэтай старонцы вы знайце ўсе дэталі па выплатах, якія чакаюць пацвердлення, такія як ID адносносці, прадукты, даты і больш.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

У правым слупцы вы можаце змяніць статус плацёжу. Змена яго на **Completed** і актывацыя пераключальніка **Activate Membership** ўключыць сайт вашага кліента, і яго канчатковае такое ўступстэ.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
