---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

কিছুমান প্লাগইন এনেদৰে ইউৰেল সেভ কৰিব পাৰে যে ম্যাপিং (mapping) актив হোৱাৰ আগতে কৰা হৈছিল, অথবা তেওঁলোকে ইউৰেল ভিন্ন উপায়েৰে নিৰ্মাণ কৰিব পাৰে, যিটো ওপৰত দিয়া ফিল্টাৰসমূহত অন্তৰ্ভুক্ত নহয়।

এই ধৰণৰ ক্ষেত্ৰত, আমি আৰু কিছুমান ফিল্টাৰ যোগ কৰিব বিচাৰোঁ। দ্বিতীয় প‍্যারামিটার হিচাপে `mangle_url` কলবেকটো দিয়া হয়। আমি এই ফিল্টাৰটো পোনপটীয়াকৈ ব্যৱহাৰ কৰিবলৈ পৰামৰ্শ নিদিওঁ। বৰঞ্চ, `Domain_Mapping::apply_mapping_to_url` পদ্ধতিটো ব্যৱহাৰ কৰক।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | ম্যাংল কৰিবলগীয়া কলবেক ফাংশন। |
| $domain_mapper | `self` | এই বস্তুটো। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ফাইলৰ ৫৩০ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে
