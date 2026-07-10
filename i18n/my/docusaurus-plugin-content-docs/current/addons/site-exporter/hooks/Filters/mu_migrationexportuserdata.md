---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Export လုပ်ခြင်း ဒါမှမဟုတ် Import လုပ်ခြင်းမှာ အသုံးပြုမယ့် user data ပုံမှန်အချက်အလက်တွေကို စစ်ထုတ်ပေးပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | စိတ်ကြိုက် user data များပါဝင်တဲ့ array ဖြစ်ပါတယ်။ |
| $user | `\WP_User` | user object ကို ရည်ညွှန်းပါတယ်။ |

### Since {#since}

- 0.1.0
### Source {#source}

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## Returns {#returns}
user data ပါဝင်တဲ့ array တစ်ခုကို ပြန်ပေးပါတယ်။
