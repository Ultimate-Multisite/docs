---
title: 主题感知技能
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# 主题感知技能 {#theme-aware-skills}

Superdav AI Agent v1.10.0 版本发布了四项新的主题感知内置技能，这些技能可以自动适应您当前激活的 WordPress 主题。这些技能提供了根据您主题架构和功能量身定制的专业指导和能力。

## 什么是主题感知技能？ {#what-are-theme-aware-skills}

主题感知技能是预先配置的知识库和工具集，AI 助手会根据您网站当前激活的 WordPress 主题自动选择使用。当您切换主题时，助手可用的技能会自动更新——无需手动配置。

每个技能都包含：

- **主题特定的文档** — 关于使用和自定义主题的指导
- **区块和模式参考** — 可用的区块、模式和设计选项
- **自定义示例** — 针对常见任务的代码片段和配置模式
- **最佳实践** — 关于主题架构和工作流程的建议

## 可用的主题感知技能 {#available-theme-aware-skills}

### 区块主题 (Block Themes) {#block-themes}

**适用范围：** 使用 WordPress 区块式（全站编辑）架构的主题。

区块主题技能提供以下指导：

- 使用区块编辑器创建和编辑模板
- 处理区块模式和可重用区块
- 自定义全局样式和 `theme.json` 设置
- 使用主题区块和变体
- 为您的网站构建自定义区块模式

**自动激活条件：** 您的活动主题是区块主题（支持 `block-templates` 功能）。

### 经典主题 (Classic Themes) {#classic-themes}

**适用范围：** 使用 PHP 模板和经典编辑器的传统 WordPress 主题。

经典主题技能提供以下指导：

- 处理 PHP 模板文件和钩子 (hooks)
- 通过自定义器 (Customizer) 定制主题外观
- 使用小工具区域和侧边栏
- 修改 CSS 和子主题开发
- 理解主题层级和模板标签

**自动激活条件：** 您的活动主题是经典（非区块）主题。

### Kadence Blocks {#kadence-blocks}

**适用范围：** 使用 Kadence Blocks 插件进行高级区块式设计的网站。

Kadence Blocks 技能提供以下指导：

- 使用 Kadence 的高级区块库（如 Hero、Testimonials、Pricing 等）
- 配置 Kadence 区块设置和响应式选项
- 使用 Kadence 的网格和容器区块构建自定义布局
- 将 Kadence 区块与您的主题集成
- 利用 Kadence 的设计系统和预设

**自动激活条件：** 您的网站已激活 Kadence Blocks 插件。

### Kadence Theme {#kadence-theme}

**适用范围：** 使用 Kadence 主题进行区块式设计和定制的网站。

Kadence Theme 技能提供以下指导：

- 通过全局样式和 `theme.json` 定制 Kadence 主题
- 使用 Kadence 内置的区块模式和模板
- 配置 Kadence 主题设置和选项
- 使用 Kadence 的设计系统构建自定义设计
- 将 Kadence 与流行的插件和工具集成

**自动激活条件：** 您的活动主题是 Kadence 主题。

## 技能如何选择 {#how-skills-are-selected}

助手会在每条消息中自动检测您当前激活的主题和已安装的插件。如果存在匹配的主题感知技能，它会自动加载到助手的上下文环境中。您无需手动启用或切换技能。

### 多个技能 {#multiple-skills}

如果多个技能适用于您的网站（例如，您同时激活了 Kadence Blocks 和 Kadence Theme），助手可以访问所有适用的技能，并可以参考每个技能的指导。

### 切换主题 {#switching-themes}

当您更改活动主题时，助手可用的技能将在下一条消息中自动更新。例如：

1. 您正在使用一个激活了 **区块主题** 技能的区块主题。
2. 您切换到一个经典主题。
3. 在您的下一条消息中，**经典主题** 技能会自动加载，而 **区块主题** 技能将不再可用。

## 使用主题感知技能 {#using-theme-aware-skills}

要利用主题感知技能，只需在聊天界面描述您想要做什么即可。助手将自动参考适当技能的指导。

### 示例提示 {#example-prompts}

**针对区块主题：**
> "使用区块模式创建一个带有背景图片和居中文本的英雄区域。"

**针对经典主题：**
> "使用子主题为侧边栏添加自定义小工具区域。"

**针对 Kadence Blocks：**
> "使用 Kadence Testimonials 区块构建一个用户评价区域。"

**针对 Kadence Theme：**
> "自定义页眉布局和导航菜单样式。"

助手将提供针对您活动主题和插件的特定指导和代码示例。

:::note
主题感知技能在 Superdav AI Agent v1.10.0 及更高版本中自动可用。无需额外的设置或配置。
:::
