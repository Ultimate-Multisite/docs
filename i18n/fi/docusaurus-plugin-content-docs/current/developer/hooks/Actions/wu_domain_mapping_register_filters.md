---
id: wu_domain_mapping_register_filters
title: Toiminto - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Toiminto: wu_domain_mapping_register_filters

Jotkin lisäosat tallentavat URL:n ennen kuin ohjaus oli aktiivinen tai muodostavat URL:t eri tavalla, joka ei sisälly yllä oleviin suodattimiin.

Tällaisissa tapauksissa haluamme lisätä lisäsuodattimia. Toinen välitetty parametri on mangle_url-callback. Emme suosittele tämän suodattimen käyttämistä suoraan. Käytä sen sijaan Domain_Mapping::apply_mapping_to_url-metodia.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $mangle_url | `callable` | Mangle-kutsuttava. |
| $domain_mapper | `self` | Tämä objekti. |

### Alkaen versiosta {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) rivillä 530
