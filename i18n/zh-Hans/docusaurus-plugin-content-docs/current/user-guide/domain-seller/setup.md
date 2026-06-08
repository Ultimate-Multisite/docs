---
title: 设置和提供商配置
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller：设置和提供商配置

Domain Seller addon 配备了引导式设置向导，会一步步指导您完成所有必需的设置。本页面介绍了向导的流程，以及如何在之后配置或重新配置提供商。

## 要求

- **Ultimate Multisite** v2.4.12 或更高版本，并已在网络层面激活
- **PHP** 7.4+
- 至少一个受支持的注册商的 API 凭证

## 首次运行设置向导

首次在网络层面激活插件时，设置向导会自动启动。您也可以随时通过 **Network Admin › Ultimate Multisite › Domain Seller Setup** 访问它。

### 步骤 1 — 选择提供商

选择您想要连接的注册商。支持的选项包括：

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### 步骤 2 — 输入凭证

每个提供商的凭证字段都不同：

**OpenSRS** — 用户名和私钥（来自 OpenSRS Reseller Control Panel）

**Namecheap** — 用户名和 API key（来自 Account › Tools › API Access）

**GoDaddy** — API key 和 secret（来自 developer.godaddy.com）

**ResellerClub** — Reseller ID 和 API key（来自 ResellerClub 控制面板）

**NameSilo** — API key（来自 namesilo.com › Account › API Manager）

**Enom** — Account ID 和 API token

如果可用，请勾选 **Sandbox mode**，以便在投入使用前，先在提供商的测试环境中进行测试。

### 步骤 3 — 测试连接

点击 **Test Connection**。向导会发送一个轻量级的 API 调用来验证凭证和连接性。在继续之前，请修复任何凭证问题。

### 步骤 4 — 导入 TLDs

点击 **Import TLDs**，可以从连接的提供商处拉取所有可用的 TLDs（顶级域名）和批发定价。这将填充域名产品使用的 TLD 列表。对于 TLD 目录较大的提供商，导入过程可能需要 30–60 秒。

TLDs 也会每天通过计划的 cron job 自动重新同步一次。

### 步骤 5 — 创建域名产品

向导会创建一个默认的“捕获所有”域名产品，并设置 10% 的加价。您可以立即编辑此产品，或者选择跳过，然后在 **Ultimate Multisite › Products** 下手动创建产品。

有关完整的产品配置指南，请参阅 [Domain Products and Pricing](./domain-products)。

---

## 重新配置提供商

前往 **Network Admin › Ultimate Multisite › Settings › Domain Seller**（或点击插件列表中的 **Settings**）。

设置页面包含以下选项：

- **Enable domain selling** — 开关整个功能（开启/关闭）
- **Default provider** — 用于域名搜索和新产品的默认提供商
- **Max TLDs per search** — 客户搜索时检查多少个 TLDs；值越高，显示的选项越多，但速度越慢
- **Availability cache duration** — 缓存可用性和定价结果的时长；值越低，准确性越高，但 API 调用次数也会增加
- **Manage domain products** — 指向产品列表的快速链接
- **Configure providers** — 打开集成向导，用于添加或重新配置提供商

### 添加第二个提供商

点击 **Configure providers**，并为新的注册商再次运行向导。您可以同时配置多个提供商。您可以将每个域名产品分配给特定的提供商，或者保持使用默认提供商。

### 手动同步 TLDs

在设置页面，点击任何已配置提供商旁边的 **Sync TLDs**，即可拉取最新的定价信息。当提供商更新批发定价或添加新 TLDs 时，使用此功能非常有用。

---

## 日志

每个提供商都有自己的日志通道。您可以在 **Network Admin › Ultimate Multisite › Logs** 下查看日志：

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | 所有注册尝试（成功和失败） |
| `domain-seller-renewal` | 续费任务结果 |
| `domain-seller-opensrs` | OpenSRS 的原始 API 活动记录 |
| `domain-seller-namecheap` | Namecheap 的原始 API 活动记录 |
| `domain-seller-godaddy` | GoDaddy 的原始 API 活动记录 |
| `domain-seller-resellerclub` | ResellerClub 的原始 API 活动记录 |
| `domain-seller-namesilo` | NameSilo 的原始 API 活动记录 |
| `domain-seller-enom` | Enom 的原始 API 活动记录 |
