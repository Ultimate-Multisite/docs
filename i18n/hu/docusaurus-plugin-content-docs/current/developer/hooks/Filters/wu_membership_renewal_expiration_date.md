---
id: wu_membership_renewal_expiration_date
title: Szűrő - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Szűrőzi a számított lejárat dátumát, hogy az megújítás után legyen.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $expiration | `string` | A számított lejárat dátuma. |
| $plan | `\Product` | Tagsági szint objektum. |
| $membership_id | `int` | A tagság azonosítója. |
| $membership | `\Membership` | Tagság objektum. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Megdéberozva a [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) fájlban, 2192-sorban.
