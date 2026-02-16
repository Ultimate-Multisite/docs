---
title: Hestia ਕੰਟਰੋਲ ਪੈਨਲ ਇੰਟੀਗ੍ਰੇਸ਼ਨ
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ਇੰਟੀਗ੍ਰੇਸ਼ਨ

ਇਹ ਗਾਈਡ ਦੱਸਦੀ ਹੈ ਕਿ Ultimate Multisite Hestia ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਕਿਵੇਂ ਕੌਂਫਿਗਰ ਕਰਨਾ ਹੈ ਤਾਂ ਜੋ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਵਿੱਚ ਮੈਪ ਕੀਤੇ ਡੋਮੇਨ Hestia ਵਿੱਚ ਆਪਣੇ ਆਪ Web Domain Aliases ਵਜੋਂ ਜੋੜੇ (ਅਤੇ ਹਟਾਏ) ਜਾ ਸਕਣ।

- Hestia CLI ਹਵਾਲਾ: v-add-web-domain-alias / v-delete-web-domain-alias
- ਅਧਿਕਾਰਤ REST API ਡੌਕ: https://hestiacp.com/docs/server-administration/rest-api.html

## ਇਹ ਕੀ ਕਰਦਾ ਹੈ
- ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਕੋਈ ਡੋਮੇਨ ਮੈਪ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨ Hestia API ਨੂੰ ਇਹ ਚਲਾਉਣ ਲਈ ਕਾਲ ਕਰਦਾ ਹੈ:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ਜਦੋਂ ਡੋਮੇਨ ਮੈਪਿੰਗ ਹਟਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇਹ ਚਲਾਉਂਦਾ ਹੈ:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਤੁਹਾਡੀ "Auto-create www subdomain" ਸੈਟਿੰਗ ਦੇ ਅਨੁਸਾਰ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ `www.` alias ਜੋੜਦਾ/ਹਟਾਉਂਦਾ ਹੈ।

## ਪੂਰਵ-ਲੋੜਾਂ
- ਇੱਕ ਮੌਜੂਦਾ Hestia Web Domain ਜੋ ਪਹਿਲਾਂ ਹੀ ਤੁਹਾਡੀ WordPress ਇੰਸਟਾਲੇਸ਼ਨ ਵੱਲ ਪੁਆਇੰਟ ਕਰਦਾ ਹੋਵੇ। ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਇਸ ਬੇਸ ਡੋਮੇਨ ਨਾਲ aliases ਜੋੜੇਗਾ।
- Hestia API ਐਕਸੈਸ ਇਨੇਬਲ ਹੋਵੇ। ਤੁਸੀਂ ਪਾਸਵਰਡ ਜਾਂ API hash/token ਵਰਤ ਕੇ ਪ੍ਰਮਾਣਿਤ ਕਰ ਸਕਦੇ ਹੋ।

API ਐਕਸੈਸ ਇਨੇਬਲ ਕਰਨ ਅਤੇ ਪ੍ਰਮਾਣੀਕਰਨ ਦੀਆਂ ਵਿਸਤ੍ਰਿਤ ਜਾਣਕਾਰੀਆਂ ਲਈ Hestia ਦੇ REST API ਡੌਕਸ ਵੇਖੋ:
https://hestiacp.com/docs/server-administration/rest-api.html

## ਕੌਂਫਿਗਰੇਸ਼ਨ (Wizard → Integrations → Hestia)
ਹੇਠ ਲਿਖੀਆਂ ਵੈਲਿਊਜ਼ ਦਿਓ:

- `WU_HESTIA_API_URL` (ਜ਼ਰੂਰੀ)
  - ਬੇਸ API endpoint, ਆਮ ਤੌਰ 'ਤੇ `https://your-hestia-host:8083/api/`।
- `WU_HESTIA_API_USER` (ਜ਼ਰੂਰੀ)
  - API ਕਮਾਂਡਾਂ ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ Hestia ਯੂਜ਼ਰ (ਅਕਸਰ `admin`)।
- `WU_HESTIA_API_PASSWORD` ਜਾਂ `WU_HESTIA_API_HASH` (ਘੱਟੋ-ਘੱਟ ਇੱਕ)
  - ਇੱਕ ਪ੍ਰਮਾਣੀਕਰਨ ਤਰੀਕਾ ਚੁਣੋ: ਪਾਸਵਰਡ ਜਾਂ API hash/token।
- `WU_HESTIA_ACCOUNT` (ਜ਼ਰੂਰੀ)
  - Hestia ਵਿੱਚ Web Domain ਦਾ ਅਕਾਊਂਟ (ਮਾਲਕ); ਇਹ CLI ਦਾ ਪਹਿਲਾ argument ਹੈ।
- `WU_HESTIA_WEB_DOMAIN` (ਜ਼ਰੂਰੀ)
  - ਮੌਜੂਦਾ Hestia Web Domain ਜੋ ਤੁਹਾਡੀ WordPress ਨੂੰ ਸਰਵ ਕਰਦਾ ਹੈ (aliases ਇੱਥੇ ਜੋੜੇ ਜਾਣਗੇ)।
- `WU_HESTIA_RESTART` (ਵਿਕਲਪਿਕ; ਡਿਫਾਲਟ `yes`)
  - alias ਤਬਦੀਲੀਆਂ ਤੋਂ ਬਾਅਦ ਸਰਵਿਸਾਂ ਨੂੰ restart/reload ਕਰਨਾ ਹੈ ਜਾਂ ਨਹੀਂ।

ਤੁਸੀਂ wizard ਨੂੰ ਇਹ constants `wp-config.php` ਵਿੱਚ ਆਪਣੇ ਆਪ ਜੋੜਨ ਦੇ ਸਕਦੇ ਹੋ, ਜਾਂ ਇਨ੍ਹਾਂ ਨੂੰ ਖੁਦ ਡਿਫਾਈਨ ਕਰ ਸਕਦੇ ਹੋ।

## ਸੈੱਟਅੱਪ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨਾ
- wizard ਦੇ "Testing" ਸਟੈਪ ਵਿੱਚ, plugin API ਰਾਹੀਂ `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ਕਾਲ ਕਰਦਾ ਹੈ। ਸਫਲ ਜਵਾਬ ਕਨੈਕਟੀਵਿਟੀ ਅਤੇ ਪ੍ਰਮਾਣੀਕਰਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ।
- ਡੋਮੇਨ ਮੈਪ ਕਰਨ ਤੋਂ ਬਾਅਦ, Hestia ਵਿੱਚ ਚੈੱਕ ਕਰੋ: Web > ਬੇਸ ਡੋਮੇਨ > Aliases। ਤੁਹਾਨੂੰ ਨਵਾਂ alias ਜੋੜਿਆ ਹੋਇਆ ਦਿਖਣਾ ਚਾਹੀਦਾ ਹੈ।

## ਨੋਟਸ ਅਤੇ ਸੁਝਾਅ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ `WU_HESTIA_WEB_DOMAIN` ਪਹਿਲਾਂ ਤੋਂ ਮੌਜੂਦ ਹੈ ਅਤੇ `WU_HESTIA_ACCOUNT` ਦੀ ਮਾਲਕੀ ਹੈ।
- ਜੇ SSL ਜ਼ਰੂਰੀ ਹੈ, ਤਾਂ certificates Hestia ਵਿੱਚ ਮੈਨੇਜ ਕਰੋ। ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਫਿਲਹਾਲ ਸਿਰਫ਼ aliases ਹੈਂਡਲ ਕਰਦਾ ਹੈ।
- ਤੁਹਾਡੀ Domain Mapping "www subdomain" ਸੈਟਿੰਗ ਦੇ ਅਨੁਸਾਰ plugin `www.<domain>` ਵੀ ਜੋੜ/ਹਟਾ ਸਕਦਾ ਹੈ।

## ਉਦਾਹਰਨ API ਕਾਲ (cURL)
ਹੇਠਾਂ ਇੱਕ ਸੰਕਲਪਿਕ ਉਦਾਹਰਨ ਹੈ (ਆਪਣੇ ਵਾਤਾਵਰਨ ਅਨੁਸਾਰ ਐਡਜਸਟ ਕਰੋ)। ਸਹੀ ਪੈਰਾਮੀਟਰਾਂ ਲਈ ਅਧਿਕਾਰਤ ਡੌਕ ਵੇਖੋ।

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ਜਾਂ &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (ਜੋੜਨ ਲਈ alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

ਹਟਾਉਣ ਲਈ, `cmd=v-delete-web-domain-alias` ਵਰਤੋ ਅਤੇ ਉਹੀ args।

## ਸਮੱਸਿਆ ਨਿਵਾਰਨ
- API ਤੋਂ HTTP ਐਰਰ: ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ `WU_HESTIA_API_URL` ਪਹੁੰਚਯੋਗ ਹੈ ਅਤੇ `/api` ਸ਼ਾਮਲ ਹੈ।
- Auth ਐਰਰ: `WU_HESTIA_API_USER` ਅਤੇ `WU_HESTIA_API_PASSWORD` ਜਾਂ `WU_HESTIA_API_HASH` ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।
- ਲੌਗਸ ਵਿੱਚ "Missing account/base domain": ਯਕੀਨੀ ਬਣਾਓ ਕਿ `WU_HESTIA_ACCOUNT` ਅਤੇ `WU_HESTIA_WEB_DOMAIN` ਸੈੱਟ ਹਨ ਅਤੇ Hestia ਵਿੱਚ ਵੈਧ ਹਨ।

## ਹਵਾਲੇ
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI ਹਵਾਲਾ (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
