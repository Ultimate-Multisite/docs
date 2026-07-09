---
id: wu_country_get_cities
title: តម្រង - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

ត្រឡប់បញ្ជីទីក្រុងសម្រាប់រដ្ឋមួយក្នុងប្រទេសមួយ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $cities | `array` | បញ្ជីឈ្មោះទីក្រុងនៃរដ្ឋ។ មិនមាន key ទេ។ |
| $country_code | `string` | កូដ ISO ពីរអក្សរសម្រាប់ប្រទេស។ |
| $state_code | `string` | កូដ ISO ពីរអក្សរសម្រាប់រដ្ឋ។ |
| $current_country | `\WP_Ultimo\Country\Country` | instance នៃ class បច្ចុប្បន្ន។ |

### ចាប់តាំងពី {#since}

- 2.0.11
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) នៅបន្ទាត់ 146


## ត្រឡប់ {#returns}
បញ្ជីរដ្ឋដែលបានច្រោះ។
