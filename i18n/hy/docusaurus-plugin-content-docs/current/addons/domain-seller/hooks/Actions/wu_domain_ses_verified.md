---
id: wu_domain_ses_verified
title: Գործողություն - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

Գործարկվում է, երբ SES-ը հաստատում է, որ տիրույթը DKIM-ստուգված է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Տիրույթի օբյեկտը։ |

### Սկսած {#since}

- 2.2.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480)-ում՝ 480-րդ տողում
