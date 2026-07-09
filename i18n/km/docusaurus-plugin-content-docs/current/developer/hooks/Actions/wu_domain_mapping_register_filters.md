---
id: wu_domain_mapping_register_filters
title: សកម្មភាព - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# សកម្មភាព៖ wu_domain_mapping_register_filters

កម្មវិធីបន្ថែមខ្លះនឹងរក្សាទុក URL មុនពេលការផ្គូផ្គងដែនសកម្ម ឬនឹងបង្កើត URL តាមរបៀបផ្សេង ដែលមិនមានក្នុងតម្រងខាងលើ។

ក្នុងករណីបែបនេះ យើងចង់បន្ថែមតម្រងបន្ថែម។ ប៉ារ៉ាម៉ែត្រទីពីរដែលបានបញ្ជូនគឺ callback mangle_url។ យើងមិនណែនាំឱ្យប្រើតម្រងនេះដោយផ្ទាល់ទេ។ ជំនួសវិញ សូមប្រើ method Domain_Mapping::apply_mapping_to_url។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $mangle_url | `callable` | callable សម្រាប់ mangle។ |
| $domain_mapper | `self` | វត្ថុនេះ។ |

### ចាប់ពី

- 2.0.0
### ប្រភព

បានកំណត់ក្នុង [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) នៅបន្ទាត់ 530
