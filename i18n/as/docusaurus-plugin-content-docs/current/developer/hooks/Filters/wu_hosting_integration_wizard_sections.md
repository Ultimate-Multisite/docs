---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

হোস্টিং ইন্টিগ্ৰেচনৰ ব্যৱস্থাৰ বাবে উইজৰ্ডৰ অংশসমূহ ফিল্টাৰ কৰে।

ই addons ক উইজৰ্ডৰ অংশসমূহ যোগ কৰিবলৈ, আঁতৰাবলৈ বা সলনি কৰিবলৈ অনুমতি দিয়ে।

## পৰিমাণ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | উইজৰ্ডৰ অংশসমূহ। |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | কনফিগাৰেট কৰা ইন্টিগ্ৰেচন। |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | উইজৰ্ড পৃষ্ঠাৰ প্ৰতিলিপি (instance)। |

### তাৰ পৰা (Since) {#since}

- 2.5.0
### উৎস (Source) {#source}

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196
