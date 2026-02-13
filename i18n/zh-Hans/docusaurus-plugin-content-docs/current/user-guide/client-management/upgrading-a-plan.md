---
title: 升级计划
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# 升级计划 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

您的客户可以随时升级他们的计划。他们可以升级到另一个计划，或者购买您在网络上提供的任何额外服务或套餐。

在本教程中，我们将介绍他们如何升级计划以及升级过程完成后会发生什么。

要升级他们的计划，您的客户应访问他们的仪表盘并转到 **Account**（账户）页面。

![客户仪表盘，带有账户页面链接](/img/admin/memberships-list.png)

在账户页面，他们将看到当前的会员资格和关联的计划。要升级到另一个计划，他们必须点击 **Your Membership**（您的会员）部分右上角的 **Change**（更改）按钮。

![您的会员部分，带有更改按钮](/img/admin/memberships-list.png)

他们将被重定向到结账表单，所有可用计划将显示在此处。

他们还可以查看 **当前计划可用的服务和套餐**，以便他们仅想购买特定服务或套餐（例如我们此处示例中的无限访问或磁盘空间），而不升级计划。

![结账表单，显示可用计划和套餐](/img/admin/memberships-list.png)

在他们选择想要购买的产品后，他们将看到现在需要支付的金额（不包括任何现有信用）以及下一个计费日期将收取的金额。

通常，如果产品是另一个计划，并且付款将在会员费用之间进行，他们将获得第一份计划支付金额的信用。

![升级付款摘要，显示信用和下次计费金额](/img/admin/memberships-list.png)

如果他们选择的计划或套餐不会改变当前订阅的任何内容，他们将看到一条解释该情况的消息。

![所选计划不更改订阅时的消息](/img/admin/memberships-list.png)

结账完成后，新产品将被添加到您的客户账户，并且新产品的所有限制或功能将立即添加到其中：访问量、磁盘空间、帖子等...

## 

## 

## 升级与降级路径

在每个产品上，您将拥有一个 **Up & Downgrades**（升级与降级）选项卡。该选项卡上的第一个选项是名为 **Plan Group**（计划组）的字段。

**Plan groups**（计划组）是让 Ultimate Multisite 知道某些计划属于同一“家族”的方式，因此应使用它们来构建升级/降级路径选项。

![升级与降级选项卡，带有 Plan Group 字段](/img/config/product-upgrades.png)

例如，您有一个 **Free plan**（免费计划）、一个 **Basic Plan**（基础计划）和一个 **Premium Plan**（高级计划）。您希望订阅 **Free Plan** 的用户只能升级到 **Premium Plan**，并且不希望他们看到“Basic Plan”作为升级选项。您只需为免费计划和高级计划分配相同的计划组名称，如下图所示。

![免费计划，已分配 High End 计划组](/img/config/product-upgrades.png)

![高级计划，已分配 High End 计划组](/img/config/product-upgrades.png)

这应该告诉 Ultimate Multisite，网络中有一个名为 **High End** 的计划“家族”。在提供升级或降级时，只有同一家族的计划会被呈现为用户的选项。
