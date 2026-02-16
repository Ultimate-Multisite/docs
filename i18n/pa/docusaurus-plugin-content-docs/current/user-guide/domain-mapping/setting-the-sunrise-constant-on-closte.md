---
title: Closte 'ਤੇ Sunrise Constant ਸੈੱਟ ਕਰਨਾ
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte 'ਤੇ Sunrise constant ਨੂੰ true ਸੈੱਟ ਕਰਨਾ

ਕੁਝ host providers ਸੁਰੱਖਿਆ ਕਾਰਨਾਂ ਕਰਕੇ wp-config.php ਨੂੰ ਲੌਕ ਕਰ ਦਿੰਦੇ ਹਨ। ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ Ultimate Multisite ਆਪਣੇ ਆਪ ਫਾਈਲ ਨੂੰ ਐਡਿਟ ਕਰਕੇ ਜ਼ਰੂਰੀ constants ਨਹੀਂ ਜੋੜ ਸਕਦਾ ਜੋ domain mapping ਅਤੇ ਹੋਰ ਫੀਚਰਾਂ ਨੂੰ ਕੰਮ ਕਰਨ ਲਈ ਚਾਹੀਦੇ ਹਨ। Closte ਅਜਿਹਾ ਹੀ ਇੱਕ host ਹੈ।

ਪਰ, Closte ਇੱਕ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ wp-config.php ਵਿੱਚ constants ਜੋੜਨ ਦਾ ਵਿਕਲਪ ਦਿੰਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਬੱਸ ਹੇਠਾਂ ਦਿੱਤੇ ਕਦਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਪਵੇਗੀ:

## Closte dashboard 'ਤੇ

ਪਹਿਲਾਂ, [ਆਪਣੇ Closte ਅਕਾਊਂਟ ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ](https://app.closte.com/), Sites ਮੈਨੂ ਆਈਟਮ 'ਤੇ ਕਲਿੱਕ ਕਰੋ, ਫਿਰ ਜਿਸ ਸਾਈਟ 'ਤੇ ਤੁਸੀਂ ਕੰਮ ਕਰ ਰਹੇ ਹੋ ਉਸ ਦੇ Dashboard ਲਿੰਕ 'ਤੇ ਕਲਿੱਕ ਕਰੋ:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

ਸਕ੍ਰੀਨ ਦੇ ਖੱਬੇ ਪਾਸੇ ਤੁਹਾਨੂੰ ਕਈ ਨਵੀਆਂ ਮੈਨੂ ਆਈਟਮਾਂ ਦਿਖਾਈ ਦੇਣਗੀਆਂ। ਉਸ ਮੈਨੂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ **Settings** ਪੇਜ 'ਤੇ ਜਾਓ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ਫਿਰ, **Settings** 'ਤੇ, WP-Config ਟੈਬ ਲੱਭੋ, ਅਤੇ ਉਸ ਟੈਬ 'ਤੇ "Additional wp-config.php content" ਫੀਲਡ ਲੱਭੋ:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ਇੰਸਟਾਲ ਕਰਨ ਦੇ ਸੰਦਰਭ ਵਿੱਚ, ਤੁਹਾਨੂੰ ਉਸ ਫੀਲਡ ਵਿੱਚ sunrise constant ਜੋੜਨੀ ਪਵੇਗੀ। ਬੱਸ ਇੱਕ ਨਵੀਂ ਲਾਈਨ ਜੋੜੋ ਅਤੇ ਹੇਠਾਂ ਦਿੱਤੀ ਲਾਈਨ ਪੇਸਟ ਕਰੋ। ਇਸ ਤੋਂ ਬਾਅਦ, **Save All** ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

define('SUNRISE', true);

ਬੱਸ, ਤੁਸੀਂ ਤਿਆਰ ਹੋ। Ultimate Multisite ਇੰਸਟਾਲ ਵਿਜ਼ਾਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਜਾਰੀ ਰੱਖਣ ਲਈ ਪੇਜ ਰਿਫ੍ਰੈਸ਼ ਕਰੋ।
