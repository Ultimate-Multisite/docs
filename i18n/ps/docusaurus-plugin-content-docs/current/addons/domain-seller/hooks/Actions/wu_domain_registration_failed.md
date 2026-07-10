---
id: wu_domain_registration_failed
title: عمل - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# عمل: wu_domain_registration_failed {#action-wudomainregistrationfailed}

هغه مهال چلېږي کله چې د ډومېن ثبتولو هڅه ناکامه شي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | هغه تادیه چې ثبتول یې پیل کړل. |
| $registration_data | `array&lt;string,mixed&gt;` | د ثبتولو مېټاډاټا چې status=failed او error_message پکې شامل دي. |
| $error_message | `string` | د ثبتوونکي له خوا د انسان لپاره د لوستلو وړ د تېروتنې پیغام. |

### له نسخې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) کې په ۱۲۵۰ کرښه تعریف شوی.
