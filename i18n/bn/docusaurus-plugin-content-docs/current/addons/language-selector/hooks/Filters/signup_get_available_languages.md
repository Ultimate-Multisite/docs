---
id: signup_get_available_languages
title: ফিল্টার - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ফ্রন্ট-এন্ড সাইট সাইনআপের জন্য উপলব্ধ ভাষাগুলোর তালিকা ফিল্টার করে।

এই হুকে একটি খালি অ্যারে পাস করলে সাইনআপ ফর্মে সেটিংয়ের আউটপুট বন্ধ হয়ে যাবে, এবং সাইট তৈরি করার সময় ডিফল্ট ভাষা ব্যবহার করা হবে। যে ভাষাগুলো ইতিমধ্যেই ইনস্টল করা নেই, সেগুলো বাদ দেওয়া হবে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | উপলব্ধ ভাষাগুলো। |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
