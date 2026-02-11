---
id: wu_hosting_integration_wizard_sections
title: I need the content of the file to provide a translation.
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtra le sezioni della procedura guidata per la configurazione dell'integrazione di hosting.

Consente agli addon di aggiungere, rimuovere o modificare le sezioni della procedura guidata.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $sections | `array` | Sezioni della procedura guidata. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | L'integrazione in configurazione. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | L'istanza della pagina della procedura guidata. |

### Da

- 2.5.0

### Fonte

Definito in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) alla riga 196
