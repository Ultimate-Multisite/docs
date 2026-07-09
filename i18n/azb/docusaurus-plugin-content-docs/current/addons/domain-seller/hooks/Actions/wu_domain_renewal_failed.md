---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Bu, bir domain yenileme denemesi başarısız olduğunda tetiklenir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Yenilemeyi başlatan ödeme. |
| $renewal_data | `array<string,mixed>` | Yenileme meta verileri (domain_name, years vb.). |
| $error_message | `string` | Kayıt firmasından gelen, insan tarafından okunabilir hata mesajı. |

### Kullanılmaya Başladığı Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) dosyasının 630. satırında tanımlanmıştır.
