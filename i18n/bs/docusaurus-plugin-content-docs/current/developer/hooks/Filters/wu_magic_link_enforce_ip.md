---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filter za određivanje da li se treba provjeravati IP adresa.

Ako ga postavite na `false`, omogućavate tokenima da rade i s različitih mreža. To smanjuje sigurnost, ali povećava upotrebljivost (na primjer, za mobilne korisnike koji mijenjaju mreže).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Da li je potrebno usklađivanje IP adrese. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
