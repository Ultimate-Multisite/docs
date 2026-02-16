---
title: PayPal ਸੈੱਟ ਅੱਪ ਕਰਨਾ
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway ਸੈੱਟ ਅੱਪ ਕਰਨਾ (v2)

_**ਮਹੱਤਵਪੂਰਨ ਨੋਟ: ਇਹ ਲੇਖ Ultimate Multisite ਵਰਜਨ 2.x ਬਾਰੇ ਹੈ।**_

ਤੁਸੀਂ ਸਾਡੇ payment settings ਪੇਜ 'ਤੇ ਚਾਰ ਭੁਗਤਾਨ ਤਰੀਕੇ ਚਾਲੂ ਕਰ ਸਕਦੇ ਹੋ: Stripe, Stripe Checkout, PayPal ਅਤੇ Manual। ਇਸ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ ਦੇਖਾਂਗੇ ਕਿ **PayPal** ਨਾਲ ਕਿਵੇਂ ਜੋੜਨਾ ਹੈ।

Stripe ਵਾਂਗ ਹੀ, PayPal ਔਨਲਾਈਨ ਭੁਗਤਾਨਾਂ ਲਈ ਬਹੁਤ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਖਾਸ ਕਰਕੇ WordPress ਵੈੱਬਸਾਈਟਾਂ 'ਤੇ। ਇਹ ਲੇਖ ਤੁਹਾਨੂੰ ਦੱਸੇਗਾ ਕਿ ਤੁਹਾਡੇ network 'ਤੇ PayPal ਨੂੰ ਭੁਗਤਾਨ ਤਰੀਕੇ ਵਜੋਂ ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ।

ਧਿਆਨ ਰੱਖੋ ਕਿ ਇਸ integration ਲਈ ਲੋੜੀਂਦੀ API credential ਲੈਣ ਲਈ ਤੁਹਾਡੇ ਕੋਲ **PayPal Business account** ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।

## ਆਪਣੇ network 'ਤੇ PayPal ਚਾਲੂ ਕਰਨਾ

ਆਪਣੇ network 'ਤੇ PayPal ਨੂੰ ਉਪਲਬਧ ਭੁਗਤਾਨ ਤਰੀਕੇ ਵਜੋਂ ਚਾਲੂ ਕਰਨ ਲਈ, **Ultimate Multisite > Settings > Payments** ਟੈਬ 'ਤੇ ਜਾਓ ਅਤੇ PayPal ਦੇ ਅੱਗੇ ਵਾਲੇ ਬਾਕਸ 'ਤੇ ਟਿੱਕ ਕਰੋ।

![ਐਕਟਿਵ payment gateways ਵਿੱਚ PayPal ਚਾਲੂ ਕਰਨਾ](/img/config/settings-payment-gateways.png)

## PayPal API credentials ਲੈਣਾ

ਜਦੋਂ PayPal payment gateway ਵਜੋਂ ਚਾਲੂ ਹੋ ਜਾਵੇ, ਤੁਹਾਨੂੰ PayPal API **Username**, PayPal API **Password** ਅਤੇ PayPal API **Signature** ਦੇ ਖੇਤਰ ਭਰਨੇ ਪੈਣਗੇ।

ਤੁਸੀਂ ਇਹ ਆਪਣੇ PayPal [Live](https://www.paypal.com/home) ਜਾਂ [Sandbox](https://www.sandbox.paypal.com/home) account ਵਿੱਚ ਲੌਗਿਨ ਕਰਕੇ ਲੈ ਸਕਦੇ ਹੋ।

(ਯਾਦ ਰੱਖੋ ਕਿ ਤੁਸੀਂ ਭੁਗਤਾਨਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਅਤੇ ਦੇਖਣ ਲਈ ਕਿ gateway ਸਹੀ ਤਰ੍ਹਾਂ ਸੈੱਟ ਹੋਇਆ ਹੈ, **sandbox mode** ਵਰਤ ਸਕਦੇ ਹੋ। ਬੱਸ ਸੰਬੰਧਿਤ ਸੈਕਸ਼ਨ ਨੂੰ toggle ਕਰੋ।)

![PayPal API credentials ਖੇਤਰ ਅਤੇ sandbox mode toggle](/img/config/settings-payment-gateways.png)

ਆਪਣੇ PayPal account ਲਈ API Signature ਜਾਂ Certificate credentials ਮੰਗਣ ਲਈ:

  1. ਆਪਣੀਆਂ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) 'ਤੇ ਜਾਓ।

  2. **API access** ਸੈਕਸ਼ਨ ਵਿੱਚ, **Update** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।  
![API access ਸੈਕਸ਼ਨ ਨਾਲ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** ਦੇ ਹੇਠਾਂ, **Manage API credentials** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ਜੇ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ API Signature ਜਾਂ Certificate ਬਣਾਇਆ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਉਸ ਪੇਜ 'ਤੇ ਭੇਜ ਦਿੱਤਾ ਜਾਵੇਗਾ ਜਿੱਥੇ ਤੁਸੀਂ ਆਪਣੀਆਂ credentials ਲੱਭ ਸਕਦੇ ਹੋ।

     * _**ਨੋਟ:** ਜੇ ਤੁਹਾਨੂੰ ਆਪਣਾ PayPal account ਵੈਰੀਫਾਈ ਕਰਨ ਲਈ ਕਿਹਾ ਜਾਵੇ, ਤਾਂ ਸਕ੍ਰੀਨ 'ਤੇ ਦਿੱਤੀਆਂ ਹਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।_

  4. ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਵਿੱਚੋਂ _ਇੱਕ_ ਚੁਣੋ, ਫਿਰ **Agree and Submit** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

     * **Request API Signature** – API Signature authentication ਲਈ ਚੁਣੋ।

     * **Request API Certificate** – API Certificate authentication ਲਈ ਚੁਣੋ।

  5. PayPal ਤੁਹਾਡੀਆਂ API credentials ਇਸ ਤਰ੍ਹਾਂ ਬਣਾਉਂਦਾ ਹੈ:  
![PayPal ਦੁਆਰਾ ਬਣਾਈਆਂ API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ਵਿੱਚ API Username, API Password, ਅਤੇ Signature ਸ਼ਾਮਲ ਹਨ, ਜੋ ਕਦੇ ਖਤਮ ਨਹੀਂ ਹੁੰਦੇ। ਇਹ ਮੁੱਲ ਵਧੇਰੇ ਸੁਰੱਖਿਆ ਲਈ ਮੂਲ ਰੂਪ ਵਿੱਚ ਲੁਕੇ ਹੁੰਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਨੂੰ ਦਿਖਾਉਣ ਜਾਂ ਲੁਕਾਉਣ ਲਈ **Show/Hide** 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਹੋ ਜਾਣ 'ਤੇ, **Done** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

     * **API Certificate credentials** ਵਿੱਚ API Username, API Password, ਅਤੇ Certificate ਸ਼ਾਮਲ ਹਨ, ਜੋ ਤਿੰਨ ਸਾਲਾਂ ਬਾਅਦ ਆਪਣੇ ਆਪ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ। API Certificate ਨੂੰ ਆਪਣੇ desktop 'ਤੇ ਸੇਵ ਕਰਨ ਲਈ **Download Certificate** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

ਬੱਸ, ਤੁਹਾਡਾ PayPal payment integration ਪੂਰਾ ਹੋ ਗਿਆ!

ਜੇ ਤੁਹਾਡੇ PayPal settings ਬਾਰੇ ਕੋਈ ਸਵਾਲ ਹਨ, ਤਾਂ ਤੁਸੀਂ PayPal ਦੇ [Help Center](https://www.paypal.com/br/smarthelp/home) 'ਤੇ ਜਾ ਸਕਦੇ ਹੋ।
