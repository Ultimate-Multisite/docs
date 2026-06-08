---
title: เอเจนต์ในตัว
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agent ในตัว (Built-in Agents)

Gratis AI Agent v1.9.0 มาพร้อมกับ Agent ในตัว 5 ตัว ซึ่งแต่ละตัวถูกตั้งค่าล่วงหน้าด้วยชุดเครื่องมือที่เน้นเฉพาะด้าน, คำสั่งระบบ (system prompt) ที่ปรับให้เข้ากับงาน, และคำแนะนำเริ่มต้นที่เหมาะกับงานทั่วไปในด้านนั้น ๆ การสลับไปมาระหว่าง Agent จะเปลี่ยนความสามารถและวิธีการตอบกลับของผู้ช่วย โดยที่คุณไม่ต้องตั้งค่าอะไรเลย

## Agent คืออะไร?

Agent แต่ละตัวคือโปรไฟล์การตั้งค่าที่มีชื่อเรียก ซึ่งรวมองค์ประกอบเหล่านี้เข้าด้วยกัน:

- **เครื่องมือ (Tools)** — ความสามารถที่ Agent ตัวนั้นได้รับอนุญาตให้เรียกใช้ (เช่น Content Writer สามารถเข้าถึงความสามารถในการสร้างโพสต์; Design Studio สามารถเข้าถึงความสามารถเกี่ยวกับ CSS และ theme.json)
- **คำสั่งระบบ (System prompt)** — คำแนะนำที่กำหนดน้ำเสียง ความสำคัญ และข้อจำกัดของ Agent
- **คำแนะนำเริ่มต้น (Suggestions)** — ข้อความพร้อมเขียนที่แสดงในหน้าต่างแชทเพื่อช่วยให้คุณเริ่มต้นได้อย่างรวดเร็ว

## วิธีเข้าถึง Agent Picker

1. เปิดแผง **Gratis AI Agent** ในแถบเมนูด้านข้างของ WordPress admin
2. คลิกที่ **ไอคอน Agent** ที่มุมซ้ายบนของส่วนหัวแชท (ไอคอนจะเปลี่ยนไปเพื่อสะท้อน Agent ที่ใช้งานอยู่)
3. **Agent Picker** จะเปิดขึ้นมาเป็นหน้าต่างแบบฟอร์มที่ซ้อนทับอยู่ แต่ละ Agent จะแสดงรายการพร้อมไอคอน ชื่อ และคำอธิบายสั้น ๆ หนึ่งบรรทัด
4. คลิกที่แถวของ Agent เพื่อเปิดใช้งาน ส่วนหัวแชทจะอัปเดตทันที

คุณยังสามารถสลับ Agent ได้ระหว่างการสนทนา Agent ตัวใหม่จะเริ่มใช้คำสั่งระบบตั้งแต่ข้อความถัดไป

## Agent ในตัวทั้งห้าตัว

### Content Writer

**เน้น:** การสร้างและแก้ไขโพสต์, หน้าเพจ, และแบบฟอร์มติดต่อ

**เครื่องมือที่ใช้ได้:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**ทำได้ดีในด้าน:**
- ร่างและเผยแพร่บล็อกโพสต์จากหัวข้อหรือโครงร่าง
- สร้างชุดหน้า Landing Page สำหรับเว็บไซต์ใหม่
- สร้างแบบฟอร์มติดต่อและแบบฟอร์มสอบถามข้อมูล
- กำหนดรูปภาพเด่น (featured image) ให้กับโพสต์จาก URL หรือการค้นหา

**คำแนะนำเริ่มต้น:**
- *เขียนบล็อกโพสต์ 500 คำเกี่ยวกับประโยชน์ของ WordPress multisite*
- *สร้างหน้า About, Services, และ Contact แล้วเผยแพร่*
- *เพิ่มแบบฟอร์มสอบถามการจองไปยังหน้า Contact*

---

### Site Builder

**เน้น:** การสร้างเว็บไซต์แบบครบวงจรจากคำสั่งเดียว

**เครื่องมือที่ใช้ได้:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**ทำได้ดีในด้าน:**
- สร้างแผนการสร้างเว็บไซต์หลายขั้นตอนสำหรับประเภทธุรกิจที่อธิบายไว้
- ดำเนินการในแต่ละขั้นตอนได้ด้วยตัวเอง — ทั้งโครงสร้าง, เนื้อหา, การนำทาง, และการออกแบบ
- กู้คืนจากข้อผิดพลาดระหว่างแผนโดยไม่จำเป็นต้องมีการแทรกแซงด้วยตนเอง
- ติดตั้ง plugin ที่แนะนำเป็นส่วนหนึ่งของการสร้าง
- สร้างแบบฟอร์มติดต่อได้โดยตรงจากหน้าต่างแชท (Superdav AI Agent v1.10.0+)

**คำแนะนำเริ่มต้น:**
- *สร้างเว็บไซต์พอร์ตโฟลิโอสำหรับช่างภาพ พร้อมประเภทโพสต์แกลเลอรี, หน้าจอง, และแบบฟอร์มติดต่อ*
- *สร้างเว็บไซต์ร้านอาหารพร้อมเมนูออนไลน์, เวลาเปิด-ปิด, และแบบฟอร์มสอบถามการจองโต๊ะ*
- *ตั้งค่าเว็บไซต์ที่ปรึกษาฟรีแลนซ์ พร้อมหน้าบริการ, ส่วนพอร์ตโฟลิโอ, และบล็อก*
- *เพิ่มแบบฟอร์มติดต่อไปยังหน้า Contact โดยใช้ Site Builder*

---

### Design Studio

**เน้น:** การปรับแต่งภาพ — สี, รูปแบบตัวอักษร, CSS, และรูปแบบบล็อก

**เครื่องมือที่ใช้ได้:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ทำได้ดีในด้าน:**
- การใช้ชุดค่ากำหนดธีม (theme presets) ที่ตั้งชื่อไว้ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- การปรับแต่งรูปแบบตัวอักษรและจานสีทั่วโลกผ่าน theme.json
- การใส่ CSS แบบกำหนดเองสำหรับการปรับแต่งเฉพาะแบรนด์
- การถ่ายภาพหน้าจอของหน้าเพจและตรวจสอบปัญหาด้านการออกแบบ

**คำแนะนำเริ่มต้น:**
- *ใช้ preset warm-editorial แล้วกำหนดสีหลักเป็น #2d6a4f*
- *ถ่ายภาพหน้าจอของหน้าแรกและบอกฉันว่าคุณจะปรับปรุงอะไร*
- *สร้างรูปแบบบล็อกฮีโร่ที่นำกลับมาใช้ใหม่ได้ พร้อมพื้นหลังรูปภาพเต็มความกว้างและหัวข้อตรงกลาง*

---

### Plugin Manager

**เน้น:** การค้นหา, การติดตั้ง, และการจัดการ plugin ของ WordPress

**เครื่องมือที่ใช้ได้:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ทำได้ดีในด้าน:**
- แนะนำ plugin ที่ดีที่สุดสำหรับกรณีการใช้งานที่อธิบายไว้
- ติดตั้งชุดความสามารถ (ability packs) จากทะเบียน
- เรียกดูแคตตาล็อกความสามารถที่มีอยู่ตามหมวดหมู่

**คำแนะนำเริ่มต้น:**
- *plugin ไหนดีที่สุดสำหรับไดเรกทอรีสมาชิก?*
- *ติดตั้งชุดความสามารถ WooCommerce*
- *แสดงชุดความสามารถ e-commerce ทั้งหมดที่มี*

---

### Support Assistant

**เน้น:** การตอบคำถามเกี่ยวกับเนื้อหาเว็บไซต์, การตั้งค่า, และการกำหนดค่า WordPress

**เครื่องมือที่ใช้ได้:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ทำได้ดีในด้าน:**
- ค้นหาการตั้งค่าและตัวเลือกของเว็บไซต์ปัจจุบัน
- อธิบายว่ามีการกำหนดค่า post types, taxonomies, และ menus อะไรบนเว็บไซต์
- ตอบคำถามว่า "การตั้งค่านี้ทำอะไร?" โดยการอ่านค่าที่ใช้งานจริง
- ทำหน้าที่เป็นชั้นการวินิจฉัยแบบอ่านอย่างเดียวก่อนทำการเปลี่ยนแปลง

**คำแนะนำเริ่มต้น:**
- *ตอนนี้เว็บไซต์นี้มีการเปิดใช้งาน plugin และการตั้งค่าอะไรบ้าง?*
- *แสดงรายการ custom post types ทั้งหมดที่ลงทะเบียนบนเว็บไซต์นี้*
- *เมนูนำทางอะไรบ้างที่มีอยู่และถูกกำหนดไว้ที่ไหน?*

---

## การปรับแต่ง Agent

Agent ในตัวแต่ละตัวสามารถขยายหรือแทนที่ได้ผ่าน filter `gratis_ai_agent_agents`

### การเพิ่มคำสั่งระบบแบบกำหนดเองให้กับ Agent ที่มีอยู่

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### การลงทะเบียน Agent ใหม่

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Agent ใหม่จะปรากฏใน Agent Picker ทันทีหลังจากที่ filter ทำงาน

### การลบ Agent ในตัว

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
