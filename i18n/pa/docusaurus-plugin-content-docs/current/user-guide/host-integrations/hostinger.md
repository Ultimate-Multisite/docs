---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## ਜਾਣ-ਪਛਾਣ (Overview)

Hostinger ਇੱਕ ਪ੍ਰਸਿੱਧ web hosting provider ਹੈ ਜਿਸ ਕੋਲ hPanel ਨਾਮ ਦਾ ਇੱਕ ਆਧੁਨਿਕ control panel ਹੈ। Ultimate Multisite Hostinger integration Ultimate Multisite ਅਤੇ Hostinger ਦੇ hPanel ਵਿਚਕਾਰ domain ਨੂੰ ਆਪਣੇ ਆਪ sync ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ। ਇਸ ਨਾਲ ਤੁਸੀਂ ਆਪਣੇ WordPress admin ਤੋਂ ਹੀ domain mappings ਅਤੇ subdomains ਨੂੰ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ manage ਕਰ ਸਕਦੇ ਹੋ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ (Features)

- hPanel ਵਿੱਚ automatic addon domain creation
- hPanel ਵਿੱਚ automatic subdomain creation (subdomain multisite installations ਲਈ)
- ਜਦੋਂ mappings ਹਟਾਏ ਜਾਂਦੇ ਹਨ ਤਾਂ domain ਦਾ removal
- hPanel ਦੇ domain management API ਨਾਲ ਨਿਰਵਿਘਨ (seamless) integration

## ਲੋੜਾਂ (Requirements)

Hostinger integration ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ, ਤੁਹਾਨੂੰ ਇਹ ਚੀਜ਼ਾਂ ਚਾਹੀਦੀਆਂ ਹਨ:

1. hPanel access ਵਾਲਾ ਇੱਕ Hostinger account
2. Hostinger ਤੋਂ ਇੱਕ API token
3. ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠ ਲਿਖੇ constants define ਕੀਤੇ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ, ਤੁਸੀਂ ਇਹ ਵੀ define ਕਰ ਸਕਦੇ ਹੋ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## ਸੈਟਅਪ ਨਿਰਦੇਸ਼ (Setup Instructions)

### 1. ਆਪਣਾ Hostinger API Token ਬਣਾਓ

1. ਆਪਣੇ Hostinger account ਵਿੱਚ log in ਕਰੋ ਅਤੇ hPanel access ਕਰੋ।
2. **Account Settings** → **API Tokens** 'ਤੇ ਜਾਓ।
3. **Create New Token** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।
4. ਆਪਣੇ token ਨੂੰ ਇੱਕ ਵਿਆਕਰਸ਼ੀ ਨਾਮ ਦਿਓ (ਜਿਵੇਂ ਕਿ, "Ultimate Multisite")।
5. ਲੋੜੀਂਦੀਆਂ permissions ਚੁਣੋ:
   - Domain management
   - Subdomain management
6. ਬਣਾਏ ਗਏ token ਨੂੰ copy ਕਰੋ ਅਤੇ ਇਸਨੂੰ ਸੁਰੱਖਿਅਤ ਥਾਂ 'ਤੇ ਸਟੋਰ ਕਰੋ।

### 2. ਆਪਣਾ Account ID ਲੱਭੋ

1. hPanel ਵਿੱਚ, **Account Settings** → **Account Information** 'ਤੇ ਜਾਓ।
2. ਤੁਹਾਡਾ Account ID ਇਸ ਪੇਜ 'ਤੇ ਦਿਖਾਇਆ ਗਿਆ ਹੈ।
3. ਇਸ ID ਨੂੰ copy ਕਰੋ ਅਤੇ ਅਗਲੇ ਕਦਮ ਲਈ ਸੇਵ ਕਰੋ।

### 3. wp-config.php ਵਿੱਚ Constants ਜੋੜੋ

ਹੇਠ ਲਿਖੇ constants ਨੂੰ ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਜੋੜੋ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ਜੇਕਰ ਤੁਹਾਡਾ Hostinger account ਕਿਸੇ ਵੱਖਰੇ API endpoint ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਇਸਨੂੰ customize ਕਰ ਸਕਦੇ ਹੋ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integration ਨੂੰ Enable ਕਰੋ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, **Ultimate Multisite > Settings** 'ਤੇ ਜਾਓ।
2. **Domain Mapping** tab 'ਤੇ ਜਾਓ।
3. **Host Integrations** ਤੱਕ scroll ਕਰੋ।
4. **Hostinger (hPanel)** integration ਨੂੰ enable ਕਰੋ।
5. **Save Changes** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ (How It Works)

### Addon Domains

ਜਦੋਂ ਤੁਸੀਂ Ultimate Multisite ਵਿੱਚ ਇੱਕ domain map ਕਰਦੇ ਹੋ:

1. integration Hostinger ਦੇ API ਨੂੰ ਇੱਕ request ਭੇਜਦਾ ਹੈ ਤਾਂ ਜੋ domain ਨੂੰ addon domain ਵਜੋਂ ਜੋੜਿਆ ਜਾ ਸਕੇ।
2. domain ਨੂੰ ਤੁਹਾਡੇ root directory ਵੱਲ point ਕਰਨ ਲਈ configure ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
3. ਜਦੋਂ domain mapping ਹਟਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ integration ਆਪਣੇ ਆਪ hPanel ਤੋਂ addon domain ਹਟਾ ਦਿੰਦਾ ਹੈ।

### Subdomains

Subdomain multisite installations ਲਈ, ਜਦੋਂ ਇੱਕ ਨਵਾਂ site ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ:

1. integration ਪੂਰੇ domain ਵਿੱਚੋਂ subdomain part ਨੂੰ extract ਕਰਦਾ ਹੈ।
2. ਇਹ subdomain ਜੋੜਨ ਲਈ Hostinger ਦੇ API ਨੂੰ ਇੱਕ request ਭੇਜਦਾ ਹੈ।
3. subdomain ਨੂੰ ਤੁਹਾਡੇ root directory ਵੱਲ point ਕਰਨ ਲਈ configure ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

## ਜ਼ਰੂਰੀ ਨੋਟਾਂ (Important Notes)

- integration ਤੁਹਾਡੇ account ਨਾਲ communicate ਕਰਨ ਲਈ Hostinger ਦੇ REST API ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।
- ਤੁਹਾਡੇ API token ਵਿੱਚ domain ਅਤੇ subdomain management ਲਈ ਲੋੜੀਂਦੀ permissions ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।
- integration DNS configuration ਨੂੰ handle ਨਹੀਂ ਕਰਦਾ; domains ਪਹਿਲਾਂ ਹੀ ਤੁਹਾਡੇ Hostinger account ਵੱਲ point ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।
- API requests HTTPS ਰਾਹੀਂ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।
- ਆਪਣੇ API token ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖੋ ਅਤੇ ਕਦੇ ਵੀ ਇਸਨੂੰ ਜਨਤਕ ਤੌਰ 'ਤੇ ਸਾਂਝਾ ਨਾ ਕਰੋ।

## ਸਮੱਸਿਆ ਨਿਪਟਾਰਾ (Troubleshooting)

### API Connection Issues

- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡਾ API token ਸਹੀ ਹੈ ਅਤੇ ਪੱਕਾ ਨਹੀਂ ਹੋਇਆ ਹੈ।
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡਾ Account ID ਸਹੀ ਹੈ।
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ API token ਵਿੱਚ domain management ਲਈ ਲੋੜੀਂਦੀ permissions ਹਨ।
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡਾ Hostinger account active ਹੈ ਅਤੇ ਚੰਗੀ ਹਾਲਤ ਵਿੱਚ ਹੈ।

### Domain Not Added

- ਕਿਸੇ ਵੀ error message ਲਈ Ultimate Multisite logs ਦੀ ਜਾਂਚ ਕਰੋ।
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ domain ਪਹਿਲਾਂ ਹੀ ਤੁਹਾਡੇ Hostinger account ਵਿੱਚ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ ਹੈ।
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Hostinger account ਨੇ addon domains ਲਈ ਆਪਣੀ limit ਨਹੀਂ ਪਹੁੰਚ ਲਈ ਹੈ।
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ domain ਸਹੀ ਢੰਗ ਨਾਲ ਤੁਹਾਡੇ Hostinger nameservers ਵੱਲ point ਕੀਤਾ ਗਿਆ ਹੈ।

### SSL Certificate Issues

- integration SSL certificate issue ਨਹੀਂ ਕਰਦਾ।
- Hostinger ਆਮ ਤੌਰ 'ਤੇ AutoSSL ਰਾਹੀਂ ਮੁਫਤ SSL certificates ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।
- ਤੁਸੀਂ **SSL/TLS** ਹੇਠਾਂ hPanel ਵਿੱਚ ਸਿੱਧੇ ਤੌਰ 'ਤੇ SSL certificates manage ਕਰ ਸਕਦੇ ਹੋ।
- ਵਿਕਲਪ ਵਜੋਂ, Hostinger ਦੇ AutoSSL feature ਨਾਲ Let's Encrypt ਦੀ ਵਰਤੋਂ ਕਰੋ।

## ਸਪੋਰਟ (Support)

Hostinger integration ਨਾਲ ਵਾਧੂ ਮਦਦ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਇਨ੍ਹਾਂ ਨੂੰ ਦੇਖੋ:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
