---
id: wu_membership_post_renew
title: Akcja - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Akcja: wu_membership_post_renew {#action-wumembershippostrenew}

Wyzwala się po odnowieniu członkostwa.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $expiration | `string` | Nowa data wygaśnięcia, którą należy ustawić. |
| $membership_id | `int` | ID członkostwa. |
| $membership | `\Membership` | Obiekt członkostwa. |

### Od {#since}

- 2.0
### Źródło {#source}

Zdefiniowane w [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) w linii 2235
