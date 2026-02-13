---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtert die Wizard-Abschnitte für die Einrichtung der Hosting-Integration.

Erlaubt Addons, Wizard-Abschnitte hinzuzufügen, zu entfernen oder zu ändern.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $sections | `array` | Wizard-Abschnitte. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Die zu konfigurierende Integration. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Die Wizard-Seiteninstanz. |

### Seit

- 2.5.0

### Quelle

Definiert in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) in Zeile 196
