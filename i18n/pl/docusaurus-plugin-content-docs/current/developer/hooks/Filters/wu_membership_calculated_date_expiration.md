---
id: wu_membership_calculated_date_expiration
title: Filtry - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filtry: wu_membership_calculated_date_expiration

Filtruje obliczoną datę wygaśnięcia.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $expiration | `string` | Obliczona data wygaśnięcia w formacie MySQL. |
| $membership_id | `int` | ID członkostwa. |
| $membership | `\WP_Ultimo\Models\Membership` | Obiekt członkostwa. |

### Od {#since}

- 2.0
### Źródło {#source}

Zdefiniowane w [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) w linii 1309
