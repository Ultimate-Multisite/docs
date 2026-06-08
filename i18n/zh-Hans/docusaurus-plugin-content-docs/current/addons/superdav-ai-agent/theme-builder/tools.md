---
title: 工具和配置
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# 工具与配置

Theme Builder 使用一套工具来分析、设计和构建您的 WordPress 网站。在 1.16.0 版本中，**sd-ai-agent/site-scrape 已升级为一级工具 (Tier 1 tool)**，默认即可在 Theme Builder 中使用。

## 可用工具

### 一级工具 (Tier 1 Tools) (始终可用)

一级工具默认在 Theme Builder 中可用，无需额外配置。

#### sd-ai-agent/site-scrape

**用途：** 分析现有网站，以提取设计灵感、内容结构和功能。

**功能：**

- **网站分析** — 抓取和分析竞争对手或灵感网站
- **设计提取** — 识别颜色、字体和布局模式
- **内容结构** — 理解页面组织和层级关系
- **功能检测** — 识别插件和功能
- **性能分析** — 检查页面速度和优化情况
- **SEO 分析** — 审查元标签和结构化数据

**用法：**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**提取内容：**

- 配色板和颜色使用情况
- 版式排印（字体和字号）
- 布局结构和间距
- 导航模式
- 内容组织
- 图片和媒体使用
- 交互元素
- 移动设备响应性

**限制：**

- 无法抓取密码保护的网站
- 尊重 robots.txt 和网站政策
- 可能无法捕获动态内容
- 包含大量 JavaScript 的网站分析可能有限
- 大型网站分析可能需要更长时间

### 二级工具 (Tier 2 Tools) (可选)

二级工具需要在 Theme Builder 设置中明确启用后才能使用。

#### Advanced Analytics

提供详细的性能指标：

- 页面加载时间
- 核心网页指标 (Core Web Vitals)
- SEO 分数
- 可访问性分数
- 最佳实践分数

#### Content Optimizer

分析并建议改进以下内容：

- 可读性
- SEO 优化
- 关键词使用
- 内容结构
- 行动号召 (Call-to-action) 的放置位置

### 三级工具 (Tier 3 Tools) (高级/付费)

三级工具需要额外的配置或付费功能。

#### AI Content Generator

用于生成以下内容的文案：

- 产品描述
- 服务页面
- 博文
- 元描述
- 行动号召文案

#### Advanced Design Tools

提供高级设计能力：

- 自定义 CSS 生成
- 动画创建
- 交互元素设计
- 高级色彩理论
- 字体排版优化

## 工具配置

### 启用工具

要在 Theme Builder 中启用更多工具：

1. 导航到 **Gratis AI Agent → Settings**
2. 进入 **Theme Builder → Tools**
3. 根据需要切换工具的开关
4. 保存设置

### 工具权限

某些工具需要特定的权限：

- **网站抓取** — 需要互联网访问权限
- **分析** — 需要 Google Analytics 集成
- **内容生成** — 需要 API 密钥
- **高级功能** — 可能需要付费订阅

### API 密钥和凭证

配置需要 API 密钥的工具：

1. 前往 **Gratis AI Agent → Settings → API Keys**
2. 为每个工具输入凭证
3. 测试连接
4. 安全保存

## 使用 sd-ai-agent/site-scrape

### 基本用法

要求 Theme Builder 分析一个网站：

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### 特定分析

请求特定类型的分析：

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### 对比分析

比较多个网站：

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## 工具限制和注意事项

### 速率限制 (Rate Limiting)

- 抓取功能有限制，以防止服务器过载
- 对同一网站的多次请求可能会被限制
- 大型网站分析可能需要更长时间

### 内容准确性

- 动态内容可能无法完全捕获
- JavaScript 渲染的内容可能不完整
- 实时数据可能无法反映
- 部分内容可能位于付费墙后

### 法律和道德考量

- 尊重 robots.txt 和网站政策
- 不得抓取受版权保护的内容进行复制
- 将分析用于获取灵感，而非直接复制
- 确认您有权使用提取的内容
- 遵守所分析网站的服务条款

### 性能影响

- 抓取大型网站会花费时间
- 多个同时抓取可能会更慢
- 网络连接会影响速度
- 大型数据集可能需要更多处理时间

## 最佳实践

### 使用网站分析

1. **分析多个网站** — 从多个来源收集灵感
2. **关注结构** — 学习布局和组织模式
3. **提取颜色** — 将配色板作为起点
4. **研究排版** — 确定您喜欢的字体组合
5. **回顾导航** — 理解菜单的组织方式

### 道德抓取

1. **尊重 robots.txt** — 遵守网站指南
2. **不要复制内容** — 仅将分析用于获取灵感
3. **核实权利** — 确保您有权使用提取的内容
4. **注明来源** — 归功于灵感来源
5. **遵守条款** — 遵守网站服务条款

### 最大化工具效率

1. **具体化** — 请求特定类型的分析
2. **提供背景信息** — 解释您网站的用途
3. **设定预期** — 描述您的设计目标
4. **迭代改进** — 根据结果进行优化
5. **组合工具** — 使用多个工具进行全面分析

## 故障排除

### 网站无法抓取

- 检查网站是否公开可访问
- 验证 robots.txt 是否允许抓取
- 尝试其他网站
- 检查互联网连接
- 如果问题持续存在，请联系支持

### 分析不完整

- 网站可能包含动态内容
- JavaScript 可能没有完全渲染
- 大型网站可能超时
- 尝试分析特定页面
- 请求特定的分析类型

### 性能缓慢

- 大型网站分析需要更长时间
- 多个同时抓取速度更慢
- 网络连接会影响速度
- 尝试在非高峰时段进行分析
- 先分析较小的部分

## 相关文档

- [Discovery Interview](./discovery-interview.md) — 收集设计信息
- [Design Direction](./design-direction.md) — 完善您的设计方向
- [Hospitality Menus](./hospitality-menus.md) — 创建菜单页面
