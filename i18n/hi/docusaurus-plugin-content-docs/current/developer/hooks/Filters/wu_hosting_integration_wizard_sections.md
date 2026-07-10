---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

होस्टिंग इंटीग्रेशन सेटअप के लिए विज़ार्ड सेक्शन को फ़िल्टर करता है।

यह ऐडऑन को विज़ार्ड सेक्शन जोड़ने, हटाने या संशोधित करने की अनुमति देता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | विज़ार्ड सेक्शन। |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | वह इंटीग्रेशन जिसे कॉन्फ़िगर किया जा रहा है। |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | विज़ार्ड पेज का इंस्टेंस। |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) में लाइन 196 पर परिभाषित है।
