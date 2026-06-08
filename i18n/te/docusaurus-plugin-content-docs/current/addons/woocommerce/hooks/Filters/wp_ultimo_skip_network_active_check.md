---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

నెట్‌వర్క్ యాక్టివేషన్ తనిఖీని దాటవేయడానికి (short-circuit) డెవలపర్‌లకు ఇది అనుమతిస్తుంది.

మీరు composer-based మరియు ఇతర కస్టమ్ సెటప్‌లను ఉపయోగిస్తున్నప్పుడు, ఉదాహరణకు Bedrock, ఇది సాధారణంగా mu-pluginsగా ప్లగిన్‌లను ఉపయోగించే సందర్భాలలో ఇది చాలా ఉపయోగకరంగా ఉంటుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | తనిఖీని దాటవేయాలా వద్దా అని చెబితే, ఇది false గా డిఫాల్ట్‌గా ఉంటుంది. |

### Since

- 2.0.0
### Source

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) లోని 272వ లైన్‌లో నిర్వచించబడింది.

## Returns
తనిఖీని దాటవేయాలనుకుంటే `true`, లేకపోతే `false` తిరిగి ఇస్తుంది.
