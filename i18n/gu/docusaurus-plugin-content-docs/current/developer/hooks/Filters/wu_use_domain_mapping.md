---
id: wu_use_domain_mapping
title: ફિલ્ટર - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

નક્કી કરો કે મેપિંગનો ઉપયોગ કરવો જોઈએ કે નહીં

સામાન્ય રીતે, તમે ફક્ત સક્રિય (active) મેપિંગ્સનો ઉપયોગ કરવાની મંજૂરી આપવા માંગશો. જો કે, જો તમે વધુ અદ્યતન લોજિકનો ઉપયોગ કરવા માંગતા હો, અથવા બિન-સક્રિય (non-active) ડોમેન્સને પણ મેપ કરવા માંગતા હો, તો તમે અહીં સરળતાથી ફિલ્ટર કરી શકો છો.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | શું મેપિંગને સક્રિય ગણવામાં આવે? |
| $mapping | `\Domain` | જે મેપિંગનું આપણે નિરીક્ષણ કરી રહ્યા છીએ |
| $domain | `string` | |

### Source {#source}

લાઇન 391 પર [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) માં વ્યાખ્યાયિત છે.
