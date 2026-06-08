---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Ekranlararası (cross-domain) tək giriş sistemini (single-sign-on) aktivləşdirmək və ya deaktivləşdirmək üçün istifadə olunur.

Bu dəyəri filtrləməklə tək giriş sistemini tamamilə söndürə, yaxud əksinə, şərtlərlə aktivləşdirə bilərsiniz.

## Parametrlər

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO aktiv olmalıdır? Aktiv üçün `True`, söndürmək üçün `false` (və ya `false-ish`). |

### Nə vaxtdan

- 2.0.11
### Mənbə

[inc/sso/class-sso.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) faylında, 110-cu sətirdə təyin edilmişdir.


## Nə qaytarır
SSO aktiv olub-olmadığını.
