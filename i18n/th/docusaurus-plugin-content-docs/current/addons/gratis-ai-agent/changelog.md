---
title: บันทึกการเปลี่ยนแปลง
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Released on 2026-04-28

### New

- **ความสามารถ `create_contact_form`** — สร้างแบบฟอร์มติดต่อโดยใช้ plugin แบบฟอร์มที่ใช้งานอยู่ (เช่น Contact Form 7, WPForms, Fluent Forms, หรือ Gravity Forms) และส่งคืน shortcode ที่พร้อมนำไปฝังในโพสต์หรือหน้าใดก็ได้
- **ความสามารถ `set_featured_image`** — กำหนดรูปภาพเด่น (featured image) ให้กับโพสต์หรือหน้า โดยใช้ ID ของไฟล์จาก Media Library ที่มีอยู่แล้ว หรือใช้ URL จากภายนอก; หากระบุ URL จะมีการนำเข้าภาพโดยอัตโนมัติ
- **ความสามารถ `batch_create_posts`** — สร้างโพสต์ได้หลายรายการในการเรียกใช้ความสามารถเพียงครั้งเดียว รองรับพารามิเตอร์เดียวกับ `create_post` รายงานสถานะความสำเร็จ/ล้มเหลวของแต่ละโพสต์ และมีโหมด `stop_on_error` ให้เลือกใช้
- **พารามิเตอร์ `page_template`** — เพิ่มเข้ามาใน `create_post` และ `update_post` ใช้สำหรับกำหนดไฟล์ page template ของ PHP (เช่น `page-full-width.php`) ในขั้นตอนการสร้างหรืออัปเดต หากต้องการให้กลับไปใช้ค่าเริ่มต้นของธีม ให้ส่งค่าว่าง (empty string) ใน `update_post`
- **ความสามารถในการจับภาพหน้าจอฝั่งไคลเอนต์ (Client-side screenshot abilities)** — ได้แก่ `capture_screenshot`, `compare_screenshots`, และ `review_page_design` สามารถจับภาพหน้าจอแบบเต็มหน้าหรือแบบ viewport ของหน้าเว็บจริงผ่าน headless browser ฝั่งเซิร์ฟเวอร์, เปรียบเทียบภาพหน้าจอสองภาพ, และรับการรีวิวการออกแบบที่สร้างโดย AI ซึ่งครอบคลุมเรื่องเลย์เอาต์, ตัวอักษร, สี, และการเข้าถึง (accessibility)
- **Agent ในตัว 5 ตัว** — ได้แก่ Content Writer, Site Builder, Design Studio, Plugin Manager, และ Support Assistant แต่ละ Agent มีชุดเครื่องมือเฉพาะ, system prompt ที่ปรับแต่งมาโดยเฉพาะ, และข้อเสนอแนะเริ่มต้น สามารถสลับได้ผ่าน **Agent Picker** ใหม่ที่ส่วนหัวของแชท ดูรายละเอียดได้ที่ [Built-in Agents](../../user-guide/configuration/built-in-agents)
- **Feature flags** — เพิ่มแท็บ **Settings → Feature Flags** ใหม่ พร้อมสวิตช์ควบคุมการเข้าถึง (จำกัดเฉพาะผู้ดูแลระบบ, จำกัดเฉพาะผู้ดูแลเครือข่าย, สิทธิ์สมาชิก, ปิดใช้งานสำหรับผู้ที่ไม่ใช่สมาชิก) และตัวเลือกด้านแบรนดิ้ง (ซ่อนการอ้างอิงใน footer, ชื่อ Agent แบบกำหนดเอง, ซ่อน Agent Picker, ใช้ไอคอนเว็บไซต์เป็นรูปโปรไฟล์แชท) ดูรายละเอียดได้ที่ [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings)
- **กู้คืนเซสชันล่าสุด (Restore last session)** — ตอนนี้แผงแชทจะโหลดการสนทนาล่าสุดโดยอัตโนมัติเมื่อเปิดหน้าหรือเปิด widget ทำให้บริบทการสนทนาไม่หายไประหว่างการนำทางหน้าเว็บ
- **ลิงก์สำหรับ Plugin actions** — เพิ่มลิงก์ด่วนไปยัง Settings และ Abilities Registry บนหน้า **Plugins → Installed Plugins** ของ WordPress ใต้คำอธิบาย plugin

### Improved

- **การลองใหม่ของแหล่งที่มาของรูปภาพ (Image source retry)** — ตอนนี้ Agent จะพยายามลองใช้แหล่งที่มาของรูปภาพฟรีที่กำหนดค่าไว้ทั้งหมดก่อนที่จะใช้ภาพที่สร้างโดย AI เมื่อการดาวน์โหลดล้มเหลว
- **แผงข้อมูล Model (Model info panel)** — แสดงอยู่เสมอที่ส่วนหัวของแชท ไม่ซ่อนอีกต่อไปหลังจากข้อความแรก
- **พฤติกรรมการเลื่อนอัตโนมัติ (Auto-scroll behaviour)** — การเลื่อนอัตโนมัติจะหยุดเมื่อผู้ใช้เลื่อนขึ้นเพื่ออ่าน และปุ่ม **Scroll to bottom** แบบลอยตัวจะปรากฏขึ้นและหายไปโดยอัตโนมัติเมื่อผู้ใช้ถึงข้อความล่าสุด
- **UI ของ Agent Picker** — ออกแบบใหม่เป็นรูปแบบ overlay แบบ form-table พร้อมไอคอนสำหรับแต่ละ Agent ทำให้ง่ายต่อการระบุและสลับ Agent ได้ในทันที
- **Lazy-loaded JS chunks** — JavaScript bundle เริ่มต้นของ chat widget ถูกแบ่งออกเป็น chunks ที่โหลดแบบ lazy-loaded ทำให้ขนาด bundle เริ่มต้นลดลง 75–90%
- **การออกแบบ Chat widget ใหม่** — ไอคอน AI แบบรวมศูนย์เข้ามาแทนที่ avatar แบบกำหนดเองเดิม ให้มีความสอดคล้องกับระบบ Agent ในตัว
- **การแปลง URL เป็นลิงก์ (URL linkification)** — URL ที่ปรากฏในข้อความระบบและฟองข้อความข้อผิดพลาดจะถูกแสดงเป็นลิงก์ที่คลิกได้แล้ว

### Fixed

- **ความสามารถในการค้นพบ Ability (Ability discoverability)** — แก้ไขคำอธิบาย, การอ้างอิง system prompt, และการจัดแนว namespace เพื่อให้แน่ใจว่าทุก ability จะปรากฏในรายการเครื่องมือของ Agent อย่างน่าเชื่อถือ
- **Providers cache** — ตอนนี้ providers จะถูกแคชทั่วทั้งเว็บไซต์ผ่านตัวนับเวอร์ชัน ป้องกันปัญหา stale-provider บนเครือข่าย multisite
- **`ability_invalid_output`** — แก้ไขใน 12 ability handlers ทำให้ทุกตัวส่งคืน JSON response ที่มีโครงสร้างอย่างถูกต้อง
- **`pending_client_tool_calls` pipeline** — เชื่อมต่อแบบ end-to-end เพื่อให้การเรียกใช้เครื่องมือฝั่งไคลเอนต์เสร็จสมบูรณ์อย่างถูกต้องและส่งผลลัพธ์กลับไปยัง model
- **History drawer** — ยกเว้นการเปลี่ยนแปลงที่ไม่สามารถย้อนกลับได้ออกจากรายการย้อนกลับ ลิงก์ **View full history** จึงทำงานได้อย่างถูกต้อง
- **ระบบ Changes/revert** — แก้ไขบั๊ก 5 จุด และรวมไว้ภายใต้ admin interface ใหม่
- **Save Settings toast** — การแจ้งเตือน snackbar จะปรากฏอย่างน่าเชื่อถือหลังจากคลิก **Save Settings**
- **Trash context menu** — เพิ่มตัวเลือก **Delete Permanently** เพื่อให้สามารถลบรายการได้อย่างถาวรโดยไม่ต้องผ่านมุมมองถังขยะ
- **Edit & resend** — การคลิกไอคอนแก้ไขจะเข้าสู่โหมดแก้ไขเฉพาะข้อความที่คลิก ไม่ใช่ข้อความทั้งหมดในเธรด
- **ความสูงของ Chat layout** — แผงแชทจะปรับความสูงเมื่อมีเนื้อหาที่ถูก inject โดย plugin (เช่น admin notices, banners) ปรากฏอยู่เหนือหน้า เพื่อป้องกันไม่ให้พื้นที่ป้อนข้อความถูกดันออกนอกหน้าจอ

---

## 1.4.0 — Released on 2026-04-09

### New

- **คำสั่ง benchmark ของ WP-CLI** (`wp gratis-ai-agent benchmark`) — ใช้รันชุด benchmark ของ Agent Capabilities v1 จาก command line สำหรับ CI pipelines และ workflow การประเมิน model รองรับการรันแบบรายคำถาม, การกำหนดค่า provider/model ทับ, และ output เป็น JSON/CSV
- **Agent Capabilities v1 benchmark suite** — ชุด prompt ที่ซับซ้อนหลายขั้นตอนและมีโครงสร้าง เพื่อทดสอบความสามารถทั้งหมด พร้อมการให้คะแนนและการรายงาน token/duration
- **ความสามารถสำหรับ Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type` การลงทะเบียนจะคงอยู่แม้จะรีสตาร์ทผ่าน options table
- **ความสามารถสำหรับ Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy` รองรับ taxonomy แบบลำดับชั้น (hierarchical) และแบบแบน (flat) พร้อม rewrite slugs แบบทางเลือก
- **ความสามารถสำหรับ Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset` รวมถึง preset ที่คัดสรรมา 5 แบบ: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`
- **ความสามารถสำหรับ Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles` อ่านและเขียนค่า theme.json ผ่าน WordPress Global Styles API
- **ความสามารถในการจัดการเมนูนำทาง (Navigation Menu management ability)** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus` รองรับเมนูแบบซ้อนกัน (nested menus) และการกำหนดตำแหน่งธีม
- **ความสามารถในการจัดการ Options (Options Management ability)** — `get_option`, `set_option`, `delete_option`, `list_options` มี built-in safety blocklist เพื่อป้องกันการแก้ไข options ที่สำคัญของ WordPress
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin` ค้นหาและเปิดใช้งานชุดความสามารถที่แจกจ่ายในรูปแบบ WordPress plugins
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error` แผนการสร้างเว็บไซต์หลายเฟส พร้อมการค้นหา plugin, การอ้างอิงผลลัพธ์ของแต่ละขั้นตอน, การติดตามความคืบหน้า, และการกู้คืนข้อผิดพลาดโดยอัตโนมัติ
- **คำถาม benchmark สำหรับเว็บไซต์ร้านอาหาร** (`q-restaurant-website`) — การทดสอบ end-to-end ที่ครอบคลุม CPT registration, design system, navigation, และ plugin discovery
- **AI provider connector plugins** ถูกเพิ่มเข้าไปใน WordPress Playground blueprints เพื่อการตั้งค่าการพัฒนาในเครื่อง (local development) ที่รวดเร็วยิ่งขึ้น

### Improved

- README อัปเดตด้วยเอกสารและคำแนะนำการตั้งค่า AI provider connector

### Fixed

- แก้ไขความล้มเหลวของการทดสอบ PHPUnit 25 จุดบน main branch
- แก้ไขรูปแบบ URL GitHub releases ใน `blueprint.json`
- เปลี่ยนหมายเลข Task ID เพื่อหลีกเลี่ยงการชนกับ ID เก่า

---

## 1.3.x

_ดูบันทึกการปล่อยเวอร์ชันก่อนหน้าได้ที่ repository ของ plugin_
