---
id: wu_hosting_integration_wizard_sections
title: Filtro - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filtro: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Filtra as seccións do asistente para a configuración da integración de aloxamento.

Permite que os addons engadan, eliminen ou modifiquen seccións do asistente.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $sections | `array` | Seccións do asistente. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | A integración que se está a configurar. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | A instancia da páxina do asistente. |

### Desde {#since}

- 2.5.0
### Fonte {#source}

Definido en [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) na liña 196
