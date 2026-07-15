---
id: wu_membership_renewal_expiration_date
title: Filtry - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filtr: wu_membership_renewal_expiration_date

Filtruje obliczoną datę wygaśnięcia, aby była ustawiona po dacie odnowienia.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $expiration | `string` | Obliczona data wygaśnięcia. |
| $plan | `\Product` | Obiekt poziomu członkostwa. |
| $membership_id | `int` | ID członkostwa. |
| $membership | `\Membership` | Obiekt członkostwa. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowany w [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) w linii 2192
