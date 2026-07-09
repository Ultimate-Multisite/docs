---
id: wu_return_url
title: តម្រង - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ផ្លាស់ប្តូរ URL ត្រឡប់របស់ច្រកទូទាត់ ដែលប្រើបន្ទាប់ពីដំណើរការទូទាត់។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $return_url | `string` | URL សម្រាប់បញ្ជូនបន្តបន្ទាប់ពីដំណើរការ។ |
| $gateway | `self` | វត្ថុច្រកទូទាត់។ |
| $payment | `\WP_Ultimo\Models\Payment` | វត្ថុការទូទាត់ Ultimate Multisite។ |
| $cart | `\WP_Ultimo\Checkout\Cart` | ការបញ្ជាទិញក្នុងកន្ត្រក Ultimate Multisite បច្ចុប្បន្ន។ |

### ចាប់ពី

- 2.0.20
### ប្រភព

បានកំណត់ក្នុង [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) នៅបន្ទាត់ 683


## តម្លៃត្រឡប់
