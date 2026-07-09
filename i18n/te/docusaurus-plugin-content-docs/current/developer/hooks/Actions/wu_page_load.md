---
id: wu_page_load
title: చర్య - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

ప్లగిన్ డెవలపర్‌లు మన పేజీలకు అదనపు హుక్స్ (hooks) జోడించడానికి ఇది అనుమతిస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ఈ పేజీ యొక్క ID. |
| $page_hook | `string` | ఈ పేజీ యొక్క పేజ్ హుక్. |
| $admin_page | `self` | పేజీ ఇన్స్టాన్స్. |

### Since {#since}

- 1.8.2
- 2.0.4: మూడవ పారామీటర్ జోడించబడింది: పేజీ ఇన్స్టాన్స్.
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) లోని 318వ లైన్‌లో నిర్వచించబడింది.
