---
id: wu_hosting_integration_wizard_sections
title: Filtër - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Filtron seksionet e wizard për konfigurimin e integrimit të hosting.

Lejon addons të shtojnë, heqin ose modifikojnë seksionet e wizard.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $sections | `array` | Seksionet e wizard. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrimi që po konfigurohet. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instanca e faqes së wizard. |

### Që nga {#since}

- 2.5.0
### Burimi {#source}

Përcaktuar në [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) në rreshtin 196
