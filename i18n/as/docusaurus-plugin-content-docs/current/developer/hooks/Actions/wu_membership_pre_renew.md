---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

মেম্বৰশ্বিপ পুনৰীক্ষণ (renewal) হ'বলৈ আগতে এইটো ট্ৰিগাৰ হয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | নতুন কাৰ্যকালৰ তাৰিখ (New expiration date) যিটো সেট কৰিব লাগিব। |
| $membership_id | `int` | মেম্বৰশ্বিপটোৰ ID। |
| $membership | `\Membership` | মেম্বৰশ্বিপ অবজেক্ট। |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) ফাইলটোৰ লাইন ২২০৪ত সংজ্ঞায়িত কৰা হৈছে।
