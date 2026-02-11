---
id: wu_before_search_models
title: |-
  ---
  title: "wu_before_search_models"
  description: "此动作在搜索模型加载之前触发。"
  ---

  ## 描述

  `wu_before_search_models` 动作钩子允许开发者在使用搜索模型之前进行修改。

  ## 参数

  - `$models` (array)：搜索模型数组。

  ## 示例

  ```php
  add_action('wu_before_search_models', function($models) {
      // modify $models
  });
  ```

  ## 相关钩子

  - `wu_after_search_models`
sidebar_label: wu_before_search_models
_i18n_hash: 48be1bde6dde106ab09f563a8e0fa44d
---
# 动作: wu_before_search_models

在搜索请求处理之前触发。

### 自

- 2.0.0

### 来源

在 [`inc/class-ajax.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-ajax.php#L94) 的第 94 行定义
