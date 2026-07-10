---
id: wu_domain_mapping_register_filters
title: ක්‍රියාව - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# ක්‍රියාව: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

සිතියම්කරණය සක්‍රිය වීමට පෙර සමහර plugins URL සුරකිනු ඇත, නැතහොත් ඉහත පෙරහන්වලට ඇතුළත් නොවන වෙනත් ක්‍රමයකින් URLs සාදනු ඇත.

එවැනි අවස්ථාවලදී, අපට අමතර පෙරහන් එක් කිරීමට අවශ්‍යයි. ලබා දෙන දෙවන පරාමිතිය mangle_url callback වේ. මෙම පෙරහන සෘජුව භාවිතා නොකරන ලෙස අපි නිර්දේශ කරමු. ඒ වෙනුවට, Domain_Mapping::apply_mapping_to_url ක්‍රමය භාවිතා කරන්න.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable එක. |
| $domain_mapper | `self` | මෙම වස්තුව. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) තුළ 530 වන පේළියේ අර්ථ දක්වා ඇත.
