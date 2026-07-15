---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

מסנן את המקטעים (sections) של המכשיר (wizard) להגדרת אינטגרציית ה-hosting.

מאפשר ל-addons להוסיף, להסיר או לשנות מקטעים במכשיר.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | המקטעים של המכשיר. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | האינטגרציה שאתה מגדיר. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | המופע (instance) של דף המכשיר. |

### Since {#since}

- 2.5.0
### Source {#source}

מוגדר ב[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) בשורה 196
