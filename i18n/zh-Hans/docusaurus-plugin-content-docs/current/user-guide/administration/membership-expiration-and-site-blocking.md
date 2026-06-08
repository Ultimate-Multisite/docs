---
title: 会员资格过期和网站封锁
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# 会员资格过期和网站封禁

本指南解释了 Ultimate Multisite 如何处理会员资格过期、试用期结束和前端网站封禁。它涵盖了会员资格从“活跃”到“过期”的整个生命周期，介绍了控制网站是否被封禁的设置，以及在会员资格过期后网站仍可访问时需要检查哪些内容。

## 会员资格状态生命周期

Ultimate Multisite 中的每个会员资格都具有以下状态之一：

:::note 免费会员资格是终身有效的
免费会员资格不会自动过期。Ultimate Multisite 将其视为终身访问权限，因此除非管理员更改其状态或将客户转移到其他产品，否则不会在过期检查中包含它们。
:::

| 状态 | 含义 |
|---|---|
| **Pending** | 等待首次付款或电子邮件验证 |
| **Trialing** | 活跃试用期，尚未收取任何费用 |
| **Active** | 已付费且当前有效 |
| **On Hold** | 等待续费付款（已创建发票，等待付款） |
| **Expired** | 超过了过期日期和宽限期，且未续费 |
| **Cancelled** | 由客户或管理员明确取消 |

### 会员资格如何转为过期

Ultimate Multisite 每小时都会运行一次后台检查，查找应标记为过期的会员资格。此检查使用 [Action Scheduler](https://actionscheduler.org/)（而不是直接使用 WP-Cron）并作为 `wu_membership_check` 定时动作运行。

过期检查默认具有 **3 天的内置宽限期**。在会员资格的 `date_expiration` 过去后的 3 天内，系统不会将其标记为 `expired`。这为客户提供了时间来完成延迟付款，然后再更改其状态。

:::info
3 天的过期宽限期与下面描述的“前端封禁宽限期”是分开的。过期宽限期控制的是 **状态** 从活跃/待续费到过期的时间点。前端封禁宽限期控制的是在状态已经改变后，**网站** 被封禁的时间点。
:::

#### 自动续费与非自动续费会员资格

区分这一点对于理解过期行为至关重要：

- **非自动续费会员资格** (`auto_renew = false`)：每小时的 cron job 会处理完整的生命周期——它会创建续费付款，将会员资格状态转为 on-hold，如果未收到付款，最终会将其标记为过期。

- **自动续费会员资格** (`auto_renew = true`)：cron 过期检查会 **完全跳过这些会员资格**。系统预期支付网关（Stripe、PayPal 等）会通过 webhooks 通知 Ultimate Multisite 订阅失败或被取消。如果未收到 webhook（由于端点配置错误、网关故障或系统外部取消订阅），即使超过了过期日期，会员资格也可能无限期保持 `active` 状态。

### 试用期如何结束

当试用会员资格的试用期结束时，系统会执行以下操作：

1. 创建一个包含全额订阅金额的待处理续费付款
2. 将会员资格状态从 `trialing` 转换为 `on-hold`
3. 向客户发送续费付款通知邮件

此过程与常规的过期检查运行在相同的每小时时间表上，但 **仅针对非自动续费会员资格**。对于自动续费的试用期，支付网关负责将状态从试用期过渡到付费订阅。

## 封禁前端访问

默认情况下，当会员资格过期或处于待续费状态时，**只有 wp-admin 控制面板会被限制**。网站的公共前端仍然对访客开放。如果需要同时封禁公共访问，您必须启用 **Block Frontend Access**（封禁前端访问）设置。

### 配置设置

导航到 **Ultimate Multisite > Settings > Memberships**，并启用 **Block Frontend Access**。

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

这是会员资格设置页面的完整视图：

![Membership settings full page](/img/config/settings-membership-full.png)

有三个相关的设置控制着此行为：

| 设置 | 描述 | 默认值 |
|---|---|---|
| **Block Frontend Access** | 主开关。启用后，当网络站点会员资格不再活跃时，会封禁其公共前端。 | Off |
| **Frontend Block Grace Period** | 会员资格不活跃后等待封禁的天数。设置为 `0` 可立即封禁。 | 0 |
| **Frontend Block Page** | 当网站被封禁时，将访客重定向到的主站页面。如果未设置，访客将看到通用的“网站不可用”消息。 | None |

### 网站被封禁时访客看到什么

当前端访问被封禁时，访问该网站的访客将：

1. **被重定向**到您在 **Frontend Block Page** 中选择的页面（如果已配置），或者
2. **看到默认消息**：“此网站目前不可用。”，并附带一个指向网站管理员登录页面的链接。

网站管理员仍然可以登录——登录页面永远不会被封禁。

### 什么会被封禁以及何时封禁

封禁行为取决于会员资格状态：

| 会员资格状态 | 前端是否封禁？ | 是否应用宽限期？ |
|---|---|---|
| Active | 否 | -- |
| Trialing | **否**（见下方说明） | -- |
| On Hold | 视为活跃——不封禁 | -- |
| Expired | **是**，如果 Block Frontend Access 已开启 | 是 |
| Cancelled | **是**，总是（无论设置如何） | **否**——立即封禁 |
| Pending | 通过会员资格检查不会被封禁 | -- |

:::warning 试用会员资格不会被封禁
即使试用期已结束，状态为 `trialing` 的会员资格在前端也**不会**被封禁。试用期必须首先过渡到另一个状态（通常通过 cron job 变为 `on-hold`，然后如果未付款则变为 `expired`）。如果您看到试用会员资格没有过渡，请检查下面的故障排除部分。
:::

:::note 取消的会员资格会绕过宽限期
无论是否启用了 Block Frontend Access，一旦过期日期过去，取消的会员资格总是会被封禁。Frontend Block Grace Period 不适用于已取消的会员资格。
:::

## 故障排除：会员资格过期后网站仍可访问

如果会员资格过期后网站仍然可以公开访问，请按顺序执行以下检查：

### 1. 确认 Block Frontend Access 设置已启用

前往 **Ultimate Multisite > Settings > Memberships**，确认 **Block Frontend Access** 开关已打开。此设置 **默认关闭**，这意味着当会员资格不活跃时，只有 wp-admin 会被限制。

### 2. 检查前端封禁宽限期

在同一设置页面，检查 **Frontend Block Grace Period** 的值。如果此值设置为 7 天，例如，那么在会员资格过期后的 7 天内，前端不会被封禁——即使会员资格状态已经为 `expired`。

如果您希望会员资格不活跃后立即封禁，请将其设置为 `0`。

### 3. 确认会员资格状态是否已实际改变

前往 **Ultimate Multisite > Memberships**，检查受影响会员资格的状态。如果尽管已超过过期日期，它仍然显示为 `active`，则表示状态转换尚未发生。常见原因：

- **会员资格是自动续费的**：检查会员资格编辑页面上的 `auto_renew` 字段。如果启用了自动续费，过期 cron 会跳过此会员资格——它依赖支付网关报告失败。请检查您的网关控制面板（Stripe、PayPal），确认订阅状态是否与 Ultimate Multisite 显示的一致。

- **cron job 未运行**：请看下一步。

### 4. 验证 Action Scheduler 是否正在运行

Ultimate Multisite 使用 Action Scheduler 来处理其 cron job。请前往网络管理员的 **Tools > Scheduled Actions**，查找：

- **`wu_membership_check`** —— 这应该显示为一个每小时运行的重复动作。如果缺失，则表示会员资格检查没有被安排。
- **`wu_async_mark_membership_as_expired`** —— 这些是标记特定会员资格为过期的单个任务。如果在这里看到失败的动作，它们可能包含解释原因的错误消息。

如果看到卡住或失败的动作，您可能存在 Action Scheduler 问题。常见原因：

- 在 `wp-config.php` 中设置了 `DISABLE_WP_CRON` 为 `true`，但没有系统级别的 cron 替代方案
- 网站流量低——WP-Cron 只有在有人访问网站时才会运行

为确保可靠的 cron 执行，请设置系统 cron job：

```bash
# 通过 wget 每 5 分钟运行一次
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# 或通过 WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. 检查网关 Webhook 问题（自动续费会员资格）

如果会员资格是自动续费的，并且网关订阅已被取消或失败，但 Ultimate Multisite 仍然显示其为 `active`：

- **Stripe**: 前往 Stripe Dashboard > Customers，检查订阅状态。然后，在 Developers > Webhooks 下验证 webhook 端点是否处于活动状态。该端点应指向您的网站并显示成功的交付记录。
- **PayPal**: 检查您的 PayPal 商业账户中的订阅状态，并验证 IPN/webhook 交付。

如果网关显示订阅已取消，但 Ultimate Multisite 没有显示，则很可能是 webhook 通知丢失了。您可以在 **Ultimate Multisite > Memberships > [编辑会员资格]** 中手动更改会员资格状态。

### 6. 检查过期宽限期（Cron 级别）

cron 检查本身有自己的宽限期（默认：3 天），用于在标记会员资格为过期之前。这与前端封禁宽限期是分开的。网站被封禁前的总时间可能是：

**过期宽限期（3 天）** + **前端封禁宽限期（您的设置）** = 总延迟

例如，使用默认设置和 7 天的前端宽限期，网站实际被封禁的时间可能长达 10 天，超过了 `date_expiration`。

### 7. 手动过期会员资格

如果您需要立即封禁网站，而无需等待 cron 周期，您可以手动更改会员资格状态：

1. 前往 **Ultimate Multisite > Memberships**
2. 点击受影响的会员资格
3. 将状态更改为 **Expired** 或 **Cancelled**
4. 点击 **Save**

前端封禁将在下次页面加载时生效（对于已过期的会员资格，受前端封禁宽限期约束；对于已取消的会员资格，则立即生效）。

## 总结

从过期日期到网站封禁的完整时间线：

```text
date_expiration 过去
       |
       v
  [3天 cron 宽限期]     <-- 会员资格仍显示为 active/on-hold
       |
       v
  Cron 将会员资格标记为“expired”
       |
       v
  [前端封禁宽限期]  <-- 配置在 Settings > Memberships 中
       |
       v
  网站前端被封禁
```

对于已取消的会员资格，路径更短：

```text
  会员资格被取消
       |
       v
  date_expiration 过去（无宽限期）
       |
       v
  网站前端立即被封禁
```

## 开发者参考

以下 Hook 和 Filter 允许您自定义过期和封禁行为：

| Hook/Filter | 描述 |
|---|---|
| `wu_membership_grace_period_days` | 过滤标记会员资格为过期之前的宽限期天数（默认：3） |
| `wu_schedule_membership_check_interval` | 过滤会员资格检查之间的间隔时间（默认：1 小时） |
| `wu_membership_renewal_days_before_expiring` | 过滤在过期前多少天创建续费付款（默认：3） |
| `wu_blocked_site_reactivation_url` | 过滤，用于在网站被封禁时提供自定义的重新激活 URL |
| `wu_membership_is_active` | 过滤判断会员资格是否被视为活跃 |
| `wu_membership_expired_check_query_params` | 过滤用于查找过期会员资格的查询参数 |
| `wu_membership_trial_check_query_params` | 过滤用于查找过期试用期的查询参数 |
