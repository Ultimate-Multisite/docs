---
id: wu_country_get_administrative_division_name
title: តម្រង - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

ត្រឡប់ឈ្មោះស្អាតរបស់ផ្នែករដ្ឋបាលនៃប្រទេស។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $name | `string` | ឈ្មោះផ្នែក។ ជាធម្មតា ដូចជា រដ្ឋ ខេត្ត តំបន់ ជាដើម។ |
| $country_code | `string` | កូដ ISO ពីរអក្សរសម្រាប់ប្រទេស។ |
| $state_code | `string` | កូដ ISO ពីរអក្សរសម្រាប់រដ្ឋ។ |
| $ucwords | `bool` | បើត្រូវបម្លែងពាក្យឱ្យចាប់ផ្តើមដោយអក្សរធំ។ |
| $current_country | `\WP_Ultimo\Country\Country` | អង្គនៃ class បច្ចុប្បន្ន។ |

### ចាប់ពី {#since}

- 2.0.11
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ត្រង់បន្ទាត់ 250


## ត្រឡប់ {#returns}
ឈ្មោះផ្នែកដែលបានកែប្រែ។
