---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Hosting integration setup အတွက် wizard sections များကို စစ်ထုတ်ပေးသည်။

Addons များက wizard sections များကို ထည့်ခြင်း၊ ဖယ်ရှားခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်းများ ပြုလုပ်နိုင်စေရန် ခွင့်ပြုသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Wizard sections များ။ |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | စနစ်ထည့်သွင်းနေသည့် integration ကို ရည်ညွှန်းသည်။ |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | wizard page instance ကို ရည်ညွှန်းသည်။ |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) ၏ ၁၉၆ လိုင်းတွင် သတ်မှတ်ထားသည်။
