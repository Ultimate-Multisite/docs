---
title: 多租户集成
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy 集成 {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 更改了用于主权租户、迁移验证和租户生命周期自动化的若干集成接触点。

## 租户引导流程 {#tenant-bootstrap-flow}

创建或修改租户的集成应遵循以下顺序：

1. 解析租户注册记录和隔离模型。
2. 创建或验证租户数据库写入器。
3. 引导租户架构。
4. 预配租户用户。
5. 注册租户路由和文件系统路径。
6. 在公开租户之前运行迁移验证。

不要假设主权租户可以复用网络数据库连接。请使用该 addon 提供的租户注册表和写入器抽象。

## SSO 和 REST 钩子 {#sso-and-rest-hooks}

无状态租户自动登录使用带有 purpose claim、JTI 重放保护、过期上限和源站固定的短期令牌。添加登录按钮或远程管理链接的集成应通过受支持的 SSO 流程生成租户访问，而不是直接构造租户登录 URL。

网络侧 API 审计事件和每日摘要可用于主权租户网关。调试调用租户生命周期 endpoint 的外部系统时，请使用这些日志。

## 主权客户操作 URL {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 会将主权租户客户操作路由回主站点，用于 Account、checkout、billing、invoice、站点、模板切换和域名映射流程。渲染租户侧管理链接的集成应将这些操作指向主站点客户面板，并在用户完成操作后应能够导航回租户时包含经过验证的返回目标。

对跨域管理链接使用核心 SSO 包装器：

```php
$url = wu_with_sso($main_site_customer_url);
```

生成的 URL 仍可通过 `wu_sso_url` 过滤，该过滤器接收 SSO URL、当前用户、目标站点 ID 和重定向上下文。addon 可以使用该过滤器附加提供商特定的上下文，或在保留 Ultimate Multisite 令牌验证的同时替换代理 URL。

不要在主权租户内部重复存储会员资格、发票、账单地址、模板或域名管理状态。将租户 Dashboard 视为启动器，将主站点客户面板视为托管操作的记录系统。

## 迁移验证 {#migration-verification}

在迁移或生命周期集成更改租户数据后，运行验证关卡：

- `wp tenant verify-no-legacy --site=<site-id>` 确认租户不再依赖旧版网络侧路径。
- `wp tenant verify-sovereign-push --site=<site-id>` 确认主权推送任务可以处理并清空队列。

集成应将验证失败视为部署阻断项，并避免在故障解决前将租户标记为上线。

## 租户删除 {#tenant-deletion}

删除流程应调用 addon 拆除路径，以便清理租户数据库凭据。外部集成可在拆除成功后移除提供商资源，但不应在验证或异步推送任务仍在运行时删除主机数据库或文件夹。

## 已弃用的数据库路由器 {#deprecated-database-router}

旧版 `Database_Router` 已被弃用存根取代。新的集成应通过当前站点路由器和租户注册表 API 解析租户，而不是依赖旧的路由器类。
