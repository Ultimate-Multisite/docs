---
id: wu_page_added
title: చర్య - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

ప్లగిన్ డెవలపర్‌లు పేజీలు రిజిస్టర్ అయినప్పుడు అదనపు పనులు చేయడానికి ఈ యాక్షన్ అనుమతిస్తుంది.

`wu_page_load` లాగా కాకుండా, ఇది ఒక నిర్దిష్ట పేజీని చూసినప్పుడు మాత్రమే నడవదు. బదులుగా, WP Ultimo కోడ్‌ని ఉపయోగించి జోడించబడిన ప్రతి అడ్మిన్ పేజీకి రిజిస్ట్రేషన్ సమయంలో ఈ హుక్ నడుస్తుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ఈ పేజీ యొక్క ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ఈ పేజీకి రూపొందించబడిన హుక్. |

### Since

- 2.0.0
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) లోని 203వ లైన్‌లో నిర్వచించబడింది.
