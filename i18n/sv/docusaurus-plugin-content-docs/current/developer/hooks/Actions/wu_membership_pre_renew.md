---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Utlöses före förnyelsen av ett medlemskap.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $expiration | `string` | Det nya utgångsdatumet som ska sättas. |
| $membership_id | `int` | ID:t för medlemskapet. |
| $membership | `\Membership` | Medlemskapsobjektet. |

### Sedan {#since}

- 2.0
### Källa {#source}

Definieras i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) på rad 2204
