---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Körs när ett domänköp bearbetas efter att kassan är klar.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalningsobjektet. |
| $checkout_data | `array&lt;string,mixed&gt;` | Fullständig kasseköpsdata från registreringsformuläret. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) på rad 246
