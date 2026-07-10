---
id: wu_domain_ses_verified
title: Toiminto - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Toiminto: wu_domain_ses_verified {#action-wudomainsesverified}

Käynnistyy, kun SES vahvistaa, että verkkotunnus on DKIM-vahvistettu.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Verkkotunnusobjekti. |

### Alkaen {#since}

- 2.2.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) rivillä 480
