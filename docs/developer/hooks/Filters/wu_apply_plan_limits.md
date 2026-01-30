---
id: wu_apply_plan_limits
title: "Filter - wu_apply_plan_limits"
sidebar_label: "wu_apply_plan_limits"
---

# Filter: wu_apply_plan_limits

Allow plugin developers to short-circuit the limitations.

You can use this filter to run arbitrary code before any of the limits get initiated. If you filter returns any truthy value, the process will move on, if it returns any falsy value, the code will return and none of the hooks below will run.

### Since

- 1.7.0
### Source

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) at line 98
## Returns

