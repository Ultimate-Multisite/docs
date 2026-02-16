---
title: Closte ਏਕੀਕਰਨ
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
Closte ਇੱਕ managed WordPress hosting platform ਹੈ ਜੋ Google Cloud infrastructure ਉੱਤੇ ਬਣਾਇਆ ਗਿਆ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ Closte ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ domain syncing ਅਤੇ SSL certificate management ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦਾ ਹੈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- ਆਟੋਮੈਟਿਕ domain syncing
- SSL certificate management
- Wildcard domain ਸਪੋਰਟ
- ਜੇ ਤੁਸੀਂ Closte ਉੱਤੇ ਚੱਲ ਰਹੇ ਹੋ ਤਾਂ ਕੋਈ ਸੈੱਟਅੱਪ ਦੀ ਲੋੜ ਨਹੀਂ

## ਲੋੜਾਂ
ਜੇ ਤੁਸੀਂ Closte ਵਰਤ ਰਹੇ ਹੋ ਤਾਂ ਹੇਠਾਂ ਦਿੱਤਾ constant ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

ਜੇ ਤੁਸੀਂ Closte ਉੱਤੇ hosting ਕਰ ਰਹੇ ਹੋ ਤਾਂ ਇਹ constant ਆਮ ਤੌਰ 'ਤੇ ਪਹਿਲਾਂ ਹੀ ਪਰਿਭਾਸ਼ਿਤ ਹੁੰਦਾ ਹੈ।

## ਸੈੱਟਅੱਪ ਹਦਾਇਤਾਂ

### 1. ਆਪਣੀ Closte API Key ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ

ਜੇ ਤੁਸੀਂ Closte ਉੱਤੇ hosting ਕਰ ਰਹੇ ਹੋ, ਤਾਂ `CLOSTE_CLIENT_API_KEY` constant ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਤੁਸੀਂ ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਚੈੱਕ ਕਰਕੇ ਇਸਦੀ ਪੁਸ਼ਟੀ ਕਰ ਸਕਦੇ ਹੋ।

### 2. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਚਾਲੂ ਕਰੋ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, Ultimate Multisite > Settings ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. Closte ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਚਾਲੂ ਕਰੋ
5. "Save Changes" ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ domain ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ Closte ਦੀ API ਨੂੰ ਤੁਹਾਡੀ application ਵਿੱਚ domain ਜੋੜਨ ਲਈ ਬੇਨਤੀ ਭੇਜਦੀ ਹੈ
2. Closte ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ SSL certificate provisioning ਸੰਭਾਲਦਾ ਹੈ
3. ਜਦੋਂ domain mapping ਹਟਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Closte ਤੋਂ domain ਹਟਾ ਦਿੰਦੀ ਹੈ

ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਵਿੱਚ DNS check interval ਸੈਟਿੰਗ ਨਾਲ ਵੀ ਕੰਮ ਕਰਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਇਹ ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ ਕਿ ਸਿਸਟਮ DNS propagation ਅਤੇ SSL certificate issuance ਲਈ ਕਿੰਨੀ ਵਾਰ ਚੈੱਕ ਕਰੇ।

## Domain Record ਬਣਾਉਣਾ

ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ ਕਿ ਜਦੋਂ ਕੋਈ site ਬਣਾਈ ਜਾਂ duplicate ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ domain record ਆਟੋਮੈਟਿਕ ਬਣ ਜਾਂਦਾ ਹੈ। ਇਹ Closte ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਲਈ ਖਾਸ ਤੌਰ 'ਤੇ ਮਹੱਤਵਪੂਰਨ ਹੈ, ਕਿਉਂਕਿ domain record ਬਣਾਉਣਾ Closte API ਨੂੰ domain ਅਤੇ SSL certificate ਬਣਾਉਣ ਲਈ ਟ੍ਰਿਗਰ ਕਰਦਾ ਹੈ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੀ Closte API key ਸਹੀ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Closte account ਕੋਲ ਲੋੜੀਂਦੀਆਂ permissions ਹਨ

### SSL Certificate ਸਮੱਸਿਆਵਾਂ
- Closte ਨੂੰ SSL certificates ਜਾਰੀ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ (ਆਮ ਤੌਰ 'ਤੇ 5-10 ਮਿੰਟ)
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ domains ਸਹੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੇ Closte server ਦੇ IP address ਵੱਲ ਪੁਆਇੰਟ ਕਰ ਰਹੇ ਹਨ
- ਆਪਣੇ domain ਲਈ DNS records ਚੈੱਕ ਕਰੋ ਕਿ ਉਹ ਸਹੀ ਤਰ੍ਹਾਂ ਸੈੱਟ ਹਨ

### Domain ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ
- ਕਿਸੇ ਵੀ error messages ਲਈ Ultimate Multisite logs ਚੈੱਕ ਕਰੋ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ domain ਪਹਿਲਾਂ ਤੋਂ Closte ਵਿੱਚ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ domain ਦੇ DNS records ਸਹੀ ਤਰ੍ਹਾਂ ਸੈੱਟ ਹਨ

### DNS Check Interval
- ਜੇ SSL certificates ਜਾਰੀ ਹੋਣ ਵਿੱਚ ਬਹੁਤ ਸਮਾਂ ਲੱਗ ਰਿਹਾ ਹੈ, ਤਾਂ ਤੁਸੀਂ Domain Mapping ਸੈਟਿੰਗਾਂ ਵਿੱਚ DNS check interval ਬਦਲ ਸਕਦੇ ਹੋ
- ਡਿਫਾਲਟ interval 300 ਸਕਿੰਟ (5 ਮਿੰਟ) ਹੈ, ਪਰ ਤੁਸੀਂ testing ਦੌਰਾਨ ਤੇਜ਼ ਚੈਕਿੰਗ ਲਈ ਇਸਨੂੰ 10 ਸਕਿੰਟ ਤੱਕ ਘੱਟ ਕਰ ਸਕਦੇ ਹੋ
