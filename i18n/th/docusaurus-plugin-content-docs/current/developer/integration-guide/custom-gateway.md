---
title: การพัฒนาเกตเวย์แบบกำหนดเอง
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# การพัฒนา Payment Gateway แบบกำหนดเอง

คุณสามารถสร้าง Payment Gateway แบบกำหนดเองได้โดยการขยาย (extend) คลาส `Base_Gateway`

## คลาส Gateway

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

## การลงทะเบียน Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## เมธอดหลัก (Key Methods)

| Method | วัตถุประสงค์ |
|--------|---------|
| `process_single_payment()` | จัดการการชำระเงินแบบครั้งเดียว |
| `process_signup()` | ตั้งค่าการสมัครสมาชิกแบบต่อเนื่อง |
| `process_refund()` | จัดการคำขอคืนเงิน |
| `get_payment_methods()` | ส่งคืนวิธีการชำระเงินที่บันทึกไว้สำหรับลูกค้า |

## เคล็ดลับ (Tips)

- ควรคืนค่า `WP_Error` เสมอเมื่อเกิดข้อผิดพลาด เพื่อให้ Ultimate Multisite สามารถจัดการการแสดงข้อผิดพลาดได้
- กำหนดค่า `$this->supports` เพื่อระบุว่า Gateway ของคุณรองรับประเภทการชำระเงินใดบ้าง (`one-time`, `recurring`)
- ใช้ `wu_log_add()` สำหรับการบันทึก (logging) เฉพาะของ Gateway
