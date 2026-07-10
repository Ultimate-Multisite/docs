---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Bir alan adı başarıyla kaydedildikten sonra tetiklenir.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Kaydı tetikleyen ödeme. |
| $registration_data | `array&lt;string,mixed&gt;` | Kayıt meta verileri (domain_name, provider_id, years, expiry_date vb.). |
| $result | `array&lt;string,mixed&gt;` | Kayıt sağlayıcısı tarafından döndürülen ham sonuç dizisi. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) at line 1204
