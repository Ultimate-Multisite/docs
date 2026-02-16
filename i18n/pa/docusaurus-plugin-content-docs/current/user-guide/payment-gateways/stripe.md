---
title: Stripe ਸੈੱਟ ਅੱਪ ਕਰਨਾ
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway ਸੈੱਟਅੱਪ ਕਰਨਾ (v2)

_**ਮਹੱਤਵਪੂਰਨ ਨੋਟ: ਇਹ ਲੇਖ Ultimate Multisite ਵਰਜ਼ਨ 2.x ਬਾਰੇ ਹੈ।**_

ਤੁਸੀਂ ਸਾਡੇ ਭੁਗਤਾਨ ਸੈਟਿੰਗਜ਼ ਪੇਜ਼ 'ਤੇ ਚਾਰ ਭੁਗਤਾਨ ਤਰੀਕਿਆਂ ਨੂੰ ਐਕਟਿਵ ਕਰ ਸਕਦੇ ਹੋ: Stripe, Stripe Checkout, PayPal ਅਤੇ Manual। ਇਸ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ ਦੇਖਾਂਗੇ ਕਿ **Stripe** ਨਾਲ ਕਿਵੇਂ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨਾ ਹੈ।

## Stripe ਨੂੰ ਐਕਟਿਵ ਕਰਨਾ

ਆਪਣੇ ਨੈੱਟਵਰਕ 'ਤੇ Stripe ਨੂੰ ਉਪਲਬਧ ਭੁਗਤਾਨ ਗੇਟਵੇ ਵਜੋਂ ਐਕਟਿਵ ਕਰਨ ਲਈ, **Ultimate Multisite > Settings > Payments** 'ਤੇ ਜਾਓ ਅਤੇ Active Payment Gateways ਸੈਕਸ਼ਨ ਵਿੱਚ **Stripe** ਜਾਂ **Stripe Checkout** ਦੇ ਨਾਲ ਵਾਲੇ ਟੌਗਲ 'ਤੇ ਟਿੱਕ ਕਰੋ।

![ਐਕਟਿਵ ਭੁਗਤਾਨ ਗੇਟਵੇਜ਼ ਵਿੱਚ Stripe ਐਕਟਿਵ ਕਰਨਾ](/img/config/settings-payment-gateways.png)

### Stripe ਬਨਾਮ Stripe Checkout:

**Stripe:** ਇਹ ਤਰੀਕਾ ਚੈੱਕਆਉਟ ਦੌਰਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਨੰਬਰ ਪਾਉਣ ਲਈ ਜਗ੍ਹਾ ਦਿਖਾਏਗਾ।

![ਚੈੱਕਆਉਟ ਦੌਰਾਨ Stripe ਇਨਲਾਈਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਫੀਲਡ](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ਇਹ ਤਰੀਕਾ ਚੈੱਕਆਉਟ ਦੌਰਾਨ ਗਾਹਕ ਨੂੰ Stripe Checkout ਪੇਜ਼ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕਰੇਗਾ।

![ਚੈੱਕਆਉਟ ਦੌਰਾਨ Stripe Checkout ਰੀਡਾਇਰੈਕਟ ਪੇਜ਼](/img/config/settings-payment-gateways.png)

ਆਪਣੀਆਂ Stripe API ਕੀਜ਼ ਲੈਣਾ

ਜਦੋਂ Stripe ਭੁਗਤਾਨ ਗੇਟਵੇ ਵਜੋਂ ਐਕਟਿਵ ਹੋ ਜਾਵੇ, ਤੁਹਾਨੂੰ **Stripe Publishable Key** ਅਤੇ **Stripe Secret Key** ਦੀਆਂ ਫੀਲਡਾਂ ਭਰਨੀਆਂ ਪੈਣਗੀਆਂ। ਤੁਸੀਂ ਆਪਣੇ Stripe ਖਾਤੇ ਵਿੱਚ ਲੌਗਇਨ ਕਰਕੇ ਇਹ ਲੈ ਸਕਦੇ ਹੋ।

_**ਨੋਟ:** ਤੁਸੀਂ **Sandbox mode** ਐਕਟਿਵ ਕਰਕੇ ਟੈਸਟ ਕਰ ਸਕਦੇ ਹੋ ਕਿ ਭੁਗਤਾਨ ਤਰੀਕਾ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ ਜਾਂ ਨਹੀਂ।_

![Stripe API ਕੀ ਫੀਲਡਾਂ ਅਤੇ ਸੈਂਡਬਾਕਸ ਮੋਡ ਟੌਗਲ](/img/config/settings-payment-gateways.png)

ਆਪਣੇ Stripe dashboard 'ਤੇ, ਉੱਪਰ ਸੱਜੇ ਕੋਨੇ ਵਿੱਚ **Developers** 'ਤੇ ਕਲਿੱਕ ਕਰੋ, ਅਤੇ ਫਿਰ ਖੱਬੇ ਮੇਨੂ ਵਿੱਚ **API Keys** 'ਤੇ।

![Stripe dashboard Developers ਸੈਕਸ਼ਨ ਅਤੇ API Keys](/img/config/settings-payment-gateways.png)

ਤੁਸੀਂ **Test Data** ਵਰਤ ਸਕਦੇ ਹੋ (ਇਹ ਟੈਸਟ ਕਰਨ ਲਈ ਕਿ ਤੁਹਾਡੀ ਪ੍ਰੋਡਕਸ਼ਨ ਸਾਈਟ 'ਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਕੰਮ ਕਰ ਰਹੀ ਹੈ) ਜਾਂ ਨਹੀਂ। ਇਸ ਨੂੰ ਬਦਲਣ ਲਈ, **Viewing test data** ਟੌਗਲ ਨੂੰ ਸਵਿੱਚ ਕਰੋ।

![Stripe Viewing test data ਟੌਗਲ](/img/config/settings-payment-gateways.png)

**Token** ਕਾਲਮ ਵਿੱਚੋਂ **Publishable key** ਅਤੇ **Secret key** ਦੀ ਵੈਲਿਊ ਕਾਪੀ ਕਰੋ ਅਤੇ Ultimate Multisite Stripe Gateway ਫੀਲਡਾਂ ਵਿੱਚ ਪੇਸਟ ਕਰੋ। ਫਿਰ **Save Changes** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Stripe publishable ਅਤੇ secret key ਵੈਲਿਊਜ਼](/img/config/settings-payment-gateways.png)

![Ultimate Multisite ਸੈਟਿੰਗਜ਼ ਵਿੱਚ Stripe ਕੀਜ਼ ਪੇਸਟ ਕਰਨਾ](/img/config/settings-payment-gateways.png)

## Stripe Webhook ਸੈੱਟਅੱਪ ਕਰਨਾ

Stripe webhook ਇਵੈਂਟਸ ਭੇਜਦਾ ਹੈ ਜੋ Ultimate Multisite ਨੂੰ ਸੂਚਿਤ ਕਰਦੇ ਹਨ ਜਦੋਂ ਵੀ **ਤੁਹਾਡੇ stripe ਖਾਤੇ** 'ਤੇ ਕੋਈ ਇਵੈਂਟ ਹੁੰਦੀ ਹੈ।

**Developers** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਫਿਰ ਖੱਬੇ ਮੇਨੂ ਵਿੱਚ **Webhooks** ਆਈਟਮ ਚੁਣੋ। ਫਿਰ ਸੱਜੇ ਪਾਸੇ **Add endpoint** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Stripe Webhooks ਪੇਜ਼ ਅਤੇ Add endpoint ਬਟਨ](/img/config/settings-payment-gateways.png)

ਤੁਹਾਨੂੰ ਇੱਕ **Endpoint URL** ਦੀ ਲੋੜ ਹੋਵੇਗੀ। Ultimate Multisite ਆਪਣੇ ਆਪ endpoint URL ਬਣਾਉਂਦਾ ਹੈ ਜੋ ਤੁਸੀਂ **Ultimate Multisite Stripe Gateway** ਸੈਕਸ਼ਨ ਵਿੱਚ **Webhook Listener URL** ਫੀਲਡ ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ ਲੱਭ ਸਕਦੇ ਹੋ।

![Stripe gateway ਸੈਟਿੰਗਜ਼ ਵਿੱਚ Webhook Listener URL ਫੀਲਡ](/img/config/settings-payment-gateways.png)

Endpoint URL ਨੂੰ **ਕਾਪੀ** ਕਰੋ ਅਤੇ Stripe **Endpoint URL** ਫੀਲਡ ਵਿੱਚ **ਪੇਸਟ** ਕਰੋ।

![Stripe webhook ਸੈੱਟਅੱਪ ਵਿੱਚ endpoint URL ਪੇਸਟ ਕਰਨਾ](/img/config/settings-payment-gateways.png)

ਅਗਲਾ ਕਦਮ ਹੈ **Event** ਚੁਣਨਾ। ਇਸ ਆਪਸ਼ਨ ਹੇਠਾਂ, ਤੁਹਾਨੂੰ ਸਿਰਫ਼ **Select all events** ਬਾਕਸ 'ਤੇ ਟਿੱਕ ਕਰਨਾ ਹੈ ਅਤੇ **Add events** 'ਤੇ ਕਲਿੱਕ ਕਰਨਾ ਹੈ। ਉਸ ਤੋਂ ਬਾਅਦ ਬਦਲਾਅ ਸੇਵ ਕਰਨ ਲਈ **Add Endpoint** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![ਸਾਰੀਆਂ ਇਵੈਂਟਸ ਚੁਣਨਾ ਅਤੇ Stripe endpoint ਜੋੜਨਾ](/img/config/settings-payment-gateways.png)

ਬੱਸ ਇੰਨਾ ਹੀ, ਤੁਹਾਡੀ Stripe ਭੁਗਤਾਨ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਪੂਰੀ ਹੋ ਗਈ!
