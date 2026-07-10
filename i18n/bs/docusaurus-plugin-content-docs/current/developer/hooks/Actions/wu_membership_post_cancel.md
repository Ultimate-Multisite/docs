---
id: wu_membership_post_cancel
title: Akcija - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

Pokreće se nakon otkazivanja članstva.

Ovo pokreće e-mail o otkazivanju.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | ID članstva. |
| $membership | `\WP_Ultimo\Models\Membership` | Objekat članstva. |

### Od verzije {#since}

- 2.0
### Izvor {#source}

Definisano u [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) na liniji 2290
