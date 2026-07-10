---
id: wu_connector_enforcement_option_keys
title: ফিল্টৰ - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

মূল স্থান (main site) बाट বলবৎ কৰা AI প্ৰোভাইডেৰৰ অপচন কি-সমূহৰ তালিকা ফিল্টাৰ কৰে।

কাস্টম বা থাৰ্ড-পাৰ্টি AI প্ৰোভাইডেৰ প্লাগইনৰ বাবে অপচন কি-সমূহ যোগ কৰক, যাতে সাব-সাইটত (subsites) তেওঁলোকৰ ছেটিংছও মূল স্থানৰ পৰা লাভ কৰে (inherited)।

## পৰামিটারসমূহ {#parameters}

| Name | Type | বৰ্ণনা |
|------|------|-------------|
| $keys | `string[]` | বলবৎ কৰিবলগীয়া অপচন কি-সমূহৰ নাম (যিটোত ইতিমধ্যে গতিশীলভাৱে আৱিষ্কৃত connector কি-সমূহ আৰু EXTRA_PROVIDER_OPTIONS অন্তৰ্ভুক্ত হৈ আছে)। |

### কিমানৰ পৰা {#since}

- 1.2.0
### উৎস {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
