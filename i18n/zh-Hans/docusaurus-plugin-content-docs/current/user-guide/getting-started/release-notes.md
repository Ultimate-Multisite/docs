---
title: 发布说明
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# 发布说明

## 版本 2.13.0 — 发布于 2026-06-05 {#version-2130--released-on-2026-06-05}

- 新增：为客户 Account、checkout、billing、站点、invoice、template 切换和 domain mapping 流程添加了主权租户支持，使租户网络能够将客户引导回主站点执行托管操作。
- 新增：为循环 membership 添加了续订凭据检查，以便当缺少已保存的 billing agreement、subscription 或 vault token 时，gateway 可以禁用自动续订。
- 新增：为待处理站点创建添加了经 HMAC 验证的 loopback 发布，以提升在后台任务延迟的主机上从 checkout 到站点配置的可靠性。
- 新增：为 SSO URL、checkout 表单基础域名以及自动创建域名记录添加了开发者扩展点。
- 修复：SSO 在映射域名、匿名 broker 访问、logout 以及跨 plugin 依赖冲突场景下更加可靠。
- 修复：待处理站点创建现在可以从过期的发布标记中恢复，并避免让客户卡在站点创建界面。
- 修复：不再为共享的 checkout 表单基础域名创建域名记录，并且当没有活动集成时会跳过未使用的主机提供商后台任务。
- 修复：Checkout、billing 地址、密码重置、邮箱验证、template 切换、导览以及客户 Dashboard 的边缘情况不再阻塞正常客户流程。
- 修复：群发邮件现在会保持收件人私密，同时在收件人列表或邮件传输失败时避免 SMTP/plugin 致命错误。
- 修复：Membership 续订、到期显示和付款收取的边缘情况现在可避免立即到期、崩溃或遗漏必需付款。
- 改进：WordPress 兼容性已测试至 7.0，生产 Vue 资源已从 npm 源重新构建，并且 Cypress 端到端覆盖现在会测试更多 checkout、setup、SSO 和 gateway 流程。

## 版本 2.12.0 — 发布于 2026-05-15 {#version-2120--released-on-2026-05-15}

- 新增：添加 Hostinger (hPanel) 作为受支持的主机提供商，并集成 domain mapping
- 新增：Site Exporter 现在可处理网络导入包，以简化全网络站点恢复
- 修复：BCC 群发邮件现在使用 undisclosed-recipients header，以防暴露收件人地址
- 修复：使用非日期值保存时，Membership 到期日期不再被损坏
- 修复：Stripe membership 更新现在可以正确清除折扣，而不会调用已弃用的 deleteDiscount API
- 修复：domain-mapped 站点上的 SSO 重定向现在会受到限制，以防止无限重定向循环
- 修复：Setup wizard 图片选择器选择现在会正确更新底层数据模型
- 修复：Site Exporter CLI 现在会保留正确的默认网络站点选择
- 改进：从 plugin 包中移除了捆绑的 wp-cli，减小了 plugin 体积

## 版本 2.11.0 — 发布于 2026-05-11 {#version-2110--released-on-2026-05-11}

- 新增：站点导出现在会打包一个可自启动的 `index.php`，因此 ZIP 可在全新主机上安装，无需单独安装 plugin。
- 新增：网络导出允许管理员从 Site Export 管理页面将所有子站点导出到一个归档文件中。
- 新增：Allow Site Templates plan 开关现在通过回退链强制执行，可针对 plan 限制正确限制 template 可用性。
- 新增：当添加的 product 未配置必需字段时，checkout 表单编辑器会发出警告。
- 新增：Import/Export 设置标签页现在会清楚说明其范围，并直接链接到 Site Export 工具。

## 版本 2.10.0 — 发布于 2026-05-05 {#version-2100--released-on-2026-05-05}

- 新增：PayPal 引导式 setup wizard，用于手动输入凭据，并带有 OAuth 标志门控，以实现无缝 gateway 配置。
- 新增：Template 切换客户面板已重新设计，包含当前 template 卡片、持久网格和 **重置当前 template** 按钮。
- 修复：Template 切换在 AJAX 失败时不再挂起 UI。
- 修复：Template 切换权限状态已加固，防止未授权访问。
- 修复：站点覆盖输入会在保存前进行验证。
- 修复：当地址为空时现在会显示 billing 地址提示。
- 修复：已解决 PHP 8.1 null-to-string 弃用通知。
- 修复：Currents 在 init hook 前延迟加载，以防止时序问题。
- 修复：所有登录流程都会遵循经过筛选的 SSO 路径。
- 修复：空白站点身份选项在保存时会被保留。

## 版本 2.9.0 — 发布于 2026-04-30 {#version-290--released-on-2026-04-30}

- 新增：在 **工具 > 导出与导入** 下添加了单站点导出和导入。
- 修复：导出 ZIP 文件现在通过经过身份验证的下载 endpoint 提供。
- 修复：已修正待处理导出/导入查询中的 SQL 注入风险和查询问题。
- 修复：管理员手动验证客户邮箱时，待处理站点未发布的问题。
- 修复：当 membership 缺失时，会清理孤立的 pending_site 记录。
- 修复：设置导航内边距和搜索锚点导航已修正。
- 修复：待处理站点现在会在 All Sites 视图中优先显示。
- 修复：已添加截图提供商 (mShots) User-Agent header，以防止 403 错误。
- 修复：导入 cron schedule 循环依赖已解决。
- 修复：导览 ID 在用户设置键中规范化为下划线。
- 改进：现在使用 ZipArchive 代替 Alchemy/Zippy，以获得更好的兼容性。

## 版本 2.8.0 — 发布于 2026-04-29 {#version-280--released-on-2026-04-29}

- 新增：在 Other Options 设置 UI 中添加了 Enable Jumper 开关。
- 新增：在结账表单列表表中添加了状态列。
- 新增：为自定义 MU plugin sunrise 扩展添加了 Addon sunrise 文件加载器。
- 改进：从设置页面移除了错误报告选择加入设置。
- 修复：感谢页面站点卡片——图片现在会被限制尺寸，链接样式也正确。
- 修复：截图提供方从 thum.io 切换为 WordPress.com mShots。
- 修复：Enable Registration 和 Default Role 现在会在全新安装时设置正确默认值。
- 修复：当域名包含端口时，`get_site_url()` 不再返回空值。
- 修复：当 `copy_media` 设置为空时，克隆媒体文件现在会被正确复制。
- 修复：在网络激活写入 sitemeta 后，对象缓存会被正确失效。
- 修复：对于 3 段式域名，在 DNS 验证后，自定义域名会自动提升为主域名。
- 修复：过期付款被清理时，会取消待处理会员资格。
- 修复：内联登录提示关闭后，密码强度检查器会重新绑定。
- 修复：当站点已创建时，感谢页面上的无限页面重新加载已停止。
- 修复：WP 核心注册选项会在 plugin 激活和设置保存时同步。
- 修复：在 `calculate_expiration` 中添加了空到期时间保护，以兼容 PHP 8.4。
- 修复：当客户已有有效会员资格时，会阻止重复注册。
- 修复：在结账中为 `date_expiration` 添加了空值检查。
- 修复：站点配置已强化——限制、会员资格推断、域名提升。
- 修复：预安装检查状态标签已更正为检查失败时显示 NOT Activated。
- 修复：结账域名用于电子邮件验证 URL。
- 修复：当不存在密码字段时，结账后自动登录。
- 修复：免费会员资格不再过期——视为终身有效。
- 修复：电子邮件验证门控会保持站点发布，直到客户验证电子邮件。
- 修复：SES v2 API endpoint 基础路径和身份路由已更正。
- 修复：`wu_inline_login_error` hook 会在提交前 catch 块中发出。
