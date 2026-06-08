---
id: wu_admin_notices
title: ఫిల్టర్ - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Ultimate Multisite ద్వారా జోడించబడిన అడ్మిన్ నోటిస్‌లను (admin notices) ఫిల్టర్ చేయడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | ఆ ప్రత్యేక ప్యానెల్‌కు సంబంధించిన నోటిస్‌ల జాబితా. |
| $all_notices | `array` | నోటిస్‌ల జాబితా, వీటిని ప్యానెల్ వారీగా విభజించి ఉంచారు. |
| $panel | `string` | నోటిస్‌లను తిరిగి పొందవలసిన ప్యానెల్. |
| $filter | `string` | తొలగించదగిన నోటిస్‌లను (dismissable notices) ఫిల్టర్ చేశారా లేదా అనే సమాచారం. |
| $dismissed_messages | `array` | తొలగించబడిన నోటిస్ కీల (notice keys) జాబితా. |

### Since

- 2.0.0
### Source

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) లోని 121వ లైన్‌లో నిర్వచించబడింది.

## Returns
