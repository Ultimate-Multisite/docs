---
id: wu_username_from_email
title: Фільтр - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

Фільтруе імя карыстальніка новага кліента.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $username | `string` | Імя карыстальніка кліента. |
| $email | `string` | Электронная адрас новага кліента. |
| $new_user_args | `array` | Массив аргументаў для новага карыстальніка, які можа ўключаць і імя, і назіў. |
| $suffix | `string` | Тэкст, які будзе дададзены да імя карыстальніка, каб зрабіць яго ўнікальным. |

### З версіі {#since}

- 2.0.0
### Выказчык {#source}

Вызначаны ў [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) на 516-й паўніне.
