---
id: wu_membership_post_renew
title: Akcia - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Spustí sa po obnovení členstva.

## Parametre

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Nový dátum vypršania platnosti, ktorý sa má nastaviť. |
| $membership_id | `int` | ID členstva. |
| $membership | `\Membership` | Objekt členstva. |

### Od verzie

- 2.0
### Zdroj

Definované v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) na riadku 2235
