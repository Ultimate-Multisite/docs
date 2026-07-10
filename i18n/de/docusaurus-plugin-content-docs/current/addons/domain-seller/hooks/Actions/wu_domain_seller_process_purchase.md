---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Wird ausgelöst, wenn ein Domain-Kauf nach Abschluss des Checkouts verarbeitet wird.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Das Zahlungsobjekt. |
| $checkout_data | `array&lt;string,mixed&gt;` | Die vollständigen Checkout-Daten aus dem Anmeldeformular. |

### Seit {#since}

- 2.0.0
### Quelle {#source}

Definiert in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) in Zeile 246
