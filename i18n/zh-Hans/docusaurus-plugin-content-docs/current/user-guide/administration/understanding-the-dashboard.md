---
title: 了解仪表盘
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# 了解 Ultimate Multisite 仪表盘

在深入更高级的配置选项和 Ultimate Multisite 的运营方面之前，让我们先来看看仪表盘。

与许多 WordPress 插件类似，Ultimate Multisite 在网络级别创建了一个名为 **Ultimate Multisite** 的菜单项，并在其下方添加了多个子菜单项。

## 网络仪表盘小工具

Ultimate Multisite 在网络级别仪表盘中注入了一些有用的小工具。该仪表盘可通过 **My Sites → Network Admin → Dashboard** 访问。小工具旨在为网络管理员提供便捷的访问信息和常用操作。

![网络仪表盘与 Ultimate Multisite 小工具](/img/admin/network-dashboard-full.png)

### 第一步

![第一步小工具](/img/admin/network-dashboard-first-steps.png)

此小工具会在全新安装的 Ultimate Multisite 上出现，并提醒网络管理员完成额外任务，例如配置支付方式和创建测试账户。

### 摘要

![摘要小工具](/img/admin/network-dashboard-summary.png)

摘要小工具报告当天的注册人数及其收入。MRR（每月经常性收入）显示了拥有产生收入会员的客户的预计总额。

### 活动流

![活动流小工具](/img/admin/network-dashboard-activity-stream.png)

此小工具报告 Ultimate Multisite 中的事件。事件包括注册、取消、站点创建、删除以及其他活动。

请参阅文档中的事件部分以获取更详细的说明。

### 即时

![即时小工具](/img/admin/network-dashboard-right-now.png)

此实用小工具显示网络中用户和站点的简短摘要。

顶部的快捷方式可一键访问创建新站点或用户。

### 新闻与讨论

![新闻与讨论小工具](/img/admin/network-dashboard-news.png)

此小工具获取并显示最新的 Ultimate Multisite 新闻。

请关注此小工具，以获取关于更新、关键错误和安全修复的信息。

## Ultimate Multisite 仪表盘

当网络级别仪表盘呈现网络的整体信息时，Ultimate Multisite 仪表盘（位于 Ultimate Multisite 菜单的顶层）呈现关于该服务的信息。

![Ultimate Multisite 仪表盘](/img/admin/um-dashboard-top.png)

### 每月经常性收入增长

MRR（每月经常性收入）图表显示了12个月日历期间的每月收入细分。

![MRR 增长图表](/img/admin/um-dashboard-mrr.png)

新增收入以蓝色显示，取消以红色显示。

### 日期范围支持

根据客户数量和活动，统计数据可能会变得令人不堪重负。

仪表盘内置的日期范围支持使网络管理员能够仅关注所需的信息和时间段。

![日期范围选择器和统计](/img/admin/um-dashboard-date-range.png)

日期范围决定了直接位于其下方的小工具所显示信息的时间段，包括收入、新会员、按国家注册、按表单注册以及最常访问的网站。

![仪表盘统计小工具](/img/admin/um-dashboard-stats.png)

:::tip
要使 **最常访问的网站** 小工具正常工作，请在 **Ultimate Multisite → Settings → Sites → 启用访问限制和计数** 中启用访问计数。
:::
