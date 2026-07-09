---
id: wu_domain_mapping_register_filters
title: Ago - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Ago: wu_domain_mapping_register_filters

Iuj pluginoj konservos URL antaŭ ol la mapado estis aktiva aŭ konstruos URL-ojn laŭ malsama maniero, kiu ne estas inkluzivita en la supraj filtriloj.

En tiaj okazoj, ni volas aldoni pliajn filtrilojn. La dua pasigita parametro estas la mangle_url callback. Ni rekomendas ne uzi ĉi tiun filtrilon rekte. Anstataŭe, uzu la metodon Domain_Mapping::apply_mapping_to_url.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $mangle_url | `callable` | The mangle callable. |
| $domain_mapper | `self` | This object. |

### Ekde

- 2.0.0
### Fonto

Difinita en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ĉe linio 530
