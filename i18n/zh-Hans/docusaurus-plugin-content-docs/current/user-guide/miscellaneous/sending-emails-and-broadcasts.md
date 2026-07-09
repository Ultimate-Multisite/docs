---
title: 发送电子邮件和群发消息
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# 发送电子邮件和广播 (v2)

_**重要提示：本文涉及 Ultimate Multisite 版本 2.x。**_

Ultimate Multisite 自带一项功能，可让你通过向目标用户或一组用户发送电子邮件，以及在他们的管理 Dashboard 上发送通知来广播公告，从而与客户沟通。

## 使用广播向客户的 Dashboard 添加管理通知

使用 Ultimate Multisite 广播功能，你可以向用户的子站点管理 Dashboard 添加**管理通知**。

如果你需要发布系统维护公告，或向现有用户提供新产品或服务，这会非常有帮助。以下是管理通知在用户 Dashboard 上的显示效果。

<!-- 截图不可用：客户子站点 Dashboard 上显示的管理通知广播 -->

要开始创建管理通知，请转到你的网络管理 Dashboard，在 **Ultimate Multisite** 菜单下，你会找到 **Broadcasts** 选项。

![Ultimate Multisite 管理中的广播列表页面](/img/admin/broadcasts-list.png)

你也可以编辑现有广播：

![广播编辑界面](/img/admin/broadcast-edit.png)

在此页面，点击顶部的 **添加广播** 按钮。

这将打开“添加广播”模态窗口，你可以在其中选择要发送的广播类型。

继续选择 **Message**，然后点击 **Next Step** 按钮。

![已选择 Message 选项的添加广播模态窗口](/img/admin/broadcast-add-message.png)

下一个窗口会要求你选择 **目标客户** 或 **目标产品**。请注意，你可以选择多个用户或多个产品。

要搜索用户 Account 或产品，你需要在字段中开始输入关键词。

在 **消息类型** 字段下，你可以选择通知的颜色。这将突出显示消息的紧急程度。

然后你可以点击 **Next Step**。

![Message 广播的目标客户、目标产品和消息类型字段](/img/admin/broadcast-message-targets.png)

下一个窗口可让你开始编写消息，输入主题以及你希望广播给用户的内容/消息。

![撰写步骤中的广播消息主题和内容编辑器](/img/admin/broadcast-edit.png)

创建消息后，你可以点击 **Send** 按钮。

就这样。管理通知应会立即显示在用户的 Dashboard 上。

## 向客户发送电子邮件

使用 Ultimate Multisite 广播功能，你可以向用户发送电子邮件。你可以选择仅向特定用户发送电子邮件，或根据他们订阅的产品或套餐，定位特定用户组。

要开始电子邮件广播，请转到你的网络管理 Dashboard，在 Ultimate Multisite 菜单下，你会找到 Broadcast 选项。

![用作电子邮件广播起点的广播列表页面](/img/admin/broadcasts-list.png)

在此页面，点击顶部的 **添加广播** 按钮。

这将打开“添加广播”模态窗口，你可以在其中选择要发送的广播类型。继续选择 **Email**，然后点击 **Next Step** 按钮。

![已选择 Email 选项的添加广播模态窗口](/img/admin/broadcast-add-email.png)

下一个窗口会要求你选择 **目标客户** 或 **Target produc** t。请注意，你可以选择多个用户或多个产品。

要搜索用户 Account 或产品，你需要在字段中开始输入关键词。

选择目标受众后，你可以点击 **Next Step**。

![Email 广播的目标客户和目标产品选择](/img/admin/broadcast-email-targets.png)

下一个窗口可让你开始编写电子邮件，输入主题以及你希望发送给用户的内容/消息。

<!-- 截图不可用：撰写步骤中的电子邮件广播主题和内容编辑器 -->

创建消息后，你可以点击 **Send** 按钮。

这就是使用广播功能向最终用户发送电子邮件的简单方式。

## 系统电子邮件

Ultimate Multisite 中的系统电子邮件是系统在注册、付款、域名映射等特定操作后发送的**自动通知**。这些电子邮件可以从 Ultimate Multisite 设置中编辑或修改。它还自带一项功能，可让你重置并从另一个 Ultimate Multisite 安装导入现有设置。

### 重置和导入

新的 Ultimate Multisite 版本以及附加组件会不时注册新的电子邮件。

为防止冲突和其他问题，**我们不会自动将新的电子邮件模板作为系统电子邮件添加到你的安装中**，除非它们对某项功能的正确运行至关重要。

不过，超级管理员和代理可以通过导入工具导入这些新注册的电子邮件。该过程会使用新电子邮件模板的内容和配置创建一封新的系统电子邮件，让超级管理员可以进行任何所需修改，或保持原样。

#### 如何导入系统电子邮件

转到你的 Ultimate Multisite 设置页面，并前往 **Emails** 选项卡。

![Ultimate Multisite 设置中的 Emails 选项卡，显示 System Emails 部分](/img/config/settings-emails-tab.png)

然后，在侧边栏上，点击 **Customize System Emails** 按钮。

<!-- 截图不可用：System Emails 侧边栏面板上的 Customize System Emails 按钮 -->

在 System Emails 页面上，你会在顶部看到 **Reset & Import** 操作按钮。点击该按钮应会打开导入和重置模态窗口。

![System Emails 管理页面上的 Reset 或 Import 操作按钮](/img/admin/system-emails-reset-import.png)

然后，你可以切换 Import Emails 选项，查看哪些系统电子邮件可供导入。

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### 重置系统电子邮件

有时，你会发现你对某个电子邮件模板所做的更改已经不再适合你，并且你希望将其重置为其**默认状态**。

在这种情况下，你有两个选择：你可以直接删除系统电子邮件，然后再将其导入回来（使用上面的说明）——这会清除发送指标和其他内容，因此这种方法最不推荐。

或者，你可以使用**重置和导入工具**来重置该电子邮件模板。

要重置电子邮件模板，你可以按照上面的步骤操作，直到进入重置和导入工具，然后开启**重置**选项，并选择你想要重置回默认内容的电子邮件。

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
