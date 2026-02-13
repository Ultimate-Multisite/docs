---
title: 日出文件错误
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# 安装 Sunrise 文件时的错误

sunrise.php 文件是 WordPress 在启动时会查找的特殊文件。为了让 WordPress 能够检测到 sunrise.php 文件，它必须位于 **wp-content 文件夹** 内。

当你激活 Ultimate Multisite 并像截图中那样通过设置向导时，Ultimate Multisite 会尝试将我们的 sunrise.php 文件复制到 wp-content 文件夹。

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

大多数情况下，我们能够成功复制文件并且一切正常。然而，如果某些设置不正确（例如文件夹权限），你可能会遇到 Ultimate Multisite 无法复制文件的情况。

如果你阅读 Ultimo 给出的错误信息，你会看到正是发生了这种情况：**Sunrise copy failed**。

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

要解决这个问题，你可以简单地将 sunrise.php 文件从 wp-ultimo 插件文件夹复制出来并粘贴到你的 wp-content 文件夹。完成后，重新加载向导页面，检查就会通过。

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

WordPress 内置的 **Health Check 工具**（你可以通过主站点的 **admin panel > Tools > Health Check** 访问）可以让你知道文件夹权限是否设置为可能导致 WordPress 出现问题的值。

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
