---
title: การแปล Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# การแปล Ultimate Multisite

Ultimate Multisite พัฒนาขึ้นเป็นภาษาอังกฤษ แต่ปลั๊กอินนี้รองรับการแปลได้อย่างเต็มที่ และเรายินดีต้อนรับผู้ที่ต้องการมีส่วนร่วมในการแปลเสมอ

## การแปลปลั๊กอินหลัก

ปลั๊กอินหลักของ Ultimate Multisite แปลผ่าน **แพลตฟอร์มการแปลอย่างเป็นทางการของ WordPress.org**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

นี่คือระบบการแปลมาตรฐานของชุมชน WordPress เมื่อคำแปลได้รับการอนุมัติถึงเกณฑ์ที่กำหนด คำแปลเหล่านั้นจะถูกส่งไปยังผู้ใช้ Ultimate Multisite ทุกคนโดยอัตโนมัติผ่านการอัปเดตปลั๊กอิน WordPress

**เราต้องการความช่วยเหลือจากคุณ!** หากคุณพูดภาษาอื่นนอกเหนือจากภาษาอังกฤษ โปรดพิจารณาช่วยแปล แม้แปลเพียงไม่กี่ข้อความก็มีประโยชน์มาก วิธีเริ่มต้น:

1. เข้าไปที่ [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. เลือกภาษาของคุณ
3. คลิก "Contribute Translation"
4. คุณต้องมีบัญชี WordPress.org ซึ่งสมัครได้ฟรี

หากคุณต้องการเป็นบรรณาธิการแปลภาษาของคุณ (สามารถอนุมัติคำแปลได้) สามารถติดต่อเราผ่าน [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions)

## การแปล Addon

ปลั๊กอิน Addon แปลแยกต่างหากที่:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

การแปล addon ในปัจจุบันสร้างโดย AI เป็นจุดเริ่มต้น ครอบคลุมทุกภาษาที่รองรับ แต่อาจมีสำนวนที่ไม่เป็นธรรมชาติหรือไม่ถูกต้อง เรายินดีต้อนรับนักแปลที่เป็นมนุษย์มาตรวจสอบและเสนอการปรับปรุงเพื่อให้คำแปลเป็นธรรมชาติและแม่นยำมากขึ้น

## การแปลแบบ Local

หากคุณต้องการสร้างคำแปลในเครื่องของตัวเองสำหรับโปรเจกต์ของคุณ แทนที่จะส่งคำแปลกลับไปยังต้นทาง มีสองวิธี:

### ใช้ Poedit

คุณสามารถใช้โปรแกรม **[Poedit](https://poedit.net)** เพื่อแปลไฟล์ `.pot`:

1. ดาวน์โหลด Poedit จาก [poedit.net](https://poedit.net)
2. เปิดไฟล์ `.pot` จาก `wp-content/plugins/ultimate-multisite/lang/`
3. แปลข้อความต่างๆ ในอินเทอร์เฟซของ Poedit
4. บันทึก -- Poedit จะสร้างไฟล์ `.po` และ `.mo` ให้
5. นำไฟล์ที่ได้ไปวางในโฟลเดอร์ `lang`

### ใช้ Loco Translate

ปลั๊กอิน WordPress **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** ให้คุณแปลได้โดยตรงจากหน้าแอดมินโดยไม่ต้องใช้เครื่องมือบนเดสก์ท็อป ปลั๊กอินนี้จัดการการสร้างและคอมไพล์ไฟล์แปลให้คุณ
