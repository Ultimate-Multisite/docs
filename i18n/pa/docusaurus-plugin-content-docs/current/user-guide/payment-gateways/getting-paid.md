---
title: ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰਨਾ
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰਨਾ (v2)

_**ਮਹੱਤਵਪੂਰਨ ਨੋਟ: ਇਹ ਲੇਖ Ultimate Multisite ਵਰਜਨ 2.x ਬਾਰੇ ਹੈ।**_

Ultimate Multisite ਵਿੱਚ ਇੱਕ ਬਿਲਟ-ਇਨ ਮੈਂਬਰਸ਼ਿਪ ਅਤੇ ਬਿਲਿੰਗ ਸਿਸਟਮ ਹੈ। ਸਾਡੇ ਬਿਲਿੰਗ ਸਿਸਟਮ ਨੂੰ ਕੰਮ ਕਰਨ ਲਈ, ਅਸੀਂ e-commerce ਵਿੱਚ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਸਭ ਤੋਂ ਆਮ payment gateways ਨੂੰ ਜੋੜਿਆ ਹੈ। Ultimate Multisite ਵਿੱਚ ਡਿਫਾਲਟ payment gateways _Stripe_, _PayPal_, ਅਤੇ Manual Payment ਹਨ। ਤੁਸੀਂ ਆਪਣੇ ਸੰਬੰਧਿਤ add-ons ਇੰਸਟਾਲ ਕਰਕੇ _WooCommerce_, _GoCardless_ ਅਤੇ _Payfast_ ਰਾਹੀਂ ਵੀ ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।

## ਮੁੱਢਲੀਆਂ ਸੈਟਿੰਗਾਂ

ਤੁਸੀਂ Ultimate Multisite payment settings ਅਧੀਨ ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ payment gateway ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਸੀਂ ਇਸਨੂੰ **Ultimate Multisite menu > Settings > Payments** 'ਤੇ ਜਾ ਕੇ ਲੱਭ ਸਕਦੇ ਹੋ।

![Ultimate Multisite ਵਿੱਚ Payment settings ਪੇਜ](/img/config/settings-payment-gateways.png)

ਆਪਣਾ payment gateway ਸੈੱਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਮੁੱਢਲੀਆਂ payment settings 'ਤੇ ਇੱਕ ਨਜ਼ਰ ਮਾਰੋ ਜੋ ਤੁਸੀਂ ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ:

**Force auto-renew:** ਇਹ ਯਕੀਨੀ ਬਣਾਏਗਾ ਕਿ ਭੁਗਤਾਨ ਹਰ billing cycle ਦੇ ਅੰਤ ਵਿੱਚ ਆਪਣੇ ਆਪ ਦੁਹਰਾਇਆ ਜਾਵੇਗਾ, ਉਪਭੋਗਤਾ ਦੁਆਰਾ ਚੁਣੀ ਗਈ billing frequency ਦੇ ਅਨੁਸਾਰ।

![Force auto-renew toggle ਸੈਟਿੰਗ](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** ਇਹ ਵਿਕਲਪ ਚਾਲੂ ਕਰਨ ਨਾਲ ਤੁਹਾਡੇ ਕਲਾਇੰਟ ਨੂੰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ ਕੋਈ ਵਿੱਤੀ ਜਾਣਕਾਰੀ ਦੇਣ ਦੀ ਲੋੜ ਨਹੀਂ ਹੋਵੇਗੀ। ਇਹ ਸਿਰਫ਼ trial period ਖ਼ਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਹੀ ਲੋੜੀਂਦਾ ਹੋਵੇਗਾ।

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** ਇਹ ਤੁਹਾਨੂੰ ਚੋਣ ਦਿੰਦਾ ਹੈ ਕਿ ਭੁਗਤਾਨ ਤੋਂ ਬਾਅਦ invoice ਭੇਜਣਾ ਹੈ ਜਾਂ ਨਹੀਂ। ਨੋਟ ਕਰੋ ਕਿ ਉਪਭੋਗਤਾਵਾਂ ਕੋਲ ਉਹਨਾਂ ਦੇ subsite dashboard ਅਧੀਨ ਉਹਨਾਂ ਦੀ ਭੁਗਤਾਨ ਹਿਸਟਰੀ ਤੱਕ ਪਹੁੰਚ ਹੋਵੇਗੀ। ਇਹ ਵਿਕਲਪ Manual Gateway 'ਤੇ ਲਾਗੂ ਨਹੀਂ ਹੁੰਦਾ।

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** ਇੱਥੇ, ਤੁਸੀਂ payment reference code ਜਾਂ sequential number scheme ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਚੁਣ ਸਕਦੇ ਹੋ। ਜੇਕਰ ਤੁਸੀਂ ਆਪਣੇ invoices ਲਈ payment reference code ਵਰਤਣਾ ਚੁਣਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਕੁਝ ਵੀ ਸੈੱਟ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ। ਜੇਕਰ ਤੁਸੀਂ sequential number scheme ਵਰਤਣਾ ਚੁਣਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ **next invoice number** (ਇਹ ਨੰਬਰ ਸਿਸਟਮ 'ਤੇ ਬਣਾਏ ਗਏ ਅਗਲੇ invoice ਲਈ invoice ਨੰਬਰ ਵਜੋਂ ਵਰਤਿਆ ਜਾਵੇਗਾ। ਹਰ ਵਾਰ ਨਵਾਂ invoice ਬਣਾਉਣ 'ਤੇ ਇਹ ਇੱਕ ਨਾਲ ਵਧਦਾ ਹੈ। ਤੁਸੀਂ ਇਸਨੂੰ ਬਦਲ ਕੇ save ਕਰ ਸਕਦੇ ਹੋ ਤਾਂ ਜੋ invoice sequential number ਨੂੰ ਕਿਸੇ ਖਾਸ ਮੁੱਲ 'ਤੇ ਰੀਸੈੱਟ ਕੀਤਾ ਜਾ ਸਕੇ) ਅਤੇ **invoice number prefix** ਸੈੱਟ ਕਰਨਾ ਪਵੇਗਾ।

![Invoice numbering scheme ਚੋਣ](/img/config/settings-payment-gateways.png)

![Sequential invoice number ਅਤੇ prefix ਸੈਟਿੰਗਾਂ](/img/config/settings-payment-gateways.png)

## Gateways ਕਿੱਥੇ ਲੱਭਣੇ ਹਨ:

ਤੁਸੀਂ ਉਸੇ ਪੇਜ 'ਤੇ payment gateways ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ (**Ultimate Multisite > Settings > Payments**)। **active payment gateways** ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ, ਤੁਸੀਂ ਇਹ ਦੇਖ ਸਕੋਗੇ: _Stripe_, _Stripe Checkout_, _PayPal_ ਅਤੇ _Manual_।

![Active payment gateways ਦੀ ਸੂਚੀ](/img/config/settings-payment-gateways.png)

ਸਾਡੇ ਕੋਲ ਹਰੇਕ payment gateway ਲਈ ਇੱਕ ਵੱਖਰਾ ਲੇਖ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਇਸਨੂੰ ਸੈੱਟ ਕਰਨ ਦੇ ਕਦਮਾਂ ਬਾਰੇ ਦੱਸੇਗਾ, ਜੋ ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਲਿੰਕਾਂ 'ਤੇ ਲੱਭ ਸਕਦੇ ਹੋ।

**Stripe gateway ਸੈੱਟ ਕਰਨਾ**

**PayPal gateway ਸੈੱਟ ਕਰਨਾ**

**Manual payments ਸੈੱਟ ਕਰਨਾ**

ਹੁਣ, ਜੇਕਰ ਤੁਸੀਂ _WooCommerce_, _GoCardless_ ਜਾਂ _Payfast_ ਨੂੰ ਆਪਣੇ payment gateway ਵਜੋਂ ਵਰਤਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ **ਉਹਨਾਂ ਦੇ add-ons ਇੰਸਟਾਲ ਅਤੇ ਸੈੱਟ ਕਰਨੇ ਪੈਣਗੇ**।

### WooCommerce add-on ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ:

ਅਸੀਂ ਸਮਝਦੇ ਹਾਂ ਕਿ _Stripe_ ਅਤੇ _PayPal_ ਕੁਝ ਦੇਸ਼ਾਂ ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ ਹਨ ਜੋ Ultimate Multisite ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਸਾਡਾ plugin ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਢੰਗ ਨਾਲ ਵਰਤਣ ਤੋਂ ਸੀਮਤ ਜਾਂ ਰੋਕਦਾ ਹੈ। ਇਸ ਲਈ ਅਸੀਂ _WooCommerce_ ਨੂੰ ਜੋੜਨ ਲਈ ਇੱਕ add-on ਬਣਾਇਆ, ਜੋ ਇੱਕ ਬਹੁਤ ਪ੍ਰਸਿੱਧ e-commerce plugin ਹੈ। ਦੁਨੀਆ ਭਰ ਦੇ ਡਿਵੈਲਪਰਾਂ ਨੇ ਵੱਖ-ਵੱਖ payment gateways ਨੂੰ ਇਸ ਨਾਲ ਜੋੜਨ ਲਈ add-ons ਬਣਾਏ ਹਨ। ਅਸੀਂ ਇਸ ਦਾ ਫਾਇਦਾ ਉਠਾਇਆ ਤਾਂ ਜੋ Ultimate Multisite billing system ਨਾਲ ਤੁਸੀਂ ਜੋ payment gateways ਵਰਤ ਸਕਦੇ ਹੋ ਉਹਨਾਂ ਨੂੰ ਵਧਾਇਆ ਜਾ ਸਕੇ।

_**ਮਹੱਤਵਪੂਰਨ:** Ultimate Multisite: WooCommerce Integration ਲਈ WooCommerce ਨੂੰ ਘੱਟੋ-ਘੱਟ ਤੁਹਾਡੀ main site 'ਤੇ ਐਕਟੀਵੇਟ ਕੀਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।_

ਪਹਿਲਾਂ, ਕਿਰਪਾ ਕਰਕੇ add-ons ਪੇਜ 'ਤੇ ਜਾਓ। ਤੁਸੀਂ ਇਸਨੂੰ **Ultimate Multisite > Settings** 'ਤੇ ਜਾ ਕੇ ਲੱਭ ਸਕਦੇ ਹੋ। ਤੁਹਾਨੂੰ **Add-ons** ਟੇਬਲ ਦਿਖਾਈ ਦੇਵੇਗੀ। **Check our Add-ons** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Add-ons ਸੈਕਸ਼ਨ ਨਾਲ Settings ਪੇਜ](/img/config/settings-general.png)

**Check our Add-ons** 'ਤੇ ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ add-ons ਪੇਜ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ ਤੁਸੀਂ ਸਾਰੇ Ultimate Multisite add-ons ਲੱਭ ਸਕਦੇ ਹੋ। **Ultimate Multisite: WooCommerce Integration** add-on 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![ਉਪਲਬਧ add-ons ਦੀ ਸੂਚੀ ਵਾਲਾ Add-ons ਪੇਜ](/img/config/settings-general.png)

ਇੱਕ ਵਿੰਡੋ add-on ਵੇਰਵਿਆਂ ਨਾਲ ਖੁੱਲ੍ਹੇਗੀ। ਬੱਸ **Install Now** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![WooCommerce add-on install ਡਾਇਲਾਗ](/img/config/settings-general.png)

ਇੰਸਟਾਲੇਸ਼ਨ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ plugins ਪੇਜ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ, ਬੱਸ **Network Activate** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ WooCommerce add-on ਤੁਹਾਡੇ network 'ਤੇ ਐਕਟੀਵੇਟ ਹੋ ਜਾਵੇਗਾ।

![WooCommerce add-on ਨੂੰ Network Activate ਕਰੋ](/img/config/settings-general.png)

ਇਸਨੂੰ ਐਕਟੀਵੇਟ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਅਜੇ ਵੀ WooCommerce plugin ਤੁਹਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਇੰਸਟਾਲ ਅਤੇ ਐਕਟੀਵੇਟ ਨਹੀਂ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਇੱਕ ਰੀਮਾਈਂਡਰ ਮਿਲੇਗਾ।

![WooCommerce activation ਰੀਮਾਈਂਡਰ ਨੋਟਿਸ](/img/config/settings-general.png)

WooCommerce Integration add-on ਬਾਰੇ ਹੋਰ ਪੜ੍ਹਨ ਲਈ, **ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ**।

### GoCardless add-on ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ:

_GoCardless_ add-on ਇੰਸਟਾਲ ਕਰਨ ਦੇ ਕਦਮ _WooCommerce_ add-on ਵਾਂਗ ਹੀ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ add-ons ਪੇਜ 'ਤੇ ਜਾਓ ਅਤੇ **Ultimate Multisite: GoCardless Gateway** add-on ਚੁਣੋ।

![ਉਪਲਬਧ add-ons ਦੀ ਸੂਚੀ ਵਾਲਾ Add-ons ਪੇਜ](/img/config/settings-general.png)

Add-on ਵਿੰਡੋ ਖੁੱਲ੍ਹੇਗੀ। **Install Now** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![GoCardless add-on install ਡਾਇਲਾਗ](/img/config/settings-general.png)

ਇੰਸਟਾਲੇਸ਼ਨ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ plugins ਪੇਜ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ, ਬੱਸ **Network Activate** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ _GoCardless_ add-on ਤੁਹਾਡੇ network 'ਤੇ ਐਕਟੀਵੇਟ ਹੋ ਜਾਵੇਗਾ।

![GoCardless add-on ਨੂੰ Network Activate ਕਰੋ](/img/config/settings-general.png)

_GoCardless_ gateway ਨਾਲ ਸ਼ੁਰੂ ਕਰਨ ਬਾਰੇ ਜਾਣਨ ਲਈ, **ਇਹ ਲੇਖ ਪੜ੍ਹੋ**।

### Payfast add-on ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ:

Add-ons ਪੇਜ 'ਤੇ ਜਾਓ ਅਤੇ **Ultimate Multisite: Payfast Gateway** add-on ਚੁਣੋ।

![ਉਪਲਬਧ add-ons ਦੀ ਸੂਚੀ ਵਾਲਾ Add-ons ਪੇਜ](/img/config/settings-general.png)

Add-on ਵਿੰਡੋ ਖੁੱਲ੍ਹੇਗੀ। **Install Now** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Payfast add-on install ਡਾਇਲਾਗ](/img/config/settings-general.png)

ਇੰਸਟਾਲੇਸ਼ਨ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ plugins ਪੇਜ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ, ਬੱਸ **Network Activate** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ _Payfast_ add-on ਤੁਹਾਡੇ network 'ਤੇ ਐਕਟੀਵੇਟ ਹੋ ਜਾਵੇਗਾ।

![Payfast add-on ਨੂੰ Network Activate ਕਰੋ](/img/config/settings-general.png)
