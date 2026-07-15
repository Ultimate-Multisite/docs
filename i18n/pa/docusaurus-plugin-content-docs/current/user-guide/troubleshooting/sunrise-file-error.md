---
title: ਸਨਰਾਈਜ਼ ਫਾਈਲ ਗਲਤੀ
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ਫਾਈਲ ਇੰਸਟਾਲ ਕਰਨ ਵਿੱਚ ਗਲਤੀ

sunrise.php ਫਾਈਲ ਇੱਕ ਖਾਸ ਫਾਈਲ ਹੈ ਜਿਸਨੂੰ WordPress ਆਪਣੇ ਆਪ ਸ਼ੁਰੂ ਹੋਣ ਵੇਲੇ ਲੱਭਦਾ ਹੈ। WordPress ਨੂੰ sunrise.php ਫਾਈਲ ਲੱਭਣ ਲਈ, ਇਸਨੂੰ **wp-content ਫੋਲਡਰ** ਵਿੱਚ ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੈ।

ਜਦੋਂ ਤੁਸੀਂ Ultimate Multisite ਨੂੰ ਐਕਟੀਵੇਟ ਕਰਦੇ ਹੋ ਅਤੇ ਸਕ੍ਰੀਨਸ਼ਾਟ ਵਿੱਚ ਦਿਖਾਏ ਗਏ ਸੈਟਅੱਪ ਵਿਜ਼ਾਰਡ ਵਿੱਚੋਂ ਲੰਘਦੇ ਹੋ, ਤਾਂ Ultimate Multisite ਸਾਡੀ sunrise.php ਫਾਈਲ ਨੂੰ wp-content ਫੋਲਡਰ ਵਿੱਚ ਕਾਪੀ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦਾ ਹੈ।

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

ਜ਼ਿਆਦਾਤਰ ਵਾਰ, ਅਸੀਂ ਫਾਈਲ ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਕਾਪੀ ਕਰ ਲੈਂਦੇ ਹਾਂ ਅਤੇ ਸਭ ਕੁਝ ਠੀਕ ਚੱਲਦਾ ਹੈ। ਪਰ, ਜੇਕਰ ਕੋਈ ਚੀਜ਼ ਸਹੀ ਤਰ੍ਹਾਂ ਸੈਟਅੱਪ ਨਹੀਂ ਹੈ (ਜਿਵੇਂ ਕਿ ਫੋਲਡਰ ਪਰਮਿਸ਼ਨਾਂ), ਤਾਂ ਤੁਹਾਨੂੰ ਅਜਿਹੀ ਸਥਿਤੀ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਪੈ ਸਕਦਾ ਹੈ ਜਿੱਥੇ Ultimate Multisite ਫਾਈਲ ਕਾਪੀ ਨਹੀਂ ਕਰ ਸਕਦਾ।

ਜੇਕਰ ਤੁਸੀਂ Ultimo ਦਾ ਦਿੱਤਾ ਗਲਤੀ ਸੁਨੇਹਾ ਪੜ੍ਹੋ, ਤਾਂ ਤੁਸੀਂ ਦੇਖੋਗੇ ਕਿ ਇੱਥੇ ਬਿਲਕੁਲ ਇਹੀ ਹੋਇਆ ਹੈ: **Sunrise copy failed**।

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ਇਸਨੂੰ ਠੀਕ ਕਰਨ ਲਈ, ਤੁਸੀਂ ਸਿੱਧੇ wp-ultimo plugin ਫੋਲਡਰ ਵਿੱਚੋਂ sunrise.php ਫਾਈਲ ਨੂੰ ਕਾਪੀ ਕਰਕੇ ਆਪਣੇ wp-content ਫੋਲਡਰ ਵਿੱਚ ਪੇਸਟ ਕਰ ਸਕਦੇ ਹੋ। ਇਹ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਵਿਜ਼ਾਰਡ ਪੇਜ ਨੂੰ ਰੀਲੋਡ ਕਰੋ ਅਤੇ ਜਾਂਚਾਂ ਪਾਸ ਹੋ ਜਾਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ।

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ਕਿਸੇ ਵੀ ਹਾਲਤ ਵਿੱਚ, ਭਵਿੱਖ ਵਿੱਚ ਸਮੱਸਿਆਵਾਂ ਤੋਂ ਬਚਣ ਲਈ ਆਪਣੀਆਂ ਫੋਲਡਰ ਪਰਮਿਸ਼ਨਾਂ ਦੀ ਇੱਕ ਆਮ ਜਾਂਚ ਕਰਨਾ ਚੰਗਾ ਰਹੇਗਾ (ਨਾ ਸਿਰਫ਼ Ultimate Multisite ਨਾਲ ਬਲਕਿ ਹੋਰ plugins ਅਤੇ themes ਨਾਲ ਵੀ)।

**Health Check ਟੂਲ** ਜੋ WordPress ਦਾ ਹਿੱਸਾ ਹੈ (ਤੁਸੀਂ ਇਸਨੂੰ ਆਪਣੀ ਮੁੱਖ ਸਾਈਟ ਦੇ **admin panel > Tools > Health Check** ਰਾਹੀਂ ਵਰਤ ਸਕਦੇ ਹੋ) ਤੁਹਾਨੂੰ ਦੱਸ ਸਕਦਾ ਹੈ ਕਿ ਕੀ ਤੁਹਾਡੀਆਂ ਫੋਲਡਰ ਪਰਮਿਸ਼ਨਾਂ ਅਜਿਹੀਆਂ ਵੈਲਿਊਜ਼ 'ਤੇ ਸੈੱਟ ਹਨ ਜੋ WordPress ਨਾਲ ਸਮੱਸਿਆਵਾਂ ਪੈਦਾ ਕਰ ਸਕਦੀਆਂ ਹਨ।

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
