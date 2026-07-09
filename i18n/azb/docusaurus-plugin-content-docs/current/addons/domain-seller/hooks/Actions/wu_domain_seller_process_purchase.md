---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Bu, bir alan adı satın alımı ödeme tamamlandıktan sonra işlenirken tetiklenir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ödeme nesnesi. |
| $checkout_data | `array<string,mixed>` | Kayıt formundan gelen tüm checkout verileri. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) dosyasında 246. satırda tanımlanmıştır.
