---
id: wu_domain_registration_failed
title: Gníomh - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Spreagtar é tar éis d’iarracht clárúcháin fearainn teip.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | An íocaíocht a spreag an clárú. |
| $registration_data | `array&lt;string,mixed&gt;` | Meiteashonraí clárúcháin lena n-áirítear status=failed agus error_message. |
| $error_message | `string` | Teachtaireacht earráide inléite ag duine ón gcláraitheoir. |

### Ó {#since}

- 2.0.0
### Foinse {#source}

Sainmhínithe in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ag líne 1250
