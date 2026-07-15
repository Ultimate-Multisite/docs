---
id: wu_hosting_integration_wizard_sections
title: តម្រង - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

ច្រោះផ្នែក wizard សម្រាប់ការរៀបចំការរួមបញ្ចូល hosting។

អនុញ្ញាតឱ្យ addons បន្ថែម ដកចេញ ឬកែប្រែផ្នែក wizard។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $sections | `array` | ផ្នែក wizard។ |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | ការរួមបញ្ចូលដែលកំពុងត្រូវបានកំណត់រចនាសម្ព័ន្ធ។ |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | instance របស់ទំព័រ wizard។ |

### ចាប់តាំងពី {#since}

- 2.5.0
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) នៅបន្ទាត់ 196
