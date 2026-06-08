---
title: 站点构建模式移除通知
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder 模式移除通知

**Superdav AI Agent v1.12.0 版本已移除 Site Builder 模式。** 如果您之前使用了 Site Builder 模式，您应该迁移到 **Setup Assistant agent** 来进行主题创建和站点设置。

## 发生了什么？

### Site Builder 模式（旧版）

Site Builder 模式是一个基于向导（wizard）的界面，用于：

- 从模板创建站点
- 配置基本设置
- 选择主题
- 设置初始内容

### 取代它的是什么？

**Setup Assistant agent** 现在负责处理所有 Site Builder 的功能，它具备：

- 更灵活的、由 Agent 引导的设置流程
- 更完善的主题定制选项
- 与 Theme Builder 入门流程的集成
- 存储了持久的 site_brief 记忆，可供未来会话使用

## 如果您使用了 Site Builder 模式

### 您的站点是安全的

- 使用 Site Builder 模式创建的现有站点仍然可以正常工作
- 不会丢失数据或中断站点
- 您可以像往常一样管理您的站点

### 迁移到 Setup Assistant Agent

对于新的站点设置或主题更改，请使用 Setup Assistant agent：

```
"Help me set up a new site"
```

或者

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent 提供了相同的功能，但灵活性更高。

## 对比：Site Builder 与 Setup Assistant

| 功能 | Site Builder (已移除) | Setup Assistant (新增) |
|---------|----------------------|----------------------|
| 设置方法 | 向导表单 | Agent 对话 |
| 主题选择 | 预设模板 | 定制生成 |
| 定制化 | 选项有限 | 完整的设计系统 |
| 站点简介 | 不存储 | 持久记忆 |
| 未来会话 | 重复设置 | 使用存储的 site_brief |
| 灵活性 | 固定工作流 | 自适应对话 |

## 迁移到 Setup Assistant Agent

### 针对新站点

您不再需要使用 Site Builder 模式：

1. 发起请求：“Help me set up a new site”
2. Setup Assistant agent 将引导您完成以下步骤：
   - 站点目的和目标
   - 目标受众
   - 品牌身份
   - 主题生成
   - 初始配置

### 针对现有站点

如果您有一个使用 Site Builder 模式创建的现有站点：

1. 您可以继续像以前一样使用它
2. 如果要更新主题，请发起请求：“Redesign my site”
3. Setup Assistant agent 将帮助您创建新主题
4. 您的站点数据保持不变

### 针对主题更改

您不再需要使用 Site Builder 模式的主题选择功能：

1. 发起请求：“Change my theme”
2. Setup Assistant agent 将：
   - 询问您的设计偏好
   - 生成一个定制主题
   - 将其激活到您的站点

## 关键区别

### Site Builder 模式

```
1. 选择一个模板
2. 选择一个主题
3. 配置基本设置
4. 完成
```

### Setup Assistant Agent

```
1. 描述您站点的目的
2. 定义您的目标受众
3. 选择设计偏好
4. Agent 生成定制主题
5. Agent 激活主题
6. 站点简介存储，供未来会话使用
```

## Setup Assistant Agent 的优势

### 更灵活

- 使用自然语言描述您的站点
- 获取定制化的建议
- 适应您的具体需求

### 更好的定制化

- 定制主题生成
- 设计系统决策
- 持久设计令牌 (Persistent design tokens)

### 持久记忆

- 您的 site_brief 会被存储
- 未来的 Agent 可以了解您的站点背景
- 无需重复提供设置信息

### 集成工作流

- Theme Builder 入门流程
- Design System Aesthetics skill
- Ability Visibility controls
- 所有功能无缝协作

## 故障排除

### 我找不到 Site Builder 模式

Site Builder 模式已被移除。请改用 Setup Assistant agent：

```
"Help me set up a new site"
```

### 我想重建一个 Site Builder 站点

您可以使用 Setup Assistant agent 来重建它：

1. 发起请求：“Help me set up a new site”
2. 描述您原始站点的目的和设计
3. Agent 将生成一个相似的主题
4. 您的 site_brief 将被存储，供未来参考

### 我的现有 Site Builder 站点无法工作

使用 Site Builder 模式创建的现有站点仍然可以正常工作。如果您遇到问题：

1. 检查您的主题是否仍然处于激活状态
2. 确认您的插件是否已启用
3. 检查 WordPress 错误日志
4. 如果问题持续存在，请联系支持人员

### 我还能使用我旧的 Site Builder 模板吗？

Site Builder 模板已不再可用。但是：

- 您现有的站点仍然可以正常工作
- 您可以使用 Setup Assistant agent 重建类似站点
- Setup Assistant agent 提供了更多定制化选项

## 下一步行动

1. **对于新站点**：使用 Setup Assistant agent
2. **对于现有站点**：继续像以前一样使用
3. **对于主题更改**：向 Setup Assistant agent 寻求帮助
4. **对于设计优化**：使用 Design System Aesthetics skill

## 相关主题

- **Theme Builder Onboarding**: 定制主题的引导式设置
- **Setup Assistant Agent**: Agent 引导的站点设置
- **Site Specification Skill**: 定义您的站点目标和受众
- **Design System Aesthetics Skill**: 优化您的站点视觉识别度
