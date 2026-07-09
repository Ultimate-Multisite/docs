---
title: 域名销售者更新日志
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller 更新日志 {#domain-seller-changelog}

版本 1.3.0 - 发布于 2026-06-02
- 新增：当 HostAfrica reseller 余额过低时，添加了 network-admin 警告
- 新增：添加了将新注册域名自动映射到网络站点的功能
- 修复：仅在注册新域名时应用注册人字段要求
- 修复：使监控余额通知可关闭
- 修复：确保保留 WooCommerce 注册人账单详情
- 修复：在注册期间强制执行注册人联系信息要求
- 修复：防止以 0% 加价创建域名注册产品
- 修复：在 checkout 会话流程中保留域名选择和定价
- 修复：改进了 HostAfrica 域名定价的货币显示
- 修复：改进了 checkout 表单 action 行为，以防止 WP-core query-var 不匹配
- 改进：在设置指南中链接了 HostAfrica reseller 配置文档

Version 1.2.0 - 发布于 2026-05-25
- 新增：添加 HostAfrica 作为域名销售集成，支持 checkout、设置向导、查询、TLD/定价、注册、续费、转移、nameserver、DNS、EPP code、registrar lock 和 ID 保护
- 新增：添加 Openprovider 作为域名销售集成，支持经销商定价、注册、续费、转移、nameserver、DNS、EPP code、registrar lock、WHOIS 隐私和 TLD 同步
- 新增：添加 Hostinger 作为域名销售集成，使用核心集成中的共享 Hostinger API token 进行可用性检查、注册、nameserver 更新、registrar lock 和 WHOIS 隐私
- 改进：添加域名生命周期操作和过滤器文档块，为开发者集成提供指导
- 改进：在 addon readme 中将 plugin 兼容性元数据更新到 WordPress 7.0
- 改进：更新用于即将发布版本协调的规划模板

Version 1.1.0 - 发布于 2026-05-08
- 新增：已为 ResellerClub、Enom 和 OpenSRS 注册商实现 DNS 记录创建（add_dns_record）
- 修复：默认 DNS 记录解析器现在可容忍 {DOMAIN} 和 {SITE_URL} token
- 修复：域名选择 checkout 字段 slug 已添加命名空间，以防止与 site_url 冲突

Version 1.0.8 - 发布于 2026-05-07
- 修复：ResellerClub 域名定价现在会从正确的 API endpoint 获取实时成本价格

Version 1.0.7 - 发布于 2026-05-06
* 修复：ResellerClub test_connection 发送必需的 tlds 参数 (#224)

Version 1.0.6 - 发布于 2026-05-05
* 修复：ResellerClub 域名注册现在可通过改进的 API 响应处理和由注册局驱动的提供商路由正常工作
* 修复：Register Domain 管理页面 UX 改进
* 移除：CyberPanel 注册商集成

Version 1.0.5 - 发布于 2026-04-02
* 新增：用于域名注册和管理的 GoDaddy 注册商集成
* 新增：NameSilo 注册商集成
* 新增：ResellerClub 注册商集成
* 新增：在域名购买和映射时自动验证 SES 发送域名
* 修复：在测试环境中防止 plugin 常量被重新定义
* 修复：MySQL 标志在 install-wp-tests.sh 中正确按词拆分

Version 1.0.4 - 发布于 2026-03-14
* **修复：** 一些缺失的 css 资源
* **修复：** 与不可用 tlds 相关的错误

Version 1.0.3 - 发布于 2026-03-09
* **修复：** 使用带有 checkout shortcode 的旧版注册模板时出现的 Vue 响应式属性错误（domain_option、selected_domain、domain_provider）
* **修复：** 域名选择 checkout 字段中的子域名输入字段未对齐和文本过大的问题
* **修复：** 当存在域名选择字段时，隐藏“Your URL will be”预览区块

Version 1.0.2 - 发布于 2026-03-01
* **已改进：** 从设置页面移除了全局加价设置 — 定价现在完全按产品设置
* **已改进：** 在设置页面添加了“管理域名产品”链接，便于快速导航
* **已改进：** 为域名产品设置提供了更清晰的字段说明和工具提示（全匹配与特定 TLD、加价类型、介绍期定价）
* **已改进：** 改进了整个设置页面中的说明（搜索 TLD、续费、DNS、通知）

Version 1.0.1 - 发布于 2026-02-27

* **新增：** 用于批量价格管理的 TLD 导入工具
* **新增：** 域名产品的介绍性定价支持
* **新增：** 使用 Cypress 的 E2E 测试套件
* **新增：** 域名生命周期通知的电子邮件模板
* **新增：** 管理员域名注册模态框中的注册人地址字段，并从设置中预填充
* **新增：** 客户 DNS 管理界面，支持添加、编辑和删除记录
* **新增：** “自带域名”结账选项，并自动进行域名映射
* **新增：** 结账期间根据域名自动生成站点 URL
* **新增：** 设置中的默认名称服务器和 DNS 记录配置
* **新增：** 核心域名编辑页面上的域名注册详情和 DNS 管理
* **新增：** 设置向导会使用合理默认值自动创建默认域名产品
* **新增：** 通过 cron 在所有已配置提供商之间每日自动同步 TLD
* **新增：** WHOIS 隐私保护，支持按产品配置（始终开启、客户选择或禁用）
* **新增：** WHOIS 隐私结账复选框，带价格显示和深色模式支持
* **新增：** 用于手动注册域名的 Register Domain 管理页面
* **新增：** 通过 Ultimate Multisite 更新服务器自动更新 plugin
* **新增：** 产品列表表格中的域名产品类型筛选标签页，带紫色徽章样式
* **新增：** 域名结账表单中的注册人联系字段（姓名、地址、城市、省/州、邮政编码、国家/地区、电话）

* **新增：** 调用注册商 API 之前进行注册人字段验证，并提供清晰的错误消息
* **新增：** 用于域名注册事件的提供商专用日志通道（例如 domain-seller-namecheap.log）
* **新增：** 主注册/开户注册 checkout 表单上的注册人联系字段（注册域名时显示）
* **改进：** 将 Domain Search checkout 字段替换为统一的 Domain Selection 字段，支持子域名、注册和现有域名标签页
* **改进：** 域名产品设置通过核心小工具系统在产品编辑页面内联呈现
* **改进：** 客户域名信息接入核心域名映射小工具，而不是独立的 metabox
* **改进：** TLD 导入向导简化为从所有提供商一键同步
* **改进：** Namecheap 域名可用性使用批量 API 调用以加快搜索
* **改进：** Namecheap 定价 API 使用正确的参数和响应解析
* **改进：** 将 TLD 存储集中到单个网络选项中
* **改进：** 针对 DNS 变更、转移和配置应用的域名活动日志记录
* **改进：** 使用 IANA 主列表并通过批量验证为 OpenSRS 执行完整 TLD 同步
* **改进：** 通过分页 API 请求为 Namecheap 执行完整 TLD 同步
* **改进：** 使用 Integration Registry 模式替换旧版提供商类
* **改进：** 带有 DNS 和转移配置的设置面板
* **改进：** 电话号码自动格式化为 +CC.NNN 注册商格式

* **改进：** Phone 字段验证会在提交前去除格式字符
* **改进：** 版本要求提升至 Ultimate Multisite 2.4.12，并提供更清晰的通知
* **改进：** CI 工作流对 addon 和核心 plugin 都使用了正确的 checkout
* **改进：** prepare_registrant_info() 会从 checkout 保存的用户 meta 中读取，并以账单地址作为 fallback
* **修复：** 未登录用户在 checkout 期间 Domain search AJAX 失败
* **修复：** 未登录用户在 checkout 期间 Domain pricing AJAX 失败
* **修复：** 运行 WP-CLI 命令时 Spyc class 重新声明导致的致命错误
* **修复：** Namecheap sandbox API 超时时间过短
* **修复：** Domain search Select 按钮文本在绿色背景上不可见
* **修复：** 因缺少联系信息导致 Domain registration 失败，并出现 "RegistrantFirstName is Missing" 错误
* **修复：** 当 checkout 时 site 尚不存在时，Domain record 会以 blog_id=0 创建
* **修复：** Default TLDs 设置返回字符串而不是解析后的数组
* **移除：** 独立的 Domain Management admin page — 现在通过核心 domain pages 处理

Version 1.0.0 - 发布于 2025-09-28

**针对 Ultimate Multisite v2 的重大重写**

* **新增：** 使用现代 PHP 7.4+ 架构完全重写
* **新增：** 与 Ultimate Multisite v2 结账系统无缝集成
* **新增：** 支持灵活定价选项的域名产品管理
* **新增：** 多域名提供商支持架构
* **新增：** 自动续费与订阅集成
* **新增：** 客户域名管理界面
* **新增：** 管理员域名监控和日志
* **新增：** 域名产品优惠券支持
* **新增：** 全面的设置管理
* **新增：** 对开发者友好的可扩展代码库
* **改进：** 更新 OpenSRS 提供商，支持完整功能
* **改进：** 与 Ultimate Multisite v2 保持一致的现代 UI
* **修复：** 所有已弃用的 v1 代码已更新至 v2 标准
* **移除：** 旧版 v1 兼容性（破坏性变更）

### 以前的版本（v1 旧版） {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* 修复：与 Groundhogg CRM 不兼容的问题
* 注意：这是最后一个兼容 v1 的版本

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* 修复：移除了 License Key 字段
* 修复：功能 plugin 启用时缺少套餐选项卡
* 改进：在注册字段上添加了跳过按钮

### Version 0.0.1 - 初始发布 {#version-001---initial-release}

* 面向 WP Ultimo v1 的基础 OpenSRS 集成
* 简单的域名搜索和注册
* 基于套餐的域名权限
