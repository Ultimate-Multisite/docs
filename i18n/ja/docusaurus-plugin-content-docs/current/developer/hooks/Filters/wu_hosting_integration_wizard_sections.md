---
id: wu_hosting_integration_wizard_sections
title: We need to see the content.
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

ホスティング統合設定のウィザードセクションをフィルタリングします。

アドオンがウィザードセクションを追加、削除、または変更できるようにします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | ウィザードセクション。 |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | 構成中の統合。 |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | ウィザードページインスタンス。 |

### Since

- 2.5.0

### Source

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196
