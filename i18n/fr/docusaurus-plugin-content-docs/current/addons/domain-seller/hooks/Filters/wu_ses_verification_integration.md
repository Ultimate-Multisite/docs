---
id: wu_ses_verification_integration
title: Filtre - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtre: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filtre : permet à d'autres codes de fournir l'objet d'intégration SES.

L'objet retourné doit implémenter : - `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error` - `check_domain_verification(string $domain): array{verified: bool}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | L'objet d'intégration SES, ou null. |

### Depuis {#since}

- 2.2.0
### Source {#source}

Défini dans [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) à la ligne 731
