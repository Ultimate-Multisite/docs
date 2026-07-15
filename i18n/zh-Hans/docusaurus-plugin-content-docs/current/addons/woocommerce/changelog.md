---
title: WooCommerce 集成更新日志
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce 集成更新日志

版本 2.2.0 - 发布于 2026-07-01
* 新增：Ultimate Multisite 税额现在会在结账时作为单独的 WooCommerce 费用行显示，使付款前的税费总额更清晰。
* 新增：添加了可选择启用的“Suspend Memberships Immediately on Failed Renewals”设置和 `wu_woo_suspend_on_payment_failure` 过滤器，供希望在 WooCommerce Subscriptions 重试窗口期间对续订失败执行暂停的站点使用。
* 修复：协调了 WooCommerce Subscription 状态，避免在续订失败或恢复后与 Ultimate Multisite 会员资格不同步。
* 修复：当 Ultimate Multisite 货币列表缺少 WooCommerce 商店货币时，将其添加进去。
* 修复：将订阅用户重定向到 WooCommerce 结账时保留客户账单详情。
* 改进：添加了与 Jetpack Autoloader 5 的兼容性。
* 改进：清理了发布包生成流程，使 GitHub 和市场 zip 包避免包含嵌套的暂存目录和开发文件。

版本 2.0.6 - 发布于 2026-01-16
* 改进：在 addon 中包含核心订阅。不再需要 Woocommerce Subscriptinos 扩展。

版本 2.0.5 - 发布于 2026-01-09
* 改进：从 glotpress API 加载翻译。
* 修复：某些页面构建器中的致命错误。
* 修复：当客户是主站点成员时出现无限重定向。

版本 2.0.4 - 发布于 2025-11-14
* 新增：更多语言的翻译。
* 变更：重命名为 Ultimate Multisite: Woocommerce Integration。
* 新增：兼容 Woocommerce 10.2.1。
* 新增：兼容 Woocommerce Subscriptions 7.7.0。
* 修复：兼容 PHP 8.4
* 修复：当不存在 WC 账户页面时的重定向问题。

版本 2.0.3 - 发布于 2025-08-13
* 变更：通过新市场启用自动更新。

版本 2.0.2 - 发布于 2025-07-05
* 变更：重命名为 Multisite Ultimate: Woocommerce Integration。
* 新增：兼容 Woocommerce 9.8.1。
* 新增：兼容 Woocommerce Subscriptions 7.3.0。
* 修复：客户取消订阅的问题。
* 修复：使用结账区块时的致命错误。
* 改进：现在兼容 Woocommerce 高性能自定义订单表。
* 修复：在 WooCommerce 结账时取消仍可能升级会员资格的问题。

版本 2.0.1 - 发布于 2023-08-09

* 新增：兼容 Woocommerce 7.9.0。
* 新增：兼容 Woocommerce Subscriptions 5.3.0。
* 新增：支持会员资格更新。
* 新增：在 Woocommerce 中显示有关试用和设置费用的通知。
* 新增：通过元值识别 Ultimate Multisite Woocommerce 产品。
* 新增：插入一次性修复，用于标记所有 Ultimate Multisite 相关的 Woocommerce 产品。
* 新增：从 Woocommerce 列表中移除 Ultimate Multisite 创建的产品。
* 改进：创建非循环 Woocommerce 折扣以应用到购物车。
* 改进：将循环折扣恢复到 Woocommerce 产品。
* 改进：为 Woocommerce 产品添加循环折扣标签。
* 改进：确保结账时的产品类型。
* 修复：在降级过程中保持会员资格状态。
* 修复：检查订阅是否存在，以避免取消过程中出现错误。
* 修复：添加订阅开始日期，以便在 Woocommerce 订阅中使用。
* 内部：实现新的 PHP 8.1 构建流程。

版本 2.0.0 - 完全重写。

* 新增：处理取消方法，用于在更改网关或取消会员资格时移除 woo 订阅；
* 新增：用于降级和升级会员资格的处理程序；
* 改进：在子站点的客户更新表单上加载 woocommerce 依赖，以允许更新账户；
* 改进：如果不存在则正确加载 Woocommerce 购物车；
* 改进：在处理结账时确保位于主站点表中；
* 改进：使 Ultimo 续订订单基于 Woocommerce 订阅订单值，而不是来自上次付款；
* 修复：WU Membership 按钮链接；
* 修复：当 Woocommerce 订阅续订已付款时，将 Ultimo 订单设为已付款；
* 构建：添加 MPB 作为构建器；

版本 2.0.0-beta-5 - 发布于 2022-01-21

* 内部：添加了钩子和过滤器生成器；
* 内部：添加了 Ultimate Multisite 存根，以提升开发者体验；
* 修复：在不必要时防止创建多个产品；

版本 2.0.0-beta.4 - 2021-09-23

* 修复：要求 WooCommerce 在网络中启用，而不是仅在主站点启用；
* 改进：添加过滤器，允许将该 add-on 用作 mu-plugin；

版本 2.0.0-beta.3 - 2021-05-28

* 修复：Dashboard 访问控制过于激进；
* 改进：向 Ultimate Multisite 顶部菜单添加 WooCommerce 帮助链接；

版本 2.0.0-beta.2 - 2021-05-04

* 改进：在 WCS 续订订单创建时，在 Ultimo 上创建待处理付款；
* 改进：使用 Ultimate Multisite 客户数据预填充账单字段；
* 改进：为网关重新添加账单字段；

版本 2.0.0-beta.1 - 2021-05-04

* 初始 beta 发布

-- 旧版本 --

版本 1.2.6 - 26/03/2020

* 修复：与较新版本的 WooCommerce Subscriptions 的小兼容性问题；

版本 1.2.5 - 26/08/2019

* 修复：上一版本中的错误；

版本 1.2.4 - 22/08/2019

* 改进：添加选项，可在集成后立即重定向到 WooCommerce 结账屏幕；

版本 1.2.3 - 26/05/2019

* 修复：在某些边缘情况下，WooCommerce 的付款电子邮件消失的问题；

版本 1.2.2 - 27/02/2019

* 新增：支持 WooCommerce Subscription 集成中的设置费用；

版本 1.2.1 - 17/11/2018

* 修复：与 Ultimate Multisite 版本 1.9.0 的兼容性问题；

版本 1.2.0 - 10/09/2018

* 改进：add-on 的新更新 URL；
* 新增：对 WooCommerce Subscription 的 beta 支持；

版本 1.1.2 - 11/02/2018

* 修复：动态生成支付链接，以响应 WooCommerce endpoints 的变化；
* 改进：现在当调用 payment_completed 时，我们会强制订单为已完成状态，以确保续订钩子在应运行时运行；

Version 1.1.1 - 24/01/2018

* 已修复：现在还会检查 WooCommerce 是否刚在主站点上启用；
* 已修复：包含重载，以允许创建订单时包含税费；

Version 1.1.0 - 04/11/2017

* 已修复：现在集成按钮的标签会实际更改以反映设置。需要 Ultimate Multisite 1.5.0；
* 已修复：即使 WooCommerce 未在网络中启用、仅在主站点中启用，WooCommerce Integration 现在也能正常工作；

1.0.0 - 初始发布
