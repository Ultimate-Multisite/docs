---
id: wu_membership_post_cancel
title: Дія - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Виконується після скасування членства.

Це викликає електронний лист про скасування.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $membership_id | `int` | Ідентифікатор членства. |
| $membership | `\WP_Ultimo\Models\Membership` | Об'єкт членства. |

### Починаючи з {#since}

- 2.0
### Джерело {#source}

Визначено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) на рядку 2290
