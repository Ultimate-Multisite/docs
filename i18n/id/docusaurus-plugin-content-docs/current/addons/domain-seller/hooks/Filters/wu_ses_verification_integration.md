---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: memungkinkan kode lain untuk menyediakan objek integrasi SES.

Objek yang dikembalikan harus mengimplementasikan:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $integration | `object\|null` | Objek integrasi SES, atau null. |

### Sejak

- 2.2.0
### Sumber

Didefinisikan di [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) pada baris 731
