---
title: 网站规范技能
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# 网站规范技能 {#site-specification-skill}

**网站规范技能**是一种结构化的方法，用于捕获您网站的目标、受众和品牌身份。这些信息存储在您的 **site_brief** 内存中，代理会在不同会话中参考这些信息，从而提供一致、了解上下文的帮助。

## 什么是网站规范？ {#what-is-site-specification}

网站规范就是记录以下内容的流程：

- **网站用途**：您的网站是做什么的，以及它存在的意义
- **目标受众**：谁会访问您的网站，以及他们需要什么
- **品牌身份**：您的颜色、语气和视觉风格
- **业务目标**：您的网站成功的标准是什么
- **内容结构**：您的网站是如何组织的

这些规范将成为您的 **site_brief**，这是一个持久的记忆，代理会使用它来理解您的网站背景。

## 为什么使用网站规范？ {#why-use-site-specification}

### 会话一致性 {#consistency-across-sessions}

如果没有 site_brief，您每次开始新会话时都需要重新解释网站用途。有了它，代理会立即了解：

- 您的网站目标和受众
- 您的品牌颜色和语气
- 您的内容结构
- 您的业务目标

### 更好的建议 {#better-recommendations}

代理会使用您的 site_brief 来：

- 建议与网站用途一致的功能
- 推荐符合您目标的结构
- 提出与品牌一致的设计方案
- 避免建议不兼容的功能

### 更快的上手速度 {#faster-onboarding}

新的代理（或在新的会话中的代理）可以通过阅读您的 site_brief 快速掌握知识，而无需提出澄清性问题。

## 启动网站规范 {#initiating-site-specification}

### 在主题构建器上手流程中 {#during-theme-builder-onboarding}

在 **Theme Builder onboarding flow**（主题构建器上手流程）期间，网站规范技能会自动启动。Setup Assistant 代理会提出问题并构建您的 site_brief。

### 手动启动 {#manual-initiation}

您可以在任何时候开始网站规范：

```
"Let's define my site specification"
```

或者

```
"Help me create a site brief"
```

## 网站规范流程 {#the-site-specification-process}

### 步骤 1：网站用途 {#step-1-site-purpose}

代理会询问：

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

您可以选择一个类别或描述您自己的用途。

### 步骤 2：目标受众 {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### 步骤 3：品牌身份 {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### 步骤 4：业务目标 {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### 步骤 5：内容结构 {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## 您的 site_brief 内存 {#your-sitebrief-memory}

完成网站规范后，您的信息将作为 **site_brief** 存储在您的代理内存中。这是一个结构化的记录，包含：

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## 查看和更新您的 site_brief {#viewing-and-updating-your-sitebrief}

### 查看您的 site_brief {#view-your-sitebrief}

请向代理提问：

```
"Show me my site brief"
```

或者

```
"What do you know about my site?"
```

代理将显示您存储的规范信息。

### 更新您的 site_brief {#update-your-sitebrief}

如果您的网站发生了变化，您可以更新它：

```
"Update my site brief: we're now targeting B2B customers"
```

或者

```
"Refresh my site specification"
```

这将使用您现有的信息重新运行网站规范技能。

## 代理如何使用 site_brief {#how-agents-use-sitebrief}

### 设计建议 {#design-recommendations}

当您要求进行设计更改时，代理会参考您的 site_brief：

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### 功能建议 {#feature-suggestions}

代理会根据您的目标建议功能：

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### 内容结构 {#content-structure}

代理会根据您的结构提出内容组织方案：

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## 最佳实践 {#best-practices}

### 保持具体 {#be-specific}

不要说“通用受众”，而是描述您的实际受众：

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### 定期更新 {#update-regularly}

随着您的网站发展，请更新您的 site_brief：

- 当您转向新的受众群体时
- 当您增加新的产品线时
- 当您的品牌身份发生变化时
- 当您的业务目标发生变化时

### 使用一致的术语 {#use-consistent-terminology}

在不同会话中使用相同的术语：

- ✓ 始终说“sustainable jewelry”（不要一会儿说“eco-friendly jewelry”，一会儿说“green products”）
- ✓ 始终以相同的方式指代您的受众

### 包含上下文 {#include-context}

提供有助于代理理解您决策的背景信息：

- "We're targeting professionals who value quality over price"（我们的目标是看重品质而非价格的专业人士）
- "Our audience is tech-savvy and expects modern design"（我们的受众精通技术，期望现代设计）
- "We're a bootstrapped startup, so we need cost-effective solutions"（我们是一家自筹资金的初创公司，所以我们需要具有成本效益的解决方案）

## 与主题构建器上手流程的关系 {#relationship-to-theme-builder-onboarding}

网站规范技能集成到 **Theme Builder onboarding flow**（主题构建器上手流程）中。当您完成上手流程时，系统会自动使用您提供的信息创建 site_brief。

如果您想独立运行网站规范，也可以这样做：

- 在初始设置后完善您的规范
- 随着网站发展更新您的 site_brief
- 在开始使用主题构建器之前创建详细的规范

## 故障排除 {#troubleshooting}

**我的 site_brief 没有被使用**
- 确认代理是否可以访问内存
- 要求代理“recall my site brief”（回忆我的 site_brief）
- 检查您的设置中是否启用了内存功能

**我想用一个新的 site_brief 从头开始**
- 要求代理：“Clear my site brief and start fresh”（清除我的 site_brief 并重新开始）
- 然后再次运行网站规范

**代理的建议与我的 site_brief 不匹配**
- 要求代理“review my site brief”（回顾我的 site_brief）
- 如果您的 site_brief 过时，请更新它
- 在您的请求中提供额外的上下文信息

## 下一步 {#next-steps}

定义了网站规范后：

1. **使用 Theme Builder**：根据您的 site_brief 创建自定义主题
2. **完善设计**：使用 Design System Aesthetics skill 进行详细设计工作
3. **规划内容**：要求代理提供内容结构建议
4. **构建功能**：请求与您的业务目标一致的功能
