---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

መዛመድ ጥቅም ላይ መዋል ያለበት መሆኑን ይወስናል

በአጠቃላይ፣ ንቁ (active) የሆኑ መዛመዶችን ብቻ መጠቀም ይፈልጋሉ። ሆኖም፣ ይበልጥ የላቀ አመክንዮ (advanced logic) መጠቀም ከፈለጉ፣ ወይም ያልንቁ (non-active) የሆኑ ዶሜኖችን መዛመድ እንዲችሉ ከፈለጉ፣ በቀላሉ እዚህ ላይ ማጣሪያ (filter) ማድረግ ይችላሉ።

## መለኪያዎች {#parameters}

| ስም | አይነት | መግለጫ |
|------|------|-------------|
| $is_active | `bool` | መዛመዱ እንደ ንቁ መታየት ይገባዋል? |
| $mapping | `\Domain` | እያየነው ያለበት መዛመድ (Mapping) |
| $domain | `string` | |

### ምንጭ {#source}

በ[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ፋይል በ391ኛው መስመር ተገልጿል።
