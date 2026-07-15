---
id: wu_generated_username_from_email
title: Фільтр - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

Фільтруе згенераванае карыстальніцкае імя кліента.

## Паметнікі {#parameters}

| Name | Type | Апісанне |
|------|------|-------------|
| $username | `string` | Згенераванае карыстальніцкае імя. |
| $email | `string` | Новы адрас электроннай пошты кліента. |
| $new_user_args | `array` | Массив аргументаў для новага карыстальніка, які можа ўключаць і імя, і назір. |
| $suffix | `string` | Тэкст, які дадаецца да карыстальніцкага імя, каб зрабіць яго ўнікальным. |

### З {#since}

- 3.7.0
### Паходжанне {#source}

Вызначана ў [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) на 488-й кропцы
