---
title: 主权迁移验证
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# 主权迁移验证

Ultimate Multisite 1.2.0 包含了用于主权租户迁移的 WP-CLI 验证命令。当租户迁移、SSO访问或隔离安装没有按预期工作时，请使用这些命令进行验证。

## 需要运行的命令 {#commands-to-run}

从网络 WordPress 安装中运行验证：

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

请使用您正在迁移的租户的 site ID。第一个命令会检查该租户是否不再依赖旧的网络端数据。第二个命令会验证主权推送任务是否可以正常处理和清理。

## 常见失败情况 {#common-failures}

### 数据库授权与主机不匹配 {#database-grants-do-not-match-the-host}

如果验证报告显示授予或写入用户失败，请检查配置的数据库主机。`localhost`、`127.0.0.1` 和容器服务名称是不同的 MySQL 授权主机。更新租户主机绑定或数据库授权后，重新运行验证。

### Bedrock 或本地安装无法连接 {#bedrock-or-local-installs-cannot-connect}

Bedrock 和本地套接字（socket）安装可能会将数据库报告为 `localhost`，而运行时是通过一个规范化地址进行连接的。在版本 1.2.0 中，会规范化同一台机器的主机字符串，但自定义主机覆盖仍然可能与数据库授权产生冲突。

### 异步推送队列未清空 {#async-push-queue-does-not-drain}

如果 `verify-sovereign-push` 没有完成，请检查 Action Scheduler 或配置的异步运行器（async runner）。只有在确认作业可以安全重试或丢弃后，才能清除失败的任务。

### 租户用户数不正确 {#tenant-user-count-is-wrong}

迁移时需要为主租户（sovereign tenant）配置用户。如果预期的安装用户缺失，请在重试 SSO 之前重新运行用户配置步骤。

### SSO 访问被拒绝 {#sso-visit-is-rejected}

无状态租户的自动登录要求租户域名、Origin Pin、Token Purpose、Nonce 和过期时间必须匹配。请确认租户 URL 是否正确，并在生成 SSO 访问后不久尝试登录。

## 何时重试 {#when-to-retry}

在每次基础设施更改后都重试验证。在所有验证检查都通过之前，不要切换生产流量、删除源数据或移除迁移凭证。
