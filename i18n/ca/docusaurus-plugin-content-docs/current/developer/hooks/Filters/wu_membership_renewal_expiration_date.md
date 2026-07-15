---
id: wu_membership_renewal_expiration_date
title: Filtre - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filtre: wu_membership_renewal_expiration_date

Filtra la data de caducitat calculada que s’ha d’establir després de la renovació.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $expiration | `string` | Data de caducitat calculada. |
| $plan | `\Product` | Objecte de nivell de membership. |
| $membership_id | `int` | L’ID del membership. |
| $membership | `\Membership` | Objecte de membership. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit a [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) a la línia 2192
