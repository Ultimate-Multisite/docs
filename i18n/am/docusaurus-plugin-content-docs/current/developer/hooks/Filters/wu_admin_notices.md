---
id: wu_admin_notices
title: ማጣሪያ - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Ultimate Multisite የጨመሩትን የአስተዳሚ ማሳሰቢያዎች (admin notices) እንዲያጣሩ (filter) ገንቢዎችን ያስችላል።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | ለተወሰነ ፓነል (panel) የሆኑ ማሳሰቢያዎች ዝርዝር። |
| $all_notices | `array` | በፓነል መሠረት የተከፋፈሉ የተጨመሩ ማሳሰቢያዎች ዝርዝር። |
| $panel | `string` | ማሳሰቢያዎችን ለማግኘት የሚፈለገው ፓነል። |
| $filter | `string` | ሊሰረዙ የሚችሉ ማሳሰቢያዎች (dismissable notices) ከተጣሩ በኋላ ያለው ሁኔታ። |
| $dismissed_messages | `array` | የተሰረዙ ማሳሰቢያዎች ቁልፎች (keys) ዝርዝር። |

### Since

- 2.0.0
### Source

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) ላይ በ121ኛው መስመር ተገልጿል።

## Returns
