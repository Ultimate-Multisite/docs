---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

ম্যাপিং ব্যৱহাৰ কৰা উচিত নে নাই, সেয়া নিৰ্ণয় কৰে।

সাধাৰণতে, আপুনি কেৱল সক্ৰিয় (active) ম্যাপিং ব্যৱহাৰ কৰিবলৈ অনুমতি দিব বিচাৰিব। কিন্তু, যদি আপুনি অধিক উন্নত লজিক ব্যৱহাৰ কৰিব বিচাৰে, অথবা নিষ্ক্ৰিয় (non-active) ডোমেইনক ম্যাপিং কৰিবলৈও অনুমতি দিব বিচাৰে, তেন্তে ইয়াত ফিল্টাৰ কৰক।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | ম্যাপিং সক্ৰিয় হ'ব নে? |
| $mapping | `\Domain` | আমি পৰীক্ষা কৰা ম্যাপিং |
| $domain | `string` | |

### Source {#source}

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) at line 391
