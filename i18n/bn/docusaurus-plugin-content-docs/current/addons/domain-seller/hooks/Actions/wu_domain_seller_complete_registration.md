---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

এটি তখন ট্রিগার হয় যখন একটি পেমেন্ট এমন কোনো স্ট্যাটাসে পরিবর্তিত হয় যা ডোমেইন রেজিস্ট্রেশন শুরু করার জন্য ট্রিগার করে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | পেমেন্ট অবজেক্টটি। |
| $old_status | `string` | পরিবর্তনের আগের পেমেন্ট স্ট্যাটাস। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266
