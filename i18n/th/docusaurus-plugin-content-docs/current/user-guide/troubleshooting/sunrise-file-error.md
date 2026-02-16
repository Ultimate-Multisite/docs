---
title: ข้อผิดพลาดไฟล์ Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# ข้อผิดพลาดในการติดตั้งไฟล์ Sunrise

ไฟล์ sunrise.php เป็นไฟล์พิเศษที่ WordPress จะค้นหาในระหว่างขั้นตอนการเริ่มต้นระบบ เพื่อให้ WordPress สามารถตรวจพบไฟล์ sunrise.php ได้ ไฟล์นี้จะต้องอยู่ใน **โฟลเดอร์ wp-content**

เมื่อคุณเปิดใช้งาน Ultimate Multisite และทำตามขั้นตอนในตัวช่วยตั้งค่าตามที่เห็นในภาพหน้าจอ Ultimate Multisite จะพยายามคัดลอกไฟล์ sunrise.php ของเราไปยังโฟลเดอร์ wp-content

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

โดยส่วนใหญ่แล้ว เราสามารถคัดลอกไฟล์ได้สำเร็จและทุกอย่างทำงานได้ตามปกติ อย่างไรก็ตาม หากมีบางอย่างที่ไม่ได้ตั้งค่าไว้อย่างถูกต้อง (เช่น สิทธิ์การเข้าถึงโฟลเดอร์) คุณอาจพบสถานการณ์ที่ Ultimate Multisite ไม่สามารถคัดลอกไฟล์ได้

หากคุณอ่านข้อความแจ้งข้อผิดพลาดที่ Ultimo แสดง คุณจะเห็นว่านั่นคือสิ่งที่เกิดขึ้น: **Sunrise copy failed**

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ในการแก้ไขปัญหานี้ คุณสามารถคัดลอกไฟล์ sunrise.php จากโฟลเดอร์ plugin ของ wp-ultimo แล้ววางไว้ในโฟลเดอร์ wp-content ของคุณ หลังจากทำเสร็จแล้ว ให้โหลดหน้าตัวช่วยตั้งค่าใหม่ และการตรวจสอบควรจะผ่าน

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ไม่ว่าจะเป็นกรณีใด คุณควรตรวจสอบสิทธิ์การเข้าถึงโฟลเดอร์โดยทั่วไป เพื่อหลีกเลี่ยงปัญหาในอนาคต (ไม่เพียงแค่กับ Ultimate Multisite แต่รวมถึง plugin และธีมอื่นๆ ด้วย)

**เครื่องมือ Health Check** ที่มาพร้อมกับ WordPress (คุณสามารถเข้าถึงได้ผ่าน **แผงควบคุมของเว็บไซต์หลัก > Tools > Health Check**) สามารถแจ้งให้คุณทราบได้ว่าสิทธิ์การเข้าถึงโฟลเดอร์ของคุณตั้งค่าไว้ในลักษณะที่อาจทำให้เกิดปัญหากับ WordPress หรือไม่

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
