---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

সদস্যপদটো বাতিল হোৱাৰ পিছত ট্ৰিগাৰ কৰে।

এইটোৱে বাতিল কৰাৰ ইমেইলটো ট্ৰিগাৰ কৰে।

## প্যারামিটাৰসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | সদস্যপদটোৰ ID। |
| $membership | `\WP_Ultimo\Models\Membership` | সদস্যপদৰ বস্তু (Membership object)। |

### ক'ৰ পৰা {#since}

- 2.0
### উৎস {#source}

[inc/models/class-membership.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) ত ২২৩০ নং লাইনাৰত সংজ্ঞায়িত কৰা হৈছে।
