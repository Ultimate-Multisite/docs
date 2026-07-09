---
id: wu_magic_link_enforce_ip
title: ફિલ્ટર - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

IP સરનામાની ચકાસણી લાગુ કરવી કે નહીં તે ફિલ્ટર કરે છે.

જો તમે તેને `false` પર સેટ કરો છો, તો ટોકન્સને અલગ-અલગ નેટવર્ક્સમાંથી કામ કરવાની મંજૂરી મળે છે. આનાથી સુરક્ષા થોડી ઘટે છે, પરંતુ ઉપયોગીતા (usability) વધી જાય છે (ઉદાહરણ તરીકે, મોબાઇલ યુઝર્સ જ્યારે નેટવર્ક બદલે છે ત્યારે).

## પેરામીટર્સ {#parameters}

| Name | Type | વર્ણન |
|------|------|-------------|
| $enforce | `bool` | શું IP સરનામાનું મેચિંગ લાગુ કરવું છે. |

### ક્યારથી {#since}

- 2.0.0
### સ્ત્રોત {#source}

- [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) માં લાઇન 422 પર વ્યાખ્યાયિત છે.
