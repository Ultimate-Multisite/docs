---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

કેટલાક plugins એવું URL સેવ કરશે જે mapping active થાય તે પહેલાનું હોય, અથવા તે URL અલગ રીતે બનાવશે જે ઉપરના filters માં આવતું નથી.

આવા કિસ્સાઓમાં, અમે વધારાના filters ઉમેરવા માંગીએ છીએ. અહીં પાસ થતો બીજો parameter `mangle_url` callback છે. અમે સલાહ આપીએ છીએ કે તમે આ filter નો સીધો ઉપયોગ ન કરો. તેના બદલે, `Domain_Mapping::apply_mapping_to_url` method નો ઉપયોગ કરો.

## પેરામીટર્સ {#parameters}

| નામ | પ્રકાર | વર્ણન |
|------|------|-------------|
| $mangle_url | `callable` | મંગલ (mangle) કરી શકાય તેવું ફંક્શન (callable). |
| $domain_mapper | `self` | આ object. |

### ક્યારથી {#since}

- 2.0.0
### સ્ત્રોત {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) માં લાઇન 530 પર વ્યાખ્યાયિત છે.
