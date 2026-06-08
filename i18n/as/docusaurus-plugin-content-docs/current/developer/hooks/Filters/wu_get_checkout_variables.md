---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

প্লাগইন ডেভেলপাৰসকলক এটা চেকআউট পৃষ্ঠাৰ আগতে নিৰ্ধাৰিত (pre-set) মানসমূহ ফিল্টৰ কৰিবলৈ অনুমতি দিয়ে।

সতর্ক হ'ব, যদি আপুনি কোনো key হেৰুওৱা কৰে, তেন্তে ফ্ৰণ্ট-এণ্ডত চেকআউটটো সম্পূৰ্ণভাৱে ভাঙি যাব পাৰে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | স্থানীয়কৰণ কৰা চলক (Localized variables)। |
| $checkout | `\Checkout` | চেকআউট ক্লাছ। |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns
নতুন চলকৰ array।
