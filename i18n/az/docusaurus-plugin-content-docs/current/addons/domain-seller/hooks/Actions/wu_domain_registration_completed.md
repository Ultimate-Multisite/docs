---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Bir domen uğurla qeydiyyatdan keçdikdən sonra işə düşür.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Qeydiyyatı tetikləyən ödəniş. |
| $registration_data | `array<string,mixed>` | Qeydiyyat meta məlumatları (domain_name, provider_id, years, expiry_date və s.). |
| $result | `array<string,mixed>` | Qeydiyyatçı tərəfindən qaytarılan xam nəticə massivi. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) faylının 1204-cü sətirində təyin edilmişdir.
