---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

অতিৰিক্ত পাছৱৰ্ড নিয়ম বলবৎ কৰিব নে নাই, সেয়া ফিল্টাৰ কৰে।

যেতিয়া ইয়াক 'true' কৰা হয়, তেতিয়া ই ন্যূনতম দৈৰ্ঘ্য আৰু আখৰৰ প্ৰয়োজনীয়তা বলবৎ কৰে। এইটো "Super Strong" ছেটিং বা Defender Pro-ৰ Strong Password বৈশিষ্ট্য সক্ৰিয় হৈ থকাৰ সময়ত স্বয়ংক্ৰমে সক্ষম হয়।

## পৰামিটারসমূহ {#parameters}

| Name | Type | বৰ্ণনা |
|------|------|-------------|
| $enforce_rules | `bool` | অতিৰিক্ত নিয়ম বলবৎ কৰিব নে নাই। |
| $strength_setting | `string` | এডমিন ছেটিংৰ মান। |
| $defender_active | `bool` | Defender Pro Strong Password সক্ৰিয় হৈ আছে নে নাই। |

### তাৰ পৰা {#since}

- 2.4.0
### উৎস {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ফাইলৰ লাইন ৫৩১ স্থানত সংজ্ঞায়িত কৰা হৈছে।
