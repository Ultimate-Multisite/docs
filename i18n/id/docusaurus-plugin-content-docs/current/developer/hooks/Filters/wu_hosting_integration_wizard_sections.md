---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Memfilter bagian wizard untuk pengaturan integrasi hosting.

Memungkinkan add-on untuk menambah, menghapus, atau memodifikasi bagian wizard.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $sections | `array` | Bagian wizard. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Integrasi yang sedang dikonfigurasi. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Instance halaman wizard. |

### Sejak

- 2.5.0
### Sumber

Didefinisikan di [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) pada baris 196
