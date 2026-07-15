---
title: Cloudflare ਇੰਟੀਗ੍ਰੇਸ਼ਨ
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਝਲਕ {#overview}
Cloudflare ਇੱਕ ਅਗੇਤਰੀ ਸਮੱਗਰੀ ਡਿਲਿਵਰੀ ਨੈੱਟਵਰਕ (CDN) ਅਤੇ ਸੁਰੱਖਿਆ ਪ੍ਰਦਾਤਾ ਹੈ ਜੋ ਵੈੱਬਸਾਈਟਾਂ ਦੀ ਰੱਖਿਆ ਕਰਨ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਤੇਜ਼ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ Cloudflare ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਪ੍ਰਬੰਧਨ ਸਮਰੱਥ ਕਰਦਾ ਹੈ, ਖ਼ਾਸ ਕਰਕੇ ਸਬਡੋਮੇਨ ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਲਈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ {#features}
- Cloudflare ਵਿੱਚ ਆਟੋਮੈਟਿਕ ਸਬਡੋਮੇਨ ਬਣਾਉਣਾ
- ਪ੍ਰਾਕਸੀ ਕੀਤੇ ਸਬਡੋਮੇਨ ਦਾ ਸਮਰਥਨ
- DNS ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਨ
- Ultimate Multisite ਐਡਮਿਨ ਵਿੱਚ ਸੁਧਾਰਿਆ ਹੋਇਆ DNS ਰਿਕਾਰਡ ਪ੍ਰਦਰਸ਼ਨ

## ਲੋੜਾਂ {#requirements}
ਹੇਠਾਂ ਦਿੱਤੇ ਕਾਂਸਟੈਂਟ ਤੁਹਾਡੀ `wp-config.php` ਫ਼ਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## ਸੈਟਅਪ ਹਦਾਇਤਾਂ {#setup-instructions}

### 1. ਆਪਣੀ Cloudflare API Key ਪ੍ਰਾਪਤ ਕਰੋ {#1-get-your-cloudflare-api-key}

1. ਆਪਣੇ Cloudflare dashboard ਵਿੱਚ ਲਾਗ ਇਨ ਕਰੋ
2. "My Profile" ਤੇ ਜਾਓ (ਉੱਪਰ-ਸੱਜੇ ਕੋਨੇ ਵਿੱਚ ਆਪਣੀ ਈਮੇਲ 'ਤੇ ਕਲਿੱਕ ਕਰੋ)
3. ਮੀਨੂ ਵਿੱਚੋਂ "API Tokens" ਚੁਣੋ
4. ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਅਨੁਮਤੀਆਂ ਨਾਲ ਇੱਕ ਨਵਾਂ API token ਬਣਾਓ:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. ਆਪਣਾ API token ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣੀ Zone ID ਪ੍ਰਾਪਤ ਕਰੋ {#2-get-your-zone-id}

1. ਆਪਣੇ Cloudflare dashboard ਵਿੱਚ, ਉਹ ਡੋਮੇਨ ਚੁਣੋ ਜੋ ਤੁਸੀਂ ਵਰਤਣਾ ਚਾਹੁੰਦੇ ਹੋ
2. Zone ID "Overview" ਟੈਬ ਵਿੱਚ, ਸੱਜੀ ਸਾਈਡਬਾਰ ਵਿੱਚ "API" ਦੇ ਹੇਠਾਂ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ
3. Zone ID ਕਾਪੀ ਕਰੋ

### 3. wp-config.php ਵਿੱਚ ਕਾਂਸਟੈਂਟ ਸ਼ਾਮਲ ਕਰੋ {#3-add-constants-to-wp-configphp}

ਆਪਣੀ `wp-config.php` ਫ਼ਾਈਲ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ ਕਾਂਸਟੈਂਟ ਸ਼ਾਮਲ ਕਰੋ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਮਰੱਥ ਕਰੋ {#4-enable-the-integration}

1. ਆਪਣੇ WordPress ਐਡਮਿਨ ਵਿੱਚ, Ultimate Multisite > Settings ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ 'ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. Cloudflare ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਮਰੱਥ ਕਰੋ
5. "Save Changes" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ {#how-it-works}

### ਸਬਡੋਮੇਨ ਪ੍ਰਬੰਧਨ {#subdomain-management}

ਜਦੋਂ ਸਬਡੋਮੇਨ ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨ ਵਿੱਚ ਨਵੀਂ ਸਾਈਟ ਬਣਾਈ ਜਾਂਦੀ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਬਡੋਮੇਨ ਲਈ CNAME ਰਿਕਾਰਡ ਸ਼ਾਮਲ ਕਰਨ ਵਾਸਤੇ Cloudflare ਦੀ API ਨੂੰ ਬੇਨਤੀ ਭੇਜਦਾ ਹੈ
2. ਸਬਡੋਮੇਨ ਨੂੰ ਮੂਲ ਰੂਪ ਵਿੱਚ Cloudflare ਰਾਹੀਂ ਪ੍ਰਾਕਸੀ ਹੋਣ ਲਈ ਸੰਰਚਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ (ਇਸ ਨੂੰ ਫ਼ਿਲਟਰਾਂ ਨਾਲ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ)
3. ਜਦੋਂ ਕੋਈ ਸਾਈਟ ਮਿਟਾਈ ਜਾਂਦੀ ਹੈ, ਇੰਟੀਗ੍ਰੇਸ਼ਨ Cloudflare ਵਿੱਚੋਂ ਸਬਡੋਮੇਨ ਹਟਾ ਦੇਵੇਗਾ

### DNS ਰਿਕਾਰਡ ਪ੍ਰਦਰਸ਼ਨ {#dns-record-display}

ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਐਡਮਿਨ ਵਿੱਚ DNS ਰਿਕਾਰਡ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਇਹ ਕਰਕੇ ਸੁਧਾਰਦਾ ਹੈ:

1. DNS ਰਿਕਾਰਡ ਸਿੱਧੇ Cloudflare ਤੋਂ ਪ੍ਰਾਪਤ ਕਰਨਾ
2. ਦਿਖਾਉਣਾ ਕਿ ਰਿਕਾਰਡ ਪ੍ਰਾਕਸੀ ਕੀਤੇ ਹੋਏ ਹਨ ਜਾਂ ਨਹੀਂ
3. DNS ਰਿਕਾਰਡਾਂ ਬਾਰੇ ਵਾਧੂ ਜਾਣਕਾਰੀ ਦਿਖਾਉਣਾ

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ਪਹਿਲਾਂ "Cloudflare for SaaS" ਕਿਹਾ ਜਾਂਦਾ ਸੀ) Cloudflare ਦੀ ਇੱਕ ਵਿਸ਼ੇਸ਼ਤਾ ਹੈ ਜੋ ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਨੂੰ ਤੁਹਾਡੇ ਮਲਟੀਸਾਈਟ ਨੈੱਟਵਰਕ 'ਤੇ SSL ਨਾਲ ਆਪਣੇ ਡੋਮੇਨ ਵਰਤਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੀ ਹੈ। ਇਹ Cloudflare ਵਰਤਣ ਵਾਲੀਆਂ ਡੋਮੇਨ-ਮੈਪ ਕੀਤੀਆਂ ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਲਈ ਸਿਫ਼ਾਰਸ਼ੀ ਤਰੀਕਾ ਹੈ, ਕਿਉਂਕਿ Cloudflare ਹਰ ਕਸਟਮ ਡੋਮੇਨ ਲਈ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਅਤੇ ਨਵੀਨੀਕਰਨ ਨੂੰ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਸੰਭਾਲਦਾ ਹੈ।

### ਇਹ ਮਿਆਰੀ Cloudflare ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤੋਂ ਕਿਵੇਂ ਵੱਖਰਾ ਹੈ {#how-it-differs-from-the-standard-cloudflare-integration}

| | ਮਿਆਰੀ ਇੰਟੀਗ੍ਰੇਸ਼ਨ | Cloudflare Custom Hostnames |
|---|---|---|
| **ਉਦੇਸ਼** | ਸਬਡੋਮੇਨਾਂ ਲਈ DNS ਰਿਕਾਰਡ ਆਟੋਮੈਟਿਕ ਬਣਾਉਂਦਾ ਹੈ | Cloudflare-ਪ੍ਰਬੰਧਿਤ SSL ਨਾਲ ਕਸਟਮ (ਮੈਪ ਕੀਤੇ) ਡੋਮੇਨ ਸਮਰੱਥ ਕਰਦਾ ਹੈ |
| **ਇਸ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ** | ਸਬਡੋਮੇਨ ਮਲਟੀਸਾਈਟ | ਡੋਮੇਨ-ਮੈਪ ਕੀਤਾ ਮਲਟੀਸਾਈਟ |
| **SSL** | ਵੱਖਰੇ ਤੌਰ 'ਤੇ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ | Cloudflare ਦੁਆਰਾ ਆਟੋਮੈਟਿਕ ਪ੍ਰਬੰਧਿਤ |

### Cloudflare Custom Hostnames ਸੈਟਅਪ ਕਰਨਾ {#setting-up-cloudflare-custom-hostnames}

1. ਆਪਣੇ Cloudflare dashboard ਵਿੱਚ, ਆਪਣੇ ਮੁੱਖ ਡੋਮੇਨ ਲਈ ਜ਼ੋਨ ਖੋਲ੍ਹੋ।
2. **SSL/TLS > Custom Hostnames** ਤੇ ਜਾਓ।
3. ਆਪਣੇ ਸਰਵਰ ਦੇ IP ਜਾਂ ਹੋਸਟਨਾਮ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ fallback origin ਸ਼ਾਮਲ ਕਰੋ।
4. Ultimate Multisite ਵਿੱਚ ਮੈਪ ਕੀਤੇ ਹਰ ਗਾਹਕ ਡੋਮੇਨ ਲਈ, Cloudflare ਵਿੱਚ ਇੱਕ Custom Hostname ਐਂਟਰੀ ਸ਼ਾਮਲ ਕਰੋ। ਤੁਸੀਂ Cloudflare API ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇਸ ਕਦਮ ਨੂੰ ਆਟੋਮੇਟ ਕਰ ਸਕਦੇ ਹੋ।
5. ਜਦੋਂ ਗਾਹਕ ਦਾ DNS ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, Cloudflare ਹਰ ਕਸਟਮ ਹੋਸਟਨਾਮ ਲਈ TLS ਸਰਟੀਫਿਕੇਟ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਜਾਰੀ ਅਤੇ ਨਵੀਨੀਕਰਨ ਕਰਦਾ ਹੈ।

ਪੂਰੇ API ਹਵਾਲੇ ਲਈ, [Cloudflare Custom Hostnames ਦਸਤਾਵੇਜ਼](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) ਵੇਖੋ।

:::note ਸ਼ਬਦਾਵਲੀ ਅੱਪਡੇਟ
Ultimate Multisite v2.6.1 ਤੋਂ, ਇਸ ਵਿਸ਼ੇਸ਼ਤਾ ਨੂੰ ਸਾਰੀਆਂ plugin ਸੈਟਿੰਗਾਂ ਅਤੇ ਲੇਬਲਾਂ ਵਿੱਚ **Cloudflare Custom Hostnames** ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਪੁਰਾਣੇ ਵਰਜਨਾਂ ਨੇ "Cloudflare for SaaS" ਨਾਮ ਵਰਤਿਆ ਸੀ, ਜੋ ਅਸਲ Cloudflare product ਨਾਮ ਹੈ।
:::

## ਮਹੱਤਵਪੂਰਨ ਨੋਟ {#important-notes}

Cloudflare ਦੇ ਹਾਲੀਆ ਅੱਪਡੇਟਾਂ ਤੋਂ ਬਾਅਦ, wildcard proxying ਹੁਣ ਸਾਰੇ ਗਾਹਕਾਂ ਲਈ ਉਪਲਬਧ ਹੈ। ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ ਮਿਆਰੀ Cloudflare DNS ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਬਡੋਮੇਨ ਮਲਟੀਸਾਈਟ ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਲਈ ਪਹਿਲਾਂ ਨਾਲੋਂ ਘੱਟ ਜ਼ਰੂਰੀ ਹੈ, ਕਿਉਂਕਿ ਤੁਸੀਂ Cloudflare ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ wildcard DNS ਰਿਕਾਰਡ ਸੈਟਅਪ ਕਰ ਸਕਦੇ ਹੋ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ {#troubleshooting}

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ {#api-connection-issues}
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡਾ API token ਸਹੀ ਹੈ ਅਤੇ ਇਸ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਅਨੁਮਤੀਆਂ ਹਨ
- ਜਾਂਚੋ ਕਿ ਤੁਹਾਡੀ Zone ID ਸਹੀ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Cloudflare account ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਅਨੁਮਤੀਆਂ ਹਨ

### ਸਬਡੋਮੇਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ {#subdomain-not-added}
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਸੁਨੇਹੇ ਲਈ Ultimate Multisite ਲਾਗਾਂ ਦੀ ਜਾਂਚ ਕਰੋ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਸਬਡੋਮੇਨ ਪਹਿਲਾਂ ਹੀ Cloudflare ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤਾ ਗਿਆ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ Cloudflare plan ਉਹਨਾਂ DNS ਰਿਕਾਰਡਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਬਣਾ ਰਹੇ ਹੋ

### ਪ੍ਰਾਕਸੀ ਕਰਨ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ {#proxying-issues}
- ਜੇ ਤੁਸੀਂ ਨਹੀਂ ਚਾਹੁੰਦੇ ਕਿ ਸਬਡੋਮੇਨ ਪ੍ਰਾਕਸੀ ਕੀਤੇ ਜਾਣ, ਤਾਂ ਤੁਸੀਂ `wu_cloudflare_should_proxy` ਫ਼ਿਲਟਰ ਵਰਤ ਸਕਦੇ ਹੋ
- ਪ੍ਰਾਕਸੀ ਕੀਤੇ ਜਾਣ 'ਤੇ ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਠੀਕ ਤਰ੍ਹਾਂ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦੀਆਂ (ਜਿਵੇਂ, ਕੁਝ WordPress ਐਡਮਿਨ ਫੰਕਸ਼ਨ)
- ਐਡਮਿਨ ਪੰਨਿਆਂ ਲਈ ਕੈਸ਼ ਨੂੰ ਬਾਈਪਾਸ ਕਰਨ ਵਾਸਤੇ Cloudflare ਦੇ Page Rules ਦੀ ਵਰਤੋਂ ਕਰਨ ਬਾਰੇ ਸੋਚੋ
