---
id: wu_apply_plan_limits
title: 過濾器 - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# 篩選器：wu_apply_plan_limits

允許外掛開發人員繞過限制檢查。

您可以使用此篩選器在任何限制檢查啟動之前執行任意程式碼。如果篩選器回傳任何真值 (truthy value)，流程將會繼續；如果回傳任何假值 (falsy value)，程式碼將會終止，並且下方所有鉤子 (hooks) 都將不會執行。

### 適用版本 {#since}

- 1.7.0
### 來源 {#source}

- 定義於 [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) 第 52 行
- 定義於 [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) 第 98 行
## 回傳值 {#returns}
