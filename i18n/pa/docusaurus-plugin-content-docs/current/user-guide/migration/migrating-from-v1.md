---
title: V1 ਤੋਂ ਮਾਈਗ੍ਰੇਟ ਕਰਨਾ
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 ਤੋਂ ਮਾਈਗ੍ਰੇਟ ਕਰਨਾ

## Ultimate Multisite ਆਪਣੀਆਂ ਅਸਲੀ 1.x ਰੀਲੀਜ਼ਾਂ ਤੋਂ 2.x ਰੀਲੀਜ਼ਾਂ ਵੱਲ ਬਦਲ ਗਿਆ ਹੈ।

Ultimate Multisite ਵਰਜ਼ਨ 2.0 ਅਤੇ ਇਸ ਤੋਂ ਉੱਪਰ ਦੇ ਵਰਜ਼ਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਵੇਂ ਸਿਰੇ ਤੋਂ ਲਿਖੇ ਗਏ ਹਨ, ਮਤਲਬ ਕਿ ਪੁਰਾਣੇ ਅਤੇ ਨਵੇਂ ਵਰਜ਼ਨ ਵਿਚਕਾਰ ਬਹੁਤ ਘੱਟ ਸਾਂਝਾ ਹੈ। ਇਸ ਕਾਰਨ, 1.x ਤੋਂ 2.x ਵਿੱਚ ਅੱਪਗ੍ਰੇਡ ਕਰਨ ਵੇਲੇ, ਤੁਹਾਡੇ ਡਾਟਾ ਨੂੰ ਉਸ ਫਾਰਮੈਟ ਵਿੱਚ ਮਾਈਗ੍ਰੇਟ ਕਰਨਾ ਪਵੇਗਾ ਜੋ ਨਵੇਂ ਵਰਜ਼ਨ ਸਮਝ ਸਕਣ।

ਖੁਸ਼ੀ ਦੀ ਗੱਲ ਹੈ ਕਿ Ultimate Multisite 2.0+ **ਵਿੱਚ ਇੱਕ ਮਾਈਗ੍ਰੇਟਰ ਪਹਿਲਾਂ ਤੋਂ ਸ਼ਾਮਲ ਹੈ** ਜੋ ਪੁਰਾਣੇ ਵਰਜ਼ਨ ਦੇ ਡਾਟਾ ਨੂੰ ਪਛਾਣ ਕੇ ਨਵੇਂ ਫਾਰਮੈਟ ਵਿੱਚ ਬਦਲ ਸਕਦਾ ਹੈ। ਇਹ ਮਾਈਗ੍ਰੇਸ਼ਨ ਵਰਜ਼ਨ 2.0+ ਦੇ **Setup Wizard** ਦੌਰਾਨ ਹੁੰਦੀ ਹੈ।

ਇਸ ਪਾਠ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ ਕਿ ਮਾਈਗ੍ਰੇਟਰ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ, ਅਸਫ਼ਲਤਾ ਦੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਕੀ ਕਰਨਾ ਹੈ, ਅਤੇ ਇਸ ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ ਆਉਣ ਵਾਲੀਆਂ ਸਮੱਸਿਆਵਾਂ ਨੂੰ ਕਿਵੇਂ ਹੱਲ ਕਰਨਾ ਹੈ।

_**ਜ਼ਰੂਰੀ: ਵਰਜ਼ਨ 1.x ਤੋਂ ਵਰਜ਼ਨ 2.0 ਵਿੱਚ ਅੱਪਗ੍ਰੇਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਆਪਣੀ ਸਾਈਟ ਦੇ ਡਾਟਾਬੇਸ ਦਾ ਬੈਕਅੱਪ ਬਣਾ ਲਿਆ ਹੈ**_

## ਪਹਿਲੇ ਕਦਮ

ਪਹਿਲਾ ਕਦਮ ਹੈ plugin ਦੀ .zip ਫਾਈਲ ਡਾਊਨਲੋਡ ਕਰਨਾ ਅਤੇ ਆਪਣੇ network admin dashboard ਉੱਤੇ ਵਰਜ਼ਨ 2.0 ਇੰਸਟਾਲ ਕਰਨਾ।

[ਵਰਜ਼ਨ 2.0 ਇੰਸਟਾਲ ਅਤੇ ਐਕਟੀਵੇਟ](../getting-started/installing-ultimate-multisite.md) ਕਰਨ ਤੋਂ ਬਾਅਦ, ਸਿਸਟਮ ਆਪਣੇ ਆਪ ਪਛਾਣ ਲਵੇਗਾ ਕਿ ਤੁਹਾਡੀ Multisite ਪੁਰਾਣੇ ਵਰਜ਼ਨ ਉੱਤੇ ਚੱਲ ਰਹੀ ਹੈ ਅਤੇ ਤੁਹਾਨੂੰ plugin ਪੇਜ ਦੇ ਸਿਖਰ ਉੱਤੇ ਇਹ ਸੁਨੇਹਾ ਦਿਖਾਈ ਦੇਵੇਗਾ।

_**ਨੋਟ:** ਜੇ ਤੁਹਾਡੀ Multisite ਉੱਤੇ Ultimate Multisite 1.x ਇੰਸਟਾਲ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਮੌਜੂਦਾ plugin ਨੂੰ ਡਾਊਨਲੋਡ ਕੀਤੇ ਵਰਜ਼ਨ ਨਾਲ ਬਦਲਣ ਦਾ ਵਿਕਲਪ ਮਿਲੇਗਾ। ਕਿਰਪਾ ਕਰਕੇ **Replace current with uploaded** ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ।_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

ਅਗਲਾ ਪੇਜ ਤੁਹਾਨੂੰ ਦੱਸੇਗਾ ਕਿ ਵਰਜ਼ਨ 1.x ਨਾਲ ਕਿਹੜੇ ਪੁਰਾਣੇ add-ons ਇੰਸਟਾਲ ਹਨ। ਇਸ ਵਿੱਚ ਦੱਸਿਆ ਜਾਵੇਗਾ ਕਿ ਤੁਹਾਡਾ ਮੌਜੂਦਾ ਵਰਜ਼ਨ 2.0 ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਜਾਂ ਮਾਈਗ੍ਰੇਸ਼ਨ ਤੋਂ ਬਾਅਦ ਤੁਹਾਨੂੰ add-on ਦਾ ਅੱਪਗ੍ਰੇਡ ਕੀਤਾ ਵਰਜ਼ਨ ਇੰਸਟਾਲ ਕਰਨਾ ਪਵੇਗਾ।

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

ਜਦੋਂ ਤੁਸੀਂ ਅੱਗੇ ਵਧਣ ਲਈ ਤਿਆਰ ਹੋ, ਤਾਂ **Visit the Installer to finish the upgrade** ਬਟਨ ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

ਫਿਰ ਤੁਹਾਨੂੰ ਇੰਸਟਾਲੇਸ਼ਨ wizard ਪੇਜ ਉੱਤੇ ਲੈ ਜਾਇਆ ਜਾਵੇਗਾ ਜਿੱਥੇ ਕੁਝ ਸੁਆਗਤੀ ਸੁਨੇਹੇ ਹੋਣਗੇ। ਅਗਲੇ ਪੇਜ ਉੱਤੇ ਜਾਣ ਲਈ ਬੱਸ **Get Started** ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** ਉੱਤੇ ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ Pre-install Checks ਉੱਤੇ ਲੈ ਜਾਇਆ ਜਾਵੇਗਾ। ਇਹ ਤੁਹਾਡੀ System Information ਅਤੇ WordPress ਇੰਸਟਾਲੇਸ਼ਨ ਦਿਖਾਏਗਾ ਅਤੇ ਦੱਸੇਗਾ ਕਿ ਇਹ **Ultimate Multisite ਦੀਆਂ ਲੋੜਾਂ** ਪੂਰੀਆਂ ਕਰਦੀ ਹੈ ਜਾਂ ਨਹੀਂ।

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

ਅਗਲਾ ਕਦਮ ਹੈ ਆਪਣੀ Ultimate Multisite license key ਦਰਜ ਕਰਨਾ ਅਤੇ plugin ਨੂੰ ਐਕਟੀਵੇਟ ਕਰਨਾ। ਇਸ ਨਾਲ ਯਕੀਨੀ ਹੋਵੇਗਾ ਕਿ ਸਾਰੀਆਂ ਸੁਵਿਧਾਵਾਂ, add-ons ਸਮੇਤ, ਤੁਹਾਡੀ ਸਾਈਟ ਉੱਤੇ ਉਪਲਬਧ ਹੋਣਗੀਆਂ।

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

ਆਪਣੀ key ਦਰਜ ਕਰਨ ਤੋਂ ਬਾਅਦ, **Agree & Activate** ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ।

License ਐਕਟੀਵੇਸ਼ਨ ਤੋਂ ਬਾਅਦ, ਅਗਲੇ ਪੇਜ ਉੱਤੇ **Install** ਉੱਤੇ ਕਲਿੱਕ ਕਰਕੇ ਅਸਲ ਇੰਸਟਾਲੇਸ਼ਨ ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ। ਇਹ ਵਰਜ਼ਨ 2.0 ਦੇ ਕੰਮ ਕਰਨ ਲਈ ਲੋੜੀਂਦੀਆਂ ਫਾਈਲਾਂ ਅਤੇ ਡਾਟਾਬੇਸ ਆਪਣੇ ਆਪ ਬਣਾ ਦੇਵੇਗਾ।

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## ਹੁਣ, ਮਾਈਗ੍ਰੇਸ਼ਨ

ਮਾਈਗ੍ਰੇਟਰ ਵਿੱਚ ਇੱਕ ਸੁਰੱਖਿਆ ਫੀਚਰ ਹੈ ਜੋ ਤੁਹਾਡੀ ਪੂਰੀ multisite ਦੀ ਜਾਂਚ ਕਰੇਗਾ ਤਾਂ ਜੋ ਯਕੀਨੀ ਹੋ ਸਕੇ ਕਿ ਤੁਹਾਡਾ ਸਾਰਾ Ultimate Multisite ਡਾਟਾ ਬਿਨਾਂ ਕਿਸੇ ਸਮੱਸਿਆ ਦੇ ਮਾਈਗ੍ਰੇਟ ਹੋ ਸਕਦਾ ਹੈ। ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰਨ ਲਈ **Run Check** ਬਟਨ ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

ਜਾਂਚ ਚਲਾਉਣ ਤੋਂ ਬਾਅਦ, ਦੋ ਸੰਭਾਵਨਾਵਾਂ ਹਨ: ਨਤੀਜਾ **ਗਲਤੀ ਨਾਲ** ਜਾਂ **ਬਿਨਾਂ ਗਲਤੀ ਦੇ** ਹੋ ਸਕਦਾ ਹੈ।

### ਗਲਤੀ ਨਾਲ

ਜੇ ਤੁਹਾਨੂੰ ਗਲਤੀ ਦਾ ਸੁਨੇਹਾ ਮਿਲੇ, ਤਾਂ ਤੁਹਾਨੂੰ ਸਾਡੀ support ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰਨਾ ਪਵੇਗਾ ਤਾਂ ਜੋ ਉਹ ਗਲਤੀ ਠੀਕ ਕਰਨ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰ ਸਕਣ। ਟਿਕਟ ਬਣਾਉਂਦੇ ਸਮੇਂ **error log ਜ਼ਰੂਰ ਸ਼ਾਮਲ ਕਰੋ**। ਤੁਸੀਂ log ਡਾਊਨਲੋਡ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ contact our support team ਲਿੰਕ ਉੱਤੇ ਕਲਿੱਕ ਕਰ ਸਕਦੇ ਹੋ। ਇਹ ਤੁਹਾਡੇ ਪੇਜ ਦੇ ਸੱਜੇ ਪਾਸੇ help widget ਖੋਲ੍ਹੇਗਾ ਜਿੱਥੇ ਫੀਲਡ ਪਹਿਲਾਂ ਤੋਂ ਭਰੇ ਹੋਣਗੇ, ਜਿਸ ਵਿੱਚ description ਦੇ ਹੇਠਾਂ error logs ਵੀ ਸ਼ਾਮਲ ਹਨ।

_**ਕਿਉਂਕਿ ਸਿਸਟਮ ਨੂੰ ਗਲਤੀ ਮਿਲੀ ਹੈ, ਤੁਸੀਂ ਵਰਜ਼ਨ 2.0 ਵਿੱਚ ਮਾਈਗ੍ਰੇਟ ਕਰਨ ਲਈ ਅੱਗੇ ਨਹੀਂ ਵਧ ਸਕੋਗੇ। ਤੁਸੀਂ ਗਲਤੀ ਠੀਕ ਹੋਣ ਤੱਕ ਆਪਣਾ network ਚਲਾਉਣ ਲਈ ਵਰਜ਼ਨ 1.x ਉੱਤੇ ਵਾਪਸ ਜਾ ਸਕਦੇ ਹੋ।**_

### ਬਿਨਾਂ ਗਲਤੀ ਦੇ

ਜੇ ਸਿਸਟਮ ਨੂੰ ਕੋਈ ਗਲਤੀ ਨਹੀਂ ਮਿਲਦੀ, ਤਾਂ ਤੁਹਾਨੂੰ ਸਫ਼ਲਤਾ ਦਾ ਸੁਨੇਹਾ ਅਤੇ ਹੇਠਾਂ **Migrate** ਬਟਨ ਦਿਖਾਈ ਦੇਵੇਗਾ ਜੋ ਤੁਹਾਨੂੰ ਮਾਈਗ੍ਰੇਸ਼ਨ ਨਾਲ ਅੱਗੇ ਵਧਣ ਦੇਵੇਗਾ। ਇਸ ਪੇਜ ਉੱਤੇ, ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਡਾਟਾਬੇਸ ਦਾ ਬੈਕਅੱਪ ਬਣਾਉਣ ਦੀ ਯਾਦ ਦਿਵਾਈ ਜਾਵੇਗੀ, ਜਿਸ ਦੀ ਅਸੀਂ ਜ਼ੋਰਦਾਰ ਸਿਫ਼ਾਰਸ਼ ਕਰਦੇ ਹਾਂ। ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਬੈਕਅੱਪ ਹੈ ਤਾਂ **Migrate** ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

ਅਤੇ ਬੱਸ ਇਹੀ ਕਰਨਾ ਸੀ!

ਤੁਸੀਂ ਆਪਣੇ network ਉੱਤੇ ਆਪਣਾ logo ਅਤੇ ਹੋਰ ਚੀਜ਼ਾਂ ਅੱਪਡੇਟ ਕਰਨ ਲਈ Wizard setup ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋ ਜਾਂ ਆਪਣੇ Ultimate Multisite ਵਰਜ਼ਨ 2.0 ਮੀਨੂ ਅਤੇ ਇਸਦੇ ਨਵੇਂ interface ਨੂੰ ਵਰਤਣਾ ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ। ਅੱਗੇ ਵਧੋ ਅਤੇ ਮਜ਼ੇ ਕਰੋ।
