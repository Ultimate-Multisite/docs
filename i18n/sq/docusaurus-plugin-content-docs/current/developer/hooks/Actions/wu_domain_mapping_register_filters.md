---
id: wu_domain_mapping_register_filters
title: Veprim - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Veprim: wu_domain_mapping_register_filters

Disa plugin-e do ta ruajnë URL-në përpara se mapping të ishte aktiv ose do të ndërtojnë URL në një mënyrë tjetër që nuk përfshihet në filtrat e mësipërm.

Në raste të tilla, duam të shtojmë filtra shtesë. Parametri i dytë i kaluar është callback-u mangle_url. Rekomandojmë të mos e përdorni këtë filtër drejtpërdrejt. Në vend të kësaj, përdorni metodën Domain_Mapping::apply_mapping_to_url.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $mangle_url | `callable` | Callable për mangle. |
| $domain_mapper | `self` | Ky objekt. |

### Që prej

- 2.0.0
### Burimi

Përcaktuar në [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) në rreshtin 530
