---
title: Stripe-ты орнату
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway-ті Құрылғыны Орнату (v2)

_**МАҢЫЗДЫ ЕЛЕМ: Бұл мақала Ultimate Multisite 2.x нұсқасына қатысты.**_

Сіз төлем параметрлері бетінде төрт түрлі төлем әдісін белсендіруге болады: Stripe, Stripe Checkout, PayPal және Қолдану арқылы (Manual). Бұл мақалада біз **Stripe**-пен интеграциялауды қалай жасау керектігін көреміз.

## Stripe-ті Қолжетімді Төлем Құрылғысы Режимде Алу

Stripe-ті сіздің желіңізде қолжетімді төлем құрылғысы ретінде белсендіру үшін **Ultimate Multisite > Settings > Payments** бетіне өтіп, Active Payment Gateways бөліміндегі **Stripe** немесе **Stripe Checkout** сөзінің жанындағы туылдырғышты (toggle) белсендіріңіз.

![Active payment gateways-те Stripe-ті белсендіру](/img/config/settings-payment-gateways.png)

### Stripe және Stripe Checkout:

**Stripe:** Бұл әдіс төлем кезінде кредит карта нөмірін енгізуге арналған орын көрсетеді.

![Checkout кезінде Stripe-тің тікелей карта өрісі](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Бұл әдіс клиентті төлем кезінде Stripe Checkout парағына ауыстырады (redirect).

![Checkout кезіндегі Stripe Checkout ауысу парағы](/img/config/settings-payment-gateways.png)

### Stripe API кілттеріңізді алу

Stripe төлем құрылғысы ретінде белсендірілгеннен кейін, сізге **Stripe Publishable Key** және **Stripe Secret Key** өрістерін толтыру қажет болады. Бұл ақпаратты Stripe есебіңізге кіріп кірген кезде алуға болады.

_**Ескерту:** Төлем әдісі жұмыс істейтінін тексеру үшін **Sandbox mode**-ды белсендіруге боласыз._

![Stripe API кілттері өрістері және sandbox mode туылдырғышы](/img/config/settings-payment-gateways.png)

Stripe дашбордыңызда оң жақ жоғарғы бұрышта **Developers**-ті, содан кейін сол жақтағы менюдан **API Keys**-ді басыңыз.

![Stripe дашборды Developers бөлімі және API кілттері](/img/config/settings-payment-gateways.png)

Сіз немесе **Test Data** (интеграция жұмыс істейтінін өнімді сайтта тексеру үшін) қолна аласыз, немесе қолనбайсыз. Бұл параметрді өзгерту үшін **Viewing test data** туылсындығын жылжытыңыз.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** және **Secret key** мәндерін, **Token** бағанынан көшіріп алып, Ultimate Multisite Stripe Gateway өрістеріне қойыңыз. Содан кейін **Save Changes**-қа басыңыз.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook орнату

Stripe, **сіздің stripe аккаунтыңызда** кез келген оқиға болғанда Ultimate Multisite-қа хабарлау үшін webhook оқиғаларын жібереді.

**Developers**-қа басып, солдан сол жақ мәзірдегі **Webhooks** тармағын таңдаңыз. Содан кейін оң жақтан **Add endpoint**-ке басыңыз *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Сізге **Endpoint URL** қажет болады *.* Ultimate Multisite автоматты түрде endpoint URL-ді генерациялайды, оны **Ultimate Multisite Stripe Gateway** бөліміндегі **Webhook Listener URL** өрісінің астында таба аласыз._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL-ді **көшіріп**, Stripe **Endpoint URL** өрісіне **қойыңыз**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Енді **Event** таңдау қажет *.* Бұл опция астында, сізге тек **Select all events** (барлық оқиғаларды таңдау) қорабын белгілеп, **Add events**-ке басып, содан кейін өзгерістерді сақтау үшін **Add Endpoint**-ке басу жеткілікті.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Бұл барлығы дайын! Сіздің Stripe төлем интеграцияңыз аяқталды!
