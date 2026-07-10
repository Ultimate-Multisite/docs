---
id: wu_hosting_integration_wizard_sections
title: فیلتر - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

این فیلتر، بخش‌های ویزارد را برای راه‌اندازی اتصال هاست فیلتر می‌کند.

این کار به افزونه‌ها اجازه می‌دهد تا بخش‌های ویزارد را اضافه، حذف یا تغییر دهند.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | بخش‌های ویزارد. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | یکپارچه‌سازی (integration) که در حال پیکربندی است. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | نمونه (instance) صفحه ویزارد. |

### Since {#since}

- 2.5.0
### Source {#source}

در [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) در خط ۱۹۶ تعریف شده است.
