---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Əlavə şifrə qaydalarının tətbiq edilməsini filtrləyir.

`true` olduqda, minimum uzunluq və simvol tələblərini tətbiq edir. Bu, "Super Strong" ayarı üçün və ya Defender Pro-nun Strong Password xüsusiyyəti aktiv olduqda avtomatik olaraq aktiv edilir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Əlavə qaydaların tətbiq edilməsi. |
| $strength_setting | `string` | Administrator ayar dəyəri. |
| $defender_active | `bool` | Defender Pro Strong Password-un aktiv olub-olmaması. |

### Nə vaxtdən {#since}

- 2.4.0
### Mənbə {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) faylında 531-ci sətirdə təyin edilmişdir.
