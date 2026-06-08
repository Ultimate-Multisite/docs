---
title: Наладванне Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Наладка шлюзу Stripe (v2)

_**ВАЖНАЕ ПРАМІТЫ:** Гэты артыкул адносітся да версіі Ultimate Multisite 2.x._

На нашый адканняўцы плацёжных настаўленняў вы можаце актываваць даў канчатковаў чатыро метады плацёжа: Stripe, Stripe Checkout, PayPal і Ручны. У гэтым артыкуле мы пакажам, як інтэграваць з **Stripe**.

## Актывацыя Stripe

Каб актываваць Stripe як даступны плацёжны шлюз на вашай сетцы, зайдзіце на **Ultimate Multisite > Settings > Payments** і ўключыце перамычку побач з **Stripe** або **Stripe Checkout** у раздзеле Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Гэты метад пакажа месца для ўвод страўцы каросцэнніка.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Гэты метад перанакіруе кліента на адканняўку Stripe Checkout падчас плацёжа.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Атримання API ключаў Stripe

Пасля актывацыі Stripe ў якасці плацёжнага шлюзу, вам трэбі перазаполніць поля для **Stripe Publishable Key** і **Stripe Secret Key**. Вы можаце атрымаць іх, увайшоўшы ў свой кант па Stripe.

_**Заўвага:** вы можаце актываваць **Sandbox mode**, каб правесці тэставанне, ці працуе плацёжны метад._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

На вашай адканняўцы Stripe (dashboard) націсніце **Developers** у верхнім правым кутку, а потым **API Keys** у левым меню.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Вы можаце выкарыстоўваць **Test Data** (каб правесці тэставанне, ці працуе інтэграцыя на вашай прадукцыйнай сайце) або не выкарыстоўваць. Каб гэта змяніць, пераключыце перамычку **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Скопіруйце значэнне з **Publishable key** і **Secret key** з калонкі **Token** і ўстаўце яго ў поля Stripe Gateway на Ultimate Multisite. Пасля гэтага націсніце **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Наладка Webhook Stripe

Stripe адпраўляе Webhook паведамленні, якія паведамляюць Ultimate Multisite ў любы момант, калі адбываецца падбыццё на **вашым кант па Stripe**.

Націсніце **Developers**, а потым выберыце пункт **Webhooks** у левым меню. Пасля гэтага, у правым кутку націсніце **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Вам трэбі **Endpoint URL** *.* Ultimate Multisite аўтаматычна генеруе endpoint URL, які вы можаце знайсці права ўнізе поля **Webhook Listener URL** у раздзеле **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Скопіруйце** endpoint URL і **устаўце** яго ў поле **Endpoint URL** Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Далей трэба выбраць **Event** *.* У гэтым пункце вам проста трэба ўключыць прарэмёк **Select all events** і націснуць **Add events**. Пасля гэтага націсніце **Add Endpoint**, каб захаваць змены.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

І гэта ўсё, ваша інтэграцыя плацёжа Stripe завершана!
