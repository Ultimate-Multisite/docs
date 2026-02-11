---
id: wu_apply_plan_limits
title: Фильтр - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Позволяет разработчикам плагинов обойти ограничения.

Вы можете использовать этот фильтр для выполнения произвольного кода до того, как будут инициированы любые ограничения. Если ваш фильтр возвращает любое истинное значение, процесс продолжится; если он возвращает любое ложное значение, код завершится, и ни один из нижеприведенных хуков не будет выполнен.

### Since

- 1.7.0

### Source

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) at line 98

## Returns
