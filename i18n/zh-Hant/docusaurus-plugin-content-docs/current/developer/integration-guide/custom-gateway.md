---
title: 自訂閘道開發
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# 自訂 Gateway 開發

你可以透過擴充 `Base_Gateway` 類別來建立自訂付款 gateway。

## Gateway 類別 {#gateway-class}

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

## 註冊 Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 主要方法 {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | 處理一次性付款 |
| `process_signup()` | 設定定期訂閱 |
| `process_refund()` | 處理退款請求 |
| `get_payment_methods()` | 回傳客戶已儲存的付款方式 |

## 定期 membership 的續訂憑證 {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 允許 gateway 整合在 `auto_renew` 被保存之前，回報定期 membership 是否具有可重複使用的續訂憑證。Hook `wu_membership_has_renewal_credential` 並回傳：

- 當 membership 有 gateway 訂閱、帳單協議、保管庫 token，或等效的可重複使用付款方式時，回傳 `true`。
- 當 gateway 知道定期憑證缺失或無法使用時，回傳 `false`。
- 回傳 `null` 以選擇退出，並保持預設行為不變。

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

當 gateway 回傳 `false` 時，Ultimate Multisite 會以停用自動續訂的狀態儲存 membership，並儲存缺失憑證標記。使用 `wu_membership_renewal_credential_missing` 來通知管理員、啟動重新授權流程，或新增支援備註：

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

在儲存新的可重複使用憑證後，請將清除缺失憑證標記作為你的 gateway 成功重新授權流程的一部分。

## 提示 {#tips}

- 失敗時一律回傳 `WP_Error`，讓 Ultimate Multisite 能處理錯誤顯示
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- 使用 `wu_log_add()` 進行 gateway 專用記錄

## AI connector provider 功能 {#ai-connector-provider-capabilities}

呼叫 AI connector 支援作業的自訂整合，應與 AI Provider for Anthropic Max v1.3.0 引入的受支援 OAuth provider 集合保持一致：

| Provider | 功能備註 |
|---|---|
| **Anthropic Max** | 支援現有的 OAuth 帳號集區工作流程。代理 connector 請求時，保留 Anthropic 工具使用 payload，包括空工具陣列與來回傳遞的 thinking 簽章。 |
| **OpenAI ChatGPT/Codex** | 支援 OAuth 集區工作流程，以及 connector 支援作業的完整工具支援行為。傳遞工具定義與工具呼叫結果，不要移除 Codex 特定的工具中繼資料。 |
| **Google AI Pro** | 支援 OAuth 集區工作流程與 SDK 支援的 provider 整合。在 OAuth 完成後重新整理 provider 帳號，再路由請求。 |

Cursor Pro 整合與設定途徑已移除。不要將 Cursor Pro 註冊為可選擇的 provider，也不要在自訂 connector UI 中呈現 Cursor 專用的 OAuth 指示。

對於沙盒或 headless 環境，請公開手動 OAuth 備援路徑，讓管理員可以貼上回傳的授權資料，並在不依賴自動瀏覽器重新導向的情況下完成帳號連線。
