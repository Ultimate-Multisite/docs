---
title: 웹훅 처리
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# 웹훅 처리

## 사용자 정의 웹훅 엔드포인트

```php
// Register webhook endpoint
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

## 보안 고려사항

- 항상 HMAC 또는 공유 비밀을 사용하여 웹훅 서명을 확인하세요  
- REST 라우트에서 `permission_callback`을 사용하세요 — 프로덕션에서는 `__return_true`로 설정하지 마세요  
- 모든 들어오는 페이로드 데이터를 검증하고 정제한 후에 조치를 취하세요  
- 적절한 HTTP 상태 코드를 반환하세요 (성공 시 200, 잘못된 요청 시 400)
