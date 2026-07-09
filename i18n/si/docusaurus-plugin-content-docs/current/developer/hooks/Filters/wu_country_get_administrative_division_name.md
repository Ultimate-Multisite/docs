---
id: wu_country_get_administrative_division_name
title: පෙරහන් - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# පෙරහන: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

රටේ පරිපාලන උප-කොටස්වල පැහැදිලි නම ආපසු ලබා දෙයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $name | `string` | කොටසේ නම. සාමාන්‍යයෙන් state, province, region වැනි දෙයක්. |
| $country_code | `string` | රට සඳහා අකුරු දෙකේ ISO කේතය. |
| $state_code | `string` | state සඳහා අකුරු දෙකේ ISO කේතය. |
| $ucwords | `bool` | වචන uppercase කරන්නේ නම්. |
| $current_country | `\WP_Ultimo\Country\Country` | වත්මන් class එකේ instance එක. |

### සිට {#since}

- 2.0.11
### මූලාශ්‍රය {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) තුළ 250 වන පේළියේ නිර්වචනය කර ඇත


## ආපසු ලැබෙන්නේ {#returns}
වෙනස් කළ කොටසේ නම.
