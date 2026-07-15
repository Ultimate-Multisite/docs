---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

ప్లగిన్ డెవలపర్‌లు తమ పేజీలకు అదనపు హుక్స్ (hooks) జోడించడానికి ఇది అవకాశం ఇస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ఈ పేజీ యొక్క ID. |
| $page_hook | `string` | ఈ పేజీ యొక్క పేజ్ హుక్. |
| $admin_page | `self` | పేజీ యొక్క ఉదాహరణ (page instance). |

### Since {#since}

- 1.8.2
- 2.0.4: మూడవ పారామీటర్‌ను జోడించారు: పేజీ ఉదాహరణ (the page instance).
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) లోని 332వ లైన్‌లో నిర్వచించబడింది.
