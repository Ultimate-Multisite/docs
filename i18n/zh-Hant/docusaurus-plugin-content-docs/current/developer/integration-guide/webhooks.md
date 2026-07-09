---
title: Webhook 處理
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook 處理 {#webhook-handling}

建立自訂的 webhook 端點，用於接收來自外部服務的事件，並將資料同步到 Ultimate Multisite。

## 自訂 Webhook 端點 {#custom-webhook-endpoint}

```php
// 註冊 webhook 端點
add_action('rest_api_init', function() {
    register_rest_route('my-addon/v1', '/webhook', [
        'methods' => 'POST',
        'callback' => 'handle_my_webhook',
        'permission_callback' => 'verify_webhook_signature'
    ]);
});

function handle_my_webhook($request) {
    $payload = $request->get_json_params();

    switch ($payload['event_type']) {
        case 'customer.updated':
            $customer = wu_get_customer($payload['customer_id']);
            if ($customer) {
                $customer->set_vip($payload['data']['is_vip']);
                $customer->save();
            }
            break;

        case 'subscription.cancelled':
            $membership = wu_get_membership_by_hash($payload['subscription_id']);
            if ($membership) {
                $membership->cancel();
            }
            break;
    }

    return ['status' => 'processed'];
}

function verify_webhook_signature($request) {
    $signature = $request->get_header('X-Webhook-Signature');
    $payload = $request->get_body();
    $secret = get_option('my_webhook_secret');

    return hash_hmac('sha256', $payload, $secret) === $signature;
}
```

## 安全性考量 {#security-considerations}

- 務必使用 HMAC 或共用密鑰來驗證 webhook 簽名
- 在您的 REST route 上使用 `permission_callback` — 在生產環境中切勿將其設定為 `__return_true`
- 在處理任何資料之前，都要驗證並清理所有傳入的 payload 資料
- 回傳適當的 HTTP 狀態碼（成功為 200，請求錯誤為 400）
