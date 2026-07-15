---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

યુઝર એજન્ટ વેરિફિકેશન લાગુ કરવું કે નહીં તે ફિલ્ટર કરે છે.

જો તેને `false` પર સેટ કરવામાં આવે, તો ટોકન્સ વિવિધ બ્રાઉઝર/ડિવાઇસ પર કામ કરી શકે છે. આનાથી સુરક્ષા થોડી ઘટે છે પરંતુ ઉપયોગીતા (usability) વધી જાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | શું યુઝર એજન્ટ મેચિંગ લાગુ કરવું છે. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
