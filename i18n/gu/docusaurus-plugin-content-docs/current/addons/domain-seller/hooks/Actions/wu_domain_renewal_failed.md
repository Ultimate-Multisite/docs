---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

જ્યારે ડોમેન રિન્યુઅલનો પ્રયાસ નિષ્ફળ જાય ત્યારે આ એક્શન ચાલતું છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | જે પેમેન્ટને કારણે રિન્યુઅલ થયું હતું. |
| $renewal_data | `array&lt;string,mixed&gt;` | રિન્યુઅલ મેટાડેટા (domain_name, years, વગેરે). |
| $error_message | `string` | રજિસ્ટ્રાર તરફથી વાંચી શકાય એવો ભૂલ સંદેશ. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) at line 630
