---
title: 通过 Zapier 注册 Account
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# 事件：通过 Zapier 注册 Account {#event-register-an-account-via-zapier}

在文章 [将 Ultimate Multisite 与 Zapier 集成](zapier.md) 中，我们讨论了如何使用 Zapier 根据触发器和事件在 Ultimate Multisite 中执行不同操作。在本文中，我们将展示如何集成第三方应用程序。我们将使用 Google Sheets 作为数据来源，并将信息发送到 Ultimate Multisite 以注册 Account。

在连接 Zapier 之前，请前往 **Ultimate Multisite > 设置 > API & Webhooks**，并确认 API 已启用。当 Zapier 要求提供 Ultimate Multisite Account 凭据时，请从此屏幕复制 API Key 和 API Secret。

![包含 API Key、API Secret 和启用 API 选项的 API 和 Webhooks 设置](/img/admin/settings-api-webhooks.png)

首先，你需要在 Google Drive 下创建一个 **Google Sheet**。请确保正确定义每一列，以便之后可以轻松映射数据。

创建 Google sheet 后，你可以登录你的 Zapier Account 并开始创建一个 zap。

在 **"App 事件"** 的搜索字段下选择 **"Google Sheets"**


然后在 "**事件** " 字段中选择 "**新电子表格行** "，并点击 "**继续** "

下一步会要求你选择保存 **Google Sheet** 的 **Google Account**。因此请确保指定了正确的 google Account。


在 **"设置触发器** " 下，你需要选择并指定将要使用的 google 电子表格和工作表，数据将来自其中。请继续填写这些内容并点击 "**继续** "

接下来是 "**测试你的触发器** "，以确保你的 google sheet 已正确连接。

如果测试成功，你应该会看到结果显示来自电子表格的一些值。点击 "**继续** " 以继续。

下一步是设置第二个操作，该操作将在 Ultimate Multisite 中创建或注册 Account。在搜索字段中选择 "**Ultimate Multisite(2.0.2)** "


在 "**事件** " 字段下，选择 "**在 Ultimate Multisite 中注册 Account** "，然后点击 "**继续** " 按钮。

在 "**设置操作** " 下，你会看到可用于客户数据、membership、产品等的不同字段。你可以映射 google sheet 下的值，并将它们分配到应填充的正确字段，如下面的截图所示。


映射这些值后，你可以测试该操作。
