---
id: wu_minimum_password_length
title: Шүүлтүүр - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Нууц үгийн хамгийн бага уртыг шүүнэ.

Зөвхөн wu_enforce_password_rules true үед хэрэгжинэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $min_length | `int` | Нууц үгийн хамгийн бага урт. Анхдагч нь 12 (Defender Pro-той таарна). |
| $defender_active | `bool` | Defender Pro Strong Password идэвхтэй эсэх. |

### Хойш {#since}

- 2.4.0
### Эх сурвалж {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543)-д 543-р мөрөнд тодорхойлсон.
