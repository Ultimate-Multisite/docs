---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Filtrerar de wizard-sektioner som används för inställning av hostingintegration.

Låter tillägg (addons) lägga till, ta bort eller ändra wizard-sektioner.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $sections | `array` | Wizard-sektioner. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrationen som konfigureras. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instansen av wizard-sidan. |

### Sedan {#since}

- 2.5.0
### Källa {#source}

Definieras i [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) på rad 196
