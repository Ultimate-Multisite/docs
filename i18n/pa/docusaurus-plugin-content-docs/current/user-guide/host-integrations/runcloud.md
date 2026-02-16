---
title: RunCloud ਏਕੀਕਰਨ
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
RunCloud ਇੱਕ ਕਲਾਊਡ-ਅਧਾਰਿਤ ਸਰਵਰ ਪ੍ਰਬੰਧਨ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਆਪਣੇ ਕਲਾਊਡ ਸਰਵਰਾਂ 'ਤੇ ਵੈੱਬ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਆਸਾਨੀ ਨਾਲ ਡਿਪਲੌਏ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰਨ ਦੀ ਸਹੂਲਤ ਦਿੰਦਾ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ RunCloud ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ ਅਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦਾ ਹੈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ
- SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ
- ਮੈਪਿੰਗ ਹਟਾਉਣ 'ਤੇ ਡੋਮੇਨ ਹਟਾਉਣਾ

## ਲੋੜਾਂ
ਹੇਠਾਂ ਦਿੱਤੇ constants ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ਸੈੱਟਅੱਪ ਦੀਆਂ ਹਿਦਾਇਤਾਂ

### 1. ਆਪਣੇ RunCloud API ਕ੍ਰੀਡੈਂਸ਼ੀਅਲ ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ RunCloud dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ
2. "User Profile" 'ਤੇ ਜਾਓ (ਉੱਪਰ-ਸੱਜੇ ਕੋਨੇ ਵਿੱਚ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਤਸਵੀਰ 'ਤੇ ਕਲਿੱਕ ਕਰੋ)
3. ਮੀਨੂ ਵਿੱਚੋਂ "API" ਚੁਣੋ
4. ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਤੋਂ ਨਹੀਂ ਹੈ ਤਾਂ "Generate API Key" 'ਤੇ ਕਲਿੱਕ ਕਰੋ
5. ਆਪਣੀ API Key ਅਤੇ API Secret ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣੀ Server ਅਤੇ App ID ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ RunCloud dashboard ਵਿੱਚ, "Servers" 'ਤੇ ਜਾਓ
2. ਉਹ ਸਰਵਰ ਚੁਣੋ ਜਿੱਥੇ ਤੁਹਾਡੀ WordPress multisite ਹੋਸਟ ਕੀਤੀ ਗਈ ਹੈ
3. Server ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" 'ਤੇ ਜਾਓ ਅਤੇ ਆਪਣੀ WordPress ਐਪਲੀਕੇਸ਼ਨ ਚੁਣੋ
5. App ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php ਵਿੱਚ Constants ਸ਼ਾਮਲ ਕਰੋ

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, Ultimate Multisite > Settings 'ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ 'ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਸਕ੍ਰੋਲ ਕਰੋ
4. RunCloud ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ
5. "Save Changes" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਵਿੱਚ ਡੋਮੇਨ ਸ਼ਾਮਲ ਕਰਨ ਲਈ RunCloud ਦੀ API ਨੂੰ ਇੱਕ ਬੇਨਤੀ ਭੇਜਦਾ ਹੈ
2. ਜੇਕਰ ਡੋਮੇਨ ਸਫਲਤਾਪੂਰਵਕ ਸ਼ਾਮਲ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ SSL ਸਰਟੀਫਿਕੇਟ ਵੀ ਮੁੜ-ਡਿਪਲੌਏ ਕਰੇਗਾ
3. ਜਦੋਂ ਕੋਈ ਡੋਮੇਨ ਮੈਪਿੰਗ ਹਟਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ RunCloud ਤੋਂ ਡੋਮੇਨ ਹਟਾ ਦੇਵੇਗਾ

Subdomain ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਲਈ, ਜਦੋਂ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਵਿੱਚ ਨਵੀਆਂ ਸਾਈਟਾਂ ਸ਼ਾਮਲ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ RunCloud ਵਿੱਚ subdomains ਬਣਾਉਣ ਦਾ ਕੰਮ ਸੰਭਾਲੇਗਾ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ API ਕ੍ਰੀਡੈਂਸ਼ੀਅਲ ਸਹੀ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੀ server ਅਤੇ app ID ਸਹੀ ਹਨ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ RunCloud ਖਾਤੇ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਇਜਾਜ਼ਤਾਂ ਹਨ

### SSL ਸਰਟੀਫਿਕੇਟ ਸਮੱਸਿਆਵਾਂ
- RunCloud ਨੂੰ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਡੋਮੇਨ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਤੁਹਾਡੇ ਸਰਵਰ ਦੇ IP ਐਡਰੈੱਸ ਵੱਲ ਪੁਆਇੰਟ ਕਰ ਰਹੇ ਹਨ
- ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਲਈ RunCloud SSL ਸੈਟਿੰਗਾਂ ਦੀ ਜਾਂਚ ਕਰੋ

### ਡੋਮੇਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਸੰਦੇਸ਼ ਲਈ Ultimate Multisite ਲੌਗ ਦੀ ਜਾਂਚ ਕਰੋ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਡੋਮੇਨ ਪਹਿਲਾਂ ਤੋਂ RunCloud ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ RunCloud ਪਲਾਨ ਮਲਟੀਪਲ ਡੋਮੇਨਾਂ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ
