---
id: wu_hosting_integration_wizard_sections
title: Filtrum - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filtrum: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Filtrat sectiones magistri ad institutionem integrationis hospitii.

Permittit addons sectiones magistri addere, removere, aut mutare.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $sections | `array` | Sectiones magistri. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integratio quae configuratur. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instantia paginae magistri. |

### Ex {#since}

- 2.5.0
### Fons {#source}

Definitum in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) ad lineam 196
