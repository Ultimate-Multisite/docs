---
id: networks_pre_user_is_network_admin
title: ફિલ્ટર - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

આ ફિલ્ટર યુઝરના એડમિનિસ્ટ્રેટર હોય તેવા નેટવર્ક્સને ફિલ્ટર કરે છે, જેથી આખી પ્રક્રિયાને ટૂંકી (short-circuit) કરી શકાય.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | નેટવર્ક ID ની યાદી અથવા false. null સિવાય કંઈપણ મૂલ્ય આપવાથી પ્રક્રિયા ટૂંકી થઈ જશે. |
| $ | `int` | જેના માટે નેટવર્ક્સ પાછા આપવા જોઈએ તે યુઝર ID. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688
