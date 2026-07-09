---
title: 主题构建能力
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# 主题构建功能：搭建和激活区块主题 {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 引入了两个强大的功能，允许您直接通过聊天界面生成和部署自定义区块主题。

## 概述 {#overview}

**scaffold-block-theme** 和 **activate-theme** 功能使 Agent 能够：
- 根据您的要求生成完整、可投入生产的区块主题
- 在不进行手动干预的情况下自动激活主题
- 通过引导式的设计决策，创建统一的视觉风格

## 搭建区块主题 (Scaffold Block Theme) {#scaffold-block-theme}

**scaffold-block-theme** 功能会生成一个新的 WordPress 区块主题，其中包含完整的结构，包括：

- 包含设计令牌（design tokens）的 `theme.json` 配置
- 用于常见布局的区块模板文件
- 自定义区块样式和变体
- 主题元数据和支持声明

### 如何调用 {#how-to-invoke}

在与 Superdav AI Agent 的聊天中，您可以请求生成主题：

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent 将会：
1. 通过对话收集您的设计偏好
2. 生成完整的、主题结构
3. 创建所有必需的主题文件
4. 准备主题以供激活

### 预期输出 {#expected-output}

当功能成功执行时，您将看到：

- 主题已成功搭建的确认信息
- 主题名称和位置
- 应用的设计令牌摘要（颜色、排版、间距）
- 可立即激活的状态

示例输出：
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## 激活主题 (Activate Theme) {#activate-theme}

**activate-theme** 功能可以将您的网站切换到新搭建或已存在的区块主题。

### 如何调用 {#how-to-invoke-1}

在搭建完主题后，您可以立即激活它：

```
"Activate the Modern Agency theme"
```

或者激活任何现有主题：

```
"Switch to the Twentytwentyfour theme"
```

### 预期输出 {#expected-output-1}

当激活成功时：

- 当前激活主题的确认信息
- 上一个主题的名称（供参考）
- 主题当前生效的网站 URL
- 任何主题特定的设置说明

示例输出：
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## 工作流程：搭建与激活 {#workflow-scaffold-and-activate}

一个典型的流程会结合使用这两个功能：

1. **请求主题生成**：“为我的 SaaS 落地页创建一个区块主题”
2. **Agent 搭建主题**：生成文件和设计令牌
3. **审查和完善**：如果需要，讨论设计更改
4. **激活**：“现在激活主题”
5. **验证**：访问您的网站，确认新设计已生效

## 设计令牌和自定义 {#design-tokens-and-customization}

搭建的主题使用 WordPress 的设计令牌（通过 `theme.json`）来管理以下内容：

- **颜色**：主色、辅色、强调色、中性色调
- **排版**：字体族、字号、字重、行高
- **间距**：内边距、外边距、间隙比例
- **边框**：圆角和宽度令牌
- **阴影**：提升级别

这些令牌集中存储在 `theme.json` 中，让您只需修改一个文件，就能轻松调整整个设计系统。

## 限制和注意事项 {#limitations-and-notes}

- 主题会搭建在 `/wp-content/themes/` 目录下，并且必须遵循 WordPress 的命名规范
- 激活需要您在 WordPress 网站上拥有适当的权限
- 主题中的自定义 PHP 代码很少；复杂功能请使用插件 (plugins)
- 区块主题在 WordPress 5.9 及更高版本上运行效果最佳

## 故障排除 {#troubleshooting}

**搭建后主题未显示**
- 确认主题目录存在且权限正确
- 检查 `theme.json` 是否是有效的 JSON 格式
- 确保主题名称不与现有主题冲突

**激活失败**
- 确认您拥有管理员权限
- 检查主题目录是否可被 WordPress 读取
- 查看 WordPress 错误日志以获取详细信息

**设计令牌未生效**
- 确认 `theme.json` 的语法是否正确
- 清除任何缓存插件
- 检查您的 WordPress 版本是否支持您使用的令牌

## 下一步 {#next-steps}

激活主题后，您可以：
- 使用 **Design System Aesthetics skill** 来完善排版、颜色和间距
- 通过 WordPress 区块编辑器自定义单个区块样式
- 在主题的 `style.css` 文件中添加自定义 CSS
- 为特定页面类型创建自定义区块模板
