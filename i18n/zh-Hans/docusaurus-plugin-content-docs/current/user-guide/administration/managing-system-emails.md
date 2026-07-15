---
title: 管理系统电子邮件
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# 管理系统邮件

Ultimate Multisite 会针对注册确认、付款收据和会员资格变更等事件发送各种系统邮件。你可以自定义这些邮件模板，使其符合你的品牌。

## 查看系统邮件 {#viewing-system-emails}

导航到 **Ultimate Multisite → Settings**，然后点击 **Emails** 标签页以查看与邮件相关的设置。

![Settings - Emails 标签页](/img/admin/settings-emails.png)

在这里，你可以访问 **System Emails** 页面，查看所有邮件模板。

![System Emails 列表](/img/admin/system-emails-list.png)

你也可以使用系统邮件编辑器编辑单个邮件模板：

![系统邮件编辑器](/img/admin/system-email-editor.png)

## 导入新的邮件模板 {#importing-new-email-templates}

新的 Ultimate Multisite 版本和 add-ons 可能会注册新的邮件模板。为防止冲突，新模板不会自动添加——你需要手动导入它们。

要导入新的邮件模板：

1. 前往 **System Emails** 页面
2. 点击页面顶部的 **Reset & Import** 按钮
3. 切换 **Import Emails** 选项以查看可用模板
4. 选择你要导入的模板并确认

## 重置邮件模板 {#resetting-email-templates}

如果你已经自定义了某个邮件模板，并希望恢复到默认内容，你有两个选项：

1. **删除并重新导入** —— 删除系统邮件并再次导入（这会清除发送指标）
2. **通过工具重置** —— 使用 **Reset & Import** 工具，切换 **Reset** 选项，并选择你要重置的邮件

建议使用 Reset 选项，因为它会在恢复默认内容的同时保留发送指标和其他元数据。
