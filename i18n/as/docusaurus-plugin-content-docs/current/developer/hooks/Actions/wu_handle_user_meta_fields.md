---
id: wu_handle_user_meta_fields
title: কাৰ্য্য - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

প্লাগইন ডেভেলপাৰসকলক যদি তেওঁলোকক প্ৰয়োজন হয়, তেন্তে ইউজাৰ মেটা ডেটা বিভিন্ন ধৰণে সেভ কৰিবলৈ এই ফাংচনটোৱে অনুমতি দিয়ে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | মেটা ফিল্ডসমূহৰ তালিকা, যি key => value ধৰণৰ গঠনত থাকে। |
| $user | `\WP_User` | WordPress ইউজাৰ অবজেক্ট। |
| $customer | `\Customer` | Ultimate Multisite কাস্টমাৰ অবজেক্ট। |
| $checkout | `\Checkout` | চেকাউট ক্লাছ। |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
