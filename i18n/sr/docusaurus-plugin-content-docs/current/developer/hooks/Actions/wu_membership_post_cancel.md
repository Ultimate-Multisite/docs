---
id: wu_membership_post_cancel
title: Акција - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Покреће се након отказивања чланства.

Ово покреће имејл за отказивање.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $membership_id | `int` | ID чланства. |
| $membership | `\WP_Ultimo\Models\Membership` | Објекат чланства. |

### Од верзије {#since}

- 2.0
### Извор {#source}

Дефинисано у [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) у линији 2290
