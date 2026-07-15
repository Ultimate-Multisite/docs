---
id: wu_domain_renewal_completed
title: عمل - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

وروسته له دې فعالېږي چې یو ډومېن په بریالیتوب سره نوی شوی وي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | هغه پیسې ورکول چې نوی کول یې پیل کړل. |
| $renewal_data | `array&lt;string,mixed&gt;` | د نوي کولو مېټاډېټا (domain_name، years، customer_id، او نور). |
| $result | `array&lt;string,mixed&gt;` | د رجسټرار له خوا راستون شوی خامې پایلې array، چې نوې expiry_date پکې شامله ده. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) کې په 594 کرښه تعریف شوی.
