---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Plugin developerlərinin lazım olduqda əlavə hook-lar əlavə etməsinə imkan verir.

Bu, SSO (Single Sign-On) funksionallığı `sunrise` (gün doğumu) zamanı işlədiyi üçün, `init` (başlatma) zamanına qədər gecikdirilməlidir.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $sso | `self` | SSO sinifi. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) faylının 285-ci sətirində təyin edilmişdir.
