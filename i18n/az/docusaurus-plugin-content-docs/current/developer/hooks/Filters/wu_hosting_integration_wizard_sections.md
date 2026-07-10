---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Hosting inteqrasiyası qurulması üçün wizard bölmələrinə filter tətbiq edir.

Bu, addon-lara (eklenti) wizard bölmələri əlavə etməyə, silməyə və ya dəyişdirməyə imkan verir.

## Parametrlər {#parameters}

| Name | Type | Təsvir |
|------|------|-------------|
| $sections | `array` | Wizard bölmələri. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Konfiqurasiya edilən inteqrasiya. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Wizard səhifəsi nümunəsi. |

### Nə vaxtdan {#since}

- 2.5.0
### Mənbə {#source}

[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) faylında 196-cı sətirdə təyin edilmişdir
