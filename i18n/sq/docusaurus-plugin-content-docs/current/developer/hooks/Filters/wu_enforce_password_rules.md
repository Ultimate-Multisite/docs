---
id: wu_enforce_password_rules
title: Filtër - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtri: wu_enforce_password_rules

Filtron nëse duhen zbatuar rregulla shtesë për fjalëkalimin.

Kur është true, zbaton kërkesat për gjatësi minimale dhe karaktere. Aktivizohet automatikisht për cilësimin "Super Strong" ose kur funksioni Strong Password i Defender Pro është aktiv.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $enforce_rules | `bool` | Nëse duhen zbatuar rregulla shtesë. |
| $strength_setting | `string` | Vlera e cilësimit të administratorit. |
| $defender_active | `bool` | Nëse Defender Pro Strong Password është aktiv. |

### Që nga {#since}

- 2.4.0
### Burimi {#source}

Përcaktuar në [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) në rreshtin 531
