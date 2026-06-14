---
title: Stripe-ты орнотуу
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway'ди Орнотуу (v2)

_**МААЛЫМДАР ҮЧҮН ЭСКАРТЫ: Бул макала Ultimate Multisite 2.x версиясына тиешелүү._**_

Сиз төлөм параметрлерине кирип баштасаңыз, Stripe, Stripe Checkout, PayPal жана Ручная (Manual) төлөм ыкмаларын активдештире аласыз. Бул маалда биз **Stripe** менен кантип интеграцияланууну көрөбүз.

## Stripe'ди Иштірүү

Сиздин тармагыңызда Stripe'ди колдонууга мүмкүн болгон төлөм жолу катары иштетүү үчүн, **Ultimate Multisite > Settings > Payments** баракчасына кирип, Активдүү Төлөм Жолулары (Active Payment Gateways) бөлүмүндөгү **Stripe** же **Stripe Checkout** жанындагы туташтыруучу чекичти (toggle) активдештириңиз.

![Активдүү төлөм жолдорунда Stripe'ди иштетүү](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Бул ыкмада, сатуу процессинин барышында кредиттик картанын номерин киргизүү үчүн аягы болот.

![Төлөмдө Stripe'дин сырткы карта талаасы](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Бул ыкма кардарды төлөм процессинин барышында Stripe Checkout баракчасына жөнөтөт.

![Төлөмдө Stripe Checkout кайра багыттоо баракчасы](/img/config/settings-payment-gateways.png)

Stripe API ачкычын алуу

Stripe төлөм жолу катары активдештирилгенден кийин, **Stripe Publishable Key** жана **Stripe Secret Key** талааларын толтурууңуз керек. Бул сиз Stripe эсебиңизге кирип кирүү аркылуу ала аласыз.

_**Эскертүү:** Төлөм ыкма иштейт деп текшерүү үчүн **Sandbox mode**'ду активдештире аласыз._

![Stripe API ачкычы талаалары жана sandbox modu чекичи](/img/config/settings-payment-gateways.png)

Stripe панелинде, оңго жээктердеги эң жогору жагынан **Developers**-ке басыңыз, андан кийин сол менюдан **API Keys**-ге барыңыз.

![API Ачкычтары менен Stripe панелиндеги Developers бөлүмү](/img/config/settings-payment-gateways.png)

Сиз **Test Data** (интеграция иштейтүү сайыңызда иштеп жатканын текшерүү үчүн) же колдонуп көрбөй аласыз. Булды өзгөртүү үчүн **Viewing test data** туташтыруучу батырманы (toggle) өзгөртүңүз.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** жана **Secret key**дан маанини, **Token** столбөсүнөн көчүрүп алсаңыз, аларды Ultimate Multisite Stripe Gateway талааларына чаптаңыз. Андан кийин өзгөртүүлөрдү сактоо үчүн басыңыз.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook'ун орнотуу

Stripe сиздин **stripe аккаунтуңузда** кандайдыр бир окуя болгондо Ultimate Multisite-га вебхук окуяларын жөнөтөт.

**Developers**-ке басып, андан кийин сол менюдан **Webhooks** элементін тандаңыз. Андан соң оң жакта **Add endpoint**-ке басыңыз *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Сизге **Endpoint URL** керек болот *. Ultimate Multisite автоматтык түрдө Endpoint URL'ду түзөт, аны **Ultimate Multisite Stripe Gateway** бөлүмүндөгү **Webhook Listener URL** талаасынын астында таба аласыз._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL'ду **кочүрүп**, Stripe **Endpoint URL** талаасына чаптаңыз.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Кийинки кадам — **Event** тандау. Бул опция астында, сиз жөн гана **Select all events** (бардык окуяларды тандоо) чагын текшерип, **Add events**-ке басып, андан кийин өзгөртүүлөрдү сактоо үчүн **Add Endpoint**-ке басышыңыз керек.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Сиздин Stripe төлөм интеграцияңыз аяктады!
