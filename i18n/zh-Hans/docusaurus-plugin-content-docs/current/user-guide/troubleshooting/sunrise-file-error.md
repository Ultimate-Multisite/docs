---
title: Sunrise 文件错误
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# 安装 Sunrise 文件时出错

sunrise.php 文件是 WordPress 在自举启动时会查找的一个特殊文件。为了让 WordPress 能够检测到 sunrise.php 文件，它需要位于 **wp-content 文件夹** 内。

当你激活 Ultimate Multisite 并按照截图中那样完成设置向导时，Ultimate Multisite 会尝试将我们的 sunrise.php 文件复制到 wp-content 文件夹。

<!-- 截图不可用：Setup wizard 页面显示 sunrise.php 安装步骤 -->

大多数情况下，我们能够成功复制该文件，一切都会正常工作。不过，如果某些内容没有正确设置（例如文件夹权限），你可能会遇到 Ultimate Multisite 无法复制该文件的情况。

如果你阅读 Ultimo 给出的错误消息，就会看到这里发生的正是这种情况：**Sunrise copy failed**。

<!-- 截图不可用：错误消息显示 Sunrise copy failed -->

要修复这个问题，你只需复制 wp-ultimo plugin 文件夹内的 sunrise.php 文件，并将其粘贴到你的 wp-content 文件夹中。完成后，重新加载向导页面，检查应该就会通过。

<!-- 截图不可用：文件管理器显示 wp-ultimo plugin 文件夹内的 sunrise.php --> 无论如何，这可能需要对你的文件夹权限进行一次常规检查，以避免将来出现问题（不仅是 Ultimate Multisite，也包括其他 plugins 和 themes）。

WordPress 自带的 **Health Check tool**（你可以通过主站点的 **admin panel > Tools > Health Check** 访问）能够告诉你文件夹权限是否被设置为可能会导致 WordPress 出现问题的值。

<!-- 截图不可用：WordPress Health Check tool 显示文件夹权限状态 -->
