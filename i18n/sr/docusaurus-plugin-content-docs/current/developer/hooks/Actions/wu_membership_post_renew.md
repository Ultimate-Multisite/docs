---
id: wu_membership_post_renew
title: Радња - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Радња: wu_membership_post_renew

Покреће се након обнове чланства.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Нови датум истека који треба поставити. |
| $membership_id | `int` | ID чланства. |
| $membership | `\Membership` | Објекат чланства. |

### Од верзије {#since}

- 2.0
### Извор {#source}

Дефинисано у [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) у линији 2235
