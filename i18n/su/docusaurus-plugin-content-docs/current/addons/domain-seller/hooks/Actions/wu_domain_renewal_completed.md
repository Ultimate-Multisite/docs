---
id: wu_domain_renewal_completed
title: Aksi - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Dipicu sanggeus hiji domain hasil diperpanjang.

## Parameter

| Ngaran | Type | Pedaran |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pamayaran anu micu perpanjangan. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata perpanjangan (domain_name, years, customer_id, jsb.). |
| $result | `array&lt;string,mixed&gt;` | Array hasil atah anu dipulangkeun ku registrar kaasup expiry_date anyar. |

### Ti saprak

- 2.0.0
### Sumber

Ditetepkeun dina [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) dina garis 594
