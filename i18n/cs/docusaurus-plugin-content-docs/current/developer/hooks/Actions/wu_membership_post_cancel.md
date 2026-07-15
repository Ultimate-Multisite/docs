---
id: wu_membership_post_cancel
title: Akce - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Akce: wu_membership_post_cancel

Spouští se po zrušení členství.

Tato akce odesílá e-mail o zrušení.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $membership_id | `int` | ID členství. |
| $membership | `\WP_Ultimo\Models\Membership` | Objekt členství. |

### Od verze {#since}

- 2.0
### Zdroj {#source}

Definováno v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) na řádku 2290
