---
id: wu_sso_loaded
title: 动作 - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# 动作: wu_sso_loaded

允许插件开发者在需要时添加额外的钩子。

此操作需要延迟到 init 阶段，因为 SSO 是在启动时运行的。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $sso | `self` | SSO 类。 |

### 自

- 2.0.0

### 来源

在 [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) 的第 285 行定义
