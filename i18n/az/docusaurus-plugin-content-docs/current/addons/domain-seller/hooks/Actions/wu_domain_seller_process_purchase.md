---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Domen alımı, ödəniş prosesi tamamlandıqdan sonra emal edilərkən işə düşür.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ödəniş obyektidir. |
| $checkout_data | `array<string,mixed>` | Qeydiyyat forması tərəfindən alınan tam checkout məlumatları. |

### Since

- 2.0.0
### Source

246-cı sətirdə [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) faylında təyin edilmişdir.
