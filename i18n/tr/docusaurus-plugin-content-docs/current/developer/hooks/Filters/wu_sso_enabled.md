---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filtre: wu_sso_enabled

Alanlar arası tek oturum açma (single-sign-on) özelliğini etkinleştirme/devre dışı bırakma.

Bu değeri filtreleyerek tek oturum açmayı tamamen kapatabilir veya bunun yerine koşullu olarak etkinleştirebilirsiniz.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO etkinleştirilmeli mi? Açık olması için `true`, kapalı olması için `false` değeri kullanılır. |

### Since

- 2.0.11
### Source

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) dosyasındaki 110. satırda tanımlanmıştır.


## Returns
SSO'nun etkin olup olmadığı.
