---
title: บันทึกการเปลี่ยนแปลงของตัวจัดการปลั๊กอินและธีม
sidebar_position: 99
_i18n_hash: 8a4c9c6e16e1226e9ffcfc7c05f3d13e
---
# บันทึกการเปลี่ยนแปลงของ Plugin & Theme Manager {#plugin--theme-manager-changelog}

Version: 2.0.8 - เผยแพร่เมื่อ 2026-05-05
* ปรับปรุง: รายการ Plugin ตอนนี้จะใช้ site cache ช่วย ทำให้ลดการเรียกฐานข้อมูล (database queries) และเพิ่มประสิทธิภาพโดยรวม
* ปรับปรุง: Plugin autoloader จะถูกข้ามการทำงาน (skipped) เมื่อ Bedrock root autoloader โหลด dependencies เสร็จเรียบร้อยแล้ว

Version: 2.0.7 - เผยแพร่เมื่อ 2026-01-01
* ปรับปรุง: การอัปเดตความเข้ากันได้
