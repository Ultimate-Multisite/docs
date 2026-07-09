---
id: wu_magic_link_enforce_user_agent
title: Pansala - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Filter kung ipatuman ba ang pag-verify sa user agent.

I-set sa false aron tugotan ang mga token nga mogana sa lain-laing browser/device. Kini makapakunhod sa seguridad apan makadugang sa kasayon sa paggamit.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Kung ipatuman ba ang pagpares sa user agent. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) sa linya 410
