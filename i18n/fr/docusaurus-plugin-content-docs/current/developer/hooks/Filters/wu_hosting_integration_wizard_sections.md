---
id: wu_hosting_integration_wizard_sections
title: >-
  I’m ready to translate the file, but I need the actual Markdown/MDX content
  first. Could you please provide the text that needs to be translated?
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filters the wizard sections for hosting integration setup.  
Allows addons to add, remove, or modify wizard sections.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Wizard sections. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | The integration being configured. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | The wizard page instance. |

### Since

- 2.5.0

### Source

Défini dans [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) à la ligne 196
