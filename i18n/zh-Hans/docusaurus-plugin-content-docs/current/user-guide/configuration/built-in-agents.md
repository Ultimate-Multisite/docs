---
title: 内置智能体
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# 内置 Agents

Gratis AI Agent v1.9.0 随附五个内置 agents，每个都预先配置了一组聚焦的工具、定制的系统提示，以及与该领域常见任务匹配的入门建议。在 agents 之间切换会改变助手能做什么以及如何响应——你无需进行任何配置。当相关集成已配置时，Superdav AI Agent v1.18.0 可以为这些工作流添加具备日程感知能力的工具、提醒记录、审批关卡和 SMS 通知。

## 什么是 Agent？

每个 agent 都是一个命名配置档案，组合了：

- **工具**——agent 被允许调用的能力（例如，Content Writer 可以访问文章创建能力；Design Studio 可以访问 CSS 和 theme.json 能力）
- **系统提示**——用于设置 agent 语气、优先级和约束的指令
- **建议**——显示在聊天界面中的预写提示，帮助你快速开始

## 访问 Agent Picker

1. 在 WordPress 管理侧边栏中打开 **Gratis AI Agent** 面板。
2. 点击聊天标题左上角的 **agent 图标**（该图标会变化以反映当前激活的 agent）。
3. **Agent Picker** 会以表单表格叠层形式打开。每个 agent 都会列出其图标、名称和一句话描述。
4. 点击某个 agent 行即可激活它。聊天标题会立即更新。

你也可以在对话中途切换 agents——新 agent 的系统提示会从下一条消息开始生效。

## 五个内置 Agents

### Content Writer

**重点：** 创建和编辑文章、页面及联系表单。

**可用工具：** `create_post`、`update_post`、`batch_create_posts`、`set_featured_image`、`create_contact_form`、`get_option`、`list_post_types`。启用 Superdav AI Agent v1.18.0 集成后，已配置的日历上下文、审批关卡、提醒和 SMS 通知工具也可能可用于已获批准的工作流。

**擅长内容：**
- 根据简报或大纲起草并发布博客文章
- 为新站点批量创建落地页
- 构建联系和咨询表单
- 通过 URL 或搜索为文章设置特色图片
- 根据已配置的 Google Calendar 上下文起草活动后续消息，然后在发送通知前暂停等待审批

**入门建议：**
- *写一篇 500 字的博客文章，介绍 WordPress multisite 的好处。*
- *创建“关于”、“服务”和“联系”页面并发布它们。*
- *向“联系”页面添加一个预约咨询表单。*
- *为明天已配置日历活动的参加者起草提醒，并在发送前等待审批。*

---

### Site Builder

**重点：** 从单个提示完成端到端网站创建。

**可用工具：** `create_site_plan`、`execute_site_plan`、`get_plan_progress`、`handle_plan_error`、`create_post`、`batch_create_posts`、`register_post_type`、`create_menu`、`add_menu_item`、`inject_custom_css`、`apply_theme_json_preset`、`install_ability`、`recommend_plugin`、`create_contact_form`。使用 Superdav AI Agent v1.18.0 时，在管理员启用的情况下，已配置的托管服务、审批、提醒、日历和 SMS 工具可能可用。

**擅长内容：**
- 为所描述的业务类型生成多阶段站点构建计划
- 自主执行每个阶段——结构、内容、导航、设计
- 在计划执行过程中从错误中恢复，无需手动干预
- 将推荐的 plugins 作为构建的一部分进行安装
- 直接从聊天界面创建联系表单（Superdav AI Agent v1.10.0+）
- 当启用审批关卡和提醒记录时，协调上线提醒或参加者后续跟进，同时避免重复通知

**入门建议：**
- *构建一个摄影作品集站点，包含图库文章类型、预约页面和联系表单。*
- *创建一个餐厅网站，包含在线菜单、营业时间和订桌咨询表单。*
- *设置一个自由职业咨询站点，包含服务页面、作品集板块和博客。*
- *使用 site builder 向“联系”页面添加联系表单。*
- *站点上线检查清单获批后，向已配置的利益相关者联系人发送 SMS 提醒。*

---

### Design Studio

**重点：** 视觉自定义——颜色、排版、CSS 和区块模式。

**可用工具：** `inject_custom_css`、`apply_theme_json_preset`、`get_global_styles`、`set_global_styles`、`reset_global_styles`、`add_block_pattern`、`list_block_patterns`、`set_site_logo`、`capture_screenshot`、`review_page_design`

**擅长内容：**
- 应用命名的主题预设（minimal-dark、warm-editorial、corporate-blue、vibrant-startup、classic-blog）
- 通过 theme.json 微调全局排版和调色板
- 注入自定义 CSS 以实现品牌特定的覆盖样式
- 捕获页面截图并评审其设计问题

**入门建议：**
- *应用 warm-editorial 预设，然后将主色设置为 #2d6a4f。*
- *截取首页截图，并告诉我你会改进什么。*
- *创建一个可复用的 hero 区块模式，带有全宽背景图片和居中标题。*

### Plugin Manager

**重点：** 发现、安装和管理 WordPress plugins。

**可用工具：** `list_available_abilities`、`install_ability`、`recommend_plugin`、`get_option`、`set_option`

**擅长内容：**
- 为描述的使用场景推荐最佳 plugin
- 从注册表安装能力包
- 按类别浏览可用的能力目录

**入门建议：**
- *用于会员目录的最佳 plugin 是什么？*
- *安装 WooCommerce abilities pack。*
- *显示所有可用的电子商务能力包。*

---

### Support Assistant

**重点：** 回答有关站点内容、设置和 WordPress 配置的问题。

**可用工具：** `get_option`、`list_options`、`list_post_types`、`list_taxonomies`、`list_menus`、`list_available_abilities`

**擅长的事项：**
- 查询当前站点设置和选项
- 说明站点上配置了哪些文章类型、分类法和菜单
- 通过读取实时值来回答“这个设置有什么作用？”这类问题
- 在进行更改之前，作为只读诊断层使用

**入门建议：**
- *此站点当前启用了哪些 plugin 和设置？*
- *列出此站点上注册的所有自定义文章类型。*
- *存在哪些导航菜单，它们被分配到哪里？*

---

## Superdav 自动化集成

当 Superdav AI Agent v1.18.0 集成完成配置后，内置 agent 可以参与更安全、感知日程的自动化工作流：

- **Google Calendar 读取工具**允许 agent 在起草后续工作之前检查已配置的日历和事件。
- **联系人和参会者映射**有助于将事件参与者匹配到 WordPress 用户或已知联系人。
- **人工审批关卡**会暂停敏感操作，直到授权用户审核并确认。
- **提醒记录**可在计划任务重试或重复时防止重复通知。
- **TextBee SMS 通知**仅在启用 SMS 凭据和工作流权限时发送已配置的短信。

推荐工作流：让 agent 准备消息或操作，审核审批提示，然后允许已批准的操作继续执行。对于定期提醒，请保持提醒去重启用，以免同一事件或联系人被反复通知。

---

## 自定义 Agent

每个内置 agent 都可以通过 `gratis_ai_agent_agents` filter 进行扩展或替换。

### 向现有 agent 添加自定义系统提示

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 注册新 agent

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

新 agent 会在 filter 运行后立即显示在 Agent Picker 中。

### 移除内置 agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
