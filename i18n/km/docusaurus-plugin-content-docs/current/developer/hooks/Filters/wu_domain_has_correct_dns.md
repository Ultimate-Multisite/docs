---
id: wu_domain_has_correct_dns
title: តម្រង - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# តម្រង: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin បន្ថែមការត្រួតពិនិត្យថ្មី ដើម្បីកំណត់លទ្ធផល។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | សេចក្ដីពិពណ៌នា |
|------|------|-------------|
| $result | `bool` | លទ្ធផលបច្ចុប្បន្ន។ |
| $domain | `self` | domain instance បច្ចុប្បន្ន។ |
| $domains_and_ips | `array` | បញ្ជី domain និង IPs ដែលរកឃើញក្នុងការស្វែងរក DNS។ |

### ចាប់ពី {#since}

- 2.0.4
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) នៅបន្ទាត់ 455


## ត្រឡប់ {#returns}
ថា DNS ត្រូវបានដំឡើងត្រឹមត្រូវឬអត់។
