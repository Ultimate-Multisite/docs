---
title: 主机多租户
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger 多租户

Ultimate Multisite 1.2.0 添加了 Hostinger 多租户功能，现在托管的域名可以与现有的 Hostinger 域名映射集成一起参与主权租户的配置。

当您通过 Hostinger hPanel 管理租户域名和隔离的租户基础设施时，请使用此功能。

## 设置注意事项

1. 在 **Ultimate Multisite > Settings > Host Integrations** 中配置核心 Hostinger 集成。
2. 确认 Hostinger API token 可以管理目标域名或子域名。
3. 启用多租户插件（Multi-Tenancy addon）。
4. 在发布租户之前，配置租户隔离策略。
5. 在将生产流量发送给租户之前，运行迁移验证工作流。

主机商能力使用共享的 Hostinger 连接来进行服务器端操作。DNS 仍然必须指向正确的 Hostinger 账户，并且 hPanel 账户限制依然适用。

## 特定功能变更

- 可以创建具有主机感知域操作的主权租户（Sovereign tenants）。
- 在授予验证之前，同机器的数据库主机字符串会被规范化处理。
- 对于由 Hostinger 管理的租户，除非 WordPress 运行时需要本地覆盖，否则应使用 hPanel 中显示的数据库主机值。
- SSO 访问依赖于租户域名解析到托管在 Hostinger 上的租户。

## 故障排除 Hostinger 租户

如果租户安装失败，请确认域名是否已绑定到 Hostinger 账户。
如果数据库验证失败，请将租户的数据库用户名、数据库名称和主机绑定信息与 hPanel 进行比对。
如果 **Visit (SSO)** 失败，请确认租户域名的 DNS 和 SSL 是否已启用。
如果拆除（teardown）后仍有主机资源残留，请在确认备份之后，从 hPanel 中删除任何剩余的数据库、用户或文件夹。
