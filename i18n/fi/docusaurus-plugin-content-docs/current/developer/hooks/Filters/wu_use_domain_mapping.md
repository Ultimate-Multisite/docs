---
id: wu_use_domain_mapping
title: Suodatin – wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Suodatin: wu_use_domain_mapping {#filter-wuusedomainmapping}

Määritä, tulisiko ohjausta käyttää

Yleensä haluat sallia vain aktiivisten ohjausten käytön. Jos kuitenkin haluat käyttää edistyneempää logiikkaa tai sallia myös ei-aktiivisten domainien ohjaamisen, suodata tässä.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $is_active | `bool` | Tulisiko ohjausta käsitellä aktiivisena? |
| $mapping | `\Domain` | Ohjaus, jota tarkastelemme |
| $domain | `string` |  |

### Lähde {#source}

Määritetty tiedostossa [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) rivillä 391
