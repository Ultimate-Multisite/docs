---
title: PayPal ਸੈੱਟ ਅੱਪ ਕਰਨਾ
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal ਗੇਟਵੇ ਸੈੱਟ ਅੱਪ ਕਰਨਾ (v2)

_**ਮਹੱਤਵਪੂਰਨ ਨੋਟ: ਇਹ ਲੇਖ Ultimate Multisite ਵਰਜਨ 2.x ਬਾਰੇ ਹੈ।**_

ਤੁਸੀਂ ਸਾਡੇ ਭੁਗਤਾਨ ਸੈਟਿੰਗਾਂ ਸਫ਼ੇ 'ਤੇ ਭੁਗਤਾਨ ਦੇ ਚਾਰ ਤੱਕ ਢੰਗ ਸਰਗਰਮ ਕਰ ਸਕਦੇ ਹੋ: Stripe, Stripe Checkout, PayPal ਅਤੇ ਮੈਨੁਅਲ। ਇਸ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ ਵੇਖਾਂਗੇ ਕਿ **PayPal** ਨਾਲ ਇੰਟੀਗ੍ਰੇਟ ਕਿਵੇਂ ਕਰਨਾ ਹੈ।

Stripe ਵਾਂਗ ਹੀ, PayPal ਆਨਲਾਈਨ ਭੁਗਤਾਨਾਂ ਲਈ ਵਿਆਪਕ ਤੌਰ 'ਤੇ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਖ਼ਾਸ ਕਰਕੇ WordPress ਵੈੱਬਸਾਈਟਾਂ 'ਤੇ। ਇਹ ਲੇਖ ਤੁਹਾਨੂੰ ਦੱਸੇਗਾ ਕਿ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ 'ਤੇ ਉਪਲਬਧ ਭੁਗਤਾਨ ਢੰਗ ਵਜੋਂ PayPal ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਨੀ ਹੈ।

ਧਿਆਨ ਰੱਖੋ ਕਿ ਇਸ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਲਈ ਲੋੜੀਂਦਾ API ਕ੍ਰੈਡੈਂਸ਼ਲ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਤੁਹਾਡੇ ਕੋਲ **PayPal Business Account** ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।

## ਆਪਣੇ ਨੈੱਟਵਰਕ 'ਤੇ PayPal ਯੋਗ ਕਰਨਾ {#enabling-paypal-on-your-network}

ਆਪਣੇ ਨੈੱਟਵਰਕ 'ਤੇ ਉਪਲਬਧ ਭੁਗਤਾਨ ਢੰਗ ਵਜੋਂ PayPal ਨੂੰ ਯੋਗ ਕਰਨ ਲਈ, **Ultimate Multisite > Settings > Payments** ਟੈਬ 'ਤੇ ਜਾਓ ਅਤੇ PayPal ਦੇ ਨਾਲ ਵਾਲੇ ਬਾਕਸ 'ਤੇ ਟਿਕ ਕਰੋ।

![ਸਰਗਰਮ ਭੁਗਤਾਨ ਗੇਟਵੇਜ਼ ਵਿੱਚ PayPal ਯੋਗ ਕਰਨਾ](/img/config/settings-payment-gateways.png)

## ਮਾਰਗਦਰਸ਼ਿਤ ਸੈੱਟਅੱਪ ਵਿਜ਼ਾਰਡ ਦੀ ਵਰਤੋਂ ਕਰਨਾ {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ਭੁਗਤਾਨ ਗੇਟਵੇ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਇੱਕ ਮਾਰਗਦਰਸ਼ਿਤ PayPal ਸੈੱਟਅੱਪ ਵਿਜ਼ਾਰਡ ਜੋੜਦਾ ਹੈ। PayPal ਯੋਗ ਕਰਨ ਤੋਂ ਬਾਅਦ, **Ultimate Multisite > Settings > Payments** 'ਤੇ ਵਿਜ਼ਾਰਡ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਚੁਣੋ ਕਿ ਤੁਸੀਂ ਗੇਟਵੇ ਨੂੰ ਕਿਵੇਂ ਕਨੈਕਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ ਅਤੇ ਸੇਵ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਕਿਹੜੇ ਕ੍ਰੈਡੈਂਸ਼ਲ ਅਜੇ ਵੀ ਲੋੜੀਂਦੇ ਹਨ।

ਵਿਜ਼ਾਰਡ ਦੋ ਸੈੱਟਅੱਪ ਰਸਤੇ ਸਹਾਇਤਾ ਕਰਦਾ ਹੈ:

* **ਮੈਨੁਅਲ ਕ੍ਰੈਡੈਂਸ਼ਲ ਐਂਟਰੀ**: ਇਹ ਰਸਤਾ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ PayPal API ਕ੍ਰੈਡੈਂਸ਼ਲ ਹਨ, ਜਦੋਂ OAuth ਸੈੱਟਅੱਪ ਤੁਹਾਡੇ Account ਲਈ ਉਪਲਬਧ ਨਹੀਂ ਹੈ, ਜਾਂ ਜਦੋਂ ਤੁਸੀਂ PayPal ਤੋਂ ਖੁਦ ਕ੍ਰੈਡੈਂਸ਼ਲ ਕਾਪੀ ਕਰਨਾ ਪਸੰਦ ਕਰਦੇ ਹੋ। PayPal ਖੇਤਰਾਂ ਵਿੱਚ API Username, API Password, ਅਤੇ API Signature ਦਰਜ ਕਰੋ, ਫਿਰ ਭੁਗਤਾਨ ਸੈਟਿੰਗਾਂ ਸੇਵ ਕਰੋ।
* **OAuth ਕਨੈਕਸ਼ਨ ਗੇਟ**: ਇਹ ਰਸਤਾ ਸਿਰਫ਼ ਉਸ ਵੇਲੇ ਵਰਤੋ ਜਦੋਂ OAuth ਵਿਕਲਪ ਤੁਹਾਡੀ ਇੰਸਟਾਲ ਲਈ ਉਪਲਬਧ ਅਤੇ ਯੋਗ ਹੋਵੇ। ਵਿਜ਼ਾਰਡ OAuth ਫਲੋ ਨੂੰ ਇੱਕ ਫੀਚਰ ਫਲੈਗ ਦੇ ਪਿੱਛੇ ਦਿਖਾਉਂਦਾ ਹੈ, ਇਸ ਲਈ ਫਲੈਗ ਤੋਂ ਬਿਨਾਂ ਨੈੱਟਵਰਕ ਮੈਨੁਅਲ ਕ੍ਰੈਡੈਂਸ਼ਲ ਐਂਟਰੀ ਖੇਤਰਾਂ ਦੀ ਵਰਤੋਂ ਜਾਰੀ ਰੱਖਦੇ ਹਨ।

ਜੇਕਰ ਤੁਹਾਨੂੰ ਵਿਜ਼ਾਰਡ ਵਿੱਚ OAuth ਵਿਕਲਪ ਨਹੀਂ ਦਿਸਦਾ, ਤਾਂ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਨੁਅਲ ਕ੍ਰੈਡੈਂਸ਼ਲ ਐਂਟਰੀ ਫਲੋ ਪੂਰਾ ਕਰੋ। ਗੇਟਵੇ ਪਿਛਲੀਆਂ Ultimate Multisite 2.x ਰਿਲੀਜ਼ਾਂ ਵਾਂਗ ਉਹੀ PayPal Business API ਕ੍ਰੈਡੈਂਸ਼ਲ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ।

## PayPal API ਕ੍ਰੈਡੈਂਸ਼ਲ ਪ੍ਰਾਪਤ ਕਰਨਾ {#getting-the-paypal-api-credentials}

ਜਦੋਂ PayPal ਭੁਗਤਾਨ ਗੇਟਵੇ ਵਜੋਂ ਯੋਗ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ PayPal API **Username** , PayPal API **Password** ਅਤੇ PayPal API **Signature** ਲਈ ਖੇਤਰ ਭਰਨੇ ਪੈਣਗੇ।

ਤੁਸੀਂ ਇਹ ਆਪਣੇ PayPal [ਲਾਈਵ](https://www.paypal.com/home) ਜਾਂ [Sandbox](https://www.sandbox.paypal.com/home) Account ਵਿੱਚ ਲੌਗ ਇਨ ਕਰਕੇ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।

(ਯਾਦ ਰੱਖੋ ਕਿ ਤੁਸੀਂ ਭੁਗਤਾਨਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਅਤੇ ਇਹ ਵੇਖਣ ਲਈ ਕਿ ਗੇਟਵੇ ਸਹੀ ਤਰ੍ਹਾਂ ਸੈੱਟਅੱਪ ਹੈ ਜਾਂ ਨਹੀਂ, **sandbox ਮੋਡ** ਵਰਤ ਸਕਦੇ ਹੋ। ਸਿਰਫ਼ ਸੰਬੰਧਿਤ ਭਾਗ ਨੂੰ ਟੌਗਲ ਆਨ ਕਰੋ।)

![PayPal API ਕ੍ਰੈਡੈਂਸ਼ਲ ਖੇਤਰ ਅਤੇ sandbox ਮੋਡ ਟੌਗਲ](/img/config/settings-payment-gateways.png)

ਆਪਣੇ PayPal Account ਲਈ API Signature ਜਾਂ Certificate ਕ੍ਰੈਡੈਂਸ਼ਲ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ:

  1. ਆਪਣੇ [Account ਸੈਟਿੰਗਾਂ](https://www.paypal.com/businessmanage/account/accountAccess) 'ਤੇ ਜਾਓ।

  2. **API ਪਹੁੰਚ** ਭਾਗ ਵਿੱਚ, **ਅੱਪਡੇਟ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।
![API ਪਹੁੰਚ ਭਾਗ ਵਾਲੀਆਂ PayPal Account ਸੈਟਿੰਗਾਂ](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** ਦੇ ਅਧੀਨ, **API ਕ੍ਰੈਡੈਂਸ਼ਲ ਪ੍ਰਬੰਧਿਤ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।
![PayPal NVP/SOAP API integration API ਕ੍ਰੈਡੈਂਸ਼ਲ ਪ੍ਰਬੰਧਿਤ ਕਰੋ](/img/config/settings-payment-gateways.png)

     * ਜੇ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ API Signature ਜਾਂ Certificate ਬਣਾਇਆ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਇੱਕ ਸਫ਼ੇ 'ਤੇ ਭੇਜਿਆ ਜਾਵੇਗਾ ਜਿੱਥੇ ਤੁਸੀਂ ਆਪਣੇ ਕ੍ਰੈਡੈਂਸ਼ਲ ਲੱਭ ਸਕਦੇ ਹੋ।

     * _**ਨੋਟ:** ਜੇ ਤੁਹਾਨੂੰ ਆਪਣੇ PayPal Account ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਸਕ੍ਰੀਨ 'ਤੇ ਦਿੱਤੀਆਂ ਹਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।_

  4. ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਵਿੱਚੋਂ _ਇੱਕ_ ਚੁਣੋ, ਫਿਰ **ਸਹਿਮਤ ਹੋਵੋ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

     * **API Signature ਦੀ ਬੇਨਤੀ ਕਰੋ** – API Signature ਪ੍ਰਮਾਣਿਕਤਾ ਲਈ ਚੁਣੋ।

     * **API Certificate ਦੀ ਬੇਨਤੀ ਕਰੋ** – API Certificate ਪ੍ਰਮਾਣਿਕਤਾ ਲਈ ਚੁਣੋ।

  5. PayPal ਤੁਹਾਡੇ API ਕ੍ਰੈਡੈਂਸ਼ਲ ਹੇਠਾਂ ਦਿੱਤੇ ਅਨੁਸਾਰ ਬਣਾਉਂਦਾ ਹੈ:
![PayPal ਵੱਲੋਂ ਬਣਾਏ API ਕ੍ਰੈਡੈਂਸ਼ਲ](/img/config/settings-payment-gateways.png)

     * **API Signature ਕ੍ਰੈਡੈਂਸ਼ਲ** ਵਿੱਚ API Username, API Password, ਅਤੇ Signature ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ, ਜਿਨ੍ਹਾਂ ਦੀ ਮਿਆਦ ਖਤਮ ਨਹੀਂ ਹੁੰਦੀ। ਵਾਧੂ ਸੁਰੱਖਿਆ ਲਈ ਇਹ ਮੁੱਲ ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ ਲੁਕਾਏ ਜਾਂਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਨੂੰ ਆਨ ਅਤੇ ਆਫ਼ ਟੌਗਲ ਕਰਨ ਲਈ **ਦਿਖਾਓ/ਲੁਕਾਓ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਮੁਕੰਮਲ ਹੋਣ 'ਤੇ, **ਹੋ ਗਿਆ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

     * **API Certificate ਕ੍ਰੈਡੈਂਸ਼ਲ** ਵਿੱਚ API Username, API Password, ਅਤੇ Certificate ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ, ਜਿਸ ਦੀ ਮਿਆਦ ਤਿੰਨ ਸਾਲਾਂ ਬਾਅਦ ਆਪਣੇ ਆਪ ਖਤਮ ਹੋ ਜਾਂਦੀ ਹੈ। API Certificate ਨੂੰ ਆਪਣੇ ਡੈਸਕਟਾਪ 'ਤੇ ਸੇਵ ਕਰਨ ਲਈ **Certificate ਡਾਊਨਲੋਡ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

ਬੱਸ, ਤੁਹਾਡਾ PayPal ਭੁਗਤਾਨ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਪੂਰਾ ਹੋ ਗਿਆ ਹੈ!

ਜੇ ਤੁਹਾਡੇ ਕੋਲ PayPal ਸੈਟਿੰਗਾਂ ਬਾਰੇ ਕੋਈ ਸਵਾਲ ਹਨ, ਤਾਂ ਤੁਸੀਂ PayPal ਦੇ [ਮਦਦ ਕੇਂਦਰ](https://www.paypal.com/br/smarthelp/home) ਨੂੰ ਵੇਖ ਸਕਦੇ ਹੋ।
