---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

အသုံးပြုသူ အချက်အလက်များကို တင်ပို့ခြင်းမပြုမီ အလုပ်လုပ်သည့် hook တစ်ခုဖြစ်သည်။

## ပါရာမီတာများ {#parameters}

| အမည် | အမျိုးအစား | ဖော်ပြချက် |
|------|------|-------------|
| $user_data | `array` | အသုံးပြုသူ အချက်အလက်များ ပါဝင်သည့် အစီအစဉ်။ |
| $user | `\WP_User` | အသုံးပြုသူ အရာဝတ္ထု (user object)။ |

### စတင်အသုံးပြုသည့် {#since}

- 0.1.0
### ရင်းမြစ် {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) ၏ ၁၃၉ လိုင်းတွင် သတ်မှတ်ထားသည်။
