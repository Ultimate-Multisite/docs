---
title: การพัฒนาเกตเวย์แบบกำหนดเอง
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# การพัฒนา Gateway แบบกำหนดเอง

คุณสามารถสร้าง gateway การชำระเงินแบบกำหนดเองได้โดยขยายคลาส `Base_Gateway`

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

## ลงทะเบียน Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## เมธอดสำคัญ

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | จัดการการชำระเงินแบบครั้งเดียว |
| `process_signup()` | ตั้งค่าการสมัครสมาชิกแบบต่ออายุเป็นประจำ |
| `process_refund()` | จัดการคำขอคืนเงิน |
| `get_payment_methods()` | ส่งคืนวิธีการชำระเงินที่บันทึกไว้สำหรับลูกค้า |

## ข้อมูลรับรองการต่ออายุสำหรับสมาชิกภาพแบบต่ออายุเป็นประจำ

Ultimate Multisite v2.13.0 ช่วยให้การเชื่อมต่อ gateway รายงานได้ว่าสมาชิกภาพแบบต่ออายุเป็นประจำมีข้อมูลรับรองการต่ออายุที่ใช้ซ้ำได้หรือไม่ ก่อนที่ `auto_renew` จะถูกบันทึกถาวร Hook `wu_membership_has_renewal_credential` และส่งคืน:

- `true` เมื่อสมาชิกภาพมีการสมัครสมาชิกของ gateway, ข้อตกลงการเรียกเก็บเงิน, โทเคน vault หรือวิธีการชำระเงินที่ใช้ซ้ำได้เทียบเท่า
- `false` เมื่อ gateway ทราบว่าข้อมูลรับรองแบบต่ออายุเป็นประจำขาดหายไปหรือใช้งานไม่ได้
- `null` เพื่อไม่เข้าร่วมและคงพฤติกรรมเริ่มต้นไว้ไม่เปลี่ยนแปลง

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

เมื่อ gateway ส่งคืน `false` Ultimate Multisite จะบันทึกสมาชิกภาพโดยปิดใช้งานการต่ออายุอัตโนมัติ และจัดเก็บเครื่องหมายว่าข้อมูลรับรองขาดหายไป ใช้ `wu_membership_renewal_credential_missing` เพื่อแจ้งผู้ดูแลระบบ เริ่มกระบวนการอนุญาตอีกครั้ง หรือเพิ่มบันทึกการสนับสนุน:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

ล้างเครื่องหมายข้อมูลรับรองขาดหายไปเป็นส่วนหนึ่งของกระบวนการอนุญาตอีกครั้งที่สำเร็จของ gateway หลังจากจัดเก็บข้อมูลรับรองใหม่ที่ใช้ซ้ำได้แล้ว

## เคล็ดลับ

- ส่งคืน `WP_Error` เสมอเมื่อเกิดความล้มเหลว เพื่อให้ Ultimate Multisite สามารถจัดการการแสดงข้อผิดพลาดได้
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ใช้ `wu_log_add()` สำหรับการบันทึกเฉพาะของ gateway

## ความสามารถของผู้ให้บริการตัวเชื่อมต่อ AI

การเชื่อมต่อแบบกำหนดเองที่เรียกใช้การดำเนินการที่รองรับโดยตัวเชื่อมต่อ AI ควรสอดคล้องกับชุดผู้ให้บริการ OAuth ที่รองรับ ซึ่งเปิดตัวพร้อมกับ AI Provider for Anthropic Max v1.3.0:

| Provider | หมายเหตุด้านความสามารถ |
|---|---|
| **Anthropic Max** | รองรับเวิร์กโฟลว์กลุ่ม Account OAuth ที่มีอยู่ รักษาเพย์โหลดการใช้เครื่องมือของ Anthropic รวมถึงอาร์เรย์เครื่องมือว่างและลายเซ็นการคิดแบบไป-กลับ เมื่อพร็อกซีคำขอตัวเชื่อมต่อ |
| **OpenAI ChatGPT/Codex** | รองรับเวิร์กโฟลว์กลุ่ม OAuth และพฤติกรรมการรองรับเครื่องมือเต็มรูปแบบสำหรับการดำเนินการที่ตัวเชื่อมต่อรองรับ ส่งผ่านคำจำกัดความของเครื่องมือและผลลัพธ์การเรียกเครื่องมือโดยไม่ตัดข้อมูลเมตาเครื่องมือเฉพาะของ Codex ออก |
| **Google AI Pro** | รองรับเวิร์กโฟลว์กลุ่ม OAuth และการเชื่อมต่อผู้ให้บริการที่รองรับโดย SDK รีเฟรช Account ของผู้ให้บริการหลังจาก OAuth เสร็จสิ้นก่อนกำหนดเส้นทางคำขอ |

การเชื่อมต่อและเส้นทางการตั้งค่า Cursor Pro ถูกนำออกแล้ว อย่าลงทะเบียน Cursor Pro เป็นผู้ให้บริการที่เลือกได้ หรือนำเสนอคำแนะนำ OAuth เฉพาะของ Cursor ใน UI ตัวเชื่อมต่อแบบกำหนดเอง

สำหรับสภาพแวดล้อมแบบ sandbox หรือไม่มีส่วนติดต่อผู้ใช้ ให้เปิดเผยเส้นทางสำรอง OAuth แบบแมนนวล เพื่อให้ผู้ดูแลระบบสามารถวางข้อมูลการอนุญาตที่ส่งกลับมาและเชื่อมต่อ Account ให้เสร็จสิ้นได้โดยไม่ต้องพึ่งพาการเปลี่ยนเส้นทางเบราว์เซอร์อัตโนมัติ
