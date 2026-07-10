---
id: wu_domain_mapping_register_filters
title: عمل - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

ځینې pluginګانې به URL مخکې له دې خوندي کړي چې mapping فعال شوی وي، یا به URLګانې په داسې بڼه جوړې کړي چې په پورته filters کې نه وي شاملې.

په داسې حالتونو کې، موږ غواړو اضافي filters ورزیات کړو. دویم parameter چې تېرېږي د mangle_url callback دی. موږ سپارښتنه کوو چې دا filter په مستقیم ډول ونه کاروئ. پر ځای یې، د Domain_Mapping::apply_mapping_to_url method وکاروئ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | د mangle callable. |
| $domain_mapper | `self` | دا object. |

### Since {#since}

- 2.0.0
### Source {#source}

په [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) کې په ۵۳۰ کرښه کې تعریف شوی.
