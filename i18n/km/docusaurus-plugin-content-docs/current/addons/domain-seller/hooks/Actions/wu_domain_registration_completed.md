---
id: wu_domain_registration_completed
title: សកម្មភាព - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ដំណើរការបន្ទាប់ពីដែនត្រូវបានចុះឈ្មោះដោយជោគជ័យ។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | សេចក្ដីពិពណ៌នា |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ការបង់ប្រាក់ដែលបានបង្កឱ្យមានការចុះឈ្មោះ។ |
| $registration_data | `array&lt;string,mixed&gt;` | ទិន្នន័យមេតានៃការចុះឈ្មោះ (domain_name, provider_id, years, expiry_date, ជាដើម)។ |
| $result | `array&lt;string,mixed&gt;` | អារេលទ្ធផលដើមដែលបានត្រឡប់ពីអ្នកចុះឈ្មោះដែន។ |

### ចាប់ពី

- 2.0.0
### ប្រភព

បានកំណត់ក្នុង [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) នៅបន្ទាត់ 1204
