---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

ይህ የሆስቲንግ ውህደት ቅንብር (hosting integration setup) ሲደረግ የዊዛርድ ክፍሎቹን (wizard sections) ያጣራል/ይቆጣጠራል።

በተጨማሪም (addons) የዊዛርድ ክፍሎችን እንዲጨምሩ፣ እንዲያስወግዱ ወይም እንዲያሻሽሉ ያስችላል።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | የዊዛርድ ክፍሎች ስብስብ። |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | እየተቀናበረበት ያለው ውህደት (integration)። |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | የዊዛርድ ገጽ ተልዕኮ (wizard page instance)። |

### Since

- 2.5.0
### Source

በ[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) ፋይል ላይ በ196ኛው መስመር ተገልጿል።
