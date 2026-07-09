---
id: wu_ses_verification_integration
title: Iragazkia - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Iragazkia: wu_ses_verification_integration {#filter-wusesverificationintegration}

Iragazkia: beste kode bati SES integrazio-objektua ematea ahalbidetzen dio.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $integration | `object\|null` | SES integrazio-objektua, edo null. |

### Noiztik {#since}

- 2.2.0
### Iturburua {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) fitxategian definitua, 731. lerroan
