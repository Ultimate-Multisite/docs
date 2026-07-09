---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

ਕੁਝ ਪਲੱਗਇਨ (plugins) ਉਹ URL ਸੇਵ ਕਰਦੇ ਹਨ ਜਦੋਂ ਮੈਪਿੰਗ (mapping) ਐਕਟਿਵ ਨਹੀਂ ਸੀ, ਜਾਂ ਉਹ URL ਇੱਕ ਵੱਖਰੇ ਤਰੀਕੇ ਨਾਲ ਬਣਾਉਂਦੇ ਹਨ ਜੋ ਉਪਰ ਦਿੱਤੇ ਫਿਲਟਰਾਂ (filters) ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ।

ਅਜਿਹੇ ਮਾਮਲਿਆਂ ਵਿੱਚ, ਅਸੀਂ ਵਾਧੂ ਫਿਲਟਰ ਜੋੜਨਾ ਚਾਹੁੰਦੇ ਹਾਂ। ਜੋ ਦੂਜਾ ਪੈਰਾਮੀਟਰ ਪਾਸ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਉਹ `mangle_url` ਕਾਲਬੈਕ (callback) ਹੈ। ਅਸੀਂ ਇਸ ਫਿਲਟਰ ਨੂੰ ਸਿੱਧਾ ਵਰਤਣ ਦੀ ਸਲਾਹ ਨਹੀਂ ਦਿੰਦੇ। ਇਸ ਦੀ ਬਜਾਏ, `Domain_Mapping::apply_mapping_to_url` method ਦੀ ਵਰਤੋਂ ਕਰੋ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | ਮੈਨਗਲ ਕਾਲੇਬਲ (mangle callable)। |
| $domain_mapper | `self` | ਇਹ ਆਬਜੈਕਟ (object)। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
