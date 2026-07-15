---
id: wu_membership_pre_cancel
title: Radnja - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel

Pokreće se prije nego što se članstvo otkaže.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $membership_id | `int` | ID članstva. |
| $membership | `\WP_Ultimo\Models\Membership` | Objekt članstva. |

### Od {#since}

- 2.0
### Izvor {#source}

Definirano u [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) u retku 2267
