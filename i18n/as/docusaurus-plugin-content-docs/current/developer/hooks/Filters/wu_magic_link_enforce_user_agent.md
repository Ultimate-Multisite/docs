---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

ইউজাৰ এজেণ্ট (user agent) প্ৰমাণীকৰণ বলবৎ কৰিব নে নাই, তাৰ বাবে ফিল্টাৰ।

যদি ইয়াক false কৰা হয়, তেন্তে টোকেনক বিভিন্ন ব্ৰাউজাৰ বা ডিভাইচত কাম কৰিবলৈ অনুমতি দিয়া হয়। ই নিৰাপত্তা (security) কমায়, কিন্তু ব্যৱহাৰযোগ্যতা (usability) বাঢ়ায়।

## পৰিটাৰ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | ইউজাৰ এজেণ্ট মিল (matching) বলবৎ কৰিব নে নাই। |

### তাৰ পৰা (Since) {#since}

- 2.0.0
### উৎস (Source) {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
