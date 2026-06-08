---
id: wu_get_checkout_variables
title: ফিল্টার - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

প্লাগইন ডেভেলপারদের একটি চেকআউট পেজের পূর্ব-নির্ধারিত (pre-set) ভেরিয়েবলগুলো ফিল্টার করার সুযোগ দেয়।

সাবধান! যদি কোনো কী (key) অনুপস্থিত থাকে, তবে ফ্রন্ট-এন্ডে চেকআউট সম্পূর্ণভাবে ভেঙে যেতে পারে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | স্থানীয়কৃত ভেরিয়েবল। |
| $checkout | `\Checkout` | চেকআউট ক্লাস। |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) এর লাইন ১৯৭০ এ সংজ্ঞায়িত।

## Returns
নতুন ভেরিয়েবল অ্যারে।
