---
title: Насоз кардани PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Нарӯи Gateway-и PayPal (v2)

_**НОТА МУҲИМ: Ин мақола ба Ultimate Multisite версия 2.x меруу.**_

Шумо метавонед то чор усули пардохтро дар сафари танзимоти пардохти худ фаъол кунед: Stripe, Stripe Checkout, PayPal ва Рушӣ (Manual). Дар ин мақола мо интихоб мекунем, ки чӣ тавр бо **PayPal** ҳамгирӣ кунем.

Ҳамон бидуни Stripe, PayPal барои пардохтҳои онлайн, бахусус дар вебсайтиҳо, WordPress истифода мешавад. Ин мақола ба шумо роҳреро нишон медиҳад, ки чӣ тавр аз PayPal ҳамчун усули пардохти мавҷудаи шабакаи худ истифода баред.

Дар ин бод нотавонед **хасботи Бизнес-и PayPal** дошта бошед, то барои ин ҳамгирӣ ба даст овардани API credential лозим аст.

## Фаъол кардани PayPal дар шабакаи худ {#enabling-paypal-on-your-network}

Чтобы PayPal ҳамчун усули пардохти мавҷуда дар шабакаи худ фаъол карда шавад, ба **Ultimate Multisite > Settings > Payments** равед ва кабуки паст боз PayPal-ро нишон диҳед.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Истифодаи wizard-и танзимоти ройгоншуда (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 як wizard-и танзимоти PayPal-ро ба танзимоти gateway-и пардохт илова кардааст. Баъди он ки PayPal-ро фаъол кардед, аз wizard дар **Ultimate Multisite > Settings > Payments** истифода кунед, то интихоб намоед, ки чӣ тавр мехоҳед gateway-ро пайваст кунед ва пешниҳоди лозимшударо пешниҳод намоед пеш аз савдо кардани танзимот.

Ин wizard ду роҳи танзимотро дастгирӣ мекунад:

* **Манюалӣ ворид кардани маълумот**: Ин ройро он вақт истифода баред, вақте ки шумо аллакай донед PayPal API credentials, вақте ки OAuth setup барои ҳисоби шумо мавҷуд нест, ё вақте ки шумо мехоҳед аз ҷониби худ маълумотномаҳоро аз PayPal нусхабардорӣ кунед. API Username, API Password ва API Signature-ро дар майдонҳои PayPal ворид кунед ва танзимҳои пардохт (payment settings)-ро савдо кунед.
* **Варзиши пайвасткунии OAuth**: Ин ройро фақат он вақт истифода баред, вақте ки имконияти OAuth барои инкишофи шумо мавҷуд ва фаъол аст. Маълумот (wizard) рави шабакаи OAuth-ро паст аз як feature flag нишон медиҳад, ба инчунин шабакаҳое, ки ин flag надоштанд, аз майдонҳои ворид кардани маълумотномаи мануалӣ истифода мебаранд.

Агар шумо имконияти OAuth-ро дар wizard набинисед, рави ворид кардани маълумотномаи мануалӣ дар пастро иҷро кунед. Gateway бо ҳамин API credentials-ҳои PayPal Business ба версияҳои Ultimate Multisite 2.x пеш аз он кор мекунад.

## Гирифтани API credentials-ҳои PayPal {#getting-the-paypal-api-credentials}

Вақте ки PayPal ҳамчун gateway барои пардохт фаъол карда шавад, шумо бояд майдонҳои **Username** (Фармоиши истифода), **Password** (Сарфи) ва **Signature** (Айшо) -ро барои API-и PayPal пур кунед.

Шумо метавонед инро бо ворид шудан ба ҳисоби [Live](https://www.paypal.com/home) ё [Sandbox](https://www.sandbox.paypal.com/home) PayPal-и худ ба даст оред.

(Ядо ниёнед, ки шумо метавонед **sandbox mode**-ро барои санҷиши пардохтҳо истифода баред ва бинавед, ки gateway дуруст сохта шудааст ё не. Фақат тасвири мувофиқро фаъол кунед.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Барои дархости API Signature ё Certificate credentials барои ҳисоби PayPal-и худ:

  1. Ба [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) равед.

  2. Дар қисми **API access**, ба **Update** клик кунед.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Дар бораи **NVP/SOAP API integration (Classic)**، бахш кӯшии **Manage API credentials** расонед.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Агар шумо аллакай API Signature ё Certificate сохтаед, шумо ба саҳифаи гузариш мешавед, ки дар он метавонед маълумоти худсозии худро пайдо кунед.

     * _**Нота:** Агар аз шумо хоҳиши тасдиқи ҳисоби PayPal оянд, пас дарореҳое, ки дар экран аст, риоя намоед._

  4. **Як** аз ин танзимҳоро интихоб кунед ва ба **Agree and Submit** клик кунед.

     * **Request API Signature** – Инро барои тасдиқи API Signature интихоб кунед.

     * **Request API Certificate** – Инро барои тасдиқи API Certificate интихоб кунед.

  5. PayPal маълумоти API худро ба таври зерин сохта месозад:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** аз он ҷумла истифодаи номи корбар API, пароли API ва Signature дар онҳо интихоб карда мешавад, ки баъди муддат пайваста аст. Ин арзишҳо пас барои бехатарӣ ба таври восита пӯшида шудаанд. Барои фароҳам овардани онҳо клик кунед. Вақте кор худро дар интихоб хотир кардед, ба **Done** клик кунед.

     * **API Certificate credentials** аз он ҷумла истифодаи номи корбар API, пароли API ва Certificate дар онҳо интихоб карда мешавад, ки пас аз се сол автоматик пайваста истеҳсол мешавад. Барои сақлаш API Certificate-ро ба дастархи худ клик кунед.

Ин ҳамон! Интегратсияи пардохти PayPal шумо тамом шуд!

Агар дар бораи танзимҳои PayPal саволи дошта бошед, метавонед ба [Help Center](https://www.paypal.com/br/smarthelp/home) оид ба мусоидатҳо мераванед.
