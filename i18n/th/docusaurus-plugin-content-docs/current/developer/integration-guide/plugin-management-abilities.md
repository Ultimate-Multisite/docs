---
title: ความสามารถในการจัดการปลั๊กอิน
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# ความสามารถในการจัดการ Plugin

Gratis AI Agent v1.5.0 มาพร้อมกับ **ความสามารถในการจัดการ plugin 7 อย่าง** ที่ผู้ช่วย AI สามารถเรียกใช้ได้ระหว่างการสนทนา ความสามารถเหล่านี้ช่วยให้สามารถควบคุม WordPress plugins ที่ติดตั้งผ่าน [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) ได้ในระดับโปรแกรม

## ภาพรวมความสามารถ (Abilities Overview)

| ความสามารถ | Slug | คำอธิบาย |
|---|---|---|
| List Plugins | `list_plugins` | ส่งรายการ plugin ทั้งหมดใน sandbox store พร้อมสถานะของแต่ละตัว |
| Get Plugin | `get_plugin` | ดึงข้อมูลเมตา (metadata) และซอร์สโค้ดของ plugin ที่ระบุด้วย slug |
| Create Plugin | `create_plugin` | สร้าง plugin ใหม่จากคำอธิบาย และจัดเก็บไว้ใน sandbox |
| Update Plugin | `update_plugin` | แทนที่ซอร์สโค้ดของ plugin ด้วยเวอร์ชันใหม่ |
| Delete Plugin | `delete_plugin` | ลบ plugin ออกจาก sandbox store โดยจะทำการปิดใช้งานก่อนเสมอ |
| Install Plugin | `install_plugin` | นำ plugin ที่อยู่ใน sandbox ไปติดตั้งในไดเรกทอรี plugin ของ WordPress จริง |
| Activate Plugin | `activate_plugin` | เปิดใช้งาน plugin ที่อยู่ใน sandbox ภายในสภาพแวดล้อม sandbox ของ wp-env |

## Plugin Installer API

Plugin installer จะจัดการการดำเนินการกับระบบไฟล์เมื่อมีการติดตั้งหรือลบ plugin พฤติกรรมหลัก ๆ มีดังนี้:

- **การตรวจสอบ Path**: จะมีการตรวจสอบ path ของ plugin ทั้งหมดเทียบกับไดเรกทอรี plugin ที่อนุญาตก่อนที่จะมีการเขียนไฟล์ใด ๆ การพยายามเข้าถึงไดเรกทอรีนอกที่กำหนด (Directory traversal) จะถูกปฏิเสธ
- **การติดตั้งหลายไฟล์**: plugin หนึ่งตัวอาจประกอบด้วยไฟล์หลายไฟล์ ตัวติดตั้งจะสร้างไดเรกทอรีของ plugin และเขียนไฟล์ทั้งหมดแบบอะตอมมิก (atomically)
- **การอัปเดต**: ทำการแทนที่ไฟล์ plugin ที่มีอยู่ จะทำการปิดใช้งาน plugin ก่อนเขียนไฟล์ เพื่อหลีกเลี่ยงข้อผิดพลาดที่เกิดจากสถานะที่ไม่สมบูรณ์ (partial-state errors)
- **การลบด้วย slug**: ค้นหาไดเรกทอรีของ plugin ตาม slug, ปิดใช้งานในทุกไซต์ จากนั้นจึงลบไดเรกทอรีนั้นทิ้ง

### การลงทะเบียน Install Handler แบบกำหนดเอง

คุณสามารถเชื่อมต่อกับวงจรชีวิตการติดตั้ง (install lifecycle) ได้โดยใช้ action `gratis_ai_plugin_installer_before_install` และ `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: ชื่อไดเรกทอรีของ plugin
    // $files: associative array ของ relative path => file content
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry

ความสามารถต่าง ๆ จะถูกลงทะเบียนผ่าน **plugin ecosystem registry** registry นี้จะจับคู่ slug ของความสามารถเข้ากับคลาส handler และเปิดเผยให้ tool dispatcher ของ AI agent ใช้งาน

ในการลงทะเบียนความสามารถในการจัดการ plugin แบบกำหนดเอง:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

คลาสความสามารถของคุณจะต้อง implement `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner Integration

ความสามารถ `create_plugin` และ `update_plugin` จะรัน **HookScanner** กับโค้ดที่สร้างขึ้นใหม่โดยอัตโนมัติ HookScanner จะส่งรายการ action และ filter hooks ของ WordPress ที่ plugin นั้นลงทะเบียนไว้

ในการดึงผลลัพธ์ของ HookScanner ด้วยโปรแกรม:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner จะข้ามไดเรกทอรี `vendor/` และ `node_modules/` โดยอัตโนมัติ

## Async Job Architecture

การดำเนินการกับ plugin ที่ใช้เวลานาน (เช่น การสร้าง, การติดตั้ง) จะถูกส่งออกไปเป็น **async jobs** พร้อมการติดตามความคืบหน้าแบบสด (live progress tracking) ส่วนติดต่อผู้ใช้แชท AI จะทำการสอบถามสถานะความคืบหน้า (poll) และสตรีมการอัปเดตสถานะไปยังผู้ใช้:

1. **Dispatch** — ความสามารถจะสร้าง async job และส่งคืน job ID
2. **Poll** — agent จะทำการสอบถาม `gratis_ai_job_status($job_id)` ทุก ๆ 2 วินาที
3. **Stream** — ข้อความความคืบหน้าระหว่างทางจะถูกส่งไปยังเธรดแชท
4. **Complete** — ผลลัพธ์สุดท้าย (สำเร็จหรือข้อผิดพลาด) จะถูกส่งคืนและแสดงผล

ในการเชื่อมต่อกับเหตุการณ์วงจรชีวิตของ job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
