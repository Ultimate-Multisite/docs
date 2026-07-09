---
id: wu_domain_mapping_register_filters
title: Aksyon - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Aksyon: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

May ilang plugin na magse-save ng URL bago maging aktibo ang mapping o bubuo ng mga URL sa ibang paraan na hindi kasama sa mga filter sa itaas.

Sa mga ganitong kaso, gusto nating magdagdag ng mga karagdagang filter. Ang ikalawang parameter na ipinapasa ay ang mangle_url callback. Inirerekomenda naming huwag gamitin nang direkta ang filter na ito. Sa halip, gamitin ang Domain_Mapping::apply_mapping_to_url method.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $mangle_url | `callable` | Ang mangle callable. |
| $domain_mapper | `self` | Ang object na ito. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) sa linya 530
