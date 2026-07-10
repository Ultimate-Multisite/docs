---
title: 多租户隔离
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# 多租户隔离 {#multi-tenancy-isolation}

Ultimate Multisite 1.2.0 支持为主站点（subsite）提供数据库和文件系统的独立隔离，以实现主权租户的隔离。这可以在保持网络级别配置、计费和管理的便利性的同时，确保租户数据相互独立。

## 隔离策略 {#isolation-strategy}

对于需要更强数据分离、专用文件系统存储或独立主机边界的客户，请使用主权隔离（sovereign isolation）。

每个主权租户都应该拥有：

- 一个专用的租户数据库或已获得主机批准的数据库前缀策略。
- 一个专用的租户文件系统根目录。
- 一条租户注册表条目，用于将站点映射到其数据库、根路径、主机名和隔离模型。
- 在该租户被视为上线之前完成迁移验证的结果。

## 数据库主机绑定 {#database-host-binding}

版本 1.2.0 对主机的默认同机绑定行为进行了更改，以支持主权安装。例如 `localhost` 等同机值会被规范化，这样 Bedrock、FrankenPHP 和容器化的 WordPress 安装就可以与 MySQL 实际看到的宿主机字符串进行权限授予和验证。

在配置主权租户时：

1. 将数据库主机设置为租户运行时所需的对应值。
2. 当主机期望本地连接时，请使用 `localhost` 来设置本地套接字安装。
3. 仅当数据库服务器授予该主机权限时，才使用 `127.0.0.1` 或服务主机名。
4. 在更改主机绑定后运行迁移验证。

如果验证报告显示失败，请将租户数据库的用户权限与配置的宿主绑定进行比较。对于被授予 `user@localhost` 的用户，这与 `user@127.0.0.1` 或 `user@%` 是不同的。

## 文件系统根目录 (Filesystem root) {#filesystem-root}

租户的根目录在重启和部署后应该保持稳定。请避免使用临时的挂载路径。对于 Bedrock 风格的安装，请确认租户根目录指向租户引导程序（bootstrap）期望的 WordPress 网站根目录，而不仅仅是项目根目录。

## 供应顺序 (Provisioning order) {#provisioning-order}

对于新的主权租户，请按照以下顺序执行：

1. 创建租户注册表条目 (Create the tenant registry entry)。
2. 创建租户数据库和数据库用户 (Create the tenant database and database user)。
3. 引导（Bootstrap）租户模式/架构 (Bootstrap the tenant schema)。
4. 供应租户用户 (Provision tenant users)。
5. 配置租户文件系统路径 (Configure tenant filesystem paths)。
6. 运行迁移验证 (Run migration verification)。
7. 在验证通过后切换路由或 DNS (Switch routing or DNS after verification passes)。

此订单可以防止在数据库写入器、用户和文件系统准备就绪之前，部分隔离的租户接收到流量。

## 主权客户管理流程 {#sovereign-customer-management-flows}

当启用主权模式时，Ultimate Multisite v2.13.0 会将客户管理操作保留在主站点上。租户仍然可以作为一个隔离的 WordPress 安装运行，但那些依赖网络计费、会员资格或共享账户数据的面向客户的操作，应该将客户重定向到主站点，而不是尝试在租户运行时完成该操作。

主站点流程适用于以下情况：

结账和计划更改。
账户概览和客户资料操作。
账单地址更新和支付管理界面。
发票和支付历史记录视图。
站点管理操作，例如添加或删除站点。
模板切换。
域名映射和主域更改。

当客户从一个主租户开始执行这些操作时，Ultimate Multisite 会构建相应的站点主 URL，并在安全的情况下保留源租户作为返回目标。这样，客户就可以在网络记录上完成管理操作，然后返回到租户的上下文，而不会在主数据库中重复创建账单或会员状态。

对于运营商来说，实际操作的原则是：将计费、账户、结账、发票、模板和域名管理页面保留在主站点上供主域网使用。租户仪表盘可以链接到这些页面，但主站点仍然是操作的“真理来源”（即最终权威信息）。
