---
title: Konfigurimi i Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Konfigurimi i Stripe Gateway (v2)

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Mund të aktivizoni deri në katër metoda pagese në faqen tuaj e cilësimeve të pagesave: Stripe, Stripe Checkout, PayPal dhe Manual. Në këtë artikull, do të shohim se si të integruani me **Stripe**.

## Aktivizimi i Stripe-it

Për të aktivizuar Stripe si një gateway pagese të disponueshëm në rrjetin tuaj, shkoni te **Ultimate Multisite > Settings > Payments** dhe klikoni mbi ndryshimin (toggle) pranë **Stripe** ose **Stripe Checkout** në seksionin Active Payment Gateways.

![Aktivizimi i Stripe-it në gateway të pagesave aktive](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Kjo metodë do t'ju tregojë një hapësirë për të vendosur numrin e kartës krediti gjatë procesit të pagesës (checkout).

![Fjalëshfletje inline të kartës krediti në checkout me Stripe](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Kjo metodë do t'ju drejtoj klientin te një faqe Stripe Checkout gjatë procesit të pagesës (checkout).

![Faqa e redaktimit i Stripe Checkout gjatë checkout-ut](/img/config/settings-payment-gateways.png)

Për të marrë çelësat API të Stripe-it

Pasi të aktivizoni Stripe si gateway pagese, do të duhet të plotësoni fushat për **Stripe Publishable Key** dhe **Stripe Secret Key**. Mund ta merrni këtë duke hyrë në llogarinë tuaj Stripe.

_**Shënim:** mund të aktivizoni **Sandbox mode** për të testuar nëse metoda e pagesës funksionon._

![Fushat e çelësave API të Stripe-it dhe ndryshimi i sandbox mode-it](/img/config/settings-payment-gateways.png)

Në dashboard-in tuaj të Stripe-it, klikoni te **Developers** në këndin e djathtë të sipërm, dhe pastaj te **API Keys** në menynë e majtë.

![Seksioni Developers i dashboard-it të Stripe me API Keys](/img/config/settings-payment-gateways.png)

Mund të përdorni ose jo **Test Data** (për të testuar nëse integrimi funksionon në faqen tuaj prodhime). Për ta ndryshuar këtë, shtypni rregullimin e rregullimit **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopjoni vlerën nga **Publishable key** dhe **Secret key**, nga kolona **Token** dhe ngjiteni në fushat Stripe Gateway të Ultimate Multisite. Pastaj klikoni për të **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Konfigurimi i Webhook-ut Stripe

Stripe dërgon ngjarje webhook që informojnë Ultimate Multisite çdo herë që ndodh një ngjarje në **konton tuaj të stripe**.

Klikoni te **Developers** dhe më pas zgjidhni opsionin **Webhooks** në menyn e majtë. Pastaj, anasjaj të djathtë klikoni **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Do të keni nevojë për një **Endpoint URL** *. Ultimate Multisite gjeneron automatikisht Endpoint URL-in, që mund ta gjeni menjëherë poshtë fushës **Webhook Listener URL** në seksionin **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopjoni** endpoint URL-in dhe **ngjiteni** atë në fushën **Endpoint URL** të Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Më pas, zgjidhni një **Event** *. Në këtë opsion, thjesht duhet të kontrolloni kuti **Select all events** dhe klikoni për të shtuar ngjarjet (**Add events**). Më pas klikoni **Add Endpoint** për të ruajtur ndryshimet.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Kështu është kjo, integrimi yt me pagesat Stripe është i përfunduar!
