---
id: wu_domain_became_primary
title: សកម្មភាព - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

ដំណើរការ​ពេល​ដែន​ក្លាយជា​ដែន​ចម្បង​សម្រាប់​គេហទំព័រ​មួយ។

Action នេះ​ត្រូវ​បាន​បង្ក​ឡើង​ពេល​ទង់ `primary_domain` របស់​ដែន​ត្រូវ​បាន​កំណត់​ជា true មិនថា​ពេល​បង្កើត​ដែន​ចម្បង​ថ្មី ឬ​ពេល​ធ្វើ​បច្ចុប្បន្នភាព​ដែន​ដែល​មាន​ស្រាប់​ឱ្យ​ក្លាយជា​ចម្បង។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ដែន​ដែល​បាន​ក្លាយជា​ចម្បង។ |
| $blog_id | `int` | លេខសម្គាល់​ប្លុក​របស់​គេហទំព័រ​ដែល​រង​ផលប៉ះពាល់។ |
| $was_new | `bool` | ថា​តើ​នេះ​ជា​ដែន​ដែល​ទើប​បង្កើត​ថ្មី​ឬ​អត់។ |

### ចាប់តាំងពី {#since}

- 2.0.0
### ប្រភព {#source}

បាន​កំណត់​ក្នុង [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) នៅ​បន្ទាត់ 560
