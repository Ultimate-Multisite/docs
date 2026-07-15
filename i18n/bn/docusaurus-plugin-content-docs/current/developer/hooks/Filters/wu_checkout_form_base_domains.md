---
id: wu_checkout_form_base_domains
title: ফিল্টার - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

শেয়ার করা checkout-form বেস ডোমেইন ফিল্টার করে, যাতে সেগুলো ম্যাপ করা ডোমেইন রেকর্ডে পরিণত না হয়।

কোনো ইন্টিগ্রেশন checkout form-এর **সাইট URL** ফিল্ডের জন্য অতিরিক্ত বেস ডোমেইন দিলে এই filter ব্যবহার করুন। এই filter থেকে ফেরত আসা ডোমেইনগুলো প্রতি-সাইট custom domain হিসেবে নয়, বরং শেয়ার করা registration host হিসেবে বিবেচিত হয়।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $domains | `array` | checkout form কনফিগারেশন থেকে সংগ্রহ করা শেয়ার করা বেস ডোমেইন। |

### সংস্করণ থেকে {#since}

- 2.13.0

### উৎস {#source}

`inc/functions/domain.php`-এ সংজ্ঞায়িত।


## রিটার্ন {#returns}

স্বাভাবিকীকৃত checkout-form বেস ডোমেইনের array।
