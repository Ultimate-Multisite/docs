---
id: wu_domain_renewal_completed
title: אַקציע - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# אַקציע: wu_domain_renewal_completed

ווערט אויסגעלאָזט נאָך דעם ווי אַ דאָמיין איז הצלחהדיק באנייט געוואָרן.

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | די צאָלונג וואָס האָט אויסגעלאָזט די באַנײַונג. |
| $renewal_data | `array&lt;string,mixed&gt;` | באַנײַונג־מעטאַדאַטן (domain_name, years, customer_id, אאַז״וו). |
| $result | `array&lt;string,mixed&gt;` | רויע רעזולטאַט־array צוריקגעגעבן דורך דעם רעגיסטראַטאָר, אַרײַנגערעכנט די נײַע expiry_date. |

### זינט

- 2.0.0
### מקור

דעפֿינירט אין [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) אויף שורה 594
