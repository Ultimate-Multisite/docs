---
id: wu_domain_seller_process_purchase
title: Handling - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Utløses når et domenekjøp behandles etter at kassen er fullført.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingsobjektet. |
| $checkout_data | `array&lt;string,mixed&gt;` | Alle data fra kassen/registreringsskjemaet. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) på linje 246
