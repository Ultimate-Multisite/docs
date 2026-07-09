---
id: wu_domain_mapping_register_filters
title: Actio - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Actio: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Quaedam additamenta URL servabunt antequam mappatio activa erat aut URL modos diversos construent qui in filtris supra positis non continentur.

In talibus casibus, filtra addita addere volumus. Secundum parametrum traditum est callback mangle_url. Suademus ne hoc filtro directe utaris. Potius, utere methodo Domain_Mapping::apply_mapping_to_url.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $mangle_url | `callable` | Callable mangle. |
| $domain_mapper | `self` | Hoc obiectum. |

### Ex quo {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ad lineam 530
