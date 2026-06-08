---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Ek parola kurallarının uygulanıp uygulanmayacağını filtreler.

`true` olduğunda, minimum uzunluk ve karakter gereksinimlerini zorunlu kılar. Bu özellik, otomatik olarak "Super Strong" ayarı için veya Defender Pro'nun Güçlü Parola özelliği aktif olduğunda etkinleştirilir.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Ek kuralların uygulanıp uygulanmayacağını belirtir. |
| $strength_setting | `string` | Yönetici ayar değerini içerir. |
| $defender_active | `bool` | Defender Pro Güçlü Parola özelliğinin aktif olup olmadığını belirtir. |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
