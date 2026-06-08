---
id: wu_domain_mapping_register_filters
title: ድርጊት - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

አንዳንድ ፕልጊኖች (plugins) ይህ ማッピング (mapping) ሲንቀሳቀስ ባልሆነ ጊዜ የዩአርኤል (URL) ሊያስቀምጡ ይችላሉ፣ ወይም ከላይ ባሉት ፊልትሮች (filters) ውስጥ ያልተካተቱ በሌላ መንገድ ዩአርኤሎችን ሊፈጥሩ ይችላሉ።

እንደዚህ ባሉ ሁኔታዎች፣ ተጨማሪ ፊልትሮችን ማከል እንፈልጋለን። የሚተላለፈው ሁለተኛው መለኪያው (parameter) `mangle_url` callback ነው። ይህንን ፊልተር በቀጥታ ከመጠቀም እንመክራለን። ይልቁንም፣ `Domain_Mapping::apply_mapping_to_url` የሚለውን method መጠቀም ይመከራል።

## መለኪያዎች (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | የmangle የሚሰራው ኮላበክ (callable)። |
| $domain_mapper | `self` | ይህን ነገር (object)። |

### ከ

- 2.0.0
### ምንጭ (Source)

በ[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) በ530ኛው መስመር ተገልጿል።
