---
id: wu_membership_calculated_date_expiration
title: Фільтр - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Фільтр: wu_membership_calculated_date_expiration

Фільтрує обчислена дату закінчення терміну дії.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $expiration | `string` | Обчислена дата закінчення терміну дії у форматі MySQL. |
| $membership_id | `int` | ID членства. |
| $membership | `\WP_Ultimo\Models\Membership` | Об'єкт членства. |

### З {#since}

- 2.0
### Джерело {#source}

Визначено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) у рядку 1309
