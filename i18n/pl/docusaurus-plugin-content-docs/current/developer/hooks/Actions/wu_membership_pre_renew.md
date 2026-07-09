---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Akcja: wu_membership_pre_renew {#action-wumembershipprerenew}

Wyzwala się przed odnowieniem członkostwa.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $expiration | `string` | Nowa data wygaśnięcia, którą należy ustawić. |
| $membership_id | `int` | ID członkostwa. |
| $membership | `\Membership` | Obiekt członkostwa. |

### Od {#since}

- 2.0
### Źródło {#source}

Zdefiniowane w [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) w wierszu 2204
