---
id: wu_enforce_password_rules
title: Фильтр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Чыпка: wu_enforce_password_rules

Кошумча сырсөз эрежелерин колдонуу же колдонбоону чыпкалайт.

Мааниси true болгондо, минималдуу узундук жана символ талаптарын колдонот. "Super Strong" жөндөөсү үчүн же Defender Pro'нун Strong Password функциясы активдүү болгондо автоматтык түрдө иштетилет.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $enforce_rules | `bool` | Кошумча эрежелерди колдонуу керекпи. |
| $strength_setting | `string` | Админ жөндөөсүнүн мааниси. |
| $defender_active | `bool` | Defender Pro Strong Password активдүүбү. |

### Чыгарылгандан бери

- 2.4.0
### Булак

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ичинде 531-сапта аныкталган
