---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

May ilang plugins na magse-save ng URL bago pa nagiging active ang mapping, o nagbu-build sila ng URLs sa ibang paraan na hindi kasama sa mga filters sa itaas.

Sa mga kasong ganyan, gusto nating magdagdag ng karagdagang filters. Ang pangalawang parameter na ipinapasa ay ang `mangle_url` callback. Hindi namin inirerekomenda na gamitin nang direkta ang filter na ito. Sa halip, gamitin ang `Domain_Mapping::apply_mapping_to_url` method.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Ang `mangle` callable. |
| $domain_mapper | `self` | Ang object na ito. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
