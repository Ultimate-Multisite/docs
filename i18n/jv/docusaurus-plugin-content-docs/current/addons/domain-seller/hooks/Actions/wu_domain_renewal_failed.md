---
id: wu_domain_renewal_failed
title: Aksi - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Tindakan: wu_domain_renewal_failed

Kedadeyan sawisé upaya nganyari domain gagal.

## Paramèter

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran sing micu panganyaran. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata panganyaran (domain_name, taun, lsp.). |
| $error_message | `string` | Pesen kasalahan sing bisa diwaca manungsa saka registrar. |

### Wiwit

- 2.0.0
### Sumber

Ditetepaké ing [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ing larik 630
