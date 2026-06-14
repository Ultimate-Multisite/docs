---
title: Hestia Control Panel Integratsiyasi
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

این راهنما توضیح می‌دهد که چگونه تنظیمات Ultimate Multisite Hestia integration را انجام دهید تا دامنه‌های نگاشت شده در شبکه شما به صورت خودکار به عنوان Web Domain Aliases در Hestia اضافه (و حذف) شوند.

- مرجع CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- مستند رسمی REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## چه کاری انجام می‌دهد
- وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود، این integration از Hestia API برای اجرای دستور زیر استفاده می‌کند:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- وقتی نگاشت یک دامنه حذف می‌شود، دستور زیر اجرا می‌شود:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- بسته به تنظیمات شما در تنظیمات Domain Mapping برای "Auto-create www subdomain" (خودکار ایجاد زیردامنه www)، می‌توانید آدرس alias را اضافه یا حذف کنید.

## پیش‌نیازها
- یک Hestia Web Domain موجود که قبلاً به نصب وردپرس شما اشاره می‌کند. این integration الیاس‌ها را به این دامنه پایه متصل خواهد کرد.
- دسترسی به API Hestia فعال باشد. می‌توانید با استفاده از رمز عبور یا هش/توکن API احراز هویت کنید.

برای فعال کردن دسترسی به API و جزئیات احراز هویت، به مستندهای REST API هستیا مراجعه کنید:
https://hestiacp.com/docs/server-administration/rest-api.html

## پیکربندی (Wizard → Integrations → Hestia)
مقادیر زیر را ارائه دهید:

`WU_HESTIA_API_URL` (şart)
- Asosiy API son noktası, tipik olaraq `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (şart)
- API əmrləri üçün istifadə edilən Hestia istifadəçisi (adətən `admin`).

`WU_HESTIA_API_PASSWORD` və ya `WU_HESTIA_API_HASH` (və ya hər ikisi) (hətta biri seçin)
- İki autentifikasiya üsulundan birini seçin: şifrə və ya API hash/token.

`WU_HESTIA_ACCOUNT` (şart)
- Hestia-da Web Domainin hesabı (sahibi); bu, CLI üçün ilk arqumentdir.

`WU_HESTIA_WEB_DOMAIN` (şart)
- WordPressinizi xidmət edən mövcud Hestia Web Domaini (aliaslar buraya əlavə ediləcək).

`WU_HESTIA_RESTART` (isteğe bağlı; default `yes`)
- Alias dəyişikliklərdan sonra xidmətləri yenidən başlatmaq/yeniləmək istəyirsinizmi.

Bu sabitləri `wp-config.php`-ə enjekte edə bilərsiniz, və ya onları əl ilə təyin edə bilərsiniz.

## Quruluşu Yoxlamaq
- Wizardın "Testing" addımında, plugin API vasitəsilə `v-list-web-domains <WU_HESTIA_ACCOUNT> json` çağırır. Uğurlu cavab əlaqəli və autentifikasiyanı təsdiqləyir.
- Bir domaini haritalandırdıqdan sonra, Hestia-da yoxlayın: Web > asosiy domain > Aliases (Aliaslar). Yeni aliasın əlavə olunduğunu görməlisiniz.

## Qeydlər və İpucları
- `WU_HESTIA_WEB_DOMAIN`-in artıq mövcud olduğunu və `WU_HESTIA_ACCOUNT` tərəfindən sahib olduğunu təmin edin.
- SSL lazımdırsa, sertifikatları Hestia-da idarə edin. Bu inteqrasiya hazırda yalnız aliasları idarə edir.
- Domain Xəritləmə "www subdomain" ayarınıza görə plugin `www.<domain>` əlavə edə və ya çıxara bilər.

## API Çağırışı Nümunəsi (cURL)
Aşağıda konsepsional bir nümunədir (mühitinizi buna uyğun dəyişin). Dəqiq parametrlər üçün rəsmi sənədi nəzərdən keçirin.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

حذف (delete) üçün `cmd=v-delete-web-domain-alias` və eyni parametrlardan istifadə edin.

## Problemləri həll etmək (Troubleshooting)
- API-dən HTTP xətası alırsınızsa: `WU_HESTIA_API_URL`-nin əlçatan olduğundan və `/api` ilə bitdiyindən əmin olun.
- Autentifikasiya xətaları: `WU_HESTIA_API_USER` və ya `WU_HESTIA_API_PASSWORD` və ya `WU_HESTIA_API_HASH`-dan birini təsdiqləyin.
- Loglarda "Missing account/base domain" (Hesab/Əsas domen tapılmadı) yazısı varsa: Hestia-da `WU_HESTIA_ACCOUNT` və `WU_HESTIA_WEB_DOMAIN`-in düzgün qoyulub olmadığını yoxlayın.

## Referanslar
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referansı (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
