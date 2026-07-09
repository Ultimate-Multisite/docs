---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Plugin developers کو limitations کو bypass کرنے کی اجازت دیتا ہے۔

آپ اس filter کا استعمال کر سکتے ہیں تاکہ کسی بھی limit کے شروع ہونے سے پہلے اپنا کوئی بھی کوڈ چلا سکیں۔ اگر filter کوئی بھی truthy value return کرتا ہے، تو عمل آگے بڑھے گا؛ اگر یہ کوئی falsy value return کرتا ہے، تو کوڈ واپس کر دے گا اور نیچے دیے گئے کوئی بھی hooks run نہیں ہوں گے۔

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}
