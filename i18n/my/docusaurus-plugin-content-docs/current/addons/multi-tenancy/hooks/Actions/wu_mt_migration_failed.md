---
id: wu_mt_migration_failed
title: လုပ်ဆောင်ချက် - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

ရွှေ့ပြောင်းမှု ပျက်ကွက်တဲ့အခါ အလုပ်လုပ်တဲ့ Action တစ်ခု ဖြစ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | ပျက်ကွက်သွားတဲ့ ရွှေ့ပြောင်းမှု Job ကို ရည်ညွှန်းပါတယ်။ |
| $message | `string` | အမှားသတင်းစကား (Error message) ဖြစ်ပါတယ်။ |

### Since {#since}

- 1.0.0
### Source {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) ရဲ့ ၇၂၀ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
