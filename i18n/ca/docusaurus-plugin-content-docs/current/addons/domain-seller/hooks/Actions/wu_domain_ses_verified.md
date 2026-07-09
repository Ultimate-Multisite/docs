---
id: wu_domain_ses_verified
title: Acció - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Acció: wu_domain_ses_verified {#action-wudomainsesverified}

S'executa quan SES confirma que un domini està verificat amb DKIM.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | L'objecte del domini. |

### Des {#since}

- 2.2.0
### Font {#source}

Definit a [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) a la línia 480
