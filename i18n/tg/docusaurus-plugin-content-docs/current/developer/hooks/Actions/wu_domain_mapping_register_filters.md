---
id: wu_domain_mapping_register_filters
title: Амал - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Амал: wu_domain_mapping_register_filters

Баъзе plugin-ҳо URL-ро пеш аз фаъол шудани mapping захира мекунанд ё URL-ҳоро ба тарзе дигар месозанд, ки ба filter-ҳои боло дохил намешавад.

Дар чунин ҳолатҳо, мо мехоҳем filter-ҳои иловагӣ илова кунем. Параметри дуюми гузарондашуда callback-и mangle_url мебошад. Мо тавсия намедиҳем, ки ин filter мустақиман истифода шавад. Ба ҷойи ин, усули Domain_Mapping::apply_mapping_to_url-ро истифода баред.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $mangle_url | `callable` | Callable-и mangle. |
| $domain_mapper | `self` | Ин объект. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) дар сатри 530 муайян шудааст.
