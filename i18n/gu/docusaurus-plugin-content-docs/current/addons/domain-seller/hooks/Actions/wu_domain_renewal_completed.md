---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

જ્યારે કોઈ ડોમેન સફળતાપૂર્વક રિન્યુ થાય છે, ત્યારે આ એક્શન ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | જે પેમેન્ટથી રિન્યુઅલ થયું તે પેમેન્ટ. |
| $renewal_data | `array&lt;string,mixed&gt;` | રિન્યુઅલ મેટાડેટા (domain_name, years, customer_id, વગેરે). |
| $result | `array&lt;string,mixed&gt;` | રજિસ્ટ્રાર દ્વારા પરત કરવામાં આવેલો કાચો પરિણામ એરે, જેમાં નવી expiry_date શામેલ છે. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) માં લાઇન 594 પર વ્યાખ્યાયિત છે
