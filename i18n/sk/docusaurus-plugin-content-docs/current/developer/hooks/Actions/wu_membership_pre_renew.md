---
id: wu_membership_pre_renew
title: Akcia - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Spustí sa pred obnovením členstva.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Nový dátum vypršania, ktorý sa má nastaviť. |
| $membership_id | `int` | ID členstva. |
| $membership | `\Membership` | Objekt členstva. |

### Od verzie {#since}

- 2.0
### Zdroj {#source}

Definované v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) na riadku 2204
