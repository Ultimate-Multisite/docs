---
id: wu_site_created
title: क्रिया - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

जेव्हा एखादी साईट पहिल्यांदा तयार होते, तेव्हा हे ॲक्शन ट्रिगर होते.

जर साईट टेम्पलेटमधून डुप्लिकेट (duplicate) केली असेल, तर हे ॲक्शन ट्रिगर होत नाही.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | जी ऑब्जेक्ट डेटा (object data) स्टोअर करायची आहे. |
| $site | `\Site` | ऑब्जेक्टची इन्स्टन्स (object instance). |

### Since

- 2.0.0
### Source

[`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) मध्ये लाइन 1652 वर परिभाषित केले आहे.
