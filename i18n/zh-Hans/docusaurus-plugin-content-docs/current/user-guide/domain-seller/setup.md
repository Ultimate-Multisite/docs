---
title: 设置和提供商配置
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller：设置和提供商配置

Domain Seller addon 随附引导式设置向导，会带你完成每个必需步骤。本页介绍向导流程，以及之后如何配置或重新配置提供商。

## 要求 {#requirements}

- **Multisite Ultimate** v2.4.12 或更高版本，已在网络中启用
- **PHP** 7.4+
- 至少一个受支持注册商的 API 凭据

## 首次运行设置向导 {#first-run-setup-wizard}

设置向导会在你第一次在网络中启用 plugin 时自动启动。也可以随时从 **Network Admin › Ultimate Multisite › Domain Seller Setup** 访问。

### 第 1 步 — 选择提供商 {#step-1--choose-a-provider}

选择你要连接的注册商。受支持选项：

| 提供商 | DNS 管理 | WHOIS 隐私 |
|---|---|---|
| OpenSRS | 是 | 是 |
| Namecheap | 否 | 是（WhoisGuard，免费） |
| HostAfrica | 是 | 是（ID 保护） |
| Openprovider | 是 | 是 |
| Hostinger | 通过核心 Hostinger 域名映射用于托管域名 | 是 |
| GoDaddy | 否 | 否 |
| ResellerClub | 是 | 否 |
| NameSilo | 否 | 否 |
| Enom | 是 | 否 |

### 第 2 步 — 输入凭据 {#step-2--enter-credentials}

每个提供商都有不同的凭据字段：

**OpenSRS** — 用户名和私钥（来自 OpenSRS Reseller Control Panel）

**Namecheap** — 用户名和 API 密钥（来自 Account › Tools › API Access）

**HostAfrica** — 来自 HostAfrica reseller module 的 Domains Reseller API endpoint 和凭据。目前未记录单独的沙盒 endpoint；在执行实时注册之前，请先用安全的只读检查进行测试。

**Openprovider** — 启用了 API 访问的用户名和密码。可选沙盒模式使用 Openprovider sandbox API，并且可选的默认客户 handle 可重复用于注册。

**Hostinger** — 来自核心 Hostinger integration 的共享 Hostinger hPanel API token。同一个 token 同时支持核心域名映射和 Domain Seller 注册操作。

**GoDaddy** — API 密钥和密钥（来自 developer.godaddy.com）

**ResellerClub** — Reseller ID 和 API 密钥（来自 ResellerClub control panel）

**NameSilo** — API 密钥（来自 namesilo.com › Account › API Manager）

**Enom** — Account ID 和 API token

在可用时勾选 **Sandbox mode**，以便在上线前针对提供商的测试环境进行测试。

### 第 3 步 — 测试连接 {#step-3--test-the-connection}

点击 **Test Connection**。向导会发送一个轻量级 API 调用来验证凭据和连接性。继续之前请修复任何凭据问题。

### 第 4 步 — 导入 TLD {#step-4--import-tlds}

点击 **Import TLDs**，从已连接的提供商拉取所有可用 TLD 和批发价格。这会填充域名产品使用的 TLD 列表。对于拥有大型 TLD 目录的提供商，导入可能需要 30–60 秒。

TLD 也会通过计划的 cron job 每天自动重新同步一次。

### 第 5 步 — 创建域名产品 {#step-5--create-a-domain-product}

向导会创建一个默认的兜底域名产品，并设置 10% 加价。你可以立即编辑此产品，或跳过并在 **Ultimate Multisite › Products** 下手动创建产品。

完整产品配置指南请参阅 [域名产品和定价](./domain-products)。

---

## 重新配置提供商 {#reconfiguring-a-provider}

前往 **Network Admin › Ultimate Multisite › Settings › Domain Seller**（或在 plugin 列表中点击 **Settings**）。

设置页面包含：

- **Enable domain selling** — 开启/关闭整个功能
- **Default provider** — 用于域名搜索和新产品的提供商
- **Max TLDs per search** — 客户搜索时要检查的 TLD 数量；值越高显示的选项越多，但速度越慢
- **Availability cache duration** — 缓存可用性和定价结果的时长；值越低越准确，但会增加 API 调用
- **Manage domain products** — 指向产品列表的快捷链接
- **Configure providers** — 打开 Integration Wizard 以添加或重新配置提供商

### 添加第二个提供商 {#adding-a-second-provider}

点击 **Configure providers** 并为新的注册商再次运行向导。你可以同时配置多个提供商。将每个域名产品分配给特定提供商，或保留默认设置。

### 手动同步 TLD {#syncing-tlds-manually}

在设置页面中，点击任何已配置提供商旁边的 **Sync TLDs** 以拉取最新价格。当提供商更新批发价格或添加新 TLD 时，这很有用。

---

## 日志 {#logs}

每个提供商都会写入自己的日志通道。日志可在 **Network Admin › Ultimate Multisite › Logs** 下查看：

| 日志通道 | 内容 |
|---|---|
| `domain-seller-registration` | 所有注册尝试（成功和失败） |
| `domain-seller-renewal` | 续订任务结果 |
| `domain-seller-opensrs` | 原始 OpenSRS API 活动 |
| `domain-seller-namecheap` | 原始 Namecheap API 活动 |
| `domain-seller-hostafrica` | 原始 HostAfrica API 活动 |
| `domain-seller-openprovider` | 原始 Openprovider API 活动 |
| `domain-seller-hostinger` | 原始 Hostinger API 活动 |
| `domain-seller-godaddy` | 原始 GoDaddy API 活动 |
| `domain-seller-resellerclub` | 原始 ResellerClub API 活动 |
| `domain-seller-namesilo` | 原始 NameSilo API 活动 |
| `domain-seller-enom` | 原始 Enom API 活动 |

---

## 提供商功能说明 {#provider-capability-notes}

并非每个注册商 API 都公开相同的操作。addon 会以清晰的面向管理员的错误提示呈现不受支持的操作，而不是静默失败。

- **HostAfrica** 支持最广泛的实时经销商工作流，包括查询、TLD/价格同步、注册、续费、转移、域名服务器更新、DNS 记录、EPP 代码、注册商锁和 ID 保护。
- **Openprovider** 支持经销商价格的 TLD 同步、注册、续费、转移、域名服务器更新、DNS 区域、EPP 代码、注册商锁和 WHOIS 隐私。它使用短期 bearer token 进行身份验证，该附加组件会自动刷新。
- **Hostinger** 通过共享的 hPanel API token 支持可用性搜索、注册、组合查询、域名服务器更新、注册商锁和 WHOIS 隐私。Hostinger 的公共 Domains API 不公开经销商/批发价格、入站转移、显式续费或 EPP 代码获取；续费仅支持自动续费。
