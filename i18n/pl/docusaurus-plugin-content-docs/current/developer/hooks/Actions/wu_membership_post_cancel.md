---
id: wu_membership_post_cancel
title: Akcja - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Akcja: wu_membership_post_cancel

Wyzwala się po anulowaniu członkostwa.

Akcja ta wyzwala e-mail z informacją o anulowaniu.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $membership_id | `int` | Identyfikator członkostwa. |
| $membership | `\WP_Ultimo\Models\Membership` | Obiekt członkostwa. |

### Od

- 2.0
### Źródło

Zdefiniowane w [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) w linii 2290
