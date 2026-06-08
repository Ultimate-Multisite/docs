---
title: 内置代理
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# 内置智能体

Gratis AI Agent v1.9.0 预装了五个内置智能体。每个智能体都预配置了一套聚焦的工具集、定制的系统提示（system prompt）和与该领域常见任务匹配的入门建议。切换智能体会改变助手的功能和响应方式——您无需进行任何配置。

## 什么是智能体（Agent）？

每个智能体都是一个命名配置档案，它结合了以下几个部分：

- **工具（Tools）** — 智能体被允许调用的能力（例如，内容撰稿人可以使用发布文章的能力；设计工作室可以使用 CSS 和 theme.json 的能力）
- **系统提示（System prompt）** — 用于设定智能体的语气、优先级和限制的指令
- **建议（Suggestions）** — 在聊天界面中预先编写的提示，帮助您快速上手

## 如何访问智能体选择器（Agent Picker）

1. 在 WordPress 管理侧边栏打开 **Gratis AI Agent** 面板。
2. 点击聊天标题左上角的 **智能体图标**（该图标会根据当前激活的智能体而变化）。
3. **智能体选择器（Agent Picker）** 会以表单叠加层的方式打开。每个智能体都列出了其图标、名称和一行描述。
4. 点击一个智能体行即可激活它。聊天标题会立即更新。

您也可以在对话过程中切换智能体——新智能体的系统提示将从下一条消息开始生效。

## 五个内置智能体

### 内容撰稿人（Content Writer）

**重点功能：** 创建和编辑文章、页面和联系表单。

**可用工具：** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**擅长处理：**
- 根据大纲或简要描述起草和发布博客文章
- 为新网站创建一批着陆页
- 构建联系和咨询表单
- 根据 URL 或搜索设置文章特色图片

**入门建议：**
- *撰写一篇关于 WordPress 多站点优势的 500 字博客文章。*
- *创建一个“关于我们”、“服务”和“联系我们”页面并发布它们。*
- *在“联系我们”页面添加一个预约咨询表单。*

---

### 网站构建器（Site Builder）

**重点功能：** 通过单个提示完成端到端的网站创建。

**可用工具：** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**擅长处理：**
- 为描述的业务类型生成多阶段的网站构建计划
- 自主执行每个阶段——包括结构、内容、导航和设计
- 在计划过程中从错误中恢复，无需人工干预
- 作为构建的一部分安装推荐的插件
- 直接从聊天界面创建联系表单（Superdav AI Agent v1.10.0+）

**入门建议：**
- *构建一个包含画廊文章类型、预约页面和联系表单的摄影作品集网站。*
- *创建一个包含在线菜单、营业时间和桌位预订咨询表单的餐厅网站。*
- *设置一个包含服务页面、作品集部分和博客的自由职业咨询网站。*
- *使用网站构建器在“联系我们”页面添加联系表单。*

---

### 设计工作室（Design Studio）

**重点功能：** 视觉定制——颜色、排版、CSS 和区块模式。

**可用工具：** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**擅长处理：**
- 应用命名主题预设（minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog）
- 通过 theme.json 精细调整全局排版和配色方案
- 注入自定义 CSS 以实现品牌特定的覆盖
- 截取页面截图并检查设计问题

**入门建议：**
- *应用 warm-editorial 预设，然后将主颜色设置为 #2d6a4f。*
- *截取首页截图，并告诉我哪些地方可以改进。*
- *创建一个带有全宽背景图片和居中标题的可用英雄区块模式。*

---

### 插件管理器（Plugin Manager）

**重点功能：** 发现、安装和管理 WordPress 插件。

**可用工具：** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**擅长处理：**
- 为描述的用例推荐最佳插件
- 从注册表中安装能力包
- 按类别浏览可用的能力目录

**入门建议：**
- *用于会员目录的最佳插件是什么？*
- *安装 WooCommerce 能力包。*
- *显示所有可用的电子商务能力包。*

---

### 支持助手（Support Assistant）

**重点功能：** 回答关于网站内容、设置和 WordPress 配置的问题。

**可用工具：** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**擅长处理：**
- 查询当前的网站设置和选项
- 解释网站上配置了哪些文章类型、分类法和菜单
- 通过读取实时值来回答“这个设置是做什么的？”这类问题
- 在进行更改之前，充当只读的诊断层

**入门建议：**
- *当前网站上哪些插件和设置是激活的？*
- *列出本网站上所有注册的自定义文章类型。*
- *存在哪些导航菜单，它们分配给了哪里？*

---

## 自定义智能体

每个内置智能体都可以通过 `gratis_ai_agent_agents` 过滤器进行扩展或替换。

### 为现有智能体添加自定义系统提示

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 注册新智能体

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

新的智能体将在过滤器运行后立即出现在智能体选择器中。

### 移除内置智能体

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
