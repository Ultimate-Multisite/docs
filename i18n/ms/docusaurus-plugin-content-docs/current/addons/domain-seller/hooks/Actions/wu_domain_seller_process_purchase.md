---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Dijalankan apabila pembelian domain sedang diproses selepas penyelesaian pembayaran (checkout).

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objek pembayaran. |
| $checkout_data | `array<string,mixed>` | Data checkout penuh daripada borang pendaftaran. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) pada baris 246
