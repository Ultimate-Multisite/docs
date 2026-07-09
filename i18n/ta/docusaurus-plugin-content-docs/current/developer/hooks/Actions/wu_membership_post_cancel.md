---
id: wu_membership_post_cancel
title: செயல்பாடு - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

உறுப்பினர் நிலை ரத்து செய்யப்பட்ட பிறகு இது செயல்படும்.

இது ரத்து செய்யும் மின்னஞ்சலை (cancellation email) தூண்டுகிறது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | உறுப்பினரின் ID. |
| $membership | `\WP_Ultimo\Models\Membership` | உறுப்பினர் பொருள் (Membership object). |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) என்ற கோப்பில், 2290 வரியில் வரையறுக்கப்பட்டுள்ளது.
