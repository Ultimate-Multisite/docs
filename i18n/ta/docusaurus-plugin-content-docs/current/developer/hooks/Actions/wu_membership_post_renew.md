---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# செயல்பாடு: wu_membership_post_renew {#action-wumembershippostrenew}

உறுப்பினர் புதுப்பித்தலுக்குப் பிறகு இது தூண்டப்படுகிறது.

## அளவுருக்கள் {#parameters}

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $expiration | `string` | அமைக்கப்பட வேண்டிய புதிய காலாவதி தேதி. |
| $membership_id | `int` | உறுப்பினரின் ஐடி. |
| $membership | `\Membership` | உறுப்பினர் ஆப்ஜெக்ட். |

### எப்போது இருந்து {#since}

- 2.0
### மூலம் {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) என்ற கோப்பில் 2235 வரியில் வரையறுக்கப்பட்டுள்ளது.
