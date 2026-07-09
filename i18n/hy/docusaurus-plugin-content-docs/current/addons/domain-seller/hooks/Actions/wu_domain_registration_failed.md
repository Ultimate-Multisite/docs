---
id: wu_domain_registration_failed
title: Գործողություն - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Գործողություն՝ wu_domain_registration_failed {#action-wudomainregistrationfailed}

Գործարկվում է, երբ դոմենի գրանցման փորձը ձախողվում է։

## Պարամետրեր {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Վճարումը, որը գործարկել է գրանցումը։ |
| $registration_data | `array&lt;string,mixed&gt;` | Գրանցման մետատվյալներ՝ ներառյալ status=failed և error_message։ |
| $error_message | `string` | Գրանցողի կողմից վերադարձված՝ մարդու համար ընթեռնելի սխալի հաղորդագրություն։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250)-ում՝ 1250-րդ տողում։
