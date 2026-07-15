---
id: wu_domain_seller_process_purchase
title: Eylem - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Eylem: wu_domain_seller_process_purchase

Alan adı satın alımı, ödeme tamamlandıktan sonra işlenirken tetiklenir.

## Parametreler {#parameters}

| Adı | Türü | Açıklama |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ödeme nesnesi. |
| $checkout_data | `array<string,mixed>` | Kayıt formundan gelen tüm ödeme verileri. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[inc/class-domain-seller.php](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) dosyasının 246. satırında tanımlanmıştır.
