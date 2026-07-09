---
id: wu_hosting_integration_wizard_sections
title: 過濾 - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

用於過濾主機整合設定的嚮導區塊。

允許外掛新增、移除或修改嚮導區塊。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | 嚮導區塊列表。 |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | 正在設定的整合類型。 |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | 嚮導頁面實例。 |

### 可用自 {#since}

- 2.5.0
### 來源 {#source}

定義於 [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) 的第 196 行
