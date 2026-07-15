---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

প্লাগইন ডেভেলপাররা যদি প্রয়োজন মনে করেন, তবে তারা বিভিন্ন উপায়ে ব্যবহারকারীর মেটা ডেটা সংরক্ষণ করতে পারবেন।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | মেটা ফিল্ডগুলির তালিকা, যা key => value কাঠামোতে সাজানো। |
| $user | `\WP_User` | ওয়ার্ডপ্রেস ব্যবহারকারী অবজেক্ট। |
| $customer | `\Customer` | আল্টিমেট মাল্টিসাইট কাস্টমার অবজেক্ট। |
| $checkout | `\Checkout` | চেকআউট ক্লাস। |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
