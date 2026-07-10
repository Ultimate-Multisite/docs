---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

အသုံးပြုသူ၏ စိတ်ကြယ်မှုအချက်အလက် (custom user data) များကို ပို့ကုန်လုပ်ပြီးတဲ့အခါမှာ ဤ hook သည် အလုပ်လုပ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | အသုံးပြုသူ အချက်အလက်များ အစုအဝေး (array)။ |
| $user | `\WP_User` | အသုံးပြုသူ အရာဝတ္ထု (user object)။ |

### Since {#since}

- 0.1.0
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) ၏ ၁၆၅ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
