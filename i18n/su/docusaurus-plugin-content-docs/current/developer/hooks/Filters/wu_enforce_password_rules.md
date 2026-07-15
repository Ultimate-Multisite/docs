---
id: wu_enforce_password_rules
title: Saringan - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter naha rék maksa aturan sandi tambahan.

Lamun true, maksa panjang minimum jeung sarat karakter. Otomatis diaktipkeun pikeun setélan "Super Strong" atawa nalika fitur Strong Password ti Defender Pro aktip.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Naha rék maksa aturan tambahan. |
| $strength_setting | `string` | Nilai setélan admin. |
| $defender_active | `bool` | Naha Defender Pro Strong Password aktip. |

### Ti saprak {#since}

- 2.4.0
### Sumber {#source}

Didefinisikeun dina [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) dina baris 531
