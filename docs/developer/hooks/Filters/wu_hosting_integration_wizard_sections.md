---
id: wu_hosting_integration_wizard_sections
title: "Filter - wu_hosting_integration_wizard_sections"
sidebar_label: "wu_hosting_integration_wizard_sections"
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

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196

