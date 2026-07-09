---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

อนุญาตให้นักพัฒนาสามารถกรองฟิลด์ที่อยู่สำหรับเรียกเก็บเงิน (billing address) ของ WooCommerce ที่เป็นค่าเริ่มต้นได้

เนื่องจาก Ultimate Multisite มีฟิลด์ที่อยู่สำหรับเรียกเก็บเงินอยู่แล้ว การลบฟิลด์ค่าเริ่มต้นที่ WooCommerce แสดงบนหน้าชำระเงินจึงอาจเป็นเรื่องที่สมเหตุสมผล โดยค่าเริ่มต้นจะไม่มีการส่งค่าใด ๆ มายังรายการนี้ ดังนั้นฟิลด์ทั้งหมดที่ตั้งค่าให้แสดงใน WooCommerce จะยังคงอยู่

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) บรรทัดที่ 277


## ค่าที่ส่งกลับ {#returns}
รายการของฟิลด์ที่ต้องการลบ ค่าที่มีให้เลือกประกอบด้วย billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, และ billing_phone.
