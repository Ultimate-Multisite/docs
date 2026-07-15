---
id: wu_minimum_password_length
title: Сүзгі - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Ең аз құпиясөз ұзындығын сүзгіден өткізу.

Тек wu_enforce_password_rules true болғанда ғана орындалады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттама |
|------|------|-------------|
| $min_length | `int` | Ең аз құпиясөз ұзындығы. Әдепкі мәні 12 (Defender Pro-ға сәйкес). |
| $defender_active | `bool` | Defender Pro Strong Password белсенді екенін көрсетеді. |

### Бастап {#since}

- 2.4.0
### Дереккөзі {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ішінде 543-жолда анықталған.
