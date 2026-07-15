---
id: wu_hosting_integration_wizard_sections
title: Bộ lọc - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Bộ lọc này dùng để tùy chỉnh các mục (sections) của wizard khi thiết lập tích hợp hosting.

Nó cho phép các addon thêm, xóa hoặc sửa đổi các mục wizard.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Các mục wizard. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Tích hợp đang được cấu hình. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Thể hiện (instance) của trang wizard. |

### Since {#since}

- 2.5.0
### Source {#source}

Được định nghĩa trong [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) tại dòng 196
