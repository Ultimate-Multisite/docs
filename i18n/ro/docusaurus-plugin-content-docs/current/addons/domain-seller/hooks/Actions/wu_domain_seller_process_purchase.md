---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Se declanșează când se procesează o achiziție de domeniu după finalizarea checkout-ului.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Obiectul de plată. |
| $checkout_data | `array&lt;string,mixed&gt;` | Datele complete de checkout din formularul de înscriere. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) la linia 246
