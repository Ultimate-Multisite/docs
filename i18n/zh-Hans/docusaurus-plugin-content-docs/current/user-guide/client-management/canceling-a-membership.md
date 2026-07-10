---
title: 取消会员资格
sidebar_position: 2
_i18n_hash: a34353ea4630d9815bde4ca7bcfeb95d
---
# 取消 Membership (v2) {#canceling-a-membership-v2}

_**重要提示：本文适用于 Ultimate Multisite 版本 2.x。**_

在客户侧取消 membership 非常简单。

如果你的用户想要取消他们的 membership，应先访问他们的 ****Account**** 页面。

在那里，他们应该点击前往 **危险区域**，然后点击 **Delete Account**。

![带有 Delete Account 按钮的 Account 页面危险区域](/img/account-page/danger-zone.png)

会打开一个模块，要求他们确认。他们应开启 **Confirm Account Deletion** 选项，并点击 **Delete Account**。

![Confirm Account Deletion 对话框](/img/account-page/delete-account-confirm.png)

这会将他们从站点登出，并取消他们在你网络中的 membership，同时从你的网络中删除他们的站点。

![账号删除后已登出](/img/account-page/logged-out-after-delete.png)

![Membership 已取消确认](/img/account-page/membership-canceled.png)

**重要：**请注意，此操作不会将客户从你的网络中移除，因为一个客户可以拥有多个 membership，也可以没有关联的 membership。

![取消后客户仍存在于网络中](/img/admin/customer-after-cancel.png)

![没有有效 memberships 的客户](/img/admin/memberships-customer-empty.png)
