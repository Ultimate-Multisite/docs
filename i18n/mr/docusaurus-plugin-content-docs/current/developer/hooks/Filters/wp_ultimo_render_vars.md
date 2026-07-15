---
id: wp_ultimo_render_vars
title: फिल्टर - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

प्लगइन डेव्हलपर्सना रेंडर कॉन्टेक्स्टमध्ये (render context) जागतिक स्तरावर (globally) अतिरिक्त व्हेरिएबल जोडण्याची परवानगी देण्यासाठी.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | रेंडर कॉलद्वारे पास केलेले व्हेरिएबल्स असलेले ॲरे (array). |
| $view | `string` | रेंडर करायच्या व्ह्यूचे (view) नाव. |
| $default_view | `string` | फॉलबॅक व्ह्यूचे (fallback_view) नाव. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) मध्ये लाइन 31 वर परिभाषित केले आहे.


## Returns {#returns}
