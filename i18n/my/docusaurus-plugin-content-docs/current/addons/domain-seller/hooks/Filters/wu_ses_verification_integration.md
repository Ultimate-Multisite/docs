---
id: wu_ses_verification_integration
title: စစ်ထုတ်မှု - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: အခြားကုဒ်များက SES ပေါင်းစပ်မှု အရာဝတ္ထုကို ပံ့ပိုးပေးနိုင်စေရန်။

ပြန်ပေးရမည့် အရာဝတ္ထုသည် အောက်ပါတို့ကို အကောင်အထည်ဖော်ရမည်။
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES ပေါင်းစပ်မှု အရာဝတ္ထု၊ သို့မဟုတ် null ဖြစ်နိုင်သည်။ |

### Since

- 2.2.0
### Source

Defined in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) at line 731
