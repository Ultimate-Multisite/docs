---
title: Konfigire Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Konfigirasyon Gateay Stripe (v2)

_**NOTE ENTRANTA: Sa tèks sa a refere a Ultimate Multisite v2.x.**_

Ou ka aktive jounye char ant quatre metò pamanman sou paj konfigirasyon pamanman ou an: Stripe, Stripe Checkout, PayPal ak Manual. Nan tèks sa a, nou pral wè kijan pou nou intègre ak **Stripe**.

## Aktive Stripe

Pou active Stripe kòm yon pòt pamanman ki disponib nan rezo ou a, ale nan **Ultimate Multisite > Settings > Payments** epi mete tik sou bouton an bò kote **Stripe** oswa **Stripe Checkout** nan seksyon Active Payment Gateways.

![Aktive Stripe nan gateay pamanman aktif](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Metò sa a pral montre yon espas pou w mete nimewo kat kredi pandan checkout la.

![Chantre kat kredi inline Stripe pandan checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Metò sa a ap redirektè kliyan an nan yon paj Stripe Checkout pandan checkout la.

![Paj redireksyon Stripe Checkout pandan checkout](/img/config/settings-payment-gateways.png)

Jwenn kle API Stripe ou

Yon fwa Stripe aktif kòm yon pòt pamanman, ou pral bezwen ranpli chak fò ladan **Stripe Publishable Key** ak **Stripe Secret Key**. Ou ka jwenn sa lè w konekte nan kont Stripe ou a.

_**Nòt:** ou ka aktive **Sandbox mode** pou w teste si metò pamanman an ap fonksyone.**_

![Chantre kle API Stripe ak toggle sandbox mode](/img/config/settings-payment-gateways.png)

Sou dashboard Stripe ou, klike sou **Developers** nan koupe a a, epi apre sa, klike sou **API Keys** nan mennu a.

![Seksyon Developers dashboard Stripe ak API Keys](/img/config/settings-payment-gateways.png)

Ou ka itilize **Test Data** (pou wè si entegrasyon an ap mache sou sit piblik ou a) oubyen pa. Pou chanje sa, twit klike sou toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopi valè ki nan **Publishable key** ak **Secret key**, soti nan kolòn **Token** epi kole li sou fye Stripe Gateway Ultimate Multisite la. Apre sa, klike pou **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Konfigire Stripe Webhook

Stripe voye webhook events ki fè Ultimate Multisite konnen chak fwa yon evènman rive sou **kont stripe ou a**.

Klike sou **Developers** epi chwazi itènite **Webhooks** nan mennu kle a. Apre sa, sou bò dwat klike sou **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ou pral bezwen yon **Endpoint URL** *.* Ultimate Multisite ap jenere Endpoint URL la otomatikman ki ou ka jwenn anba fye **Webhook Listener URL** nan seksyon **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Kopi endpoint URL la epi **kole li** sou fye **Endpoint URL** Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Answit, ou dwe chwazi yon **Event** *.* Anba opsyon sa a, ou jis bezwen chèche koche bwat **Select all events** epi klike pou **Add events**. Apre sa, klike sou **Add Endpoint** pou w mete chanjman yo.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Sa se sa, entegrasyon paiement ou ak Stripe la fini!
