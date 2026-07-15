---
id: wu_domain_mapping_register_filters
title: Darbība - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Darbība: wu_domain_mapping_register_filters

Daži plugin saglabās URL pirms kartēšana bija aktīva vai veidos URL citādā veidā, kas nav iekļauts iepriekš minētajos filtros.

Šādos gadījumos mēs vēlamies pievienot papildu filtrus. Otrais nodotais parametrs ir mangle_url atzvanes funkcija. Mēs neiesakām izmantot šo filtru tieši. Tā vietā izmantojiet Domain_Mapping::apply_mapping_to_url metodi.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $mangle_url | `callable` | Mangle izsaucamā funkcija. |
| $domain_mapper | `self` | Šis objekts. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) 530. rindā
