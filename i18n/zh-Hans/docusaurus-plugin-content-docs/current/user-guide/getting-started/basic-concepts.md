---
title: 基本概念
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# 基本概念

对于新的 WordPress Multisite 用户以及刚开始使用 Ultimate Multisite 的人来说，起初可能会遇到许多新的词汇和短语。学习它们是一项重要任务，因为你需要了解整个平台及其工作方式。

在本文中，我们将尝试定义并解释 WordPress 中的一些关键概念。其中一些更适用于用户，另一些更适用于开发者，亦有一些适用于两者。

## WordPress Multisite

WordPress **Multisite** 是一种 WordPress 安装类型，允许你从单一 WordPress 仪表盘创建和管理多网站网络。你可以管理所有内容，包括站点数量、功能、主题和用户角色。可以管理数百甚至数千个站点。

## 网络

在 WordPress 方面，多站点网络是指可以从单一仪表盘管理多个 **subsites** 的环境。虽然创建多站点网络的方式因托管服务商而异，最终结果通常是在 **wp-config.php** 文件中添加少量指令，以让 WordPress 知道它正在此特定模式下运行。

多站点网络与独立 WordPress 安装之间存在若干明显差异，我们将简要讨论。

## 数据库

数据库是一组结构化、组织化的数据集合。在计算机术语中，数据库指用于存储和组织数据的软件。可以把它想象成一个文件柜，你在其中的不同部分（称为表）中存放数据。

WordPress Multisite 使用一个数据库，每个子站点都有自己的表，表名前缀包含博客 ID。因此，一旦你安装网络安装并创建子站点，你应该会得到以下表：

_wp_1_options_ – options table for first subsite  
_wp_2_options_ – options table for second subsite

## 托管服务商

托管服务商是一家使企业和个人能够通过万维网公开其网站的公司。托管服务商提供的服务各不相同，但通常包括网站设计、主机存储空间以及互联网连接。

## 域名

域名是人们用来访问你的网站的地址。它告诉浏览器去哪里寻找你的网站。就像街道地址一样，域名是人们在线访问你网站的方式。就像在店铺前放置标牌一样。如果你想访问我们的网站，你需要在浏览器地址栏输入我们的网页地址 [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com)，其中 [**ultimatemultisite.com**](http://ultimatemultisite.com) 是域名。

## 子域名

子域名是主域名下的一种网站层级结构，但它不像使用文件夹来组织网站内容，而是拥有自己的独立网站。它的形式为 [**https://site1.domain.com/**](https://site1.domain.com/)，其中 _site1_ 是子域名，[_domain.com_](http://domain.com) 是主域名。

## 子目录

子目录是根域名下的一种网站层级结构，使用文件夹来组织网站内容。子目录与子文件夹相同，名称可互换使用。它的形式为 [**https://domain.com/site1**](https://domain.com/site1)，其中 _site1_ 是子目录名称，[_domain.com_](http://domain.com) 是主域名。

## 子站点

子站点是你在多站点网络上创建的子站点。它可以是 **subdomain** 或 **subdirectory**，取决于你的 WordPress Multisite 安装如何配置。

## 超级管理员

WordPress 超级管理员是具有完整权限来管理多站点网络中所有子站点的用户角色。对于多站点用户而言，它是你可以授予 WordPress 安装的 **最高访问级别**。

## 插件

一般来说，插件是一组为你的 WordPress 站点添加额外功能的代码。它可以像更改登录徽标那样简单，也可以像添加电子商务功能那样复杂。_Woocommerce and Contact Form_ 是插件的例子。

在 WordPress 多站点中，插件只能由超级管理员在网络管理员仪表盘中安装。子站点管理员只能在其子站点内激活和停用插件。

## 主题

WordPress 主题是一组文件（_图形、样式表和代码_），决定站点的整体外观。它提供所有前端样式，例如字体样式、页面布局、颜色等。

与插件相同，WordPress 多站点中的主题只能由超级管理员安装，并可由子站点管理员在子站点级别激活。

## 站点模板

**Site Template** 是一个可用作创建网络中新站点基础的样板站点。

这意味着你可以创建一个基础站点，激活不同的插件，设置一个活动主题，并按你喜欢的方式进行自定义。然后，当你的客户创建新账户时，他们不会得到一个没有任何有意义内容的默认 WordPress 站点，而是会得到你基础站点的副本，其中已包含所有自定义和内容。

## 域名映射

**Domain mapping**（域名映射）是通过网站地址将用户重定向到正确主机的一种方式。在 WordPress 多站点中，子站点可以使用子目录或子域名创建。域名映射的作用是允许子站点用户使用像 [**joesbikeshop.com**](http://joesbikeshop.com) 这样的顶级域名，使他们的网站地址看起来更专业。

## SSL

SSL 代表 **Secure Sockets Layer**（安全套接字层）。它是一种数字证书，用于验证网站身份并启用加密连接。如今，它被用作保持互联网连接安全并保护在两个系统之间传输的任何敏感数据的标准技术，防止犯罪分子读取和修改任何传输的信息，包括潜在的个人细节。现代浏览器要求 SSL，这使其在创建和运行网站时变得必不可少。

## 媒体

媒体是构成网站的图像、音频、视频和其他文件。

网络站点在 WordPress 多站点中共享单一数据库，它们在文件系统上为媒体文件维护独立路径。

标准 WordPress 位置（wp-content/uploads）保持不变；但其路径已更改以反映网络站点的唯一 ID。因此，网络站点的媒体文件显示为 wp-contents/uploads/site/[id]。

## 永久链接

永久链接是你站点中各个博客文章或页面的永久 URL。永久链接也被称为 **pretty links**（漂亮链接）。默认情况下，WordPress URL 使用查询字符串格式，看起来像这样：

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite 是一个为 WordPress Multisite 安装而制作的 WordPress 插件，它将你的 WordPress 安装转变为一个高级站点网络——类似于 [WordPress.com](https://WordPress.com)——允许客户通过每月、每季或每年费用创建站点（你也可以创建免费计划）。

## 结账表单

Checkout Form 是一个单步或多步订单表单，涉及通过 Ultimate Multisite 注册创建子站点、会员和用户账户。它包含用户在注册过程中必须提交的不同字段和支付表单。

## Webhook

Webhook（也称为网络回调或 HTTP 推送 API）是一种让应用向其他应用提供实时信息的方式。Webhook 在事件发生时立即将数据传递给其他应用，意味着你可以即时获取数据。

**Ultimate Multisite webhooks** 打开无限可能，允许网络管理员进行各种疯狂但有用的集成，尤其是与 _Zapier and IFTTT_ 等服务结合使用时。

## 事件

事件是由用户或其他来源动作（如鼠标点击）触发的操作。Ultimate Multisite 记录整个网络中发生的所有事件和日志。它跟踪多站点中发生的不同活动，例如计划变更。
