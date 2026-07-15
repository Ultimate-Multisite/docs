---
id: wu_domain_registration_completed
title: אַקציע - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ווערט אויסגעפֿירט נאָך דעם ווי אַ דאָמיין איז הצלחהדיק רעגיסטרירט געוואָרן.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | די צאָלונג וואָס האָט ausgelöst די רעגיסטראַציע. |
| $registration_data | `array&lt;string,mixed&gt;` | רעגיסטראַציע־מעטאַדאַטן (domain_name, provider_id, years, expiry_date, אאַז״וו). |
| $result | `array&lt;string,mixed&gt;` | רויע רעזולטאַט־מאַסיוו וואָס דער רעגיסטראַטאָר האָט צוריקגעגעבן. |

### זינט {#since}

- 2.0.0
### מקור {#source}

דעפֿינירט אין [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) אין שורה 1204
