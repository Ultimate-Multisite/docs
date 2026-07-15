---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Utlöses efter att medlemskapet har avbrutits.

Detta utlöser e-postmeddelandet om avbokning.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $membership_id | `int` | ID:t för medlemskapet. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskapsobjektet. |

### Sedan {#since}

- 2.0
### Källa {#source}

Definieras i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) på rad 2290
