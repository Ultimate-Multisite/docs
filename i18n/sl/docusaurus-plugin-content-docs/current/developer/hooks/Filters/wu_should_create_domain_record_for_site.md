---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtrira, ali naj Ultimate Multisite ustvari zapis domene za novo ustvarjeno spletno mesto.

Uporabite ta filter, da preprečite ali odložite samodejno ustvarjanje zapisa domene za spletna mesta, ki uporabljajo skupno osnovno domeno obrazca za zaključek nakupa, internega gostitelja ali domeno, ki jo bo druga integracija upravljala ločeno.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $create | `bool` | Ali naj se zapis domene ustvari. |
| $site | `WP_Site` | Novo ustvarjeni objekt spletnega mesta. |

### Od različice

- 2.13.0

### Vir

Določeno v `inc/functions/domain.php`.


## Vrne

Logična vrednost, ki označuje, ali naj se ustvari zapis domene.
