---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Utløses før medlemskapsfornyelsen.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $expiration | `string` | Den nye utløpsdatoen som skal settes. |
| $membership_id | `int` | ID-en til medlemskapet. |
| $membership | `\Membership` | Medlemskapsobjektet. |

### Siden

- 2.0
### Kilde

Definert i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) på linje 2204
