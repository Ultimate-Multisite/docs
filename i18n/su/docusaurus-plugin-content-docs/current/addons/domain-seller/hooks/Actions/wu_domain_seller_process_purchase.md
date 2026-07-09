---
id: wu_domain_seller_process_purchase
title: Aksi - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Dijalankeun nalika pameseran domain keur diprosés sanggeus réngsé checkout.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objék pamayaran. |
| $checkout_data | `array&lt;string,mixed&gt;` | Data checkout lengkep tina formulir daptar. |

### Ti saprak

- 2.0.0
### Sumber

Ditetepkeun dina [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) dina garis 246
