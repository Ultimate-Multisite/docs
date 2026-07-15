---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

ప్లగిన్ డెవలపర్‌లు రెండర్ కాంటెక్స్ట్‌కు అదనపు వేరియబుల్‌లను గ్లోబల్‌గా జోడించడానికి ఇది అనుమతిస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | రెండర్ కాల్ ద్వారా పంపబడిన వేరియబుల్‌లను కలిగి ఉన్న శ్రేణి (Array). |
| $view | `string` | రెండర్ చేయవలసిన వ్యూ (view) పేరు. |
| $default_view | `string` | ఫాల్‌బ్యాక్ వ్యూ (fallback_view) పేరు. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) లోని 31వ లైన్‌లో నిర్వచించబడింది.

## Returns {#returns}
