---
title: การส่งออกเว็บไซต์
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# การส่งออกเว็บไซต์ (Site Export) {#site-export}

หน้าผู้ดูแลระบบ **Site Export** ช่วยให้ผู้ดูแลระบบเครือข่ายสามารถรวมเว็บไซต์เพียงเว็บไซต์เดียว หรือทั้งเครือข่าย ให้เป็นไฟล์บีบอัด (archive) ที่สามารถดาวน์โหลดได้ เพื่อใช้ในการย้ายข้อมูล (migration), สำรองข้อมูล (backup), หรือส่งมอบงาน

## การส่งออกเว็บไซต์เดียว {#exporting-one-site}

ไปที่ **Ultimate Multisite > Site Export** แล้วเลือก **Generate new Site Export** จากนั้นเลือก subsite ที่คุณต้องการส่งออก และเลือกว่าไฟล์บีบอัดควรมีไฟล์ uploads, plugins, และ themes รวมอยู่ด้วยหรือไม่

เมื่อการส่งออกเสร็จสมบูรณ์ ให้ดาวน์โหลดไฟล์ ZIP จากรายการ **Existing Exports** ไฟล์ ZIP ที่ส่งออกตอนนี้จะมี `index.php` ที่พร้อมใช้งานได้ทันที (self-booting) และมี `readme.txt` ทำให้สามารถอัปโหลดไฟล์บีบอัดนี้ไปยังโฮสต์ใหม่และเริ่มใช้งานได้เลย โดยไม่จำเป็นต้องติดตั้ง plugin สำหรับนำเข้าข้อมูลแยกต่างหาก

## การส่งออกทั้งเครือข่าย {#exporting-the-whole-network}

ให้ใช้ **Network Export** บนหน้า Site Export เมื่อคุณต้องการไฟล์บีบอัดเดียวที่รวม subsite ทั้งหมดในเครือข่ายนี้ ซึ่งมีประโยชน์อย่างยิ่งก่อนการย้ายโฮสต์, การซ้อมแผนกู้คืนจากภัยพิบัติ, หรือการสร้างสภาพแวดล้อมทดสอบ (staging rebuilds) ที่ทุก subsite ต้องย้ายไปด้วยกัน

เนื่องจากการส่งออกทั้งเครือข่ายอาจมีขนาดใหญ่กว่าการส่งออกเว็บไซต์เดียวมาก ควรดำเนินการในช่วงที่ปริมาณการใช้งานต่ำ และตรวจสอบให้แน่ใจว่าพื้นที่จัดเก็บข้อมูลเป้าหมายมีพื้นที่ว่างเพียงพอสำหรับ uploads, plugins, themes, และไฟล์ ZIP ที่สร้างขึ้น

### Network Import Bundles {#network-import-bundles}

ตั้งแต่ Ultimate Multisite 2.12.0 เป็นต้นมา Site Exporter สามารถสร้าง **network import bundles** ซึ่งเป็นไฟล์บีบอัดพิเศษที่ออกแบบมาเพื่อการกู้คืนเว็บไซต์ทั่วทั้งเครือข่ายอย่างราบรื่น ไฟล์บีบอัดสำหรับนำเข้าเครือข่ายจะประกอบด้วยไฟล์และข้อมูลเมตาที่จำเป็นทั้งหมดในการกู้คืนหลายเว็บไซต์ไปยังการติดตั้งเครือข่ายใหม่

#### การสร้าง Network Import Bundle {#generating-a-network-import-bundle}

1. ไปที่ **Ultimate Multisite > Site Export**
2. คลิก **Generate new Network Export**
3. เลือก **Network Import Bundle** เป็นประเภทการส่งออก
4. เลือกว่าจะรวม uploads, plugins, และ themes หรือไม่
5. คลิก **Generate**
6. ดาวน์โหลดไฟล์ ZIP ของ bundle จากรายการ **Existing Exports**

#### การกู้คืนจาก Network Import Bundle {#restoring-from-a-network-import-bundle}

ในการกู้คืนเว็บไซต์จาก network import bundle:

1. ติดตั้ง Ultimate Multisite บนโฮสต์เป้าหมายของคุณ
2. ทำตามขั้นตอนการตั้งค่า multisite wizard ให้เสร็จสมบูรณ์
3. ไปที่ **Ultimate Multisite > Site Export** บนเครือข่ายใหม่
4. คลิก **Import Network Bundle**
5. อัปโหลดไฟล์ ZIP ของ network import bundle
6. ทำตามคำแนะนำการนำเข้าที่ปรากฏบนหน้าจอ
7. กระบวนการนำเข้าจะกู้คืนเว็บไซต์ทั้งหมด เนื้อหา และการตั้งค่าต่างๆ

Network import bundles จะเก็บรักษาข้อมูลเหล่านี้:
- เนื้อหาเว็บไซต์ (โพสต์, หน้า, custom post types)
- การตั้งค่าและตัวเลือกของเว็บไซต์
- บทบาทและสิทธิ์ของผู้ใช้
- Plugins และ themes (หากรวมอยู่ใน bundle)
- ไฟล์สื่อ (media uploads) (หากรวมอยู่ใน bundle)
- ตารางและข้อมูลฐานข้อมูลที่กำหนดเอง (custom database tables and data)

## การติดตั้งไฟล์ ZIP ที่พร้อมใช้งานได้ทันที (self-booting export ZIP) {#installing-a-self-booting-export-zip}

ในการกู้คืนไฟล์ ZIP ที่พร้อมใช้งานได้ทันทีบนโฮสต์ใหม่:

1. อัปโหลดเนื้อหาของไฟล์ ZIP ที่ส่งออกไปยัง web root เป้าหมาย
2. เปิด `index.php` ที่อัปโหลดแล้วในเบราว์เซอร์
3. ทำตามคำแนะนำการติดตั้งบนหน้าจอจากแพ็กเกจ export ที่รวมมาด้วย
4. ตรวจสอบ `readme.txt` ที่รวมมาด้วยเพื่อดูข้อควรทราบเฉพาะการส่งออก ก่อนที่จะลบไฟล์ชั่วคราวออกไป

สำหรับรายละเอียดการติดตั้งและการนำเข้าเฉพาะ addon ให้ดูที่ [Site Exporter addon documentation](/addons/site-exporter)

สำหรับเครื่องมือสำหรับเว็บไซต์เดียวที่เพิ่มเข้ามาใน Ultimate Multisite 2.9.0 ให้ดูที่ [Export & Import](/user-guide/administration/export-import)
