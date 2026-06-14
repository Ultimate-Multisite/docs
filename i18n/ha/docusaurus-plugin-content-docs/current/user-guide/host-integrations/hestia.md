---
title: Shigarwar Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Shigarwarin Hestia Control Panel Integration

Wannan hanyar taƙaitaccen bayani ne game da yadda ake tsara shigarwar Ultimate Multisite Hestia don a ƙara (da kuma cire) domain-dangi masu haske a gida ɗinku a matsayin Web Domain Aliases a cikin Hestia.

- Shigarwar CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokar REST API na asali: https://hestiacp.com/docs/server-administration/rest-api.html

## Abin da Yana Fara
- Lokacin da aka haska domain a Ultimate Multisite, shigarwar tana kira Hestia API don gudanar da:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Lokacin da aka cire haskar domain, tana gudanar da:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- A wani lokaci tana ƙara/cire alias ɗin `www.` dangane da tsarin "Auto-create www subdomain" a cikin Domain Mapping settings.

## Sharuwar Aiki (Wizard → Integrations → Hestia)
Ka ba wa waɗannan ƙima:

- `WU_HESTIA_API_URL` (sharuwa)
  - Wurin API endpoint na, da take ne `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (sharuwa)
  - Mai amin Hestia da ake amfani don lura ayyukan API (yawanci shine `admin`).
- `WU_HESTIA_API_PASSWORD` ko `WU_HESTIA_API_HASH` (wata daga cikin su)
  - Zaɓi hanyar tabbatar da kansa: amfani da kalmar sirri ko API hash/token.
- `WU_HESTIA_ACCOUNT` (sharuwa)
  - Shugaban asusun (owner) Domain na Web a Hestia; wannan shine farkon magana ga CLI.
- `WU_HESTIA_WEB_DOMAIN` (sharuwa)
  - Domain na Web da take wajen WordPress ɗinka, wanda za a saka aliases a nan.
- `WU_HESTIA_RESTART` (ba shi da sharuwa; default `yes`)
  - Wannan shine ko za a sake gudanar da ayyukan services bayan canza aliases.

Za ka ba wa wizard don shigar wa waɗannan constants cikin `wp-config.php`, ko kuma ka ƙayyade su kai tsaye.

## Tabbatar da Setup
- A matakin "Testing" na wizard, plugin zai kira `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ta hanyar API. Bayan amsa mai nasara za ta tabbatar da wajaba da tabbatar da kansa (authentication).
- Bayan an saka domain, bincika a Hestia: Web > base domain > Aliases. Za ka ga alias ɗin sabon an ƙara.

## Shawara & Bayanai
- Ka tabbata `WU_HESTIA_WEB_DOMAIN` ya wajaba kuma yana da shugaban `WU_HESTIA_ACCOUNT`.
- Idan SSL na buƙata, ka'aitta sertifika a Hestia. Wannan haɗin yanzu yana gudanar da aliases kawai.
- Plugin zai iya ƙara/cire `www.<domain>` dangane da tsarin "www subdomain" na Domain Mapping ɗinka.

## Misalin Kira API (cURL)
Wannan misali ne na ra'ayi (ka gyara shi ga muhallin ka). Ka mai rami da dokumentar shafi na asali don ƙarin bayanan da ake bukata.

برای اضافه کردن یک آدرس دامنه وب جدید، از دستور زیر استفاده کنید:

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (یا &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

برای حذف، از `cmd=v-delete-web-domain-alias` و همان آرگومان‌ها استفاده کنید.

## عیب‌یابی (Troubleshooting)
- خطای HTTP از API: مطمئن شوید که `WU_HESTIA_API_URL` قابل دسترسی است و شامل `/api` می‌باشد.
- خطاهای احراز هویت (Auth errors): تأیید کنید که `WU_HESTIA_API_USER` و یا `WU_HESTIA_API_PASSWORD` یا `WU_HESTIA_API_HASH` درست تنظیم شده باشند.
- پیام‌های "Missing account/base domain" در لاگ‌ها: مطمئن شوید که متغیرهای `WU_HESTIA_ACCOUNT` و `WU_HESTIA_WEB_DOMAIN` در Hestia تنظیم و معتبر هستند.

## مراجع (References)
- API وب Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- مرجع خط فرمان Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
