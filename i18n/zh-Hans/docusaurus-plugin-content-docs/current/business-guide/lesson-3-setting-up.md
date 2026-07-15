---
title: 第三课：设置你的网络
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# 第 3 课：设置您的网络

是时候开始搭建了。在本课中，您将安装 Ultimate Multisite 并配置 FitSite 网络的底层基础。这里的每一个决策都是以健身行业为考量的。

## 回顾进度 {#where-we-left-off}

我们确定了健身工作室作为我们的细分市场，并验证了其可行性。现在，我们将这个想法转化为一个可运行的平台。

## 选择您的主机服务商 {#choosing-your-hosting}

对于一个细分市场平台来说，您的主机选择比为单个网站选择主机更重要。您不是在托管一个网站——您是在托管一个将发展到数十个甚至数百个网站的网络。

### 需要关注的方面 {#what-to-look-for}

- **WordPress Multisite 支持**：并非所有主机都能很好地处理 multisite
- **通配符 SSL (Wildcard SSL)**：对于基于子域名的网络至关重要
- **可扩展的资源**：您需要有足够的空间来成长，而无需迁移
- **Ultimate Multisite 集成**：自动化的域名映射和 SSL 配置能节省大量运营精力

### 推荐方法 {#recommended-approach}

请从 [兼容提供商](/user-guide/host-integrations/closte) 列表中选择一家主机服务商。这些服务商都经过 Ultimate Multisite 的测试，并提供了您进行域名映射和 SSL 自动化的所需集成。

对于 FitSite，我们将使用子域名配置。这意味着客户网站最初会显示为 `studioname.fitsite.com`，之后他们可以选择映射自己的域名。

## 安装 WordPress Multisite {#installing-wordpress-multisite}

如果您还没有安装 WordPress Multisite：

1. 在您的主机服务商处安装 WordPress
2. 遵循 [如何安装 WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) 指南
3. 当系统提示时，选择 **子域名 (subdomain)** 配置

:::tip 为什么选择子域名？
子域名会为每个客户网站提供其独立的地址（例如 `studio.fitsite.com`），而不是路径（例如 `fitsite.com/studio`）。这对您的客户来说更专业，并且可以避免永久链接冲突。有关详细的比较，请参阅 [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101)。
:::

## 安装 Ultimate Multisite {#installing-ultimate-multisite}

请遵循 [安装 Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) 指南，完成以下步骤：

1. 网络范围内上传并激活插件
2. 运行 [设置向导](/user-guide/getting-started/multisite-setup-wizard)

在设置向导过程中，请始终记住 FitSite 的细分市场定位：

- **货币 (Currency)**：设置为您的健身工作室客户使用的货币
- **公司名称 (Company name)**："FitSite"（或您选择的品牌名称）
- **公司 Logo (Company logo)**：上传您的品牌 Logo——这会出现在发票和电子邮件中

## 为健身细分市场配置设置 {#configuring-for-the-fitness-niche}

安装了 Ultimate Multisite 后，请进行以下细分市场特定的配置选择：

### 通用设置 (General Settings) {#general-settings}

导航到 **Ultimate Multisite > Settings** 并配置：

- **站点名称 (Site name)**：FitSite
- **默认角色 (Default role)**：管理员 (Administrator)——健身工作室所有者需要对其网站内容拥有完全控制权
- **注册 (Registration)**：启用用户注册，以便工作室所有者可以自行注册

### 电子邮件配置 (Email Configuration) {#email-configuration}

您的系统邮件应该使用您细分市场的语言。导航到 **Ultimate Multisite > Settings > Emails** 并自定义：

- 将通用的“您的新网站”语言替换为健身相关的措辞
- 欢迎邮件主题示例：“您的健身工作室网站已准备就绪”
- 欢迎邮件正文示例：提及他们的工作室、课程以及如何开始使用他们的健身网站

我们将在第 8 课（客户入驻）中进一步完善这些内容，但现在设定基调，可以确保即使是早期的测试注册也能感受到细分市场的专属感。

### 域名配置 (Domain Configuration) {#domain-configuration}

如果使用了兼容的主机服务商，请现在配置域名映射：

1. 导航到 **Ultimate Multisite > Settings > Domain Mapping**
2. 遵循您特定主机的集成指南
3. 测试新的子站点是否能自动获取 SSL

这确保了当我们下一课开始创建模板和测试站点时，所有流程都能顺畅运行。

## FitSite 网络现状 {#the-fitsite-network-so-far}

在本课结束时，您已经拥有了以下内容：

```
FitSite Network
├── WordPress Multisite (子域名模式)
├── Ultimate Multisite (已安装并配置)
├── 配备通配符 SSL 的主机
├── 已配置的域名映射
├── 细分市场特定的邮件模板（初始）
└── 已准备好进行网站模板搭建（下一课）
```

## 本课所学内容 {#what-we-built-this-lesson}

- **一个可运行的 WordPress Multisite** 安装，并处于子域名模式
- **Ultimate Multisite 已安装**，并配置了 FitSite 品牌标识
- **为增长的网络设置了主机和 SSL**
- **为您的主机服务商配置了域名映射**
- **从第一天起就确立了细分市场特定的邮件基调**

---

**下一课：** [第 4 课：构建细分市场模板](lesson-4-templates) —— 我们将创建健身工作室所有者真正想使用的网站模板。
