---
id: wu_hosting_integration_wizard_sections
title: 请提供需要翻译的 Markdown/MDX 内容。
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

过滤用于托管集成设置的向导部分。

允许插件添加、删除或修改向导部分。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $sections | `array` | 向导部分。 |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | 正在配置的集成。 |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | 向导页面实例。 |

### 自

- 2.5.0

### 来源

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196
