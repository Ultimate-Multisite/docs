---
title: 自定义网关开发
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# 自定义网关开发

你可以通过扩展 `Base_Gateway` 类来创建自定义支付网关。

## 网关类 {#gateway-class}

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## 注册网关 {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 关键方法 {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | 处理一次性付款 |
| `process_signup()` | 设置周期性订阅 |
| `process_refund()` | 处理退款请求 |
| `get_payment_methods()` | 返回客户已保存的付款方式 |

## 周期性会员资格的续订凭据 {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 允许网关集成在 `auto_renew` 被持久化之前报告周期性会员资格是否具有可重复使用的续订凭据。Hook `wu_membership_has_renewal_credential` 并返回：

- 当会员资格具有网关订阅、账单协议、保管库 token，或等效的可重复使用付款方式时，返回 `true`。
- 当网关知道周期性凭据缺失或不可用时，返回 `false`。
- 返回 `null` 表示选择退出，并保持默认行为不变。

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

当网关返回 `false` 时，Ultimate Multisite 会在禁用自动续订的情况下保存该会员资格，并存储缺失凭据标记。使用 `wu_membership_renewal_credential_missing` 通知管理员、启动重新授权流程，或添加支持备注：

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

在存储新的可重复使用凭据后，作为网关成功重新授权流程的一部分，清除缺失凭据标记。

## 提示 {#tips}

- 失败时始终返回 `WP_Error`，以便 Ultimate Multisite 可以处理错误显示
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- 使用 `wu_log_add()` 进行网关专用日志记录

## AI 连接器提供方能力 {#ai-connector-provider-capabilities}

调用由 AI 连接器支持的操作的自定义集成，应与 AI Provider for Anthropic Max v1.3.0 引入的受支持 OAuth 提供方集合保持一致：

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | 支持现有的 OAuth 账户池工作流。在代理连接器请求时，保留 Anthropic 工具使用 payload，包括空工具数组和往返思考签名。 |
| **OpenAI ChatGPT/Codex** | 支持 OAuth 池工作流，以及连接器支持操作的完整工具支持行为。传递工具定义和工具调用结果，不要剥离 Codex 专用工具元数据。 |
| **Google AI Pro** | 支持 OAuth 池工作流和基于 SDK 的提供方集成。在路由请求之前，请在 OAuth 完成后刷新提供方账户。 |

Cursor Pro 集成和设置路径已被移除。不要将 Cursor Pro 注册为可选择的提供方，也不要在自定义连接器 UI 中展示 Cursor 专用的 OAuth 说明。

对于沙盒化或无头环境，请公开手动 OAuth 回退路径，以便管理员可以粘贴返回的授权数据，并在不依赖自动浏览器重定向的情况下完成账户连接。
