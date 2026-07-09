---
id: wu_membership_post_cancel
title: Aksyon - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Aksyon: wu_membership_post_cancel

Nati-trigger pagkatapos makansela ang pagiging miyembro.

Nati-trigger nito ang email sa pagkansela.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $membership_id | `int` | Ang ID ng pagiging miyembro. |
| $membership | `\WP_Ultimo\Models\Membership` | Object ng pagiging miyembro. |

### Mula Noong

- 2.0
### Pinagmulan

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) sa linya 2290
