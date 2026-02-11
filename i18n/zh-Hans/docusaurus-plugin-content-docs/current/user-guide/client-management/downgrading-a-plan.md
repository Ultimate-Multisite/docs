---
title: 降级计划
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# 降级计划 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

降级计划或订阅是客户可能会执行的常见操作，如果他们预算有限或决定不需要太多资源来运行其子站点。

## 如何降级计划

客户可以随时通过登录其子站点管理仪表盘并在其账户页面下点击 **Change** 来降级其计划。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sprLyB2iMU.png)

点击 **Change** 按钮后，用户/客户将被重定向到结账页面，在那里他们可以选择想要更改订阅的计划。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aTnhJPFVFh.png)

在此示例中，我们将计划从 **Premium** 降级为 **Free**。

要继续，用户只需点击 **Complete Checkout** 按钮。随后会将他们带回账户页面，显示关于会员待处理更改的消息。更改将在客户的 **下一个计费周期** 生效。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E2qcjxzDDG.png)

### 用户降级计划时会发生什么

需要注意的是，降级计划不会改变用户子站点中现有的配置。

它不会自动更改站点模板，因为更改站点模板会完全擦除并重置子站点。这样做是为了避免不必要的数据丢失。因此，磁盘空间、主题、插件等将保持不变，除非是帖子。

我们理解您主要关注的是每个计划下设置的限制和配额，但我们必须考虑如果删除或更改其任何配置会对用户子站点造成的损害。

对于超过计划设置限制的帖子，您有三种不同的选项：**保持帖子原样** *,* **将帖子移至回收站** *,* or **将帖子移至草稿** *.* 您可以在 Ultimate Multisite 设置中配置此项。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztHV8cZDG0.png)

### 付款会发生什么

在 2.0 版本中，付款不再需要按比例进行任何调整。

这是因为系统会等待现有会员 **完成其计费周期之前**，然后新计划/会员才会生效。新会员的新的计费金额将自动应用并在 **下一个计费周期** 收取。
