---
title: 主题构建器新手引导流程
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# 主题构建器入门流程

Superdav AI Agent v1.12.0 引入了引导式的 **主题构建器入门流程**，帮助您在首次设置时创建自定义区块主题。这取代了旧的 Site Builder 模式，采用了一种更灵活、由智能体辅助的方式。

## 什么是主题构建器入门流程？

主题构建器入门流程是一个交互式的设置向导，它能够：

- 引导您完成设计决策（颜色、排版、布局）
- 捕获您网站的视觉识别偏好
- 生成一个根据您的需求量身定制的区块主题
- 完成后自动激活该主题

该流程由 **Setup Assistant agent**（设置助手智能体）驱动，它会提出澄清性问题，并逐步构建您的主题。

## 启动主题构建器入门流程

### 首次运行设置

当您在新的 WordPress 安装上首次启动 Superdav AI Agent 时，您会看到：

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

选择 **"Build a custom theme"**（构建自定义主题）即可进入主题构建器入门流程。

### 手动激活

您也可以随时通过请求以下指令启动主题构建器入门流程：

```
"Start the Theme Builder onboarding"
```

或

```
"Help me create a custom theme"
```

## 入门步骤

### 步骤 1：模式选择

设置助手智能体会询问您的偏好：

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

对于大多数用户，推荐使用 **Guided mode**（引导模式）；智能体将根据您的行业和目标提供设计建议。

### 步骤 2：网站规范

系统会询问您关于网站的以下信息：

- **Site purpose**（网站用途）：电子商务、博客、作品集、SaaS 等。
- **Target audience**（目标受众）：您的访问者是谁？
- **Brand colors**（品牌颜色）：主色和辅色（或“我不确定”）
- **Tone**（语气）：专业、创意、活泼、极简等。

这些信息将存储在您的 **site_brief** 内存中，智能体会在后续会话中参考这些信息。

### 步骤 3：设计系统决策

智能体将引导您选择设计令牌（design tokens）：

- **Typography**（排版）：字体家族（衬线、无衬线、等宽）和尺寸比例
- **Color palette**（调色板）：主色、辅色、强调色和中性色
- **Spacing**（间距）：紧凑、标准或宽松的布局
- **Motion**（动态）：动画和过渡效果（如果需要）

### 步骤 4：主题生成

设置助手智能体将使用以下内容为您搭建自定义区块主题的骨架：

- `theme.json`，其中包含所有设计令牌
- 常见布局的区块模板（首页、博客、联系方式）
- 与您的设计系统匹配的自定义区块样式
- 主题元数据和 WordPress 支持声明

### 步骤 5：激活和验证

主题会自动激活，您会看到：

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

之后，您可以访问您的网站，确认主题是否显示正确。

## 网站规范和 site_brief 内存

在入门过程中，智能体会将您的网站规范捕获到 **site_brief** 内存类别中。这包括：

- 网站用途和目标
- 目标受众
- 品牌颜色和语气
- 设计偏好
- 内容结构

### 为什么 site_brief 很重要

在未来的会话中，智能体会参考您的 site_brief 来：

- 在更改过程中保持设计一致性
- 提出与您的网站用途一致的功能建议
- 提供具有上下文意识的推荐
- 避免重复询问设置问题

### 查看您的 site_brief

您可以向智能体询问：

```
"Show me my site brief"
```

或

```
"What do you know about my site?"
```

智能体将显示您存储的网站规范。

## 入门后进行定制

主题构建器入门流程完成后，您可以：

### 使用设计系统美学技能（Design System Aesthetics Skill）

请求设计优化：

```
"Refine the typography to be more modern"
```

或

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill**（设计系统美学技能）将引导您进行有针对性的设计更新。

### 直接编辑 theme.json

对于高级用户，编辑 `/wp-content/themes/[theme-name]/theme.json` 可以调整：

- 颜色令牌（Color tokens）
- 排版比例（Typography scales）
- 间距值（Spacing values）
- 边框和阴影定义（Border and shadow definitions）

### 创建自定义区块模板

使用 WordPress 区块编辑器为以下内容创建自定义模板：

- 首页布局
- 博文页面
- 产品页面
- 联系表单

## 对比：旧版与新版入门流程

| 功能 | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| 设置方法 | 基于向导的表单 | 智能体引导的对话 |
| 主题生成 | 模板有限 | 自定义骨架搭建 |
| 设计令牌 | 手动输入 | 引导式决策 |
| 灵活性 | 固定选项 | 可定制化 |
| 未来更新 | 未引用 | 存储在 site_brief 中 |

## 故障排除

**入门流程未完成**
- 重新启动流程：输入 "Start the Theme Builder onboarding"
- 检查您的 WordPress 安装是否已更新
- 确认 Setup Assistant agent 是否已启用

**我的 site_brief 没有被使用**
- 确认智能体是否可以访问内存
- 要求智能体 "recall my site brief"（回忆我的 site_brief）
- 检查设置中是否启用了内存功能

**生成的主题与我的偏好不符**
- 使用 Design System Aesthetics skill 进行优化
- 要求智能体 "regenerate the theme with [specific changes]"（使用 [具体更改] 重新生成主题）
- 直接编辑 theme.json 以获得精确控制

## 下一步

完成主题构建器入门流程后：

1. **验证您的网站**：访问您的网站，查看新主题
2. **优化设计**：使用 Design System Aesthetics skill 进行调整
3. **添加内容**：开始构建您的网站内容
4. **探索能力**：了解其他智能体能力，如 scaffold-block-theme 和 activate-theme
