---
id: wu_hosting_integration_wizard_sections
title: गाळणी - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

हे होस्टिंग इंटिग्रेशन सेटअपसाठी विझार्डचे विभाग (wizard sections) फिल्टर करते.

यामुळे addons ला विझार्डचे विभाग जोडण्याची, काढण्याची किंवा बदलण्याची सोय मिळते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | विझार्डचे विभाग (Wizard sections). |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | ज्या इंटिग्रेशनची (integration) कॉन्फिगरेशन केली जात आहे. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | विझार्ड पेजची (wizard page) इन्स्टन्स. |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) मध्ये लाइन 196 वर परिभाषित केले आहे.
