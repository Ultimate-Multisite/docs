---
id: wu_hosting_integration_wizard_sections
title: 필터 - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

호스팅 통합 설정을 위한 마법사 섹션을 필터링합니다.

애드온이 마법사 섹션을 추가, 제거 또는 수정할 수 있도록 허용합니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | 마법사 섹션. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | 구성 중인 통합. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | 마법사 페이지 인스턴스. |

### Since

- 2.5.0

### Source

Defined in [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) at line 196
