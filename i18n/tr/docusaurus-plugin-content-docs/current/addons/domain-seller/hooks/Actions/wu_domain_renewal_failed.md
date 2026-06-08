---
id: wu_domain_renewal_failed
title: Eylem - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Aksiyon: wu_domain_renewal_failed

Bir alan adı yenileme girişimi başarısız olduktan sonra tetiklenir.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Yenilemeyi tetikleyen ödeme. |
| $renewal_data | `array&lt;string,mixed&gt;` | Yenileme meta verileri (domain_name, years vb.). |
| $error_message | `string` | Kayıt kuruluşu tarafından sağlanan, okunabilir hata mesajı. |

### Sürüm

- 2.0.0
### Kaynak

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) dosyasında 630. satırda tanımlanmıştır.
