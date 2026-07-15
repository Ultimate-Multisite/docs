---
id: wu_membership_post_cancel
title: Radnja - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Radnja: wu_membership_post_cancel

Pokreće se nakon što je članstvo otkazano.

Ovo pokreće e-poruku o otkazivanju.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $membership_id | `int` | ID članstva. |
| $membership | `\WP_Ultimo\Models\Membership` | Objekt članstva. |

### Od verzije {#since}

- 2.0
### Izvor {#source}

Definirano u [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) u retku 2290
