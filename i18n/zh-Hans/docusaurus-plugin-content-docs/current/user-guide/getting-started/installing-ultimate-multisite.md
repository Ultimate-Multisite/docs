---
title: 安装 Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# 安装 Ultimate Multisite {#installing-ultimate-multisite}

:::note
本教程假设您已经安装并配置了 WordPress 多站点。要了解如何操作，请查看 WP Beginner 的 [这篇教程](https://www.wpbeginner.com/glossary/multisite/)。
:::

## 安装插件 {#installing-the-plugin}

Ultimate Multisite 可在 [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) 上免费下载。

从您的 **Network Admin Dashboard**（网络管理员仪表板）进入 **Plugins → Add New Plugin**（插件 → 添加新插件）。

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

搜索 **"Ultimate Multisite"**（加上引号以进行精确匹配），它将作为第一个结果出现。点击 **Install Now**（现在安装）。

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

安装完成后，点击 **Network Activate**（网络激活）以在整个网络中激活该插件。

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

激活后，您将被自动重定向到设置向导。

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## 设置向导 {#setup-wizard}

设置向导将引导您在大约 10 分钟内完成 Ultimate Multisite 的配置。

### 欢迎 {#welcome}

点击 **Get Started**（开始使用）以开始。

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### 安装前检查 {#pre-install-checks}

此步骤将检查您的系统信息和 WordPress 安装，以确保其满足 Ultimate Multisite 的要求。如果一切正常，请点击 **Go to the Next Step**（进入下一步）。

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
如果 Ultimate Multisite 已安装但**尚未网络激活**——例如，如果您在网络插件屏幕上点击了 **Activate**（单站点激活）而不是 **Network Activate**（网络激活）——安装前检查步骤将检测到这一点并显示一个 **Network Activate** 按钮。

点击 **Network Activate** 会自动在整个多站点网络中激活该插件。一旦激活，向导将继续正常进行到安装步骤。您无需离开向导来修复激活状态。
:::

### 安装 {#installation}

安装程序将创建必要的数据库表并安装 Ultimate Multisite 运行所需的 `sunrise.php` 文件。点击 **Install**（安装）继续。

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### 您的公司 {#your-company}

填写您的公司信息并设置默认货币。这些信息将在您的 WaaS 平台中广泛使用。完成后点击 **Continue**（继续）。

![Your Company configuration step](/img/installation/wizard-your-company.png)

### 默认内容 {#default-content}

此步骤允许您安装预定义的模板、产品和其他初始内容。这是熟悉 Ultimate Multisite 功能的好方法。点击 **Install**（安装）以添加默认内容，或者如果您希望从头开始，可以跳过此步骤。

![Default content installation step](/img/installation/wizard-default-content.png)

### 推荐插件 {#recommended-plugins}

可选地安装推荐的配套插件。点击 **Install**（安装）以添加它们，或跳过以继续。

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### 准备就绪！ {#ready}

就是这样！您的 Ultimate Multisite 安装已完成。您现在可以从 **Network Admin Dashboard**（网络管理员仪表板）开始构建您的 Website as a Service（网站即服务）平台。

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

放手去享受吧！
