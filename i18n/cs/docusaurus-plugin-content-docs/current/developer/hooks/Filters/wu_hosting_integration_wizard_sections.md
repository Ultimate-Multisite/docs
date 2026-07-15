---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtruje sekce kouzelnického průvodce (wizard) pro nastavení integrace hostingu.

Umožňuje addonům přidávat, odebírat nebo upravovat sekce kouzelnického průvodce.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $sections | `array` | Sekce kouzelnického průvodce. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrace, která je konfigurována. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instancí stránky kouzelnického průvodce. |

### Od {#since}

- 2.5.0
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) na řádku 196
