---
title: ການຈັດການ Webhook
sidebar_position: 3
_i18n_hash: cdc7583622760f8654cdd8fbb9f9ffa5
---
# ການຈັດການ Webhook

ສ້າງຈຸດຮັບ Webhook ແບບກຳນົດເອງ ເພື່ອຮັບເຫດການຈາກບໍລິການພາຍນອກ ແລະຊິງຄ໌ຂໍ້ມູນກັບ Ultimate Multisite.

## ຈຸດຮັບ Webhook ແບບກຳນົດເອງ {#custom-webhook-endpoint}

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

## ຂໍ້ພິຈາລະນາດ້ານຄວາມປອດໄພ {#security-considerations}

- ກວດຢືນຢັນລາຍເຊັນ Webhook ໂດຍໃຊ້ HMAC ຫຼືຄວາມລັບທີ່ໃຊ້ຮ່ວມກັນສະເໝີ
- ໃຊ້ `permission_callback` ໃນເສັ້ນທາງ REST ຂອງທ່ານ — ຢ່າຕັ້ງເປັນ `__return_true` ໃນການໃຊ້ງານຈິງ
- ກວດຄວາມຖືກຕ້ອງ ແລະລ້າງຂໍ້ມູນ payload ຂາເຂົ້າທັງໝົດກ່ອນດຳເນີນການກັບມັນ
- ສົ່ງກັບລະຫັດສະຖານະ HTTP ທີ່ເໝາະສົມ (200 ສຳລັບສຳເລັດ, 400 ສຳລັບຄຳຂໍທີ່ບໍ່ຖືກຕ້ອງ)
