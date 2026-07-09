---
title: GoCardless 更新日志
sidebar_position: 99
_i18n_hash: 6fb81ff030ca403765c66d8e86a50faa
---
# GoCardless 更新日志

版本：1.0.3 - 发布于 2026-05-05
* 修复：现在，当 GoCardless 会员在待处理或暂停状态下被取消时，会清理孤立的待处理站点
* 改进：当 Bedrock 根 autoloader 已经加载依赖项时，跳过 Plugin autoloader

版本：1.0.1 - 发布于 2025-09-28

* 将前缀重命名为 ultimate-multisite；更新文本域；版本号提升。



2021-09-24 - 版本 1.0.0-beta.4

* 新增：为基于 mu-plugins 的设置添加 filter wp_ultimo_skip_network_active_check；

2021-06-16 - 版本 1.0.0-beta.3

* 修复：Webhook 处理程序无法确认签名；

2021-06-14 - 版本 1.0.0-beta.2

* 改进：在创建 GoCardless mandate 后发布站点；

版本 1.0.0-beta.1 - 初始版本
