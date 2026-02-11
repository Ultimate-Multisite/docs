---
id: wu_hosting_integration_wizard_sections
title: >-
  Poderia, por favor, fornecer o conteúdo completo do arquivo “Filter -
  wu_hosting_integration_wizard_sections” para que eu possa realizar a tradução?
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filters the wizard sections for hosting integration setup.

Allows addons to add, remove, or modify wizard sections.

## Parameters

| Nome | Tipo | Descrição |
|------|------|-----------|
| $sections | `array` | Seções do assistente. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | A integração que está sendo configurada. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | A instância da página do assistente. |

### Since

- 2.5.0

### Source

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196
