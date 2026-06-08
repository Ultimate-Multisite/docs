---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

ገንቢዎች የዶሜን እና የመንገድ (path) ጥምረቶችን እንዲያስተካክሉ ይፈቅዳል።

ይህ ለብዙ ነገሮች ጠቃሚ ሊሆን ይችላል። ለምሳሌ፣ አንድ ዓይነት የቅድመ-አገልግሎት (staging) መፍትሄን መተግበር፣ የተለያዩ ሰርቨሮችን መጠቀም ወዘተ።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | የዶሜን እና የመንገድ ቁልፎችን (keys) የያዘ የአሁኑ ኦብጀክት። |
| $path_or_subdomain | `string` | ወደ ተግባሩ (function) የተላለፈው የመጀመሪያው መንገድ/የንዑስ ዶሜን። |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns
የዶሜን እና የመንገድ ቁልፎችን (keys) የያዘ ኦብጀክት ይመልሳል።
