---
id: wu_make_primary_domain_redirect_url
title: फिल्टर - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

डोमेनला मुख्य (primary) बनवल्यानंतर रीडायरेक्ट होणाऱ्या URL ला फिल्टर करतो.

या फिल्टरमुळे डेव्हलपर्सना हे कस्टमाइझ करण्याची परवानगी मिळते की डोमेनला मुख्य बनवल्यानंतर वापरकर्त्यांना कुठे रीडायरेक्ट केले जाईल. डीफॉल्टनुसार, हे मुख्य साइटवरील सध्याच्या URL वर, किंवा ज्या साइटमध्ये बदल केला जात आहे त्या साइटच्या ॲडमिन URL वर रीडायरेक्ट होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | डीफॉल्ट रीडायरेक्ट URL. हा सध्याचा URL (जर मुख्य साइट असेल) किंवा सध्याच्या साइटचा ॲडमिन URL असू शकतो. |
| $current_site | `int` | ज्या साइटचे डोमेन मुख्य बनवले जात आहे, त्या साइटचा ID. |
| $domain | `\Domain` | जे डोमेन मुख्य बनवले गेले आहे, तो डोमेन ऑब्जेक्ट. |
| $old_primary_domains | `array` | ज्या डोमेन पूर्वी मुख्य होते, अशा डोमेनच्या IDs ची ॲरे. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) मध्ये लाइन 639 वर परिभाषित केले आहे.

## Returns {#returns}
फिल्टर केलेला रीडायरेक्ट URL.
