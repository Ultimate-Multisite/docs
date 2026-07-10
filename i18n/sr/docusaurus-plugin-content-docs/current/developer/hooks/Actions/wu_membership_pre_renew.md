---
id: wu_membership_pre_renew
title: Радња - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Акција: wu_membership_pre_renew {#action-wumembershipprerenew}

Покреће се пре обнове чланства.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $expiration | `string` | Нови датум истека који треба поставити. |
| $membership_id | `int` | ID чланства. |
| $membership | `\Membership` | Објекат чланства. |

### Од верзије {#since}

- 2.0
### Извор {#source}

Дефинисано у [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) у реду 2204
