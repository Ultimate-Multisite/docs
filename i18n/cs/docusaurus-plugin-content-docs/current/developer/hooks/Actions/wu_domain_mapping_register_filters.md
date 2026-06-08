---
id: wu_domain_mapping_register_filters
title: Akce - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Některé pluginy uloží URL předtím, než byla mapování aktivní, nebo budují URL jiným způsobem, který není zahrnut v uvedených filtrech.

V takových případech chceme přidat další filtry. Druhý parametr, který je předán, je callback `mangle_url`. Doporučujeme nepoužívat tento filter přímo. Místo toho použijte metodu `Domain_Mapping::apply_mapping_to_url`.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $mangle_url | `callable` | Callback pro úpravu (mangle). |
| $domain_mapper | `self` | Tento objekt. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na řádku 530
