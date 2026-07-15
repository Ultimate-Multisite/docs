---
id: wu_stripe_checkout_subscription_data
title: ตัวกรอง - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

ใช้สำหรับกรองข้อมูลการสมัครสมาชิก Stripe สามารถกำหนดค่า URL สำเร็จ (success_url) หรือ URL ยกเลิก (cancel_url) ใหม่ได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | อาร์เรย์ของพารามิเตอร์ที่จะส่งไปยัง Stripe |
| $gateway | `\Base_Gateway` | อ็อบเจกต์ Stripe Gateway ปัจจุบัน |

### Since {#since}

- 2.4.2
### Source {#source}

กำหนดไว้ใน [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) บรรทัดที่ 298
