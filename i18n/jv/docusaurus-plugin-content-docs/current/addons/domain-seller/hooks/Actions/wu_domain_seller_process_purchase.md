---
id: wu_domain_seller_process_purchase
title: Tindakan - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Mlaku nalika tuku domain lagi diproses sawisé rampung checkout.

## Paramèter

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objek pembayaran. |
| $checkout_data | `array&lt;string,mixed&gt;` | Data checkout lengkap saka formulir pendaftaran. |

### Wiwit

- 2.0.0
### Sumber

Ditetepaké ing [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ing baris 246
