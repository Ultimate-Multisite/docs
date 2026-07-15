---
id: wu_domain_registration_completed
title: عمل - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# عمل: wu_domain_registration_completed

وروسته له دې چلېږي چې یو ډومېن په بریالیتوب سره ثبت شي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | هغه تادیه چې ثبت یې پیل کړ. |
| $registration_data | `array&lt;string,mixed&gt;` | د ثبت مېټاډېټا (domain_name, provider_id, years, expiry_date، او نور). |
| $result | `array&lt;string,mixed&gt;` | خامه پایله array چې د ثبتوونکي له خوا راستنه شوې. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) کې په ۱۲۰۴ کرښه کې تعریف شوی
