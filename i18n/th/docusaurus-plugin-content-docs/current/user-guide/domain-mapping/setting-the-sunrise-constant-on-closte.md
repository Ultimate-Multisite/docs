---
title: การตั้งค่า Sunrise Constant บน Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# การตั้งค่าคงที่ Sunrise เป็น true บน Closte

ผู้ให้บริการโฮสติ้งบางรายล็อกไฟล์ wp-config.php ไว้เพื่อความปลอดภัย ซึ่งหมายความว่า Ultimate Multisite ไม่สามารถแก้ไขไฟล์โดยอัตโนมัติเพื่อเพิ่มค่าคงที่ที่จำเป็นสำหรับการทำงานของ domain mapping และฟีเจอร์อื่นๆ ได้ Closte เป็นหนึ่งในโฮสต์เหล่านั้น

อย่างไรก็ตาม Closte มีวิธีให้คุณเพิ่มค่าคงที่ลงใน wp-config.php ได้อย่างปลอดภัย เพียงทำตามขั้นตอนด้านล่างนี้:

## บนแดชบอร์ดของ Closte

ขั้นแรก [ล็อกอินเข้าสู่บัญชี Closte ของคุณ](https://app.closte.com/) คลิกที่เมนู Sites จากนั้นคลิกลิงก์ Dashboard บนเว็บไซต์ที่คุณกำลังทำงานอยู่:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

คุณจะเห็นเมนูใหม่หลายรายการปรากฏขึ้นทางด้านซ้ายของหน้าจอ ไปที่หน้า **Settings** โดยใช้เมนูนั้น:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

จากนั้น ในหน้า **Settings** ให้หาแท็บ WP-Config แล้วมองหาช่อง "Additional wp-config.php content" ในแท็บนั้น:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

ในขั้นตอนการติดตั้ง Ultimate Multisite คุณจะต้องเพิ่มค่าคงที่ sunrise ลงในช่องนั้น เพียงขึ้นบรรทัดใหม่แล้ววางโค้ดด้านล่างนี้ลงไป หลังจากนั้นคลิกปุ่ม **Save All**

define('SUNRISE', true);

เท่านี้ก็เรียบร้อยแล้ว กลับไปที่ตัวช่วยติดตั้ง Ultimate Multisite และรีเฟรชหน้าเพื่อดำเนินการต่อ
