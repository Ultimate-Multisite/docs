---
id: wu_domain_registration_failed
title: אַקציע - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

ווערט אויסגעפֿירט נאָך דעם וואָס אַ פּרוּוו צו רעגיסטרירן אַ דאָמיין דורכפֿאַלט.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | די צאָלונג וואָס האָט אויסגעלייזט די רעגיסטראַציע. |
| $registration_data | `array&lt;string,mixed&gt;` | רעגיסטראַציע־מעטאַדאַטן אַרײַנגערעכנט status=failed און error_message. |
| $error_message | `string` | מענטשלעך־לייענבאַרע טעות־מעלדונג פֿון דעם רעגיסטראַטאָר. |

### זינט {#since}

- 2.0.0
### מקור {#source}

דעפֿינירט אין [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) בײַ שורה 1250
