---
id: wu_domain_renewal_failed
title: សកម្មភាព - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# សកម្មភាព៖ wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ដំណើរការបន្ទាប់ពីការព្យាយាមបន្តដែនបរាជ័យ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ការទូទាត់ដែលបានបង្កការបន្ត។ |
| $renewal_data | `array&lt;string,mixed&gt;` | ទិន្នន័យមេតាសម្រាប់ការបន្ត (domain_name, years ជាដើម)។ |
| $error_message | `string` | សារកំហុសដែលមនុស្សអានបានពីក្រុមហ៊ុនចុះបញ្ជីដែន។ |

### ចាប់តាំងពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) នៅបន្ទាត់ 630
