---
id: wu_ses_verification_integration
title: Filtro - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filtro: wu_ses_verification_integration

Filtro: permite que outro código forneça o objeto de integração SES.

O objeto retornado deve implementar: - `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error` - `check_domain_verification(string $domain): array{verified: bool}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $integration | `object\|null` | O objeto de integração SES, ou `null`. |

### Desde

- 2.2.0
### Fonte

Definido em [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) na linha 731
