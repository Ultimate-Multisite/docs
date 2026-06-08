---
id: wu_apc_process_page_content
title: פילטר - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# מסנן: wu_apc_process_page_content

מאפשר למפתחים לשנות את התוכן הסופי.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $content | `string` | התוכן לאחר ההחלפות. |
| $content_before_processing | `string` | התוכן לפני ההחלפות. |
| $to_replace | `array` | מערך המכיל את המקומות הצהובים (placeholders). |
| $placeholder_count | `int` | מספר המקומות הצהובים שנמצאו. |

### מאז

- 1.4.0
### מקור

מוגדר ב[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) בשורה 46

## מחזיר
התוכן לאחר השינוי.
