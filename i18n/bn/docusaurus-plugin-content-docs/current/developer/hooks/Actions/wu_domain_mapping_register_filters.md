---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

কিছু প্লাগইন এমন URL সেভ করে যা ম্যাপ করা সক্রিয় হওয়ার আগে করা হয়েছিল, অথবা তারা ভিন্ন উপায়ে URL তৈরি করে যা উপরের ফিল্টারগুলোতে অন্তর্ভুক্ত নয়।

এই ধরনের ক্ষেত্রে, আমরা অতিরিক্ত ফিল্টার যোগ করতে চাই। এখানে পাস করা দ্বিতীয় প্যারামিটারটি হলো `mangle_url` কলব্যাক। আমরা সরাসরি এই ফিল্টারটি ব্যবহার না করার পরামর্শ দিই। এর পরিবর্তে, `Domain_Mapping::apply_mapping_to_url` মেথডটি ব্যবহার করুন।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $mangle_url | `callable` | ম্যাঙ্গল কলব্যাক ফাংশন। |
| $domain_mapper | `self` | এই অবজেক্টটি। |

### যেহেতু {#since}

- 2.0.0
### উৎস {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) এর লাইন ৫৩০ এ সংজ্ঞায়িত।
