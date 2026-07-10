---
id: wu_pending_payment_message
title: Saringan - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Saringan: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Ngidinan pamaké pikeun ngarobah pesen ngeunaan pamayaran nu keur ngantosan.

## Paraméter {#parameters}

| Ngaran | Tipe | Déskripsi |
|------|------|-------------|
| $message | `string` | Pesen pikeun dicitak. |
| $customer | `\WP_Ultimo\Models\Customer` | Palanggan ayeuna. |
| $pending_payments | `array` | Daptar jeung pamayaran nu keur ngantosan. |

### Ti saprak {#since}

- 2.0.19
### Sumber {#source}

Ditetepkeun dina [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) dina baris 244
