---
title: ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰਨਾ
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰਨਾ (v2)

_**ਮਹੱਤਵਪੂਰਨ ਨੋਟ: ਇਹ ਲੇਖ Ultimate Multisite ਵਰਜਨ 2.x ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ।**_

Ultimate Multisite ਵਿੱਚ ਅੰਦਰੂਨੀ membership ਅਤੇ billing ਸਿਸਟਮ ਹੈ। ਸਾਡੇ billing ਸਿਸਟਮ ਦੇ ਕੰਮ ਕਰਨ ਲਈ, ਅਸੀਂ e-commerce ਵਿੱਚ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਸਭ ਤੋਂ ਆਮ payment gateways ਨੂੰ ਇੰਟੀਗ੍ਰੇਟ ਕੀਤਾ ਹੈ। Ultimate Multisite ਵਿੱਚ ਡਿਫਾਲਟ payment gateways _Stripe_ , _PayPal_ , ਅਤੇ Manual Payment ਹਨ। ਤੁਸੀਂ ਆਪਣੇ-ਆਪਣੇ add-ons ਇੰਸਟਾਲ ਕਰਕੇ ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ _WooCommerce_ , _GoCardless_ ਅਤੇ _Payfast_ ਵੀ ਵਰਤ ਸਕਦੇ ਹੋ।

## ਬੁਨਿਆਦੀ ਸੈਟਿੰਗਾਂ

ਤੁਸੀਂ Ultimate Multisite payment settings ਹੇਠਾਂ ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਵੀ payment gateways ਨੂੰ ਕਨਫਿਗਰ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਸੀਂ ਇਸਨੂੰ **Ultimate Multisite menu > Settings > Payments.** ਤੇ ਜਾ ਕੇ ਲੱਭ ਸਕਦੇ ਹੋ।

![Ultimate Multisite ਵਿੱਚ Payments ਪੈਨਲ ਦਿਖਾਉਂਦਾ Payments settings ਪੰਨਾ](/img/config/payments-settings-page.png)

ਆਪਣਾ payment gateway ਸੈੱਟਅੱਪ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਉਹ ਬੁਨਿਆਦੀ payment settings ਵੇਖੋ ਜੋ ਤੁਸੀਂ ਕਨਫਿਗਰ ਕਰ ਸਕਦੇ ਹੋ:

**ਆਟੋ-ਨਵੀਨੀਕਰਨ ਲਾਜ਼ਮੀ ਬਣਾਓ** **:** ਇਹ ਯਕੀਨੀ ਬਣਾਏਗਾ ਕਿ ਯੂਜ਼ਰ ਵੱਲੋਂ ਚੁਣੀ billing frequency ਦੇ ਅਨੁਸਾਰ ਹਰ billing cycle ਦੇ ਅੰਤ 'ਤੇ ਭੁਗਤਾਨ ਆਪਣੇ ਆਪ ਦੁਹਰਾਇਆ ਜਾਵੇਗਾ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Payments settings ਪੰਨੇ 'ਤੇ Force Auto-Renew toggle setting -->

Ultimate Multisite v2.13.0 auto-renewal ਸਮਰੱਥ ਕੀਤੀ ਹੋਈ recurring membership ਨੂੰ ਸੇਵ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂਚਦਾ ਹੈ ਕਿ active gateway ਕੋਲ reusable renewal credential ਹੈ ਜਾਂ ਨਹੀਂ। renewal credential gateway subscription, billing agreement, saved vault token, ਜਾਂ ਸਮਕੱਖ reusable payment method ਹੋ ਸਕਦਾ ਹੈ। ਜੇ gateway ਰਿਪੋਰਟ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਵਰਤਣਯੋਗ credential ਮੌਜੂਦ ਨਹੀਂ ਹੈ, ਤਾਂ Ultimate Multisite membership ਨੂੰ ਸੇਵ ਕਰਦਾ ਹੈ ਪਰ auto-renewal ਬੰਦ ਕਰ ਦਿੰਦਾ ਹੈ ਅਤੇ missing-credential ਸਥਿਤੀ ਦਰਜ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ administrator ਜਾਂ support flow ਗਾਹਕ ਨੂੰ renewal date ਤੋਂ ਪਹਿਲਾਂ ਭੁਗਤਾਨ ਮੁੜ-authorize ਕਰਨ ਲਈ ਕਹਿ ਸਕੇ।

ਇਹ membership ਨੂੰ auto-renew ਹੁੰਦਾ ਦਿਖਾਈ ਦੇਣ ਤੋਂ ਰੋਕਦਾ ਹੈ ਜਦੋਂ gateway ਸਿਰਫ਼ one-time payments ਹੀ ਇਕੱਠੇ ਕਰ ਸਕਦਾ ਹੈ। Gateway add-ons ਨੂੰ ਪੁਸ਼ਟੀ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ ਕਿ recurring checkouts reusable credential ਸਟੋਰ ਕਰਦੇ ਹਨ, ਖ਼ਾਸ ਕਰਕੇ ਜਦੋਂ gateway one-time capture ਅਤੇ vaulted/subscription payment modes ਦੋਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੋਵੇ।

**ਭੁਗਤਾਨ** **method ਤੋਂ ਬਿਨਾਂ trials ਦੀ ਆਗਿਆ ਦਿਓ:** ਇਹ ਵਿਕਲਪ ਸਮਰੱਥ ਹੋਣ ਨਾਲ ਤੁਹਾਡੇ client ਨੂੰ registration process ਦੌਰਾਨ ਕੋਈ ਵੀ ਵਿੱਤੀ ਜਾਣਕਾਰੀ ਜੋੜਣੀ ਨਹੀਂ ਪਵੇਗੀ। ਇਹ ਸਿਰਫ਼ trial period ਖਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਹੀ ਲੋੜੀਂਦੀ ਹੋਵੇਗੀ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Payments settings ਪੰਨੇ 'ਤੇ Allow Trials Without Payment Method toggle -->

**ਭੁਗਤਾਨ ਦੀ ਪੁਸ਼ਟੀ 'ਤੇ invoice ਭੇਜੋ:** ਇਹ ਤੁਹਾਨੂੰ ਇਹ ਵਿਕਲਪ ਦਿੰਦਾ ਹੈ ਕਿ ਭੁਗਤਾਨ ਤੋਂ ਬਾਅਦ invoice ਭੇਜਣਾ ਹੈ ਜਾਂ ਨਹੀਂ। ਧਿਆਨ ਦਿਓ ਕਿ ਯੂਜ਼ਰਾਂ ਨੂੰ ਆਪਣੇ subsite dashboard ਹੇਠਾਂ ਆਪਣੇ payment history ਤੱਕ ਪਹੁੰਚ ਹੋਵੇਗੀ। ਇਹ ਵਿਕਲਪ Manual Gateway 'ਤੇ ਲਾਗੂ ਨਹੀਂ ਹੁੰਦਾ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Payments settings ਪੰਨੇ 'ਤੇ Send Invoice on Payment Confirmation toggle -->

**Invoice numbering scheme:** ਇੱਥੇ, ਤੁਸੀਂ payment reference code ਜਾਂ sequential number scheme ਵਿੱਚੋਂ ਕੋਈ ਇੱਕ ਚੁਣ ਸਕਦੇ ਹੋ। ਜੇ ਤੁਸੀਂ ਆਪਣੇ invoices ਲਈ payment reference code ਵਰਤਣਾ ਚੁਣਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਕੁਝ ਵੀ ਕਨਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ। ਜੇ ਤੁਸੀਂ sequential number scheme ਵਰਤਣਾ ਚੁਣਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ **next invoice number** ਕਨਫਿਗਰ ਕਰਨਾ ਪਵੇਗਾ (ਇਹ ਨੰਬਰ system 'ਤੇ ਜਨਰੇਟ ਕੀਤੇ ਅਗਲੇ invoice ਲਈ invoice number ਵਜੋਂ ਵਰਤਿਆ ਜਾਵੇਗਾ। ਹਰ ਵਾਰ ਨਵਾਂ invoice ਬਣਨ 'ਤੇ ਇਹ ਇੱਕ ਨਾਲ ਵੱਧਦਾ ਹੈ। ਤੁਸੀਂ invoice sequential number ਨੂੰ ਕਿਸੇ ਖਾਸ ਮੁੱਲ 'ਤੇ reset ਕਰਨ ਲਈ ਇਸਨੂੰ ਬਦਲ ਕੇ ਸੇਵ ਕਰ ਸਕਦੇ ਹੋ) ਅਤੇ **invoice number prefix.** ਕਨਫਿਗਰ ਕਰਨਾ ਪਵੇਗਾ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Payment Reference Code ਅਤੇ Sequential Number ਵਿਕਲਪਾਂ ਵਾਲਾ Invoice numbering scheme dropdown -->

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Sequential Number ਚੁਣੇ ਜਾਣ 'ਤੇ ਦਿਖਾਏ ਗਏ Next invoice number ਅਤੇ invoice number prefix fields -->

## gateways ਕਿੱਥੇ ਲੱਭਣੇ ਹਨ:

ਤੁਸੀਂ ਉਸੇ ਪੰਨੇ 'ਤੇ payment gateways ਸੈੱਟਅੱਪ ਕਰ ਸਕਦੇ ਹੋ ( **Ultimate Multisite > Settings > Payments**)। **active payment gateways** ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ, ਤੁਸੀਂ ਵੇਖ ਸਕੋਗੇ: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ਅਤੇ _Manual_।

![Stripe, Stripe Checkout, PayPal ਅਤੇ Manual ਨੂੰ ਸੂਚੀਬੱਧ ਕਰਦਾ Active Payment Gateways ਸੈਕਸ਼ਨ](/img/config/payments-active-gateways.png)

ਸਾਡੇ ਕੋਲ ਹਰ payment gateway ਲਈ ਇੱਕ ਸਮਰਪਿਤ ਲੇਖ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਇਸਨੂੰ ਸੈੱਟਅੱਪ ਕਰਨ ਦੇ ਕਦਮਾਂ ਰਾਹੀਂ ਮਾਰਗਦਰਸ਼ਨ ਕਰੇਗਾ, ਜਿਸਨੂੰ ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ links 'ਤੇ ਲੱਭ ਸਕਦੇ ਹੋ।

ਤੁਸੀਂ payment details ਵੇਖ ਅਤੇ ਸੋਧ ਸਕਦੇ ਹੋ:

![Payment edit interface](/img/admin/payment-edit.png)

ਇੱਥੇ payment edit page ਦਾ ਪੂਰਾ view ਹੈ:

![Payment edit full interface](/img/admin/payment-edit-full.png)

ਇੱਥੇ payment gateways settings ਦਾ ਵੀ ਪੂਰਾ view ਹੈ:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway ਸੈੱਟਅੱਪ ਕਰਨਾ**

**PayPal gateway ਸੈੱਟਅੱਪ ਕਰਨਾ**** **

**manual payments ਸੈੱਟਅੱਪ ਕਰਨਾ**

ਹੁਣ, ਜੇ ਤੁਸੀਂ ਆਪਣੇ payment gateway ਵਜੋਂ _WooCommerce_ , _GoCardless_ ਜਾਂ _Payfast_ ਵਰਤਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ **ਉਨ੍ਹਾਂ ਦੇ add-ons ਇੰਸਟਾਲ ਅਤੇ ਕਨਫਿਗਰ ਕਰਨੇ ਪੈਣਗੇ**।

### WooCommerce add-on ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ:

ਅਸੀਂ ਸਮਝਦੇ ਹਾਂ ਕਿ _Stripe_ ਅਤੇ _PayPal_ ਕੁਝ ਦੇਸ਼ਾਂ ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ ਹਨ, ਜੋ Ultimate Multisite ਯੂਜ਼ਰਾਂ ਨੂੰ ਸਾਡੇ ਪਲੱਗਇਨ ਨੂੰ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਢੰਗ ਨਾਲ ਵਰਤਣ ਤੋਂ ਸੀਮਿਤ ਜਾਂ ਰੁਕਾਵਟ ਪਾਉਂਦਾ ਹੈ। ਇਸ ਲਈ ਅਸੀਂ _WooCommerce,_ ਨੂੰ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨ ਲਈ ਇੱਕ add-on ਬਣਾਇਆ, ਜੋ ਬਹੁਤ ਲੋਕਪ੍ਰਿਯ e-commerce ਪਲੱਗਇਨ ਹੈ। ਦੁਨੀਆ ਭਰ ਦੇ developers ਨੇ ਇਸ ਨਾਲ ਵੱਖ-ਵੱਖ payment gateways ਨੂੰ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨ ਲਈ add-ons ਬਣਾਏ। ਅਸੀਂ ਇਸਦਾ ਲਾਭ ਲੈ ਕੇ ਉਹ payment gateways ਵਧਾਏ ਹਨ ਜੋ ਤੁਸੀਂ Ultimate Multisite billing system ਨਾਲ ਵਰਤ ਸਕਦੇ ਹੋ।

_**ਮਹੱਤਵਪੂਰਨ:** Ultimate Multisite: WooCommerce Integration ਲਈ WooCommerce ਘੱਟੋ-ਘੱਟ ਤੁਹਾਡੀ main site 'ਤੇ activated ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।_

ਪਹਿਲਾਂ, ਕਿਰਪਾ ਕਰਕੇ add-ons page 'ਤੇ ਜਾਓ। ਤੁਸੀਂ ਇਸਨੂੰ **Ultimate Multisite > Settings** ਤੇ ਜਾ ਕੇ ਲੱਭ ਸਕਦੇ ਹੋ। ਤੁਹਾਨੂੰ **Add-ons** table ਦਿਖਾਈ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ। **Check our Add-ons** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Check our Add-ons link ਨਾਲ Ultimate Multisite Settings sidebar 'ਤੇ Add-ons table -->

**Check our Add-ons** 'ਤੇ ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ add-ons page 'ਤੇ redirected ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ ਤੁਸੀਂ ਸਾਰੇ Ultimate Multisite add-ons ਲੱਭ ਸਕਦੇ ਹੋ। **Ultimate Multisite: WooCommerce Integration** add-on 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![WooCommerce Integration ਸਮੇਤ Ultimate Multisite add-ons ਨੂੰ ਸੂਚੀਬੱਧ ਕਰਦਾ Add-ons page](/img/addons/addons-page.png)

ਇੱਕ ਵਿੰਡੋ ਐਡ-ਆਨ ਵੇਰਵਿਆਂ ਨਾਲ ਖੁੱਲ੍ਹੇਗੀ। ਬਸ **ਹੁਣ ਇੰਸਟਾਲ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Ultimate Multisite WooCommerce ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਐਡ-ਆਨ ਵੇਰਵਾ ਡਾਇਲਾਗ, ਹੁਣ ਇੰਸਟਾਲ ਕਰੋ ਬਟਨ ਨਾਲ -->

ਇੰਸਟਾਲੇਸ਼ਨ ਪੂਰੀ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ plugins ਪੰਨੇ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ, ਬਸ **ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ WooCommerce ਐਡ-ਆਨ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਹੋ ਜਾਵੇਗਾ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: WooCommerce ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਐਡ-ਆਨ ਲਈ ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਕਰੋ ਲਿੰਕ ਵਾਲਾ plugins ਪੰਨਾ -->

ਇਸਨੂੰ ਸਰਗਰਮ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਹਾਲੇ ਵੀ ਆਪਣੀ ਵੈੱਬਸਾਈਟ 'ਤੇ WooCommerce plugin ਇੰਸਟਾਲ ਅਤੇ ਸਰਗਰਮ ਨਹੀਂ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਇੱਕ ਯਾਦ ਦਿਹਾਨੀ ਮਿਲੇਗੀ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: WooCommerce plugin ਇੰਸਟਾਲ ਅਤੇ ਸਰਗਰਮ ਕਰਨ ਲਈ ਪ੍ਰਸ਼ਾਸਕ ਨੂੰ ਯਾਦ ਦਿਵਾਉਂਦਾ ਐਡਮਿਨ ਨੋਟਿਸ -->

WooCommerce ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਐਡ-ਆਨ ਬਾਰੇ ਹੋਰ ਪੜ੍ਹਨ ਲਈ, **ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ**।

### GoCardless ਐਡ-ਆਨ ਨੂੰ ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ:

_GoCardless_ ਐਡ-ਆਨ ਨੂੰ ਇੰਸਟਾਲ ਕਰਨ ਦੇ ਕਦਮ ਲਗਭਗ _WooCommerce_ ਐਡ-ਆਨ ਵਰਗੇ ਹੀ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਐਡ-ਆਨ ਪੰਨੇ 'ਤੇ ਜਾਓ ਅਤੇ **Ultimate Multisite: GoCardless ਗੇਟਵੇ** ਐਡ-ਆਨ ਚੁਣੋ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Ultimate Multisite GoCardless ਗੇਟਵੇ ਐਡ-ਆਨ ਹਾਈਲਾਈਟ ਕੀਤਾ ਹੋਇਆ ਐਡ-ਆਨ ਪੰਨਾ -->

ਐਡ-ਆਨ ਵਿੰਡੋ ਖੁੱਲ੍ਹੇਗੀ। **ਹੁਣ ਇੰਸਟਾਲ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Ultimate Multisite GoCardless ਗੇਟਵੇ ਐਡ-ਆਨ ਵੇਰਵਾ ਡਾਇਲਾਗ, ਹੁਣ ਇੰਸਟਾਲ ਕਰੋ ਬਟਨ ਨਾਲ -->

ਇੰਸਟਾਲੇਸ਼ਨ ਪੂਰੀ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ plugins ਪੰਨੇ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ, ਬਸ **ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ _GoCardless_ ਐਡ-ਆਨ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਹੋ ਜਾਵੇਗਾ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: GoCardless ਗੇਟਵੇ ਐਡ-ਆਨ ਲਈ ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਕਰੋ ਲਿੰਕ ਵਾਲਾ plugins ਪੰਨਾ -->

_GoCardless_ ਗੇਟਵੇ ਨਾਲ ਸ਼ੁਰੂਆਤ ਕਿਵੇਂ ਕਰਨੀ ਹੈ ਇਹ ਜਾਣਨ ਲਈ, **ਇਹ ਲੇਖ ਪੜ੍ਹੋ**।

### Payfast ਐਡ-ਆਨ ਨੂੰ ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ:

ਐਡ-ਆਨ ਪੰਨੇ 'ਤੇ ਜਾਓ ਅਤੇ **Ultimate Multisite: Payfast ਗੇਟਵੇ** ਐਡ-ਆਨ ਚੁਣੋ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Ultimate Multisite Payfast ਗੇਟਵੇ ਐਡ-ਆਨ ਹਾਈਲਾਈਟ ਕੀਤਾ ਹੋਇਆ ਐਡ-ਆਨ ਪੰਨਾ -->

ਐਡ-ਆਨ ਵਿੰਡੋ ਖੁੱਲ੍ਹੇਗੀ। **ਹੁਣ ਇੰਸਟਾਲ ਕਰੋ।** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Ultimate Multisite Payfast ਗੇਟਵੇ ਐਡ-ਆਨ ਵੇਰਵਾ ਡਾਇਲਾਗ, ਹੁਣ ਇੰਸਟਾਲ ਕਰੋ ਬਟਨ ਨਾਲ -->

ਇੰਸਟਾਲੇਸ਼ਨ ਪੂਰੀ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ plugins ਪੰਨੇ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ। ਇੱਥੇ, ਬਸ **ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਕਰੋ** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ _Payfast_ ਐਡ-ਆਨ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਹੋ ਜਾਵੇਗਾ।

<!-- ਸਕ੍ਰੀਨਸ਼ਾਟ ਉਪਲਬਧ ਨਹੀਂ: Payfast ਗੇਟਵੇ ਐਡ-ਆਨ ਲਈ ਨੈੱਟਵਰਕ 'ਤੇ ਸਰਗਰਮ ਕਰੋ ਲਿੰਕ ਵਾਲਾ plugins ਪੰਨਾ -->
