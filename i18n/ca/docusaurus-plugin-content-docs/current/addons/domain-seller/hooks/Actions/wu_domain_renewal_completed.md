---
id: wu_domain_renewal_completed
title: Acció - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

S'executa després que un domini hagi estat renovat amb èxit.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pagament que va desencallar la renovació. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadades de renovació (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | L'array de resultats brut returnat pel registre incloent la nova expiry_date. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definid a [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) a la línia 594
