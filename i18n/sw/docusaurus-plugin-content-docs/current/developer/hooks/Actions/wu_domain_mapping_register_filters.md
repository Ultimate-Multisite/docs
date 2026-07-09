---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Plugins zingine zinaweza kuhifadhi URL kabla ya kuwa na mfumo wa mapping huu au zinaweza kujenga URL kwa njia tofauti ambayo haijajumuishwa kwenye filters zilizo hapo juu.

Katika hali kama hizo, tunataka kuongeza filters zaidi. Parametari ya pili inayopitishwa ni `mangle_url` callback. Tunapendekeza kutotumia filter hii moja kwa moja. Badala yake, tumia njia ya `Domain_Mapping::apply_mapping_to_url`.

## Vipengele {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $mangle_url | `callable` | Callback ya kuifanya 'mangle'. |
| $domain_mapper | `self` | Kifaa hiki. |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) kwenye mstari wa 530
