---
id: wu_membership_pre_cancel
title: Дія - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel {#action-wumembershipprecancel}

Виконується перед скасуванням членства.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $membership_id | `int` | ID членства. |
| $membership | `\WP_Ultimo\Models\Membership` | Об'єкт членства. |

### З версії {#since}

- 2.0
### Джерело {#source}

Визначено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) на рядку 2267
