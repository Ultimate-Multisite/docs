---
id: wu_use_domain_mapping
title: Filtar - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtar: wu_use_domain_mapping

Odredite treba li se mapiranje koristiti

Obično ćete htjeti dopustiti korištenje samo aktivnih mapiranja. Međutim, ako želite koristiti napredniju logiku ili dopustiti mapiranje i neaktivnih domena, jednostavno filtrirajte ovdje.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $is_active | `bool` | Treba li se mapiranje tretirati kao aktivno? |
| $mapping | `\Domain` | Mapiranje koje pregledavamo |
| $domain | `string` |  |

### Izvor {#source}

Definirano u [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) u retku 391
