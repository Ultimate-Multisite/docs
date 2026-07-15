---
id: wu_membership_calculated_date_expiration
title: Филтър - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Филтър: wu_membership_calculated_date_expiration

Филтрира изчислената дата на изтичане.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $expiration | `string` | Изчислена дата на изтичане във формат MySQL. |
| $membership_id | `int` | ID на членството. |
| $membership | `\WP_Ultimo\Models\Membership` | Обект на членството. |

### От версия {#since}

- 2.0
### Източник {#source}

Дефиниран в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) на линия 1309
