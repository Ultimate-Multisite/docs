---
id: wu_connector_enforcement_option_keys
title: ফিল্টার - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

মূল সাইট থেকে প্রয়োগ করা এআই প্রোভাইডার অপশন কীগুলির তালিকা ফিল্টার করে।

কাস্টম বা থার্ড-পার্টি এআই প্রোভাইডার প্লাগইনগুলির জন্য অপশন কী যোগ করুন, যাতে তাদের সেটিংসগুলিও সাবসাইটগুলিতে মূল সাইট থেকে উত্তরাধিকার সূত্রে পাওয়া যায়।

## প্যারামিটারগুলি {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | যে অপশন কী নামগুলি প্রয়োগ করতে হবে (এতে ইতিমধ্যে ডাইনামিকভাবে আবিষ্কৃত কানেক্টর কী এবং EXTRA_PROVIDER_OPTIONS অন্তর্ভুক্ত)। |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
