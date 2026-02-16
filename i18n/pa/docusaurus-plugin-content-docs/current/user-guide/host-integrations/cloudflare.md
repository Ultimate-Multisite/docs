---
title: Cloudflare ਏਕੀਕਰਣ
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare ਏਕੀਕਰਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
Cloudflare ਇੱਕ ਮੋਹਰੀ ਕੰਟੈਂਟ ਡਿਲੀਵਰੀ ਨੈੱਟਵਰਕ (CDN) ਅਤੇ ਸੁਰੱਖਿਆ ਪ੍ਰਦਾਤਾ ਹੈ ਜੋ ਵੈੱਬਸਾਈਟਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਕਰਨ ਅਤੇ ਤੇਜ਼ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਏਕੀਕਰਨ Ultimate Multisite ਅਤੇ Cloudflare ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਪ੍ਰਬੰਧਨ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦਾ ਹੈ, ਖਾਸ ਕਰਕੇ subdomain ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਲਈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- Cloudflare ਵਿੱਚ ਆਟੋਮੈਟਿਕ subdomain ਬਣਾਉਣਾ
- Proxied subdomain ਸਹਾਇਤਾ
- DNS ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਨ
- Ultimate Multisite ਐਡਮਿਨ ਵਿੱਚ ਵਧੀਆ DNS ਰਿਕਾਰਡ ਡਿਸਪਲੇ

## ਲੋੜਾਂ
ਹੇਠਾਂ ਦਿੱਤੇ constants ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਜ਼ਰੂਰੀ ਹਨ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## ਸੈੱਟਅੱਪ ਨਿਰਦੇਸ਼

### 1. ਆਪਣੀ Cloudflare API Key ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ Cloudflare dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ
2. "My Profile" 'ਤੇ ਜਾਓ (ਉੱਪਰ ਸੱਜੇ ਕੋਨੇ ਵਿੱਚ ਆਪਣੀ ਈਮੇਲ 'ਤੇ ਕਲਿੱਕ ਕਰੋ)
3. ਮੀਨੂ ਤੋਂ "API Tokens" ਚੁਣੋ
4. ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਪਰਮਿਸ਼ਨਾਂ ਨਾਲ ਇੱਕ ਨਵਾਂ API token ਬਣਾਓ:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. ਆਪਣਾ API token ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣਾ Zone ID ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ Cloudflare dashboard ਵਿੱਚ, ਉਹ ਡੋਮੇਨ ਚੁਣੋ ਜੋ ਤੁਸੀਂ ਵਰਤਣਾ ਚਾਹੁੰਦੇ ਹੋ
2. Zone ID "Overview" ਟੈਬ ਵਿੱਚ, ਸੱਜੇ ਸਾਈਡਬਾਰ ਵਿੱਚ "API" ਦੇ ਹੇਠਾਂ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ
3. Zone ID ਕਾਪੀ ਕਰੋ

### 3. wp-config.php ਵਿੱਚ Constants ਸ਼ਾਮਲ ਕਰੋ

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ਏਕੀਕਰਨ ਨੂੰ ਚਾਲੂ ਕਰੋ

1. ਆਪਣੇ WordPress ਐਡਮਿਨ ਵਿੱਚ, Ultimate Multisite > Settings 'ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ 'ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. Cloudflare ਏਕੀਕਰਨ ਨੂੰ ਚਾਲੂ ਕਰੋ
5. "Save Changes" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

### Subdomain ਪ੍ਰਬੰਧਨ

ਜਦੋਂ subdomain ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨ ਵਿੱਚ ਕੋਈ ਨਵੀਂ ਸਾਈਟ ਬਣਾਈ ਜਾਂਦੀ ਹੈ:

1. ਏਕੀਕਰਨ subdomain ਲਈ ਇੱਕ CNAME ਰਿਕਾਰਡ ਸ਼ਾਮਲ ਕਰਨ ਲਈ Cloudflare ਦੀ API ਨੂੰ ਇੱਕ ਰਿਕੁਐਸਟ ਭੇਜਦਾ ਹੈ
2. subdomain ਨੂੰ ਮੂਲ ਰੂਪ ਵਿੱਚ Cloudflare ਰਾਹੀਂ proxied ਕੀਤਾ ਜਾਂਦਾ ਹੈ (ਇਸ ਨੂੰ filters ਨਾਲ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ)
3. ਜਦੋਂ ਕੋਈ ਸਾਈਟ ਮਿਟਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਏਕੀਕਰਨ Cloudflare ਤੋਂ subdomain ਨੂੰ ਹਟਾ ਦੇਵੇਗਾ

### DNS ਰਿਕਾਰਡ ਡਿਸਪਲੇ

ਏਕੀਕਰਨ Ultimate Multisite ਐਡਮਿਨ ਵਿੱਚ DNS ਰਿਕਾਰਡ ਡਿਸਪਲੇ ਨੂੰ ਇਸ ਤਰ੍ਹਾਂ ਵਧੀਆ ਬਣਾਉਂਦਾ ਹੈ:

1. Cloudflare ਤੋਂ ਸਿੱਧੇ DNS ਰਿਕਾਰਡ ਲਿਆਉਣਾ
2. ਦਿਖਾਉਣਾ ਕਿ ਰਿਕਾਰਡ proxied ਹਨ ਜਾਂ ਨਹੀਂ
3. DNS ਰਿਕਾਰਡਾਂ ਬਾਰੇ ਵਾਧੂ ਜਾਣਕਾਰੀ ਦਿਖਾਉਣਾ

## ਮਹੱਤਵਪੂਰਨ ਨੋਟਸ

Cloudflare ਦੇ ਹਾਲੀਆ ਅੱਪਡੇਟਾਂ ਅਨੁਸਾਰ, wildcard proxying ਹੁਣ ਸਾਰੇ ਗਾਹਕਾਂ ਲਈ ਉਪਲਬਧ ਹੈ। ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ subdomain ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਲਈ Cloudflare ਏਕੀਕਰਨ ਪਹਿਲਾਂ ਜਿੰਨਾ ਜ਼ਰੂਰੀ ਨਹੀਂ ਰਿਹਾ, ਕਿਉਂਕਿ ਤੁਸੀਂ Cloudflare ਵਿੱਚ ਸਿੱਧੇ ਇੱਕ wildcard DNS ਰਿਕਾਰਡ ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ API token ਸਹੀ ਹੈ ਅਤੇ ਇਸ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਪਰਮਿਸ਼ਨਾਂ ਹਨ
- ਚੈੱਕ ਕਰੋ ਕਿ ਤੁਹਾਡਾ Zone ID ਸਹੀ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Cloudflare ਖਾਤੇ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਪਰਮਿਸ਼ਨਾਂ ਹਨ

### Subdomain ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਸੁਨੇਹਿਆਂ ਲਈ Ultimate Multisite ਲੌਗਸ ਚੈੱਕ ਕਰੋ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ subdomain ਪਹਿਲਾਂ ਤੋਂ Cloudflare ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ Cloudflare ਪਲਾਨ ਤੁਹਾਡੇ ਬਣਾਏ ਜਾ ਰਹੇ DNS ਰਿਕਾਰਡਾਂ ਦੀ ਗਿਣਤੀ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ

### Proxying ਸਮੱਸਿਆਵਾਂ
- ਜੇਕਰ ਤੁਸੀਂ ਨਹੀਂ ਚਾਹੁੰਦੇ ਕਿ subdomains proxied ਹੋਣ, ਤਾਂ ਤੁਸੀਂ `wu_cloudflare_should_proxy` filter ਵਰਤ ਸਕਦੇ ਹੋ
- ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ proxied ਹੋਣ 'ਤੇ ਸਹੀ ਤਰ੍ਹਾਂ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦੀਆਂ (ਉਦਾਹਰਨ ਲਈ, ਕੁਝ WordPress ਐਡਮਿਨ ਫੰਕਸ਼ਨ)
- ਐਡਮਿਨ ਪੇਜਾਂ ਲਈ cache ਨੂੰ bypass ਕਰਨ ਲਈ Cloudflare ਦੇ Page Rules ਵਰਤਣ ਬਾਰੇ ਸੋਚੋ
