---
id: wu_hosting_integration_wizard_sections
title: Filtru - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filtru: wu_hosting_integration_wizard_sections

Filtrează secțiunile de wizard pentru configurarea integrării de găzduire (hosting).

Permite addon-urilor să adauge, elimine sau modifice secțiunile de wizard.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Secțiunile de wizard. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrarea care este configurată. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instanța paginii de wizard. |

### De la

- 2.5.0
### Sursă

Definit în [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) la linia 196
