---
id: wu_page_added
title: చర్య - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

ప్లగిన్ డెవలపర్‌లు పేజీలను రిజిస్టర్ చేసినప్పుడు అదనపు పనులు చేయగలిగేలా చేస్తుంది.

wu_page_load లాగా కాకుండా, ఇది ఒక నిర్దిష్ట పేజీని చూసినప్పుడు మాత్రమే నడవదు. బదులుగా, Ultimate Multisite కోడ్‌ని ఉపయోగించి జోడించబడిన ప్రతి అడ్మిన్ పేజీకి రిజిస్ట్రేషన్ సమయంలో ఈ హుక్ నడుస్తుంది.

## పారామీటర్లు (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ఈ పేజీ యొక్క ID. |
| $page_hook | `string` | ఈ పేజీ యొక్క హుక్ పేరు. |

### నుండి (Since)

- 2.0.0
### మూలం (Source)

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) లోని 228వ లైన్‌లో నిర్వచించబడింది.
