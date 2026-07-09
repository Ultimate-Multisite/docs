---
id: wu_minimum_password_length
title: Фільтр - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Фільтр: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Фільтруе мінімальную даўжыню пароля.

Выконваецца толькі калі `wu_enforce_password_rules` мае значэнне `true`.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $min_length | `int` | Мінімальная даўжыня пароля. Паўгоджальны 12 (адпавядае Defender Pro). |
| $defender_active | `bool` | Ці актыўны Defender Pro Strong Password. |

### З версіі {#since}

- 2.4.0
### Выказчык {#source}

Вызначаны ў [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) у 543-й кропцы
