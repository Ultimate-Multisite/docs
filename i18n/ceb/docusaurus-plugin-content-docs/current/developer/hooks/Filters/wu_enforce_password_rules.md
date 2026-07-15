---
id: wu_enforce_password_rules
title: Pagsala - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter kung ipatuman ba ang dugang nga mga lagda sa password.

Kung true, ipatuman ang minimum nga gitas-on ug mga kinahanglanon sa karakter. Awtomatikong i-enable para sa "Super Strong" nga setting o kung aktibo ang Strong Password feature sa Defender Pro.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Kung ipatuman ba ang dugang nga mga lagda. |
| $strength_setting | `string` | Ang bili sa setting sa admin. |
| $defender_active | `bool` | Kung aktibo ba ang Defender Pro Strong Password. |

### Sukad {#since}

- 2.4.0
### Tinubdan {#source}

Gidefine sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) sa linya 531
