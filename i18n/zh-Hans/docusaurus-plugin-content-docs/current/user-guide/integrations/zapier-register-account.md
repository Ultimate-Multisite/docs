---
title: 通过 Zapier 注册账户
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# 事件：通过 Zapier 注册账户

在文章 [Integrating Ultimate Multisite with Zapier](zapier.md) 中，我们讨论了如何使用 Zapier 根据触发器和事件在 Ultimate Multisite 内执行不同的操作。在本文中，我们将展示如何集成第三方应用程序。我们将使用 Google Sheets 作为数据来源，并将信息发送到 Ultimate Multisite 以注册账户。

首先，您需要在 Google Drive 下创建一个 **Google Sheet**。请确保正确定义每一列，以便以后轻松映射数据。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)创建 Google Sheet 后，您可以登录 Zapier 账户并开始创建 zap。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)在搜索字段 **“App event”** 下选择 **“Google Sheets”**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

然后在 **“Event”** 字段中选择 **“New spreadsheet row”** 并点击 **“Continue”**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)下一步会要求您选择保存 **Google Sheet** 的 **Google Account**。请确保指定了正确的 Google 账户。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)

在 **“Set up trigger”** 下，您需要选择并指定将用于获取数据的 Google Spreadsheet 和工作表。请填写相关信息并点击 **“Continue”**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)接下来是 **“test your trigger”**，以确保您的 Google Sheet 已正确连接。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)如果测试成功，您应该会看到结果显示来自电子表格的一些值。点击 **“Continue”** 继续。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)下一步是设置第二个操作，以在 Ultimate Multisite 中创建或注册账户。在搜索字段中选择 **“Ultimate Multisite(2.0.2)”**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

在 **“Event”** 字段中，选择 **“Register an Account in Ultimate Multisite”**，然后点击 **“Continue”** 按钮。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)在 **“Set up an action”** 下，您将看到可用于客户数据、会员资格、产品等的不同字段。您可以将 Google Sheet 中的值映射并分配到相应字段，如下图所示。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)映射完值后，您可以测试该操作。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
