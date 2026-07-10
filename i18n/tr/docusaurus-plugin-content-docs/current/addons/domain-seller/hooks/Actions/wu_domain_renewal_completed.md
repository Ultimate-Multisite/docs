---
id: wu_domain_renewal_completed
title: Eylem - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Alan adı başarıyla yenilendikten sonra tetiklenir.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Yenilemeyi tetikleyen ödeme. |
| $renewal_data | `array<string,mixed>` | Yenileme meta verileri (domain_name, years, customer_id vb.). |
| $result | `array<string,mixed>` | Yeni `expiry_date` dahil olmak üzere kayıt kuruluşu tarafından döndürülen ham sonuç dizisi. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) dosyasının 594. satırında tanımlanmıştır.
