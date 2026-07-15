---
id: wp_ultimo_render_vars
title: फ़िल्टर - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# फ़िल्टर: wp_ultimo_render_vars

यह प्लगइन डेवलपर्स को रेंडर कॉन्टेक्स्ट (render context) में वैश्विक स्तर पर अतिरिक्त वैरिएबल जोड़ने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | ऐरे जिसमें रेंडर कॉल द्वारा पास किए गए वैरिएबल होते हैं। |
| $view | `string` | उस व्यू का नाम जिसे रेंडर किया जाना है। |
| $default_view | `string` | फ़ॉलबैक व्यू (fallback_view) का नाम। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) में लाइन 31 पर परिभाषित है।

## Returns {#returns}
