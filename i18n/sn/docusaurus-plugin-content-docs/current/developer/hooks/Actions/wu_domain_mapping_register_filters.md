---
id: wu_domain_mapping_register_filters
title: Chiito - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Mamwe ma plugin achachengeta URL kusati kwaita kuti mapping ishande kana kuti achavaka ma URL nenzira yakasiyana isingabatanidzwi mumafilters ari pamusoro.

Muzviitiko zvakadaro, tinoda kuwedzera mamwe mafilters. Parameter yechipiri inopfuudzwa ndiyo mangle_url callback. Tinokurudzira kusashandisa filter iyi zvakananga. Panzvimbo pazvo, shandisa nzira ye Domain_Mapping::apply_mapping_to_url.

## Maparameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Mangle callable. |
| $domain_mapper | `self` | Chinhu ichi. |

### Kubva {#since}

- 2.0.0
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) pamutsetse 530
