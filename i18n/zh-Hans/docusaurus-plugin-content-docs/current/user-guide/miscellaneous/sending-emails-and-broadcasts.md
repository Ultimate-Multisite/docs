---
title: 发送电子邮件和广播
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# 发送电子邮件和广播 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

Ultimate Multisite 提供了一项功能，允许您通过向目标用户或用户组发送电子邮件，以及在他们的管理仪表盘上发送通知来广播公告，从而与客户沟通。

## 使用广播向客户仪表盘添加管理员通知

使用 Ultimate Multisite 的广播功能，您可以向用户的子站点管理员仪表盘添加 **管理员通知**。

如果您需要发布系统维护或向现有用户提供新产品或服务等公告，这将非常有帮助。管理员通知在用户仪表盘上的显示如下。

![broadcast account](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UhCB0zV12U.png)

要开始管理员通知，请转到您的网络管理员仪表盘，在 **Ultimate Multisite** 菜单下，您会找到 **Broadcasts** 选项。

![broadcast admin](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UBLRopntNQ.png)

在此页面中，点击顶部的 **Add Broadcast** 按钮。

这将弹出添加广播的模态窗口，您可以在其中选择要发送的广播类型。

继续，选择 **Message**，然后点击 **Next Step** 按钮。

![broadcast admin modal](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-f3MiyZ1DgU.png)

下一个窗口会询问您 **Target customer** 或 **Target product**。请注意，您可以选择多个用户或多个产品。

要搜索用户账户或产品，您需要在字段中开始输入关键词。

在 **Message type** 字段下，您可以选择通知的颜色，以突出信息的紧急性。

然后，点击 **Next Step**。

![broadcast admin add new](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vfXM5mcBCc.png)

下一个窗口是您可以开始撰写消息的地方，输入主题和您希望广播给用户的内容/消息。

![broadcast admin content](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i2gpqKv4UG.png)

创建完消息后，您可以点击 **Send** 按钮。

就是这样。管理员通知应立即显示在用户的仪表盘上。

## 向客户发送电子邮件

使用 Ultimate Multisite 的广播功能，您可以向用户发送电子邮件。您可以选择仅向特定用户发送，或根据他们订阅的产品或计划定位特定用户组。

要开始电子邮件广播，请转到您的网络管理员仪表盘，在 Ultimate Multisite 菜单下，您会找到 Broadcast 选项。

![email admin](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UBLRopntNQ.png)

在此页面中，点击顶部的 **Add broadcast** 按钮。

这将弹出添加广播的模态窗口，您可以在其中选择要发送的广播类型。继续，选择 **Email**，然后点击 **Next Step** 按钮。

![email admin modal](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RKZSgug4Hl.png)

下一个窗口会询问您 **Target customer** 或 **Target produc** t。请注意，您可以选择多个用户或多个产品。

要搜索用户账户或产品，您需要在字段中开始输入关键词。

一旦选择了目标受众，您可以点击 **Next Step**。

![email admin add new](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-X5ZMvVYD8Q.png)

下一个窗口是您可以开始撰写电子邮件的地方，输入主题和您希望发送给用户的内容/消息。

![email admin content](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-us34QLYBi4.png)

创建完消息后，您可以点击 **Send** 按钮。

这就是使用广播功能向最终用户发送电子邮件的简单方法。

## 系统电子邮件

Ultimate Multisite 中的系统电子邮件是系统在注册、付款、域名映射等特定操作后发送的 **自动通知**。这些电子邮件可以在 Ultimate Multisite 设置中编辑或修改。它还提供了一个功能，允许您从另一台 Ultimate Multisite 安装中重置并导入现有设置。

### 重置与导入

新的 Ultimate Multisite 版本以及插件会不时注册新的电子邮件。

为防止冲突和其他问题，**除非这些新电子邮件模板对某个功能的正常运行至关重要，否则我们不会在您的安装中自动将其添加为系统电子邮件**。

然而，超级管理员和代理可以通过导入工具导入这些新注册的电子邮件。该过程将创建一个具有新电子邮件模板内容和配置的新系统电子邮件，允许超级管理员进行任何想要的修改或保持不变。

#### 如何导入系统电子邮件

转到您的 Ultimate Multisite 设置页面，进入 **Emails** 选项卡。

![...](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yIQvxZcJqk.png)

然后，在侧边栏中，点击 **Customize System Emails** 按钮。

![...](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mRSIFOG7eH.png)

在系统电子邮件页面，您会在顶部看到 **Reset & Import** 操作按钮。点击该按钮应会打开导入和重置模态窗口。

![...](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UWDXL6Jf2d.png)

然后，您可以切换 Import Emails 选项，以查看哪些系统电子邮件可供导入。

![...](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mGER3jSjMu.png)

#### 重置系统电子邮件

有时，您会意识到对某个电子邮件模板所做的更改不再起作用，并希望将其重置为 **默认状态**。

在这种情况下，您有两个选择：您可以简单地删除系统电子邮件并重新导入（使用上述说明）——这将清除发送指标和其他信息，使此方法最不受欢迎。

或者，您可以使用 **Reset & Import** 工具来重置该电子邮件模板。

要重置电子邮件模板，您可以按照上述步骤操作，直到到达 Reset & Import 工具，然后切换 **Reset** 选项，选择要重置为默认内容的电子邮件。

![...](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-SMHJQAZWQM.png)
