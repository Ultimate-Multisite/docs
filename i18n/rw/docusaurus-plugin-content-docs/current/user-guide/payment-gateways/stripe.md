---
title: Gukora Uburyo mu Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Gukoresha I Stripe Gateway (v2)

_**Urugero Muhere: Uruko uwo rurimi uyu nshya ni Ultimate Multisite version 2.x.**_

Ushobora gukorera uburyo bishobora gukoreshwa mu gihe cy'ubwujobozi bw'ubwujobozi bwawe ku rubuga rwa gahunda y'ubwujobozi (payment settings page): Stripe, Stripe Checkout, PayPal no Manual. Mu gihe cyacu, twagushyira uburyo gukoresha **Stripe**.

## Gukorera Stripe

Kugira ngo Stripe yitoke mu gihe cy'ubwujobozi bwawe nk'umuryango w'ubwujobozi (network), ugenda ku rubuga rwa: **Ultimate Multisite > Settings > Payments** kandi uba umuntu wifashishije (tick) uburyo bw'ibyo mu gihe cy'ubwujobozi bwawe (Active Payment Gateways section) ku kintu cyitwa **Stripe** cyangwa **Stripe Checkout**.

![Gukorera Stripe mu gihe cy'ubwujobozi bwawe](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Uburyo bwawe buza uburyo bwo gukoresha umbwere (credit card number) mu gihe cy'ubwujobozi (checkout).

![Uburyo bwa Stripe bw'umbwere mu gihe cy'ubwujobozi](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Uburyo bwawe buza gukoresha umuntu ku rubuga rwa Stripe Checkout mu gihe cy'ubwujobozi (checkout).

![Rubuga rwa Stripe Checkout rurimo mu gihe cy'ubwujobozi](/img/config/settings-payment-gateways.png)

Gukorera API keys zawe za Stripe

Icyiza cyane iyo Stripe yitoke nk'umuryango w'ubwujobozi, uza gutegura ibyerekezo byo **Stripe Publishable Key** n'ibyo byo **Stripe Secret Key**. Uza kubona ibyo bishobora gukorera uburenganzira ukoresheje (get this) uburyo bwo guhagarara mu Stripe account yawe.

_**Urugero:** Uba umuntu wifashishije **Sandbox mode** kugira ngo utekereze iyo uburyo bwa gukoresha byiza._

![Ibyerekezo byo API keys za Stripe n'ubwoko bw'ibyo byo gukoresha (sandbox mode) mu gihe cy'ubwujobozi](/img/config/settings-payment-gateways.png)

Ku dashboard yawe ya Stripe, ugenda ku kintu cyitwa **Developers** ku gice cy'umunsi w'ibyo bishobora gukoreshwa (top-right corner), kandi ukunda kintu cyitwa **API Keys** mu menu y'ibanze.

![Gice cy'umunsi w'ibyo bishobora gukoreshwa za Stripe n'API keys](/img/config/settings-payment-gateways.png)

Ushobora gukoresha **Test Data** (kugera nti ugiye kugenzura ko uburyo bwo gukora kuri site yawe y'ubwoko bw'ubuzima) cyangwa utagukoresha. Kumenya iki, twitse toggle ya **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Gukoresha uburyo bwo gukora mu gihe cy'ubwoko bw'ubuzima, ugenda ku **Publishable key** n'**Secret key**, ushaka uburyo bwa **Token**, kandi utaweze gukoresha kuri byo bitwa Stripe Gateway mu Ultimate Multisite. Nyuma y'ibyo, ugenda kugira ngo wumve **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Gukora Webhook kuri Stripe

Stripe yifasha ibyerekeza (webhook events) byo gishobora guhagarara Ultimate Multisite mu gihe cyose igikorwa cyenda kigira ku **account yawe ya stripe**.

Gukoresha **Developers** kandi ugenda kugera ku item **Webhooks** muri menu ya mbere. Nyuma y'ibyo, ugeraho kuri buri gice **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ushaka **Endpoint URL** *.* Ultimate Multisite yugira uburyo bwo gukora Endpoint URL, kandi ushaka ugenda mu gihe cy'ubwoko bw'ubuzima kuri **Ultimate Multisite Stripe Gateway**. Uziyeho hejuru ya buri gice **Webhook Listener URL**._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copy** Endpoint URL kandi **paste** ku buri gice **Endpoint URL** kuri Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Nyuma y'ibyo, ushaka gukoresha **Event** *.* Mu gihe cyo, ushaka gushyira mu box ya **Select all events** kandi ugenda kugira ngo wumve **Add events**. Nyuma y'ibyo, ugeraho kuri buri gice **Add Endpoint** kugira ngo umvura ibyo.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Ibi ni uburyo ubushobozi bwa Stripe wariweye!
