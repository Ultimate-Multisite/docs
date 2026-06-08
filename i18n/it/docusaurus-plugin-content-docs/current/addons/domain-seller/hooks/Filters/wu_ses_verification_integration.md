---
id: wu_ses_verification_integration
title: Filtro - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtro: wu_ses_verification_integration

Filtro: permette ad altri codici di fornire l'oggetto di integrazione SES.

L'oggetto restituito deve implementare: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $integration | `object\|null` | L'oggetto di integrazione SES, o null. |

### Da

- 2.2.0
### Sorgente

Definito in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) alla riga 731
