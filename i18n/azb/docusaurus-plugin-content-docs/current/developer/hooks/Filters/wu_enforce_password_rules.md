---
id: wu_enforce_password_rules
title: Saringan - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Şifreye ek kurallar uygulanıp uygulanmayacağını filtreler.

`true` olduğunda, minimum uzunluk ve karakter gereksinimlerini zorunlu kılar. Bu özellik, "Super Strong" ayarı için veya Defender Pro'nun Strong Password özelliği aktif olduğunda otomatik olarak etkinleştirilir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Ek kuralların uygulanıp uygulanmayacağını belirtir. |
| $strength_setting | `string` | Yönetici ayar değeridir. |
| $defender_active | `bool` | Defender Pro Strong Password özelliğinin aktif olup olmadığını belirtir. |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) dosyasında 531. satırda tanımlanmıştır.
