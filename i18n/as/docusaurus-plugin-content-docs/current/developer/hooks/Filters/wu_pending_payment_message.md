---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

ব্যৱহাৰকাৰীক বাকী থকা भुঙীৰ বিষয়েৰ বাৰ্তা (message) সলনি কৰিবলৈ অনুমতি দিয়ে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | প্ৰিন্ট কৰিবলগীয়া বাৰ্তা। |
| $customer | `\WP_Ultimo\Models\Customer` | বৰ্তমানৰ গ্ৰাহক। |
| $pending_payments | `array` | বাকী থকা भुঙীৰ তালিকা। |

### Since {#since}

- 2.0.19
### Source {#source}

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244
