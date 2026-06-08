---
id: wu_get_site_domain_and_path
title: ફિલ્ટર - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

ડેવલપર્સને ડોમેન/પાથ જોડીઓ (domain/path pairs) સાથે કામ કરવાની મંજૂરી આપે છે.

આ ઘણી વસ્તુઓ માટે ઉપયોગી થઈ શકે છે, જેમ કે કોઈ પ્રકારનું સ્ટેજિંગ સોલ્યુશન (staging solution) લાગુ કરવું, અલગ સર્વર વાપરવા, વગેરે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | ડોમેન અને પાથ કીઓ ધરાવતું વર્તમાન ઓબ્જેક્ટ. |
| $path_or_subdomain | `string` | ફંક્શનમાં પાસ કરાયેલ મૂળ પાથ/સબડોમેન. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns
ડોમેન અને પાથ કીઓ ધરાવતું એક ઓબ્જેક્ટ.
