---
title: 站点模板中的自动搜索和替换
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# 在站点模板中自动搜索和替换 (v2)

_**本教程需要 WP UItimo 版本 2.x。**_

Ultimate Multisite 最强大的功能之一，是能够向注册表单添加任意文本、颜色和选择字段。一旦我们捕获了这些数据，就可以用它来预先填充所选站点模板某些部分中的内容。然后，当新站点发布时，Ultimate Multisite 会将占位符替换为注册期间输入的实际信息。

例如，你可以使用占位符来制作模板站点。占位符应添加在双大括号中 - {{placeholder_name}}。

然后，你只需添加一个匹配的注册字段来捕获该数据

你的客户随后就可以在注册期间填写该字段。

Ultimate Multisite 随后会自动将占位符替换为客户提供的数据。

## **解决“充满占位符的模板”问题** {#solving-the-template-full-of-placeholders-problem}

所有这些都很好，但我们确实会遇到一个不美观的问题：现在我们的站点模板——客户可以访问的那些——充满了难看的占位符，而且并不能说明太多信息。

为了解决这个问题，我们提供了为占位符设置虚拟值的选项，并在客户访问模板站点时使用这些值来搜索并替换其中的内容。

你可以前往 **Ultimate Multisite > Settings > Sites**，滚动到站点模板选项区域，然后点击 **Edit Placeholders** 链接，以访问模板占位符编辑器。

![Sites 设置页面中的站点模板选项区域](/img/config/settings-sites-templates-section.png)

这会带你进入占位符内容编辑器，你可以在其中添加占位符及其对应内容。

![模板占位符编辑器入口](/img/config/settings-sites-templates-section.png)
