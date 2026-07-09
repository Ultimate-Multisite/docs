---
id: wu_use_domain_mapping
title: Saringan - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

Tangtukeun naha hiji mapping kudu dipaké

Biasana, anjeun bakal hoyong ngan ngidinan mapping anu aktip pikeun dipaké. Tapi, lamun anjeun hoyong maké logika anu leuwih maju, atawa ngidinan domain anu henteu aktip ogé dipetakeun, cukup filter di dieu.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Naha mapping kudu dianggap aktip? |
| $mapping | `\Domain` | Mapping anu keur urang pariksa |
| $domain | `string` |  |

### Sumber {#source}

Ditetepkeun dina [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) dina baris 391
