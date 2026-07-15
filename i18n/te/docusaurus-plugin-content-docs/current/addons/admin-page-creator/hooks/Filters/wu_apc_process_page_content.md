---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

డెవలపర్‌లు ఫైనల్ కంటెంట్‌తో మార్పులు చేయడానికి (mess with) ఇది అనుమతిస్తుంది.

## పారామీటర్లు (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | రీప్లేస్‌మెంట్ల తర్వాత ఉన్న కంటెంట్. |
| $content_before_processing | `string` | రీప్లేస్‌మెంట్ల ముందు ఉన్న కంటెంట్. |
| $to_replace | `array` | ప్లేహోల్డర్‌లను కలిగి ఉన్న శ్రేణి (Array). |
| $placeholder_count | `int` | కనుగొనబడిన ప్లేహోల్డర్‌ల సంఖ్య. |

### ఎప్పటి నుండి (Since) {#since}

- 1.4.0
### మూలం (Source) {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) లోని 46వ లైన్‌లో నిర్వచించబడింది.

## తిరిగి ఇచ్చేది (Returns) {#returns}
మార్పు చేసిన తర్వాత కంటెంట్.
