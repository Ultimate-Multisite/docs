---
id: wu_membership_pre_renew
title: Handling - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Udløses før fornyelse af medlemskabet.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $expiration | `string` | Ny udløbsdato, der skal angives. |
| $membership_id | `int` | ID'et for medlemskabet. |
| $membership | `\Membership` | Medlemskabsobjekt. |

### Siden

- 2.0
### Kilde

Defineret i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) på linje 2204
