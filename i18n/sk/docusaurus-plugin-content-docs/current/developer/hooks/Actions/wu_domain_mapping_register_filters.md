---
id: wu_domain_mapping_register_filters
title: Akcia - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Akcia: wu_domain_mapping_register_filters

Niektoré pluginy uložia URL predtým, ako bolo mapovanie aktívne, alebo budú vytvárať URL iným spôsobom, ktorý nie je zahrnutý vo vyššie uvedených filtroch.

V takýchto prípadoch chceme pridať ďalšie filtre. Druhý odovzdaný parameter je callback mangle_url. Neodporúčame používať tento filter priamo. Namiesto toho použite metódu Domain_Mapping::apply_mapping_to_url.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $mangle_url | `callable` | Volateľná funkcia mangle. |
| $domain_mapper | `self` | Tento objekt. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na riadku 530
