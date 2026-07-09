---
id: wu_domain_ses_verified
title: Ação - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

Dispara quando o SES confirma que um domínio foi verificado com DKIM.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | O objeto do domínio. |

### Desde {#since}

- 2.2.0
### Fonte {#source}

Definido em [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) na linha 480
