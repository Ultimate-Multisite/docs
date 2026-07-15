---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Utlöses efter medlemskapsförnyelsen.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $expiration | `string` | Det nya utgångsdatumet som ska sättas. |
| $membership_id | `int` | ID:t för medlemskapet. |
| $membership | `\Membership` | Medlemskapsobjektet. |

### Sedan {#since}

- 2.0
### Källa {#source}

Definieras i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) på rad 2235
