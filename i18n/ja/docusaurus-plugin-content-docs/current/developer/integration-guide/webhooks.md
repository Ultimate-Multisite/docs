---
title: Webhook処理
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# Webhook ハンドリング

外部サービスからのイベントを受信し、Ultimate Multisiteとデータを同期するためのカスタムWebhookエンドポイントを作成します。

## Custom Webhook Endpoint

```php
// Webhook エンドポイントを登録する
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

## Security Considerations

- 常にHMACまたは共有シークレットを使用してWebhook署名を検証してください
- `permission_callback` をRESTルートに設定してください — 本番環境では `__return_true` を設定しないでください
- 処理を行う前に、すべての受信ペイロードデータを検証およびサニタイズしてください
- 適切なHTTPステータスコードを返してください（成功時は200、リクエストが不正な場合は400）
