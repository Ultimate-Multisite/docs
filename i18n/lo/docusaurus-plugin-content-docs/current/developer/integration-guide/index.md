---
title: ຄູ່ມືການຜະສານລະບົບ
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# ຄູ່ມືການເຊື່ອມຕໍ່

ຄູ່ມືນີ້ຄອບຄຸມຮູບແບບການເຊື່ອມຕໍ່ທົ່ວໄປກັບ Ultimate Multisite, ລວມທັງການເຊື່ອມຕໍ່ໄປຫາບໍລິການພາຍນອກ, ການສ້າງ payment gateway ແບບກຳນົດເອງ, ແລະການຈັດການ webhooks.

ສຳລັບໂຄງສ້າງພື້ນຖານ tenant ແບບແຍກຕ່າງຫາກ, ເບິ່ງ [ການເຊື່ອມຕໍ່ Multi-Tenancy](./multi-tenancy) ສຳລັບຄຳແນະນຳການເລີ່ມຕົ້ນ tenant ແບບອະທິປະໄຕ, ການກວດສອບການຍ້າຍ, SSO, ແລະການຖອນອອກ.

## ການເຊື່ອມຕໍ່ CRM

ຊິງຂໍ້ມູນລູກຄ້າໄປຫາ CRM ຂອງທ່ານເມື່ອລູກຄ້າໃໝ່ລົງທະບຽນ:

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

## ການເຊື່ອມຕໍ່ Analytics

ຕິດຕາມເຫດການທາງທຸລະກິດສຳຄັນຕະຫຼອດວົງຈອນຊີວິດລູກຄ້າ:

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

## ຂັ້ນຕອນຕໍ່ໄປ

- [ການພັດທະນາ Gateway ແບບກຳນົດເອງ](./custom-gateway) — ສ້າງ payment gateway ຂອງທ່ານເອງ
- [ການຈັດການ Webhook](./webhooks) — ສ້າງ webhook endpoints ແບບກຳນົດເອງ
- [ການເຊື່ອມຕໍ່ Multi-Tenancy](./multi-tenancy) — ເຊື່ອມຕໍ່ກັບກະແສວຽກວົງຈອນຊີວິດ tenant ແບບອະທິປະໄຕ
