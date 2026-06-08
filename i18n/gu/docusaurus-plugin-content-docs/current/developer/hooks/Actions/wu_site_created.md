---
id: wu_site_created
title: ક્રિયા - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

જ્યારે કોઈ સાઇટ પહેલીવાર બનાવવામાં આવે ત્યારે આ એક્શન ટ્રિગર થાય છે.

જો તે ટેમ્પલેટમાંથી ડુપ્લિકેટ (duplicate) કરવામાં આવે તો તે ટ્રિગર થતું નથી.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | જે ઓબ્જેક્ટ ડેટા સ્ટોર કરવામાં આવશે. |
| $site | `\Site` | ઓબ્જેક્ટનું ઇન્સ્ટન્સ (instance). |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) at line 1652
