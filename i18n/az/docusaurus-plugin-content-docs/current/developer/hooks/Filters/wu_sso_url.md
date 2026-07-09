---
id: wu_sso_url
title: Filtr - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtr: wu_sso_url

Domenlərarası müştəri əməliyyatları üçün qaytarılmadan əvvəl yaradılmış SSO URL-lərini filtrləyir.

İnteqrasiya Ultimate Multisite-in token doğrulamasını qoruyaraq suveren-tenant SSO linkinə etibarlı kontekst əlavə etməli və ya broker URL-ni əvəz etməli olduqda bu filtrdən istifadə edin.

## Parametrlər

| Ad | Tip | Təsvir |
|------|------|-------------|
| $sso_url | `string` | Yaradılmış SSO URL. |
| $user | `WP_User` | SSO ziyarəti ilə autentifikasiya olunacaq istifadəçi. |
| $site_id | `int` | Ziyarət üçün hədəf sayt ID-si. |
| $redirect_to | `string` | Uğurlu SSO doğrulamasından sonra təyinat URL-si. |

### Versiyadan bəri

- 2.13.0

### Mənbə

`inc/sso/class-sso.php` faylında təyin edilib.


## Qaytarır

Filtrlənmiş SSO URL.
