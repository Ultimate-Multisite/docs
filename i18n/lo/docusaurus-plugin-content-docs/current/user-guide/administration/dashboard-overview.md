---
title: ພາບລວມແດෂ්ບອດ
sidebar_position: 8
_i18n_hash: df15906d3aee31e6cc56f85d09ec431d
---
# ภาพรวมแดชบอร์ด

Ultimate Multisite มี **Dashboard** โดยเฉพาะอยู่ภายใต้เมนู Ultimate Multisite และยังเพิ่ม widget ต่างๆ เข้าไปใน Network Dashboard ด้วย บทความนี้จะอธิบายว่าคุณจะเห็นอะไรบ้างในทั้งสองที่

## Network Dashboard {#the-network-dashboard}

Ultimate Multisite จะใส่ widget ที่มีประโยชน์เข้าไปในหน้า dashboard ระดับเครือข่าย ซึ่งหาได้ที่ **My Sites → Network Admin → Dashboard**

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

นี่คือสิ่งที่คุณจะได้รับจากแต่ละ widget:

**First Steps:** จะปรากฏขึ้นเมื่อติดตั้งใหม่ และเตือนให้คุณทำขั้นตอนการตั้งค่าต่างๆ เช่น การกำหนดวิธีการชำระเงินและการสร้างบัญชีทดสอบ

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

**Summary:** รายงานจำนวนผู้ลงทะเบียนและรายได้ในแต่ละวัน MRR (Monthly Recurring Revenue) จะแสดงรายได้รวมที่คาดว่าจะได้รับจากลูกค้าที่มีสมาชิกที่สร้างรายได้

![Summary widget](/img/admin/network-dashboard-summary.png)

**Activity Stream:** รายงานเหตุการณ์ต่างๆ ที่เกิดขึ้นทั่ว Ultimate Multisite ไม่ว่าจะเป็นการลงทะเบียน การยกเลิก การสร้างเว็บไซต์ การลบ และกิจกรรมอื่นๆ

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

**Right Now:** แสดงสรุปสั้นๆ เกี่ยวกับผู้ใช้และเว็บไซต์ในเครือข่าย พร้อมทางลัดในการสร้างเว็บไซต์หรือผู้ใช้ใหม่

![Right Now widget](/img/admin/network-dashboard-right-now.png)

**News & Discussions:** ดึงและแสดงข่าวสารล่าสุดของ Ultimate Multisite รวมถึงการอัปเดต บั๊กที่สำคัญ และการแก้ไขด้านความปลอดภัย

![News widget](/img/admin/network-dashboard-news.png)

## Ultimate Multisite Dashboard {#the-ultimate-multisite-dashboard}

ในขณะที่ network dashboard แสดงข้อมูลภาพรวมเกี่ยวกับเครือข่าย แต่ ultimate multisite dashboard (ที่อยู่ระดับบนสุดของเมนู Ultimate Multisite) จะแสดงข้อมูลเกี่ยวกับบริการนั้นๆ

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

**รายได้ประจำรายเดือนที่เพิ่มขึ้น (Monthly Recurring Revenue Growth):** แสดงรายละเอียดรายเดือนของรายได้ในช่วงเวลา 12 เดือนตามปฏิทิน รายได้ใหม่จะแสดงเป็นสีน้ำเงิน ส่วนการยกเลิกจะแสดงเป็นสีแดง

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

**การรองรับช่วงวันที่ (Date-range Support):** กรองข้อมูลใน dashboard ตามช่วงเวลาที่คุณต้องการ เพื่อให้เน้นข้อมูลที่จำเป็น ช่วงวันที่นี้จะควบคุมว่าข้อมูลใดจะแสดงใน widget ด้านล่าง

![Date range and dashboard stats](/img/admin/um-dashboard-date-range.png)

Widget ใน dashboard ประกอบด้วย:

- **รายได้ (Revenue)** — รายได้รวมสำหรับช่วงเวลานั้น พร้อมรายละเอียด MRR และแยกตามผลิตภัณฑ์
- **สมาชิกใหม่ (New Memberships)** — จำนวนสมาชิกใหม่ที่ถูกสร้างขึ้นในช่วงเวลาที่เลือก
- **การลงทะเบียนตามประเทศ (Signups by Countries)** — การแบ่งข้อมูลการลงทะเบียนตามภูมิศาสตร์
- **การลงทะเบียนตามแบบฟอร์ม (Signups by Forms)** — จำนวนลูกค้าที่ลงทะเบียนผ่านแต่ละแบบฟอร์มชำระเงิน เทียบกับจำนวนที่แอดมินเพิ่มเข้ามา
- **เว็บไซต์ที่มีคนเข้าชมมากที่สุด (Most Visited Sites)** — เว็บไซต์ที่ถูกเข้าชมมากที่สุดในเครือของคุณ (ต้องเปิดใช้งานการนับการเข้าชมที่ **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**)

![Dashboard statistics](/img/admin/um-dashboard-stats.png)
