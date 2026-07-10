---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

Odrediti da li bi se mapping trebao koristiti

Obično želite da se koriste samo aktivni mappingi. Međutim, ako želite da koristite napredniju logiku, ili da dozvolite mapiranje i neaktivnih domena, jednostavno filtrirajte ovdje.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Treba li da se mapping tretira kao aktivan? |
| $mapping | `\Domain` | Mapping koji pregledamo |
| $domain | `string` | |

### Izvor {#source}

Definisano je u [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) na liniji 391
