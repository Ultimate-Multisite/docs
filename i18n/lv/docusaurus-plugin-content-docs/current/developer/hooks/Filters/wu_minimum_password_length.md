---
id: wu_minimum_password_length
title: Filtrs - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtrs: wu_minimum_password_length

Filtrē minimālo paroles garumu.

Tiek piemērots tikai tad, ja wu_enforce_password_rules ir true.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimālais paroles garums. Noklusējums 12 (atbilst Defender Pro). |
| $defender_active | `bool` | Vai Defender Pro Strong Password ir aktīvs. |

### Kopš

- 2.4.0
### Avots

Definēts [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) 543. rindā
