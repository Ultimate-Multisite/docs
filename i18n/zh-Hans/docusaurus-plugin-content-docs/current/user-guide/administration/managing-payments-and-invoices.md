---
title: 管理付款和发票
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# 管理付款和发票 {#managing-payments-and-invoices}

## 付款设置 {#payment-settings}

在开始接收付款之前，您需要配置与付款相关的设置。导航到 **Ultimate Multisite → Settings**，然后点击 **Payment** 选项卡。

![付款设置选项卡](/img/admin/settings-payments-top.png)

以下是付款设置页面的完整视图：

![付款设置完整页面](/img/admin/settings-payments-full.png)

### 常规付款选项 {#general-payment-options}

在常规设置中，您可以配置：

- **货币** — 用于交易的默认货币
- **货币位置** — 货币符号显示的位置（金额之前/之后）

![付款网关设置](/img/admin/settings-payments-options.png)

### 付款网关 {#payment-gateways}

Ultimate Multisite 支持多个付款网关。您可以从 Payment 设置选项卡启用并配置每一个网关。

![付款网关配置](/img/admin/settings-payments-gateways.png)

可用网关包括：

- **Stripe** — 通过 Stripe 进行信用卡付款
- **PayPal** — PayPal 付款
- **Manual** — 用于离线或自定义付款处理

每个网关都有自己的配置部分，您可以在其中输入 API 密钥和其他设置。

![其他网关设置](/img/admin/settings-payments-gateways-2.png)

### 沙盒模式 {#sandbox-mode}

您可以启用 **沙盒模式**，以便在上线前测试您的付款集成。沙盒模式启用时，不会产生真实扣款。

## 查看付款 {#viewing-payments}

导航到 Ultimate Multisite 下的 **付款** 页面，查看整个网络中的所有交易。

![付款列表](/img/admin/payments-list.png)

您可以按状态（已完成、待处理、失败、已退款）筛选付款，并搜索特定交易。

点击某笔付款可查看其完整详细信息，包括行项目、关联的会员资格、客户信息以及付款网关数据。

## 发票 {#invoices}

Ultimate Multisite 可以自动为付款生成发票。您可以从 Payment 设置中自定义发票模板和编号格式。

发票自定义选项包括：

- 发票上显示的**公司名称和地址**
- **发票编号**格式和序列
- 发票页眉上显示的**Logo**
- 用于条款、备注或法律信息的**自定义页脚文本**

要自定义发票模板，请前往 **Ultimate Multisite → Settings → Payment**，并查找与发票相关的设置。
