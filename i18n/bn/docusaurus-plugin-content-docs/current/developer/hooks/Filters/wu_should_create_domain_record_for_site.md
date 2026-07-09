---
id: wu_should_create_domain_record_for_site
title: ফিল্টার - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# ফিল্টার: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

নতুন তৈরি করা সাইটের জন্য Ultimate Multisite একটি ডোমেইন রেকর্ড তৈরি করবে কি না, তা ফিল্টার করে।

যেসব সাইট শেয়ার করা চেকআউট-ফর্মের বেস ডোমেইন, অভ্যন্তরীণ হোস্ট, বা অন্য কোনো ইন্টিগ্রেশন আলাদাভাবে পরিচালনা করবে এমন ডোমেইন ব্যবহার করে, সেগুলোর জন্য স্বয়ংক্রিয় ডোমেইন-রেকর্ড তৈরি বন্ধ বা পিছিয়ে দিতে এই ফিল্টার ব্যবহার করুন।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $create | `bool` | ডোমেইন রেকর্ডটি তৈরি করা হবে কি না। |
| $site | `WP_Site` | নতুন তৈরি করা সাইট অবজেক্ট। |

### যেহেতু {#since}

- 2.13.0

### উৎস {#source}

`inc/functions/domain.php`-এ সংজ্ঞায়িত।


## রিটার্ন {#returns}

ডোমেইন রেকর্ড তৈরি করা হবে কি না তা নির্দেশকারী Boolean।
