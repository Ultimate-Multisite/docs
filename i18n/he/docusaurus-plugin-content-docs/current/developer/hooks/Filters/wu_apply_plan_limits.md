---
id: wu_apply_plan_limits
title: פילטר - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# מסנן: wu_apply_plan_limits

מאפשר למפתחי תוספים לבטל את ההגבלות.

תוכל להשתמש במסנן זה כדי להריץ קוד שרירותי לפני שכל ההגבלות יופעלו. אם המסנן מחזיר כל ערך אמת (truthy value), התהליך ימשיך הלאה; אם הוא מחזיר כל ערך שקר (falsy value), הקוד יסיים את פעולתו ולא יופעלו אף אחד מה-hooks הבאים.

### מאז {#since}

- 1.7.0
### מקור {#source}

- מוגדר ב[`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) בשורה 52
- מוגדר ב[`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) בשורה 98
## מחזיר {#returns}
