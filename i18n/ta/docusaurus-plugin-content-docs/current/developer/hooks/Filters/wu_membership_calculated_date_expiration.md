---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

கணக்கிடப்பட்ட காலாவதி தேதியை (calculated expiration date) இது வடிகட்டுகிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $expiration | `string` | MySQL வடிவத்தில் கணக்கிடப்பட்ட காலாவதி தேதி. |
| $membership_id | `int` | உறுப்பினர் ID. |
| $membership | `\WP_Ultimo\Models\Membership` | உறுப்பினர் பொருள் (Membership object). |

### Since {#since}

- 2.0
### மூலம் (Source) {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) என்ற கோப்பில், 1309 வரியில் வரையறுக்கப்பட்டுள்ளது.
