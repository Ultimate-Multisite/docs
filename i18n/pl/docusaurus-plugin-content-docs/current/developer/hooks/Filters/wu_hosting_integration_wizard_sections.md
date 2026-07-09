---
id: wu_hosting_integration_wizard_sections
title: Filtry - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Filtruje sekcje kreatora (wizard) używane do konfiguracji integracji z hostingiem.

Pozwala wtyczkom (addons) na dodawanie, usuwanie lub modyfikowanie sekcji kreatora.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Sekcje kreatora. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integracja, którą obecnie konfigurowano. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instancja strony kreatora. |

### Since {#since}

- 2.5.0
### Source {#source}

Zdefiniowane w [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) w linii 196
