---
title: ਕੰਟਰੋਲ ਪੈਨਲ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਵਧਾਓ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
Enhance ਇੱਕ ਆਧੁਨਿਕ ਕੰਟਰੋਲ ਪੈਨਲ ਹੈ ਜੋ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹੋਸਟਿੰਗ ਆਟੋਮੇਸ਼ਨ ਅਤੇ ਪ੍ਰਬੰਧਨ ਸਮਰੱਥਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ ਅਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦੀ ਹੈ।

**ਸੰਬੰਧਿਤ ਚਰਚਾ:** ਕਮਿਊਨਿਟੀ ਸੁਝਾਵਾਂ ਅਤੇ ਵਾਧੂ ਜਾਣਕਾਰੀ ਲਈ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ਦੇਖੋ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- Ultimate Multisite ਵਿੱਚ ਡੋਮੇਨ ਮੈਪ ਕਰਨ 'ਤੇ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ
- DNS ਰਿਜ਼ੌਲਵ ਹੋਣ 'ਤੇ LetsEncrypt ਰਾਹੀਂ ਆਟੋਮੈਟਿਕ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ
- ਸਬਡੋਮੇਨ ਮੋਡ ਵਿੱਚ ਚੱਲ ਰਹੇ ਨੈੱਟਵਰਕਾਂ ਲਈ ਸਬਡੋਮੇਨ ਸਪੋਰਟ
- ਮੈਪਿੰਗ ਮਿਟਾਉਣ 'ਤੇ ਡੋਮੇਨ ਹਟਾਉਣਾ
- API ਕ੍ਰੀਡੈਂਸ਼ੀਅਲਜ਼ ਦੀ ਪੁਸ਼ਟੀ ਲਈ ਕਨੈਕਸ਼ਨ ਟੈਸਟਿੰਗ

## ਲੋੜਾਂ

### ਸਿਸਟਮ ਲੋੜਾਂ
- Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਇੰਸਟਾਲ ਅਤੇ ਪਹੁੰਚਯੋਗ ਹੋਵੇ
- WordPress Multisite ਇੰਸਟਾਲੇਸ਼ਨ ਜੋ Enhance ਸਰਵਰ 'ਤੇ ਹੋਸਟ ਜਾਂ ਕਨੈਕਟ ਹੋਵੇ
- Apache ਵੈੱਬ ਸਰਵਰ (Enhance ਮੌਜੂਦਾ ਸਮੇਂ Apache ਕੌਂਫਿਗਰੇਸ਼ਨਾਂ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ; LiteSpeed Enterprise ਘੱਟ ਕੀਮਤ 'ਤੇ ਉਪਲਬਧ ਹੈ)

### API ਪਹੁੰਚ
API tokens ਬਣਾਉਣ ਲਈ ਤੁਹਾਡੇ ਕੋਲ Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਦੀ ਐਡਮਿਨਿਸਟ੍ਰੇਟਰ ਪਹੁੰਚ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।

## ਆਪਣੇ API ਕ੍ਰੀਡੈਂਸ਼ੀਅਲਜ਼ ਪ੍ਰਾਪਤ ਕਰਨਾ

### 1. API Token ਬਣਾਓ

1. ਆਪਣੇ Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਵਿੱਚ ਐਡਮਿਨਿਸਟ੍ਰੇਟਰ ਵਜੋਂ ਲੌਗ ਇਨ ਕਰੋ
2. ਨੈਵੀਗੇਸ਼ਨ ਮੀਨੂ ਵਿੱਚ **Settings** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
3. **Access Tokens** 'ਤੇ ਜਾਓ
4. **Create Token** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
5. Token ਨੂੰ ਇੱਕ ਵਰਣਨਯੋਗ ਨਾਮ ਦਿਓ (ਉਦਾਹਰਨ ਲਈ, "Ultimate Multisite Integration")
6. **System Administrator** ਭੂਮਿਕਾ ਨਿਰਧਾਰਤ ਕਰੋ
7. ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ ਲਈ:
   - ਜੇ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ token ਕਦੇ ਐਕਸਪਾਇਰ ਨਾ ਹੋਵੇ ਤਾਂ ਖਾਲੀ ਛੱਡੋ
   - ਜਾਂ ਸੁਰੱਖਿਆ ਉਦੇਸ਼ਾਂ ਲਈ ਕੋਈ ਖਾਸ ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ ਸੈੱਟ ਕਰੋ
8. **Create** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਡਾ **Access Token** ਅਤੇ **Organization ID** ਦਿਖਾਇਆ ਜਾਵੇਗਾ। **ਇਨ੍ਹਾਂ ਨੂੰ ਤੁਰੰਤ ਸੇਵ ਕਰੋ** ਕਿਉਂਕਿ token ਸਿਰਫ਼ ਇੱਕ ਵਾਰ ਦਿਖਾਇਆ ਜਾਵੇਗਾ।

### 2. ਆਪਣਾ Organization ID ਲਓ

Organization ID Access Tokens ਪੇਜ 'ਤੇ ਨੀਲੇ ਜਾਣਕਾਰੀ ਬਾਕਸ ਵਿੱਚ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ ਜਿਸ 'ਤੇ "Org ID: {your_id}" ਲੇਬਲ ਹੁੰਦਾ ਹੈ।

Organization ID ਇਸ ਤਰ੍ਹਾਂ ਦੇ UUID ਫਾਰਮੈਟ ਵਿੱਚ ਹੁੰਦਾ ਹੈ: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

ਤੁਸੀਂ ਕਿਸੇ ਗਾਹਕ ਦਾ Organization ID ਇਸ ਤਰ੍ਹਾਂ ਵੀ ਲੱਭ ਸਕਦੇ ਹੋ:
1. **Customers** ਪੇਜ 'ਤੇ ਜਾਓ
2. ਸੰਬੰਧਿਤ ਗਾਹਕ ਲਈ **Manage customer** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
3. URL ਦੇਖੋ - Organization ID `/customers/` ਤੋਂ ਬਾਅਦ ਦੇ ਅੱਖਰ-ਅੰਕੀ ਕੈਰੇਕਟਰ ਹਨ

### 3. ਆਪਣਾ Server ID ਲਓ

ਆਪਣਾ Server ID ਲੱਭਣ ਲਈ (ਡੋਮੇਨ ਓਪਰੇਸ਼ਨਾਂ ਲਈ ਲੋੜੀਂਦਾ):

1. Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਵਿੱਚ, **Servers** 'ਤੇ ਜਾਓ
2. ਉਸ ਸਰਵਰ 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਜਿੱਥੇ ਤੁਹਾਡੀ WordPress ਇੰਸਟਾਲੇਸ਼ਨ ਚੱਲ ਰਹੀ ਹੈ
3. Server ID (UUID ਫਾਰਮੈਟ) URL ਜਾਂ ਸਰਵਰ ਵੇਰਵਿਆਂ ਵਿੱਚ ਦਿਖਾਈ ਦੇਵੇਗਾ
4. ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ, ਤੁਸੀਂ ਸਰਵਰਾਂ ਦੀ ਸੂਚੀ ਲਈ API ਵਰਤ ਸਕਦੇ ਹੋ:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

ਸਰਵਰ ID ਇਸ UUID ਫਾਰਮੈਟ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ: `00000000-0000-0000-0000-000000000000`

### 4. ਆਪਣਾ API URL ਲਓ

ਤੁਹਾਡਾ API URL ਤੁਹਾਡਾ Enhance ਕੰਟਰੋਲ ਪੈਨਲ URL ਹੈ ਜਿਸ ਵਿੱਚ `/api/` ਜੋੜਿਆ ਗਿਆ ਹੈ:

```
https://your-enhance-panel.com/api/
```

**ਮਹੱਤਵਪੂਰਨ:** `/api/` ਪਾਥ ਲੋੜੀਂਦਾ ਹੈ। ਆਮ ਗਲਤੀਆਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:
- `/api/` ਤੋਂ ਬਿਨਾਂ ਸਿਰਫ਼ ਡੋਮੇਨ ਵਰਤਣਾ
- HTTPS ਦੀ ਬਜਾਏ HTTP ਵਰਤਣਾ (ਸੁਰੱਖਿਆ ਲਈ HTTPS ਲੋੜੀਂਦਾ ਹੈ)

## ਕੌਂਫਿਗਰੇਸ਼ਨ

### ਲੋੜੀਂਦੇ Constants

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠ ਲਿਖੇ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard ਰਾਹੀਂ ਸੈੱਟਅੱਪ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, **Ultimate Multisite** > **Settings** 'ਤੇ ਜਾਓ
2. **Integrations** ਟੈਬ 'ਤੇ ਜਾਓ
3. **Enhance Control Panel Integration** ਲੱਭੋ ਅਤੇ **Configuration** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
4. Wizard ਤੁਹਾਨੂੰ ਸੈੱਟਅੱਪ ਵਿੱਚ ਮਾਰਗਦਰਸ਼ਨ ਕਰੇਗਾ:
   - **ਪੜਾਅ 1:** ਜਾਣ-ਪਛਾਣ ਅਤੇ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੀ ਸੰਖੇਪ ਜਾਣਕਾਰੀ
   - **ਪੜਾਅ 2:** ਆਪਣੇ API ਕ੍ਰੀਡੈਂਸ਼ੀਅਲਜ਼ ਦਾਖਲ ਕਰੋ (Token, API URL, Server ID)
   - **ਪੜਾਅ 3:** ਕਨੈਕਸ਼ਨ ਟੈਸਟ ਕਰੋ
   - **ਪੜਾਅ 4:** ਸਮੀਖਿਆ ਅਤੇ ਐਕਟੀਵੇਟ ਕਰੋ

ਤੁਸੀਂ ਚੁਣ ਸਕਦੇ ਹੋ:
- Wizard ਨੂੰ ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਆਪਣੇ ਆਪ constants ਇੰਜੈਕਟ ਕਰਨ ਦਿਓ
- Constant ਪਰਿਭਾਸ਼ਾਵਾਂ ਕਾਪੀ ਕਰੋ ਅਤੇ ਹੱਥੀਂ ਸ਼ਾਮਲ ਕਰੋ

## ਵਾਧੂ WordPress ਕੌਂਫਿਗਰੇਸ਼ਨ

ਕਮਿਊਨਿਟੀ ਫੀਡਬੈਕ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) ਦੇ ਆਧਾਰ 'ਤੇ, ਤੁਹਾਨੂੰ ਇਹ ਵਾਧੂ ਸੈਟਿੰਗਾਂ ਕੌਂਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ:

### .htaccess ਕੌਂਫਿਗਰੇਸ਼ਨ

ਜੇ ਤੁਹਾਨੂੰ ਡੋਮੇਨ ਮੈਪਿੰਗ ਨਾਲ ਸਮੱਸਿਆਵਾਂ ਆਉਂਦੀਆਂ ਹਨ:
1. ਅਸਲ Enhance `.htaccess` ਫਾਈਲ ਮਿਟਾਓ
2. ਇਸਨੂੰ ਸਟੈਂਡਰਡ WordPress Multisite `.htaccess` ਫਾਈਲ ਨਾਲ ਬਦਲੋ

### Cookie Constants

ਮੈਪ ਕੀਤੇ ਡੋਮੇਨਾਂ ਵਿੱਚ ਸਹੀ cookie ਹੈਂਡਲਿੰਗ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ `wp-config.php` ਵਿੱਚ ਇਹ constants ਸ਼ਾਮਲ ਕਰੋ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

### ਜਦੋਂ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ

1. ਇੱਕ ਉਪਭੋਗਤਾ Ultimate Multisite ਵਿੱਚ ਇੱਕ ਕਸਟਮ ਡੋਮੇਨ ਮੈਪ ਕਰਦਾ ਹੈ (ਜਾਂ ਸਬਡੋਮੇਨ ਮੋਡ ਵਿੱਚ ਇੱਕ ਨਵੀਂ ਸਾਈਟ ਬਣਾਈ ਜਾਂਦੀ ਹੈ)
2. ਇੰਟੀਗ੍ਰੇਸ਼ਨ Enhance ਦੇ API ਨੂੰ ਇੱਕ POST ਰਿਕਵੈਸਟ ਭੇਜਦੀ ਹੈ: `/servers/{server_id}/domains`
3. Enhance ਤੁਹਾਡੇ ਸਰਵਰ ਕੌਂਫਿਗਰੇਸ਼ਨ ਵਿੱਚ ਡੋਮੇਨ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ
4. ਜਦੋਂ DNS ਤੁਹਾਡੇ ਸਰਵਰ 'ਤੇ ਰਿਜ਼ੌਲਵ ਹੁੰਦਾ ਹੈ, Enhance ਆਪਣੇ ਆਪ LetsEncrypt ਰਾਹੀਂ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰੋਵਿਜ਼ਨ ਕਰਦਾ ਹੈ
5. ਡੋਮੇਨ HTTPS ਨਾਲ ਐਕਟਿਵ ਹੋ ਜਾਂਦਾ ਹੈ

### ਜਦੋਂ ਕੋਈ ਡੋਮੇਨ ਹਟਾਇਆ ਜਾਂਦਾ ਹੈ

1. Ultimate Multisite ਵਿੱਚ ਇੱਕ ਡੋਮੇਨ ਮੈਪਿੰਗ ਮਿਟਾਈ ਜਾਂਦੀ ਹੈ
2. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਡੋਮੇਨ ਦੀ ID ਲੱਭਣ ਲਈ Enhance ਨੂੰ ਕੁਐਰੀ ਕਰਦੀ ਹੈ
3. ਇੱਕ DELETE ਰਿਕਵੈਸਟ ਭੇਜੀ ਜਾਂਦੀ ਹੈ: `/servers/{server_id}/domains/{domain_id}`
4. Enhance ਤੁਹਾਡੇ ਸਰਵਰ ਕੌਂਫਿਗਰੇਸ਼ਨ ਤੋਂ ਡੋਮੇਨ ਹਟਾ ਦਿੰਦਾ ਹੈ

### DNS ਅਤੇ SSL ਜਾਂਚ

Ultimate Multisite ਵਿੱਚ ਬਿਲਟ-ਇਨ DNS ਅਤੇ SSL ਜਾਂਚ ਸ਼ਾਮਲ ਹੈ:
- ਤੁਸੀਂ **Domain Mapping Settings** ਵਿੱਚ ਜਾਂਚ ਅੰਤਰਾਲ ਕੌਂਫਿਗਰ ਕਰ ਸਕਦੇ ਹੋ (ਡਿਫਾਲਟ: 300 ਸਕਿੰਟ/5 ਮਿੰਟ)
- ਸਿਸਟਮ ਡੋਮੇਨ ਨੂੰ ਐਕਟਿਵ ਮਾਰਕ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ DNS ਪ੍ਰੋਪੇਗੇਸ਼ਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰੇਗਾ
- SSL ਸਰਟੀਫਿਕੇਟ ਵੈਲੀਡਿਟੀ ਆਪਣੇ ਆਪ ਜਾਂਚੀ ਜਾਂਦੀ ਹੈ
- Enhance SSL ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ ਆਪਣੇ ਆਪ ਸੰਭਾਲਦਾ ਹੈ, ਇਸ ਲਈ ਹੱਥੀਂ SSL ਕੌਂਫਿਗਰੇਸ਼ਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ

## ਸੈੱਟਅੱਪ ਦੀ ਪੁਸ਼ਟੀ

### ਕਨੈਕਸ਼ਨ ਟੈਸਟ ਕਰੋ

1. Integration Wizard ਵਿੱਚ, **Test Connection** ਪੜਾਅ ਵਰਤੋ
2. Plugin ਤੁਹਾਡੇ ਸਰਵਰ 'ਤੇ ਡੋਮੇਨਾਂ ਦੀ ਸੂਚੀ ਬਣਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੇਗਾ
3. ਸਫਲਤਾ ਸੁਨੇਹਾ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ:
   - API ਕ੍ਰੀਡੈਂਸ਼ੀਅਲਜ਼ ਸਹੀ ਹਨ
   - API URL ਪਹੁੰਚਯੋਗ ਹੈ
   - Server ID ਵੈਧ ਹੈ
   - ਅਧਿਕਾਰ ਸਹੀ ਤਰ੍ਹਾਂ ਸੈੱਟ ਹਨ

### ਡੋਮੇਨ ਮੈਪ ਕਰਨ ਤੋਂ ਬਾਅਦ

1. Ultimate Multisite ਵਿੱਚ ਇੱਕ ਟੈਸਟ ਡੋਮੇਨ ਮੈਪ ਕਰੋ
2. Ultimate Multisite ਲੌਗਸ ਚੈੱਕ ਕਰੋ (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਵਿੱਚ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਡੋਮੇਨ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਸੀ:
   - **Servers** > **Your Server** > **Domains** 'ਤੇ ਜਾਓ
   - ਨਵਾਂ ਡੋਮੇਨ ਸੂਚੀ ਵਿੱਚ ਦਿਖਾਈ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ
4. DNS ਪ੍ਰੋਪੇਗੇਟ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ SSL ਆਪਣੇ ਆਪ ਪ੍ਰੋਵਿਜ਼ਨ ਹੋਇਆ

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ

**ਗਲਤੀ: "Failed to connect to Enhance API"**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ `WU_ENHANCE_API_URL` ਵਿੱਚ ਅੰਤ ਵਿੱਚ `/api/` ਸ਼ਾਮਲ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ HTTPS ਵਰਤ ਰਹੇ ਹੋ, HTTP ਨਹੀਂ
- ਚੈੱਕ ਕਰੋ ਕਿ Enhance ਪੈਨਲ ਤੁਹਾਡੇ WordPress ਸਰਵਰ ਤੋਂ ਪਹੁੰਚਯੋਗ ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਕੋਈ ਫਾਇਰਵਾਲ ਨਿਯਮ ਕਨੈਕਸ਼ਨ ਨੂੰ ਬਲੌਕ ਨਹੀਂ ਕਰ ਰਹੇ

**ਗਲਤੀ: "Enhance API Token not found"**
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ `WU_ENHANCE_API_TOKEN` `wp-config.php` ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ token Enhance ਵਿੱਚ ਮਿਟਾਇਆ ਜਾਂ ਐਕਸਪਾਇਰ ਨਹੀਂ ਹੋਇਆ
- Token ਮੁੱਲ ਵਿੱਚ ਟਾਈਪੋ ਚੈੱਕ ਕਰੋ

**ਗਲਤੀ: "Server ID is not configured"**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ `WU_ENHANCE_SERVER_ID` `wp-config.php` ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ Server ID ਵੈਧ UUID ਫਾਰਮੈਟ ਵਿੱਚ ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਸਰਵਰ ਤੁਹਾਡੇ Enhance ਪੈਨਲ ਵਿੱਚ ਮੌਜੂਦ ਹੈ

### ਡੋਮੇਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੋਇਆ

**ਲੌਗਸ ਚੈੱਕ ਕਰੋ:**
1. **Ultimate Multisite** > **Logs** 'ਤੇ ਜਾਓ
2. **integration-enhance** ਨਾਲ ਫਿਲਟਰ ਕਰੋ
3. ਸਮੱਸਿਆ ਦਰਸਾਉਂਦੇ ਗਲਤੀ ਸੁਨੇਹੇ ਲੱਭੋ

**ਆਮ ਕਾਰਨ:**
- ਅਵੈਧ ਡੋਮੇਨ ਨਾਮ ਫਾਰਮੈਟ
- ਡੋਮੇਨ ਪਹਿਲਾਂ ਹੀ Enhance ਵਿੱਚ ਮੌਜੂਦ ਹੈ
- ਨਾਕਾਫੀ API ਅਧਿਕਾਰ (ਯਕੀਨੀ ਬਣਾਓ ਕਿ token ਕੋਲ System Administrator ਭੂਮਿਕਾ ਹੈ)
- Server ID Enhance ਵਿੱਚ ਅਸਲ ਸਰਵਰ ਨਾਲ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ

### SSL ਸਰਟੀਫਿਕੇਟ ਸਮੱਸਿਆਵਾਂ

**SSL ਪ੍ਰੋਵਿਜ਼ਨ ਨਹੀਂ ਹੋ ਰਿਹਾ:**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ DNS ਤੁਹਾਡੇ ਸਰਵਰ ਦੇ IP ਐਡਰੈੱਸ ਵੱਲ ਪੁਆਇੰਟ ਕਰ ਰਿਹਾ ਹੈ
- ਚੈੱਕ ਕਰੋ ਕਿ ਡੋਮੇਨ ਸਹੀ ਤਰ੍ਹਾਂ ਰਿਜ਼ੌਲਵ ਹੋ ਰਿਹਾ ਹੈ: `nslookup yourdomain.com`
- Enhance ਨੂੰ SSL ਪ੍ਰੋਵਿਜ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ DNS ਰਿਜ਼ੌਲਵ ਹੋਣਾ ਲੋੜੀਂਦਾ ਹੈ
- SSL ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ DNS ਪ੍ਰੋਪੇਗੇਸ਼ਨ ਤੋਂ ਬਾਅਦ ਆਮ ਤੌਰ 'ਤੇ 5-10 ਮਿੰਟ ਲੈਂਦੀ ਹੈ
- SSL-ਖਾਸ ਗਲਤੀਆਂ ਲਈ Enhance ਕੰਟਰੋਲ ਪੈਨਲ ਲੌਗਸ ਚੈੱਕ ਕਰੋ

**Enhance ਵਿੱਚ ਹੱਥੀਂ SSL ਸਮੱਸਿਆ ਨਿਵਾਰਨ:**
1. **Servers** > **Your Server** > **Domains** 'ਤੇ ਜਾਓ
2. ਆਪਣਾ ਡੋਮੇਨ ਲੱਭੋ ਅਤੇ ਇਸਦੀ SSL ਸਥਿਤੀ ਚੈੱਕ ਕਰੋ
3. ਲੋੜ ਪੈਣ 'ਤੇ ਤੁਸੀਂ ਹੱਥੀਂ SSL ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ ਟ੍ਰਿਗਰ ਕਰ ਸਕਦੇ ਹੋ

### DNS ਜਾਂਚ ਅੰਤਰਾਲ

ਜੇ ਡੋਮੇਨ ਜਾਂ SSL ਸਰਟੀਫਿਕੇਟ ਐਕਟੀਵੇਟ ਹੋਣ ਵਿੱਚ ਬਹੁਤ ਸਮਾਂ ਲੈ ਰਹੇ ਹਨ:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** 'ਤੇ ਜਾਓ
2. **DNS Check Interval** ਸੈਟਿੰਗ ਲੱਭੋ
3. ਡਿਫਾਲਟ 300 ਸਕਿੰਟ ਤੋਂ ਘੱਟ ਮੁੱਲ ਵਿੱਚ ਬਦਲੋ (ਘੱਟੋ-ਘੱਟ: 10 ਸਕਿੰਟ)
4. **ਨੋਟ:** ਘੱਟ ਅੰਤਰਾਲ ਦਾ ਮਤਲਬ ਹੈ ਵਧੇਰੇ ਵਾਰ-ਵਾਰ ਜਾਂਚ ਪਰ ਸਰਵਰ 'ਤੇ ਜ਼ਿਆਦਾ ਲੋਡ

### ਪ੍ਰਮਾਣੀਕਰਨ ਗਲਤੀਆਂ

**HTTP 401/403 ਗਲਤੀਆਂ:**
- Enhance ਵਿੱਚ ਆਪਣਾ API token ਦੁਬਾਰਾ ਬਣਾਓ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ token ਕੋਲ **System Administrator** ਭੂਮਿਕਾ ਹੈ
- ਚੈੱਕ ਕਰੋ ਕਿ token ਐਕਸਪਾਇਰ ਨਹੀਂ ਹੋਇਆ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਸਹੀ Organization ID ਵਰਤ ਰਹੇ ਹੋ (ਹਾਲਾਂਕਿ ਇਹ ਆਮ ਤੌਰ 'ਤੇ URL ਵਿੱਚ ਲੋੜੀਂਦਾ ਨਹੀਂ ਹੈ)

### ਲੌਗ ਵਿਸ਼ਲੇਸ਼ਣ

ਵਿਸਤ੍ਰਿਤ ਲੌਗਿੰਗ ਸਮਰੱਥ ਕਰੋ:
```php
// ਵਧੀਆ ਡੀਬੱਗਿੰਗ ਲਈ wp-config.php ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

ਫਿਰ ਲੌਗਸ ਚੈੱਕ ਕਰੋ:
- Ultimate Multisite ਲੌਗਸ: **Ultimate Multisite** > **Logs**
- WordPress ਡੀਬੱਗ ਲੌਗ: `wp-content/debug.log`
- Enhance ਪੈਨਲ ਲੌਗਸ: Enhance ਦੇ ਐਡਮਿਨ ਇੰਟਰਫੇਸ ਵਿੱਚ ਉਪਲਬਧ

## API ਹਵਾਲਾ

### ਪ੍ਰਮਾਣੀਕਰਨ
ਸਾਰੀਆਂ API ਰਿਕਵੈਸਟਾਂ Bearer token ਪ੍ਰਮਾਣੀਕਰਨ ਵਰਤਦੀਆਂ ਹਨ:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ਆਮ ਵਰਤੇ ਜਾਣ ਵਾਲੇ Endpoints

**ਸਰਵਰਾਂ ਦੀ ਸੂਚੀ:**
```
GET /servers
```

**ਸਰਵਰ 'ਤੇ ਡੋਮੇਨਾਂ ਦੀ ਸੂਚੀ:**
```
GET /servers/{server_id}/domains
```

**ਡੋਮੇਨ ਸ਼ਾਮਲ ਕਰੋ:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ਡੋਮੇਨ ਮਿਟਾਓ:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### ਪੂਰੀ API ਦਸਤਾਵੇਜ਼ੀ
ਸੰਪੂਰਨ API ਦਸਤਾਵੇਜ਼ੀ: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## ਵਧੀਆ ਅਭਿਆਸ

### ਸੁਰੱਖਿਆ
- **API tokens ਨੂੰ ਕਦੇ ਵੀ version control ਵਿੱਚ ਕਮਿਟ ਨਾ ਕਰੋ**
- Tokens ਨੂੰ `wp-config.php` ਵਿੱਚ ਸਟੋਰ ਕਰੋ ਜੋ Git ਤੋਂ ਬਾਹਰ ਰੱਖੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ
- ਢੁਕਵੇਂ ਅਧਿਕਾਰਾਂ ਵਾਲੇ tokens ਵਰਤੋ (ਪੂਰੀ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਲਈ System Administrator)
- ਪ੍ਰੋਡਕਸ਼ਨ ਵਾਤਾਵਰਨਾਂ ਲਈ token ਮਿਆਦ ਪੁੱਗਣ ਦੀਆਂ ਮਿਤੀਆਂ ਸੈੱਟ ਕਰੋ
- ਸਮੇਂ-ਸਮੇਂ 'ਤੇ tokens ਬਦਲੋ

### ਪ੍ਰਦਰਸ਼ਨ
- ਬਹੁਤ ਜ਼ਿਆਦਾ API ਕਾਲਾਂ ਤੋਂ ਬਚਣ ਲਈ ਡਿਫਾਲਟ DNS ਜਾਂਚ ਅੰਤਰਾਲ (300 ਸਕਿੰਟ) ਵਰਤੋ
- ਵੱਡੇ ਪੈਮਾਨੇ ਦੇ ਡੋਮੇਨ ਓਪਰੇਸ਼ਨਾਂ ਦੌਰਾਨ Enhance ਸਰਵਰ ਸਰੋਤਾਂ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ
- ਇੱਕ ਵਾਰ ਵਿੱਚ ਕਈ ਡੋਮੇਨ ਮੈਪ ਕਰਦੇ ਸਮੇਂ ਡੋਮੇਨ ਜੋੜਨ ਨੂੰ ਵੰਡਣ ਬਾਰੇ ਸੋਚੋ

### ਨਿਗਰਾਨੀ
- ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਗਲਤੀਆਂ ਲਈ ਨਿਯਮਿਤ ਤੌਰ 'ਤੇ Ultimate Multisite ਲੌਗਸ ਚੈੱਕ ਕਰੋ
- ਅਸਫਲ ਡੋਮੇਨ ਜੋੜਾਂ ਲਈ ਨਿਗਰਾਨੀ ਸੈੱਟ ਕਰੋ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ SSL ਸਰਟੀਫਿਕੇਟ ਸਹੀ ਤਰ੍ਹਾਂ ਪ੍ਰੋਵਿਜ਼ਨ ਹੋ ਰਹੇ ਹਨ
- Enhance ਸਰਵਰ ਸਮਰੱਥਾ ਅਤੇ ਡੋਮੇਨ ਸੀਮਾਵਾਂ 'ਤੇ ਨਜ਼ਰ ਰੱਖੋ

## ਵਾਧੂ ਸਰੋਤ

- **Enhance ਅਧਿਕਾਰਤ ਦਸਤਾਵੇਜ਼ੀ:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API ਦਸਤਾਵੇਜ਼ੀ:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance ਕਮਿਊਨਿਟੀ ਫੋਰਮ:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub ਚਰਚਾ:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite ਡੋਮੇਨ ਮੈਪਿੰਗ ਗਾਈਡ:** wiki ਪੇਜ "How to Configure Domain Mapping v2" ਦੇਖੋ

## ਸਹਾਇਤਾ

ਜੇ ਤੁਹਾਨੂੰ ਸਮੱਸਿਆਵਾਂ ਆਉਂਦੀਆਂ ਹਨ:
1. ਉੱਪਰ ਸਮੱਸਿਆ ਨਿਵਾਰਨ ਭਾਗ ਚੈੱਕ ਕਰੋ
2. Ultimate Multisite ਲੌਗਸ ਦੀ ਸਮੀਖਿਆ ਕਰੋ
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ਨਾਲ ਸਲਾਹ ਕਰੋ
4. ਪੈਨਲ-ਖਾਸ ਸਮੱਸਿਆਵਾਂ ਲਈ Enhance ਸਹਾਇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ
5. ਕਮਿਊਨਿਟੀ ਸਹਾਇਤਾ ਲਈ ਵਿਸਤ੍ਰਿਤ ਗਲਤੀ ਲੌਗਸ ਨਾਲ ਨਵੀਂ ਚਰਚਾ ਬਣਾਓ

## ਨੋਟਸ

- ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਿਰਫ਼ ਡੋਮੇਨ ਉਪਨਾਮਾਂ ਨੂੰ ਸੰਭਾਲਦੀ ਹੈ; Enhance SSL ਨੂੰ ਆਪਣੇ ਆਪ ਪ੍ਰਬੰਧਿਤ ਕਰਦਾ ਹੈ
- ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਕਸਟਮ ਡੋਮੇਨ ਮੈਪਿੰਗ ਅਤੇ ਸਬਡੋਮੇਨ-ਅਧਾਰਤ ਸਾਈਟਾਂ ਦੋਵਾਂ ਨੂੰ ਸਪੋਰਟ ਕਰਦੀ ਹੈ
- ਆਟੋਮੈਟਿਕ www ਸਬਡੋਮੇਨ ਬਣਾਉਣਾ Domain Mapping ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਕੌਂਫਿਗਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ
- Enhance ਮੌਜੂਦਾ ਸਮੇਂ Apache ਕੌਂਫਿਗਰੇਸ਼ਨਾਂ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ (LiteSpeed Enterprise ਉਪਲਬਧ)
- Ultimate Multisite ਤੋਂ ਡੋਮੇਨ ਹਟਾਉਣਾ Enhance ਤੋਂ ਡੋਮੇਨ ਹਟਾ ਦੇਵੇਗਾ ਪਰ ਸੰਬੰਧਿਤ SSL ਸਰਟੀਫਿਕੇਟ ਤੁਰੰਤ ਨਹੀਂ ਮਿਟਾ ਸਕਦਾ
