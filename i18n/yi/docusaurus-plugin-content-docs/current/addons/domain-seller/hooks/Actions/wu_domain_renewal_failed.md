---
id: wu_domain_renewal_failed
title: אַקציע - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ווערט אויסגעפֿירט נאָך דעם וואָס אַ פּרוּוו צו באַנײַען אַ דאָמיין פֿעלט אויס.

## פּאַראַמעטערס {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | די צאָלונג וואָס האָט ausgelייזט די באַנײַונג. |
| $renewal_data | `array&lt;string,mixed&gt;` | באַנײַונג־מעטאַדאַטן (domain_name, years, אאַז״ו). |
| $error_message | `string` | מענטש־לייענבאַרע טעות־מעלדונג פֿון דעם רעגיסטראַטאָר. |

### זינט {#since}

- 2.0.0
### מקור {#source}

דעפֿינירט אין [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ביי שורה 630
