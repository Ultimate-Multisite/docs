---
id: wu_domain_registration_completed
title: Ketso - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Ketso: wu_domain_registration_completed

E sebetsa ka mor'a hore domain e ngolisoe ka katleho.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Tefo e bakileng ngodiso. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ya ngodiso (domain_name, provider_id, years, expiry_date, jj.). |
| $result | `array&lt;string,mixed&gt;` | Array ya sephetho se tala se kgutlisitsweng ke registrar. |

### Ho tloha {#since}

- 2.0.0
### Mohloli {#source}

E hlalositswe ho [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) moleng wa 1204
