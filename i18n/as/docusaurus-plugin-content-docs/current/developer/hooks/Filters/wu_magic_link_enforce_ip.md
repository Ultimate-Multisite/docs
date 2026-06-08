---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP ঠিকনা পৰীক্ষা কৰাটো বাধ্যতামূলক কৰিব নে নাই, সেয়া ফিল্টাৰ কৰে।

যদি ইয়াক 'false' সেট কৰা হয়, তেন্তে টোকেনক বিভিন্ন নেটৱৰ্কৰ পৰা কাম কৰিবলৈ অনুমতি দিয়ে। ই নিৰাপত্তা কমায়, কিন্তু ব্যৱহাৰযোগ্যতা বাঢ়ায় (উদাহৰণস্বৰূপে, মোবাইল ব্যৱহাৰকাৰীসকলে নেটৱৰ্ক সলনি কৰিলে)।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP ঠিকনা মিলকাক বাধ্যতামূলক কৰিব নে নাই। |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
