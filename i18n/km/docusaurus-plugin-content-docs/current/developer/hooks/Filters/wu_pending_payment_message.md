---
id: wu_pending_payment_message
title: តម្រង - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

អនុញ្ញាតឱ្យអ្នកប្រើផ្លាស់ប្តូរសារអំពីការទូទាត់ដែលកំពុងរង់ចាំ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | សារដែលត្រូវបង្ហាញ។ |
| $customer | `\WP_Ultimo\Models\Customer` | អតិថិជនបច្ចុប្បន្ន។ |
| $pending_payments | `array` | បញ្ជីដែលមានការទូទាត់កំពុងរង់ចាំ។ |

### ចាប់តាំងពី {#since}

- 2.0.19
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) នៅបន្ទាត់ 244
