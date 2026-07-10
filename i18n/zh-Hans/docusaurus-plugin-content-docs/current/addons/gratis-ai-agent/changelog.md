---
title: 更新日志
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# 更新日志 {#changelog}

## 1.9.0 — 发布于 2026-04-28 {#190--released-on-2026-04-28}

### 新增功能 {#new}

- **`create_contact_form` 功能** — 使用当前激活的表单插件（如 Contact Form 7、WPForms、Fluent Forms 或 Gravity Forms）创建联系表单，并返回一个可嵌入到任何文章或页面中的短代码。
- **`set_featured_image` 功能** — 可以通过现有的媒体库附件 ID 或远程 URL 为文章或页面设置特色图片；如果提供 URL，系统会自动导入图片。
- **`batch_create_posts` 功能** — 可以在一次功能调用中创建多篇文章。支持与 `create_post` 相同的参数，报告每篇文章的成功/失败状态，并提供可选的 `stop_on_error` 模式（遇到错误时停止）。
- **`page_template` 参数** — 已添加到 `create_post` 和 `update_post`。用于在创建或更新时指定一个 PHP 页面模板文件（例如 `page-full-width.php`）。如果对 `update_post` 传入空字符串，则恢复到主题默认模板。
- **客户端截图功能** — 包括 `capture_screenshot`、`compare_screenshots` 和 `review_page_design`。可以通过服务器端的无头浏览器捕获实时页面的完整或视口截图，比较两张截图，并获得一份 AI 生成的设计评审报告，内容涵盖布局、排版、颜色和可访问性。
- **五个内置智能体** — 包括内容撰写者（Content Writer）、网站构建者（Site Builder）、设计工作室（Design Studio）、插件管理器（Plugin Manager）和支持助手（Support Assistant）。每个智能体都拥有自己专属的工具集、定制的系统提示词和入门建议。可以通过聊天顶部的新的 **Agent Picker** 进行切换。详情请参阅 [内置智能体](../../user-guide/configuration/built-in-agents)。
- **功能开关（Feature flags）** — 新增 **设置 → 功能开关** 标签页，提供了访问控制开关（限制管理员、限制网络管理员、订阅者访问、禁用给非会员）和品牌化选项（隐藏页脚署名、自定义智能体名称、隐藏智能体选择器、使用站点图标作为聊天头像）。详情请参阅 [Gratis AI Agent 设置](../../user-guide/administration/gratis-ai-agent-settings)。
- **恢复上次会话** — 聊天面板现在会在页面加载和小工具打开时自动重新加载最近的对话，确保在页面导航过程中不会丢失上下文。
- **插件操作链接** — WordPress **插件 → 已安装插件** 屏幕上，插件描述下方现在会出现指向设置和“功能注册表”（Abilities Registry）的快速链接。

### 改进功能 {#improved}

- **图片源重试** — 如果下载失败，智能体现在会重试所有配置的免费图片源，然后再回退到 AI 生成的图片。
- **模型信息面板** — 现在始终显示在聊天顶部；不再在发送第一条消息后隐藏。
- **自动滚动行为** — 当用户向上滚动阅读时，自动滚动会暂停；此时会显示一个浮动的 **滚动到底部** 按钮，当用户到达最新消息时会自动消失。
- **Agent Picker 用户界面** — 重新设计为带有每个智能体图标的表单-表格覆盖层，让用户可以一目了然地识别和切换智能体。
- **懒加载 JS 代码块** — 聊天小工具的初始 JavaScript 包现在被拆分成懒加载的代码块，将初始包大小减少了 75–90%。
- **聊天小工具重新设计** — 统一的 AI 图标取代了之前的自定义头像；与内置智能体系统保持一致。
- **URL 链接化** — 系统消息和错误消息气泡中出现的 URL 现在会渲染成可点击的链接。

### 修复问题 {#fixed}

- **功能发现性** — 修正了描述、系统提示词引用和命名空间对齐，确保所有功能都能可靠地出现在智能体的工具列表中。
- **提供商缓存** — 提供商现在通过版本计数器进行全站缓存，防止在多站点网络中出现过时的提供商问题。
- **`ability_invalid_output`** — 解决了 12 个功能处理程序中的问题；所有现在都能返回结构化的 JSON 响应。
- **`pending_client_tool_calls` 流程** — 端到端连接，确保客户端工具调用能够正确完成并向模型返回结果。
- **历史记录抽屉** — 不可撤销的更改已从撤销列表中排除；**查看完整历史记录** 链接现在可以正常工作了。
- **更改/撤销系统** — 修复了五个独立的 Bug，并将它们统一到了新的管理界面下。
- **保存设置 Toast** — 现在点击 **保存设置** 后，小通知（snackbar）可以可靠地显示。
- **垃圾箱上下文菜单** — 添加了 **永久删除** 选项，这样即使不离开垃圾箱视图，也可以硬删除项目。
- **编辑和重发** — 点击编辑图标现在只进入所点击消息的编辑模式，而不是线程中的所有消息。
- **聊天布局高度** — 当插件注入的内容（管理员通知、横幅）出现在页面顶部时，聊天面板会相应调整高度，防止输入区域被推到屏幕外。

---

## 1.4.0 — 发布于 2026-04-09 {#140--released-on-2026-04-09}

### 新增功能 {#new-1}

- **WP-CLI 基准测试命令** (`wp gratis-ai-agent benchmark`) — 可以在命令行中运行 Agent Capabilities v1 基准测试套件，用于 CI 流程和模型评估工作流。支持按问题运行、提供商/模型覆盖，以及 JSON/CSV 输出。
- **Agent Capabilities v1 基准测试套件** — 一套结构化的复杂多步骤提示词，用于测试完整的功能能力范围，并提供评分和 Token/持续时间报告。
- **自定义文章类型功能** — `register_post_type`、`list_post_types`、`delete_post_type`。注册信息通过选项表（options table）在重启后依然持久化。
- **自定义分类法功能** — `register_taxonomy`、`list_taxonomies`、`delete_taxonomy`。支持具有层级和扁平结构的分类法，并可选设置重写别名（rewrite slugs）。
- **设计系统功能** — `inject_custom_css`、`add_block_pattern`、`list_block_patterns`、`set_site_logo`、`apply_theme_json_preset`。包括五个精选预设：`minimal-dark`、`warm-editorial`、`corporate-blue`、`vibrant-startup`、`classic-blog`。
- **全局样式功能** — `get_global_styles`、`set_global_styles`、`reset_global_styles`。通过 WordPress Global Styles API 读取和写入 theme.json 的值。
- **导航菜单管理功能** — `create_menu`、`update_menu`、`add_menu_item`、`remove_menu_item`、`list_menus`。支持嵌套菜单和主题位置分配。
- **选项管理功能** — `get_option`、`set_option`、`delete_option`、`list_options`。包含一个内置的安全黑名单，保护关键的 WordPress 选项不被修改。
- **可安装功能注册表** — `list_available_abilities`、`install_ability`、`recommend_plugin`。用于发现和激活作为 WordPress 插件分发的功能包。
- **网站构建器编排 v2** — `create_site_plan`、`execute_site_plan`、`get_plan_progress`、`handle_plan_error`。支持多阶段的网站构建计划，包括插件发现、步骤输出引用、进度跟踪和自主错误恢复。
- **餐厅网站基准测试问题** (`q-restaurant-website`) — 一个端到端测试，涵盖了自定义文章类型注册、设计系统、导航和插件发现。
- **AI 提供商连接器插件** 已添加到 WordPress Playground 蓝图（blueprints）中，以实现更快的本地开发环境搭建。

### 改进功能 {#improved-1}

- README 已更新，增加了 AI 提供商连接器文档和设置说明。

### 修复问题 {#fixed-1}

- 解决了 `main` 分支上的 25 个 PHPUnit 测试失败问题。
- 修正了 `blueprint.json` 中的 GitHub 发布 URL 格式。
- 重新编号了任务 ID，以避免与旧 ID 冲突。

---

## 1.3.x {#13x}

_更早版本的发布说明请查阅插件仓库。_
