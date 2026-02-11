---
title: WooCommerce 集成更新日志
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce 集成更新日志

版本 2.0.6 - 发布于 2026-01-16
* 改进：在插件中包含核心订阅。不再需要 Woocommerce Subscriptinos 扩展。

版本 2.0.5 - 发布于 2026-01-09
* 改进：从 glotpress API 加载翻译。
* 修复：在某些页面构建器中出现致命错误。
* 修复：当客户是主站点的成员时出现无限重定向。

版本 2.0.4 - 发布于 2025-11-14
* 新增：更多语言的翻译。
* 更改：改名为 Ultimate Multisite: Woocommerce Integration。
* 新增：兼容 Woocommerce 10.2.1。
* 新增：兼容 Woocommerce Subscriptions 7.7.0。
* 修复：兼容 PHP 8.4
* 修复：当不存在 WC 账户页面时的重定向。

版本 2.0.3 - 发布于 2025-08-13
* 更改：启用新市场的自动更新。

版本 2.0.2 - 发布于 2025-07-05
* 更改：改名为 Multisite Ultimate: Woocommerce Integration。
* 新增：兼容 Woocommerce 9.8.1。
* 新增：兼容 Woocommerce Subscriptions 7.3.0。
* 修复：客户取消订阅。
* 修复：使用结账块时出现致命错误。
* 改进：现在兼容 Woocommerce 高性能自定义订单表。
* 修复：在 WooCommerce 结账时取消仍可能升级会员。

版本 2.0.1 - 发布于 2023-08-09
* 新增：兼容 Woocommerce 7.9.0。
* 新增：兼容 Woocommerce Subscriptions 5.3.0。
* 新增：支持会员更新。
* 新增：在 Woocommerce 中添加关于试用和设置费的通知。
* 新增：使用元值识别 Ultimate Multisite Woocommerce 产品。
* 新增：插入一次性修复以标记所有 Ultimate Multisite 相关的 Woocommerce 产品。
* 新增：从 Woocommerce 列表中移除 Ultimate Multisite 创建的产品。
* 改进：创建一次性 Woocommerce 折扣以应用于购物车。
* 改进：恢复 Woocommerce 产品的循环折扣。
* 改进：为 Woocommerce 产品添加循环折扣标签。
* 改进：确保结账时的产品类型。
* 修复：在降级过程中保持会员状态。
* 修复：检查是否存在订阅以避免取消过程中的错误。
* 修复：添加开始订阅日期以供 Woocommerce 订阅使用。
* 内部：实现了新的 PHP 8.1 构建流程。

版本 2.0.0 - 完全重写。
* 新增：处理取消方法，在更改网关或取消会员时移除 woo 订阅；
* 新增：处理降级和升级会员；
* 改进：在子站点的客户更新表单中加载 woocommerce 依赖，以允许账户更新；
* 改进：如果不存在则正确加载 Woocommerce 购物车；
* 改进：在处理结账时确保我们在主站点表上；
* 改进：根据 Woocommerce 订阅订单价值而非上一次付款创建 Ultimo 续订订单；
* 修复：跳转到 WU Membership 按钮链接；
* 修复：当 Woocommerce 订阅续费已支付时，将 Ultimo 订单设置为已支付；
* 构建：添加 MPB 作为构建器；

版本 2.0.0-beta-5 - 发布于 2022-01-21
* 内部：添加钩子和过滤器生成器；
* 内部：添加 Ultimate Multisite 存根以提升开发者体验；
* 修复：防止在不必要时创建多个产品；

版本 2.0.0-beta.4 - 2021-09-23
* 修复：要求 WooCommerce 在网络中激活，而不仅仅是主站点；
* 改进：添加过滤器以允许插件作为 mu-plugin 使用；

版本 2.0.0-beta.3 - 2021-05-28
* 修复：仪表盘访问控制过于严格；
* 改进：在 Ultimate Multisite 顶部菜单中添加 WooCommerce 帮助链接；

版本 2.0.0-beta.2 - 2021-05-04
* 改进：在 WCS 续订订单创建时在 Ultimo 上创建待处理付款；
* 改进：使用 Ultimate Multisite 客户数据预填充账单字段；
* 改进：为网关重新添加账单字段；

版本 2.0.0-beta.1 - 2021-05-04
* 初始 beta 版本发布

-- 旧版 --

版本 1.2.6 - 26/03/2020
* 修复：与新版 WooCommerce Subscriptions 的小兼容性问题；

版本 1.2.5 - 26/08/2019
* 修复：前一次发布的错误；

版本 1.2.4 - 22/08/2019
* 改进：添加选项，在集成后立即重定向到 Woocommerce 结账屏幕；

版本 1.2.3 - 26/05/2019
* 修复：在某些极端情况下 Woocommerce 的支付邮件消失；

版本 1.2.2 - 27/02/2019
* 新增：支持 Woocommerce Subscription 集成中的设置费；

版本 1.2.1 - 17/11/2018
* 修复：与 Ultimate Multisite 1.9.0 的兼容性问题；

版本 1.2.0 - 10/09/2018
* 改进：为插件提供新的更新 URL；
* 新增：对 Woocommerce Subscription 的 beta 支持；

版本 1.1.2 - 11/02/2018
* 修复：Pay 链接动态生成以响应 WooCommerce 端点的更改；
* 改进：我们现在在调用 payment_completed 时强制将订单状态设为已完成，以确保我们的续订钩子在适当时运行；

版本 1.1.1 - 24/01/2018
* 修复：现在也会检查 WooCommerce 是否仅在主站点激活；
* 修复：包含重载以允许订单创建时包含税费；

版本 1.1.0 - 04/11/2017
* 修复：集成按钮的标签现在会根据设置实际更改。需要 Ultimate Multisite 1.5.0；
* 修复：即使 WooCommerce 未在网络中激活，仅在主站点激活，WooCommerce Integration 也能正常工作；

1.0.0 - 初始发布
