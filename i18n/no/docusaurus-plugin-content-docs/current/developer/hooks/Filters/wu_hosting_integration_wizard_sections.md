---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Filtrerer oppsetttrinnene for hostingintegrasjon.

Lar tilleggspakker (addons) legge til, fjerne eller endre oppsetttrinnene.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Oppsetttrinn. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrasjonen som blir konfigurert. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instansen av veiviser-siden. |

### Siden {#since}

- 2.5.0
### Kilde {#source}

Definert i [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) på linje 196
