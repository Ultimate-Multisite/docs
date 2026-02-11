---
id: wu_pre_save_settings
title: 过滤 - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# 过滤: wu_pre_save_settings

允许开发者在 Ultimate Multisite 保存之前过滤设置。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $settings | `array` | 要保存的设置。 |
| $settings_to_save | `array` | 要添加的新设置。 |
| $saved_settings | `array` | 当前已保存的设置。 |

### 自

- 2.0.18

### 源码

定义于 [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) 的第 296 行
