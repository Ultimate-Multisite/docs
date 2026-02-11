---
title: 验证码更新日志
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha Changelog

版本: 1.3.2 - 发布于 2026-01-27
* Fixed: Cap widget 在使用 Elementor 或其他页面构建器的结账表单中未渲染
* Fixed: cap-widget 自定义元素被 wp_kses() 清理时被剥离
* Improved: 为结账验证码字段使用可调用内容，以绕过 HTML 过滤
* Improved: 简化 JavaScript，并为极端情况提供回退方案

版本: 1.3.1 - 发布于 2026-01-26
* Fixed: Cap Captcha 隐形模式在动态 Ultimate Multisite 结账表单中未自动解决
* Improved: Cap 结账脚本现在使用 MutationObserver 检测动态加载的小部件
* Improved: 添加结账按钮拦截，以在提交前等待令牌

版本: 1.3.0 - 发布于 2026-01-27
* New: WooCommerce Blocks 结账集成与 Store API 抓取拦截
* New: WooCommerce 结账的隐形验证码支持（hCaptcha 隐形、reCAPTCHA v2 隐形、v3）
* New: 独立设置页面，可在不使用 Ultimate Multisite 的情况下使用
* New: Jetpack Autoloader，用于防止依赖冲突
* Fixed: hCaptcha 在动态 Ultimate Multisite 结账（AJAX 加载内容）中未渲染
* Fixed: 验证码在表单验证错误时未刷新/重置
* Fixed: hCaptcha 未显示在 WooCommerce 结账页面
* Fixed: reCAPTCHA 类未找到错误（已添加 google/recaptcha PHP 库）
* Improved: 通过 WordPress 钩子、MutationObserver 和 AJAX 拦截进行错误检测
* Improved: 设置说明现在包含 API 密钥的仪表盘 URL

版本: 1.2.2 - 发布于 2026-01-24
* Fixed: Captcha 未显示在 Ultimate Multisite 登录表单元素（表单过滤器名称不匹配）
* Fixed: Cap widget HTML 被 wp_kses() 清理时被剥离
* Fixed: JavaScript 选择器无法找到元素 ID 中带斜杠的表单
* Added: 过滤钩子 `wu_kses_allowed_html`，用于 classaddons 扩展允许的 HTML 标签
* Removed: 已删除无用代码 JavaScript 文件，改为使用供应商特定脚本

版本: 1.2.1 - 发布于 2026-01-23
* Fixed: Cap Captcha 令牌验证在多站点环境中失败（现使用网络范围的临时缓存）
* Fixed: Captcha 现在无论登录状态如何，都能一致渲染
* Fixed: 验证码渲染与验证不匹配导致结账失败

版本: 1.2.0 - 发布于 2026-01-21
* New: Cap Captcha - 自托管的工作量证明验证码，默认在激活时启用
* New: 零配置保护 - 激活插件后立即获得保护
* New: 多态验证码提供者架构，便于扩展
* New: WooCommerce Store API 结账防止卡测试攻击
* New: 统计跟踪仪表盘，显示挑战、验证和被阻止的攻击
* New: Cap Captcha 难度的安全级别预设（Fast、Medium、Max）
* New: reCAPTCHA 和 hCaptcha 提供者的抽象基类
* Improved: 将代码库重构为模块化提供者类
* Improved: 通过专用管理器类实现更好的关注点分离
* Fixed: 对 $_SERVER 变量的安全改进
* Fixed: PHPUnit 测试配置符合 WordPress 命名规范

版本: 1.0.1 - 发布于 2025-09-28
* Rename prefix to ultimate-multisite; update text domain; version bump.
