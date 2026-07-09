---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

Alanlar arası tek oturum açma (single-sign-on) özelliğini açıp kapatır.

Bu değeri filtreleyerek tek oturum açmayı tamamen kapatabilir veya bunun yerine koşullu olarak etkinleştirebilirsiniz.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $enabled | `bool` | SSO etkinleştirilmeli mi? Açık olması için `True`, kapalı olması için `False` gibi bir değer. |

### Kullanılmaya Başladığı {#since}

- 2.0.11
### Kaynak {#source}

110. satırda tanımlanmıştır: [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110)

## Dönüş Değeri {#returns}
SSO etkinse veya değilse.
