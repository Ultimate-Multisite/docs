---
id: wu_membership_post_renew
title: কাৰ্য - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

সদস্যপদ পুনৰীক্ষণ (membership renewal) হোৱাৰ পিছত এইটো ট্ৰিগাৰ হয়।

## পৰামাপৰী (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | নতুন সমাপ্তি তাৰিখ যিটো সেট কৰিব লাগিব। |
| $membership_id | `int` | সদস্যপদটোৰ ID। |
| $membership | `\Membership` | সদস্যপদৰ বস্তু (Membership object)। |

### কিমানৰ পৰা (Since)

- 2.0
### উৎস (Source)

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) ফাইলৰ ২২৩৫ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।
