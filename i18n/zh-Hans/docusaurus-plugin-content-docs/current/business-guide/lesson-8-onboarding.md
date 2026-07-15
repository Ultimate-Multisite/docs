---
title: 第八课：客户入驻
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# 第 8 课：客户入驻流程

让客户注册只是成功的一半。如果他们登录后感到不知所措，然后就再也不回来了，你就失去了他们。本课旨在设计一套体验流程，将一个新注册用户转化为一个活跃、投入的客户。

## 我们上次停在哪里 {#where-we-left-off}

FitSite 已经完成了品牌化，并且拥有了一个可用的结账流程。现在，我们的重点是关注健身房业主在完成注册并首次登录到他们的新网站后，会经历什么。

## 为什么入驻流程很重要 {#why-onboarding-matters}

注册后的前 30 分钟决定了客户是留下来还是流失。一位健身房业主如果：

- 登录后看到一个看起来像健身网站的网站 → 会留下来
- 清楚地知道下一步该做什么 → 会留下来
- 在一个通用的 WordPress 控制面板里感到迷茫 → 就会离开

您的利基市场模板（第 4 课）解决了第一点。本课解决的就是第二点。

## 首次登录体验 {#the-first-login-experience}

### 欢迎控制面板小组件 (Welcome Dashboard Widget) {#welcome-dashboard-widget}

创建一个自定义的控制面板小组件，用于迎接新客户并引导他们完成设置。这个小组件应该在他们首次登录时非常醒目。

**FitSite 快速上手：**

1. **添加您的工作室名称和 Logo** -- 链接到 Customizer 或 Site Identity 设置
2. **更新您的课程表** -- 直接链接到 Classes 页面编辑器
3. **添加您的教练** -- 链接到 Trainers 页面编辑器
4. **设置您的联系方式** -- 链接到 Contact 页面编辑器
5. **预览您的网站** -- 链接到前端

每个步骤都直接链接到相关的页面或设置。无需在菜单中四处寻找。

### 简化控制面板 {#simplify-the-dashboard}

新客户不需要看到每一个 WordPress 菜单项。可以考虑：

- 隐藏与健身网站管理无关的菜单项（例如，如果未使用，可以隐藏 Comments）
- 重新排列菜单，将最常用的项目放在最前面
- 添加符合利基市场逻辑的自定义菜单标签（例如，将“Appearance”改为“您的工作室”）

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) 这个插件和主题管理器插件可以帮助控制客户能看到什么。

## 欢迎邮件序列 (Welcome Email Sequence) {#welcome-email-sequence}

一封欢迎邮件是不够的。您需要设置一个序列，引导客户度过他们的第一周：

### 邮件 1：欢迎（注册后立即发送） {#email-1-welcome-immediately-after-signup}

- 主题：“欢迎使用 FitSite —— 您的工作室网站已上线”
- 内容：登录链接、快速上手步骤、帮助资源链接
- 语气：兴奋、鼓励、与健身相关的

### 邮件 2：快速上手（第 1 天） {#email-2-quick-wins-day-1}

- 主题：“在您的 FitSite 上首先需要做的 3 件事”
- 内容：添加您的 Logo、更新首页主图、添加课程表
- 包含截图，明确指出点击的位置

### 邮件 3：打造专属风格（第 3 天） {#email-3-make-it-yours-day-3}

- 主题：“让您的健身网站脱颖而出”
- 内容：自定义颜色、添加教练照片、撰写工作室故事
- 链接到平台上的优秀健身网站示例

### 邮件 4：正式上线（第 7 天） {#email-4-go-live-day-7}

- 主题：“准备好将您的 FitSite 与世界分享了吗？”
- 内容：分享前需要核对的清单、如何连接自定义域名（如果使用 Growth/Pro 套餐）、社交分享技巧

:::tip 邮件自动化
使用 [Webhooks](/user-guide/integrations/webhooks) 或 [Zapier](/user-guide/integrations/zapier) 通过您的邮件营销平台触发这些邮件。这样可以为您提供更精细的时间控制，并允许您跟踪用户参与度。
:::

## 帮助资源 {#help-resources}

创建针对利基市场的帮助内容，回答健身房业主真正会问的问题：

### 知识库文章 (Knowledge Base Articles) {#knowledge-base-articles}

- “如何更新您的课程表”
- “添加和编辑教练资料”
- “更改工作室的 Logo 和颜色”
- “连接您自己的域名” (适用于 Growth/Pro 客户)
- “在网站上添加预订小组件”

为非技术用户撰写这些内容。使用截图。避免使用 WordPress 术语。

### 视频演示 (Video Walkthroughs) {#video-walkthroughs}

简短的（2-3 分钟）屏幕录制，展示以下内容：

- 首次登录和操作指南
- 编辑首页
- 更新课程表
- 添加新教练

这些不需要是制作精良的成品。清晰、有帮助、且与利基市场相关才是最重要的。

## 账户页面 (The Account Page) {#the-account-page}

Ultimate Multisite 包含一个面向客户的 [Account Page](/user-guide/client-management/account-page)，客户可以在此管理他们的订阅。请自定义此页面以：

- 显示他们当前的 FitSite 套餐
- 展示带有健身特定优势的升级选项
- 提供账单历史记录和发票下载
- 链接到帮助资源

## 衡量入驻成功率 {#measuring-onboarding-success}

跟踪这些指标，以了解您的入驻流程是否有效：

- **激活率 (Activation rate)**：多少比例的注册用户在第一周内实际定制了他们的网站？
- **第一周登录次数 (First-week logins)**：新客户在第一周内登录了多少次？
- **新客户支持工单量 (Support tickets from new customers)**：高数量意味着您的入驻流程存在漏洞
- **试用转付费转化率 (Trial-to-paid conversion)**：如果您提供试用，多少比例的客户完成了付费转化？

## FitSite 网络目前已构建的内容 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (子域名模式)
├── Ultimate Multisite (已配置 + 品牌化)
├── Platform Domain (fitsite.com + 通配符 SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + 附加订单)
├── Checkout Flow (利基市场定制，已测试)
├── Branding (登录页、控制面板、邮件、发票、营销网站)
├── 客户入驻流程 (Customer Onboarding)
│   ├── 快速上手控制面板小组件
│   ├── 简化的健身网站管理控制面板
│   ├── 4 封邮件欢迎序列
│   ├── 利基市场特定的知识库
│   ├── 视频演示
│   └── 定制化的账户页面
└── 准备进行定价策略 (下一课)
```

## 本课构建的内容 {#what-we-built-this-lesson}

- **带有快速上手小组件的引导式首次登录体验**
- **专注于健身网站管理任务的简化控制面板**
- **引导客户度过第一周的欢迎邮件序列**
- **为非技术健身房业主撰写的利基市场帮助资源**
- **用于跟踪和改进体验的入驻指标**

---

**下一课：** [第 9 课：盈利定价策略](lesson-9-pricing) —— 我们将完善定价策略，以最大化收入并最小化客户流失。
