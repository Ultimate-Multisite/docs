---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

உறுப்பினர் புதுப்பித்தல் செயல்பாடு தொடங்குவதற்கு முன் இது செயல்படும்.

## அளவுருக்கள்

| Name | Type | விளக்கம் |
|------|------|-------------|
| $expiration | `string` | அமைக்கப்பட வேண்டிய புதிய காலாவதி தேதி. |
| $membership_id | `int` | உறுப்பினரின் ID. |
| $membership | `\Membership` | உறுப்பினர் ஆப்ஜெக்ட். |

### எப்போது இருந்து

- 2.0
### மூலம்

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) என்ற இடத்தில், 2204 வரியில் வரையறுக்கப்பட்டுள்ளது.
