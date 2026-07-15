---
title: บันทึกการเปลี่ยนแปลง Ultimate AI Connector สำหรับ WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# บันทึกการเปลี่ยนแปลง Ultimate AI Connector สำหรับ WebLLM

## เวอร์ชัน 1.1.0 — เผยแพร่เมื่อ 2026-04-09 {#version-110--released-on-2026-04-09}

* **ใหม่:** วิดเจ็ตแชทแบบลอย (Floating chat widget) พร้อมตัวบ่งชี้สถานะใน admin-bar — ผู้ใช้ที่เข้าสู่ระบบทุกคนสามารถสั่งงาน LLM ที่ทำงานบนเบราว์เซอร์ได้โดยตรงจากหน้าเว็บไซต์
* **ใหม่:** SharedWorker runtime — ตอนนี้ MLC engine จะทำงานใน SharedWorker ทำให้หลายแท็บสามารถแชร์เซสชัน GPU เดียวกันได้ แทนที่จะแย่งกันใช้
* **ใหม่:** apiFetch middleware interceptor — คำขอ REST ของ WordPress ที่ตรงตามรูปแบบ AI Client SDK จะถูกส่งต่อไปยัง WebLLM broker ในเครื่องโดยอัตโนมัติ ไม่ต้องมีการวนรอบ HTTP (loopback HTTP round-trip)
* **ใหม่:** เพิ่ม UI การตั้งค่า Widget ในแผง Connector สำหรับเปิด/ปิด Widget แชท และกำหนดค่าพฤติกรรม auto-prompt
* **แก้ไข:** บังคับใช้ IndexedDB cache backend เพื่อให้การดาวน์โหลดน้ำหนักโมเดลยังคงอยู่ แม้ว่าจะมีการเปลี่ยนเส้นทาง CDN ของ HuggingFace xet ที่ทำให้ Cache API path เดิมใช้ไม่ได้
* **แก้ไข:** ข้ามการเขียนทับ context_window KV-cache สำหรับโมเดลแบบ embedding (เพราะโมเดลเหล่านี้ไม่มี decoder และการเขียนทับดังกล่าวทำให้เกิดข้อผิดพลาดขณะรันไทม์)
* **แก้ไข:** ประกาศโมเดลที่พร้อมสำหรับการเริ่มต้นแบบ cold-start ใน /webllm/v1/models ก่อนที่แท็บ worker จะโหลดเสร็จ เพื่อให้ผู้ใช้ SDK เห็นโมเดลได้ทันที
* **แก้ไข:** เชื่อมต่อ WebLLM เข้ากับ filter wpai_preferred_text_models เพื่อให้ฟีเจอร์ AI Experiments ส่งเส้นทางไปยังเอนจิ้นในเบราว์เซอร์เมื่อมีการกำหนดค่าโมเดล
* **ปรับปรุง:** ปรับปรุงการแก้ไขปัญหาแคช (Cache-busting), การทำให้เนื้อหาเป็นมาตรฐาน (content normalisation), และการแก้ไขปัญหาที่เกี่ยวข้องกับฮาร์ดแวร์ ซึ่งพบระหว่างการทดสอบแบบ end-to-end

## เวอร์ชัน 1.0.0 — การเปิดตัวครั้งแรก {#version-100--initial-release}
