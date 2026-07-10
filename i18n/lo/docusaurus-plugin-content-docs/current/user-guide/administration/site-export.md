---
title: ການສົ່ງອອກໄຊທ໌
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# การส่งออกเว็บไซต์ (Site Export) {#site-export}

หน้า admin ชื่อ **Site Export** จะช่วยให้ผู้ดูแลระบบเครือข่ายสามารถจัดชุดเว็บไซต์หนึ่ง หรือทั้งเครือข่าย บีบอัดเป็นไฟล์ที่ดาวน์โหลดได้ เพื่อนำไปใช้ในการย้ายข้อมูลสำรอง (migration), สำรองข้อมูล (backup) หรือส่งมอบงานต่างๆ ครับ

## การส่งออกเว็บไซต์เดียว {#exporting-one-site}

ไปที่ **Ultimate Multisite > Site Export** แล้วเลือก **Generate new Site Export** จากนั้นเลือกซับไซต์ที่คุณต้องการส่งออก แล้วเลือกว่าไฟล์ archive นั้นควรจะรวมไฟล์อัปโหลด (uploads), plugin และ theme ด้วยหรือไม่

เมื่อการส่งออกเสร็จสิ้น ให้ดาวน์โหลดไฟล์ ZIP จากรายการ **Existing Exports** ไฟล์ ZIP ที่ส่งออกตอนนี้จะมี `index.php` ที่สามารถบูตตัวเองได้ และมีไฟล์ `readme.txt` ด้วย ทำให้คุณสามารถอัปโหลด archive นี้ไปยังโฮสต์ใหม่และเริ่มใช้งานได้ทันที โดยไม่ต้องติดตั้ง plugin ตัวนำเข้า (importer) แยกต่างหากก่อน

## การส่งออกทั้งเครือข่าย {#exporting-the-whole-network}

ใช้ **Network Export** บนหน้า Site Export เมื่อคุณต้องการไฟล์ archive ไฟล์เดียวที่รวมซับไซต์ทั้งหมดในเครือข่ายไว้ด้วย วิธีนี้มีประโยชน์ก่อนการย้ายโฮสต์, การทดสอบแผนกรับมือภัยพิบัติ (disaster-recovery drills) หรือการสร้างใหม่บน staging ที่แต่ละซับไซต์จำเป็นต้องเคลื่อนย้ายไปด้วยกัน

เนื่องจากการส่งออกทั้งเครือข่ายอาจมีขนาดใหญ่กว่าการส่งออกเว็บไซต์เดียวมาก ดังนั้นควรทำการรันในช่วงเวลาที่มีผู้ใช้งานน้อย และตรวจสอบให้แน่ใจว่าพื้นที่จัดเก็บปลายทางมีที่ว่างเพียงพอสำหรับการอัปโหลด, plugin, theme และไฟล์ ZIP ที่สร้างขึ้นครับ

### ชุดรวมการนำเข้าเครือข่าย (Network Import Bundles) {#network-import-bundles}

ตั้งแต่ Ultimate Multisite 2.12.0 เป็นต้นไป Site Exporter สามารถสร้าง **network import bundles** ซึ่งเป็น archive เฉพาะทางที่ออกแบบมาเพื่อการกู้คืนเว็บไซต์ทั้งเครือข่ายให้ง่ายขึ้น โดย network import bundle หนึ่งชุดจะประกอบด้วยไฟล์และข้อมูลเมตา (metadata) ที่จำเป็นทั้งหมด เพื่อนำหลายๆ เว็บไซต์กลับไปติดตั้งในระบบเครือข่ายใหม่

#### การสร้าง Network Import Bundle {#generating-a-network-import-bundle}

1. ไปที่ **Ultimate Multisite > Site Export**
2. คลิก **Generate new Network Export**
3. เลือก **Network Import Bundle** เป็นประเภทการส่งออก (export type)
4. เลือกว่าจะรวมไฟล์อัปโหลด (uploads), plugin, และ theme หรือไม่
5. คลิก **Generate**
6. ดาวน์โหลดไฟล์ ZIP bundle จากรายการ **Existing Exports**

#### การกู้คืนจาก Network Import Bundle {#restoring-from-a-network-import-bundle}

วิธีนำเว็บไซต์กลับมาใช้จาก network import bundle:

1. ติดตั้ง Ultimate Multisite บนโฮสต์เป้าหมายของคุณ
2. ทำตามขั้นตอนการติดตั้ง multisite wizard ให้เสร็จสมบูรณ์
3. ไปที่ **Ultimate Multisite > Site Export** บน network ใหม่นั้น
4. คลิก **Import Network Bundle**
5. อัปโหลดไฟล์ ZIP ของ network import bundle
6. ทำตามคำแนะนำในการนำเข้าที่ปรากฏบนหน้าจอ
7. กระบวนการนำเข้าจะกู้คืนเว็บไซต์ทั้งหมด เนื้อหา และการตั้งค่าต่างๆ

Network import bundles จะเก็บข้อมูลดังนี้:
- เนื้อหาของเว็บไซต์ (โพสต์, หน้า, custom post types)
- การตั้งค่าและตัวเลือกของเว็บไซต์
- บทบาทและสิทธิ์ของผู้ใช้
- Plugin และ theme (ถ้ามีการรวมอยู่ใน bundle)
- ไฟล์อัปโหลดสื่อ (Media uploads) (ถ้ามีการรวมอยู่ใน bundle)
- ตารางฐานข้อมูลที่กำหนดเองและข้อมูลต่างๆ

## การติดตั้งไฟล์ ZIP สำหรับการส่งออกแบบ self-booting {#installing-a-self-booting-export-zip}

หากต้องการกู้คืนไฟล์ ZIP ที่ตั้งค่าให้บูตตัวเองได้ บนโฮสต์ใหม่:

1. อัปโหลดเนื้อหาของ ZIP ที่ส่งออกแล้วไปยัง web root ของเป้าหมาย
2. เปิดไฟล์ `index.php` ที่อัปโหลดในเบราว์เซอร์
3. ทำตามคำแนะนำการติดตั้งบนหน้าจอจากแพ็คเกจ export ที่รวมมาด้วย
4. ตรวจสอบไฟล์ `readme.txt` ที่รวมมาสำหรับข้อมูลเฉพาะของการส่งออก ก่อนที่จะลบไฟล์ชั่วคราวทิ้ง

สำหรับรายละเอียดการติดตั้งและการนำเข้าเฉพาะของ addon ต่างๆ ให้ดูที่ [Site Exporter addon documentation](/addons/site-exporter)

สำหรับเครื่องมือ single-site ที่เพิ่มเข้ามาใน Ultimate Multisite 2.9.0 ให้ดูที่ [Export & Import](/user-guide/administration/export-import)
