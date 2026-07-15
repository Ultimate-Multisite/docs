---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# ວິທີໃຊ້ Ultimate Multisite snippets ໃນ GitHub repository ຂອງພວກເຮົາ

ໃນ GitHub repository ມີโค้ดตัวอย่าง (code snippets) ដែលผู้ใช้ Ultimate Multisite มักจะขอมาบ่อยๆ เพื่อเพิ่มฟังก์ชันเล็กๆ น้อยๆ เช่น การใส่สคริปต์ Google Analytics บนหน้าลงทะเบียน หรือการซ่อน meta box บางส่วนออกจาก admin dashboard

บทความนี้จะแสดงให้ดูว่าเราจะนำโค้ดเหล่านี้ไปใช้อย่างไร หรือพูดให้ชัดกว่านั้นคือ จะวางโค้ดเหล่านั้นไว้ที่ไหนบ้าง

คุณสามารถหา snippet เหล่านี้ได้จากลิงก์ด้านล่างนี้ครับ

https://github.com/next-press/wp-ultimo-snippets/

มี 2 วิธีที่คุณสามารถเพิ่มโค้ดได้:

  1. ในไฟล์ functions.php ของธีมของคุณ
  2. ผ่าน Must-Use Plugins (mu-plugins)

# ວິທີเพิ่ม snippet ในไฟล์ functions.php ของธีมคุณ

  1. เข้าสู่ระบบ WordPress Network admin dashboard ของคุณ แล้วไปที่ Themes > Theme Editor (ดูภาพหน้าจอด้านล่าง)

  2. บนหน้า "Edit Themes" ให้แน่ใจว่าคุณได้เลือกธีมที่ใช้งานอยู่ของคุณในช่อง dropdown ที่อยู่ทางมุมขวาบนของหน้าจอ (#3 ในภาพหน้าจอด้านล่าง)

  3. คลิกที่ไฟล์ functions.php ภายใต้ส่วน "Theme Files" เพื่อโหลดไฟล์ จากนั้นเลื่อนลงไปด้านล่างสุดแล้ววาง Ultimate Multisite snippet ที่คุณได้มาจาก GitHub repository

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: WordPress Theme Editor แสดงการแก้ไขไฟล์ functions.php -->

# ວິທີสร้าง Must-Use Plugins (mu-plugins)

WordPress มีฟีเจอร์ที่ช่วยให้คุณโหลดฟังก์ชันที่กำหนดเองที่เรียกว่า "Must-Use Plugins" หรือเรียกสั้นๆ ว่า "mu-plugins"

mu-plugins พิเศษเหล่านี้จะถูกโหลดก่อนปลั๊กอินปกติอื่นๆ ทั้งหมด และไม่สามารถปิดการใช้งานได้ ในเครือข่าย multisite โค้ดใน mu-plugins เหล่านี้จะถูกโหลดบนทุกไซต์ในการติดตั้งของคุณ

1. ใช้ FTP หรือ SSH เพื่อเข้าถึงระบบไฟล์ของการติดตั้ง WordPress ของคุณ

၂။ នៅក្នុងโฟลเดอร์ wp-content ของ WordPress ที่ติดตั้งไว้ ให้สร้างโฟลเดอร์ใหม่ชื่อว่า: mu-plugins

<!-- รูปภาพไม่พร้อมใช้งาน: File manager แสดงโฟลเดอร์ wp-content พร้อมโฟลเดอร์ mu-plugins -->

၃။ สร้างไฟล์ PHP ใหม่บนคอมพิวเตอร์ของคุณชื่อว่า wu-snippet.php โดยใช้ Notepad หรือโปรแกรมแก้ไขโค้ดใดก็ได้

၄။ นำโค้ดตัวอย่าง Ultimate Multisite ที่คุณได้จาก GitHub repository มาใส่ในไฟล์นั้นแล้วบันทึกไว้ คุณสามารถเพิ่มโค้ดนี้ไว้ด้านบนของโค้ดตัวอย่างเพื่อระบุว่าเป็นปลั๊กอิน mu ของคุณได้ด้วย
