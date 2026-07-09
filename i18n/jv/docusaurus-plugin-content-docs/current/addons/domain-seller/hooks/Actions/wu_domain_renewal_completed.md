---
id: wu_domain_renewal_completed
title: Tindakan - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aksi: wu_domain_renewal_completed

Mlaku sawisé domain kasil dianyari.

## Parameter

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran sing micu panganyaran. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata panganyaran (domain_name, years, customer_id, lsp.). |
| $result | `array&lt;string,mixed&gt;` | Larik asil mentah sing dibalekaké déning registrar kalebu expiry_date anyar. |

### Wiwit

- 2.0.0
### Sumber

Ditetepaké ing [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ing baris 594
