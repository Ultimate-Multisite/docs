---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtreeri, kas jõustada täiendavaid paroolireegleid.

Kui true, jõustab minimaalse pikkuse ja tähemärkide nõuded. Lubatakse automaatselt sätte "Super Strong" puhul või kui Defender Pro Strong Password funktsioon on aktiivne.

## Parameetrid

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Kas jõustada täiendavaid reegleid. |
| $strength_setting | `string` | Administraatori sätte väärtus. |
| $defender_active | `bool` | Kas Defender Pro Strong Password on aktiivne. |

### Alates

- 2.4.0
### Allikas

Määratletud failis [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) real 531
