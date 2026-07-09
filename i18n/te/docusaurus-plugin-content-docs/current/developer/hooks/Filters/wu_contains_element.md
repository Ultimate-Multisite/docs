---
id: wu_contains_element
title: ఫిల్టర్ - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

డెవలపర్‌లు ప్రారంభ శోధన ఫలితాలను మార్చడానికి ఇది అనుమతిస్తుంది.

ఇది థర్డ్-పార్టీ బిల్డర్‌లు వంటి వాటికి ఉపయోగపడుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | ఎలిమెంట్ కంటెంట్‌లో ఉంటే (contained) అవునో కాదో చెకింగ్ చేస్తుంది. |
| $content | `string` | పరిశీలించబడుతున్న కంటెంట్. |
| $element | `self` | ప్రస్తుత ఎలిమెంట్. |
| $post | `null\|\WP_Post` | తనిఖీ చేయవలసిన పోస్ట్. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) లోని 534వ లైన్‌లో నిర్వచించబడింది.
