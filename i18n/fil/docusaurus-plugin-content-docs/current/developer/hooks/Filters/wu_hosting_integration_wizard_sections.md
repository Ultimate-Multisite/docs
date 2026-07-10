---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Sinusala (filters) nito ang mga seksyon ng wizard para sa pag-set up ng hosting integration.

Pinapayagan nito ang mga addon na magdagdag, magtanggal, o magbago ng mga seksyon ng wizard.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Mga seksyon ng wizard. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Ang integration na ini-configure. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Ang instance ng wizard page. |

### Since {#since}

- 2.5.0
### Source {#source}

Tinukoy sa [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) sa linya 196
