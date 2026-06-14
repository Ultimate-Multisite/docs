---
title: ຕົວແທນໃນຕົວ
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Gratis AI Agent v1.9.0 ມາພ້ອມກັບเอเจนต์สำเร็จรูป (built-in agents) 5 ตัว ซึ่งแต่ละตัวໄດ້ถูกตั้งค่าเครื่องมือที่เน้นเฉพาะทาง, คำสั่งระบบ (system prompt) ที่ปรับให้เข้ากับงานนั้นๆ, และคำแนะนำเริ่มต้นที่ตรงกับงานทั่วไปในด้านนั้นๆ. ການสลับไปมาระหว่างเอเจนต์จะเปลี่ยนว่าผู้ช่วยสามารถทำอะไรได้และตอบสนองอย่างไร — โดยที่คุณไม่ต้องตั้งค่าอะไรเลย.

## เอเจนต์คืออะไร?

เอเจนต์แต่ละตัวก็เหมือนโปรไฟล์การตั้งค่าที่มีชื่อเฉพาะ ซึ่งรวมเอาสิ่งเหล่านี้เข้าด้วยกัน:

- **Tools (เครื่องมือ)** — คือความสามารถที่เอเจนต์ได้รับอนุญาตให้เรียกใช้ (ຕົວຢ່າງ: Content Writer ຈະມີความสามารถในการสร้างโพสต์; Design Studio จะเข้าถึงความสามารถด้าน CSS และ theme.json)
- **System prompt (คำสั่งระบบ)** — คือคำแนะนำที่กำหนดน้ำเสียง, ลำดับความสำคัญ, และข้อจำกัดของเอเจนต์นั้นๆ
- **Suggestions (คำแนะนำ)** — คือคำสั่งที่เขียนไว้ล่วงหน้าซึ่งจะแสดงในส่วนแชท เพื่อช่วยให้คุณเริ่มต้นทำงานได้อย่างรวดเร็ว

## วิธีเข้าถึง Agent Picker

1. เปิดแผง **Gratis AI Agent** ในแถบด้านข้างของ WordPress admin.
2. คลิกที่ **ไอคอนเอเจนต์ (agent icon)** ที่มุมซ้ายบนของส่วนหัวแชท (ไอคอนจะเปลี่ยนไปตามเอเจนต์ที่กำลังใช้งานอยู่).
3. **Agent Picker** จะเปิดขึ้นมาเป็นรูปแบบตารางแบบ overlay. แต่ละเอเจนต์จะมีรายการพร้อมกับไอคอน, ชื่อ, และคำอธิบายสั้นๆ หนึ่งบรรทัด.
4. คลิกที่แถวของเอเจนต์เพื่อเปิดใช้งานมัน. ส่วนหัวแชทจะอัปเดตทันที.

คุณยังสามารถสลับเอเจนต์ระหว่างการสนทนาได้ด้วย — คำสั่งระบบของเอเจนต์ใหม่จะมีผลตั้งแต่ข้อความถัดไป.

## เอเจนต์สำเร็จรูปทั้งห้าตัว

### Content Writer (นักเขียนเนื้อหา)

**จุดเน้น:** การสร้างและแก้ไขโพสต์, หน้าเว็บ และแบบฟอร์มติดต่อ.

**เครื่องมือที่มีให้ใช้:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**สิ่งที่ทำได้ดี:**
- ร่างและเผยแพร่บทความบล็อกจากข้อมูลสรุปหรือโครงร่าง
- สร้างหน้า Landing page เป็นชุดสำหรับเว็บไซต์ใหม่
- สร้างฟอร์มติดต่อและสอบถามลูกค้า
- ตั้งค่ารูปภาพเด่นบนโพสต์จาก URL หรือการค้นหา

**ข้อเสนอแนะเริ่มต้น:**
- *เขียนบทความบล็อก 500 คำเกี่ยวกับประโยชน์ของ WordPress multisite*
- *สร้างหน้า About, Services และ Contact แล้วเผยแพร่*
- *เพิ่มฟอร์มสอบถามการจองลงในหน้า Contact*

---

### Site Builder (ตัวสร้างเว็บไซต์)

**จุดเด่น:** สร้างเว็บไซต์แบบครบวงจรจากคำสั่งเดียว

**เครื่องมือที่มีให้ใช้:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**สิ่งที่ทำได้ดี:**
- สร้างแผนการสร้างเว็บไซต์หลายขั้นตอนสำหรับประเภทธุรกิจที่อธิบายไว้
- ทำงานแต่ละขั้นตอนโดยอัตโนมัติ ทั้งโครงสร้าง เนื้อหา การนำทาง และการออกแบบ
- แก้ไขข้อผิดพลาดระหว่างแผนได้เองโดยไม่ต้องเข้าไปแก้ไขด้วยตนเอง
- ติดตั้ง plugin ที่แนะนำเป็นส่วนหนึ่งของการสร้างเว็บไซต์
- สร้างฟอร์มติดต่อโดยตรงจากหน้า chat (Superdav AI Agent v1.10.0+)

**ข้อเสนอแนะเริ่มต้น:**
- *สร้างเว็บไซต์ Portfolio สำหรับช่างภาพ โดยมี post type เป็น Gallery, หน้าจอง และฟอร์มติดต่อ*
- *สร้างเว็บไซต์ร้านอาหารที่มีเมนูออนไลน์ เวลาเปิด-ปิด และฟอร์มสอบถามการจองโต๊ะ*
- *ตั้งค่าเว็บไซต์ที่ปรึกษาอิสระ (freelance consulting) พร้อมหน้าบริการ ส่วน Portfolio และบล็อก*
- *เพิ่มฟอร์มติดต่อลงในหน้า Contact โดยใช้ Site Builder*

---

### Design Studio (สตูดิโอออกแบบ)

**จุดเด่น:** การปรับแต่งด้วยภาพ — สี, รูปแบบตัวอักษร (typography), CSS และรูปแบบบล็อก

**เครื่องมือที่มีให้ใช้:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**สิ่งที่ทำได้ดี:**
- การใช้ theme presets ที่ตั้งชื่อไว้ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- การปรับแต่งรูปแบบตัวอักษรและชุดสีทั่วทั้งเว็บไซต์ผ่าน theme.json
- การใส่ CSS ที่กำหนดเองเพื่อเขียนทับสไตล์เฉพาะของแบรนด์
- การจับภาพหน้าจอของหน้าเว็บและตรวจสอบปัญหาด้านการออกแบบ

**ข้อเสนอเริ่มต้น:**
- *ลองใช้ preset warm-editorial แล้วตั้งค่าสีหลักเป็น #2d6a4f ดูสิ*
- *ถ่ายภาพหน้าแรกแล้วบอกฉันว่าควรปรับปรุงตรงไหนบ้าง*
- *สร้าง block pattern สำหรับส่วน hero ที่นำกลับมาใช้ใหม่ได้ โดยมีรูปพื้นหลังเต็มความกว้างและหัวข้ออยู่ตรงกลาง*

---

### Plugin Manager (ตัวจัดการปลั๊กอิน)

**จุดเน้น:** การค้นหา ติดตั้ง และจัดการ WordPress plugins ต่างๆ

**เครื่องมือที่มีให้ใช้:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**สิ่งที่ทำได้ดี:**
- แนะนำปลั๊กอินที่ดีที่สุดสำหรับสถานการณ์ที่คุณอธิบายมา
- ติดตั้ง ability packs จาก registry (คลัง)
- เรียกดูแคตตาล็อก ability ที่มีให้เลือกตามหมวดหมู่ต่างๆ

**ข้อเสนอเริ่มต้น:**
- *ปลั๊กอินที่ดีที่สุดสำหรับทำไดเรกทอรีสมาชิกคืออะไร?*
- *ติดตั้ง ability pack ของ WooCommerce ดูสิ*
- *แสดง ability packs สำหรับอีคอมเมิร์ซทั้งหมดที่มีอยู่ให้ฉันดูหน่อย*

---

### Support Assistant (ผู้ช่วยสนับสนุน)

**จุดเน้น:** การตอบคำถามเกี่ยวกับเนื้อหาของเว็บไซต์ การตั้งค่า และการกำหนดค่า WordPress ต่างๆ

**เครื่องมือที่มีให้ใช้:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**สิ่งที่ทำได้ดี:**
- ดูการตั้งค่าและตัวเลือกของเว็บไซต์ปัจจุบัน
- อธิบายว่ามีการตั้งค่า post types, taxonomies และ menus อะไรบ้างบนเว็บไซต์
- ตอบคำถามว่า "การตั้งค่านี้ทำอะไร?" โดยอ่านค่าแบบเรียลไทม์
- ทำหน้าที่เป็นชั้นตรวจสอบ (diagnostic layer) ที่อ่านได้อย่างเดียว ก่อนที่จะทำการเปลี่ยนแปลงใดๆ

**ข้อเสนอแนะเริ่มต้น:**
- *ปลั๊กอินและการตั้งค่าใดบ้างที่ใช้งานอยู่บนเว็บไซต์นี้?*
- *แสดงรายการ custom post types ทั้งหมดที่ลงทะเบียนไว้บนเว็บไซต์นี้*
- *เมนูนำทางมีอะไรบ้าง และถูกกำหนดไปที่ไหน?*

---

## การปรับแต่ง Agents (ตัวแทน)

Agent ที่มีมาให้ในระบบสามารถขยายหรือเปลี่ยนได้ผ่านฟิลเตอร์ `gratis_ai_agent_agents` ครับ

### การเพิ่ม system prompt แบบกำหนดเองให้กับ agent ที่มีอยู่

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### การลงทะเบียน agent ใหม่

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'ปรับปรุงโพสต์และหน้าเว็บให้เหมาะกับ Search Engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'คุณคือผู้เชี่ยวชาญด้าน SEO เน้นการปรับปรุงคีย์เวิร์ด, meta descriptions และ structured data.',
        'suggestions'   => [
            'ตรวจสอบชื่อหน้าแรก (homepage title) และ meta description.',
            'แนะนำการปรับปรุง title tag สำหรับโพสต์ล่าสุดห้าอัน.'
        ],
    ];
    return $agents;
} );
```

Agent ໃໝ່ຈະປາກົດຢູ່ໃນ Agent Picker ທັນທີຫຼັງຈາກການກັ່ນຕອງສຳເລັດ.

### ການເອົາ agent ທີ່ມາພ້ອມກັບລະບົບອອກ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
