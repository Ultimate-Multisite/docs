---
id: wu_membership_post_renew
title: Дія - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Виконується після поновлення членства.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Нова дата закінчення терміну, яку потрібно встановити. |
| $membership_id | `int` | Ідентифікатор членства. |
| $membership | `\Membership` | Об'єкт членства. |

### Починаючи з {#since}

- 2.0
### Джерело {#source}

Визначено у [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) на рядку 2235
