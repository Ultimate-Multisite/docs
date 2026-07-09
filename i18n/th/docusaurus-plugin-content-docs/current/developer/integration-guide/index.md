---
title: คู่มือการผสานการทำงาน
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# คู่มือการผสานรวม {#integration-guide}

คู่มือนี้ครอบคลุมรูปแบบการผสานรวมทั่วไปกับ Ultimate Multisite รวมถึงการเชื่อมต่อกับบริการภายนอก การสร้างเกตเวย์การชำระเงินแบบกำหนดเอง และการจัดการเว็บฮุก

สำหรับโครงสร้างพื้นฐานผู้เช่าแบบแยกส่วน โปรดดู [การผสานรวม Multi-Tenancy](./multi-tenancy) สำหรับคำแนะนำเกี่ยวกับการเริ่มต้นผู้เช่าแบบอธิปไตย การตรวจสอบการย้ายข้อมูล SSO และการรื้อถอน

## การผสานรวม CRM {#crm-integration}

ซิงค์ข้อมูลลูกค้าไปยัง CRM ของคุณเมื่อลูกค้าใหม่สมัครใช้งาน:

```php
add_action('wu_customer_post_create', 'sync_customer_to_crm');

function sync_customer_to_crm($customer) {
    $crm_api = new Your_CRM_API();

    $crm_api->create_contact([
        'email' => $customer->get_email(),
        'name' => $customer->get_display_name(),
        'signup_date' => $customer->get_date_registered(),
        'plan' => $customer->get_membership()->get_plan()->get_name()
    ]);

    // Store CRM ID for future reference
    $customer->add_meta('crm_contact_id', $crm_api->get_last_contact_id());
}
```

## การผสานรวม Analytics {#analytics-integration}

ติดตามเหตุการณ์ทางธุรกิจที่สำคัญตลอดวงจรชีวิตของลูกค้า:

```php
add_action('wu_checkout_completed', 'track_conversion', 10, 3);
add_action('wu_membership_status_to_cancelled', 'track_churn');
add_action('wu_payment_failed', 'track_payment_failure');

function track_conversion($payment, $customer, $membership) {
    // Google Analytics 4
    gtag('event', 'purchase', [
        'transaction_id' => $payment->get_id(),
        'value' => $payment->get_total(),
        'currency' => $payment->get_currency(),
        'items' => [
            [
                'item_id' => $membership->get_plan()->get_id(),
                'item_name' => $membership->get_plan()->get_name(),
                'category' => 'subscription',
                'quantity' => 1,
                'price' => $payment->get_total()
            ]
        ]
    ]);
}
```

## ขั้นตอนถัดไป {#next-steps}

- [การพัฒนา Gateway แบบกำหนดเอง](./custom-gateway) — สร้างเกตเวย์การชำระเงินของคุณเอง
- [การจัดการ Webhook](./webhooks) — สร้าง endpoint เว็บฮุกแบบกำหนดเอง
- [การผสานรวม Multi-Tenancy](./multi-tenancy) — ผสานรวมกับโฟลว์วงจรชีวิตผู้เช่าแบบอธิปไตย
