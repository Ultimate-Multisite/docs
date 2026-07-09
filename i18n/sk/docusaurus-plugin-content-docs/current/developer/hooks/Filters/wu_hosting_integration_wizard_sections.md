---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtruje sekcie sprievodcu pre nastavenie integrácie hostingu.

Umožňuje addonom pridávať, odstraňovať alebo upravovať sekcie sprievodcu.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $sections | `array` | Sekcie sprievodcu. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrácia, ktorá sa konfiguruje. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Inštancia stránky sprievodcu. |

### Od verzie

- 2.5.0
### Zdroj

Definované v [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) na riadku 196
