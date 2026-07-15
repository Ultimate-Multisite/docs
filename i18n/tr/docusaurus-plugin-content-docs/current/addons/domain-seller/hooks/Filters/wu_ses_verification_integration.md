---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filtre: diğer kodların SES entegrasyon nesnesini sağlamasına izin verir.

Döndürülen nesne şunları uygulamalıdır: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $integration | `object\|null` | SES entegrasyon nesnesi veya null. |

### Versiyon {#since}

- 2.2.0
### Kaynak {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) dosyasının 731. satırında tanımlanmıştır.
