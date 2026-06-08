---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

อนุญาตให้นักพัฒนาสามารถบังคับให้ใช้ WooCommerce Subscriptions ได้

โดยค่าเริ่มต้น add-on จะทำการตรวจสอบว่า (1) มี WooCommerce Subscriptions ติดตั้งอยู่หรือไม่ (ไม่ว่าจะเป็นปลั๊กอินเต็มรูปแบบหรือเป็นส่วนหลักที่รวมมา) จากนั้นจึง (2) ตรวจสอบการตั้งค่าที่เปิดใช้งานการใช้ WooCommerce Subscriptions

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ถ้าตอนนี้เราจำเป็นต้องใช้ Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | อ็อบเจกต์ปัจจุบัน |

### Source

กำหนดไว้ใน [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ที่บรรทัด 361

## Returns
`true` คือให้ใช้ WooCommerce Subs, `false` คือไม่ให้ใช้
