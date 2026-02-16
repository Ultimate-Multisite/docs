---
title: ਸਰਵਰਪਾਇਲਟ ਏਕੀਕਰਣ
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
ServerPilot ਇੱਕ ਕਲਾਊਡ ਸਰਵਿਸ ਹੈ ਜੋ DigitalOcean, Amazon, Google, ਜਾਂ ਕਿਸੇ ਹੋਰ ਸਰਵਰ ਪ੍ਰੋਵਾਈਡਰ ਦੇ ਸਰਵਰਾਂ 'ਤੇ WordPress ਅਤੇ ਹੋਰ PHP ਵੈੱਬਸਾਈਟਾਂ ਨੂੰ ਹੋਸਟ ਕਰਨ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ ServerPilot ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ ਅਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦੀ ਹੈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ
- Let's Encrypt ਨਾਲ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ
- ਆਟੋਮੈਟਿਕ SSL ਰਿਨਿਊਅਲ

## ਲੋੜਾਂ
ਹੇਠਾਂ ਦਿੱਤੇ constants ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ਸੈੱਟਅੱਪ ਹਿਦਾਇਤਾਂ

### 1. ਆਪਣੇ ServerPilot API ਕ੍ਰੇਡੈਂਸ਼ੀਅਲ ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ ServerPilot dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ
2. "Account" > "API" 'ਤੇ ਜਾਓ
3. ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਤੋਂ API key ਨਹੀਂ ਹੈ ਤਾਂ ਨਵੀਂ ਬਣਾਓ
4. ਆਪਣੀ Client ID ਅਤੇ API Key ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣੀ App ID ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ ServerPilot dashboard ਵਿੱਚ, "Apps" 'ਤੇ ਜਾਓ
2. ਉਹ app ਚੁਣੋ ਜਿੱਥੇ ਤੁਹਾਡੀ WordPress multisite ਹੋਸਟ ਕੀਤੀ ਹੋਈ ਹੈ
3. App ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php ਵਿੱਚ Constants ਸ਼ਾਮਲ ਕਰੋ

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਚਾਲੂ ਕਰੋ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, Ultimate Multisite > Settings 'ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ 'ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. ServerPilot ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਚਾਲੂ ਕਰੋ
5. "Save Changes" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

### ਡੋਮੇਨ ਸਿੰਕਿੰਗ

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ServerPilot ਤੋਂ ਮੌਜੂਦਾ ਡੋਮੇਨਾਂ ਦੀ ਸੂਚੀ ਪ੍ਰਾਪਤ ਕਰਦੀ ਹੈ
2. ਇਹ ਨਵੇਂ ਡੋਮੇਨ ਨੂੰ ਸੂਚੀ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਦੀ ਹੈ (ਜੇਕਰ ਲਾਗੂ ਹੋਵੇ ਤਾਂ www ਵਰਜ਼ਨ ਵੀ)
3. ਇਹ API ਰਾਹੀਂ ਅੱਪਡੇਟ ਕੀਤੀ ਸੂਚੀ ServerPilot ਨੂੰ ਭੇਜਦੀ ਹੈ
4. ServerPilot ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਲਈ ਡੋਮੇਨ ਸੂਚੀ ਨੂੰ ਅੱਪਡੇਟ ਕਰਦਾ ਹੈ

### SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ

ਡੋਮੇਨ ਸਿੰਕ ਹੋਣ ਤੋਂ ਬਾਅਦ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਲਈ ਆਪਣੇ ਆਪ AutoSSL ਨੂੰ ਚਾਲੂ ਕਰ ਦਿੰਦੀ ਹੈ
2. ServerPilot Let's Encrypt ਦੀ ਵਰਤੋਂ ਕਰਕੇ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਅਤੇ ਇੰਸਟਾਲ ਕਰਨ ਦਾ ਕੰਮ ਸੰਭਾਲਦਾ ਹੈ
3. ServerPilot SSL ਸਰਟੀਫਿਕੇਟਾਂ ਦੀ ਆਟੋਮੈਟਿਕ ਰਿਨਿਊਅਲ ਵੀ ਸੰਭਾਲਦਾ ਹੈ

## SSL ਸਰਟੀਫਿਕੇਟ ਵੈਰੀਫਿਕੇਸ਼ਨ

ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ServerPilot ਲਈ SSL ਸਰਟੀਫਿਕੇਟ ਵੈਰੀਫਿਕੇਸ਼ਨ ਕੋਸ਼ਿਸ਼ਾਂ ਦੀ ਗਿਣਤੀ ਵਧਾਉਣ ਲਈ ਕੌਂਫਿਗਰ ਕੀਤੀ ਗਈ ਹੈ, ਕਿਉਂਕਿ ServerPilot ਨੂੰ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਅਤੇ ਇੰਸਟਾਲ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ। ਮੂਲ ਰੂਪ ਵਿੱਚ, ਇਹ 5 ਵਾਰ ਤੱਕ ਕੋਸ਼ਿਸ਼ ਕਰੇਗੀ, ਪਰ ਇਸਨੂੰ filters ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੀ Client ID ਅਤੇ API Key ਸਹੀ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੀ App ID ਸਹੀ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ ServerPilot ਖਾਤੇ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਇਜਾਜ਼ਤਾਂ ਹਨ

### SSL ਸਰਟੀਫਿਕੇਟ ਸਮੱਸਿਆਵਾਂ
- ServerPilot ਲਈ ਲੋੜ ਹੈ ਕਿ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡੋਮੇਨਾਂ ਕੋਲ ਤੁਹਾਡੇ ਸਰਵਰ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਨ ਵਾਲੇ ਵੈਧ DNS ਰਿਕਾਰਡ ਹੋਣ
- ਜੇਕਰ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਨਹੀਂ ਹੋ ਰਹੇ, ਤਾਂ ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਡੋਮੇਨ ਤੁਹਾਡੇ ਸਰਵਰ ਦੇ IP ਐਡਰੈੱਸ ਵੱਲ ਸਹੀ ਤਰ੍ਹਾਂ ਇਸ਼ਾਰਾ ਕਰ ਰਹੇ ਹਨ
- ServerPilot ਨੂੰ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਅਤੇ ਇੰਸਟਾਲ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ (ਆਮ ਤੌਰ 'ਤੇ 5-15 ਮਿੰਟ)

### ਡੋਮੇਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਸੁਨੇਹੇ ਲਈ Ultimate Multisite ਲੌਗਸ ਦੀ ਜਾਂਚ ਕਰੋ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਡੋਮੇਨ ਪਹਿਲਾਂ ਤੋਂ ServerPilot ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ ServerPilot ਪਲਾਨ ਤੁਹਾਡੇ ਵੱਲੋਂ ਸ਼ਾਮਲ ਕੀਤੇ ਜਾ ਰਹੇ ਡੋਮੇਨਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ

### ਡੋਮੇਨ ਹਟਾਉਣਾ
- ਇਸ ਸਮੇਂ, ServerPilot API ਵਿਅਕਤੀਗਤ ਡੋਮੇਨਾਂ ਨੂੰ ਹਟਾਉਣ ਦਾ ਕੋਈ ਤਰੀਕਾ ਪ੍ਰਦਾਨ ਨਹੀਂ ਕਰਦੀ
- ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪਿੰਗ ਹਟਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਹਟਾਏ ਗਏ ਡੋਮੇਨ ਨੂੰ ਛੱਡ ਕੇ ServerPilot ਵਿੱਚ ਡੋਮੇਨ ਸੂਚੀ ਨੂੰ ਅੱਪਡੇਟ ਕਰ ਦੇਵੇਗੀ
