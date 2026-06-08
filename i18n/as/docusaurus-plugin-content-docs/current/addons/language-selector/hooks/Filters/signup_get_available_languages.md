---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ফ্ৰণ্ট-এণ্ডৰ সাইটত নাম লেখাওঁতে উপলব্ধ ভাষাৰ তালিকা ফিল্টাৰ কৰে।

এই হুকটোত এটা খালি তালিকা (empty array) পঠিয়াবলৈ গেলে, নাম লেখাওঁৰ ফৰ্মত সেই ছেটিংটোৰ আউটপুট বন্ধ হৈ যাব, আৰু সাইটটো সৃষ্টি কৰোঁতে ডিফল্ট ভাষা ব্যৱহাৰ কৰা হ'ব। যি ভাষা ইতিমধ্যে ইনস্টল হোৱা নাই, সেইবোৰ বাদ দিয়া হ'ব।

## পৰামিটারসমূহ

| নাম | ধৰণ | বৰ্ণনা |
|------|------|-------------|
| $available_languages | `array` | উপলব্ধ ভাষা। |

### আৰম্ভ হোৱা

- 4.4.0
### উৎস

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
