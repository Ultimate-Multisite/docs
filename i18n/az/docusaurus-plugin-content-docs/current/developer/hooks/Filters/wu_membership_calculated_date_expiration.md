---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Hesablanmış bitmə tarixini filtrləyir.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $expiration | `string` | MySQL formatında hesablanmış bitmə tarixi. |
| $membership_id | `int` | Üzvliliyin ID-si. |
| $membership | `\WP_Ultimo\Models\Membership` | Üzvlilik obyekti. |

### Nə vaqtdan bəri

- 2.0
### Mənbə

1309-cu sətirdə [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) yerləşdirilib.
