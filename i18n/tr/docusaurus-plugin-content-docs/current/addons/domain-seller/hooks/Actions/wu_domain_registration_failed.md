---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Bir alan adı (domain) kayıt girişimi başarısız olduktan sonra tetiklenir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Kayıt işlemini başlatan ödeme. |
| $registration_data | `array<string,mixed>` | Durumun başarısız olduğu ve hata mesajını içeren kayıt meta verileri. |
| $error_message | `string` | Kayıtçıdan gelen, okunabilir hata mesajı. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) at line 1250
