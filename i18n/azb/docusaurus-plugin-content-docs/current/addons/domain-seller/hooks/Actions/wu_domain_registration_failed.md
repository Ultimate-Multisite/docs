---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Bir alan adı kaydı denemesi başarısız olduğunda tetiklenir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Kaydı tetikleyen ödeme bilgisi. |
| $registration_data | `array&lt;string,mixed&gt;` | `status=failed` ve `error_message` gibi bilgileri içeren kayıt meta verisi. |
| $error_message | `string` | Kayıt kuruluşu tarafından sağlanan, okunabilir hata mesajı. |

### Versiyon

- 2.0.0
### Kaynak

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) dosyasının 1250. satırında tanımlanmıştır.
