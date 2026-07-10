---
id: wu_pending_payment_message
title: फिल्टर - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

प्रयोगकर्तालाई विचाराधीन भुक्तानीहरूबारे सन्देश परिवर्तन गर्न दिनुहोस्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | छाप्ने सन्देश। |
| $customer | `\WP_Ultimo\Models\Customer` | हालको ग्राहक। |
| $pending_payments | `array` | विचाराधीन भुक्तानीहरूको सूची। |

### Since {#since}

- 2.0.19
### Source {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) मा लाइन 244 मा परिभाषित
