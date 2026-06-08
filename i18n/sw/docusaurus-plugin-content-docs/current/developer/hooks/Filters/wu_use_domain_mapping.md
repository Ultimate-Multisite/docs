---
id: wu_use_domain_mapping
title: Kichujio - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Kuamua kama *mapping* inapaswa kutumika

Kwa kawaida, utataka kuruhusu tu *mappings* zilizofanya kazi kutumika. Hata hivyo, ikiwa unataka kutumia mantiki (logic) ya hali ya juu zaidi, au kuruhusu *domains* zisizofanya kazi kufanyiwa *mapping* pia, unaweza kufiltera hapa.

## Vigezo (Parameters)

| Jina (Name) | Aina (Type) | Maelezo (Description) |
|------|------|-------------|
| $is_active | `bool` | Je, *mapping* inapaswa kutibiwa kama inayoendelea kufanya kazi? |
| $mapping | `\Domain` | *Mapping* tunayochunguza |
| $domain | `string` | |

### Chanzo (Source)

Imefafanuliwa katika [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) kwenye mstari wa 391
