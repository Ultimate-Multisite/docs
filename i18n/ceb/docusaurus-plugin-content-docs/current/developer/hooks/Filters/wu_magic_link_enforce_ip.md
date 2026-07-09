---
id: wu_magic_link_enforce_ip
title: Pagsala - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Salain: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Salain kung ipatuman ba ang pag-verify sa IP address.

Ibutang sa false aron tugotan ang mga token nga molihok gikan sa lain-laing network. Kini makapakunhod sa seguridad apan makadugang sa kasayon sa paggamit (pananglitan, para sa mga mobile user nga nagbalhin-balhin og network).

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $enforce | `bool` | Kung ipatuman ba ang pagpares sa IP address. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) sa linya 422
