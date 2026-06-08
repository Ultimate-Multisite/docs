---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

కొన్ని ప్లగిన్‌లు మ్యాపింగ్ యాక్టివ్‌గా లేనప్పుడు URL ని సేవ్ చేస్తాయి లేదా పైన చెప్పిన ఫిల్టర్‌లలో చేర్చని వేరే విధంగా URL లను నిర్మిస్తాయి.

అలాంటి సందర్భాలలో, మనం అదనపు ఫిల్టర్‌లను జోడించాలనుకుంటాము. ఇక్కడ పంపబడిన రెండవ పరామితి (parameter) `mangle_url` కాల్‌బ్యాక్. ఈ ఫిల్టర్‌ను నేరుగా ఉపయోగించకుండా ఉండమని మేము సిఫార్సు చేస్తున్నాము. బదులుగా, `Domain_Mapping::apply_mapping_to_url` అనే పద్ధతిని (method) ఉపయోగించండి.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | మ్యాంగిల్ చేయవలసిన కాల్‌బ్యాక్. |
| $domain_mapper | `self` | ఈ ఆబ్జెక్ట్. |

### Since

- 2.0.0
### Source

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) లోని 530వ లైన్‌లో నిర్వచించబడింది.
