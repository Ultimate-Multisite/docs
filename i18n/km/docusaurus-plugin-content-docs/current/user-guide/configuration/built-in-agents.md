---
title: ភ្នាក់ងារភ្ជាប់មកជាមួយ
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents ដែលមានស្រាប់ (Built-in Agents)

Gratis AI Agent v1.9.0 មានអង់ត៍ដែលមានស្រាប់ចំនួនប្រាំ ដែលនីមួយៗត្រូវបានកំណត់រចនាសម្ព័ន្ធរួចជាស្រេចជាមួយនឹងឧបករណ៍ដែលផ្តោតលើការងារជាក់លាក់មួយ, system prompt ដែលត្រូវបានប្ដូរតាមបំណង, និងសំណើចាប់ផ្ដើមដែលត្រូវនឹងកិច្ចការទូទៅក្នុងផ្នែកនោះ។ ការផ្លាស់ប្តូររវាងអង់ត៍នីមួយៗនឹងផ្លាស់ប្តូរអ្វីដែល assistant អាចធ្វើបាន និងរបៀបដែលវាឆ្លើយតប — ដោយមិនចាំបាច់មានការកំណត់រចនាសម្ព័ន្ធពីអ្នកទេ។

## អង់ត៍ (Agent) ជាអ្វី?

អង់ត៍នីមួយៗគឺជាប្រវត្តិរូបកំណត់រចនាសម្ព័ន្ធដែលមានឈ្មោះ ដែលរួមបញ្ចូលគ្នា៖

- **Tools** — សមត្ថភាពដែលអង់ត៍ត្រូវបានអនុញ្ញាតឱ្យប្រើ (ឧទាហរណ៍ អ្នកសរសេរខ្លឹមសារមានសមត្ថភាពបង្កើតការបង្ហោះ; ស្ទូឌីយោររចនាមានសមត្ថភាព CSS និង theme.json)
- **System prompt** — ការណែនាំដែលកំណត់កម្រិតសំឡេង, អាទិភាព, និងដែនកំណត់របស់អង់ត៍នោះ
- **Suggestions** — សំណើដែលបានសរសេររួចហើយបង្ហាញនៅក្នុង giao diện chat ដើម្បីជួយអ្នកចាប់ផ្ដើមយ៉ាងរហ័ស

## ការចូលប្រើ Agent Picker

1. បើកបន្ទះ **Gratis AI Agent** នៅក្នុងរបារប្រព័ន្ធគ្រប់គ្រង WordPress។
2. ចុចលើ **agent icon** នៅខាងឆ្វេងបំផុតនៃ header chat (រូបតំណាងនឹងផ្លាស់ប្តូរដើម្បីឆ្លុះបញ្ចាំងពីអង់ត៍ដែលកំពុងដំណើរការ)។
3. **Agent Picker** នឹងបើកជា overlay រូបរាង form-table។ អង់ត៍នីមួយៗត្រូវបានចុះបញ្ជីជាមួយនឹងរូបតំណាង, ឈ្មោះ, និងការពិពណ៌នាខ្លីមួយ។
4. ចុចលើជួរអង់ត៍ណាមួយដើម្បីធ្វើឱ្យវាដំណើរការ។ header chat នឹងធ្វើបច្ចុប្បន្នភាពភ្លាមៗ។

អ្នកក៏អាចផ្លាស់ប្តូរអង់ត៍ក្នុងអំឡុងពេលសន្ទនាបានដែរ — system prompt របស់អង់ត៍ថ្មីនឹងចូលជាធរ Bautista ចាប់ពីសារបន្ទាប់។

## អង់ត៍ដែលមានស្រាប់ចំនួនប្រាំ (The Five Built-in Agents)

### អ្នកសរសេរខ្លឹមសារ (Content Writer)

**ការផ្តោតសំខាន់:** ការបង្កើត និងការកែសម្រួល posts, pages, និង contact forms។

**ឧបករណ៍ដែលអាចប្រើបាន:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**អ្វីដែលវាធ្វើបានល្អ:**
- ការសរសេរ និងបោះពុម្ពផ្សាយអត្ថបទប្លុកពីចំណុចខ្លីៗ ឬគ្រោងការណ៍ (outline)
- ការបង្កើតទំព័រចុះឈ្មោះ (landing pages) ជាច្រើនសម្រាប់គេហទំព័រថ្មី
- ការបង្កើតទម្រង់ទំនាក់ទំនង និងសំណួរផ្សេងៗ (contact and enquiry forms)
- ការកំណត់រូបភាពពិសេស (featured images) លើបណ្តុំអត្ថបទពី URL ឬការស្វែងរក

**គំនិតចាប់ផ្តើម:**
- *សរសេរអត្ថបទប្លុកប្រវែង ៥០០ ពាក្យអំពីអត្ថប្រយោជន៍នៃ WordPress multisite។*
- *បង្កើតទំព័រ អំពីយើង (About), សេវាកម្ម (Services) និងទំព័រទំនាក់ទំនង ហើយបោះពុម្ពផ្សាយវា។*
- *បន្ថែមទម្រង់សួរព័ត៌មានការកក់ (booking enquiry form) ទៅក្នុងទំព័រទំនាក់ទំនង។*

---

### Site Builder (អ្នកបង្កើតគេហទំព័រ)

**ផ្តោតលើ:** ការបង្កើតគេហទំព័រទាំងមូលពីការបញ្ជាតែមួយ។

**ឧបករណ៍ដែលមាន:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**អ្វីដែលវាធ្វើបានល្អ:**
- ការបង្កើតផែនការប្លង់គេហទំព័រច្រើនដំណាក់កាលសម្រាប់ប្រភេទអាជីវកម្មដែលបានពិពណ៌នា។
- ការប្រតិបត្តិគ្រប់ដំណាក់កាលដោយស្វ័យប្រវត្តិ — រួមមាន ស្ថាបត្យកម្ម (structure), មាតិកា (content), ការរុករក (navigation) និងការរចនា (design)។
- ការដោះស្រាយបញ្ហាដែលកើតឡើងនៅពាក់កណ្តាលផែនការ ដោយមិនចាំបាច់មានការអន្តរាគមន៍ដោយដៃ។
- ការដំឡើង plugin ដែលត្រូវបានណែនាំជាផ្នែកមួយនៃការបង្កើតគេហទំព័រ។
- ការបង្កើតទម្រង់ទំនាក់ទំនងដោយផ្ទាល់ពីចំណុចប្រទាក់ឆាត (Superdav AI Agent v1.10.0+)។

**គំនិតចាប់ផ្តើម:**
- *បង្កើតគេហទំព័របង្ហាញរូបថត (photography portfolio site) ជាមួយនឹងប្រភេទ post សម្រាប់ដាក់រូបភាពច្រើន, ទំព័រការកក់, និងទម្រង់ទំនាក់ទំនង។*
- *បង្កើតគេហទំព័រភោជនីយដ្ឋានដែលមានម៉ឺនុយអនឡាញ, ម៉ោងបើកដំណើរការ, និងទម្រង់សួរព័ត៌មានការកក់តុ។*
- *រៀបចំគេហទំព័រប្រឹក្សាផ្នែកឯកជន (freelance consulting site) ដែលមានទំព័រសេវាកម្ម, ផ្នែកបង្ហាញផលការងារ (portfolio section), និងប្លុកអត្ថបទ។*
- *បន្ថែមទម្រង់ទំនាក់ទំនងទៅក្នុងទំព័រទំនាក់ទំនងដោយប្រើ Site Builder។*

---

### Design Studio (ស្ទូឌីយោររចនា)

**ផ្តោតលើ:** ការកែសម្រួលរូបភាពផ្ទាល់ខ្លួន — ពណ៌, អក្ខរាវិរុទ្ធ (typography), CSS និងគំរូប្លុក (block patterns)។

**เครื่องมือที่มีให้ใช้:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**สิ่งที่ทำได้ดี:**
- การนำชุดธีมที่มีชื่อเฉพาะมาใช้ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- การปรับแต่งรูปแบบตัวอักษรและชุดสีทั่วทั้งเว็บไซต์ผ่าน theme.json
- การใส่ CSS ที่กำหนดเองเพื่อเขียนทับสไตล์ตามแบรนด์ของคุณ
- การจับภาพหน้าจอของหน้าเว็บและตรวจสอบปัญหาด้านการออกแบบ

**ข้อเสนอเริ่มต้น:**
- *ลองใช้ preset warm-editorial แล้วตั้งค่าสีหลักเป็น #2d6a4f*
- *ถ่ายภาพหน้าจอของหน้าแรกแล้วบอกฉันว่าคุณจะปรับปรุงส่วนไหนบ้าง*
- *สร้าง block pattern สำหรับ hero ที่นำกลับมาใช้ใหม่ได้ พร้อมรูปพื้นหลังเต็มความกว้างและหัวข้อที่อยู่ตรงกลาง*

---

### Plugin Manager (ตัวจัดการปลั๊กอิน)

**จุดเน้น:** การค้นหา ติดตั้ง และจัดการ WordPress plugins ต่างๆ

**เครื่องมือที่มีให้ใช้:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**สิ่งที่ทำได้ดี:**
- แนะนำปลั๊กอินที่ดีที่สุดสำหรับกรณีการใช้งานที่คุณอธิบาย
- ติดตั้ง ability packs จาก registry (คลัง)
- เรียกดูแคตตาล็อกความสามารถที่มีให้เลือกตามหมวดหมู่ต่างๆ

**ข้อเสนอเริ่มต้น:**
- *ปลั๊กอินที่ดีที่สุดสำหรับไดเรกทอรีสมาชิกคืออะไร?*
- *ติดตั้ง ability pack ของ WooCommerce*
- *แสดง ability packs สำหรับอีคอมเมิร์ซทั้งหมดที่มีอยู่*

---

### Support Assistant (ผู้ช่วยสนับสนุน)

**จุดเน้น:** การตอบคำถามเกี่ยวกับเนื้อหาของเว็บไซต์ การตั้งค่า และการกำหนดค่า WordPress

**เครื่องมือที่มีให้ใช้:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**អ្វីដែលវាធ្វើបានល្អ:**
- ពិនិត្យមើលការកំណត់ និងជម្រើសបច្ចុប្បន្ននៃគេហទំព័រ។
- ពន្យល់ថាប្រភេទ post types, taxonomies, និង menus តើត្រូវបានកំណត់នៅលើគេហទំព័រនោះ។
- ឆ្លើយសំណួរ "ការកំណត់នេះធ្វើអ្វី?" ដោយអានតម្លៃផ្ទាល់។
- បម្រើជាស្រទាប់សម្រាប់ធ្វើរោគវិនិច្ឆ័យតែការអានប៉ុណ្ណោះ មុនពេលធ្វើការផ្លាស់ប្តូរ។

**សំណើចាប់ផ្តើម:**
- *តើ plugin និងការកំណត់អ្វីខ្លះដែលកំពុងដំណើរការនៅលើគេហទំព័រនេះ?*
- *រាយបញ្ជី custom post types ទាំងអស់ដែលបានចុះឈ្មោះនៅលើគេហទំព័រនេះ។*
- *មាន navigation menus អ្វីខ្លះ ហើយពួកវាត្រូវបានកំណត់នៅទីណា?*

---

## ការកែសម្រួល Agents (ភ្នាក់ងារ)

Agent ដែលមានស្រាប់នីមួយៗអាចត្រូវបានពង្រីក ឬជំនួសតាមរយៈ filter ឈ្មោះ `gratis_ai_agent_agents`។

### ការបន្ថែម system prompt ផ្ទាល់ខ្លួនទៅក្នុង agent ដែលមានស្រាប់

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ការចុះឈ្មោះ agent ថ្មី

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

Agent ថ្មីនឹងលេចឡើងនៅក្នុង Agent Picker ជាបន្ទាន់ បន្ទាប់ពីដំណើរការ filter រួច។

### ការដកចេញនូវ agent ដែលមានស្រាប់

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
