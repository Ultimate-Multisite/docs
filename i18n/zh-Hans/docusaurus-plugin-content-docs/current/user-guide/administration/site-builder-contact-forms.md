---
title: 网站构建器联系表单
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# 网站构建器联系表单

Superdav AI Agent v1.10.0 新增了通过 Site Builder agent 直接从聊天界面创建联系表单的功能。这让您无需离开聊天界面，就能为任何页面添加功能完善的联系表单。

## 概述 {#overview}

Site Builder 的联系表单功能（`create_contact_form`）会自动检测您安装的表单插件，并使用该插件的原生功能来创建联系表单。支持的表单插件包括：

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

助手会自动选择您网站上可用的最佳表单插件，并生成一个针对该插件定制的联系表单。

## 创建联系表单 {#creating-a-contact-form}

要使用 Site Builder 创建联系表单，请执行以下步骤：

1. 在 WordPress 管理后台打开 **Gratis AI Agent** 聊天面板。
2. 点击聊天头部的 agent 图标，切换到 **Site Builder** agent。
3. 描述您想要创建的联系表单。例如：

   > "在联系页面添加一个包含姓名、电子邮件、消息和电话号码字段的联系表单。"

   或者简单地：

   > "为联系页面创建一个联系表单。"

4. Site Builder 将生成联系表单，并返回一个可用于嵌入的 shortcode。

## 使用生成的 Shortcode {#using-the-generated-shortcode}

Site Builder 创建联系表单后，会返回一个 shortcode（例如，`[contact-form-7 id="123"]`）。您可以：

1. **嵌入到页面或文章中** — 复制 shortcode，然后使用区块编辑器或经典编辑器将其粘贴到任何页面或文章中。
2. **通过 Site Builder 添加** — 要求 Site Builder 自动将表单添加到特定页面：

   > "将联系表单添加到联系页面。"

3. **在模板中使用** — 如果您熟悉 PHP，可以将 shortcode 添加到主题模板文件中。

## 自定义联系表单 {#customizing-the-contact-form}

Site Builder 创建联系表单后，您可以进一步对其进行自定义：

### 通过聊天界面 {#via-the-chat-interface}

要求 Site Builder 修改表单：

> "更新联系表单，添加一个主题字段，并将消息字段设为必填。"

Site Builder 将更新表单并返回更新后的 shortcode。

### 通过表单插件的后台界面 {#via-the-form-plugins-admin-interface}

您也可以直接在表单插件的设置中自定义表单：

1. 在 WordPress 管理后台进入 **Contact Form 7**（或您安装的表单插件）。
2. 找到由 Site Builder 创建的表单。
3. 根据需要编辑表单字段、验证规则和电子邮件通知。

## 表单插件和兼容性 {#form-plugins-and-compatibility}

Site Builder 会自动检测您网站上安装了哪个表单插件，并使用它来创建联系表单。如果安装了多个表单插件，Site Builder 会按照以下顺序进行优先排序：

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

如果未安装上述任何插件，Site Builder 会建议您先安装一个插件，然后再创建联系表单。

## 电子邮件通知 {#email-notifications}

Site Builder 创建的联系表单默认配置为向网站管理员发送电子邮件通知。您可以自定义接收方电子邮件地址和通知消息：

1. 进入您的表单插件后台界面。
2. 找到由 Site Builder 创建的表单。
3. 编辑电子邮件通知设置。

有关详细说明，请参阅您的表单插件文档：

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## 示例用例 {#example-use-cases}

### 简单联系表单 {#simple-contact-form}

> "创建一个包含姓名、电子邮件和消息字段的简单联系表单。"

### 多步骤表单 {#multi-step-form}

> "创建一个联系表单，第一步用于填写联系信息，第二步用于填写消息和首选联系方式。"

### 带条件逻辑的表单 {#form-with-conditional-logic}

> "创建一个联系表单，根据用户在下拉菜单中的选择显示不同的字段。"

### 带文件上传的表单 {#form-with-file-upload}

> "创建一个允许用户上传文件或附件的联系表单。"

:::note
联系表单创建功能在 Superdav AI Agent v1.10.0 及更高版本中可用。使用此功能必须确保 Site Builder agent 已激活。
:::
