---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

ডোমেইন রিনিউ করার চেষ্টা ব্যর্থ হলে এটি চালু হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যে পেমেন্টটি রিনিউ করার কারণ হয়েছিল। |
| $renewal_data | `array&lt;string,mixed&gt;` | রিনিউ করার মেটাডেটা (যেমন: domain_name, years ইত্যাদি)। |
| $error_message | `string` | রেজিস্ট্রার থেকে পাওয়া মানুষের পড়ার উপযোগী ত্রুটি বার্তা। |

### সংস্করণ {#since}

- 2.0.0
### উৎস {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) এর লাইন ৬৩০ এ সংজ্ঞায়িত।
