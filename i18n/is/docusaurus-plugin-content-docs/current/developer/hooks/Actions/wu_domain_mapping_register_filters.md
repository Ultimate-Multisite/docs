---
id: wu_domain_mapping_register_filters
title: Aðgerð - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Aðgerð: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Sum plugin vista URL áður en vörpunin var virk eða byggja URL á annan hátt sem er ekki innifalinn í síunum hér að ofan.

Í slíkum tilvikum viljum við bæta við viðbótarsíum. Önnur færibreytan sem er send er mangle_url callback. Við mælum gegn því að nota þessa síu beint. Notaðu þess í stað Domain_Mapping::apply_mapping_to_url aðferðina.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $mangle_url | `callable` | Mangle callable. |
| $domain_mapper | `self` | Þessi hlutur. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) á línu 530
