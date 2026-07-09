---
id: wu_minimum_password_length
title: Filtr - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtr: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtr minimalnej długości hasła.

Jest egzekwowany tylko wtedy, gdy `wu_enforce_password_rules` jest ustawione na `true`.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimalna długość hasła. Domyślnie 12 (zgodnie z Defender Pro). |
| $defender_active | `bool` | Czy Defender Pro Strong Password jest aktywne. |

### Since {#since}

- 2.4.0
### Source {#source}

Zdefiniowane w [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) w linii 543
