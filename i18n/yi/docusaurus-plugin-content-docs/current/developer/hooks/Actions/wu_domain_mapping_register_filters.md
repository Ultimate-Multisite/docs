---
id: wu_domain_mapping_register_filters
title: אַקציע - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

עטלעכע plugins וועלן אָפּהיטן URL איידער די מאַפּירונג איז געווען אַקטיוו, אָדער וועלן בויען URLs אויף אַן אַנדער אופֿן וואָס איז נישט אַרײַנגערעכנט אין די אויבנדערמאָנטע פֿילטערס.

אין אַזעלכע פֿאַלן ווילן מיר צולייגן נאָך פֿילטערס. דער צווייטער פּאַראַמעטער וואָס ווערט איבערגעגעבן איז דער mangle_url callback. מיר רעקאָמענדירן נישט צו נוצן דעם פֿילטער דירעקט. אַנשטאָט, ניצט דעם Domain_Mapping::apply_mapping_to_url method.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $mangle_url | `callable` | דער mangle callable. |
| $domain_mapper | `self` | דער אָביעקט. |

### זינט {#since}

- 2.0.0
### מקור {#source}

דעפֿינירט אין [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) בײַ שורה 530
