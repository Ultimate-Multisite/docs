---
title: Captcha 更新日志
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha 更新日志 {#captcha-changelog}

版本：1.5.0 - 发布于 2026-05-22
* 新增：硬停止速率限制器 — 统计受验证码保护界面上的每个 GET 和 POST（wp-login / register / lost-password / comments、WooCommerce my-account / checkout / pay-for-order、Ultimate Multisite checkout / inline-login），并以 HTTP 429、一个 `Retry-After` header，以及随机化的 tarpit sleep（1–5 秒，硬上限 15 秒）响应。
* 新增：`cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` 设置，用于调整 tarpit 窗口。
* 新增：`wu_cap_rate_limit_whitelist_ip` filter，用于豁免受信任的 IP 范围。
* 新增：`wu_cap_rate_limit_will_block` action，会在发送硬停止响应前立即触发。
* 新增：抗伪造的 client-IP 检测。`Captcha_Core::get_client_ip()`（速率限制 bucket key、验证码 siteverify `remoteip` 和统计 IP hash 的事实来源）现在强制执行严格的信任模型：REMOTE_ADDR 是基准，只有当直接对端位于当前 Cloudflare IP 范围内时才信任 `CF-Connecting-IP`，并且只有当直接对端在管理员配置的受信任代理列表中时才信任 `X-Forwarded-For`，同时从右到左遍历，在确定访客 IP 之前跳过受信任/CF 跳点。
* 新增：`cap_trust_cloudflare_headers` 设置（默认关闭）— 当位于 Cloudflare 后方时，选择信任 `CF-Connecting-IP`。该插件随附一个 Cloudflare CIDR 快照，并通过 wp-cron 每周刷新；如果刷新失败，则使用随附的回退数据。
* 新增：`cap_trusted_proxies` 设置 — CIDR 或裸 IP 的文本域（每行一个，允许 `#` 注释），用于列出你自己的前端代理 / 负载均衡器。没有此设置时，即使启用了速率限制器，也会忽略 `X-Forwarded-For`。
* 新增：首次启用时自动检测可能的 Cloudflare / 代理状态，并通过一键“应用检测到的设置”的管理员通知提供操作。该插件绝不会覆盖你保存的值；如果后续流量表明你的配置不再符合实际情况（例如 Cloudflare 更改了 CIDR 范围，而你的代理 CIDR 现在已过时），会显示一个不可关闭的不匹配通知，提示建议的更新。
* 修复：隐形模式不再静默地将 `cap_security_level` 降级为 FAST — 管理员配置的级别会被遵循。对于想要自定义逻辑的站点，现在可使用新的 `wu_cap_server_security_level` filter。
* 修复：统计中的 `rate_limits_triggered` 计数器现在会在每次拦截时递增，而不只是在罕见的成功后兜底路径上递增。
* 修复：`Captcha_Core::get_client_ip()` 现在是整个速率限制器、验证码提供商（reCAPTCHA + hCaptcha `siteverify`）和统计中访客 IP 归因的唯一事实来源 — 关闭了一个伪造向量：直接请求源服务器并携带伪造的 `CF-Connecting-IP` header 时，过去会按伪造 IP 而不是真实对端进行分桶。
* 修复：WooCommerce 经典 checkout 速率限制门现在在 `template_redirect`（优先级 1）上触发，而不是 `woocommerce_before_checkout_form`。当购物车为空时，表单级 hook 从不触发，因此从不添加产品的洪泛流量会完全绕过限制器。
* 修复：WooCommerce pay-for-order 速率限制门现在在 `template_redirect` 上触发，而不是 `woocommerce_before_pay_action`。后者只会在 `wp_verify_nonce('woocommerce-pay')` 成功后触发，这意味着未认证攻击者（实际威胁模型）从不会触发限制器。
* 修复：WooCommerce Store API（blocks）checkout 速率限制门现在在 `rest_pre_dispatch` 上触发，而不是 `woocommerce_store_api_checkout_update_order_from_request`。后者只会在 Store API 验证购物车和 billing 字段后触发，因此未认证机器人会从验证器得到 400，且从不会触发限制器。
* 修复：Ultimate Multisite inline-login 速率限制门现在在 `wu_ajax_nopriv_wu_inline_login` 优先级 1（以及已登录镜像）上触发，而不是 `wu_before_inline_login`。后者只会在 `check_ajax_referer('wu_checkout')` 成功后触发，因此没有有效 wu_checkout nonce 的未认证机器人会得到 403，且从不会触发限制器。
* 修复：`Rate_Limiter::enforce()` 现在应用以 `surface|ip` 为键的每请求一次保护，因此每次渲染触发两次的上游 hook（特别是 Ultimate Multisite 中的 `wu_setup_checkout`）不再把有效速率限制阈值减半。
* 修复：速率限制界面门不再查询 `Captcha_Core::is_whitelisted()`（`wu_captcha_whitelisted` filter）。该 filter 表示“验证码已由另一个界面处理”，与洪泛保护正交 — WooCommerce 集成过去会通过它在存在 Woo nonce 时跳过 WordPress 登录验证码，这会渗入速率计数，并让 Woo POST 避开限制器。现在唯一适用的绕过是速率限制专用的 `wu_cap_rate_limit_whitelist_ip` filter。

版本：1.3.2 - 发布于 2026-01-27
* 修复：Cap widget 在使用 Elementor 或其他页面构建器的 checkout 表单上不渲染
* 修复：cap-widget 自定义元素被 wp_kses() 清理剥离
* 改进：为 checkout 验证码字段使用 callable content，以绕过 HTML 过滤
* 改进：简化 JavaScript，并为边缘情况提供回退

版本：1.3.1 - 发布于 2026-01-26
* 修复：Cap Captcha 隐形模式在动态 Ultimate Multisite checkout 表单上不会自动求解
* 改进：Cap checkout 脚本现在使用 MutationObserver 检测动态加载的 widget
* 改进：添加了 checkout 按钮拦截，以在提交前等待 token

Version: 1.3.0 - 发布于 2026-01-27
* 新增：WooCommerce Blocks 结账集成，带有 Store API fetch 拦截
* 新增：WooCommerce 结账的不可见验证码支持（hCaptcha invisible、reCAPTCHA v2 invisible、v3）
* 新增：可在不使用 Ultimate Multisite 时使用的独立设置页面
* 新增：Jetpack Autoloader，用于防止依赖冲突
* 修复：hCaptcha 在动态 Ultimate Multisite 结账中未渲染（AJAX 加载的内容）
* 修复：表单验证错误发生时验证码未刷新/重置
* 修复：hCaptcha 未显示在 WooCommerce 结账页面
* 修复：reCAPTCHA 类未找到错误（已添加 google/recaptcha PHP 库）
* 改进：通过 WordPress hooks、MutationObserver 和 AJAX 拦截进行错误检测
* 改进：设置说明现在包含用于 API keys 的 Dashboard URL

Version: 1.2.2 - 发布于 2026-01-24
* 修复：验证码未显示在 Ultimate Multisite 登录表单元素上（表单过滤器名称不匹配）
* 修复：Cap 小工具 HTML 被 wp_kses() 清理剥离
* 修复：JavaScript 选择器找不到元素 ID 中带斜杠的表单
* 新增：Filter hook `wu_kses_allowed_html`，供 classaddons 扩展允许的 HTML 标签
* 移除：已由特定提供方脚本替换的废弃 JavaScript 文件

Version: 1.2.1 - 发布于 2026-01-23

* 修复：Cap Captcha 令牌验证在 multisite 环境中失败（现在使用全网 transients）
* 修复：验证码现在无论用户登录状态如何都会一致渲染
* 修复：验证码渲染与验证之间不匹配导致结账失败

Version: 1.2.0 - 发布于 2026-01-21

* 新增：Cap Captcha - 自托管工作量证明验证码，激活时默认启用
* 新增：零配置保护 - 激活 addon 后立即受到保护
* 新增：多态验证码提供方架构，便于扩展
* 新增：WooCommerce Store API 结账保护，抵御卡片测试攻击
* 新增：统计跟踪 Dashboard，显示挑战、验证和被阻止的攻击
* 新增：安全级别预设（快速、中等、最高），用于 Cap Captcha 难度
* 新增：用于 reCAPTCHA 和 hCaptcha 提供方的抽象基类
* 改进：将代码库重构为模块化提供方类
* 改进：通过专用管理器类实现更好的关注点分离
* Fixed: Security improvements for $_SERVER variable sanitization
* 修复：用于 WordPress 命名约定的 PHPUnit 测试配置

Version: 1.0.1 - 发布于 2025-09-28

* 将前缀重命名为 ultimate-multisite；更新文本域；版本提升。
