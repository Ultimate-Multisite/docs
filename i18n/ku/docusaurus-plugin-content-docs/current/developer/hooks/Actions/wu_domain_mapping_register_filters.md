---
id: wu_domain_mapping_register_filters
title: Çalakî - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Çalakî: wu_domain_mapping_register_filters

Hin plugin dê URL tomar bikin berî ku mapping çalak bibe an jî dê URL-an bi awayekî cuda ava bikin ku di filterên jorîn de nayê girtin.

Di rewşên wisa de, em dixwazin filterên zêdetir lê zêde bikin. Parametreya duyemîn ku tê derbaskirin callback-a mangle_url e. Em pêşniyar nakin ku hûn vê filter rasterast bi kar bînin. Li şûna wê, rêbaza Domain_Mapping::apply_mapping_to_url bi kar bînin.

## Parametre

| Nav | Cure | Danasîn |
|------|------|-------------|
| $mangle_url | `callable` | Mangle callable. |
| $domain_mapper | `self` | Ev object e. |

### Ji

- 2.0.0
### Çavkanî

Di rêza 530 de, di [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) de hatiye pênasekirin
