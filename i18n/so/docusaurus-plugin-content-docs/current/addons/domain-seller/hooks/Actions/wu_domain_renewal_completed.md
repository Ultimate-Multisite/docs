---
id: wu_domain_renewal_completed
title: Ficil - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Waxay dhacdaa ka dib marka domain si guul leh loo cusboonaysiiyo.

## Parameters {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Payment-ka kiciyay cusboonaysiinta. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata-ka cusboonaysiinta (domain_name, years, customer_id, iwm.). |
| $result | `array&lt;string,mixed&gt;` | Array-ga natiijada cayriin ee uu soo celiyay registrar-ka oo ay ku jirto expiry_date cusub. |

### Tan iyo {#since}

- 2.0.0
### Source {#source}

Waxaa lagu qeexay [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) safka 594
