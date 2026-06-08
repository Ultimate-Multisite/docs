---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Minimum şifrə uzunluğunu filtrləyir.

Yalnız `wu_enforce_password_rules` doğru (true) olduqda tətbiq edilir.

## Parametrlər

| Name | Type | Təsvir |
|------|------|-------------|
| $min_length | `int` | Minimum şifrə uzunluğu. Varsayılan 12-dir (Defender Pro ilə eynidir). |
| $defender_active | `bool` | Defender Pro Strong Password-un aktiv olub-olmadığı. |

### Nə vaxtdan

- 2.4.0
### Mənbə

543-cü sətirdə [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) yerində təyin edilmişdir.
