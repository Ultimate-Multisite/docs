---
id: wu_domain_mapping_register_filters
title: Aksi - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Sawetara plugin bakal nyimpen URL sadurunge pemetaan aktif utawa bakal mbangun URL kanthi cara liya sing ora kalebu ing filter ing ndhuwur.

Ing kasus kaya ngono, kita pengin nambah filter tambahan. Parameter kapindho sing diterusake yaiku callback mangle_url. Disaranake supaya ora nggunakake filter iki langsung. Nanging, gunakake metode Domain_Mapping::apply_mapping_to_url.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Callable mangle. |
| $domain_mapper | `self` | Objek iki. |

### Wiwit

- 2.0.0
### Sumber

Ditetepake ing [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ing baris 530
