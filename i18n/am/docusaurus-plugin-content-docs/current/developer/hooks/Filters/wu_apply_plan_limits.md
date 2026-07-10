---
id: wu_apply_plan_limits
title: ማጣሪያ - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

ፕለግኢን ገንቢዎች ገደቦቹን (limitations) እንዲያቋርጡ (short-circuit) ያስችላል።

ይህንን filter በመጠቀም፣ ማንኛውም ገደብ ከመጀመሩ በፊት የፈለጉትን የኮድ ክፍል (arbitrary code) ማስኬድ ይችላሉ። የfilter ውጤት ማንኛውንም እውነት የሚገልጽ (truthy) ዋጋ ከሰጠ፣ ሂደቱ ይቀጥላል። ነገር ግን፣ የሰጠው ዋጋ እውነት የማይገልጽ (falsy) ከሆነ፣ ኮዱ ይቆማል እና ከዚህ በታች ያሉ ምንም hook አይሰሩም።

### Since {#since}

- 1.7.0
### Source {#source}

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) ላይ በ52ኛው መስመር ተገልጿል
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) ላይ በ98ኛው መስመር ተገልጿል
## Returns {#returns}
