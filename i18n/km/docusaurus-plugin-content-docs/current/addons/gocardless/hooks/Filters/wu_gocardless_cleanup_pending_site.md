---
id: wu_gocardless_cleanup_pending_site
title: តម្រង - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ដំណើរការមុនពេលលុប site កំពុងរង់ចាំដែលកំព្រា សម្រាប់ membership GoCardless ដែលបានបោះបង់។

ត្រឡប់ false ពី filter នេះ ដើម្បីការពារការលុប។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress របស់ site កំពុងរង់ចាំ។ |
| $membership | `\WP_Ultimo\Models\Membership` | membership ដែលបានបោះបង់។ |
| $old_status | `string` | ស្ថានភាពមុនការបោះបង់។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) នៅបន្ទាត់ 1086
