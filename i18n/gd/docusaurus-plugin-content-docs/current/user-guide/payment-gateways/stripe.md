---
title: A' chlàradh Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Aistatachadh an Gathròidh Stripe (v2)

_**NOTE CRUCIAL: Tha an article seo a' tighinn air Ultimate Multisite version 2.x.**_

Is eadar thuig a thabhair thu am beatha de math a chiallachadh fhaisgidh a' chlàradh ar pàipear sethachaidhean pàirtich: Stripe, Stripe Checkout, PayPal agus Manual. San article seo, rinn an t-aistadh a' chlàradh le **Stripe**.

## Aistatachadh Stripe {#enabling-stripe}

Chan eil Stripe a' chlàradh gu fhaisgidh pàirtich ar thuineadh a' chlàradh a' chlàradh a' chlàradh. Rinn air **Ultimate Multisite > Settings > Payments** agus tòisich an toggle a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh ar seasmhach a' chlàradh pàirtich.

![Aistatachadh Stripe ar seasmhach a' chlàradh pàirtich](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Tha an fhaisgidh seo a' tighinn air a' chlàradh nàth a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh.

![Fhaisgidh Stripe a' chlàradh nàth a' chlàradh a' chlàradh](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Tha an fhaisgidh seo a' tighinn air a' chlàradh a' chlàradh ar pàipear Stripe Checkout a dhèanamh a' chlàradh a' chlàradh a' chlàradh a' chlàradh.

![Pàipear a' chlàradh Stripe Checkout a' chlàradh a' chlàradh](/img/config/settings-payment-gateways.png)

Còmhla a fháil tus chìaichean API Stripe

An uair a thabhair thu Stripe a' chlàradh gu fhaisgidh pàirtich, rinn air a' chlàradh airson **Stripe Publishable Key** agus **Stripe Secret Key**. Chan eil seo a' fháil thu gu leithid air tus conta Stripe.

_**Note:** Chan eil thu a' fháil air **Sandbox mode** airson a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh._

![Chìaichean API Stripe agus sandbox mode toggle](/img/config/settings-payment-gateways.png)

Ar tus dashboard Stripe, tòisich **Developers** ar fhaigh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh, agus tha thu **API Keys** ar an seasmhach.

![Seasmhach Developers Stripe dashboard le API Keys](/img/config/settings-payment-gateways.png)

Leat thu a' **Test Data** (geat a' faic a' chùine an t-uisge ar eòganadh agad) a' nàid. Tha's a' chlàradh a' **Viewing test data** a' thaisg.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Cop an fhaisg a' **Publishable key** agus an **Secret key**, a' chlàradh a' **Token** air a' chluain, agus leath an tòiseachadh ar na faighinn a' **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## A' sgrùdadh Stripe Webhook {#setting-up-stripe-webhook}

Tha Stripe a sgaidh webhook events a tha a' chlàradh Ultimate Multisite gu sònraich air an t-uisge agad ar **an t-uisge agad de Stripe**.

Thaisg ar **Developers** agus thaobh an ìde **Webhooks** anns an meall a' leat. Tha's a' chlàradh ar an làthar a' ghàid **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Tha thu ag iarraidh **Endpoint URL** *.* Tha's a' chlàradh Ultimate Multisite a' tòiseachadh an Endpoint URL, agus is eadar a' chlàradh air a' chluain an ìde **Webhook Listener URL** anns an sealladh **Ultimate Multisite Stripe Gateway**.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Cop an Endpoint URL agus leath eairt air an fhaisg a' **Endpoint URL** de Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

An t-uisge eile is a' tòiseachadh ar **Event** *.* Air an ìde seo, tha thu ag iarraidh dìreach a' chlàradh an fhaisg **Select all events** agus leath air **Add events**. An uair a tha thu a' faicinn, thaobh a' chlàradh ar **Add Endpoint** airson a' sgrùdadh.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Tha e cheannach, tha an t-uisge (integration) de Stripe agad!
