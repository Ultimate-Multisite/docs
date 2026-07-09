---
id: wu_magic_link_enforce_ip
title: Filtar - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtar: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filtrira treba li provoditi provjeru IP adrese.

Postavite na false kako biste omogućili tokenima da rade s različitih mreža. To smanjuje sigurnost, ali povećava upotrebljivost (npr. za mobilne korisnike koji mijenjaju mreže).

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $enforce | `bool` | Treba li provoditi podudaranje IP adrese. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) u retku 422
