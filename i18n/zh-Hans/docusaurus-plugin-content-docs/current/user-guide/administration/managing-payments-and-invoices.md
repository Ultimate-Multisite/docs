---
title: 管理支付和发票
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# 管理支付和发票

## 支付设置

在开始接收支付之前，您需要配置与支付相关的设置。导航到 **Ultimate Multisite → 设置** 并点击 **支付** 选项卡。

![支付设置标签](/img/admin/settings-payments-top.png)

### 通用支付选项

在通用设置中，您可以配置：

- **货币** — 用于交易的默认货币
- **货币位置** — 货币符号出现的位置（金额前/后）

![支付网关设置](/img/admin/settings-payments-options.png)

### 支付网关

Ultimate Multisite 支持多种支付网关。您可以在支付设置选项卡中启用并配置每个网关。

![支付网关配置](/img/admin/settings-payments-gateways.png)

可用的网关包括：

- **Stripe** — 通过 Stripe 的信用卡支付
- **PayPal** — PayPal 支付
- **Manual** — 用于离线或自定义支付处理

每个网关都有自己的配置部分，您可以在其中输入 API 密钥和其他设置。

![额外网关设置](/img/admin/settings-payments-gateways-2.png)

### 沙盒模式

您可以启用 **沙盒模式** 来测试您的支付集成，确保上线前无误。当沙盒模式激活时，不会产生真实费用。

## 查看支付

导航到 Ultimate Multisite 下的 **支付** 页面，查看网络中所有交易。

![支付列表](/img/admin/payments-list.png)

您可以按状态（已完成、待处理、失败、已退款）过滤支付，并搜索特定交易。

点击支付查看其完整详情，包括明细项目、关联会员、客户信息和支付网关数据。

## 发票

Ultimate Multisite 可以自动为支付生成发票。您可以在支付设置中自定义发票模板和编号格式。

发票自定义选项包括：

- **公司名称和地址** 显示在发票上
- **发票编号** 的格式和序列
- **Logo** 显示在发票标题中
- **自定义页脚文本** 用于条款、备注或法律信息

要自定义发票模板，请转到 **Ultimate Multisite → 设置 → 支付** 并查找与发票相关的设置。
