---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filtrirajte, ali naj se uveljavi preverjanje IP naslova.

Nastavite na false, da omogočite delovanje tokenov iz različnih omrežij. To zmanjša varnost, vendar poveča uporabnost (npr. za mobilne uporabnike, ki preklapljajo med omrežji).

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $enforce | `bool` | Ali naj se uveljavi ujemanje IP naslova. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Opredeljeno v [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) v vrstici 422
