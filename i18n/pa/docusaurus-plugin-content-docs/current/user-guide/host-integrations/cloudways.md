---
title: Cloudways ਏਕੀਕਰਨ
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
Cloudways ਇੱਕ managed cloud hosting ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਤੁਹਾਨੂੰ DigitalOcean, AWS, Google Cloud ਅਤੇ ਹੋਰ ਕਈ cloud providers ਉੱਤੇ WordPress ਸਾਈਟਾਂ ਡਿਪਲੋਏ ਕਰਨ ਦਿੰਦਾ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ Cloudways ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ domain syncing ਅਤੇ SSL certificate management ਨੂੰ ਸੰਭਵ ਬਣਾਉਂਦਾ ਹੈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- ਆਟੋਮੈਟਿਕ domain syncing
- SSL certificate management
- ਵਾਧੂ domains ਲਈ ਸਹਾਇਤਾ
- SSL certificates ਲਈ DNS validation

## ਜ਼ਰੂਰਤਾਂ
ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠ ਲਿਖੇ constants ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ, ਤੁਸੀਂ ਇਹ ਵੀ ਪਰਿਭਾਸ਼ਿਤ ਕਰ ਸਕਦੇ ਹੋ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## ਸੈੱਟਅੱਪ ਹਿਦਾਇਤਾਂ

### 1. ਆਪਣੇ Cloudways API Credentials ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ Cloudways dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ
2. "Account" > "API Keys" 'ਤੇ ਜਾਓ
3. ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਤੋਂ API key ਨਹੀਂ ਹੈ ਤਾਂ ਇੱਕ ਬਣਾਓ
4. ਆਪਣੀ email ਅਤੇ API key ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣੀ Server ਅਤੇ Application IDs ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ Cloudways dashboard ਵਿੱਚ, "Servers" 'ਤੇ ਜਾਓ
2. ਉਹ server ਚੁਣੋ ਜਿੱਥੇ ਤੁਹਾਡੀ WordPress multisite ਹੋਸਟ ਕੀਤੀ ਹੋਈ ਹੈ
3. Server ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" 'ਤੇ ਜਾਓ ਅਤੇ ਆਪਣੀ WordPress application ਚੁਣੋ
5. App ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ਵਿੱਚ Constants ਸ਼ਾਮਲ ਕਰੋ

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠ ਲਿਖੇ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਵਾਧੂ domains ਹਨ ਜੋ ਹਮੇਸ਼ਾ ਸ਼ਾਮਲ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, Ultimate Multisite > Settings 'ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ 'ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. Cloudways ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ
5. "Save Changes" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

### Domain Syncing

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ domain ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਾਰੇ ਮੌਜੂਦਾ ਮੈਪ ਕੀਤੇ domains ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ
2. ਇਹ ਨਵਾਂ domain ਸੂਚੀ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ (ਜੇਕਰ ਲਾਗੂ ਹੋਵੇ ਤਾਂ www ਵਰਜ਼ਨ ਵੀ)
3. ਇਹ ਪੂਰੀ ਸੂਚੀ API ਰਾਹੀਂ Cloudways ਨੂੰ ਭੇਜਦਾ ਹੈ
4. Cloudways ਤੁਹਾਡੀ application ਲਈ domain aliases ਅੱਪਡੇਟ ਕਰਦਾ ਹੈ

ਨੋਟ: Cloudways API ਨੂੰ ਹਰ ਵਾਰ domains ਦੀ ਪੂਰੀ ਸੂਚੀ ਭੇਜਣ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਸਿਰਫ਼ ਵੱਖਰੇ domains ਜੋੜਨ ਜਾਂ ਹਟਾਉਣ ਦੀ ਨਹੀਂ।

### SSL Certificate Management

Domains ਸਿੰਕ ਹੋਣ ਤੋਂ ਬਾਅਦ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਜਾਂਚ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜੇ domains ਕੋਲ ਤੁਹਾਡੇ server ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦੇ ਵੈਧ DNS records ਹਨ
2. ਇਹ ਉਨ੍ਹਾਂ domains ਲਈ Let's Encrypt SSL certificates ਇੰਸਟਾਲ ਕਰਨ ਦੀ ਬੇਨਤੀ Cloudways ਨੂੰ ਭੇਜਦਾ ਹੈ
3. Cloudways SSL certificate ਜਾਰੀ ਕਰਨ ਅਤੇ ਇੰਸਟਾਲੇਸ਼ਨ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ

## ਵਾਧੂ Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant ਤੁਹਾਨੂੰ ਵਾਧੂ domains ਦੱਸਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ ਜੋ Cloudways ਨਾਲ ਸਿੰਕ ਕਰਦੇ ਸਮੇਂ ਹਮੇਸ਼ਾ ਸ਼ਾਮਲ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ। ਇਹ ਇਨ੍ਹਾਂ ਲਈ ਲਾਭਦਾਇਕ ਹੈ:

- ਉਹ Domains ਜੋ Ultimate Multisite ਦੁਆਰਾ ਪ੍ਰਬੰਧਿਤ ਨਹੀਂ ਹਨ
- Wildcard domains (ਜਿਵੇਂ ਕਿ, `*.example.com`)
- Development ਜਾਂ staging domains

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੀ email ਅਤੇ API key ਸਹੀ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੀ server ਅਤੇ application IDs ਸਹੀ ਹਨ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Cloudways ਅਕਾਊਂਟ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਅਨੁਮਤੀਆਂ ਹਨ

### SSL Certificate ਸਮੱਸਿਆਵਾਂ
- Cloudways ਲਈ ਜ਼ਰੂਰੀ ਹੈ ਕਿ SSL certificates ਜਾਰੀ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ domains ਕੋਲ ਤੁਹਾਡੇ server ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦੇ ਵੈਧ DNS records ਹੋਣ
- ਇੰਟੀਗ੍ਰੇਸ਼ਨ SSL certificates ਦੀ ਬੇਨਤੀ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ DNS records ਦੀ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ
- ਜੇਕਰ SSL certificates ਜਾਰੀ ਨਹੀਂ ਹੋ ਰਹੇ, ਤਾਂ ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੇ domains ਤੁਹਾਡੇ server ਦੇ IP address ਵੱਲ ਸਹੀ ਢੰਗ ਨਾਲ ਇਸ਼ਾਰਾ ਕਰ ਰਹੇ ਹਨ

### Domain ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ
- ਕਿਸੇ ਵੀ error messages ਲਈ Ultimate Multisite logs ਦੀ ਜਾਂਚ ਕਰੋ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ domain ਪਹਿਲਾਂ ਤੋਂ Cloudways ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ Cloudways plan ਉਨ੍ਹਾਂ domains ਦੀ ਗਿਣਤੀ ਨੂੰ ਸਹਾਇਤਾ ਕਰਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਸ਼ਾਮਲ ਕਰ ਰਹੇ ਹੋ
