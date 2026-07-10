---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Domen uğurla yeniləndikdən sonra işə düşür.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Yeniləməni tetikləyən ödəniş. |
| $renewal_data | `array&lt;string,mixed&gt;` | Yeniləmə meta məlumatları (domain_name, years, customer_id və s.). |
| $result | `array&lt;string,mixed&gt;` | Qeydiyyatçı tərəfindən qaytarılan, yeni `expiry_date` daxil olan xam nəticə massivi. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) faylının 594-cü sətirində təyin edilmişdir.
