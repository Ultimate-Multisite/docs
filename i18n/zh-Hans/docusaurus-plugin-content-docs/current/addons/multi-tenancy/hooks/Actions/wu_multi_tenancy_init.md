---
id: wu_multi_tenancy_init
title: 动作 - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init

在多租户插件完全初始化后触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | 插件实例。phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ 是 WP Ultimo 的标准前缀。 |

### 版本

- 1.0.0

### 源码

在 `ultimate-multisite-multi-tenancy.php`（https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124）第 124 行定义。
