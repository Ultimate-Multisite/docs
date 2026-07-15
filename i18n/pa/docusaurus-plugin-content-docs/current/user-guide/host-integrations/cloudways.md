---
title: Cloudways ਏਕੀਕਰਨ
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਝਲਕ {#overview}
Cloudways ਇੱਕ managed cloud hosting ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਤੁਹਾਨੂੰ DigitalOcean, AWS, Google Cloud, ਅਤੇ ਹੋਰ ਵਰਗੇ ਵੱਖ-ਵੱਖ cloud providers ਉੱਤੇ WordPress ਸਾਈਟਾਂ deploy ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ Cloudways ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ ਅਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ {#features}
- ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ
- SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ
- ਵਾਧੂ ਡੋਮੇਨਾਂ ਲਈ ਸਹਾਇਤਾ
- SSL ਸਰਟੀਫਿਕੇਟਾਂ ਲਈ DNS ਵੈਲੀਡੇਸ਼ਨ

## ਲੋੜਾਂ {#requirements}
ਹੇਠਾਂ ਦਿੱਤੇ constants ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

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

## ਸੈਟਅੱਪ ਹਦਾਇਤਾਂ {#setup-instructions}

### 1. ਆਪਣੇ Cloudways API ਕ੍ਰੈਡੈਂਸ਼ਲ ਪ੍ਰਾਪਤ ਕਰੋ {#1-get-your-cloudways-api-credentials}

1. ਆਪਣੇ Cloudways Dashboard ਵਿੱਚ ਲੌਗ ਇਨ ਕਰੋ
2. "Account" > "API Keys" 'ਤੇ ਜਾਓ
3. ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਨਹੀਂ ਹੈ ਤਾਂ ਇੱਕ API key ਬਣਾਓ
4. ਆਪਣਾ ਈਮੇਲ ਅਤੇ API key ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣੇ ਸਰਵਰ ਅਤੇ ਐਪਲੀਕੇਸ਼ਨ IDs ਪ੍ਰਾਪਤ ਕਰੋ {#2-get-your-server-and-application-ids}

1. ਆਪਣੇ Cloudways Dashboard ਵਿੱਚ, "ਸਰਵਰ" 'ਤੇ ਜਾਓ
2. ਉਹ ਸਰਵਰ ਚੁਣੋ ਜਿੱਥੇ ਤੁਹਾਡਾ WordPress multisite ਹੋਸਟ ਕੀਤਾ ਗਿਆ ਹੈ
3. Server ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "ਐਪਲੀਕੇਸ਼ਨਾਂ" 'ਤੇ ਜਾਓ ਅਤੇ ਆਪਣੀ WordPress ਐਪਲੀਕੇਸ਼ਨ ਚੁਣੋ
5. App ID URL ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ਵਿੱਚ Constants ਸ਼ਾਮਲ ਕਰੋ {#3-add-constants-to-wp-configphp}

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਵਾਧੂ **ਬਾਹਰੀ** ਡੋਮੇਨ ਹਨ (ਤੁਹਾਡੇ multisite ਨੈੱਟਵਰਕ ਤੋਂ ਬਾਹਰ) ਜੋ ਹਮੇਸ਼ਾਂ Cloudways aliases ਸੂਚੀ ਵਿੱਚ ਰੱਖੇ ਜਾਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning ਆਪਣੇ ਨੈੱਟਵਰਕ ਦਾ wildcard ਸ਼ਾਮਲ ਨਾ ਕਰੋ
`WU_CLOUDWAYS_EXTRA_DOMAINS` ਵਿੱਚ `*.your-network.com` (ਜਾਂ ਆਪਣੇ ਨੈੱਟਵਰਕ ਦਾ ਕੋਈ ਵੀ subdomain pattern) **ਨਾ** ਸ਼ਾਮਲ ਕਰੋ। ਇਹ ਪ੍ਰਤੀ-tenant SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਹੋਣ ਤੋਂ ਕਿਉਂ ਰੋਕਦਾ ਹੈ, ਇਸ ਲਈ ਹੇਠਾਂ [ਮਹੱਤਵਪੂਰਨ — wildcard SSL ਖਤਰਾ](#important--wildcard-ssl-pitfall)
ਵੇਖੋ।
:::

### 4. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਯੋਗ ਕਰੋ {#4-enable-the-integration}

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, Ultimate Multisite > ਸੈਟਿੰਗਾਂ 'ਤੇ ਜਾਓ
2. "ਡੋਮੇਨ ਮੈਪਿੰਗ" ਟੈਬ 'ਤੇ ਜਾਓ
3. "ਹੋਸਟ ਇੰਟੀਗ੍ਰੇਸ਼ਨ" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. Cloudways ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਯੋਗ ਕਰੋ
5. "ਬਦਲਾਅ ਸੇਵ ਕਰੋ" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ {#how-it-works}

### ਡੋਮੇਨ ਸਿੰਕਿੰਗ {#domain-syncing}

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਮੌਜੂਦਾ ਸਮੇਂ ਮੈਪ ਕੀਤੇ ਸਾਰੇ ਡੋਮੇਨ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ
2. ਇਹ ਨਵੇਂ ਡੋਮੇਨ ਨੂੰ ਸੂਚੀ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ (ਜੇ ਲਾਗੂ ਹੋਵੇ ਤਾਂ www ਵਰਜਨ ਸਮੇਤ)
3. ਇਹ ਪੂਰੀ ਸੂਚੀ API ਰਾਹੀਂ Cloudways ਨੂੰ ਭੇਜਦਾ ਹੈ
4. Cloudways ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਲਈ ਡੋਮੇਨ aliases ਅਪਡੇਟ ਕਰਦਾ ਹੈ

ਨੋਟ: Cloudways API ਲਈ ਹਰ ਵਾਰ ਡੋਮੇਨਾਂ ਦੀ ਪੂਰੀ ਸੂਚੀ ਭੇਜਣੀ ਲਾਜ਼ਮੀ ਹੈ, ਨਾ ਕਿ ਸਿਰਫ਼ ਵੱਖ-ਵੱਖ ਡੋਮੇਨ ਸ਼ਾਮਲ ਜਾਂ ਹਟਾਉਣੇ।

### SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ {#ssl-certificate-management}

ਡੋਮੇਨ ਸਿੰਕ ਹੋਣ ਤੋਂ ਬਾਅਦ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਜਾਂਚਦਾ ਹੈ ਕਿ ਕਿਹੜੇ ਡੋਮੇਨਾਂ ਦੇ ਵੈਧ DNS records ਤੁਹਾਡੇ ਸਰਵਰ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰ ਰਹੇ ਹਨ
2. ਇਹ Cloudways ਨੂੰ ਉਹਨਾਂ ਡੋਮੇਨਾਂ ਲਈ Let's Encrypt SSL ਸਰਟੀਫਿਕੇਟ install ਕਰਨ ਦੀ ਬੇਨਤੀ ਭੇਜਦਾ ਹੈ
3. Cloudways SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਅਤੇ installation ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ

ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਹਮੇਸ਼ਾਂ Cloudways ਤੋਂ **standard** (non-wildcard) Let's Encrypt ਸਰਟੀਫਿਕੇਟਾਂ ਦੀ ਬੇਨਤੀ ਕਰਦਾ ਹੈ। ਜੇ `WU_CLOUDWAYS_EXTRA_DOMAINS` ਵਿੱਚ ਕੋਈ wildcard pattern ਦਿੱਤਾ ਗਿਆ ਹੈ, ਤਾਂ SSL ਬੇਨਤੀ ਤੋਂ ਪਹਿਲਾਂ ਅੱਗੇ ਵਾਲਾ
`*.` ਹਟਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ — wildcard ਖੁਦ ਇਸ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੁਆਰਾ ਕਦੇ install ਨਹੀਂ ਹੁੰਦਾ। Cloudways ਉੱਤੇ wildcard ਸਰਟੀਫਿਕੇਟ ਵਰਤਣ ਲਈ ਤੁਹਾਨੂੰ ਇਸਨੂੰ ਹੱਥੋਂ install ਕਰਨਾ ਪਵੇਗਾ, ਪਰ ਇਹ ਕਰਨ ਨਾਲ ਮੈਪ ਕੀਤੇ custom ਡੋਮੇਨਾਂ ਲਈ ਪ੍ਰਤੀ-ਡੋਮੇਨ Let's Encrypt ਜਾਰੀ ਹੋਣਾ ਬਲੌਕ ਹੋ ਜਾਂਦਾ ਹੈ
(ਹੇਠਾਂ ਦਿੱਤਾ ਖਤਰਾ ਵੇਖੋ)।

## ਵਾਧੂ ਡੋਮੇਨ {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant ਤੁਹਾਨੂੰ ਵਾਧੂ **ਬਾਹਰੀ**
ਡੋਮੇਨ ਨਿਰਧਾਰਤ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ ਜੋ ਹਮੇਸ਼ਾਂ Cloudways ਐਪਲੀਕੇਸ਼ਨ ਦੀ aliases ਸੂਚੀ ਵਿੱਚ ਰੱਖੇ ਜਾਣੇ ਚਾਹੀਦੇ ਹਨ। ਇਸਨੂੰ ਇਸ ਲਈ ਵਰਤੋ:

- ਬਾਹਰੀ ਡੋਮੇਨ ਜੋ Ultimate Multisite ਦੁਆਰਾ ਪ੍ਰਬੰਧਿਤ ਨਹੀਂ ਹਨ (ਉਦਾਹਰਨ ਲਈ, ਉਹੀ Cloudways ਐਪਲੀਕੇਸ਼ਨ ਸਾਂਝੀ ਕਰਨ ਵਾਲੀ ਇੱਕ ਵੱਖਰੀ ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ)
- Parked ਜਾਂ staging ਡੋਮੇਨ ਜੋ ਤੁਸੀਂ ਐਪਲੀਕੇਸ਼ਨ aliases ਸੂਚੀ ਵਿੱਚ ਰੱਖਣਾ ਚਾਹੁੰਦੇ ਹੋ

ਆਪਣੇ ਨੈੱਟਵਰਕ ਦੇ subdomain wildcard ਲਈ ਇਸ constant ਨੂੰ **ਨਾ** ਵਰਤੋ
(ਉਦਾਹਰਨ ਲਈ `*.your-network.com`)। ਹੇਠਾਂ wildcard SSL ਖਤਰਾ ਵੇਖੋ।

## ਮਹੱਤਵਪੂਰਨ — Wildcard SSL ਖਤਰਾ {#important--wildcard-ssl-pitfall}

Cloudways ਦੇ ਡਿਫੌਲਟ ਸੈਟਅੱਪ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਸਮੇਂ ਇੱਕ ਆਮ ਗਲਤੀ ਇਹ ਹੈ ਕਿ
`WU_CLOUDWAYS_EXTRA_DOMAINS` ਵਿੱਚ `*.your-network.com` ਵਰਗਾ wildcard ਸ਼ਾਮਲ ਕਰ ਦਿੱਤਾ ਜਾਵੇ, ਜਾਂ ਉਸ wildcard ਲਈ Cloudways
wildcard SSL ਸਰਟੀਫਿਕੇਟ ਹੱਥੋਂ install ਕਰ ਦਿੱਤਾ ਜਾਵੇ।

**ਜੇ ਤੁਸੀਂ ਇਹ ਕਰਦੇ ਹੋ, ਤਾਂ Cloudways Ultimate Multisite ਦੁਆਰਾ ਮੈਪ ਕੀਤੇ
ਪ੍ਰਤੀ-tenant custom ਡੋਮੇਨਾਂ ਲਈ Let's Encrypt ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦੇਵੇਗਾ।** Cloudways ਹਰ ਵਾਰ ਐਪਲੀਕੇਸ਼ਨ ਉੱਤੇ active
SSL ਸਰਟੀਫਿਕੇਟ ਬਦਲਦਾ ਹੈ, ਅਤੇ ਐਪਲੀਕੇਸ਼ਨ ਉੱਤੇ ਪਹਿਲਾਂ ਤੋਂ ਮੌਜੂਦ wildcard ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਤੀ-ਡੋਮੇਨ Let's Encrypt ਜਾਰੀ ਕਰਨ ਨੂੰ ਬਲੌਕ ਕਰਦਾ ਹੈ ਜਿਸ 'ਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।

### Ultimate Multisite ਨੈੱਟਵਰਕ ਲਈ ਸਿਫਾਰਸ਼ੀ Cloudways SSL ਸੈਟਅੱਪ {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways ਐਪਲੀਕੇਸ਼ਨ ਦੀ **SSL ਸਰਟੀਫਿਕੇਟ** ਟੈਬ ਵਿੱਚ, ਇੱਕ **standard
   Let's Encrypt ਸਰਟੀਫਿਕੇਟ** install ਕਰੋ ਜੋ ਸਿਰਫ਼ `your-network.com` ਅਤੇ `www.your-network.com` ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੋਵੇ
   — wildcard **ਨਹੀਂ**।
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` ਵਿੱਚ `*.your-network.com` (ਜਾਂ ਆਪਣੇ ਨੈੱਟਵਰਕ ਦਾ ਕੋਈ ਵੀ subdomain pattern) **ਨਾ** ਪਾਓ। ਉਸ constant ਨੂੰ ਸਿਰਫ਼ **ਬਾਹਰੀ** ਡੋਮੇਨਾਂ ਲਈ ਰਾਖਵਾਂ ਰੱਖੋ।
3. ਪ੍ਰਤੀ-tenant subdomain wildcard ਸਿਰਫ਼ **DNS** ਪੱਧਰ 'ਤੇ ਬਣਾਓ (`*.your-network.com` ਲਈ ਇੱਕ `A` record
   ਜੋ ਤੁਹਾਡੇ Cloudways ਸਰਵਰ IP ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੋਵੇ) ਤਾਂ ਜੋ subsites resolve ਹੋ ਸਕਣ। ਵਿਅਕਤੀਗਤ ਮੈਪ ਕੀਤੇ custom ਡੋਮੇਨਾਂ ਲਈ SSL ਫਿਰ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੁਆਰਾ
   Let's Encrypt ਰਾਹੀਂ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਜਾਰੀ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

ਜੇ ਤੁਹਾਡੇ ਕਿਰਾਏਦਾਰਾਂ ਦੇ ਕਸਟਮ ਡੋਮੇਨ SSL ਤੋਂ ਬਿਨਾਂ ਅਟਕੇ ਹੋਏ ਹਨ, ਤਾਂ Cloudways SSL ਟੈਬ ਦੀ ਜਾਂਚ ਕਰੋ। ਜੇ ਉੱਥੇ ਕੋਈ
ਵਾਈਲਡਕਾਰਡ ਸਰਟੀਫਿਕੇਟ ਸਰਗਰਮ ਹੈ, ਤਾਂ ਇਸਨੂੰ ਹਟਾਓ, ਸਿਰਫ਼ ਮੁੱਖ ਨੈੱਟਵਰਕ ਡੋਮੇਨ ਲਈ ਇੱਕ ਮਿਆਰੀ Let's Encrypt
ਸਰਟੀਫਿਕੇਟ ਮੁੜ ਜਾਰੀ ਕਰੋ, ਅਤੇ `WU_CLOUDWAYS_EXTRA_DOMAINS` ਤੋਂ ਕੋਈ ਵੀ ਵਾਈਲਡਕਾਰਡ ਐਂਟਰੀਆਂ ਹਟਾਓ। ਫਿਰ ਇੱਕ ਡੋਮੇਨ ਮੈਪਿੰਗ ਮੁੜ-ਟ੍ਰਿਗਰ ਕਰੋ (ਜਾਂ ਅਗਲੀ ਦੀ ਉਡੀਕ ਕਰੋ)
ਅਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਮੁੜ ਪ੍ਰਤੀ-ਡੋਮੇਨ ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰ ਦੇਵੇਗੀ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਣ {#troubleshooting}

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ {#api-connection-issues}
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡਾ ਈਮੇਲ ਅਤੇ API key ਸਹੀ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਸਰਵਰ ਅਤੇ ਐਪਲੀਕੇਸ਼ਨ IDs ਸਹੀ ਹਨ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Cloudways Account ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਇਜਾਜ਼ਤਾਂ ਹਨ

### SSL ਸਰਟੀਫਿਕੇਟ ਸਮੱਸਿਆਵਾਂ {#ssl-certificate-issues}
- Cloudways ਲਈ ਲੋੜੀਂਦਾ ਹੈ ਕਿ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡੋਮੇਨਾਂ ਦੇ ਵੈਧ DNS ਰਿਕਾਰਡ ਤੁਹਾਡੇ ਸਰਵਰ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦੇ ਹੋਣ
- ਇੰਟੀਗ੍ਰੇਸ਼ਨ SSL ਸਰਟੀਫਿਕੇਟ ਮੰਗਣ ਤੋਂ ਪਹਿਲਾਂ DNS ਰਿਕਾਰਡਾਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦੀ ਹੈ
- ਜੇ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਨਹੀਂ ਹੋ ਰਹੇ, ਤਾਂ ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਡੋਮੇਨ ਤੁਹਾਡੇ ਸਰਵਰ ਦੇ IP ਐਡਰੈੱਸ ਵੱਲ ਠੀਕ ਤਰ੍ਹਾਂ ਇਸ਼ਾਰਾ ਕਰ ਰਹੇ ਹਨ
- **ਪ੍ਰਤੀ-ਕਿਰਾਏਦਾਰ ਕਸਟਮ ਡੋਮੇਨ SSL ਤੋਂ ਬਿਨਾਂ ਅਟਕੇ ਹੋਏ ਹਨ?** Cloudways ਐਪਲੀਕੇਸ਼ਨ ਦੀ SSL Certificate ਟੈਬ ਦੀ ਜਾਂਚ ਕਰੋ। ਜੇ ਕੋਈ ਵਾਈਲਡਕਾਰਡ ਸਰਟੀਫਿਕੇਟ (ਹੱਥੋਂ ਇੰਸਟਾਲ ਕੀਤਾ ਹੋਇਆ, ਜਾਂ `*.your-network.com` ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੋਇਆ) ਸਰਗਰਮ ਹੈ, ਤਾਂ Cloudways ਵੱਖ-ਵੱਖ ਮੈਪ ਕੀਤੇ ਕਸਟਮ ਡੋਮੇਨਾਂ ਲਈ Let's Encrypt ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਨਹੀਂ ਕਰੇਗਾ। ਇਸਨੂੰ ਇੱਕ ਮਿਆਰੀ Let's Encrypt ਸਰਟੀਫਿਕੇਟ ਨਾਲ ਬਦਲੋ ਜੋ ਸਿਰਫ਼ ਮੁੱਖ ਨੈੱਟਵਰਕ ਡੋਮੇਨ (`your-network.com`, `www.your-network.com`) ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੋਵੇ ਅਤੇ `WU_CLOUDWAYS_EXTRA_DOMAINS` ਤੋਂ ਕੋਈ ਵੀ ਵਾਈਲਡਕਾਰਡ ਐਂਟਰੀਆਂ ਹਟਾਓ। ਫਿਰ ਇੱਕ ਡੋਮੇਨ ਮੈਪਿੰਗ ਮੁੜ-ਟ੍ਰਿਗਰ ਕਰੋ (ਜਾਂ ਅਗਲੀ ਦੀ ਉਡੀਕ ਕਰੋ) ਅਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਪ੍ਰਤੀ-ਡੋਮੇਨ ਸਰਟੀਫਿਕੇਟਾਂ ਦੀ ਬੇਨਤੀ ਕਰੇਗੀ।

### ਡੋਮੇਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ {#domain-not-added}
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਸੁਨੇਹਿਆਂ ਲਈ Ultimate Multisite ਲਾਗਾਂ ਦੀ ਜਾਂਚ ਕਰੋ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਡੋਮੇਨ ਪਹਿਲਾਂ ਹੀ Cloudways ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤਾ ਗਿਆ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ Cloudways ਪਲਾਨ ਉਹਨਾਂ ਡੋਮੇਨਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਸ਼ਾਮਲ ਕਰ ਰਹੇ ਹੋ
