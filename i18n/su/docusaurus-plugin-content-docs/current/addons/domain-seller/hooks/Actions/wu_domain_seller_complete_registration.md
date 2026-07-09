---
id: wu_domain_seller_complete_registration
title: Aksi - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Kajadian nalika pamayaran pindah ka status anu kedah memicu pandaptaran domain.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objék pamayaran. |
| $old_status | `string` | Status pamayaran saméméhna sateuacan transisi. |

### Ti saprak

- 2.0.0
### Sumber

Ditetepkeun dina [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) dina baris 266
