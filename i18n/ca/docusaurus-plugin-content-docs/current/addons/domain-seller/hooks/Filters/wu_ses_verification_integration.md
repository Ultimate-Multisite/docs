---
id: wu_ses_verification_integration
title: Filtre - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtre: wu_ses_verification_integration

Filtre: permet que altre codi proporcioneu l'objecte d'integració SES.

L'objecte retornat ha de implementar: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $integration | `object\|null` | L'objecte d'integració SES, o null. |

### Des de

- 2.2.0
### Font

Definit en [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) a la línia 731
