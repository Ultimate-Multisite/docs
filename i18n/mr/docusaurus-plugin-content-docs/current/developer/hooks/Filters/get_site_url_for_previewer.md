---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

प्रीव्ह्यूअरमध्ये (previewer) वापरल्या जाणाऱ्या URL ला फिल्टर करण्याची परवानगी प्लगइन डेव्हलपर्सना मिळते.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | सध्या वापरले जाणारे डीफॉल्ट डोमेन, जे बदलांसाठी उपयुक्त आहे. |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options मध्ये एंटर केलेल्या सर्व डोमेन पर्यायांची यादी. |

### Since

- 1.7.2
### Source

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) मध्ये लाइन 812 वर परिभाषित केले आहे.

## Returns
वापरण्यासाठी नवीन डोमेन.
