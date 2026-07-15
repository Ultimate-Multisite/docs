---
title: CyberPanel ਏਕੀਕਰਨ
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

ਇਹ ਗਾਈਡ ਦੱਸਦੀ ਹੈ ਕਿ Ultimate Multisite CyberPanel integration ਨੂੰ ਕਿਵੇਂ configure ਕਰਨਾ ਹੈ ਤਾਂ ਜੋ ਤੁਹਾਡੇ ਨੈਟਵਰਕ ਵਿੱਚ ਮੈਪ ਕੀਤੇ ਗਏ ਡੋਮੇਨ ਆਟੋਮੈਟਿਕਲੀ (ਅਤੇ ਹਟਾਏ ਜਾਣ 'ਤੇ) CyberPanel ਵਿੱਚ ਵਰਚੁਅਲ ਹੋਸਟ ਵਜੋਂ ਜੋੜੇ ਜਾ ਸਕਣ, ਜਿਸ ਵਿੱਚ Let's Encrypt ਰਾਹੀਂ ਆਪਸ਼ਨਲ auto-SSL ਪ੍ਰੋਵੀਜ਼ਨਿੰਗ ਵੀ ਸ਼ਾਮਲ ਹੈ।

## What It Does {#what-it-does}

- ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ integration ਉਸ ਡੋਮੇਨ ਲਈ ਇੱਕ ਵਰਚੁਅਲ ਹੋਸਟ ਬਣਾਉਣ ਲਈ CyberPanel API ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ।
- ਜਦੋਂ ਡੋਮੇਨ ਮੈਪਿੰਗ ਹਟਾ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ integration ਸਬੰਧਤ ਵਰਚੁਅਲ ਹੋਸਟ ਨੂੰ ਮਿਟਾਉਣ ਲਈ API ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ।
- ਜਦੋਂ auto-SSL ਸੈੱਟ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ integration ਵਰਚੁਅਲ ਹੋਸਟ ਬਣਨ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ Let's Encrypt ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਲਈ ट्रिगर ਕਰਦਾ ਹੈ।
- ਆਪਸ਼ਨਲ ਤੌਰ 'ਤੇ, ਇਹ ਡੋਮੇਨ ਮੈਪਿੰਗ ਸੈਟਿੰਗਜ਼ ਵਿੱਚ ਤੁਹਾਡੀ "Auto-create www subdomain" ਸੈਟਿੰਗ ਦੇ ਆਧਾਰ 'ਤੇ `www.` alias ਨੂੰ ਜੋੜਦਾ/ਹਟਾਉਂਦਾ ਹੈ।

## Prerequisites {#prerequisites}

- ਇੱਕ ਚੱਲ ਰਿਹਾ CyberPanel instance (v2.3 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ) ਜੋ ਤੁਹਾਡੇ WordPress server ਤੋਂ ਪਹੁੰਚਯੋਗ ਹੋਵੇ।
- CyberPanel ਵਿੱਚ ਇੱਕ ਮੌਜੂਦਾ ਵੈੱਬਸਾਈਟ ਜੋ ਪਹਿਲਾਂ ਹੀ ਤੁਹਾਡੇ WordPress network root ਨੂੰ ਸਰਵ ਕਰ ਰਹੀ ਹੋਵੇ। integration ਨਵੇਂ ਵਰਚੁਅਲ ਹੋਸਟ ਇਸ server ਨਾਲ ਜੋੜਦਾ ਹੈ।
- CyberPanel API access enable ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। Authentication ਲਈ ਤੁਹਾਡੇ CyberPanel admin username ਅਤੇ password ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।
- auto-SSL ਨੂੰ ਵੈਧ ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਲਈ, ਮੈਪ ਕੀਤੇ ਡੋਮੇਨਾਂ ਦੇ ਤੁਹਾਡੇ DNS ਰਿਕਾਰਡ ਪਹਿਲਾਂ ਹੀ ਤੁਹਾਡੇ server ਦੇ IP address ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦੇ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।

## Requirements {#requirements}

ਤੁਹਾਡੇ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠ ਲਿਖੇ ਕਨਸਟੈਂਟ (constants) define ਹੋਣੇ ਜ਼ਰੂਰੀ ਹਨ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ਆਪਸ਼ਨਲ ਤੌਰ 'ਤੇ, ਤੁਸੀਂ ਇਹ ਵੀ define ਕਰ ਸਕਦੇ ਹੋ:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain creation ਤੋਂ ਬਾਅਦ Let's Encrypt SSL issue ਕਰਦਾ ਹੈ
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL certificate contact ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ
```

## Setup Instructions {#setup-instructions}

### 1. Enable the CyberPanel API {#1-enable-the-cyberpanel-api}

1. ਇੱਕ Administrator ਵਜੋਂ ਆਪਣੇ CyberPanel dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ।
2. **Security** > **SSL** 'ਤੇ ਜਾਓ ਅਤੇ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ CyberPanel interface 'ਤੇ ਹੀ SSL active ਹੈ (secure API calls ਲਈ ਜ਼ਰੂਰੀ)।
3. CyberPanel API by default `https://your-server-ip:8090/api/` 'ਤੇ ਉਪਲਬਧ ਹੈ। ਇਸਨੂੰ enable ਕਰਨ ਲਈ ਕੋਈ ਵਾਧੂ ਕਦਮ ਨਹੀਂ ਚਾਹੀਦੇ — ਇਹ admin users ਲਈ by default ਚਾਲੂ ਹੁੰਦਾ ਹੈ।

### 2. Add Constants to wp-config.php {#2-add-constants-to-wp-configphp}

ਹੇਠ ਲਿਖੇ ਕਨਸਟੈਂਟਸ ਨੂੰ ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ `/* That's all, stop editing! */` ਲਾਈਨ ਤੋਂ ਪਹਿਲਾਂ ਜੋੜੋ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL ਨੂੰ enable ਕਰਨ ਲਈ (ਸਿਫਾਰਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Enable the Integration {#3-enable-the-integration}

1. ਆਪਣੇ WordPress network admin ਵਿੱਚ, **Ultimate Multisite** > **Settings** 'ਤੇ ਜਾਓ।
2. **Domain Mapping** ਟੈਬ 'ਤੇ ਗੇਫਰ ਕਰੋ।
3. **Host Integrations** ਤੱਕ ਸਕ੍ਰੋਲ ਕਰੋ।
4. **CyberPanel** integration ਨੂੰ enable ਕਰੋ।
5. **Save Changes** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

### 4. Verify Connectivity {#4-verify-connectivity}

ਸੈਟਿੰਗਜ਼ ਵਿਜ਼ਾਰਡ ਵਿੱਚ 内-ਬੁਣੇ (built-in) ਕਨੈਕਸ਼ਨ ਟੈਸਟ ਦੀ ਵਰਤੋਂ ਕਰੋ:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** 'ਤੇ ਜਾਓ।
2. **Test Connection** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।
3. ਇੱਕ ਸਫਲਤਾ ਸੁਨੇਹਾ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ ਕਿ plugin CyberPanel API ਤੱਕ ਪਹੁੰਚ ਸਕਦਾ ਹੈ ਅਤੇ ਸਹੀ ਢੰਗ ਨਾਲ authenticate ਹੋ ਸਕਦਾ ਹੈ।

## How It Works {#how-it-works}

### Domain Mapping {#domain-mapping}

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. integration ਤੁਹਾਡੇ CyberPanel host 'ਤੇ `/api/createWebsite` ਨੂੰ ਇੱਕ `POST` request ਭੇਜਦਾ ਹੈ।
2. CyberPanel ਨਵੇਂ ਵਰਚੁਅਲ ਹੋਸਟ ਨੂੰ ਸੈਟ ਕੀਤੇ ਪੈਕੇਜ ਹੇਠਾਂ ਬਣਾਉਂਦਾ ਹੈ।
3. ਡਾਕੂਮੈਂਟ ਰੂਟ ਨੂੰ ਤੁਹਾਡੇ WordPress network root directory ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਨ ਲਈ ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
4. ਜਦੋਂ ਡੋਮੇਨ ਮੈਪਿੰਗ ਹਟਾ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ integration ਵਰਚੁਅਲ ਹੋਸਟ ਨੂੰ ਸਾਫ਼ ਕਰਨ ਲਈ `/api/deleteWebsite` ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ।

### Auto-SSL {#auto-ssl}

ਜਦੋਂ `WU_CYBERPANEL_AUTO_SSL` `true` ਹੁੰਦਾ ਹੈ:

1. ਵਰਚੁਅਲ ਹੋਸਟ ਬਣਨ ਤੋਂ ਬਾਅਦ, integration ਡੋਮੇਨ ਲਈ `/api/issueSSL` ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ।
2. CyberPanel ACME HTTP-01 challenge ਦੀ ਵਰਤੋਂ ਕਰਕੇ Let's Encrypt ਸਰਟੀਫਿਕੇਟ ਦੀ ਬੇਨਤੀ ਕਰਦਾ ਹੈ।
3. ਸਰਟੀਫਿਕੇਟ ਦੀ ਮਿਆਦ ਪੂਰੀ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ CyberPanel ਦੁਆਰਾ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਨਵਾਂ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।

> **Important:** Let's Encrypt ਨੂੰ ਡੋਮੇਨ ਨੂੰ ਵੈਧ ਕਰਨ ਲਈ DNS ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਾਲ ਤੁਹਾਡੇ server ਦੇ IP address ਤੱਕ ਪ੍ਰੋਪਗੇਟ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਜੇ ਮੈਪ ਕਰਨ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ SSL ਜਾਰੀ ਕਰਨਾ ਅਸਫਲ ਹੁੰਦਾ ਹੈ, ਤਾਂ DNS ਪ੍ਰੋਪਗੇਸ਼ਨ ਦਾ ਇੰਤਜ਼ਾਰ ਕਰੋ ਅਤੇ CyberPanel dashboard ਵਿੱਚ **SSL** > **Manage SSL** ਹੇਠਾਂ ਤੋਂ SSL ਨੂੰ ਦੁਬਾਰਾ ट्रिगर ਕਰੋ।

### www Subdomain {#www-subdomain}

ਜੇ ਤੁਹਾਡੀ Domain Mapping settings ਵਿੱਚ **Auto-create www subdomain** enable ਹੈ, ਤਾਂ integration `www.<domain>` ਲਈ ਇੱਕ ਵਰਚੁਅਲ ਹੋਸਟ alias ਵੀ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ, ਜਦੋਂ auto-SSL ਚਾਲੂ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਇਹ apex ਅਤੇ www ਦੋਵਾਂ variants ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੋਇਆ ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਦਾ ਹੈ।

### Email Forwarders {#email-forwarders}

ਜਦੋਂ [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon active ਹੁੰਦਾ ਹੈ, ਤਾਂ CyberPanel ਗਾਹਕਾਂ ਲਈ Email forwarders ਵੀ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦਾ ਹੈ। Forwarders ਮੈਸੇਜਾਂ ਨੂੰ ਇੱਕ ਡੋਮੇਨ ਪਤੇ ਤੋਂ ਦੂਜੇ ਇਨਬਾਕਸ 'ਤੇ ਰੂਟ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਪੂਰਾ ਮੇਲਬਾਕਸ ਨਹੀਂ ਬਣਦਾ, ਜੋ ਕਿ `info@customer-domain.test` ਜਾਂ `support@customer-domain.test` ਵਰਗੇ aliases ਲਈ ਲਾਭਦਾਇਕ ਹੈ।

ਗਾਹਕਾਂ ਲਈ forwarders enable ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ:

1. ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਉਪਰ ਦਿੱਤੇ CyberPanel constants configure ਕੀਤੇ ਗਏ ਹਨ ਅਤੇ ਕਨੈਕਸ਼ਨ ਟੈਸਟ ਪਾਸ ਹੋ ਗਿਆ ਹੈ।
2. Emails addon settings ਵਿੱਚ CyberPanel email provider ਨੂੰ enable ਕਰੋ।
3. forwarder ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਗਾਹਕ ਡੋਮੇਨ ਪਹਿਲਾਂ ਹੀ CyberPanel ਵਿੱਚ ਮੌਜੂਦ ਹੈ।
4. ਪ੍ਰੋਡਕਸ਼ਨ ਪਲਾਨਾਂ 'ਤੇ ਵਿਸ਼ੇਸ਼ਤਾ ਪੇਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਟੈਸਟ forwarder ਬਣਾਓ ਅਤੇ ਇਸ ਰਾਹੀਂ ਇੱਕ ਮੈਸੇਜ ਭੇਜੋ।

ਜੇ forwarder ਬਣਾਉਣ ਵਿੱਚ ਅਸਫਲਤਾ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਪਹਿਲਾਂ Ultimate Multisite activity logs ਦੀ ਜਾਂਚ ਕਰੋ, ਫਿਰ CyberPanel ਵਿੱਚ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਸੋਰਸ ਡੋਮੇਨ ਮੌਜੂਦ ਹੈ ਅਤੇ API user ਕੋਲ email-management permissions ਹਨ।

## Configuration Reference {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | ਤੁਹਾਡੇ CyberPanel instance ਦਾ ਪੂਰਾ URL, ਪੋਰਟ ਸਮੇਤ, ਜਿਵੇਂ ਕਿ `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | ਨਵੇਂ ਵਰਚੁਅਲ ਹੋਸਟਾਂ ਨੂੰ assign ਕਰਨ ਲਈ CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | ਡੋਮੇਨ ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ Let's Encrypt SSL certificate issue ਕਰਦਾ ਹੈ |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | ਨਵੇਂ ਵਰਚੁਅਲ ਹੋਸਟਾਂ ਲਈ PHP version (CyberPanel ਵਿੱਚ install ਕੀਤੇ ਗਏ version ਨਾਲ ਮੇਲ ਖਾਣਾ ਚਾਹੀਦਾ ਹੈ) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL certificate registration ਲਈ ਸੰਪਰਕ email |

## Important Notes {#important-notes}

- CyberPanel's API session-based token authentication ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। integration ਹਰੇਕ API call 'ਤੇ token acquisition ਨੂੰ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਸੰਭਾਲਦਾ ਹੈ।
- ਤੁਹਾਡੇ CyberPanel admin account ਕੋਲ ਵੈੱਬਸਾਈਟਾਂ ਬਣਾਉਣ ਅਤੇ ਮਿਟਾਉਣ ਦੀਆਂ ਪਰਮਿਸ਼ਨਾਂ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ।
- CyberPanel by default port `8090` 'ਤੇ ਚੱਲਦਾ ਹੈ। ਜੇ ਤੁਹਾਡਾ server firewall ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ, ਤਾਂ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਇਹ ਪੋਰਟ WordPress application server ਤੋਂ ਪਹੁੰਚਯੋਗ ਹੈ।
- integration DNS ਰਿਕਾਰਡਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਨਹੀਂ ਕਰਦਾ। Ultimate Multisite ਵਿੱਚ ਡੋਮੇਨ ਮੈਪ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਡੋਮੇਨ DNS ਨੂੰ ਆਪਣੇ server ਦੇ IP address ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਨਾ ਪਵੇਗਾ।
- ਜੇ ਤੁਸੀਂ OpenLiteSpeed (OLS) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ, ਤਾਂ ਵਰਚੁਅਲ ਹੋਸਟ ਬਦਲਣ ਤੋਂ ਬਾਅਦ ਇੱਕ graceful restart ਆਟੋਮੈਟਿਕਲੀ ट्रिगर ਹੁੰਦਾ ਹੈ। ਕਿਸੇ ਮਨੁੱਖੀ ਦਖਲਅੰਦਾਜ਼ੀ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।

## Troubleshooting {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ server firewall ਵਿੱਚ port `8090` ਖੁੱਲ੍ਹਾ ਹੈ।
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ `WU_CYBERPANEL_HOST` value ਵਿੱਚ ਸਹੀ protocol (`https://`) ਅਤੇ port ਸ਼ਾਮਲ ਹੈ।
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡਾ CyberPanel SSL certificate ਵੈਧ ਹੈ; self-signed certificates TLS verification failures ਦਾ ਕਾਰਨ ਬਣ ਸਕਦੇ ਹਨ। `WU_CYBERPANEL_VERIFY_SSL` ਨੂੰ `false` ਸੈੱਟ ਕਰੋ ਸਿਰਫ਼ ਭਰੋਸੇਮੰਦ private network environments ਵਿੱਚ।

### Authentication Errors {#authentication-errors}

- CyberPanel ਵਿੱਚ ਸਿੱਧਾ ਲੌਗਇਨ ਕਰਕੇ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ `WU_CYBERPANEL_USERNAME` ਅਤੇ `WU_CYBERPANEL_PASSWORD` ਸਹੀ ਹਨ।
- CyberPanel ਵਾਰ-ਵਾਰ નિષ્ફળ ਲੌਗਇਨ ਕੋਸ਼ਿਸ਼ਾਂ ਤੋਂ ਬਾਅਦ accounts ਨੂੰ lock ਕਰ ਦਿੰਦਾ ਹੈ। ਜੇ lockouts ਹੁੰਦੇ ਹਨ ਤਾਂ CyberPanel ਵਿੱਚ **Security** > **Brute Force Monitor** ਦੀ ਜਾਂਚ ਕਰੋ।

### Domain Not Created {#domain-not-created}

- API error messages ਲਈ Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) ਦੀ ਜਾਂਚ ਕਰੋ।
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ `WU_CYBERPANEL_PACKAGE` ਵਿੱਚ define ਕੀਤਾ ਗਿਆ package CyberPanel ਵਿੱਚ ਮੌਜੂਦ ਹੈ (**Packages** > **List Packages**)।
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਡੋਮੇਨ CyberPanel ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਵੈੱਬਸਾਈਟ ਵਜੋਂ ਰਜਿਸਟਰ ਨਹੀਂ ਹੈ — duplicate website creation ਇੱਕ error ਵਾਪਸ ਕਰਦਾ ਹੈ।

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ DNS ਪੂਰੀ ਤਰ੍ਹਾਂ ਪ੍ਰੋਪਗੇਟ ਹੋ ਗਿਆ ਹੈ: `dig +short your-domain.com` ਨੂੰ ਤੁਹਾਡੇ server ਦਾ IP return ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।
- Let's Encrypt rate limits ਲਾਗੂ ਕਰਦਾ ਹੈ। ਜੇ ਤੁਸੀਂ ਹਾਲ ਹੀ ਵਿੱਚ ਇੱਕੋ ਡੋਮੇਨ ਲਈ ਕਈ ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕੀਤੇ ਹਨ, ਤਾਂ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇੰਤਜ਼ਾਰ ਕਰੋ।
- ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਦੀਆਂ ਅਸਫਲਤਾਵਾਂ ਬਾਰੇ ਵੇਰਵੇ ਲਈ **Logs** > **Error Logs** ਹੇਠਾਂ CyberPanel SSL logs ਦੀ ਜਾਂਚ ਕਰੋ।
- ਇੱਕ fallback ਵਜੋਂ, ਤੁਸੀਂ CyberPanel ਵਿੱਚ SSL ਨੂੰ ਹੱਥੀਂ ਜਾਰੀ ਕਰ ਸਕਦੇ ਹੋ: **SSL** > **Manage SSL** > ਡੋਮੇਨ ਚੁਣੋ > **Issue SSL**।

## References {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
