---
id: wu_hosting_integration_wizard_sections
title: >-
  I’m ready to translate the document, but I need the actual Markdown/MDX
  content first. Could you please provide the text that needs to be translated?
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtert die Assistentenabschnitte für die Einrichtung der Hosting-Integration.

Allows addons to add, remove, or modify wizard sections.  
Erlaubt Addons, Assistentenabschnitte hinzuzufügen, zu entfernen oder zu ändern.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Assistentenabschnitte. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Die zu konfigurierende Integration. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Die Instanz der Assistenten-Seite. |

### Since

- 2.5.0

### Source

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196
