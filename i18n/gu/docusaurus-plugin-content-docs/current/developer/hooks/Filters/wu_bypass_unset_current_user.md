---
id: wu_bypass_unset_current_user
title: ફિલ્ટર - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

ડેવલપર્સને વર્તમાન યુઝરને અનસેટ (unset) કરવાના કોડને બાયપાસ કરવાની મંજૂરી આપે છે.

જો તમે `null` સિવાય કંઈપણ પાછું આપો છો, તો તે લોગ-ઇન થયેલા વર્તમાન યુઝરના અનસેટ થવાને બાયપાસ કરી દેશે. આ અમુક પરિસ્થિતિઓમાં ઉપયોગી થઈ શકે છે, ઉદાહરણ તરીકે, જ્યારે તમે સબ-સાઇટ્સ સાથે કામ કરી રહ્યા હો જેનો ઉપયોગ એડમિન પેનલ તરીકે થઈ રહ્યો હોય.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | આગળ વધવા માટે `null`, અને અન્ય કંઈપણ તેને બાયપાસ કરવા માટે. |
| $current_user | `false\|\WP_User` | વર્તમાન યુઝર ઓબ્જેક્ટ. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns {#returns}
