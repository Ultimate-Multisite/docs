---
id: wu_domain_registration_failed
title: Hərəkət - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Domen qeydiyyat cəhdi uğursuz olarsa işə düşür.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Qeydiyyatı tetikləyən ödəniş. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed və error_message daxil olmaqla qeydiyyat meta məlumatları. |
| $error_message | `string` | Qeydiyyat agentindən gələn, istifadəçi tərəfindən oxuna bilən xəta mesajı. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) faylının 1250-ci sətirində təyin edilmişdir.
