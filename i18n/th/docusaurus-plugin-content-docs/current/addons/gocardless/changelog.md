---
title: GoCardless Changelog
sidebar_position: 99
_i18n_hash: 6fb81ff030ca403765c66d8e86a50faa
---
# บันทึกการเปลี่ยนแปลงของ GoCardless {#gocardless-changelog}

Version: 1.0.3 - เผยแพร่เมื่อ 2026-05-05
* แก้ไข: ตอนนี้ระบบจะล้างข้อมูลเว็บไซต์ที่ค้างสถานะ (orphaned pending sites) โดยอัตโนมัติ เมื่อมีการยกเลิกสมาชิก GoCardless ในขณะที่สถานะยังเป็นรอการดำเนินการหรือระงับ
* ปรับปรุง: ตัวโหลดอัตโนมัติของปลั๊กอินจะข้ามการทำงาน เมื่อตัวโหลดอัตโนมัติหลักของ Bedrock ได้โหลดส่วนประกอบที่ต้องพึ่งพา (dependencies) ไปแล้ว

Version: 1.0.1 - เผยแพร่เมื่อ 2025-09-28

* เปลี่ยนชื่อคำนำหน้าเป็น ultimate-multisite; อัปเดตขอบเขตข้อความ (text domain); และเพิ่มหมายเลขเวอร์ชัน


2021-09-24 - Version 1.0.0-beta.4

* เพิ่มเติม: ตัวกรอง wp_ultimo_skip_network_active_check สำหรับการตั้งค่าที่ใช้ mu-plugins

2021-06-16 - Version 1.0.0-beta.3

* แก้ไข: ตัวจัดการ Webhook ที่เคยล้มเหลวในการยืนยันลายเซ็น (signatures)

2021-06-14 - Version 1.0.0-beta.2

* ปรับปรุง: การเผยแพร่เว็บไซต์หลังจากที่สร้าง Mandate ของ GoCardless เรียบร้อยแล้ว

Version 1.0.0-beta.1 - เวอร์ชันเริ่มต้น
