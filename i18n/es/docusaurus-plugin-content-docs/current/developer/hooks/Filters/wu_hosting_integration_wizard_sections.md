---
id: wu_hosting_integration_wizard_sections
title: ''
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtra las secciones del asistente para la configuración de integración de hosting.

Permite a los complementos agregar, eliminar o modificar secciones del asistente.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $sections | `array` | Secciones del asistente. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | La integración que se está configurando. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | La instancia de la página del asistente. |

### Desde

- 2.5.0

### Fuente

Definido en [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) en la línea 196
