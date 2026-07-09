---
id: wu_domain_seller_process_purchase
title: Радња - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Покреће се када се куповина домена обрађује након завршетка checkout-а.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Објекат плаћања. |
| $checkout_data | `array&lt;string,mixed&gt;` | Потпуни checkout подаци из обрасца за регистрацију. |

### Од

- 2.0.0
### Извор

Дефинисано у [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) у реду 246
