---
id: wu_domain_renewal_completed
title: عمل - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# عمل: wu_domain_renewal_completed

ڊومين ڪاميابيءَ سان نئين ٿيڻ کان پوءِ هلندو آهي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | اها ادائيگي جنهن renewal کي شروع ڪيو. |
| $renewal_data | `array&lt;string,mixed&gt;` | renewal metadata (domain_name, years, customer_id، وغيره). |
| $result | `array&lt;string,mixed&gt;` | registrar طرفان واپس ڪيل خام result array، جنهن ۾ نئين expiry_date شامل آهي. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ۾ لائن 594 تي بيان ٿيل آهي
