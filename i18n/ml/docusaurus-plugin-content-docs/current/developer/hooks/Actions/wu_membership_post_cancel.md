---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

അംഗത്വം റദ്ദാക്കിയ ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു (Triggers).

ഇത് റദ്ദാക്കൽ ഇമെയിൽ അയയ്ക്കാൻ കാരണമാകും.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | അംഗത്വത്തിന്റെ ഐഡി (ID). |
| $membership | `\WP_Ultimo\Models\Membership` | അംഗത്വ ഒബ്ജക്റ്റ് (Membership object). |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) എന്ന ഫയലിലെ 2290-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
