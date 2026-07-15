---
id: wu_minimum_password_length
title: Чыпка - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Минималдуу сырсөз узундугун фильтрлейт.

`wu_enforce_password_rules` true болгондо гана колдонулат.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $min_length | `int` | Минималдуу сырсөз узундугу. Демейки 12 (Defender Pro менен дал келет). |
| $defender_active | `bool` | Defender Pro Strong Password активдүү экендиги. |

### Баштап {#since}

- 2.4.0
### Булак {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ичинде 543-сапта аныкталган
