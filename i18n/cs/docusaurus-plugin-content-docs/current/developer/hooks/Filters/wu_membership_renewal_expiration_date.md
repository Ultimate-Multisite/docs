---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filtrační funkce: wu_membership_renewal_expiration_date

Filtruje vypočítané datum expirace tak, aby bylo nastaveno po datu obnovy.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $expiration | `string` | Vypočítané datum expirace. |
| $plan | `\Product` | Objekt úrovně členství. |
| $membership_id | `int` | ID členství. |
| $membership | `\Membership` | Objekt členství. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) na řádku 2192
