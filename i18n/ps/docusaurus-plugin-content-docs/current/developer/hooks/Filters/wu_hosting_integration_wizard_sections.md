---
id: wu_hosting_integration_wizard_sections
title: فلټر - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# فلټر: wu_hosting_integration_wizard_sections

د hosting integration setup لپاره د wizard برخې فلټر کوي.

addons ته اجازه ورکوي چې wizard برخې زیاتې، لرې، یا بدلې کړي.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | د Wizard برخې. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | هغه integration چې configure کېږي. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | د wizard page instance. |

### Since

- 2.5.0
### Source

په [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) کې په 196 کرښه تعریف شوی.
