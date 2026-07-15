---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# วิธีใช้ Ultimate Multisite snippets จาก GitHub repository ของเรา

มี code snippets ให้ใช้งานบน GitHub repository ซึ่งเป็นสิ่งที่ผู้ใช้ Ultimate Multisite ร้องขอบ่อยๆ สำหรับการเพิ่มฟังก์ชันเล็กๆ น้อยๆ เช่น การเพิ่มสคริปต์ Google Analytics ในหน้าสมัครสมาชิก หรือการซ่อน meta box จากหน้า dashboard ของผู้ดูแลระบบ

บทความนี้จะแนะนำวิธีการใช้งาน หรือพูดให้ชัดเจนกว่านั้นคือจะวางโค้ดเหล่านี้ไว้ที่ไหน

คุณสามารถดู snippets ได้จากลิงก์ด้านล่างนี้

https://github.com/next-press/wp-ultimo-snippets/

มี 2 วิธีในการเพิ่มโค้ด

  1. ในไฟล์ functions.php ของธีมของคุณ

  2. Must-Use Plugins (mu-plugins)

# วิธีเพิ่ม snippet ในไฟล์ functions.php ของธีมของคุณ

  1. เข้าสู่ระบบหน้า dashboard ผู้ดูแลระบบของ WordPress Network แล้วไปที่ Themes > Theme Editor (ดูภาพหน้าจอด้านล่าง)

  2. ในหน้า "Edit Themes" ให้ตรวจสอบว่าคุณได้เลือกธีมที่ใช้งานอยู่ในช่องดรอปดาวน์ที่อยู่ด้านขวาบนของหน้าจอ (หมายเลข #3 ในภาพหน้าจอด้านล่าง)

  3. คลิกไฟล์ functions.php ใต้ส่วน "Theme Files" เพื่อโหลดไฟล์ เลื่อนลงไปด้านล่างสุดแล้ววาง Ultimate Multisite snippet ที่คุณได้มาจาก GitHub repository

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# วิธีสร้าง Must-Use Plugins (mu-plugins)

WordPress มีฟีเจอร์ที่ช่วยให้คุณโหลดฟังก์ชันที่กำหนดเองได้ เรียกว่า "Must-Use Plugins" หรือเรียกสั้นๆ ว่า "mu-plugins"

mu-plugins พิเศษเหล่านี้จะถูกโหลดก่อน plugin ปกติทั้งหมด และไม่สามารถปิดใช้งานได้ ในเครือข่าย multisite โค้ดใน mu-plugins เหล่านี้จะถูกโหลดในทุกเว็บไซต์ที่อยู่ในการติดตั้งของคุณ

1\. ใช้ FTP หรือ SSH เพื่อเข้าถึงระบบไฟล์ของ WordPress ที่คุณติดตั้งไว้

2\. ภายในไดเรกทอรี wp-content ของ WordPress ที่คุณติดตั้งไว้ ให้สร้างไดเรกทอรีใหม่ชื่อ: mu-plugins

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. สร้างไฟล์ PHP ใหม่บนคอมพิวเตอร์ของคุณชื่อ wu-snippet.php โดยใช้ Notepad หรือโปรแกรมแก้ไขโค้ดใดๆ

4\. วาง Ultimate Multisite code snippet ที่คุณได้มาจาก GitHub repository ลงในไฟล์แล้วบันทึก คุณยังสามารถเพิ่มโค้ดนี้ไว้ด้านบนของ code snippet เพื่อใส่ป้ายกำกับให้ mu plugin ของคุณได้ด้วย
