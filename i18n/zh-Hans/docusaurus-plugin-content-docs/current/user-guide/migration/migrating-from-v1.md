---
title: 从 V1 迁移
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# 从 V1 迁移

## Ultimate Multisite 已经从其原始的 1.x 版本系列切换到 2.x 版本系列。

Ultimate Multisite 2.0 及以上版本是代码库的完整重写，这意味着旧版本与新版本之间几乎没有共享内容。因此，在从 1.x 升级到 2.x 时，您的数据需要迁移到新版本能够理解的格式。

幸运的是，Ultimate Multisite 2.0+ **附带了一个迁移器**，内置于核心，能够检测旧版本的数据并将其转换为新格式。此迁移发生在 2.0+ 版本的 **Setup Wizard** 期间。

本节内容涵盖迁移器的工作原理、失败时的处理方法以及在此过程中可能出现的问题的排查方法。

_**重要提示：在开始从 1.x 升级到 2.0 之前，请确保已备份您的站点数据库**_

## 第一步

第一步是下载插件 .zip 文件，并在您的网络管理员仪表盘上安装 2.0 版本。

在您 [安装并激活 2.0 版本](../getting-started/installing-ultimate-multisite.md) 后，系统将自动检测到您的 Multisite 正在运行旧版，并且您将在插件页面顶部看到此消息。

_**注意：**如果您在 Multisite 上安装了 Ultimate Multisite 1.x，您将有机会用刚刚下载的版本替换插件。请继续点击 **Replace current with uploaded**。_

![](https://support.delta.nextpress.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2aff9b312e5b7ec95c9e2c5355480d4aa7258fd/Migration.png)

下一页将告诉您与版本 1.x 一起安装的旧版插件。它会说明您使用的版本是否与 2.0 兼容，或者在迁移后是否需要安装升级版插件。

![Message on the top of the plugins page: Thanks for updating to Ultimate Multisite version 2.0. There's a link below it that leads the user to the version upgrader. Then, there's a list of add-ons that need to be updated.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

当您准备继续时，可以点击按钮 **Visit the Installer to finish the upgrade**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

随后它会将您带到安装向导页面，并显示一些欢迎信息。您只需点击 **Get Started** 进入下一页。

![Setup Wizard's welcoming page. Framed in red at the bottom-right corner: Get Started button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

点击 **Get Started** 后，它会重定向到 Pre-install Checks_._。这将向您展示系统信息和 WordPress 安装，并告诉您它是否满足 **Ultimate Multisite's requirements**。

![Pre-install Checks page showing confirmation messages that the installation meets Ultimate Multisite's requirements. Framed on red, on the bottom-right corner: Go to the next step button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

下一步是输入您的 Ultimate Multisite 许可证密钥并激活插件。这将确保所有功能，包括插件，都可在您的站点上使用。

![License activation page listing what the support includes and what it doesn't. There's a box on the bottom to insert the plugin's license. Framed in red, on the bottom-right corner: Agree and activate button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

输入密钥后，点击 **Agree & Activate**。

在许可证激活后，您可以通过点击下一页的 **Install** 开始实际安装。这将自动创建 2.0 运行所需的必要文件和数据库。

![Installation page showing what will be updated in order to Ultimate Multisite to function. Framed in red, on the bottom-right: Install button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## 现在，进行迁移

迁移器具有内置的安全功能，它会检查整个 multisite，确保所有 Ultimate Multisite 数据可以无问题迁移。点击 **Run Check** 按钮开始流程。

![Migration page explaining it will run a check to see if all your data from v1 can be converted. Framed in red, on the bottom-right corner: Run check button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

检查完成后，您会得到两种结果：**出现错误** 或 **无错误**。

### 出现错误

如果出现错误信息，您需要联系支持团队，让他们协助您修复错误。请在创建工单时**提供错误日志**。您可以下载日志，或者点击链接“contact our support team”。它会在页面右侧打开帮助窗口，并预填字段，其中包含错误日志。

_**由于系统检测到错误，您将无法继续迁移到 2.0 版本。您可以回滚到 1.x 以继续运行网络，直到错误修复。**_

### 无错误

如果系统未发现错误，您将看到成功信息和底部的 **Migrate** 按钮，允许您继续迁移。在此页面，您将被提醒在继续之前备份数据库，我们强烈建议您这样做。若已备份，请点击 **Migrate**。

![Migration page showing a success message and a recommendation to create a backup.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![Framed in red, on the bottom-right corner: Migrate button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

这就是全部！

您可以继续运行 Wizard 向导来更新网络上的徽标和其他项目，或者开始浏览 Ultimate Multisite 2.0 菜单及其新界面。请继续，玩得开心。
