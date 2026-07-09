---
id: wu_domain_mapping_register_filters
title: Tallaabo - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Ficil: wu_domain_mapping_register_filters

Qaar ka mid ah plugin-nada waxay kaydin doonaan URL ka hor inta mapping-ku firfircoonaan, ama waxay u dhisi doonaan URL-yada qaab ka duwan oo aan ku jirin filters-ka kor ku xusan.

Xaaladahaas oo kale, waxaan rabnaa inaan ku darno filters dheeraad ah. Parameter-ka labaad ee la gudbiyo waa callback-ka mangle_url. Waxaan kugula talineynaa inaadan si toos ah u isticmaalin filter-kan. Halkii, isticmaal method-ka Domain_Mapping::apply_mapping_to_url.

## Parameters

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $mangle_url | `callable` | Callable-ka mangle. |
| $domain_mapper | `self` | Shaygan. |

### Tan iyo

- 2.0.0
### Isha

Waxaa lagu qeexay [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) khadka 530
