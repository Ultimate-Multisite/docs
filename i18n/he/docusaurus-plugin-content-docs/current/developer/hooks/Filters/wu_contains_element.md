---
id: wu_contains_element
title: פילטר - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

מאפשר למפתחים לשנות את תוצאות החיפוש הראשוניות.

זה מועיל לבניונים (builders) חיצוניים ודומיהם.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | אם האלמנט מופיע בתוכן. |
| $content | `string` | התוכן הנבדק. |
| $element | `self` | האלמנט הנוכחי. |
| $post | `null\|\WP_Post` | הפוסט לבדיקה. |

### Since {#since}

- 2.0.0
### Source {#source}

מוגדר ב-[`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) בשורה 534
