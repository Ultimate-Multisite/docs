---
title: ການພັດທະນາປະຕູເຊື່ອມຕໍ່ແບບກຳນົດເອງ
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ການພັດທະນາ Gateway ແບບກຳນົດເອງ

ທ່ານສາມາດສ້າງ gateway ການຊຳລະເງິນແບບກຳນົດເອງໄດ້ໂດຍຂະຫຍາຍ class `Base_Gateway`.

## Class ຂອງ Gateway

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

## ລົງທະບຽນ Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ເມທອດສຳຄັນ

| Method | ຈຸດປະສົງ |
|--------|---------|
| `process_single_payment()` | ຈັດການການຊຳລະເງິນແບບຄັ້ງດຽວ |
| `process_signup()` | ຕັ້ງຄ່າ subscription ແບບເກີດຊ້ຳ |
| `process_refund()` | ຈັດການຄຳຂໍຄືນເງິນ |
| `get_payment_methods()` | ສົ່ງຄືນວິທີການຊຳລະເງິນທີ່ບັນທຶກໄວ້ສຳລັບລູກຄ້າ |

## ຂໍ້ມູນຢືນຢັນການຕໍ່ອາຍຸສຳລັບ membership ແບບເກີດຊ້ຳ

Ultimate Multisite v2.13.0 ອະນຸຍາດໃຫ້ການຜະສານລວມ gateway ລາຍງານວ່າ membership ແບບເກີດຊ້ຳມີຂໍ້ມູນຢືນຢັນການຕໍ່ອາຍຸທີ່ໃຊ້ຊ້ຳໄດ້ຫຼືບໍ່ ກ່ອນທີ່ `auto_renew` ຈະຖືກບັນທຶກແບບຖາວອນ. Hook `wu_membership_has_renewal_credential` ແລະສົ່ງຄືນ:

- `true` ເມື່ອ membership ມີ gateway subscription, ຂໍ້ຕົກລົງການຮຽກເກັບເງິນ, vault token, ຫຼືວິທີການຊຳລະເງິນທີ່ໃຊ້ຊ້ຳໄດ້ທີ່ທຽບເທົ່າ.
- `false` ເມື່ອ gateway ຮູ້ວ່າຂໍ້ມູນຢືນຢັນແບບເກີດຊ້ຳຂາດຫາຍໄປ ຫຼືໃຊ້ບໍ່ໄດ້.
- `null` ເພື່ອບໍ່ເຂົ້າຮ່ວມ ແລະຮັກສາພຶດຕິກຳເລີ່ມຕົ້ນໃຫ້ບໍ່ປ່ຽນແປງ.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ເມື່ອ gateway ສົ່ງຄືນ `false`, Ultimate Multisite ຈະບັນທຶກ membership ໂດຍປິດການຕໍ່ອາຍຸອັດຕະໂນມັດ ແລະເກັບຕົວໝາຍວ່າຂາດຂໍ້ມູນຢືນຢັນ. ໃຊ້ `wu_membership_renewal_credential_missing` ເພື່ອແຈ້ງຜູ້ບໍລິຫານ, ເລີ່ມຂະບວນການອະນຸຍາດອີກຄັ້ງ, ຫຼືເພີ່ມບັນທຶກການສະໜັບສະໜູນ:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

ລຶບຕົວໝາຍວ່າຂາດຂໍ້ມູນຢືນຢັນເປັນສ່ວນໜຶ່ງຂອງຂະບວນການອະນຸຍາດອີກຄັ້ງທີ່ສຳເລັດຂອງ gateway ຂອງທ່ານ ຫຼັງຈາກຂໍ້ມູນຢືນຢັນໃໝ່ທີ່ໃຊ້ຊ້ຳໄດ້ຖືກເກັບໄວ້ແລ້ວ.

## ຄຳແນະນຳ

- ສົ່ງຄືນ `WP_Error` ສະເໝີເມື່ອລົ້ມເຫຼວ ເພື່ອໃຫ້ Ultimate Multisite ສາມາດຈັດການການສະແດງຂໍ້ຜິດພາດໄດ້
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ໃຊ້ `wu_log_add()` ສຳລັບການບັນທຶກ log ສະເພາະ gateway

## ຄວາມສາມາດຂອງຜູ້ໃຫ້ບໍລິການ connector AI

ການຜະສານລວມແບບກຳນົດເອງທີ່ເອີ້ນໃຊ້ການດຳເນີນງານທີ່ອີງໃສ່ AI connector ຄວນສອດຄ່ອງກັບຊຸດຜູ້ໃຫ້ບໍລິການ OAuth ທີ່ຮອງຮັບ ຊຶ່ງໄດ້ນຳເຂົ້າມາພ້ອມກັບ AI Provider for Anthropic Max v1.3.0:

| ຜູ້ໃຫ້ບໍລິການ | ບັນທຶກຄວາມສາມາດ |
|---|---|
| **Anthropic Max** | ຮອງຮັບ workflow ຂອງ pool Account OAuth ທີ່ມີຢູ່ແລ້ວ. ຮັກສາ payload ການໃຊ້ tool ຂອງ Anthropic, ລວມທັງ array tool ທີ່ວ່າງເປົ່າ ແລະລາຍເຊັນການຄິດແບບໄປ-ກັບ, ເມື່ອ proxy ຄຳຂໍ connector. |
| **OpenAI ChatGPT/Codex** | ຮອງຮັບ workflow ຂອງ pool OAuth ແລະພຶດຕິກຳການຮອງຮັບ tool ເຕັມຮູບແບບສຳລັບການດຳເນີນງານທີ່ connector ຮອງຮັບ. ສົ່ງຜ່ານຄຳນິຍາມ tool ແລະຜົນລັບການເອີ້ນ tool ໂດຍບໍ່ລຶບ metadata ຂອງ tool ສະເພາະ Codex. |
| **Google AI Pro** | ຮອງຮັບ workflow ຂອງ pool OAuth ແລະການຜະສານລວມຜູ້ໃຫ້ບໍລິການທີ່ອີງໃສ່ SDK. ໂຫຼດໃໝ່ Account ຂອງຜູ້ໃຫ້ບໍລິການຫຼັງຈາກ OAuth ສຳເລັດ ກ່ອນສົ່ງຄຳຂໍໄປຕາມເສັ້ນທາງ. |

ການຜະສານລວມ Cursor Pro ແລະເສັ້ນທາງການຕັ້ງຄ່າຖືກລຶບອອກແລ້ວ. ຢ່າລົງທະບຽນ Cursor Pro ເປັນຜູ້ໃຫ້ບໍລິການທີ່ເລືອກໄດ້ ຫຼືສະແດງຄຳແນະນຳ OAuth ສະເພາະ Cursor ໃນ UI connector ແບບກຳນົດເອງ.

ສຳລັບສະພາບແວດລ້ອມແບບ sandbox ຫຼືບໍ່ມີຫົວ, ໃຫ້ເປີດເຜີຍເສັ້ນທາງ OAuth ສຳຮອງແບບຄູ່ມື ເພື່ອໃຫ້ຜູ້ບໍລິຫານສາມາດວາງຂໍ້ມູນການອະນຸຍາດທີ່ສົ່ງຄືນມາ ແລະເຮັດການເຊື່ອມຕໍ່ Account ໃຫ້ສຳເລັດ ໂດຍບໍ່ຕ້ອງອາໄສການ redirect ຂອງ browser ອັດຕະໂນມັດ.
