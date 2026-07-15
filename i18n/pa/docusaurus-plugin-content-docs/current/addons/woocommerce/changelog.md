---
title: WooCommerce ਏਕੀਕਰਨ ਤਬਦੀਲੀਆਂ ਦਾ ਲੌਗ
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤਬਦੀਲੀ ਲਾਗ

ਵਰਜਨ 2.2.0 - 2026-07-01 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ
* ਨਵਾਂ: Ultimate Multisite ਟੈਕਸ ਰਕਮਾਂ ਹੁਣ checkout 'ਤੇ ਵੱਖਰੀਆਂ WooCommerce ਫੀਸ ਲਾਈਨਾਂ ਵਜੋਂ ਦਿਖਾਈ ਦਿੰਦੀਆਂ ਹਨ, ਜਿਸ ਨਾਲ ਭੁਗਤਾਨ ਤੋਂ ਪਹਿਲਾਂ ਟੈਕਸ ਕੁੱਲ ਹੋਰ ਸਪਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ।
* ਨਵਾਂ: ਉਹਨਾਂ sites ਲਈ ਇੱਕ ਚੋਣਵੀਂ "ਅਸਫਲ ਨਵੀਨੀਕਰਨਾਂ 'ਤੇ Memberships ਤੁਰੰਤ Suspend ਕਰੋ" ਸੈਟਿੰਗ ਅਤੇ `wu_woo_suspend_on_payment_failure` ਫਿਲਟਰ ਜੋੜਿਆ ਗਿਆ ਹੈ ਜੋ WooCommerce Subscriptions ਮੁੜ-ਕੋਸ਼ਿਸ਼ ਵਿੰਡੋ ਦੌਰਾਨ ਅਸਫਲ-ਨਵੀਨੀਕਰਨ suspension ਚਾਹੁੰਦੇ ਹਨ।
* ਸੁਧਾਰ: ਉਹ WooCommerce Subscription statuses ਮਿਲਾਏ ਗਏ ਜੋ ਅਸਫਲ ਜਾਂ ਮੁੜ-ਸਫਲ ਨਵੀਨੀਕਰਨਾਂ ਤੋਂ ਬਾਅਦ Ultimate Multisite memberships ਨਾਲ sync ਤੋਂ ਬਾਹਰ ਰਹਿ ਸਕਦੇ ਸਨ।
* ਸੁਧਾਰ: ਜਦੋਂ Ultimate Multisite ਮੁਦਰਾ ਸੂਚੀ ਵਿੱਚ WooCommerce ਸਟੋਰ ਮੁਦਰਾ ਗੁੰਮ ਸੀ, ਤਾਂ ਇਸਨੂੰ ਜੋੜਿਆ ਗਿਆ।
* ਸੁਧਾਰ: subscribers ਨੂੰ WooCommerce checkout ਵੱਲ redirect ਕਰਦੇ ਸਮੇਂ customer billing ਵੇਰਵੇ ਸੰਭਾਲੇ ਗਏ।
* ਸੁਧਾਰਿਆ: Jetpack Autoloader 5 ਨਾਲ compatibility ਜੋੜੀ ਗਈ।
* ਸੁਧਾਰਿਆ: release package generation ਸਾਫ਼ ਕੀਤਾ ਗਿਆ ਤਾਂ ਜੋ GitHub ਅਤੇ marketplace zips ਵਿੱਚ nested staging directories ਅਤੇ development files ਤੋਂ ਬਚਿਆ ਜਾ ਸਕੇ।

ਵਰਜਨ 2.0.6 - 2026-01-16 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ
* ਸੁਧਾਰ: addon ਵਿੱਚ core subscriptions ਸ਼ਾਮਲ ਕਰੋ। ਹੁਣ Woocommerce Subscriptinos extension ਦੀ ਲੋੜ ਨਹੀਂ।

ਵਰਜਨ 2.0.5 - 2026-01-09 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ
* ਸੁਧਾਰ: glotpress API ਤੋਂ translations ਲੋਡ ਕਰੋ।
* ਸੁਧਾਰ: ਕੁਝ page builders ਵਿੱਚ fatal error।
* ਸੁਧਾਰ: ਜਦੋਂ customer main site ਦਾ member ਹੋਵੇ ਤਾਂ infinite redirect।

ਵਰਜਨ 2.0.4 - 2025-11-14 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ
* ਜੋੜਿਆ: ਹੋਰ ਬਹੁਤ ਸਾਰੀਆਂ ਭਾਸ਼ਾਵਾਂ ਲਈ translations।
* ਬਦਲਿਆ: ਨਾਮ Ultimate Multisite: Woocommerce Integration ਰੱਖਿਆ ਗਿਆ।
* ਜੋੜਿਆ: Woocommerce 10.2.1 ਨਾਲ compatibility।
* ਜੋੜਿਆ: Woocommerce Subscriptions 7.7.0 ਨਾਲ compatibility।
* ਸੁਧਾਰ: PHP 8.4 ਨਾਲ compatibility
* ਸੁਧਾਰ: Redirect ਪਰ ਜਦੋਂ ਕੋਈ WC account page ਮੌਜੂਦ ਨਾ ਹੋਵੇ।

ਵਰਜਨ 2.0.3 - 2025-08-13 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ
* ਬਦਲਿਆ: ਨਵੇਂ marketplace ਨਾਲ automatic updates enabled ਕੀਤੇ ਗਏ।

ਵਰਜਨ 2.0.2 - 2025-07-05 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ
* ਬਦਲਿਆ: ਨਾਮ Multisite Ultimate: Woocommerce Integration ਰੱਖਿਆ ਗਿਆ।
* ਜੋੜਿਆ: Woocommerce 9.8.1 ਨਾਲ compatibility।
* ਜੋੜਿਆ: Woocommerce Subscriptions 7.3.0 ਨਾਲ compatibility।
* ਸੁਧਾਰ: customer ਵੱਲੋਂ subscription cancel ਕਰਨਾ।
* ਸੁਧਾਰ: checkout block ਵਰਤਦੇ ਸਮੇਂ fatal error।
* ਸੁਧਾਰ: ਹੁਣ Woocommerce high performance custom order tables ਨਾਲ compatible।
* ਸੁਧਾਰ: WooCommerce checkout 'ਤੇ cancel ਕਰਨਾ ਫਿਰ ਵੀ membership ਨੂੰ upgrade ਕਰ ਸਕਦਾ ਹੈ।

ਵਰਜਨ 2.0.1 - 2023-08-09 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ

* ਜੋੜਿਆ: Woocommerce 7.9.0 ਨਾਲ compatibility।
* ਜੋੜਿਆ: Woocommerce Subscriptions 5.3.0 ਨਾਲ compatibility।
* ਜੋੜਿਆ: membership updates ਲਈ support।
* ਜੋੜਿਆ: Woocommerce ਵਿੱਚ trials ਅਤੇ setup fees ਬਾਰੇ notices।
* ਜੋੜਿਆ: meta value ਨਾਲ Ultimate Multisite Woocommerce products ਦੀ identification।
* ਜੋੜਿਆ: ਸਾਰੇ Ultimate Multisite ਸੰਬੰਧਿਤ Woocommerce products ਨੂੰ mark ਕਰਨ ਲਈ ਇੱਕ one-time fix inserted ਕੀਤਾ।
* ਜੋੜਿਆ: Ultimate Multisite ਵੱਲੋਂ ਬਣਾਏ products ਨੂੰ Woocommerce ਸੂਚੀ ਤੋਂ ਹਟਾਇਆ।
* ਸੁਧਾਰ: cart 'ਤੇ ਲਾਗੂ ਕਰਨ ਲਈ ਇੱਕ non-recurring Woocommerce discount ਬਣਾਇਆ।
* ਸੁਧਾਰ: Woocommerce product ਵਿੱਚ recurring discount restore ਕੀਤਾ।
* ਸੁਧਾਰ: Woocommerce product ਵਿੱਚ recurring discount label ਜੋੜਿਆ।
* ਸੁਧਾਰ: checkout 'ਤੇ product type ਯਕੀਨੀ ਬਣਾਇਆ।
* ਸੁਧਾਰ: downgrade ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ membership status ਕਾਇਮ ਰੱਖਿਆ।
* ਸੁਧਾਰ: cancellation ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ errors ਤੋਂ ਬਚਣ ਲਈ ਜਾਂਚਿਆ ਕਿ subscription ਮੌਜੂਦ ਹੈ ਜਾਂ ਨਹੀਂ।
* ਸੁਧਾਰ: Woocommerce subscriptions ਵਿੱਚ ਵਰਤਣ ਲਈ start subscription date ਜੋੜੀ।
* ਅੰਦਰੂਨੀ: ਇੱਕ ਨਵੀਂ PHP 8.1 build ਪ੍ਰਕਿਰਿਆ ਲਾਗੂ ਕੀਤੀ।

ਵਰਜਨ 2.0.0 - ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁੜ-ਲਿਖਤ।

* ਜੋੜਿਆ: gateway ਬਦਲਣ ਜਾਂ membership cancel ਕਰਨ ਵੇਲੇ woo subscription ਹਟਾਉਣ ਲਈ cancellation method process ਕਰੋ;
* ਜੋੜਿਆ: memberships ਨੂੰ downgrade ਅਤੇ upgrade ਕਰਨ ਲਈ handler;
* ਸੁਧਾਰ: account update ਦੀ ਇਜਾਜ਼ਤ ਦੇਣ ਲਈ subsites ਵਿੱਚ customer update form 'ਤੇ woocommerce dependencies ਲੋਡ ਕਰੋ;
* ਸੁਧਾਰ: ਜੇ ਮੌਜੂਦ ਨਾ ਹੋਵੇ ਤਾਂ Woocommerce cart ਸਹੀ ਤਰ੍ਹਾਂ ਲੋਡ ਕਰੋ;
* ਸੁਧਾਰ: checkout process ਕਰਦੇ ਸਮੇਂ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਅਸੀਂ main site tables 'ਤੇ ਹਾਂ;
* ਸੁਧਾਰ: Ultimo renewal order ਨੂੰ Woocommerce subscription order value ਦੇ ਆਧਾਰ 'ਤੇ ਬਣਾਓ, last payment ਤੋਂ ਨਹੀਂ;
* ਸੁਧਾਰ: WU Membership button link;
* ਸੁਧਾਰ: ਜਦੋਂ Woocommerce subscriptions renewal ਦਾ ਭੁਗਤਾਨ ਹੋ ਗਿਆ ਹੋਵੇ ਤਾਂ Ultimo order ਨੂੰ paid ਵਜੋਂ set ਕਰੋ;
* Build: MPB ਨੂੰ builder ਵਜੋਂ ਜੋੜੋ;

ਵਰਜਨ 2.0.0-beta-5 - 2022-01-21 ਨੂੰ ਜਾਰੀ ਕੀਤਾ ਗਿਆ

* ਅੰਦਰੂਨੀ: hooks ਅਤੇ filters generator ਜੋੜਿਆ;
* ਅੰਦਰੂਨੀ: developer quality of life ਲਈ Ultimate Multisite stubs ਜੋੜੇ;
* ਸੁਧਾਰਿਆ: ਜਦੋਂ ਲੋੜੀਂਦਾ ਨਾ ਹੋਵੇ ਤਾਂ multiple products ਦੀ creation ਨੂੰ ਰੋਕੋ;

ਵਰਜਨ 2.0.0-beta.4 - 2021-09-23

* ਸੁਧਾਰ: WooCommerce ਨੂੰ ਸਿਰਫ਼ main site ਦੀ ਬਜਾਏ network active ਹੋਣ ਦੀ ਲੋੜ;
* ਸੁਧਾਰ: add-on ਨੂੰ mu-plugin ਵਜੋਂ ਵਰਤਣ ਦੀ ਇਜਾਜ਼ਤ ਦੇਣ ਲਈ filter ਜੋੜਿਆ;

ਵਰਜਨ 2.0.0-beta.3 - 2021-05-28

* ਸੁਧਾਰ: dashboard access control ਬਹੁਤ ਜ਼ਿਆਦਾ aggressive ਸੀ;
* ਸੁਧਾਰ: Ultimate Multisite top-menu ਵਿੱਚ WooCommerce help links ਜੋੜੇ;

ਵਰਜਨ 2.0.0-beta.2 - 2021-05-04

* ਸੁਧਾਰ: WCS renewal order creation 'ਤੇ Ultimo ਵਿੱਚ pending payments ਬਣਾਉਂਦਾ ਹੈ;
* ਸੁਧਾਰ: Ultimate Multisite customer data ਨਾਲ billing fields pre-fill ਕਰਦਾ ਹੈ;
* ਸੁਧਾਰ: gateways ਲਈ billing fields ਵਾਪਸ ਜੋੜਦਾ ਹੈ;

ਵਰਜਨ 2.0.0-beta.1 - 2021-05-04

* ਸ਼ੁਰੂਆਤੀ beta release

-- ਪੁਰਾਣੇ ਵਰਜਨ --

ਵਰਜਨ 1.2.6 - 26/03/2020

* ਸੁਧਾਰਿਆ: WooCommerce Subscriptions ਦੇ ਨਵੇਂ versions ਨਾਲ ਛੋਟੀ incompatibility;

ਵਰਜਨ 1.2.5 - 26/08/2019

* ਸੁਧਾਰਿਆ: ਪਿਛਲੀ release ਵਿੱਚ error;

ਵਰਜਨ 1.2.4 - 22/08/2019

* ਸੁਧਾਰਿਆ: integration ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ WooCommerce checkout screen ਵੱਲ redirect ਕਰਨ ਲਈ option ਜੋੜਿਆ;

ਵਰਜਨ 1.2.3 - 26/05/2019

* ਸੁਧਾਰਿਆ: WooCommerce ਲਈ payment email ਕੁਝ edge cases ਵਿੱਚ ਗਾਇਬ ਹੋ ਗਈ;

ਵਰਜਨ 1.2.2 - 27/02/2019

* ਜੋੜਿਆ: WooCommerce Subscription integration 'ਤੇ setup fees ਲਈ support;

ਵਰਜਨ 1.2.1 - 17/11/2018

* ਸੁਧਾਰਿਆ: Ultimate Multisite version 1.9.0 ਨਾਲ compatibility issues;

ਵਰਜਨ 1.2.0 - 10/09/2018

* ਸੁਧਾਰਿਆ: add-ons ਲਈ ਨਵਾਂ updates URL;
* ਜੋੜਿਆ: WooCommerce Subscription ਲਈ beta support;

ਵਰਜਨ 1.1.2 - 11/02/2018

* ਸੁਧਾਰਿਆ: WooCommerce endpoints ਵਿੱਚ changes ਦਾ ਜਵਾਬ ਦੇਣ ਲਈ Pay ਦਾ link dynamically generated ਹੋਣਾ;
* ਸੁਧਾਰਿਆ: ਅਸੀਂ ਹੁਣ ਆਪਣੇ orders ਲਈ completed status ਨੂੰ force ਕਰਦੇ ਹਾਂ ਜਦੋਂ payment_completed call ਹੁੰਦਾ ਹੈ, ਤਾਂ ਜੋ ਯਕੀਨੀ ਬਣੇ ਕਿ ਸਾਡੇ renewal hooks ਉਦੋਂ ਚੱਲਣ ਜਦੋਂ ਉਹਨਾਂ ਨੂੰ ਚੱਲਣਾ ਚਾਹੀਦਾ ਹੈ;

Version 1.1.1 - 24/01/2018

* ਠੀਕ ਕੀਤਾ: ਹੁਣ ਇਹ ਇਹ ਵੀ ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੀ WooCommerce ਮੁੱਖ ਸਾਈਟ 'ਤੇ ਹੁਣੇ ਹੀ ਸਰਗਰਮ ਕੀਤਾ ਗਿਆ ਹੈ;
* ਠੀਕ ਕੀਤਾ: ਆਰਡਰ ਬਣਾਉਣ ਵਿੱਚ ਟੈਕਸ ਸ਼ਾਮਲ ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਣ ਲਈ over-loadings ਸ਼ਾਮਲ ਕੀਤੀਆਂ;

Version 1.1.0 - 04/11/2017

* ਠੀਕ ਕੀਤਾ: ਹੁਣ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਬਟਨ ਦਾ ਲੇਬਲ ਸੈਟਿੰਗਾਂ ਨੂੰ ਦਰਸਾਉਣ ਲਈ ਵਾਸਤਵ ਵਿੱਚ ਬਦਲਦਾ ਹੈ। Ultimate Multisite 1.5.0 ਦੀ ਲੋੜ ਹੈ;
* ਠੀਕ ਕੀਤਾ: WooCommerce Integration ਹੁਣ ਤਦ ਵੀ ਕੰਮ ਕਰਦਾ ਹੈ ਜੇ WooCommerce ਨੈੱਟਵਰਕ ਸਰਗਰਮ ਨਹੀਂ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਮੁੱਖ ਸਾਈਟ ਵਿੱਚ ਸਰਗਰਮ ਹੈ;

1.0.0 - ਸ਼ੁਰੂਆਤੀ ਰਿਲੀਜ਼
