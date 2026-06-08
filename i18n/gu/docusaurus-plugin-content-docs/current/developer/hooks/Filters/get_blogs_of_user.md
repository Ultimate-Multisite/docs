---
id: get_blogs_of_user
title: ફિલ્ટર - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

આ મૂળ WP ફિલ્ટરની નકલ અહીં કરવામાં આવી છે.

આ ફંક્શન યુઝર સાથે જોડાયેલા સાઇટ્સની યાદીને ફિલ્ટર કરે છે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | યુઝરને મળતા સાઇટ ઓબ્જેક્ટ્સની એક એરે (array). |
| $user_id | `int` | યુઝરની ID. |
| $all | `bool` | શું પાછા મળતી સાઇટ્સની એરેમાં બધા સાઇટ્સ (જેમ કે 'deleted', 'archived', અથવા 'spam' તરીકે માર્ક કરેલા) હોવા જોઈએ. ડિફોલ્ટ: false. |

### Since

- 2.0.11
### Source

લાઇન 851 પર [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) માં વ્યાખ્યાયિત છે.
