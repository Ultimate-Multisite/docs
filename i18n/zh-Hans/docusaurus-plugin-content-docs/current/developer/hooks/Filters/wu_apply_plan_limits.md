---
id: wu_apply_plan_limits
title: 过滤器 - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# 过滤器：wu_apply_plan_limits

允许插件开发者绕过限制。

您可以使用此过滤器在任何限制启动之前执行任意代码。如果过滤器返回任何真值，流程将继续；如果返回任何假值，代码将返回，以下任何钩子都不会执行。

### Since

- 1.7.0

### Source

- 在 `inc/limits/class-post-type-limits.php` 第 52 行定义
- 在 `inc/limits/class-disk-space-limits.php` 第 98 行定义

## Returns
