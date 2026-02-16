---
title: Kuweka Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Kuweka Lango la Malipo la Stripe (v2)

_**ANGALIZO MUHIMU: Makala hii inahusu Ultimate Multisite toleo la 2.x.**_

Unaweza kuwezesha hadi njia nne za malipo kwenye ukurasa wetu wa mipangilio ya malipo: Stripe, Stripe Checkout, PayPal na Manual. Katika makala hii, tutaona jinsi ya kuunganisha na **Stripe**.

## Kuwezesha Stripe

Ili kuwezesha Stripe kama lango la malipo linalopatikana kwenye mtandao wako, nenda **Ultimate Multisite > Settings > Payments** na uwashe swichi iliyo karibu na **Stripe** au **Stripe Checkout** kwenye sehemu ya Active Payment Gateways.

![Kuwezesha Stripe katika malango ya malipo yanayotumika](/img/config/settings-payment-gateways.png)

### Stripe dhidi ya Stripe Checkout:

**Stripe:** Njia hii itaonyesha nafasi ya kuingiza nambari ya kadi ya mkopo wakati wa malipo.

![Sehemu ya kadi ya mkopo ya Stripe wakati wa malipo](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Njia hii itampeleka mteja kwenye ukurasa wa Stripe Checkout wakati wa malipo.

![Ukurasa wa kuelekeza Stripe Checkout wakati wa malipo](/img/config/settings-payment-gateways.png)

Kupata funguo zako za Stripe API

Mara Stripe inapowezeshwa kama lango la malipo, utahitaji kujaza sehemu za **Stripe Publishable Key** na **Stripe Secret Key**. Unaweza kupata hizi kwa kuingia kwenye akaunti yako ya Stripe.

_**Kumbuka:** unaweza kuwezesha **Sandbox mode** ili kujaribu kama njia ya malipo inafanya kazi._

![Sehemu za funguo za Stripe API na swichi ya sandbox mode](/img/config/settings-payment-gateways.png)

Kwenye dashibodi yako ya Stripe, bofya **Developers** kwenye kona ya juu kulia, kisha **API Keys** kwenye menyu ya kushoto.

![Sehemu ya Developers ya dashibodi ya Stripe yenye API Keys](/img/config/settings-payment-gateways.png)

Unaweza kutumia **Test Data** (kujaribu kama muunganisho unafanya kazi kwenye tovuti yako ya uzalishaji) au la. Kubadilisha hii, washa au zima swichi ya **Viewing test data**.

![Swichi ya Viewing test data ya Stripe](/img/config/settings-payment-gateways.png)

Nakili thamani kutoka **Publishable key** na **Secret key**, kutoka safu ya **Token** na uibandike kwenye sehemu za Stripe Gateway za Ultimate Multisite. Kisha bofya **Save Changes**.

![Thamani za publishable na secret key za Stripe](/img/config/settings-payment-gateways.png)

![Kubandika funguo za Stripe kwenye mipangilio ya Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Kuweka Webhook ya Stripe

Stripe inatuma matukio ya webhook yanayoarifu Ultimate Multisite wakati wowote jambo linapotokea kwenye **akaunti yako ya Stripe**.

Bofya **Developers** kisha chagua kipengee cha **Webhooks** kwenye menyu ya kushoto. Kisha upande wa kulia bofya **Add endpoint**.

![Ukurasa wa Webhooks wa Stripe wenye kitufe cha Add endpoint](/img/config/settings-payment-gateways.png)

Utahitaji **Endpoint URL**. Ultimate Multisite inatengeneza kiotomatiki endpoint URL ambayo unaweza kuipata chini ya sehemu ya **Webhook Listener URL** katika sehemu ya **Ultimate Multisite Stripe Gateway**.

![Sehemu ya Webhook Listener URL katika mipangilio ya lango la Stripe](/img/config/settings-payment-gateways.png)

**Nakili** endpoint URL na **uibandike** kwenye sehemu ya **Endpoint URL** ya Stripe.

![Kubandika endpoint URL katika usanidi wa webhook wa Stripe](/img/config/settings-payment-gateways.png)

Kinachofuata ni kuchagua **Event**. Chini ya chaguo hili, unahitaji tu kuangalia kisanduku cha **Select all events** na ubofye **Add events**. Baada ya hapo bofya **Add Endpoint** ili kuhifadhi mabadiliko.

![Kuchagua matukio yote na kuongeza endpoint ya Stripe](/img/config/settings-payment-gateways.png)

Ni hivyo tu, muunganisho wako wa malipo ya Stripe umekamilika!
