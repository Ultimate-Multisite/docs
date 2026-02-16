---
title: GridPane ਏਕੀਕਰਨ
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ਇੰਟੀਗ੍ਰੇਸ਼ਨ

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ
GridPane ਇੱਕ ਵਿਸ਼ੇਸ਼ WordPress ਹੋਸਟਿੰਗ ਕੰਟਰੋਲ ਪੈਨਲ ਹੈ ਜੋ ਪੇਸ਼ੇਵਰ WordPress ਡਿਵੈਲਪਰਾਂ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Ultimate Multisite ਅਤੇ GridPane ਵਿਚਕਾਰ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ ਅਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦੀ ਹੈ।

## ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
- ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ ਸਿੰਕਿੰਗ
- SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਬੰਧਨ
- SUNRISE constant ਦੀ ਆਟੋਮੈਟਿਕ ਸੰਰਚਨਾ

## ਲੋੜਾਂ
ਹੇਠ ਲਿਖੇ constants ਤੁਹਾਡੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## ਸੈੱਟਅੱਪ ਹਿਦਾਇਤਾਂ

### 1. ਆਪਣੇ GridPane API ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ GridPane dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ
2. "Settings" > "API" ਤੇ ਜਾਓ
3. ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਤੋਂ API key ਨਹੀਂ ਹੈ ਤਾਂ ਇੱਕ ਨਵੀਂ ਬਣਾਓ
4. ਆਪਣੀ API key ਕਾਪੀ ਕਰੋ

### 2. ਆਪਣੀ Server ਅਤੇ Site ID ਪ੍ਰਾਪਤ ਕਰੋ

1. ਆਪਣੇ GridPane dashboard ਵਿੱਚ, "Servers" ਤੇ ਜਾਓ
2. ਉਹ ਸਰਵਰ ਚੁਣੋ ਜਿੱਥੇ ਤੁਹਾਡੀ WordPress multisite ਹੋਸਟ ਹੈ
3. Server ID ਨੋਟ ਕਰੋ (ਜੋ URL ਵਿੱਚ ਜਾਂ ਸਰਵਰ ਵੇਰਵੇ ਪੰਨੇ ਤੇ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ)
4. "Sites" ਤੇ ਜਾਓ ਅਤੇ ਆਪਣੀ WordPress ਸਾਈਟ ਚੁਣੋ
5. Site ID ਨੋਟ ਕਰੋ (ਜੋ URL ਵਿੱਚ ਜਾਂ ਸਾਈਟ ਵੇਰਵੇ ਪੰਨੇ ਤੇ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ)

### 3. wp-config.php ਵਿੱਚ Constants ਜੋੜੋ

ਆਪਣੀ `wp-config.php` ਫਾਈਲ ਵਿੱਚ ਹੇਠ ਲਿਖੇ constants ਜੋੜੋ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ

1. ਆਪਣੇ WordPress admin ਵਿੱਚ, Ultimate Multisite > Settings ਤੇ ਜਾਓ
2. "Domain Mapping" ਟੈਬ ਤੇ ਜਾਓ
3. "Host Integrations" ਤੱਕ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ
4. GridPane ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ
5. "Save Changes" ਤੇ ਕਲਿੱਕ ਕਰੋ

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

1. ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤੁਹਾਡੀ ਸਾਈਟ ਵਿੱਚ ਡੋਮੇਨ ਜੋੜਨ ਲਈ GridPane ਦੇ API ਨੂੰ ਬੇਨਤੀ ਭੇਜਦੀ ਹੈ
2. GridPane ਆਟੋਮੈਟਿਕ ਤੌਰ ਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ
3. ਜਦੋਂ ਕੋਈ ਡੋਮੇਨ ਮੈਪਿੰਗ ਹਟਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ GridPane ਤੋਂ ਡੋਮੇਨ ਨੂੰ ਹਟਾ ਦੇਵੇਗੀ

ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤੁਹਾਡੀ wp-config.php ਫਾਈਲ ਵਿੱਚ SUNRISE constant ਨੂੰ ਵੀ ਆਟੋਮੈਟਿਕ ਤੌਰ ਤੇ ਸੰਭਾਲਦੀ ਹੈ, ਜੋ ਡੋਮੇਨ ਮੈਪਿੰਗ ਦੇ ਸਹੀ ਢੰਗ ਨਾਲ ਕੰਮ ਕਰਨ ਲਈ ਜ਼ਰੂਰੀ ਹੈ।

## SUNRISE Constant ਪ੍ਰਬੰਧਨ

GridPane ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੀ ਇੱਕ ਵਿਲੱਖਣ ਵਿਸ਼ੇਸ਼ਤਾ ਇਹ ਹੈ ਕਿ ਇਹ GridPane ਦੇ ਆਪਣੇ ਡੋਮੇਨ ਮੈਪਿੰਗ ਸਿਸਟਮ ਨਾਲ ਟਕਰਾਅ ਤੋਂ ਬਚਣ ਲਈ wp-config.php ਵਿੱਚ SUNRISE constant ਨੂੰ ਆਟੋਮੈਟਿਕ ਤੌਰ ਤੇ ਵਾਪਸ ਬਦਲ ਦਿੰਦੀ ਹੈ। ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਦੋਵੇਂ ਸਿਸਟਮ ਬਿਨਾਂ ਕਿਸੇ ਸਮੱਸਿਆ ਦੇ ਇਕੱਠੇ ਕੰਮ ਕਰ ਸਕਦੇ ਹਨ।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ

### API ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆਵਾਂ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੀ API key ਸਹੀ ਹੈ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੀ server ਅਤੇ site ID ਸਹੀ ਹਨ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ GridPane ਖਾਤੇ ਕੋਲ ਲੋੜੀਂਦੀਆਂ ਅਨੁਮਤੀਆਂ ਹਨ

### SSL ਸਰਟੀਫਿਕੇਟ ਸਮੱਸਿਆਵਾਂ
- GridPane ਨੂੰ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਡੋਮੇਨ ਤੁਹਾਡੇ ਸਰਵਰ ਦੇ IP ਪਤੇ ਵੱਲ ਸਹੀ ਢੰਗ ਨਾਲ ਪੁਆਇੰਟ ਹੋ ਰਹੇ ਹਨ
- ਆਪਣੀ ਸਾਈਟ ਲਈ GridPane SSL ਸੈਟਿੰਗਾਂ ਦੀ ਜਾਂਚ ਕਰੋ

### ਡੋਮੇਨ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਸੁਨੇਹੇ ਲਈ Ultimate Multisite ਲੌਗ ਦੀ ਜਾਂਚ ਕਰੋ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਡੋਮੇਨ ਪਹਿਲਾਂ ਤੋਂ GridPane ਵਿੱਚ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ ਡੋਮੇਨ ਦੇ DNS ਰਿਕਾਰਡ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਰਚਿਤ ਹਨ
