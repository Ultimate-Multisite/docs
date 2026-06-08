---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Domen yeniləmə cəhdi uğursuz olduqdan sonra işə düşür.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Yeniləməni tetikləyən ödəniş. |
| $renewal_data | `array<string,mixed>` | Yeniləmə məlumatları (domain_name, years, və s.). |
| $error_message | `string` | Qeydiyyatçıdan gələn, insanın oxuya biləcəyi xəta mesajı. |

### Nə vaxtdan

- 2.0.0
### Mənbə

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) faylında 630-ci sətirdə təyin edilmişdir.
