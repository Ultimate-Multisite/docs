---
id: wu_apply_plan_limits
title: ફિલ્ટર - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

પ્લગઇન ડેવલપર્સને મર્યાદાઓ (limitations) ને ટૂંકા ગાળામાં બંધ કરવાની મંજૂરી આપે છે.

તમે આ ફિલ્ટરનો ઉપયોગ કોઈપણ મર્યાદા શરૂ થાય તે પહેલાં કોઈ પણ પ્રકારનો કોડ ચલાવવા માટે કરી શકો છો. જો ફિલ્ટર કોઈ પણ 'truthy' મૂલ્ય (સાચો મૂલ્ય) પરત કરે છે, તો પ્રક્રિયા આગળ વધશે; જો તે કોઈ પણ 'falsy' મૂલ્ય (ખોટો મૂલ્ય) પરત કરે છે, તો કોડ ત્યાં જ રુકી જશે અને નીચે આપેલા કોઈ પણ hooks ચાલશે નહીં.

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}
