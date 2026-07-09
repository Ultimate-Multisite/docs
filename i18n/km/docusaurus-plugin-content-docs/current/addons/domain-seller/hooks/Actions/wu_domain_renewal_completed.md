---
id: wu_domain_renewal_completed
title: សកម្មភាព - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# សកម្មភាព: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

ដំណើរការបន្ទាប់ពីដែនត្រូវបានបន្តដោយជោគជ័យ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ការទូទាត់ដែលបានបង្កឱ្យមានការបន្ត។ |
| $renewal_data | `array&lt;string,mixed&gt;` | ទិន្នន័យមេតានៃការបន្ត (domain_name, years, customer_id, ជាដើម)។ |
| $result | `array&lt;string,mixed&gt;` | អារេលទ្ធផលដើមដែលបានត្រឡប់មកពីអ្នកចុះបញ្ជីដែន រួមទាំង expiry_date ថ្មី។ |

### ចាប់តាំងពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) នៅបន្ទាត់ 594
